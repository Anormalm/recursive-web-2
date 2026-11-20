import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {game,resolveScenes} from './game-fixture.mjs';
const legacy=(t,s)=>t.setState(t.ingestState({v:1,...s}));
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
 const g=game(),{ctx,t,D}=g;ctx.now=Date.parse('2026-10-26T00:00:00Z');
 for(let i=0;i<D.steps.length;i++){resolveScenes(g);t.complete(D.steps[(i+1)%D.steps.length].id);assert.equal(t.getState().stepUnlocked,i);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);}
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
 const storage=new Map(),a=game({storage,crypto:fake});a.ctx.now=Date.parse('2026-11-01');resolveScenes(a);a.t.activateFile('registry');
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
test('all record bodies and embedded material retain pre-station fingerprints',async()=>{
 const {t,D,ctx}=game();ctx.document.documentElement={dataset:{}};
 assert.equal(await t.sha256Text(JSON.stringify(D.records)),'1e1a47d2603945bfde94d0f088c052ba91a8095bf183751738ec719599e965f3');
 assert.equal(await t.sha256Text(JSON.stringify(D.steps.map(s=>t.renderMaterial(s)))),'c4af3246611dfa8f6aa9a289428f3669dec4b557ad12ed88724a02163d928240');
});
test('station rendering is observational and mode switches preserve validation epoch',()=>{
 const {t,ctx}=game();ctx.now=Date.parse('2026-11-06');legacy(t,{stepUnlocked:6,current:0});resolveScenes({t});
 const before=t.encodeSave();t.recordBody('dial');assert.equal(t.encodeSave(),before);
 assert.ok(t.activateFile('dial'));const save=t.encodeSave(),epoch=t.getEpoch();assert.ok(t.setMode('original'));assert.ok(t.setMode('operate'));assert.equal(t.encodeSave(),save);assert.equal(t.getEpoch(),epoch);
 assert.equal(t.setMode('receipt'),false);assert.equal(t.pinEvidence('forged'),false);
});
test('equipment motion is disposable, cancellable and reduced-motion safe',()=>{
 const {t,ctx}=game(),before=t.encodeSave(),calls=[];let cancelled=0;
 const el={getAnimations:()=>[{cancel(){cancelled++;}}],animate(frames,options){calls.push({frames,options});}};
 ctx.window.matchMedia=()=>({matches:false});
 t.motion(el,[{transform:'rotate(-110deg)',opacity:.3},{transform:'rotate(0deg)',opacity:1}],250);
 assert.equal(calls[0].options.duration,250);assert.equal(cancelled,1);
 ctx.window.matchMedia=()=>({matches:true});
 t.motion(el,[{transform:'rotate(-110deg)',opacity:.3},{transform:'rotate(0deg)',opacity:1}],250);
 assert.equal(calls[1].options.duration,160);assert.ok(calls[1].frames.every(frame=>!('transform' in frame)));assert.equal(cancelled,2);
 assert.doesNotThrow(()=>t.motion(null,[]));assert.doesNotThrow(()=>t.motion({},[]));assert.equal(t.encodeSave(),before);
});
test('waiting-file arrival keeps archive metadata, physical-pickup framing and save neutrality',()=>{
 const {t,ctx}=game();ctx.now=Date.parse('2026-11-06');const before=t.encodeSave(),html=t.arrivalBody();
 assert.ok(html.includes('aria-hidden="true"'));assert.ok(html.includes('class="arrival-file" data-act="start-session"'));assert.ok(html.includes('线下实体二维码'));
 assert.ok(html.includes('第零号证人'));assert.ok(html.includes('WX-1946-011'));assert.ok(html.replace(/<[^>]+>/g,'').includes('无线电设备登记表（持有人栏缺失）'));assert.ok(!html.includes('receiver-art'));assert.equal(t.encodeSave(),before);
 t.setState({stepUnlocked:6,current:6,started:true});const save=t.encodeSave(),resume=t.arrivalBody();assert.ok(resume.includes('WX-1986-031'));assert.ok(resume.includes('继续调查'));
 ctx.document.documentElement={dataset:{lang:'en'}};const en=t.arrivalBody();assert.ok(en.includes('Witness Zero'));assert.ok(en.includes('Resume investigation'));assert.ok(en.includes('十三触点信号转盘图'));assert.equal(t.encodeSave(),save);
 assert.ok(t.activateFile('registry'));assert.ok(t.arrivalBody().includes('WX-1946-011'));
});
test('filing feedback is only armed after a new committed completion',()=>{
 const g=game(),{t,ctx}=g;ctx.now=Date.parse('2026-11-06');resolveScenes(g);t.activateFile('registry');t.complete('registry');assert.equal(t.getStation().justFiled,'registry');assert.equal(t.getState().stepUnlocked,1);
 t.getStation().justFiled=null;t.complete('registry');assert.equal(t.getStation().justFiled,null);t.complete('dial');assert.equal(t.getStation().justFiled,null);
});
test('station retains every combined tracks and judgment source segment across modes',()=>{
 const {t,D,ctx}=game();ctx.now=Date.parse('2026-11-06');t.setState({stepUnlocked:20});
 for(const id of ['tracks','judgment']){const s=D.steps.find(s=>s.id===id),all=t.renderMaterial(s),operate=t.operateBody(s),original=t.originalBody(s);assert.ok(operate.length>0);assert.ok(original.length>0);const split=all.indexOf(id==='tracks'?'<div class="terminal-block">':'<div class="dossier-list');assert.ok(split>0);assert.ok((operate+original).includes(all.slice(0,split)));assert.ok((operate+original).includes(all.slice(split)));}
});
test('completed instrument review is isolated and stale widget owners are rejected',()=>{
 const {t,ctx}=game();ctx.now=Date.parse('2026-11-06');t.setState({stepUnlocked:8,maiTapped:[2]});t.activateFile('dial');t.setMode('operate');const before=t.encodeSave();
 assert.ok(t.widgetChange('maimai','dial',s=>s.maiTapped.push(3)));assert.equal(t.encodeSave(),before);assert.deepEqual(Array.from(t.getStation().review.maiTapped),[2,3]);
 assert.equal(t.widgetChange('wave','reels',s=>s.waveA=1),false);
});
test('adopting an earlier save removes newly inaccessible pinned originals',()=>{
 const storage=new Map(),{t,ctx,listeners}=game({storage});ctx.now=Date.parse('2026-11-06');t.mutate(s=>{s.stepUnlocked=18;});const id=ctx.window.ZephyrUI.getModel().evidence.at(-1).id;assert.ok(t.pinEvidence(id));seed(storage,{stepUnlocked:0});listeners.storage({key:KEY});assert.ok(!ctx.window.ZephyrUI.getModel().pins.includes(id));
});
test('evidence cabinet groups only existing attachments and searches open metadata',()=>{
 const {t,ctx,D}=game();ctx.now=Date.parse('2026-11-06');t.setState({stepUnlocked:6});t.activateFile('dial');const before=t.encodeSave(),groups=t.evidenceGroups();
 assert.deepEqual(Array.from(groups[0].ids),Array.from(D.steps.find(s=>s.id==='dial').evidence));
 assert.equal(new Set(groups.slice(0,2).flatMap(g=>Array.from(g.ids))).size,t.allEvidence().length);
 assert.equal(new Set(groups.flatMap(g=>Array.from(g.ids))).size,t.availableMaterials().length);
 assert.ok(t.evidenceMatches('aWorkbook','维修台'));assert.ok(t.evidenceMatches('aWorkbook','１９４６'));assert.equal(t.evidenceMatches('aWorkbook','not present in metadata'),false);assert.equal(t.evidenceMatches('aTrace',''),false);
 const id='aWorkbook',saved=D.records[id].body;D.records[id].body='synthetic body-only marker';assert.equal(t.evidenceMatches(id,'synthetic body-only marker'),false);D.records[id].body=saved;
 assert.ok(t.evidencePicker().includes('id="evidence-search"'));assert.ok(t.evidenceBody(id).includes('original-evidence'));assert.ok(t.evidenceBody(id).includes(saved.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')));
 assert.ok(!t.evidencePicker().includes('data-evidence-id="aTrace"'));assert.equal(t.encodeSave(),before);
});
test('canonical workbook and robots discovery match available evidence',()=>{
 const {D}=game();assert.equal(readFileSync(new URL('../evidence/1946-workbook.txt',import.meta.url),'utf8'),D.records.aWorkbook.body);
 const robots=readFileSync(new URL('../robots.txt',import.meta.url),'utf8');for(const file of ['1986-reel-a.wav','1986-reel-b.wav'])assert.ok(robots.includes('/evidence/'+file));
});
test('presentation snapshot is immutable metadata and preserves canonical chapter grouping',()=>{
 const {ctx,t}=game();ctx.now=Date.parse('2026-11-06');
 const api=ctx.window.ZephyrUI,before=t.encodeSave(),model=api.getModel();
 assert.deepEqual(Array.from(model.chapters,c=>c.total),[2,4,4,4,4,2]);
 assert.equal(model.files.length,20);assert.equal(model.completed,0);
 assert.equal(model.files[0].status,'available');assert.equal(model.files[1].status,'locked');
 assert.equal(t.encodeSave(),before,'metadata reads cannot mutate current/save');
 assert.ok(Object.isFrozen(model));assert.ok(Object.isFrozen(model.files[0]));
 assert.ok(model.evidence.length>0);
 for(const name of ['body','receivedSeal','acceptedHash','notes','clue','answer'])assert.ok(!JSON.stringify(model).includes('"'+name+'":'));
 t.setState({stepUnlocked:6,current:0});const advanced=api.getModel();assert.equal(advanced.completed,6);assert.equal(advanced.files[0].status,'completed');assert.equal(advanced.files[6].status,'available');
 ctx.now=t.releaseTime(3)-1;assert.equal(api.getModel().files[6].status,'scheduled');
});
 test('presentation actions reject forged file/evidence navigation and unsupported panels',()=>{
 const {ctx,t}=game();ctx.now=Date.parse('2026-11-06');const api=ctx.window.ZephyrUI,before=t.encodeSave();
 assert.equal(api.navigate('judgment'),false);assert.equal(api.navigate('not-a-file'),false);
 assert.equal(api.openPanel('evidence','not-an-evidence'),false);assert.equal(api.openPanel('unknown'),false);
 assert.equal(t.encodeSave(),before);
});
 test('presentation subscriptions observe committed state, replacement, language and audio',()=>{
 const storage=new Map(),{ctx,t,listeners}=game({storage});ctx.now=Date.parse('2026-11-06');const api=ctx.window.ZephyrUI,models=[];
 const off=api.subscribe(m=>models.push(m));assert.ok(t.mutate(s=>{s.stepUnlocked=4;}));assert.equal(models.at(-1).completed,4);
 seed(storage,{stepUnlocked:2});listeners.storage({key:KEY});assert.equal(models.at(-1).completed,2);
 ctx.document.documentElement={dataset:{lang:'en'}};ctx.document.querySelector=()=>null;
 listeners['zephyr-language-change']();assert.equal(models.at(-1).locale,'en');
 const prev=models.at(-1).audioMuted;api.toggleSound();assert.notEqual(models.at(-1).audioMuted,prev);
 off();const count=models.length;api.toggleSound();assert.equal(models.length,count);
});
test('foreground return refreshes an elapsed release before replacing its timer',()=>{
 const {ctx,t,elements,listeners}=game();ctx.clearTimeout=()=>{};
 ctx.now=t.releaseTime(1)-1;t.activateFile('registry',true);ctx.window.ZephyrUI.toggleSound();
 // First publish the pre-release status, then return after the release boundary.
 listeners.focus();let rendered='';elements.reader={dataset:{},contains:()=>false,querySelector:()=>null,querySelectorAll:()=>[],set innerHTML(value){rendered=value;}};
 ctx.now=t.releaseTime(1)+1;ctx.document.visibilityState='visible';listeners.visibilitychange();
 assert.match(rendered,/arrival-view/);assert.doesNotMatch(t.recordBody('registry'),/not yet due for release/);
 assert.equal(ctx.window.ZephyrUI.getModel().files[0].status,'available');
});
 test('presentation observer errors cannot block saves or other subscribers',()=>{
 const {ctx,t}=game();let observed;ctx.window.ZephyrUI.subscribe(()=>{throw Error('synthetic observer failure');});ctx.window.ZephyrUI.subscribe(m=>{observed=m;});
 assert.ok(t.mutate(s=>{s.notes='synthetic note';}));assert.equal(t.getState().notes,'synthetic note');assert.equal(observed.completed,0);
});
 test('game shell loads its semantic presentation controller and keeps modal boundaries',()=>{
 const h=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 assert.ok(h.includes('class="game-page station-page"'));assert.ok(h.includes('id="session-menu"'));assert.ok(!h.includes('id="case-map"'));assert.ok(!h.includes('id="desk-tools"'));assert.ok(h.includes('id="reader"'));
 assert.ok(h.indexOf('src="js/game-ui.js"')>h.indexOf('src="js/engine.js"'));
 const ui=readFileSync(new URL('../js/game-ui.js',import.meta.url),'utf8');assert.ok(!ui.includes('localStorage'),'furniture never owns saves');assert.ok(!ui.includes('recordBody'),'map cannot render locked originals');
});
 test('evidence WAVs: both reels deployed, equal length, different content',()=>{
 const a=readFileSync(new URL('../evidence/1986-reel-a.wav',import.meta.url));
 const b=readFileSync(new URL('../evidence/1986-reel-b.wav',import.meta.url));
 assert.ok(a.length>500000);assert.equal(a.length,b.length);
 assert.ok(!a.equals(b),'reels must differ');
});
