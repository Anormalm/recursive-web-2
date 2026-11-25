import {test} from 'node:test';
import assert from 'node:assert/strict';
import {game,resolveScenes} from './game-fixture.mjs';
const KEY='zephyr-zero-arg-v2',now=Date.parse('2026-11-20');
const setup=options=>game({now,...options});
// Setup only: explicit finding membership, not a progression loop or QR authority.
const advance=(g,n)=>{assert.ok(g.t.mutate(s=>{s.solved=Object.fromEntries(g.D.steps.slice(0,n).map(step=>[step.id,true]));}));resolveScenes(g);};
const verifyReceipt=async g=>{const crypto=g.ctx.crypto;g.ctx.crypto={subtle:{digest:async(algorithm,input)=>{assert.equal(algorithm,'SHA-256');assert.equal(new TextDecoder().decode(input),'SYNTHETICRECEIPT');return bytes(g.C.pickup.sealSha256);}}};assert.ok(g.t.mutate(s=>s.receivedSeal='synthetic-receipt'));g.t.maybeAutoSeal();await new Promise(resolve=>setImmediate(resolve));g.ctx.crypto=crypto;assert.equal(g.t.physicalReady(g.t.getState()),true);};
const bytes=hash=>Uint8Array.from(Buffer.from(hash,'hex')).buffer;
const deferred=()=>{const jobs=[];return {jobs,crypto:{subtle:{digest:()=>new Promise((resolve,reject)=>jobs.push({resolve,reject}))}}};};
const scopeFor=(selectors={},lists={})=>({querySelector:s=>selectors[s]||null,querySelectorAll:s=>lists[s]||[]});
const control=dataset=>{const handlers={};return {dataset,handlers,addEventListener:(event,fn)=>{handlers[event]=fn;}};};
const imported=g=>{const button=control({act:'import-save'});g.t.wire(scopeFor({}, {'[data-act]':[button]}));return ()=>button.handlers.click({detail:0});};
const encode=obj=>Buffer.from(JSON.stringify(obj)).toString('base64url');

