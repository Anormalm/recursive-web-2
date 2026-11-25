import {test} from 'node:test';
import assert from 'node:assert/strict';
import {game} from './game-fixture.mjs';
const now=Date.parse('2026-11-25'),KEY='zephyr-zero-arg-v2',OLD='zephyr-zero-arg-v1';
const setup=options=>game({now,...options}),plain=x=>JSON.parse(JSON.stringify(x));
const settle=()=>new Promise(r=>setImmediate(r));
// Digest substitution is local test scaffolding, not a real seal or physical visit.
async function syntheticReceipt(g){g.ctx.crypto={subtle:{digest:async()=>Uint8Array.from(Buffer.from(g.C.pickup.sealSha256,'hex')).buffer}};g.t.mutate(s=>{s.receivedSeal='synthetic receipt for graph test';});g.t.maybeAutoSeal();await settle();}

test('frozen topology covers every original ID without changing original order',()=>{
 const g=setup(),a=g.ctx.window.ZEPHYR_ARCHIVE;assert.equal(g.t.topologyReady,true);assert.ok(Object.isFrozen(a));assert.ok(Object.isFrozen(a.findings.judgment.requires));assert.deepEqual(Object.keys(a.findings),Array.from(g.D.steps,s=>s.id));
 assert.equal(a.findings.judgment.requires.length,19);assert.deepEqual(Array.from(a.findings.dropcoords.requires),['reels']);assert.equal(a.findings.masterkey.physical,true);
});
test('two launch-day documents and many current-date findings work without a prefix',()=>{
 const g=setup();g.ctx.now=g.t.releaseTime(1);assert.equal(g.t.canInvestigate(0),true);assert.equal(g.t.canInvestigate(1),true);assert.equal(g.t.canInvestigate(2),false);assert.ok(g.t.complete('institution'));assert.equal(g.t.getState().stepUnlocked,0);
 g.ctx.now=now;const actions=g.D.steps.filter((s,i)=>g.t.canInvestigate(i));assert.ok(actions.length>=3);assert.ok(g.t.complete('triangulate'));assert.ok(g.t.complete('recursion'));assert.equal(g.t.getState().solved.registry,undefined);assert.equal(g.t.getState().stepUnlocked,0);
});
test('two different branch orders converge without optional challenge shortcuts',async()=>{
 const findings=[];for(const reverse of [false,true]){const g=setup(),roots=g.D.steps.filter(s=>!['dropcoords','masterkey','judgment'].includes(s.id));if(reverse)roots.reverse();
 for(const s of roots){assert.ok(g.t.complete(s.id),s.id);assert.equal(g.t.complete(s.id),undefined);}
 assert.equal(g.t.canUnseal(),false);assert.equal(g.t.complete('masterkey'),undefined);assert.equal(g.t.complete('judgment'),undefined);await syntheticReceipt(g);assert.equal(g.t.getState().solved.dropcoords,true);assert.ok(g.t.complete('masterkey'));assert.ok(g.t.complete('judgment'));assert.equal(g.t.canUnseal(),true);findings.push(plain(g.t.getState().solved));}
 assert.deepEqual(findings[0],findings[1]);
});
test('public reads and searches never establish findings or expose earned outputs',()=>{
 const g=setup(),before=g.t.encodeSave();for(const id of ['aLetterhead','aPress','aRails','aSealed'])assert.ok(g.t.sourceAvailable(id),id);
 for(const id of ['aDrop','aVerdict']){assert.equal(g.t.sourceAvailable(id),false);assert.equal(g.t.sourceBody(id),'');}
 g.t.sourceBody('aPress');g.t.evidenceBody('aLetterhead');g.t.evidenceMatches('aPress','1986');g.t.pinEvidence('aLetterhead');assert.equal(g.t.encodeSave(),before);
 assert.equal(g.t.getState().solved.institution,undefined);assert.ok(g.t.complete('reels'));assert.ok(g.t.sourceAvailable('aDrop'));assert.equal(g.t.sourceAvailable('aVerdict'),false);
});
test('sparse v2 export/reload preserves holes and ignores count or selected-file authority',()=>{
 const g=setup();g.t.complete('provenance');g.t.complete('building');const encoded=g.t.encodeSave(),state=g.t.decodeSave(encoded);assert.equal(state.v,2);assert.equal(state.stepUnlocked,0);
 const reloaded=setup({storage:new Map([[KEY,JSON.stringify({...state,stepUnlocked:20,current:19})]])});assert.deepEqual(plain(reloaded.t.getState().solved),{building:true,provenance:true});assert.equal(reloaded.t.getState().stepUnlocked,0);assert.equal(reloaded.t.canUnseal(),false);
});
test('v1 migration trusts exactly the historical prefix and leaves original storage untouched',()=>{
 for(let n=0;n<=20;n++){const old=JSON.stringify({v:1,stepUnlocked:n,notes:'historical work',solved:{judgment:true}}),storage=new Map([[OLD,old]]),g=setup({storage});assert.equal(g.t.getState().v,2);assert.equal(g.t.getState().legacyThrough,n);assert.equal(g.t.getState().story.legacyThrough,n);assert.deepEqual(Object.keys(g.t.getState().solved),Array.from(g.D.steps.slice(0,n),s=>s.id));assert.equal(storage.has(KEY),false);g.t.mutate(s=>{s.notes+=' retained';});assert.equal(storage.get(OLD),old);assert.ok(storage.has(KEY));assert.equal(g.t.canUnseal(),false);}
});
test('existing v2 reset or malformed storage never resurrects a historical v1 backup',()=>{
 for(const saved of [JSON.stringify({v:2,solved:{}}),'invalid',JSON.stringify({v:8,solved:{}})]){const g=setup({storage:new Map([[KEY,saved],[OLD,JSON.stringify({v:1,stepUnlocked:20})]])});assert.equal(Object.keys(g.t.getState().solved).length,0);assert.equal(g.t.getState().story.legacyThrough,0);}
});
test('graph normalization rejects unknown and nonboolean findings and inconsistent new results',()=>{
 const g=setup(),s=g.t.ingestState({v:2,solved:{forged:true,registry:1,institution:true,masterkey:true,judgment:true}});assert.deepEqual(plain(s.solved),{institution:true});assert.equal(s.stepUnlocked,0);assert.equal(g.t.validSave({v:3,solved:{}}),false);assert.equal(g.t.validSave({v:1,stepUnlocked:21}),false);
});
test('missing or cyclic policy refuses mutations but retains readable records, captured receipt and export',()=>{
 const base=setup(),broken=plain(base.ctx.window.ZEPHYR_ARCHIVE);broken.findings.registry.requires=['institution'];broken.findings.institution.requires=['registry'];
 for(const options of [{noTopology:true},{brokenTopology:broken}]){const g=setup({...options,storage:new Map([[KEY,JSON.stringify({v:2,solved:{institution:true},notes:'retained',receivedSeal:'unverified receipt',story:{rev:1,records:{'c1-assignment':{option:'record',citations:['nHandover']}}}})]])});assert.equal(g.t.topologyReady,false);assert.equal(g.t.complete('registry'),undefined);assert.ok(g.t.sourceBody('aRegistry'));assert.equal(g.t.sourceBody('aVerdict'),'');assert.equal(g.t.getState().receivedSeal,'unverified receipt');assert.equal(g.t.getState().story.records['c1-assignment'].option,'record');assert.ok(g.t.encodeSave());}
});
test('malformed output policy fails closed without crashing safe reading',()=>{
 const base=setup();for(const requires of [17,{},'reels',null]){const broken=plain(base.ctx.window.ZEPHYR_ARCHIVE);broken.outputs.aDrop.requires=requires;const g=setup({brokenTopology:broken});assert.equal(g.t.topologyReady,false);assert.equal(g.t.complete('reels'),undefined);assert.ok(g.t.sourceBody('aRegistry'));assert.equal(g.t.sourceBody('aDrop'),'');assert.ok(g.t.encodeSave());}
});
test('historical physical prefix never grants plaintext or report without original seal recheck',async()=>{
 const g=setup();g.t.setState({v:1,stepUnlocked:20,capstoneOk:true});assert.equal(g.t.canUnseal(),false);assert.equal(g.t.sourceAvailable('aVerdict'),false);assert.doesNotMatch(g.t.finaleView(),/SOURCE ROOT|第零号证人从未出生/);await syntheticReceipt(g);assert.equal(g.t.canUnseal(),true);assert.ok(g.t.sourceAvailable('aVerdict'));assert.ok(g.t.finaleView().includes(g.t.finaleBody()));
});
test('receipt captured early is verified but credited only when its released carrier is ready',async()=>{
 const g=setup();await syntheticReceipt(g);assert.equal(g.t.getState().solved.dropcoords,undefined);assert.equal(g.t.sourceAvailable('aVerdict'),false);g.ctx.now=g.t.releaseTime(2);g.t.complete('reels');assert.equal(g.t.getState().solved.dropcoords,undefined);g.ctx.now=now;g.t.maybeAutoSeal();await settle();assert.equal(g.t.getState().solved.dropcoords,true);
});
test('interludes collate by original record order, not discovery timestamps',()=>{
 const g=setup();for(const id of ['annex','registry','institution','namecode'])g.t.complete(id);const html=g.t.originalReceiptsBody(),ordered=g.D.steps.filter(s=>g.t.getState().solved[s.id]&&g.D.interludes[s.id]);let position=-1;for(const step of ordered){const text=g.D.interludes[step.id].text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])).replace(/\n/g,'<br>');const next=html.indexOf(text);assert.ok(next>position,step.id);position=next;}
});
