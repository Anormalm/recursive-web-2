import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {game,resolveScenes} from './game-fixture.mjs';
const setup=()=>{const g=game();g.ctx.now=Date.parse('2026-11-11');return g;};
const advance=(g,n)=>{resolveScenes(g);while(g.t.getState().stepUnlocked<n){g.t.complete(g.D.steps[g.t.getState().stepUnlocked].id);resolveScenes(g);}};
const clickScope=button=>({querySelector:()=>null,querySelectorAll:selector=>selector==='[data-scene][data-act="commit-story"]'?[button]:[]});
test('one actual Continue handler records the authored basis without citation input',()=>{
 const g=setup(),scene=g.t.pendingScene(),epoch=g.t.getEpoch();let click;
 const button={dataset:{scene:scene.id,epoch:String(epoch)},addEventListener:(kind,fn)=>{if(kind==='click')click=fn;}};
 g.t.wire(clickScope(button));assert.equal(typeof click,'function');click();
 assert.deepEqual(Array.from(g.t.getState().story.records[scene.id].citations),Array.from(scene.fixedSources));
 const save=g.t.encodeSave();click();assert.equal(g.t.encodeSave(),save);
 assert.doesNotMatch(g.t.storyBody(scene),/checkbox|data-story-citation/);
 assert.match(g.t.storyBody(scene),/data-disclosure="sources:c1-assignment"/);
});
test('all authored source sets are bounded and malformed sets fail closed',()=>{
 const g=setup(),story=g.ctx.window.ZEPHYR_STORY;
 for(const scene of story.scenes){assert.ok(scene.fixedSources.length>=1&&scene.fixedSources.length<=2);assert.equal(new Set(scene.fixedSources).size,scene.fixedSources.length);assert.ok(scene.fixedSources.every(id=>scene.sources.includes(id)));}
 for(const value of [undefined,[],['unknown'],['nHandover','nHandover'],['nHandover','aRegistry','nCorrection']]){const broken=JSON.parse(JSON.stringify(story));broken.scenes[0].fixedSources=value;const b=game({brokenStory:broken});assert.equal(b.t.canInvestigate(0),false);assert.doesNotThrow(()=>b.t.finaleView());}
});
test('binary story decisions have no default and require a selected option',()=>{
 const g=setup();resolveScenes(g);g.t.complete('registry');resolveScenes(g);g.t.complete('institution');
 const scene=g.t.pendingScene(),epoch=g.t.getEpoch();assert.equal(scene.id,'c1-disposition');
 assert.equal((g.t.storyBody(scene).match(/type="radio"/g)||[]).length,2);assert.doesNotMatch(g.t.storyBody(scene),/checked/);
 assert.equal(g.t.commitStoryEntry(scene.id,undefined,epoch),false);assert.equal(g.t.getEpoch(),epoch);
 assert.ok(g.t.commitStoryEntry(scene.id,'held',epoch));assert.equal(g.t.getState().story.records[scene.id].option,'held');
 assert.equal(g.t.pendingScene().id,'c2-worksheet');assert.equal(g.t.commitStoryEntry(scene.id,'provisional',epoch),false);
});
test('a story selection clears stale choice feedback without committing',()=>{
 const g=setup();resolveScenes(g);g.t.complete('registry');resolveScenes(g);g.t.complete('institution');let submit,select;
 const scene=g.t.pendingScene(),button={dataset:{scene:scene.id,epoch:String(g.t.getEpoch())},addEventListener:(kind,fn)=>{if(kind==='click')submit=fn;}},radio={value:'held',addEventListener:(kind,fn)=>{if(kind==='change')select=fn;}};
 const scope={querySelector:()=>null,querySelectorAll:selector=>selector==='[data-scene][data-act="commit-story"]'?[button]:selector==='input[name="story-position"]'?[radio]:[]};
 g.t.wire(scope);submit();assert.match(g.t.storyDock(scene),/请先选一项/);const save=g.t.encodeSave();select();assert.doesNotMatch(g.t.storyDock(scene),/请先选一项/);assert.equal(g.t.encodeSave(),save);assert.equal(g.t.getStation().storyDrafts[scene.id].option,'held');
});
test('drawer keyboard order includes native history disclosures',()=>{
 const g=setup();advance(g,20);assert.match(g.t.evidencePicker(),/打开材料/);
 const source=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');assert.match(source,/modal\.querySelectorAll\('button:not\(\[disabled\]\),input:not\(\[disabled\]\),textarea:not\(\[disabled\]\),a\[href\],summary,\[tabindex="0"\]'/);
});
test('valid historic citations survive normalization rather than being replaced',()=>{
 const g=setup();assert.ok(g.t.commitScene('c1-assignment','record',['aRegistry']));const old=g.t.encodeSave();
 g.t.setState(g.t.decodeSave(old));g.t.mutate(s=>s.notes='retained');assert.deepEqual(Array.from(g.t.getState().story.records['c1-assignment'].citations),['aRegistry']);
 assert.match(g.t.storyBody(g.ctx.window.ZEPHYR_STORY.scenes[0],true),/随附出处不代表/);
});
test('fresh receipt shares a scene surface and last scene activates the frontier',()=>{
 const g=setup();g.t.activateFile('registry');resolveScenes(g);g.t.complete('registry');
 assert.equal(g.t.getStation().mode,'story');assert.equal(g.t.getStation().receiptOwner,'registry');
 const html=g.t.recordBody('registry');assert.equal((html.match(/class="interlude"/g)||[]).length,1);assert.match(html,/data-scene="c1-reconcile"/);
 const scene=g.t.pendingScene();assert.ok(g.t.commitStoryEntry(scene.id,undefined,g.t.getEpoch()));
 assert.equal(g.t.getStation().receiptOwner,null);assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'institution');assert.equal(g.t.getStation().mode,'original');
});
test('scene handoff updates the route so reload does not return to the old receipt',()=>{
 const g=setup();g.t.activateFile('registry');resolveScenes(g);g.t.complete('registry');g.ctx.location.pathname='/recursive-web-2/index.html';g.ctx.location.search='?rec=registry&view=original&lang=en';g.ctx.location.hash='#reading';
 const scene=g.t.pendingScene(),epoch=g.t.getEpoch();assert.ok(g.t.commitStoryEntry(scene.id,undefined,epoch));assert.equal(g.ctx.replaced[2],'/recursive-web-2/index.html?rec=institution&lang=en#reading');assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'institution');
 const route=g.ctx.replaced;assert.equal(g.t.commitStoryEntry(scene.id,undefined,epoch),false);assert.equal(g.ctx.replaced,route);
});
test('resuming a prior file updates the route without changing progress or durable storage',()=>{
 const g=setup();advance(g,6);g.t.activateFile('registry');g.ctx.location.pathname='/recursive-web-2/index.html';g.ctx.location.search='?rec=registry&view=original&lang=zh';const before=JSON.parse(JSON.stringify(g.t.getState())),stored=g.storage.get('zephyr-zero-arg-v1');
 assert.ok(g.t.resumeStory());assert.equal(g.ctx.replaced[2],'/recursive-web-2/index.html?rec=dial&lang=zh');assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'dial');assert.equal(g.t.getStation().mode,'operate');const after=JSON.parse(JSON.stringify(g.t.getState()));assert.equal(after.current,6);after.current=before.current;assert.deepEqual(after,before);assert.equal(g.storage.get('zephyr-zero-arg-v1'),stored);
});
test('consecutive chapter-entry scenes keep the reload route at the released frontier',()=>{
 const g=setup();g.t.activateFile('registry');resolveScenes(g);g.t.complete('registry');resolveScenes(g);g.t.activateFile('institution');g.t.complete('institution');g.ctx.location.search='?rec=institution&lang=en';
 assert.ok(g.t.commitStoryEntry('c1-disposition','held',g.t.getEpoch()));assert.equal(g.t.pendingScene().id,'c2-worksheet');assert.equal(g.t.getStation().mode,'story');assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'namecode');assert.equal(new URLSearchParams(g.ctx.replaced[2].split('?')[1]).get('rec'),'namecode');assert.equal(g.t.canInvestigate(2),false);
});
test('forward focus uses the current heading or the file title, without saving',()=>{
 const g=setup();let focused=0;const title={focus:options=>{assert.equal(options.preventScroll,true);focused++;}};g.ctx.document.querySelector=selector=>selector==='.station-top h1'?title:null;
 const save=g.t.encodeSave();g.t.focusCurrentTask();assert.equal(title.tabIndex,-1);assert.equal(focused,1);
 const heading={focus:()=>{focused++;}};g.ctx.document.querySelector=selector=>selector==='#task-content h2, #finale-body h2'?heading:title;g.t.focusCurrentTask();assert.equal(heading.tabIndex,-1);assert.equal(focused,2);assert.equal(g.t.encodeSave(),save);
});
test('chapter wait is respected after the last explicit scene action',()=>{
 const g=setup();g.ctx.now=g.t.releaseTime(2)-1;g.t.activateFile('registry');resolveScenes(g);g.t.complete('registry');resolveScenes(g);g.t.complete('institution');
 assert.ok(g.t.commitStoryEntry('c1-disposition','held',g.t.getEpoch()));assert.equal(g.t.pendingScene(),null);assert.equal(g.t.getStation().mode,'receipt');
 assert.equal(g.t.canInvestigate(2),false);assert.match(g.t.dockBody(g.D.steps[1]),/next-release/);assert.equal(g.t.sourceAvailable('nName'),false);
});
test('default story chrome is empty and instrument source toggle remains contextual',()=>{
 const g=setup();g.t.activateFile('registry');assert.equal(g.t.stationControls(g.D.steps[0]),'');advance(g,6);g.t.activateFile('dial');
 const controls=g.t.stationControls(g.D.steps[6]);assert.equal((controls.match(/<button/g)||[]).length,2);assert.match(controls,/data-mode="original"/);assert.doesNotMatch(controls,/notes|receipt|data-mode="story"/);
 assert.ok(g.t.setMode('original'));assert.match(g.t.stationControls(g.D.steps[6]),/data-mode="operate"/);
});
test('chapter history is collapsed and exposes all reached recovered exhibits',()=>{
 const g=setup();advance(g,20);const before=g.t.encodeSave(),history=g.t.archiveBody();assert.equal((history.match(/<details/g)||[]).length,6);assert.doesNotMatch(history,/<details[^>]*\bopen/);
 for(const id of Object.keys(g.ctx.window.ZEPHYR_STORY.exhibits)){assert.match(history,new RegExp('data-ev="'+id+'"'));assert.match(g.t.evidencePicker(),new RegExp('data-evidence-id="'+id+'"'));assert.ok(g.t.evidenceBody(id).includes(g.ctx.window.ZEPHYR_STORY.exhibits[id].title.zh));}
 assert.equal(g.t.encodeSave(),before);g.ctx.now=g.t.releaseTime(6)-1;assert.doesNotMatch(g.t.archiveBody(),/data-ev="nLastNote"/);
});
test('disclosure open state and summary focus survive a repaint without saving',()=>{
 const g=setup();let restored=0,callback;const old={dataset:{disclosure:'sources:c1-assignment'},open:true},next={dataset:{disclosure:'sources:c1-assignment'},open:false,isConnected:true,addEventListener:(kind,fn)=>{if(kind==='toggle')callback=fn;}};
 const summary=parent=>({tagName:'SUMMARY',parentElement:parent,hasAttribute:()=>false,getAttribute:()=>null,focus:()=>{restored++;}}),previous=summary(old),replacement=summary(next);g.ctx.document.activeElement=previous;
 let painted=false;const body={contains:el=>el===previous,querySelector:()=>null,querySelectorAll:selector=>selector==='details[data-disclosure]'?[painted?next:old]:selector==='button,input,textarea,a,summary,[tabindex]'?[replacement]:[],set innerHTML(value){painted=true;}};
 const before=g.t.encodeSave();g.t.replaceView(body,'new prose');assert.equal(next.open,true);assert.equal(restored,1);assert.equal(g.t.encodeSave(),before);next.open=false;callback();assert.equal(g.t.getStation().disclosures['sources:c1-assignment'],false);
});
