import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
export function game(options={}){
 const storage=options.storage||new Map(),listeners={},elements={};
 const ctx={window:{addEventListener(k,f){listeners[k]=f;},confirm:()=>true},console:{log(){},warn(){}},TextEncoder,TextDecoder,btoa,atob,crypto:options.crypto||webcrypto,URLSearchParams,Intl,Uint8Array,Int16Array,Date:class extends Date{static now(){return ctx.now;}},localStorage:{getItem(k){if(options.denied)throw Error('denied');return storage.get(k)??null;},setItem(k,v){if(options.denied)throw Error('denied');storage.set(k,v);}},location:{search:'',pathname:'/',hash:''},history:{replaceState(...args){ctx.replaced=args;}},document:{getElementById(id){return elements[id]||null;},createElement(){return {setAttribute(){},appendChild(){},remove(){}};},body:{appendChild(){}},addEventListener(k,f){listeners[k]=f;}}};
 ctx.window.location=ctx.location;ctx.window.setTimeout=()=>{};ctx.now=0;vm.createContext(ctx);
 for(const f of ['config.js','data.js'])vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'),ctx);
 let engine=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');
 engine=engine.replace('readSealFromUrl();init();',`window.test={releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,hammingSyndrome,acceptedHash,sha256Text,norm,mutate,syncState,save,reset,normalizeState,encodeSave,decodeSave,readSealFromUrl,renderMai,renderArcaea,getRecovery:()=>recoveryDrafts,getState:()=>state,setState:s=>state=normalizeState(s),finaleCapstoneHash,aWaves,bWaves,maiLetters,maiOhm,arcaeaTarget,arcBeats};`);
 vm.runInContext(engine,ctx);return {ctx,t:ctx.window.test,D:ctx.window.ZEPHYR_DATA,C:ctx.window.ZEPHYR_CONFIG,storage,listeners,elements};
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
test('bilingual wiring: toggle and head bootstrap on every page, balanced spans, en day labels',()=>{
 const {D}=game();
 const pages=['index.html','catalog.html','log.html','404.html','finale.html'];
 for(const p of pages){const h=readFileSync(new URL('../'+p,import.meta.url),'utf8');
  assert.ok(h.includes('data-lang-toggle'),p+' carries the language toggle');
  assert.ok(h.includes("localStorage.getItem('zephyr-lang')"),p+' has the pre-paint language bootstrap');
  assert.ok(h.includes('js/i18n.js'),p+' loads the toggle script');
  const zhN=(h.match(/class="i18n-zh"/g)||[]).length,enN=(h.match(/class="i18n-en"/g)||[]).length;
  assert.ok(zhN>0,p+' has bilingual chrome');
  assert.equal(zhN,enN,p+' has balanced zh/en spans');
 }
 assert.ok(D.daysEn&&Object.keys(D.daysEn).length===6,'six English day labels');
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
 let near=0;for(const a of t.aWaves)for(const b of t.bWaves){const d=a.map((x,k)=>x-b[k]);if(d.filter(x=>x!==0).length===1&&Math.max(...d.map(Math.abs))===1)near++;}
 assert.equal(near,3,'exactly three one-sample near-decoys');
});
test('dial: impedance-derived input matches its validator; numbered order does not',async()=>{
 const {t}=game();
 const order=[...t.maiOhm.keys()].sort((a,b)=>t.maiOhm[a]-t.maiOhm[b]).map(i=>t.maiLetters[i]).join('');
 assert.equal(await t.sha256Text('dial:'+t.norm(order)),t.acceptedHash.dial);
 assert.equal(new Set(t.maiOhm).size,13,'impedances are distinct');
 assert.notEqual(await t.sha256Text('dial:'+t.norm(t.maiLetters.join(''))),t.acceptedHash.dial);
});
test('tracks: beat stamps are a full scramble and beat order yields the key, visual order does not',()=>{
 const {t}=game();
 assert.equal(new Set(t.arcBeats).size,14);
 assert.equal(Math.min(...t.arcBeats),1);assert.equal(Math.max(...t.arcBeats),14);
 const colChar=t.arcBeats.map(b=>t.arcaeaTarget[b-1]); // engine: column shows target[stamp-1]
 const byStamp=t.arcBeats.map((b,v)=>[b,v]).sort((x,y)=>x[0]-y[0]).map(p=>colChar[p[1]]).join('');
 assert.equal(byStamp,t.arcaeaTarget);
 assert.notEqual(colChar.join(''),t.arcaeaTarget,'visual left-to-right is scrambled');
});
const KEY='zephyr-zero-arg-v1';
const seed=(storage,s)=>storage.set(KEY,JSON.stringify({v:1,...s}));
test('stale tab cannot overwrite a later replacement; retry adopts current state',()=>{
 const storage=new Map();seed(storage,{stepUnlocked:12,notes:'old'});
 const a=game({storage}),b=game({storage});
 assert.ok(b.t.mutate(s=>{s.stepUnlocked=14;s.receivedSeal='synthetic-receipt';}));
 assert.equal(a.t.mutate(s=>{s.notes='stale';}),false);
 assert.equal(a.t.getState().stepUnlocked,14);
 assert.equal(JSON.parse(storage.get(KEY)).stepUnlocked,14);
 assert.equal(a.t.getRecovery()['notes-field'],'old');
 assert.ok(a.t.mutate(s=>{s.notes='reviewed';}));
 assert.equal(JSON.parse(storage.get(KEY)).receivedSeal,'synthetic-receipt');
});
test('storage events adopt resets instead of resurrecting progress',()=>{
 const storage=new Map();seed(storage,{stepUnlocked:14,notes:'old'});const a=game({storage}),b=game({storage});
 b.t.reset();a.listeners.storage({key:KEY});assert.equal(a.t.getState().stepUnlocked,0);
 assert.ok(a.t.mutate(s=>{s.notes='new';}));assert.equal(JSON.parse(storage.get(KEY)).stepUnlocked,0);
});
test('confirmation is invalidated by an external import during reset',()=>{
 const storage=new Map();seed(storage,{stepUnlocked:14});const a=game({storage});
 a.ctx.window.confirm=()=>{seed(storage,{stepUnlocked:3,notes:'replacement'});return true;};
 a.t.reset();assert.equal(a.t.getState().stepUnlocked,3);assert.equal(JSON.parse(storage.get(KEY)).notes,'replacement');
});
test('async accepted verification cannot commit after external replacement',async()=>{
 let pending;const fake={subtle:{digest:()=>new Promise(resolve=>{pending=resolve;})}};
 const storage=new Map(),a=game({storage,crypto:fake});a.ctx.now=Date.parse('2026-11-01');a.t.recordBody('registry');
 const work=a.t.submitInput('synthetic input');seed(storage,{stepUnlocked:0,notes:'imported'});
 pending(Uint8Array.from(Buffer.from(a.t.acceptedHash.registry,'hex')).buffer);await work;
 assert.equal(a.t.getState().stepUnlocked,0);assert.equal(a.t.getState().notes,'imported');
});
test('exports refresh in place; normalization supports legacy and malformed widgets',()=>{
 const {t,elements}=game();elements['save-export']={value:''};
 assert.ok(t.mutate(s=>{s.notes='new note with 汉字';}));assert.equal(t.decodeSave(elements['save-export'].value).notes,'new note with 汉字');
 const s=t.normalizeState({verdict:[true],maiTapped:[1,1,14,'2'],bits:'invalid',traceOpen:null,waveA:99});
 assert.equal(s.verdict.length,6);assert.equal(s.verdict[0],true);assert.equal(s.maiTapped.length,1);assert.equal(s.waveA,null);assert.equal(s.bits.length,7);
});
test('denied storage retains recoverable memory and QR URL',()=>{
 const {t,ctx}=game({denied:true});ctx.location.search='?seal=synthetic-receipt';t.readSealFromUrl();
 assert.equal(t.getState().receivedSeal,'synthetic-receipt');assert.equal(t.decodeSave(t.encodeSave()).receivedSeal,'synthetic-receipt');assert.equal(ctx.replaced,undefined);
});
test('dial exposes only tapped characters in contact names and transcript',()=>{
 const {t}=game();const before=t.renderMai();assert.match(before,/aria-pressed="false"/);assert.doesNotMatch(before,/TRANSCRIPT ::/);
 t.mutate(s=>{s.maiTapped=[2];});const after=t.renderMai();assert.match(after,/data-mai="2"[^>]+aria-pressed="true"/);assert.match(after,/TRANSCRIPT ::/);
 assert.ok(after.includes('width:16%'));assert.ok(after.includes('mai-scroll'));assert.ok(t.renderArcaea().includes('arc-scroll'));
});
test('immutable original texts, step data and hash block retain baseline fingerprints',async()=>{
 const {t,D,C}=game();
 const block=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8').match(/const acceptedHash = \{[\s\S]*?const finaleCapstoneHash = '[^']+';/)[0];
 assert.equal(await t.sha256Text(block),'914cc3a37ae714b26c171d4af45f0b3f1ed6c1358c0d5b3891de1c6982a210c9');
 assert.equal(await t.sha256Text(JSON.stringify(C)),'01eedc8f1a52b69e49f1fef0a8bfb8629b3f2bb7f154bfcd624850c57474a4ba');
 const fingerprints={manual:'26524cb19003c819dbd7a9f069f04e887548414bc1b4adb99c8c680ebad4a752',annex:'126ae108b5464e1c5892ef269e817c19fcdae156057636a9812e3b99c64e8aa5',interludes:'490aa44e7b509011974103d0dc62eaa9eff6425c039ed383d39642a6dda27f1f',steps:'ca5b650cbdbd073602697abd3ac84ec35009f31e6d6e5603ada7cb9871b5a39c'};
 for(const [key,hash] of Object.entries(fingerprints))assert.equal(await t.sha256Text(JSON.stringify(D[key])),hash,key);
});
test('canonical workbook and robots discovery match available evidence',()=>{
 const {D}=game();assert.equal(readFileSync(new URL('../evidence/1946-workbook.txt',import.meta.url),'utf8'),D.records.aWorkbook.body);
 const robots=readFileSync(new URL('../robots.txt',import.meta.url),'utf8');for(const file of ['1986-reel-a.wav','1986-reel-b.wav'])assert.ok(robots.includes('/evidence/'+file));
});
test('evidence WAVs: both reels deployed, equal length, different content',()=>{
 const a=readFileSync(new URL('../evidence/1986-reel-a.wav',import.meta.url));
 const b=readFileSync(new URL('../evidence/1986-reel-b.wav',import.meta.url));
 assert.ok(a.length>500000);assert.equal(a.length,b.length);
 assert.ok(!a.equals(b),'reels must differ');
});