test('actual import handler rejects malformed input and cancelled confirmation without changes',async()=>{
 const g=setup();g.t.mutate(s=>s.notes='original');const before=g.t.encodeSave(),run=imported(g);g.elements['save-import']={value:'invalid'};
 await run();assert.equal(g.t.encodeSave(),before);assert.match(g.toasts.at(-1),/存档格式不对/);
 g.elements['save-import'].value=encode({v:1,stepUnlocked:4,notes:'replacement'});g.ctx.window.confirm=()=>false;await run();assert.equal(g.t.encodeSave(),before);
});
test('actual import adopts legacy work but refuses confirmation raced by another replacement',async()=>{
 const g=setup(),run=imported(g);g.elements['save-import']={value:encode({v:1,stepUnlocked:4,notes:'imported'})};await run();assert.equal(g.t.getState().story.legacyThrough,4);assert.equal(g.t.getState().notes,'imported');
 g.ctx.window.confirm=()=>{g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:2,notes:'other tab'}));return true;};await run();assert.equal(g.t.getState().notes,'other tab');assert.equal(g.t.getState().stepUnlocked,2);
});
test('write failure retains page work and recovers without restoring the old disk save',()=>{
 const faults={},g=setup({faults});g.t.mutate(s=>s.notes='disk');faults.write=()=>true;assert.ok(g.t.mutate(s=>s.notes='page only'));
 assert.equal(g.t.decodeSave(g.t.encodeSave()).notes,'page only');assert.equal(JSON.parse(g.storage.get(KEY)).notes,'disk');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,true);
 delete faults.write;assert.ok(g.t.mutate(s=>s.started=true));assert.equal(JSON.parse(g.storage.get(KEY)).notes,'page only');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,false);
});
test('silently discarded writes retain recoverable page work and disclose failed persistence',()=>{
 const faults={},g=setup({faults});g.t.mutate(s=>s.notes='disk');faults.dropWrite=()=>true;
 assert.ok(g.t.mutate(s=>s.notes='unsaved work'));assert.equal(g.t.getState().notes,'unsaved work');assert.equal(JSON.parse(g.storage.get(KEY)).notes,'disk');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,true);
});
test('failed readback retains QR URL and later storage recovery retains the receipt',()=>{
 const faults={},g=setup({faults});let written=false;faults.write=()=>{written=true;return false;};faults.read=()=>written;
 g.ctx.location.search='?seal=synthetic-receipt';g.t.readSealFromUrl();assert.equal(g.ctx.replaced,undefined);assert.equal(g.t.getState().receivedSeal,'synthetic-receipt');
 delete faults.read;delete faults.write;g.t.syncState();assert.equal(g.t.getState().receivedSeal,'synthetic-receipt');
});
test('readback recovery does not adopt this page intermediate writes over later accepted work',async()=>{
 for(const discard of ['throw','drop']){
  const faults={},d=deferred(),g=setup({faults,crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));resolveScenes(g);g.t.activateFile('registry');
  let readDenied=false;faults.write=()=>{readDenied=true;return false;};faults.read=()=>readDenied;assert.ok(g.t.mutate(s=>s.notes='intermediate own write'));
  if(discard==='throw')faults.write=()=>true;else{delete faults.write;faults.dropWrite=()=>true;}
  assert.ok(g.t.mutate(s=>s.notes='latest page work'));const work=g.t.submitInput('synthetic accepted input');d.jobs[0].resolve(bytes(g.t.acceptedHash.registry));await work;assert.equal(g.t.getState().stepUnlocked,1);
  delete faults.read;delete faults.write;delete faults.dropWrite;assert.equal(g.t.syncState(),true);assert.equal(g.t.getState().stepUnlocked,1);assert.equal(g.t.getState().notes,'latest page work');assert.equal(g.t.getState().solved.registry,true);
  assert.ok(g.t.mutate(s=>s.started=true));assert.equal(JSON.parse(g.storage.get(KEY)).stepUnlocked,1);assert.equal(JSON.parse(g.storage.get(KEY)).notes,'latest page work');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,false);
 }
});
test('multiple unverified writes recover the latest page work without claiming it is durable',()=>{
 const faults={},g=setup({faults});g.t.mutate(s=>s.notes='baseline');let denied=false;faults.write=()=>{denied=true;return false;};faults.read=()=>denied;g.t.mutate(s=>s.notes='own first');g.t.mutate(s=>s.notes='own second');faults.dropWrite=()=>true;g.t.mutate(s=>s.notes='page latest');delete faults.read;assert.equal(g.t.syncState(),true);assert.equal(g.t.getState().notes,'page latest');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,true);delete faults.write;delete faults.dropWrite;g.t.mutate(s=>s.started=true);assert.equal(JSON.parse(g.storage.get(KEY)).notes,'page latest');assert.equal(g.ctx.window.ZephyrUI.getModel().storageUnavailable,false);
});
test('readback recovery still adopts a genuinely external replacement',()=>{
 const faults={},g=setup({faults});g.t.mutate(s=>s.notes='baseline');let denied=false;faults.write=()=>{denied=true;return false;};faults.read=()=>denied;g.t.mutate(s=>s.notes='own intermediate');faults.write=()=>true;g.t.mutate(s=>s.notes='page latest');g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:2,notes:'external replacement'}));delete faults.read;assert.equal(g.t.syncState(),false);assert.equal(g.t.getState().notes,'external replacement');assert.equal(g.t.getRecovery()['notes-field'],'page latest');
});
test('startup ingests QR without a reader and keeps an unpersisted receipt in the URL',()=>{
 const g=setup({startup:true,denied:true,search:'?seal=synthetic-receipt'});assert.equal(g.t.getState().receivedSeal,'synthetic-receipt');assert.equal(g.ctx.replaced,undefined);
});
test('queued release callbacks refresh availability and replace the previous timer',()=>{
 const g=game({timers:true});const initial=[...g.timers.entries()];assert.equal(initial.length,1);g.ctx.now=g.t.releaseTime(1)+20;g.timers.delete(initial[0][0]);initial[0][1].fn();assert.equal(g.t.released(1),true);assert.equal(g.timers.size,1);
 g.ctx.document.visibilityState='visible';g.listeners.visibilitychange();assert.equal(g.timers.size,1);
});
test('rejected typed digest produces recoverable feedback instead of a rejected handler',async()=>{
 let calls=0;const g=setup({crypto:{subtle:{digest:()=>++calls===1?Promise.resolve(new ArrayBuffer(32)):Promise.reject(Error('crypto failed'))}}});resolveScenes(g);g.t.activateFile('registry');
 await assert.doesNotReject(g.t.submitInput('synthetic input'));assert.equal(g.t.getState().stepUnlocked,0);assert.match(g.t.recordBody('registry'),/校验暂时不可用/);
});
test('a later typed submission supersedes a pending earlier result',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));resolveScenes(g);g.t.activateFile('registry');
 const first=g.t.submitInput('older synthetic input'),second=g.t.submitInput('newer synthetic input');d.jobs[1].resolve(new ArrayBuffer(32));await second;d.jobs[0].resolve(bytes(g.t.acceptedHash.registry));await first;assert.equal(g.t.getState().stepUnlocked,0);
});
test('editing a typed input invalidates its pending result without changing saved progress',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));resolveScenes(g);g.t.activateFile('registry');
 const field=control({});field.value='synthetic input';field.selectionStart=0;field.selectionEnd=0;const form=control({});g.t.wire(scopeFor({'#answer-input':field,'#answer-form':form}));
 const work=g.t.submitInput(field.value);field.value='changed input';field.handlers.input();d.jobs[0].resolve(bytes(g.t.acceptedHash.registry));await work;assert.equal(g.t.getState().stepUnlocked,0);
});
test('actual capstone submit fails closed on rejected digest and ignores replaced state',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));advance(g,20);await verifyReceipt(g);const form=control({}),field=control({});field.value='synthetic phrase';g.t.wire(scopeFor({'#capstone-form':form,'#capstone-input':field}));
 const work=form.handlers.submit({preventDefault(){}});d.jobs[0].reject(Error('crypto failed'));await assert.doesNotReject(work);assert.equal(g.t.getState().capstoneOk,false);assert.match(g.t.finaleBody(),/校验暂时不可用/);
 const later=form.handlers.submit({preventDefault(){}});g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:0}));d.jobs[1].resolve(bytes(g.t.finaleCapstoneHash));await later;assert.equal(g.t.getState().capstoneOk,false);assert.equal(g.t.getState().stepUnlocked,0);
});
test('unavailable crypto fails closed for typed, wave and capstone checks',async()=>{
 const g=setup({crypto:undefined});resolveScenes(g);g.t.activateFile('registry');await g.t.submitInput('synthetic input');assert.equal(g.t.getState().stepUnlocked,0);assert.match(g.t.recordBody('registry'),/校验暂时不可用/);
 advance(g,5);g.t.activateFile('reels');assert.ok(g.t.setMode('operate'));const a=0,b=g.t.bWaves.findIndex(row=>row.every((v,i)=>v===g.t.aWaves[a][i]));g.t.mutate(s=>{s.waveA=a;s.waveB=b<0?0:b;});await g.t.verifyWave();assert.equal(g.t.getState().stepUnlocked,5);assert.match(g.t.recordBody('reels'),/校验暂时不可用/);
 advance(g,20);await verifyReceipt(g);const form=control({}),field=control({});field.value='synthetic phrase';g.t.wire(scopeFor({'#capstone-form':form,'#capstone-input':field}));await form.handlers.submit({preventDefault(){}});assert.equal(g.t.getState().capstoneOk,false);assert.match(g.t.finaleBody(),/校验暂时不可用/);
});
test('wave digest rejection and changed selections cannot apply a pending match',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));advance(g,5);g.t.activateFile('reels');const a=g.t.aWaves.findIndex(row=>g.t.bWaves.some(other=>row.every((v,i)=>v===other[i]))),b=g.t.bWaves.findIndex(row=>row.every((v,i)=>v===g.t.aWaves[a][i]));g.t.mutate(s=>{s.waveA=a;s.waveB=b;});
 const failed=g.t.verifyWave();d.jobs[0].reject(Error('digest failed'));d.jobs[1].resolve(new ArrayBuffer(32));await failed;assert.equal(g.t.getState().stepUnlocked,5);
 const late=g.t.verifyWave();g.t.mutate(s=>s.waveB=(b+1)%12);d.jobs[2].resolve(new ArrayBuffer(32));d.jobs[3].resolve(new ArrayBuffer(32));await late;assert.equal(g.t.getState().stepUnlocked,5);
});
test('QR crypto failure retains the saved receipt and never advances',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));advance(g,12);g.t.activateFile('dropcoords');g.t.mutate(s=>s.receivedSeal='synthetic-receipt');g.t.maybeAutoSeal();d.jobs[0].reject(Error('digest failed'));await new Promise(resolve=>setImmediate(resolve));assert.equal(g.t.getState().stepUnlocked,12);assert.equal(g.t.getState().receivedSeal,'synthetic-receipt');assert.match(g.t.recordBody('dropcoords'),/校验暂时不可用/);
});
test('capstone input edit and repeated submission supersede pending results',async()=>{
 const d=deferred(),g=setup({crypto:d.crypto});d.jobs.shift().resolve(new ArrayBuffer(32));advance(g,20);await verifyReceipt(g);const form=control({}),field=control({});field.value='synthetic phrase';g.t.wire(scopeFor({'#capstone-form':form,'#capstone-input':field}));
 const old=form.handlers.submit({preventDefault(){}});field.value='edited';field.handlers.input();d.jobs[0].resolve(bytes(g.t.finaleCapstoneHash));await old;assert.equal(g.t.getState().capstoneOk,false);
 const first=form.handlers.submit({preventDefault(){}}),second=form.handlers.submit({preventDefault(){}});d.jobs[2].resolve(new ArrayBuffer(32));await second;d.jobs[1].resolve(bytes(g.t.finaleCapstoneHash));await first;assert.equal(g.t.getState().capstoneOk,false);
 const accepted=form.handlers.submit({preventDefault(){}});d.jobs[3].resolve(bytes(g.t.finaleCapstoneHash));await accepted;assert.equal(g.t.getState().capstoneOk,true);assert.equal(g.t.pendingScene(),null);assert.equal(g.t.campaignClosed(),true);assert.match(g.t.finaleView(),/story-epilogue/);
});
test('readback with a genuinely different save adopts it and keeps previous notes recoverable',()=>{
 const faults={},g=setup({faults});g.t.mutate(s=>s.notes='old page');let replacement=false;faults.write=(key)=>{if(key===KEY){g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:2,notes:'other save'}));replacement=true;}return false;};faults.readValue=(key,value)=>replacement&&key===KEY?JSON.stringify({v:1,stepUnlocked:2,notes:'other save'}):value;
 assert.equal(g.t.mutate(s=>s.notes='attempted edit'),false);assert.equal(g.t.getState().notes,'other save');assert.equal(g.t.getRecovery()['notes-field'],'attempted edit');
});
test('existing validation feedback follows language changes without saving',async()=>{
 const g=setup();resolveScenes(g);g.t.activateFile('registry');await g.t.submitInput('synthetic rejection');const saved=g.t.encodeSave();assert.match(g.t.recordBody('registry'),/校验失败/);g.ctx.document.documentElement={dataset:{lang:'en'}};g.listeners['zephyr-language-change']();assert.match(g.t.recordBody('registry'),/VERIFY FAILED/);assert.equal(g.t.encodeSave(),saved);
 advance(g,19);await verifyReceipt(g);g.t.activateFile('judgment');assert.ok(g.t.setMode('operate'));g.t.submitVerdict();assert.match(g.t.recordBody('judgment'),/Some claims/);g.ctx.document.documentElement.dataset.lang='zh';g.listeners['zephyr-language-change']();assert.match(g.t.recordBody('judgment'),/尚有未完成/);
});
test('modal wrap ignores controls inside closed disclosures even when they have layout boxes',()=>{
 const g=setup();let focused='',prevented=0;const details={open:false,querySelector:()=>summary,parentElement:null,matches:selector=>selector==='details:not([open])'&&!details.open};
 const node=(name,parent=null)=>({name,parentElement:parent,hidden:false,matches:()=>false,getClientRects:()=>[{}],closest:()=>null,focus:()=>{focused=name;},contains(el){return el===this;}});
 const close=node('close'),summary=node('summary',details),hidden=node('hidden',details);details.querySelector=()=>summary;const drawer={querySelectorAll:()=>[close,summary,hidden],contains:()=>true};g.elements.drawer=drawer;g.t.setPanel('archive');
 g.ctx.document.activeElement=close;g.t.modalKeys({key:'Tab',shiftKey:true,preventDefault:()=>prevented++});assert.equal(focused,'summary');assert.equal(prevented,1);
 g.ctx.document.activeElement=summary;g.t.modalKeys({key:'Tab',shiftKey:false,preventDefault:()=>prevented++});assert.equal(focused,'close');assert.equal(prevented,2);
});
test('actual parity rejection and stale owner cannot change progress',async()=>{
 const g=setup();advance(g,8);g.t.activateFile('parity');const button=control({act:'check-hamming'});g.t.wire(scopeFor({}, {'[data-act]':[button]}));await button.handlers.click({detail:0});assert.equal(g.t.getState().stepUnlocked,8);
 g.t.activateFile('registry');await button.handlers.click({detail:0});assert.equal(g.t.getState().stepUnlocked,8);
});
test('external replacement recovers a hidden file draft without merging it into the save',()=>{
 const g=setup({storage:new Map([[KEY,JSON.stringify({v:1,stepUnlocked:1})]])});g.t.activateFile('institution');
 g.elements['answer-input']={value:'file reasoning',selectionStart:0,selectionEnd:0};assert.ok(g.t.activateFile('registry'));delete g.elements['answer-input'];
 g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:0,notes:'replacement'}));assert.equal(g.t.syncState(),false);
 assert.equal(g.t.getRecovery()['answer-input:institution'],'file reasoning');assert.equal(Object.keys(g.t.getStation().drafts).length,0);
 const exported=g.t.decodeSave(g.t.encodeSave());assert.equal(exported.stepUnlocked,0);assert.equal(exported.notes,'replacement');assert.ok(!JSON.stringify(exported).includes('file reasoning'));
});
test('import recovers multiple file drafts separately and reset clears recovery',async()=>{
 const g=setup({storage:new Map([[KEY,JSON.stringify({v:1,stepUnlocked:4})]])});
 for(const id of ['registry','institution']){g.t.activateFile(id);g.elements['answer-input']={value:'working '+id,selectionStart:0,selectionEnd:0};g.t.activateFile('namecode');delete g.elements['answer-input'];}
 const run=imported(g);g.elements['save-import']={value:encode({v:1,stepUnlocked:0,notes:'imported'})};await run();
 for(const id of ['registry','institution'])assert.equal(g.t.getRecovery()['answer-input:'+id],'working '+id);
 assert.equal(g.t.getState().notes,'imported');assert.equal(g.t.getState().stepUnlocked,0);g.t.reset();assert.equal(Object.keys(g.t.getRecovery()).length,0);
});
test('mounted draft edits and deliberate clearing supersede their retained snapshot',()=>{
 for(const value of ['latest mounted text','']){const g=setup();resolveScenes(g);g.t.activateFile('registry');g.t.getStation().drafts.registry={value:'older snapshot'};g.elements['answer-input']={value};
 g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:0,notes:'replacement'}));g.t.syncState();assert.equal(g.t.getRecovery()['answer-input:registry'],value||undefined);}
});
test('later replacements keep unrelated recovered file drafts',()=>{
 const g=setup();g.t.getStation().drafts.registry={value:'first working text'};g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:1}));g.t.syncState();
 g.t.getStation().drafts.institution={value:'second working text'};g.storage.set(KEY,JSON.stringify({v:1,stepUnlocked:0}));g.t.syncState();
 assert.equal(g.t.getRecovery()['answer-input:registry'],'first working text');assert.equal(g.t.getRecovery()['answer-input:institution'],'second working text');
});
test('stale and missing-choice story feedback translate without committing or saving',()=>{
 for(const missing of [false,true]){const g=setup();g.t.complete('registry');g.t.complete('institution');g.t.activateFile('institution');
 const scene=g.t.pendingScene();assert.ok(g.t.reviewStory(scene.id));const button=control({scene:scene.id,epoch:String(g.t.getEpoch())});g.t.wire(scopeFor({}, {'[data-scene][data-act="commit-story"]':[button]}));if(!missing){g.t.getStation().storyDrafts[scene.id]={option:'held'};g.t.mutate(s=>s.notes='change after paint');}
 button.handlers.click();const saved=g.t.encodeSave();assert.match(g.t.storyDock(scene),missing?/请先选一项/:/记录已变/);g.ctx.document.documentElement={dataset:{lang:'en'}};g.listeners['zephyr-language-change']();
 assert.match(g.t.storyDock(scene),missing?/Choose an option first/:/The record changed/);assert.equal(g.t.encodeSave(),saved);assert.equal(g.t.getState().story.records[scene.id],undefined);}
});
test('finale action navigation retains explicit URL language and original-view intent',async()=>{
 for(const action of ['nav','review-original'])for(const lang of ['en','zh']){const g=setup({search:'?lang='+lang+'&view=stale#ignored'});g.ctx.location.pathname='/recursive-web-2/finale.html';g.elements['finale-body']={};g.t.setState(g.t.ingestState({v:1,stepUnlocked:20,capstoneOk:true}));
 const button=control({act:action,rec:'registry'});g.t.wire(scopeFor({}, {'[data-act]':[button]}));await button.handlers.click({detail:0});const target=new URL(g.ctx.location.href,'https://example.test/recursive-web-2/finale.html');
 assert.equal(target.pathname,'/recursive-web-2/index.html');assert.equal(target.searchParams.get('lang'),lang);assert.equal(target.searchParams.get('rec'),'registry');assert.equal(target.searchParams.get('view'),action==='review-original'?'original':null);}
});
