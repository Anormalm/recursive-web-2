import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
export function game(){
 const ctx={window:{},console:{log(){},warn(){}},TextEncoder,TextDecoder,crypto:webcrypto,URLSearchParams,Intl,Uint8Array,Int16Array,Date:class extends Date{static now(){return ctx.now;}},localStorage:{getItem(){return null;},setItem(){}},location:{search:'',pathname:'/',hash:''},history:{replaceState(){}},document:{getElementById(){return null;},createElement(){return {setAttribute(){},appendChild(){},remove(){}};},body:{appendChild(){}}}};
 ctx.window.setTimeout=()=>{};ctx.now=0;vm.createContext(ctx);
 for(const f of ['config.js','data.js'])vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'),ctx);
 let engine=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');
 engine=engine.replace('readSealFromUrl();init();',`window.test={releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,hammingSyndrome,acceptedHash,sha256Text,norm,getState:()=>state,setState:s=>state={...defaultState(),...s},finaleCapstoneHash,aWaves,bWaves,maiLetters,maiOhm,arcaeaTarget,arcBeats};`);
 vm.runInContext(engine,ctx);return {ctx,t:ctx.window.test,D:ctx.window.ZEPHYR_DATA,C:ctx.window.ZEPHYR_CONFIG};
}
test('all six chapter boundaries, sequential access, preview ignored',()=>{
 const {ctx,t,D,C}=game();C.previewMode=true;
 for(let day=1;day<=6;day++){
  const first=D.steps.findIndex(s=>s.day===day);t.setState({stepUnlocked:first});
  ctx.now=t.releaseTime(day)-1;assert.equal(t.isAccessible(first),false);t.complete(D.steps[first].id);assert.equal(t.getState().stepUnlocked,first);
  assert.equal(t.allEvidence().includes(D.steps[first].evidence[0]),false);
  ctx.now++;assert.equal(t.isAccessible(first),true);assert.equal(t.allEvidence().includes(D.steps[first].evidence[0]),true);
  if(first+1<D.steps.length)assert.equal(t.isAccessible(first+1),false);
 }
});
test('invalid schedules fail closed; imported completion cannot reveal finale early',()=>{
 const {ctx,t,D,C}=game();ctx.now=Date.parse('2026-10-20T10:59:59Z');t.setState({stepUnlocked:D.steps.length,capstoneOk:true});assert.match(t.finaleBody(),/尚未解封/);
 C.launchAt='invalid';assert.equal(t.released(1),false);assert.doesNotThrow(()=>t.recordBody('registry'));
 C.launchAt='2026-10-20T19:00:00+08:00';for(const hours of [0,-1,NaN,Infinity,'24']){C.chapterIntervalHours=hours;assert.equal(t.released(1),false);}
});
test('all stages complete in dependency order; unavailable and repeated completions rejected',()=>{
 const {ctx,t,D}=game();ctx.now=Date.parse('2026-10-26T00:00:00Z');
 for(let i=0;i<D.steps.length;i++){t.complete(D.steps[(i+1)%D.steps.length].id);assert.equal(t.getState().stepUnlocked,i);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);}
 assert.equal(Object.keys(t.getState().solved).length,D.steps.length);
});
test('production configuration and public tree contain no GM kit',()=>{
 const {C}=game();assert.equal(C.previewMode,false);assert.equal(C.launchAt,'2026-10-20T19:00:00+08:00');assert.equal(existsSync(new URL('../gm',import.meta.url)),false);
 assert.equal(C.pickup.sealSha256.length,64);
});
test('acrostic integrity: exactly 17 interludes; first hanzi in reading order seals the finale',async()=>{
 const {t,D}=game();
 const ids=Object.keys(D.interludes);
 assert.equal(ids.length,17,'interlude count must stay at 17');
 const withInterludes=D.steps.filter(s=>D.interludes[s.id]);
 assert.equal(withInterludes.length,17,'every interlude must belong to a step');
 const phrase=withInterludes.map(s=>D.interludes[s.id].text.match(/[一-鿿]/)[0]).join('');
 assert.equal(phrase.length,17);
 assert.equal(await t.sha256Text(t.norm(phrase)),t.finaleCapstoneHash);
});
test('new steps are wired: chain, records, assets, typed hashes',()=>{
 const {t,D}=game();
 const ids=D.steps.map(s=>s.id);
 for(const id of ['noisewords','newsclip','triangulate'])assert.ok(ids.includes(id),id+' in chain');
 assert.ok(ids.indexOf('noisewords')>ids.indexOf('parity'));
 assert.ok(ids.indexOf('newsclip')>ids.indexOf('dropcoords'));
 assert.ok(ids.indexOf('triangulate')>ids.indexOf('provenance'));
 for(const id of ['noisewords','newsclip','triangulate']){
  assert.ok(!D.interludes[id],'new steps must not add interludes (acrostic)');
  assert.match(t.acceptedHash[id],/^[0-9a-f]{64}$/,id+' has a hash entry');
 }
 for(const rec of ['aAudio','aPress','aSurvey'])assert.ok(D.records[rec],rec+' record exists');
 assert.ok(existsSync(new URL('../assets/press-1986.svg',import.meta.url)),'clipping SVG deployed');
 // every non-widget step must have a hash entry (no untyped dead ends)
 const widgetKinds=new Set(['wave','hamming','verdict','drop']);
 for(const s of D.steps)if(!widgetKinds.has(s.kind))assert.match(t.acceptedHash[s.id],/^[0-9a-f]{64}$/,s.id);
});
test('reel comparison: 12 fragments, exactly one byte-identical pair, three near-decoys',()=>{
 const {t}=game();
 assert.equal(t.aWaves.length,12);assert.equal(t.bWaves.length,12);
 let pairs=[];
 for(let i=0;i<12;i++)for(let j=0;j<12;j++)if(t.aWaves[i].every((x,k)=>x===t.bWaves[j][k]))pairs.push([i,j]);
 assert.equal(pairs.length,1,'exactly one identical pair');
 assert.deepEqual(pairs[0],[3,6],'the true pair is A4=B7');
 for(const [i,j] of [[3,2],[5,9],[11,4]]){
  const d=t.aWaves[i].map((x,k)=>x-t.bWaves[j][k]);
  assert.equal(d.filter(x=>x!==0).length,1,'decoy differs in one sample');
  assert.ok(Math.max(...d.map(Math.abs))===1,'decoy differs by 1');
 }
});
test('dial: ascending impedance spells the drawer reading; numbered order does not',()=>{
 const {t}=game();
 const order=[...t.maiOhm.keys()].sort((a,b)=>t.maiOhm[a]-t.maiOhm[b]).map(i=>t.maiLetters[i]).join('');
 assert.equal(order,'BDRAWEREIGHTH');
 assert.equal(new Set(t.maiOhm).size,13,'impedances are distinct');
 assert.notEqual(t.maiLetters.join(''),'BDRAWEREIGHTH','clockwise order is not the answer');
});
test('tracks: beat stamps are a full scramble and beat order yields the key, visual order does not',()=>{
 const {t}=game();
 assert.equal(new Set(t.arcBeats).size,14);
 assert.equal(Math.min(...t.arcBeats),1);assert.equal(Math.max(...t.arcBeats),14);
 const colChar=t.arcBeats.map(b=>t.arcaeaTarget[b-1]); // engine: column shows target[stamp-1]
 const byStamp=t.arcBeats.map((b,v)=>[b,v]).sort((x,y)=>x[0]-y[0]).map(p=>colChar[p[1]]).join('');
 assert.equal(byStamp,'MIRRORYEAR1986');
 assert.notEqual(colChar.join(''),'MIRRORYEAR1986','visual left-to-right is scrambled');
});
test('evidence WAVs: both reels deployed, equal length, different content',()=>{
 const a=readFileSync(new URL('../evidence/1986-reel-a.wav',import.meta.url));
 const b=readFileSync(new URL('../evidence/1986-reel-b.wav',import.meta.url));
 assert.ok(a.length>500000);assert.equal(a.length,b.length);
 assert.ok(!a.equals(b),'reels must differ');
});
