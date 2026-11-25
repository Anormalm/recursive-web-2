import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {game} from './game-fixture.mjs';
const setup=()=>{const g=game();g.ctx.now=Date.parse('2026-11-11');return g;};
const advance=(g,n)=>{assert.ok(g.t.mutate(s=>{s.solved=Object.fromEntries(g.D.steps.slice(0,n).map(step=>[step.id,true]));}));};
const clickScope=button=>({querySelector:()=>null,querySelectorAll:selector=>selector==='[data-scene][data-act="commit-story"]'?[button]:[]});
test('one actual decision save handler records the authored basis without citation input',()=>{
 const g=setup();advance(g,2);const scene=g.t.pendingScene();assert.ok(g.t.reviewStory(scene.id));const epoch=g.t.getEpoch();let click;
 g.t.getStation().storyDrafts[scene.id]={option:'held'};
 const button={dataset:{scene:scene.id,epoch:String(epoch)},addEventListener:(kind,fn)=>{if(kind==='click')click=fn;}};
 g.t.wire(clickScope(button));assert.equal(typeof click,'function');click();
 assert.deepEqual(Array.from(g.t.getState().story.records[scene.id].citations),Array.from(scene.fixedSources));
 const save=g.t.encodeSave();click();assert.equal(g.t.encodeSave(),save);
 assert.doesNotMatch(g.t.storyBody(scene),/checkbox|data-story-citation/);
 assert.match(g.t.storyBody(scene),/data-disclosure="sources:c1-disposition"/);
 assert.doesNotMatch(g.t.storyDock(scene),/data-act="commit-story"/);
});
test('all authored source sets are bounded and malformed sets fail closed',()=>{
 const g=setup(),story=g.ctx.window.ZEPHYR_STORY;
 for(const scene of story.scenes){assert.ok(scene.fixedSources.length>=1&&scene.fixedSources.length<=2);assert.equal(new Set(scene.fixedSources).size,scene.fixedSources.length);assert.ok(scene.fixedSources.every(id=>scene.sources.includes(id)));}
 for(const value of [undefined,[],['unknown'],['nHandover','nHandover'],['nHandover','aRegistry','nCorrection']]){const broken=JSON.parse(JSON.stringify(story));broken.scenes[0].fixedSources=value;const b=game({brokenStory:broken});assert.equal(b.t.canInvestigate(0),false);assert.doesNotThrow(()=>b.t.finaleView());}
});
test('binary story decisions have no default and require an explicitly opened view and selected option',()=>{
 const g=setup();advance(g,2);
 const scene=g.t.pendingScene(),epoch=g.t.getEpoch();assert.equal(scene.id,'c1-disposition');
 assert.equal((g.t.storyBody(scene).match(/type="radio"/g)||[]).length,2);assert.doesNotMatch(g.t.storyBody(scene),/checked/);
 assert.equal(g.t.commitStoryEntry(scene.id,'held',epoch),false);assert.equal(g.t.getEpoch(),epoch);
 assert.ok(g.t.reviewStory(scene.id));assert.equal(g.t.commitStoryEntry(scene.id,undefined,epoch),false);assert.equal(g.t.getEpoch(),epoch);
 assert.ok(g.t.commitStoryEntry(scene.id,'held',epoch));assert.equal(g.t.getState().story.records[scene.id].option,'held');
 assert.equal(g.t.pendingScene(),null);assert.equal(g.t.commitStoryEntry(scene.id,'provisional',epoch),false);
});
test('a story selection clears stale choice feedback without committing',()=>{
 const g=setup();advance(g,2);let submit,select;
 const scene=g.t.pendingScene();g.t.reviewStory(scene.id);
 const button={dataset:{scene:scene.id,epoch:String(g.t.getEpoch())},addEventListener:(kind,fn)=>{if(kind==='click')submit=fn;}},radio={value:'held',addEventListener:(kind,fn)=>{if(kind==='change')select=fn;}};
 const scope={querySelector:()=>null,querySelectorAll:selector=>selector==='[data-scene][data-act="commit-story"]'?[button]:selector==='input[name="story-position"]'?[radio]:[]};
 g.t.wire(scope);submit();assert.match(g.t.storyDock(scene),/请先选一项/);const save=g.t.encodeSave();select();assert.doesNotMatch(g.t.storyDock(scene),/请先选一项/);assert.equal(g.t.encodeSave(),save);assert.equal(g.t.getStation().storyDrafts[scene.id].option,'held');
});
test('drawer keyboard order includes native history disclosures',()=>{
 const g=setup();advance(g,20);assert.match(g.t.evidencePicker(),/打开材料/);
 const source=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');assert.match(source,/modal\.querySelectorAll\('button:not\(\[disabled\]\),input:not\(\[disabled\]\),textarea:not\(\[disabled\]\),a\[href\],summary,\[tabindex="0"\]'/);
});
test('valid historic citations survive normalization rather than being replaced',()=>{
 const g=setup(),scene=g.ctx.window.ZEPHYR_STORY.scenes[0];
 g.t.setState({v:1,stepUnlocked:1,story:{rev:1,records:{[scene.id]:{option:'record',citations:['aRegistry']}}}});const old=g.t.encodeSave();
 g.t.setState(g.t.decodeSave(old));g.t.mutate(s=>s.notes='retained');assert.deepEqual(Array.from(g.t.getState().story.records['c1-assignment'].citations),['aRegistry']);
 assert.equal(g.t.commitScene(scene.id,'record',['nHandover']),false);
 advance(g,2);assert.match(g.t.storyBody(g.t.pendingScene(),true),/所附出处不等于逐份核实/);
});
test('finding stays on its original and associated correspondence requires deliberate opening',()=>{
 const g=setup();g.t.activateFile('registry');g.t.complete('registry');
 assert.equal(g.t.getStation().mode,'original');assert.equal(g.t.getStation().receiptOwner,null);
 assert.doesNotMatch(g.t.recordBody('registry'),/class="interlude"|data-scene="c1-reconcile"/);assert.ok(g.t.setMode('receipt'));
 const html=g.t.recordBody('registry');assert.equal((html.match(/class="interlude"/g)||[]).length,1);assert.doesNotMatch(html,/data-scene="c1-reconcile"/);
 assert.equal(g.t.pendingScene(),null);assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'registry');assert.equal(g.t.getState().stepUnlocked,1);
});
test('completion and recovered-document return do not rewrite the selected route',()=>{
 const g=setup();g.t.activateFile('registry');g.ctx.location.pathname='/recursive-web-2/index.html';g.ctx.location.search='?rec=registry&view=original&lang=en';g.ctx.location.hash='#reading';
 g.t.complete('registry');const route=g.ctx.replaced;assert.ok(g.t.reviewStory('c1-reconcile'));assert.ok(g.t.resumeStory());
 assert.equal(g.ctx.replaced,route);assert.equal(g.ctx.location.search,'?rec=registry&view=original&lang=en');assert.equal(g.ctx.location.hash,'#reading');
 assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'registry');assert.equal(g.t.getStation().mode,'original');
});
test('resuming a recovered document retains the selected prior file without changing progress or storage',()=>{
 const g=setup();advance(g,6);g.t.activateFile('registry');g.ctx.location.pathname='/recursive-web-2/index.html';g.ctx.location.search='?rec=registry&view=original&lang=zh';
 assert.ok(g.t.reviewStory('c2-recordings'));const before=g.t.encodeSave(),stored=g.storage.get('zephyr-zero-arg-v2'),route=g.ctx.replaced;
 assert.ok(g.t.resumeStory());assert.equal(g.ctx.replaced,route);assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'registry');assert.equal(g.t.getStation().mode,'original');
 assert.equal(g.t.encodeSave(),before);assert.equal(g.storage.get('zephyr-zero-arg-v2'),stored);
});
test('saving a consequential response never takes over the selected released original',()=>{
 const g=setup();advance(g,2);g.t.activateFile('institution');g.ctx.location.search='?rec=institution&lang=en';assert.ok(g.t.reviewStory('c1-disposition'));
 const route=g.ctx.replaced;assert.ok(g.t.commitStoryEntry('c1-disposition','held',g.t.getEpoch()));assert.equal(g.t.pendingScene(),null);
 assert.equal(g.t.getStation().mode,'story');assert.equal(g.t.getStation().storyReview,'c1-disposition');assert.equal(g.ctx.window.ZephyrUI.getModel().currentId,'institution');assert.equal(g.ctx.replaced,route);
 assert.equal(g.t.canInvestigate(2),true);assert.ok(g.t.resumeStory());assert.equal(g.t.getStation().mode,'original');
});
test('forward focus uses the current heading or the file title, without saving',()=>{
 const g=setup();let focused=0;const title={focus:options=>{assert.equal(options.preventScroll,true);focused++;}};g.ctx.document.querySelector=selector=>selector==='.station-top h1'?title:null;
 const save=g.t.encodeSave();g.t.focusCurrentTask();assert.equal(title.tabIndex,-1);assert.equal(focused,1);
 const heading={focus:()=>{focused++;}};g.ctx.document.querySelector=selector=>selector==='#task-content h2, #finale-body h2'?heading:title;g.t.focusCurrentTask();assert.equal(heading.tabIndex,-1);assert.equal(focused,2);assert.equal(g.t.encodeSave(),save);
});
test('release wait is respected after an optional consequential response',()=>{
 const g=setup();g.ctx.now=g.t.releaseTime(2)-1;g.t.activateFile('registry');g.t.complete('registry');g.t.activateFile('institution');g.t.complete('institution');
 assert.ok(g.t.reviewStory('c1-disposition'));assert.ok(g.t.commitStoryEntry('c1-disposition','held',g.t.getEpoch()));assert.equal(g.t.pendingScene(),null);assert.ok(g.t.resumeStory());assert.equal(g.t.getStation().mode,'original');
 assert.equal(g.t.canInvestigate(2),false);assert.doesNotMatch(g.t.dockBody(g.D.steps[1]),/next-release|data-act="nav"/);assert.match(g.t.recordBody('namecode'),/尚未到期开放/);assert.equal(g.t.sourceAvailable('nName'),false);
});
test('default originals retain source utilities and instruments require deliberate mode selection',()=>{
 const g=setup();g.t.activateFile('registry');assert.match(g.t.stationControls(g.D.steps[0]),/data-panel="evidence"/);advance(g,6);g.t.activateFile('dial');
 assert.equal(g.t.getStation().mode,'original');const controls=g.t.stationControls(g.D.steps[6]);assert.equal((controls.match(/<button/g)||[]).length,2);assert.match(controls,/data-mode="operate"/);assert.doesNotMatch(controls,/notes|receipt|data-mode="story"/);
 assert.ok(g.t.setMode('operate'));assert.match(g.t.stationControls(g.D.steps[6]),/data-mode="original"/);
});
test('history exposes reached recovered documents and sources without chapter scaffolding',async()=>{
 const g=setup();advance(g,20);const crypto=g.ctx.crypto;g.ctx.crypto={subtle:{digest:async(algorithm,input)=>{assert.equal(algorithm,'SHA-256');assert.equal(new TextDecoder().decode(input),'SYNTHETICRECEIPT');return Uint8Array.from(Buffer.from(g.C.pickup.sealSha256,'hex')).buffer;}}};g.t.mutate(s=>s.receivedSeal='synthetic-receipt');g.t.maybeAutoSeal();await new Promise(resolve=>setImmediate(resolve));g.ctx.crypto=crypto;const before=g.t.encodeSave(),history=g.t.archiveBody();assert.doesNotMatch(history,/chapter|chapter-scenes|history-count|待记录|需确认|未完成/);
 for(const scene of g.ctx.window.ZEPHYR_STORY.scenes.filter(s=>s.phase!=='capstone'))assert.match(history,new RegExp('data-scene="'+scene.id+'"'));
 for(const id of Object.keys(g.ctx.window.ZEPHYR_STORY.exhibits)){assert.match(g.t.evidencePicker(),new RegExp('data-evidence-id="'+id+'"'));assert.ok(g.t.evidenceBody(id).includes(g.ctx.window.ZEPHYR_STORY.exhibits[id].title.zh));}
 assert.equal(g.t.encodeSave(),before);g.ctx.now=g.t.releaseTime(6)-1;assert.doesNotMatch(g.t.archiveBody(),/data-scene="c6-audit"/);assert.doesNotMatch(g.t.evidencePicker(),/data-evidence-id="nLastNote"/);
});
test('disclosure open state and summary focus survive a repaint without saving',()=>{
 const g=setup();let restored=0,callback;const old={dataset:{disclosure:'sources:c1-assignment'},open:true},next={dataset:{disclosure:'sources:c1-assignment'},open:false,isConnected:true,addEventListener:(kind,fn)=>{if(kind==='toggle')callback=fn;}};
 const summary=parent=>({tagName:'SUMMARY',parentElement:parent,hasAttribute:()=>false,getAttribute:()=>null,focus:()=>{restored++;}}),previous=summary(old),replacement=summary(next);g.ctx.document.activeElement=previous;
 let painted=false;const body={contains:el=>el===previous,querySelector:()=>null,querySelectorAll:selector=>selector==='details[data-disclosure]'?[painted?next:old]:selector==='button,input,textarea,a,summary,[tabindex]'?[replacement]:[],set innerHTML(value){painted=true;}};
 const before=g.t.encodeSave();g.t.replaceView(body,'new prose');assert.equal(next.open,true);assert.equal(restored,1);assert.equal(g.t.encodeSave(),before);next.open=false;callback();assert.equal(g.t.getStation().disclosures['sources:c1-assignment'],false);
});
