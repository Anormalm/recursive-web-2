import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {game,mountReader} from './game-fixture.mjs';
const KEY='zephyr-zero-arg-v2',now=Date.parse('2026-11-25');
const setup=options=>game({now,...options}),plain=x=>JSON.parse(JSON.stringify(x));
const control=dataset=>{const handlers={};return {dataset,handlers,addEventListener:(event,fn)=>handlers[event]=fn};};
const scopeFor=(selectors={},lists={})=>({querySelector:s=>selectors[s]||null,querySelectorAll:s=>lists[s]||[]});
const scene=(g,id)=>g.ctx.window.ZEPHYR_STORY.scenes.find(s=>s.id===id);
async function ready(g){
 g.ctx.crypto={subtle:{digest:async()=>Uint8Array.from(Buffer.from(g.C.pickup.sealSha256,'hex')).buffer}};
 g.t.mutate(s=>{s.receivedSeal='synthetic local receipt';});g.t.maybeAutoSeal();await new Promise(r=>setImmediate(r));
 for(const s of g.D.steps.filter(s=>!['dropcoords','masterkey','judgment'].includes(s.id)))assert.ok(g.t.complete(s.id),s.id);
 assert.ok(g.t.complete('masterkey'));assert.ok(g.t.complete('judgment'));
}

test('fresh original opens directly without onboarding, progress or durable writes',()=>{
 const g=setup({search:'?lang=en',pathname:'/recursive-web-2/index.html',hash:'#reading'});mountReader(g);const save=g.t.encodeSave();g.t.init();
 assert.equal(g.t.uiModel().currentId,'registry');assert.equal(g.t.getStation().mode,'original');assert.match(g.elements['task-content'].innerHTML,/DEVICE REGISTRY/);assert.doesNotMatch(g.elements['task-content'].innerHTML,/intro-letter|story-scene|data-act="start/);assert.equal(g.t.encodeSave(),save);assert.equal(g.storage.has(KEY),false);assert.ok(g.t.canInvestigate(1));assert.ok(g.t.canInvestigate(17));
});
test('completion keeps original and route selected with no successor or universal dock',()=>{
 const g=setup({search:'?rec=institution&lang=en',pathname:'/index.html'});mountReader(g);g.t.init();const route=g.ctx.replaced;assert.ok(g.t.complete('institution'));
 assert.equal(g.t.uiModel().currentId,'institution');assert.equal(g.t.getStation().mode,'original');assert.equal(g.ctx.replaced,route);assert.equal(g.t.dockBody(g.D.steps[1]),'');assert.doesNotMatch(g.t.stationControls(g.D.steps[1]),/data-act="reference"|Filed|Continue/);assert.match(g.elements['task-content'].innerHTML,/ANNEX LETTERHEAD/);
 const reload=setup({storage:new Map(g.storage),search:'?rec=institution'});mountReader(reload);reload.t.init();assert.equal(reload.t.getStation().mode,'original');assert.equal(reload.t.uiModel().currentId,'institution');assert.equal(reload.t.getState().stepUnlocked,0);
});
test('released archive routes do not require previous findings, unknown routes use ordinary reading',()=>{
 for(const rec of ['provenance','annex','judgment']){const g=setup({search:'?rec='+rec});mountReader(g);g.t.init();assert.equal(g.t.uiModel().currentId,rec);assert.equal(g.t.getState().stepUnlocked,0);if(rec==='judgment')assert.doesNotMatch(g.elements['task-content'].innerHTML,/SAMPLE INDEPENDENCE: FAILED|name="claim/);}
 const g=setup({search:'?rec=unknown'});mountReader(g);g.t.init();assert.equal(g.t.uiModel().currentId,'registry');const archive=g.t.archiveBody();for(const s of g.D.steps)assert.ok(archive.includes(`data-rec="${s.id}"`));assert.doesNotMatch(archive,/chapter-count|chapter-scenes|data-act="reference"|\/\s*20/);
});
test('contextual actions live with their documents rather than a quiz footer',()=>{
 const g=setup();g.t.activateFile('institution');assert.match(g.t.recordBody('institution'),/document-action/);assert.match(g.t.recordBody('institution'),/机构著录/);assert.equal(g.t.dockBody(g.D.steps[1]),'');
 g.t.activateFile('reels');assert.doesNotMatch(g.t.recordBody('reels'),/data-act="compare-wave"/);g.t.setMode('operate');assert.match(g.t.recordBody('reels'),/data-act="compare-wave"/);assert.equal(g.t.dockBody(g.D.steps[5]),'');
});
test('all ordinary recovered notes are passive and cannot create signatures',async()=>{
 const g=setup();await ready(g);g.t.mutate(s=>{s.capstoneOk=true;});g.t.activateFile('judgment');const before=g.t.encodeSave();const notes=g.ctx.window.ZEPHYR_STORY.scenes.filter(s=>s.options.length===1);assert.equal(notes.length,15);
 for(const s of notes){assert.ok(g.t.reviewStory(s.id));assert.doesNotMatch(g.t.storyBody(s),/type="radio"|story-purpose/);assert.doesNotMatch(g.t.storyDock(s),/commit-story|Continue/);assert.equal(g.t.commitScene(s.id,s.options[0].id,s.fixedSources),false);g.t.resumeStory();assert.equal(g.t.getStation().mode,'original');assert.equal(g.t.uiModel().currentId,'judgment');assert.equal(g.t.encodeSave(),before);}
});
test('three decisions can be committed independently without changing technical selection',()=>{
 const g=setup();for(const id of ['registry','institution','dial','tracks','parity','annex','recursion','provenance','triangulate'])g.t.complete(id);g.t.activateFile('building');
 for(const [id,option] of [['c5-scope','referral'],['c3-attribution','role'],['c1-disposition','provisional']]){const s=scene(g,id);assert.ok(g.t.commitScene(id,option,s.fixedSources));assert.equal(g.t.uiModel().currentId,'building');assert.equal(g.t.getStation().mode,'original');const before=g.t.encodeSave();assert.equal(g.t.commitScene(id,s.options.find(o=>o.id!==option).id,s.fixedSources),false);assert.equal(g.t.encodeSave(),before);}
 assert.equal(Object.keys(g.t.getState().story.records).length,3);assert.equal(g.t.getState().solved.building,undefined);
});
test('all eight endings use real unselected choices and retain identical factual report',async()=>{
 const factual=new Set();for(const correction of ['held','provisional'])for(const attribution of ['named','role'])for(const scope of ['report','referral']){
 const g=setup();await ready(g);g.t.mutate(s=>{s.capstoneOk=true;});g.t.activateFile('judgment');
 for(const [id,option] of [['c5-scope',scope],['c1-disposition',correction],['c3-attribution',attribution]]){const s=scene(g,id);assert.ok(g.t.reviewStory(id));assert.equal((g.t.storyBody(s).match(/type="radio"/g)||[]).length,2);assert.doesNotMatch(g.t.storyBody(s),/ checked/);
 const radio=control({});radio.value=option;const button=control({scene:id,epoch:String(g.t.getEpoch())});g.t.wire(scopeFor({}, {'input[name="story-position"]':[radio],'[data-scene][data-act="commit-story"]':[button]}));const before=g.t.encodeSave();radio.handlers.change();assert.equal(g.t.encodeSave(),before);button.handlers.click();assert.equal(g.t.getState().story.records[id].option,option);assert.deepEqual(Array.from(g.t.getState().story.records[id].citations),Array.from(s.fixedSources));g.t.resumeStory();}
 assert.equal(g.t.campaignClosed(),true);factual.add(g.t.finaleBody());assert.ok(g.t.finaleView().includes(g.t.finaleBody()));}assert.equal(factual.size,1);
});
test('actual capstone handler works after graph convergence with no ordinary signatures',async()=>{
 const g=setup();await ready(g);assert.equal(g.t.canUnseal(),true);assert.deepEqual(plain(g.t.getState().story.records),{});assert.match(g.t.finaleView(),/id="capstone-form"/);
 g.ctx.crypto={subtle:{digest:async()=>Uint8Array.from(Buffer.from(g.t.finaleCapstoneHash,'hex')).buffer}};const field=control({});field.value='synthetic capstone';const form=control({});g.t.wire(scopeFor({'#capstone-input':field,'#capstone-form':form}));await form.handlers.submit({preventDefault(){}});assert.equal(g.t.getState().capstoneOk,true);assert.equal(g.t.campaignClosed(),false);assert.deepEqual(plain(g.t.getState().story.records),{});
});
test('explicit decision view, current epoch and released sources remain required',()=>{
 const g=setup();for(const id of ['registry','institution','dial','tracks','parity'])g.t.complete(id);g.t.activateFile('building');g.t.reviewStory('c1-disposition');const before=g.t.encodeSave();assert.equal(g.t.commitStoryEntry('c3-attribution','named',g.t.getEpoch()),false);assert.equal(g.t.encodeSave(),before);
 g.t.reviewStory('c3-attribution');const ticket=g.t.getEpoch();g.t.mutate(s=>{s.notes='new work';});assert.equal(g.t.commitStoryEntry('c3-attribution','named',ticket),false);g.ctx.now=g.t.releaseTime(3)-1;assert.equal(g.t.commitScene('c3-attribution','named',scene(g,'c3-attribution').fixedSources),false);
});
test('language repaint retains unresolved choice and disclosure state without saving',()=>{
 const g=setup();g.t.complete('registry');g.t.complete('institution');g.t.activateFile('institution');g.t.reviewStory('c1-disposition');const s=scene(g,'c1-disposition');g.t.getStation().storyDrafts[s.id]={option:'provisional'};g.t.getStation().disclosures['sources:'+s.id]=true;const before=g.t.encodeSave();g.ctx.document.documentElement={dataset:{lang:'en'}};g.listeners['zephyr-language-change']();assert.equal(g.t.getStation().storyDrafts[s.id].option,'provisional');assert.match(g.t.storyBody(s),/value="provisional" checked/);assert.equal(g.t.encodeSave(),before);
});
test('paragraph translation retains page position and mounted draft selection without saving',()=>{
 const g=setup();let painted=false,restored;g.ctx.window.scrollX=0;g.ctx.window.scrollY=900;g.ctx.window.innerHeight=800;g.ctx.window.scrollTo=(x,y)=>restored=[x,y];
 const old={getBoundingClientRect:()=>({top:-30,bottom:150})},next={getBoundingClientRect:()=>({top:170,bottom:350})},field={id:'answer-input',value:'retained reasoning',selectionStart:2,selectionEnd:6,setSelectionRange(start,end){this.selectionStart=start;this.selectionEnd=end;}};g.elements['answer-input']=field;
 const body={id:'task-content',scrollLeft:0,scrollTop:0,contains:el=>el===field,querySelector:()=>null,querySelectorAll:s=>s==='h2,h3,p,pre,blockquote'?[painted?next:old]:s==='textarea:not([readonly]), input[type="text"]'?[field]:[],set innerHTML(v){painted=true;field.value='';}};
 const save=g.t.encodeSave();g.t.replaceView(body,'translated');assert.deepEqual(restored,[0,1100]);assert.equal(field.value,'retained reasoning');assert.equal(field.selectionStart,2);assert.equal(g.t.encodeSave(),save);
});
test('deliberate associated-record and recovered-note views restore independent scroll positions',()=>{
 const g=setup();mountReader(g);g.ctx.window.scrollX=0;g.ctx.window.scrollY=0;g.ctx.window.scrollTo=(x,y)=>{g.ctx.window.scrollX=x;g.ctx.window.scrollY=y;};g.t.init();g.t.complete('registry');g.ctx.window.scrollY=650;const save=g.t.encodeSave();g.t.setMode('receipt');assert.equal(g.ctx.window.scrollY,0);g.ctx.window.scrollY=180;g.t.setMode('original');assert.equal(g.ctx.window.scrollY,650);g.t.setMode('receipt');assert.equal(g.ctx.window.scrollY,180);
 g.t.reviewStory('c1-assignment');assert.equal(g.ctx.window.scrollY,0);g.ctx.window.scrollY=210;g.t.resumeStory();assert.equal(g.ctx.window.scrollY,650);g.t.reviewStory('c1-assignment');assert.equal(g.ctx.window.scrollY,210);assert.equal(g.t.encodeSave(),save);
});
test('production fixture API and synthetic checks are absent, canonical boot marker retained',()=>{
 const source=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');assert.equal((source.match(/readSealFromUrl\(\);init\(\);/g)||[]).length,1);assert.doesNotMatch(source,/window\.test\s*=|synthetic capstone|synthetic local receipt/);
 const model=setup().t.uiModel();for(const key of ['chapters','frontierId','completed','total','storyPending'])assert.equal(Object.hasOwn(model,key),false);
});
