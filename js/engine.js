/* 泽风计划 · 数字化阅览系统脚本（无第三方依赖）。
   呈现层：单页阅览 + 面板；无提示机制——校验只回答通过与不通过。 */
(() => {
 'use strict';
 const D = window.ZEPHYR_DATA, C = window.ZEPHYR_CONFIG;
 const STORAGE_KEY = 'zephyr-zero-arg-v1';
 // 界面双语：js/i18n.js 负责切换与 <html data-lang>；此处仅取当前语言，缺省中文。原件不译。
 const isEn = () => !!(document.documentElement && document.documentElement.dataset && document.documentElement.dataset.lang === 'en');
 const zt = (zh, en) => isEn() ? en : zh;
 // 档号与目录题名：与馆藏目录页（catalog.html）保持一致。
 const ARCHIVE_NO = {registry:'WX-1946-011',institution:'WX-1946-012',namecode:'WX-1946-013',building:'WX-1986-021',reelnote:'WX-1986-022',reels:'WX-1986-023',dial:'WX-1986-031',tracks:'WX-1986-032',parity:'WX-1986-033',noisewords:'WX-1986-034',audit:'WX-1986-041',hiddenindex:'ZF-2026-042',dropcoords:'ZF-2026-043',newsclip:'WX-1986-044',annex:'WX-1986-052',recursion:'ZF-2026-061',provenance:'ZF-2026-071',triangulate:'ZF-2026-073',masterkey:'ZF-2026-081',judgment:'ZF-2026-082'};
 const TITLES = {registry:'无线电设备登记表（持有人栏缺失）',institution:'档案A附件（双印章存疑页）',namecode:'值班名单附页（索引七组）',building:'校园建筑名称变更备忘（复印件）',reelnote:'第二卷录音夹页（密文纸条）',reels:'数字采样列表（REEL-A / REEL-B）',dial:'十三触点信号转盘图',tracks:'双轨信号修复记录图',parity:'电气工程校验记录（三个接收字）',noisewords:'双卷原始录音（未数字化文件）',audit:'1986年影印件（含异常插入行）',hiddenindex:'第042号卷宗（数字化失败）',dropcoords:'取件通知（Z-00）',newsclip:'剪角报纸残件（1986）',annex:'B柜英文维修附录（两列索引）',recursion:'旧档引用件（递归残档）',provenance:'四份材料处理日志摘录',triangulate:'外业复核记录（三处基点）',masterkey:'加密封存的原始审计表',judgment:'审计判断表（六行）'};
 // 证物翻拍照片：纯装饰做旧件，图注与画面均不含校验信息。
 const PHOTO = {
  registry:'<figure class="evidence-photo reveal"><img src="assets/1946-scan.jpg" alt="设备登记表的翻拍照片" loading="lazy"/><figcaption>设备登记表 · 1946 年翻拍件（馆藏复制）</figcaption></figure>',
  reels:'<figure class="evidence-photo reveal"><img src="assets/photo-reels.svg" alt="盘式录音机的翻拍照片" loading="lazy"/><figcaption>修复台上的盘式录音机 · 1986 年翻拍件</figcaption></figure>',
  dial:'<figure class="evidence-photo reveal"><img src="assets/photo-dial.svg" alt="信号转盘触点的翻拍照片" loading="lazy"/><figcaption>转盘触点特写 · 1986 年翻拍件</figcaption></figure>',
  building:'<figure class="evidence-photo reveal"><img src="assets/photo-building.svg" alt="校园建筑的翻拍照片" loading="lazy"/><figcaption>西南校区旧影 · 1986 年翻拍件</figcaption></figure>',
  noisewords:'<figure class="evidence-photo reveal"><img src="assets/photo-reels.svg" alt="盘式录音机的翻拍照片" loading="lazy"/><figcaption>原始载体 · 未数字化归档</figcaption></figure>'
 };
 const defaultState = () => ({v:1,started:false,stepUnlocked:0,current:0,hints:{},notes:'',solved:{},receivedSeal:'',ended:false,endingChoice:'',waveA:null,waveB:null,bits:'0100011',verdict:[null,null,null,null,null,null],traceOpen:[],drawAttempts:0,maiTapped:[],capstoneOk:false,introDismissed:false});
 function normalizeState(obj){
  const s={...defaultState(),...(obj&&typeof obj==='object'&&!Array.isArray(obj)?obj:{})};
  s.v=1;s.stepUnlocked=Math.max(0,Math.min(D.steps.length,Number.isInteger(s.stepUnlocked)?s.stepUnlocked:0));
  s.current=Math.max(0,Math.min(D.steps.length-1,Number.isInteger(s.current)?s.current:0));
  s.notes=typeof s.notes==='string'?s.notes:'';s.receivedSeal=typeof s.receivedSeal==='string'?s.receivedSeal:'';
  s.solved=s.solved&&typeof s.solved==='object'&&!Array.isArray(s.solved)?s.solved:{};
  s.verdict=Array.from({length:6},(_,i)=>typeof s.verdict?.[i]==='boolean'?s.verdict[i]:null);
  s.bits=/^[01]{7}$/.test(s.bits)?s.bits:defaultState().bits;
  s.maiTapped=[...new Set((Array.isArray(s.maiTapped)?s.maiTapped:[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=13))];
  s.traceOpen=(Array.isArray(s.traceOpen)?s.traceOpen:[]).filter(n=>['1946','1986','1998','2026'].includes(n));
  for(const k of ['waveA','waveB'])if(!Number.isInteger(s[k])||s[k]<0||s[k]>=12)s[k]=null;
  s.drawAttempts=Number.isInteger(s.drawAttempts)&&s.drawAttempts>=0?s.drawAttempts:0;
  for(const k of ['started','ended','capstoneOk','introDismissed'])s[k]=s[k]===true;
  return s;
 }
 let persisted=null,storageUnavailable=false,durable=false,epoch=0,conflictNotice=false;
 const recoveryDrafts={};
 let state;
 try{persisted=localStorage.getItem(STORAGE_KEY);state=normalizeState(JSON.parse(persisted||'{}'));}
 catch{state=defaultState();storageUnavailable=true;}
 function captureRecovery(){
  if(state.notes)recoveryDrafts['notes-field']=state.notes;
  for(const id of ['notes-field','save-import','answer-input','capstone-input']){
   const el=document.getElementById(id);if(el?.value)recoveryDrafts[id]=el.value;
  }
 }
 function syncState(render=true){
  let raw;try{raw=localStorage.getItem(STORAGE_KEY);}catch{storageUnavailable=true;durable=false;renderStorageNotice();return true;}
  if(raw===persisted)return true;
  captureRecovery();persisted=raw;epoch++;conflictNotice=true;
  try{state=normalizeState(JSON.parse(raw||'{}'));storageUnavailable=false;}catch{state=defaultState();storageUnavailable=true;}
  resultMessage='';
  if(render)refreshFromState();
  return false;
 }
 function mutate(change){
  if(!syncState())return false;
  const previous=state;state=normalizeState(JSON.parse(JSON.stringify(state)));change(state);
  if(!save()){if(!conflictNotice)state=previous;return false;}
  epoch++;return true;
 }
 let resultMessage = '', curStep = null, REL = './', failStreak = 0;
 let panelKind = null, panelEvId = null;
 const norm = v => String(v??'').normalize('NFKC').toUpperCase().replace(/[\s\-_/:.,，。；;()（）\[\]]/g,'');
 const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pad = n => String(n).padStart(2,'0');
 const stepCount = D.steps.length;
 const solvedCount = () => Math.min(state.stepUnlocked,stepCount);
 const isDone = i => i < state.stepUnlocked;
 function save(){
  if(!syncState())return false;
  const raw=JSON.stringify(state);durable=false;
  try{
   localStorage.setItem(STORAGE_KEY,raw);
   if(localStorage.getItem(STORAGE_KEY)!==raw){syncState();return false;}
   persisted=raw;storageUnavailable=false;durable=true;
  }catch{storageUnavailable=true;}
  refreshExport();renderStorageNotice();return true;
 }
 function refreshExport(){const el=document.getElementById('save-export');if(el)el.value=encodeSave();}
 function renderStorageNotice(){
  if(!document.querySelector)return;
  let el=document.getElementById('storage-notice');
  if(!el){const host=document.querySelector('main .shell');if(!host)return;el=document.createElement('div');el.id='storage-notice';el.className='storage-notice';el.setAttribute('role','status');host.prepend(el);}
  el.hidden=!storageUnavailable&&!conflictNotice;
  const message=storageUnavailable?zt('浏览器无法保存记录。目前进度仅在本页内存中；离开前请导出存档。扫码链接尚未安全保存时，请保留原链接。','Browser storage is unavailable. Progress is in this page only; export a save before leaving. Keep the original QR link until it is safely stored.'):zt('另一页面已更改存档。本页已采用最新记录，未覆盖它。旧输入保留在工作台的恢复草稿中；请核对后再继续。','Another page changed the save. This page adopted the latest record without overwriting it. Previous input is available in workbench recovery drafts; review it before continuing.');
  if(el.dataset.message===message)return;el.dataset.message=message;el.textContent=message;
  if(storageUnavailable){const button=document.createElement('button');button.className='btn';button.textContent=zt('导出本页存档','Export this page save');button.addEventListener('click',()=>downloadText('zephyr-session-save.txt',encodeSave()));el.appendChild(button);}
 }
 function refreshFromState(){
  if(curStep){const idx=isAccessible(stepIdx(curStep.id))?stepIdx(curStep.id):Math.min(state.stepUnlocked,stepCount-1);curStep=D.steps[idx];}
  reboot(false);renderFinale(false);renderStorageNotice();
 }
 function recoveryBody(){return Object.entries(recoveryDrafts).map(([id,value])=>`<section class="recovery-draft"><p class="k">${zt('恢复草稿','RECOVERY DRAFT')} · ${esc(id)}</p><textarea class="note-area" readonly aria-label="${zt('恢复草稿','Recovery draft')}">${esc(value)}</textarea></section>`).join('');}
 const showToast = msg => {const el = document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);window.setTimeout(()=>el.remove(),3300)};
 // Production always enforces the configured schedule; no preview bypass.
 function releaseTime(day){const t=Date.parse(C.launchAt);if(!Number.isFinite(t)||!Number.isInteger(day)||day<1||!Number.isFinite(C.chapterIntervalHours)||C.chapterIntervalHours<=0)return Infinity;return t+(day-1)*C.chapterIntervalHours*3600000}
 function released(day){return Date.now()>=releaseTime(day)}
 function launchFmt(ms){if(!Number.isFinite(ms))return zt('待馆方确认','PENDING CONFIRMATION');return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Shanghai'}).format(new Date(ms))}
 function isAccessible(i){return i>=0&&i<stepCount&&i<=state.stepUnlocked&&released(D.steps[i].day)}
 function allEvidence(){const allowed=new Set();D.steps.slice(0,Math.min(stepCount,state.stepUnlocked+1)).filter(s=>released(s.day)).forEach(s=>(s.evidence||[]).forEach(a=>allowed.add(a)));return [...allowed]}
 async function sha256Text(text){const bytes=new TextEncoder().encode(text),digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('')}
 const acceptedHash = {
  registry:'fec373c6eee960919ca55d467bc84ac21fc42393d3023f797e7dc23cfa8c6a99',
  institution:'b4dec72f48fcec95ad30ffcdfc00c60694495212a0926447e75cef82cb1e217b',
  namecode:'fe5319a299d6405d01ac734871d17c6dc8f1f179acd51ad61caf0a0ab594d88c',
  building:'9893e409c7a9345b6aa41535796eff4310271c74ea976b67912d28ea453559c7',
  reelnote:'044ea6832dda8d5d166e146995f06a4f20ab068f3369abc4ca18ee3121c43c32',
  dial:'3f7f1eb3bbf379c2fc803158ec5b9a6436d8bf9af04292ced62b4b1dce5f513d',
  tracks:'95b35eb24850e2f1b198251e3b586f8c4e7db70663d4a6ef5194337039f0bbc4',
  audit:'498e1ba825b5509a6a1d1a5a756eb949d56b2f7b249905147fcebfaf54476759',
  hiddenindex:'64020919c77ccc71bb66afc723d05284a4ff34e71c9a69289742a43543c84fed',
  annex:'2898d5d8c4d452125797f5ca9398050b66ce66ad351d8ed6b2f153a7fd45236f',
  recursion:'efca1f21c91251d72b5e3121f7755698ba956fd426fea08892efb989c14eec02',
  provenance:'d8bef60d4bc0aa1ce299f4410e303a39132714e455ce6ca6aacb20243a80d3d6',
  masterkey:'a77f3990fa984c9abb45566a1ac500e5096ac4c83bd451968cfe9fac70017538',
 noisewords:'47d4973b88d23ce458e1c06adca4c15c7a9fc04cd6ff8d3e2ac1e1234b640f6e',
 newsclip:'bc48c2ddc88c4951d7ad5de01447b2d44cb2602ec2ea8967fd5ed73a549be449',
 triangulate:'e553c192e8213a6ae642dba7adc401b636566d2cc8995451b98570706b5e34f9'
 };
 const finaleCapstoneHash = '2de847be143a0f215df255c8586163c48f9f6e2def77f7ba2f5b109885a0827c';
 // 校验失败只给冷回复。没有方法，没有格式提示，没有第二次机会之外的宽限。
 function rejectMsg(){const staged=[zt('校验失败 :: CHECKSUM MISMATCH','VERIFY FAILED :: CHECKSUM MISMATCH'),zt('输入与既有校验值不一致。记录未变更。','The input does not match the recorded checksum. No change was made.')];return staged[Math.min(failStreak,staged.length)-1]}
 async function submitInput(value){if(!syncState())return;const s=curStep,ticket=epoch;if(!s||!isAccessible(stepIdx(s.id))||isDone(stepIdx(s.id)))return;const input=norm(value);
  const hash=await sha256Text(s.id+':'+input);
  if(!syncState()||ticket!==epoch||curStep?.id!==s.id)return;
  if(acceptedHash[s.id]&&hash===acceptedHash[s.id]){complete(s.id);return}
  failStreak++;sfx.reject();resultMessage=rejectMsg();reboot()
 }
 const stepIdx = id => D.steps.findIndex(s=>s.id===id);
 function complete(id){if(!syncState())return;const idx=stepIdx(id);if(!isAccessible(idx)||idx!==state.stepUnlocked||state.solved[id])return;const s=D.steps[idx];
  if(!mutate(s=>{s.solved[id]=true;s.stepUnlocked=idx+1;s.current=idx;}))return;
  resultMessage='';failStreak=0;showToast(zt(`修复校验通过 :: ${TITLES[id]||s.title} 已归档`,`VERIFIED :: ${TITLES[id]||s.title} FILED`));sfx.accept();ceremony();
  if(state.stepUnlocked===stepCount){console.log('%cARCHIVE-00 :: CASE Z-00 CLOSED','color:#b23a2e;font-family:monospace;font-size:12px');const fl=document.getElementById('finale-link');if(fl)fl.hidden=false}
  const ticket=epoch;window.setTimeout(()=>{if(syncState()&&epoch===ticket)reboot();},700);
 }
 /* ===== 入场动效（prefers-reduced-motion 由 CSS 兜底） ===== */
 function animateIn(scope){const els=scope.querySelectorAll('.reveal');if(!els.length)return;
  els.forEach((el,i)=>el.style.transitionDelay=Math.min(i*70,420)+'ms');
  window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>els.forEach(el=>el.classList.add('in'))))}
 /* ===== 解锁仪式：印章式「通过」 ===== */
 function ceremony(){const ov=document.createElement('div');ov.className='seal-ceremony';ov.setAttribute('aria-hidden','true');
  const mk=document.createElement('div');mk.className='seal-mark';mk.textContent=zt('通过','PASS');ov.appendChild(mk);document.body.appendChild(ov);
  window.setTimeout(()=>ov.remove(),1500)}
 /* ===== 档案材料（只呈现原始材料本身，不带任何方法说明） ===== */
 function term(s){return `<div class="terminal-block">${esc(s)}</div>`}
 function renderMaterial(s){switch(s.kind){
  case 'hex':return term('NO. 00 / DEVICE REGISTRY · 17 NOV 1946 · 23:17\nCHANNEL: WX/17 · 文理注册渠道\nC1: 4D 41 52 4B 20 49 49 20 44 45 53 4B 20 53 45 54\nC2: 4F 4E 45 20 4F 50 45 52 41 54 4F 52\nC3: 59 48 2D 31 37\nC4: 52 45 47 49 53 54 45 52 20 45 49 47 48 54 20 50 55 4C 53 45 53\n栏序：见批次单（证物两份）。');
  case 'source':return term(s.id==='institution'?'ARCHIVE A / ANNEX LETTERHEAD\nSTAMP I: NUS / 1946\nSTAMP II: KING EDWARD VII COLLEGE OF MEDICINE / 1946\nINK: BOTH CONSISTENT WITH PERIOD\n渠道注记：WX/17 为文理注册渠道。':'CAMPUS BUILDING MEMO / FRAGMENT\n1986: NTI / SOUTH-WEST CAMPUS\n2015: THE HIVE · THE LEARNING HUB\n2026: [ ？？？ ]\n注：本楼不止一个旧名。新名见本校 2026 年新闻稿。');
  case 'book-zh':return `<div class="paper"><div class="paper-title">第三抄本 / 1946 RECOVERED WORKBOOK</div><pre class="paper-lines">${esc(D.manual.map((l,i)=>`${pad(i+1)}  ${l}`).join('\n'))}</pre><span class="paper-index">${esc(s.clue)}</span></div>`;
  case 'cipher':return term(`${s.clue}\n\n[印章] KEY: AS REGISTERED IN 1946 · TELEGRAPHIC FORM`);
  case 'wave':return renderWave();
  case 'maimai':return renderMai();
  case 'arcaea':return renderArcaea();
  case 'hamming':return renderHamming();
  case 'earth':return renderGacha();
  case 'absent':return term('TRANSFER STATUS: FAILED\nPAGES DIGITIZED: 0\n\n该卷材料未随数字化系统保存。\n分发渠道各有代号；渠道顺序见系统日志。');
  case 'drop':return renderDrop(s);
  case 'book-en':return `<div class="paper"><div class="paper-title">CABINET B / MAINTENANCE ANNEX / 1986</div><pre class="paper-lines">${esc(D.annex.map((l,i)=>`${pad(i+1)}  ${l}`).join('\n'))}</pre><span class="paper-index">${esc(s.clue)}</span></div>`;
  case 'binary':return term('SOURCE: 递归实验残档 · 节点不详\n\n01010011 01010001 01010000 01010101\n01010011 01000101 01001000 01010101\n01000111 01001000 01001011 01001100\n01011000 01000100 01011000 01001111\n01000101 01010001 01011001 01010010\n00111101 00111101 00111101 00111101');
  case 'audio':return term('ARCHIVE PROTOCOL / WX-1986-034\n原始录音未随数字化系统保存。\nREEL-A / REEL-B：等长双卷，按文件层归档。\n机器人的登记表（robots.txt）记有文件层的全部路径。\n读原始载体，须自备工具。');
  case 'press':return `<figure class="press-clip reveal"><img src="assets/press-1986.svg" alt="剪角报纸残件" loading="lazy"/><figcaption>剪角残件 · 1986 年报纸影印（报头与日期栏缺失）</figcaption></figure>`;
  case 'survey':return term('SURVEY NOTE / FIELD RECHECK / ZF-2026-073\n\n基点一：1946 年文理注册那所的旧校园（BUKIT TIMAH 路）\n方位 131° / 平距 4507 m\n\n基点二：第二枚印章机构的旧楼（COLLEGE ROAD）\n方位 50° / 平距 2032 m\n\n基点三：1937 年启用的旧机场塔台（KALLANG）\n方位 239° / 平距 3303 m\n\n三线交于一点。复核栏只问：该点今日之名。');
  case 'provenance':return renderProvenance();
  case 'sealed':return term('AUDIT TABLE / ORIGINAL / SEALED\n\nSJEYL WSFXL DEOEK VXLWJ NGPSW KGEAQ HAFWE XIFVM PPTJO B\n\nSEAL: INTACT · KEY NOT ON FILE')+`<p class="tiny seal-footnote">原件不在服务器里。</p>`;
  case 'verdict':return renderVerdict();
  default:return ''
 }}
 function renderAnswerPanel(s,done){if(done||s.kind==='drop')return '';
  if(['wave','hamming','verdict'].includes(s.kind)){return `<div class="answer reveal"><p class="k">${zt('修复校验','VERIFY')}</p>${renderSpecialControls(s)}${renderFeedback()}</div>`}
  return `<div class="answer reveal"><form id="answer-form" class="answer-row"><input type="text" id="answer-input" aria-label="${zt('输入核验内容','Enter verification input')}" autocomplete="off" spellcheck="false" placeholder="${zt('输入核验内容','Enter verification input')}"/><button type="submit" class="btn">${zt('核验','VERIFY')}</button></form>${renderFeedback()}</div>`}
 function renderFeedback(){return resultMessage?`<p class="feedback" role="status">${esc(resultMessage)}</p>`:''}
 /* REEL-X：真正的重复必须字节序列一致，不只是波形“看起来像”。 */
 const generateWave=(seed)=>{let x=seed>>>0;return Array.from({length:16},()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return Math.round(((x>>>11)/2097151)*190-95)})};
 const aWaves=Array.from({length:12},(_,i)=>generateWave(i*167+41));
 const bWaves=Array.from({length:12},(_,i)=>generateWave(i*239+780));
 bWaves[6]=aWaves[3].slice();
 // 三段近伪片段：波形肉眼无异，逐位比对与摘要都不通过。
 bWaves[2]=aWaves[3].slice();bWaves[2][7]+=1;
 bWaves[9]=aWaves[5].slice();bWaves[9][2]-=1;
 aWaves[11]=bWaves[4].slice();aWaves[11][9]+=1;
 const waveDigestOf=async arr=>{if(!crypto?.subtle)return '';let payload=new Uint8Array(new Int16Array(arr).buffer);let hash=await crypto.subtle.digest('SHA-256',payload);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('')};
 let waveDigest='';waveDigestOf(aWaves[3]).then(h=>{waveDigest=h;const el=document.getElementById('wave-digest-line');if(el&&curStep&&curStep.id==='reels')el.textContent=`${zt('采样摘要存档','Sample digest on file')} / SHA-256(A4)\n${h}`});
 function plotWave(arr){let xy=arr.map((n,i)=>`${5+i*6.1},${35-n*.20}`).join(' ');return `<svg viewBox="0 0 102 70" preserveAspectRatio="none" aria-hidden="true"><line x1="0" x2="102" y1="35" y2="35" stroke="currentColor" stroke-width=".7" opacity=".25"/><polyline points="${xy}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
 function waveRow(side,arr){const selected=side==='A'?state.waveA:state.waveB;return `<div class="reveal"><div class="wave-label">REEL-${side} / DIGITAL FRAGMENTS</div><div class="wave-track">${arr.map((a,i)=>`<button class="wave-cell ${selected===i?'selected':''}" data-wave="${side}:${i}" aria-label="${zt(`${side} 卷，第 ${i+1} 段`,`REEL-${side}, fragment ${i+1}`)}" aria-pressed="${selected===i}">${plotWave(a)}<span>${side}${i+1}</span></button>`).join('')}</div></div>`}
 function renderWave(){const done=isDone(stepIdx('reels'));return `<div class="wave-grid">${waveRow('A',aWaves)}${waveRow('B',bWaves)}</div><div id="wave-digest" class="hash-result reveal"></div>${done?`<div id="wave-digest-line" class="hash-result reveal">${zt('采样摘要存档','Sample digest on file')} / SHA-256(A4)\n${waveDigest}</div>`:''}`}
 function renderSpecialControls(s){if(s.kind==='wave')return `<p><button class="btn" data-act="compare-wave">${zt('校验采样','VERIFY SAMPLES')}</button></p>`;
  if(s.kind==='hamming')return `<p><button class="btn" data-act="check-hamming">${zt('验证校验位','CHECK PARITY')}</button></p>`;
  if(s.kind==='verdict')return `<p><button class="btn" data-act="check-verdict">${zt('提交来源审计','SUBMIT AUDIT')}</button></p>`;return ''}
 async function verifyWave(){if(!syncState())return;const ticket=epoch;if(state.waveA===null||state.waveB===null){resultMessage=zt('请先在两卷录音中各选一个片段。','Select one fragment on each reel first.');reboot();return}
  const A=aWaves[state.waveA],B=bWaves[state.waveB];const same=A.every((x,i)=>x===B[i]);
  const hashA=await waveDigestOf(A),hashB=await waveDigestOf(B);
  if(!syncState()||ticket!==epoch||curStep?.id!=='reels')return;
  if(same){complete('reels');return}
  resultMessage=zt(`采样不一致 :: A${state.waveA+1} ≠ B${state.waveB+1}`,`SAMPLE MISMATCH :: A${state.waveA+1} ≠ B${state.waveB+1}`);sfx.reject();reboot();let el=document.getElementById('wave-digest');if(el)el.textContent=`SHA(A) ${hashA.slice(0,24)}… / SHA(B) ${hashB.slice(0,24)}…`
 }
 /* 转盘：字符须逐个触发显示；纸上只剩一张阻抗表，转盘自己的次序要靠它读。 */
 const maiLetters=['E','D','G','R','A','I','B','T','H','E','R','H','W'];
 const maiOhm=[3.3,0.68,15,4.7,1.5,10,0.47,33,47,6.8,1.0,22,2.2];
 function renderMai(){const N=maiLetters.length,r=112,ox=150,oy=150,padPx=48;
  const revealed=new Set(state.maiTapped||[]);
  const pads=maiLetters.map((c,i)=>{const angle=-Math.PI/2+i*2*Math.PI/N,x=ox+r*Math.cos(angle)-padPx/2,y=oy+r*Math.sin(angle)-padPx/2,shown=revealed.has(i+1);
   return `<button class="mai-pad" data-mai="${i+1}" style="left:${x/3}%;top:${y/3}%;width:16%;height:16%" aria-pressed="${shown}" aria-label="${zt(`触点 ${i+1}，阻抗 ${maiOhm[i]} 千欧，${shown?'字符 '+c:'未揭示'}`,`Contact ${i+1}, ${maiOhm[i]} kilo-ohms, ${shown?'character '+c:'unrevealed'}`)}"><small>${i+1} · ${maiOhm[i]}k</small>${shown?c:'·'}</button>`;
  }).join('');
  const taps=state.maiTapped||[];
  return `<div class="mai-scene reveal"><div class="mai-scroll" tabindex="0" role="region" aria-label="${zt('信号转盘，可横向滚动','Signal dial, horizontally scrollable')}"><div class="mai-round">${pads}<div class="mai-center">13 CHANNELS</div></div></div><p class="scroll-hint">${zt('窄屏可横向滚动转盘；键盘聚焦后用左右键。','On narrow screens, scroll the dial sideways; use arrow keys when focused.')}</p><div class="mai-info" aria-live="polite"><div class="mai-taps">${taps.length?taps.map(n=>`<span class="tap-number">${n} · ${esc(maiLetters[n-1])}</span>`).join(''):`<span class="tiny">${zt('触发触点以显示字符','Tap a contact to reveal its character')}</span>`}</div>${taps.length?`<div class="terminal-block">TRANSCRIPT :: ${esc(taps.map(n=>maiLetters[n-1]).join(''))}</div><p><button class="btn" data-act="mai-reset">${zt('清空转写','CLEAR TRANSCRIPT')}</button></p>`:''}</div></div>`}
 const arcaeaTarget='MIRRORYEAR1986';const arcBeats=[9,4,12,2,14,7,10,5,1,13,6,11,3,8];const arcaeaActive=['sky','floor','sky','floor','floor','sky','sky','floor','sky','floor','floor','sky','floor','sky'];
 const otherNoise=['Q','V','Z','K','T','A','7','G','L','P','W','R','5','H'];
 function renderArcaea(){let sky='',floor='';for(let i=0;i<arcaeaTarget.length;i++){const on=arcaeaActive[i],ch=arcaeaTarget[arcBeats[i]-1];let s=on==='sky'?ch:otherNoise[i],f=on==='floor'?ch:otherNoise[i];sky+=`<div class="arc-cell ${on==='sky'?'on sky':''}">${s}<small>${on==='sky'?'●':''}</small></div>`;floor+=`<div class="arc-cell ${on==='floor'?'on floor':''}">${f}<small>${on==='floor'?'●':''}</small></div>`}const stamps=arcBeats.map(b=>`<div class="arc-cell arc-stamp"><small>${b}</small></div>`).join('');return `<div class="arc-scroll reveal" tabindex="0" role="region" aria-label="${zt('双轨与共用时标，可横向滚动','Both tracks and shared stamps, horizontally scrollable')}"><div class="arcaea-board"><div class="lane-title"><span>SKY / 2026</span><span>UPPER TRACK</span></div><div class="arc-row">${sky}</div><div class="lane-title"><span>FLOOR / 1986</span><span>LOWER TRACK</span></div><div class="arc-row">${floor}</div><div class="lane-title"><span>${zt('时标','STAMP')} / STAMP</span><span>${zt('誊录顺序未整理','Transcription order not settled')}</span></div><div class="arc-row">${stamps}</div></div></div><p class="scroll-hint">${zt('窄屏请横向滚动，查看两轨及全部时标；键盘聚焦后用左右键。','Scroll sideways on narrow screens to see both tracks and all stamps; use arrow keys when focused.')}</p>`+term('SECOND LAYER / CIPHER\n\nFPVCC NCVTI MKBTC GGIDK TMLGD VP\n\n[印章] KEY: 亮格连读所得')}
 function hammingSyndrome(bits){const b=[...bits].map(Number),xor=indices=>indices.reduce((r,i)=>r^b[i-1],0);let s1=xor([1,3,5,7]),s2=xor([2,3,6,7]),s4=xor([4,5,6,7]);return {s1,s2,s4}}
 const pullCards=[
  {id:'U-11',char:'ARCHIVE / 01',star:2},{id:'U-42',char:'ARCHIVE / 02',star:2},
  {id:'U-16',char:'ARCHIVE / 03',star:3},{id:'U-27',char:'ARCHIVE / 04',star:2},
  {id:'U-09',char:'ARCHIVE / 05',star:2},{id:'672',char:'神代类',star:4,title:'为内心，拍一张'},
  {id:'U-29',char:'ARCHIVE / 07',star:2},{id:'U-08',char:'ARCHIVE / 08',star:2},
  {id:'U-37',char:'ARCHIVE / 09',star:2},{id:'U-31',char:'ARCHIVE / 10',star:3}
 ];
 function renderGacha(){return `<div class="gacha-sim reveal"><div class="gacha-grid">${state.drawAttempts?pullCards.map((c,i)=>`<div class="gacha-card ${c.star===4?'ssr':c.star===3?'sr':''}" style="animation-delay:${i*50}ms"><div class="gacha-stars">${'★'.repeat(c.star)}</div><div class="gacha-symbol">${c.star===4?'Z':String(i+1).padStart(2,'0')}</div><div class="gacha-card-name">${esc(c.char)}</div><div class="gacha-card-id">${esc(c.id)}</div></div>`).join(''):`<div class="gacha-covered">${zt('第 345 号封存招募','Sealed Recruitment No. 345')}</div>`}</div><div class="gacha-controls"><button class="btn" data-act="gacha">${state.drawAttempts?zt('再次重建同一段招募','Rebuild the same pull again'):zt('恢复十连招募','Restore the ten-pull')} →</button><span class="tiny">REPLAY COUNT: ${state.drawAttempts}</span></div>${state.drawAttempts>=2?`<p class="gacha-warning">${zt('REPLAY ANOMALY：两次重建的顺序与结果完全一致。','REPLAY ANOMALY: both rebuilds produced the same order and the same results.')}</p>`:''}</div><div class="terminal-block reveal">GACHA_ID = ???\nDISPLAY_CARD_SOURCE_ID = ???\nINITIAL_COMMIT_DATE = ????????\n\nREFERENCE: Zephyruz/Earth-online</div>`}
 function renderHamming(){const syn=hammingSyndrome(state.bits);return `<div class="hamming-board reveal"><div class="bit-row">${[...state.bits].map((v,i)=>`<button class="bit-btn ${'0100011'[i]!==v?'is-flipped':''}" data-bit="${i}" aria-label="${zt(`第 ${i+1} 位：${v}`,`Bit ${i+1}: ${v}`)}">${v}<small>${i+1}</small></button>`).join('')}</div><div class="syndrome">S4 / S2 / S1 = <b>${syn.s4}${syn.s2}${syn.s1}</b></div></div>`}
 function renderProvenance(){const options=[{id:'1946',t:'1946 / DIARY-IMAGE',children:['narrative-v3','OCR-MERGE','CORE-17']},{id:'1986',t:'1986 / REEL-B',children:['signal-v2','REEL-EXPORT','CORE-17']},{id:'1998',t:zt('1998 / SURVEY 〔已注销〕','1998 / SURVEY [REVOKED]'),children:['survey-idx','LEGACY-IMPORT','CORE-18']},{id:'2026',t:'2026 / EVALUATION',children:['eval-v6','REPORT-ASSEMBLER','CORE-17']}];return `<div class="dossier-list reveal">${options.map(o=>`<button class="dossier-item linkbtn ${o.id==='1998'?'is-revoked':''}" data-trace="${o.id}"><span class="dossier-date">INPUT NODE / ${o.id}</span> <span class="dossier-name">${o.t} ${state.traceOpen.includes(o.id)?'−':'+'}</span><br>${state.traceOpen.includes(o.id)?o.children.map((x,i)=>`↳ ${i===2?'INGEST_ROOT':'PARENT_'+(i+1)}: ${x}`).join('<br>'):zt('展开处理链','Expand processing chain')}</button>`).join('')}</div>`}
 function renderDrop(s){const done=isDone(stepIdx('dropcoords'));
  if(done){return `<div class="drop-receipt reveal"><div class="eyebrow">${zt('封存回执','SEALED RECEIPT')} / Z-00 / RECEIVED</div><pre class="seal-code">${esc(state.receivedSeal||zt('【记录缺失】','[RECORD MISSING]'))}</pre><p class="tiny">${zt('封存条已核验。回执随卷存档；纸上原件即密钥凭证。','Seal strip verified. The receipt is filed with the volume; the paper original is the key voucher.')}</p></div>`}
  return `<div class="drop-lock reveal"><div class="eyebrow">Z-00 / DELIVERY LOCK</div><pre class="seal-code">${esc(C.pickup.encodedCoords||'')}</pre><p class="tiny">${esc(C.pickup.instructions||'')}</p></div>`}
 const questions=[['1946 年设备记录确实记载了八组电脉冲。',true],['许静仪的身份已由 1946 年未经修改的人员原件证实。',false],['1986 第二卷录音独立于第一卷采样形成。',false],['2026 内部的独立审计记录曾被人为筛选或改写。',true],['登记表上第二枚 1946 印章（KING EDWARD VII COLLEGE OF MEDICINE）系 2026 年伪造。',false],['2015 年该建筑曾同时正式使用 THE HIVE 与 THE LEARNING HUB 两个名字。',true]];
 function renderVerdict(){return `<div class="terminal-block reveal">FINAL AUDIT / ORIGINAL SOURCE\nDEVICE INDEX: 见第一卷\nFOUND: EIGHT PULSES\nOPERATOR IDENTITY: NOT ESTABLISHED\nSAMPLE INDEPENDENCE: FAILED\nEVALUATION INTEGRITY: FAILED\nSECOND STAMP 1946: GENUINE / OFF-CHANNEL\n2015 DUAL NAME: BOTH OFFICIAL</div><div class="dossier-list reveal" style="margin-top:16px">${questions.map((q,i)=>`<div class="claim"><div class="memory-card-title">CLAIM ${pad(i+1)}</div><div class="claim-text">${esc(q[0])}</div><div class="validation-grid"><label><input type="radio" name="claim${i}" value="T" ${state.verdict[i]===true?'checked':''}/> ${zt('可由证据支持','Supported by the evidence')}</label><label><input type="radio" name="claim${i}" value="F" ${state.verdict[i]===false?'checked':''}/> ${zt('不能由证据支持','Not supported by the evidence')}</label></div></div>`).join('')}</div>`}
 function submitVerdict(){if(!syncState())return;const chosen=state.verdict;if(chosen.some(x=>x===null)){resultMessage=zt('尚有未完成的判断。','Some claims are still unanswered.');reboot();return}const all=questions.every((q,i)=>q[1]===chosen[i]);if(all){complete('judgment')}else{sfx.reject();resultMessage=zt('至少一项结论与原件不符。','At least one conclusion does not match the original.');reboot()}}
 /* ===== 卷宗装配（著录：档号 / 题名 / 状态；无序号计数） ===== */
 function recMeta(s){const idx=stepIdx(s.id);const no=ARCHIVE_NO[s.id]||'—';const status=isDone(idx)?zt('修复校验已完成','VERIFICATION COMPLETE'):zt('开放阅览','OPEN FOR READING');
  return `<header class="rec-meta reveal"><span class="rec-no">${esc(no)}</span><h2 class="rec-title">${esc(TITLES[s.id]||s.title)}</h2><span class="rec-status ${isDone(idx)?'is-done':''}">${status}</span></header>`}
 function evidenceLine(s){return `<p class="evline reveal">${zt('相关证物','Related evidence')}：${s.evidence.map(id=>`<button class="linkbtn" data-act="show-evidence" data-ev="${esc(id)}">${esc(D.records[id].title)}</button>`).join(' · ')}</p>`}
 function recordBody(stepId){const idx=stepIdx(stepId);if(idx<0)return `<p>${zt('目录中无此档号。','No such file number in the catalog.')}</p>`;
  const s=D.steps[idx];curStep=s;state.current=idx;failStreak=0;resultMessage=resultMessage||'';
  let html=recMeta(s);
  if(!released(s.day)){html+=`<div class="notice reveal">${zt(`该卷尚未到期开放。开放时间：${esc(launchFmt(releaseTime(s.day)))}。`,`This volume is not yet due for release. Opens: ${esc(launchFmt(releaseTime(s.day)))}.`)}</div><p class="nextrow"><a href="catalog.html">${zt('返回目录','Back to the catalog')}</a></p>`;return html}
  if(!isAccessible(idx)){html+=`<div class="notice reveal">${zt('该卷暂不开放阅览。数字化阅览需按目录顺序完成此前各卷的修复校验，方可查阅本卷。','This volume is not yet open for reading. The reading order requires completing the verification of all preceding volumes first.')}</div><p class="nextrow"><a href="index.html">${zt('回到当前卷','Back to the current volume')}</a></p>`;return html}
  const done=isDone(idx);
  html+=`<div class="material reveal">${renderMaterial(s)}</div>`;
  if(PHOTO[s.id])html+=PHOTO[s.id];
  html+=evidenceLine(s);
  html+=renderAnswerPanel(s,done);
  if(done){const after=D.interludes[s.id];if(after){html+=`<blockquote class="interlude reveal"><p class="k">${esc(after.speaker)}</p><p>${esc(after.text).replace(/\n/g,'<br>')}</p></blockquote>`}}
  const prev=idx>0?`<button class="linkbtn" data-act="nav" data-rec="${D.steps[idx-1].id}">${zt('← 上一卷','← Previous volume')}</button>`:'';
  const nextDone=done&&idx+1<stepCount?`<button class="linkbtn" data-act="nav" data-rec="${D.steps[idx+1].id}">${zt('下一卷 →','Next volume →')}</button>`:(done&&idx+1===stepCount?`<a class="linkbtn" href="finale.html">${zt('查看结案报告 →','View the closing report →')}</a>`:`<span class="tiny">${zt('下一卷（需先完成本卷修复校验）','Next volume (requires verifying this one first)')}</span>`);
  html+=`<p class="nextrow reveal">${prev?prev+'　':""}<a href="catalog.html">${zt('目录','Catalog')}</a>　·　${nextDone}</p>`;
  if(s.id==='dropcoords')maybeAutoSeal();
  return html}
 function navigate(id){const idx=stepIdx(id);if(idx<0)return;
  if(!isAccessible(idx)){showToast(zt('该卷暂不开放阅览','This volume is not yet open for reading'));return}
  epoch++;resultMessage='';try{const args=new URLSearchParams(location.search);args.set('rec',id);history.replaceState(null,'',location.pathname+'?'+args.toString())}catch{}
  const body=document.getElementById('reader');body.innerHTML=recordBody(id);wire(body);animateIn(body);window.scrollTo({top:0,behavior:'auto'})}
 /* ===== 证物面板 ===== */
 function evidenceBody(id){const list=allEvidence();
  if(id){if(!list.includes(id)||!D.records[id])return `<p>${zt('该证物尚未开放。','This evidence is not yet available.')}</p><p><button class="linkbtn" data-act="show-evidence">${zt('← 返回开放证物列表','← Back to the open evidence list')}</button></p>`;
   const r=D.records[id];return `<div class="rec-meta"><span class="rec-no">${esc(id)}</span><h2 class="rec-title">${esc(r.title)}</h2><span class="rec-status">${esc(r.date)} · ${esc(r.type)}</span></div><div class="record-view"><pre>${esc(r.body)}</pre></div><p><button class="linkbtn" data-act="show-evidence">${zt('← 返回开放证物列表','← Back to the open evidence list')}</button></p>`}
  return `<p class="muted">${zt(`已解封 ${list.length} 份文件。系统不保证其中每一份都真实。打开原件，比较来源。`,`${list.length} files unsealed. The system does not guarantee that every one of them is genuine. Open the originals; compare the sources.`)}</p><ul class="ev-list">${list.map(k=>{const r=D.records[k];return `<li><button class="linkbtn" data-act="show-evidence" data-ev="${esc(k)}">${esc(r.title)}</button><span class="tiny"> ${esc(r.date)}</span></li>`}).join('')}</ul>`}
 /* ===== 工作台面板 ===== */
 function progressLabel(){const n=solvedCount();if(n>=stepCount)return zt('结案 · Z-00','CASE CLOSED · Z-00');const s=D.steps[Math.min(state.stepUnlocked,stepCount-1)];return (isEn()?(D.daysEn&&D.daysEn[s.day]):(D.days&&D.days[s.day]))||''}
 function notesBody(){return `<div class="panel-meta">${esc(progressLabel())}</div>
  <h3>${zt('调查笔记','Investigation notes')}</h3><p class="tiny">${zt('你记录的推理仅保存在当前浏览器，不会发送到服务器。切勿写入需要在线同步的敏感个人信息。','Your notes are kept in this browser only and never sent to a server. Do not store sensitive personal information here.')}</p><textarea id="notes-field" class="note-area" placeholder="${zt('时间线、可疑版本、需要回头复核的细节……','Timeline, suspect versions, details to re-check…')}">${esc(state.notes)}</textarea><p><button class="btn" data-act="export">${zt('导出调查记录 .txt','Export notes as .txt')}</button></p>
  <h3>${zt('跨设备转移','Moving between devices')}</h3><p class="muted">${zt('本系统不使用云端账号。复制一次性的本地存档字符串，贴到另一台设备即可转移进度。存档包含笔记，请只在你自己的设备之间传递。','This system has no cloud account. Copy the one-time local save string and paste it on another device to transfer progress. The save includes your notes; share it only between your own devices.')}</p><p class="k">${zt('此设备的存档（选中复制）',"This device's save (select and copy)")}</p><textarea id="save-export" class="note-area" style="min-height:84px" readonly>${esc(encodeSave())}</textarea>${recoveryBody()}<p class="k" style="margin-top:14px">${zt('从另一台设备导入存档','Import a save from another device')}</p><textarea id="save-import" class="note-area" style="min-height:84px" placeholder="${zt('将另一台设备的存档字符串粘贴在这里','Paste the save string from the other device here')}"></textarea><p style="margin-top:10px"><button class="btn" data-act="import-save">${zt('导入并覆盖本机进度','Import and overwrite this device')}</button></p>
  <h3>${zt('系统提示音','System sounds')}</h3><p><button class="btn" data-act="audio">${audioMuted?zt('开启提示音','Enable sounds'):zt('关闭提示音','Disable sounds')}</button></p>
  <h3>${zt('重置','Reset')}</h3><p><button class="btn" data-act="reset">${zt('清除本设备的全部调查进度和笔记','Erase all progress and notes on this device')}</button></p>`}
 /* ===== 面板开合 ===== */
 // Subtree replacement preserves the exact focused control and local drafts, not just a control type.
 const identity=el=>el?.id?['id',el.id]:el?.hasAttribute('data-lang-toggle')?['language']:['data-wave','data-bit','data-trace','data-mai'].map(k=>[k,el?.getAttribute(k)]).find(([,v])=>v!==null&&v!==undefined)||
  (el?.name?['radio',el.name,el.value]:el?.dataset?.act?['action',el.dataset.act,el.dataset.ev||el.dataset.rec||'']:null);
 function replaceView(body,html,preserve=true){
  const active=document.activeElement,inside=body.contains(active),key=inside?identity(active):null;
  const fields=preserve?[...body.querySelectorAll('textarea:not([readonly]), input[type="text"]')].map(el=>({id:el.id,value:el.value,start:el.selectionStart,end:el.selectionEnd})):[];
  const scrolls=[...body.querySelectorAll('.mai-scroll,.arc-scroll')].map(el=>[el.className,el.scrollLeft]);
  body.innerHTML=html;wire(body);if(body.id==='drawer-body'&&panelKind==='notes')bindNotes(body);
  for(const f of fields){const el=document.getElementById(f.id);if(el&&body.contains(el)){el.value=f.value;try{el.setSelectionRange(f.start,f.end);}catch{}}}
  for(const [cls,left] of scrolls){const el=[...body.querySelectorAll('.mai-scroll,.arc-scroll')].find(el=>el.className===cls);if(el)el.scrollLeft=left;}
  if(key){const el=[...body.querySelectorAll('button,input,textarea,a,[tabindex]')].find(el=>JSON.stringify(identity(el))===JSON.stringify(key));if(el)el.focus({preventScroll:true});else if(inside){body.setAttribute('tabindex','-1');body.focus({preventScroll:true});}}
  animateIn(body);
 }
 let drawerOpener=null,introOpener=null;const inertBefore=new Map();
 function currentModal(){const intro=document.querySelector('.intro-veil:not(.closing)');return intro?.querySelector('.intro-letter')||(panelKind?document.getElementById('drawer'):null);}
 function modalBackground(){
  const modal=currentModal();
  for(const el of document.body.children){
   if(['SCRIPT','STYLE'].includes(el.tagName))continue;
   if(modal){if(!inertBefore.has(el))inertBefore.set(el,el.inert);el.inert=!(el===modal||el.contains(modal)||el.id==='backdrop');}
  }
  if(!modal){for(const [el,value] of inertBefore)el.inert=value;inertBefore.clear();}
  const drawer=document.getElementById('drawer');if(drawer&&!panelKind)drawer.inert=true;
  document.querySelectorAll('.intro-veil.closing').forEach(el=>{el.inert=true;});
 }
 function modalFocus(modal){const first=modal.querySelector('button,input,textarea,a[href],[tabindex="0"]');if(first)first.focus({preventScroll:true});else{modal.tabIndex=-1;modal.focus();}}
 function modalKeys(e){const modal=currentModal();if(!modal)return;
  if(e.key==='Escape'){e.preventDefault();if(document.querySelector('.intro-veil'))dismissIntro();else closePanel();return;}
  if(e.key!=='Tab')return;
  const items=[...modal.querySelectorAll('button:not([disabled]),input:not([disabled]),textarea:not([disabled]),a[href],[tabindex="0"]')].filter(el=>!el.hidden&&el.getClientRects().length);
  const first=items[0],last=items[items.length-1];if(!first){e.preventDefault();modal.focus();return;}
  if(!modal.contains(document.activeElement)){e.preventDefault();first.focus();}
  else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
 function openPanel(kind,evId){const opening=!panelKind;if(opening)drawerOpener=document.activeElement;panelKind=kind;panelEvId=evId||null;
  const drawer=document.getElementById('drawer'),backdrop=document.getElementById('backdrop');
  if(!drawer)return;drawer.inert=false;drawer.setAttribute('aria-hidden','false');drawer.setAttribute('role','dialog');drawer.setAttribute('aria-modal','true');drawer.classList.add('open');if(backdrop)backdrop.classList.add('open');
  document.getElementById('drawer-title').textContent=kind==='evidence'?zt('开放证物','OPEN EVIDENCE'):zt('读者工作台','READER WORKBENCH');
  renderPanel();modalBackground();if(opening&&!document.querySelector('.intro-veil'))modalFocus(drawer);
  if(location.hash!=='#panel')try{history.replaceState(null,'',location.pathname+location.search+'#panel')}catch{}
 }
 function renderPanel(preserve=true){const body=document.getElementById('drawer-body');if(!body)return;
  replaceView(body,panelKind==='evidence'?evidenceBody(panelEvId):notesBody(),preserve);refreshExport();
 }
 function closePanel(){panelKind=null;panelEvId=null;
  const drawer=document.getElementById('drawer'),backdrop=document.getElementById('backdrop');
  if(drawer){drawer.classList.remove('open');drawer.inert=true;drawer.setAttribute('aria-hidden','true');drawer.removeAttribute('aria-modal');}
  if(backdrop)backdrop.classList.remove('open');
  try{history.replaceState(null,'',location.pathname+location.search);}catch{}
  modalBackground();if(drawerOpener?.isConnected&&!drawerOpener.inert)drawerOpener.focus({preventScroll:true});drawerOpener=null;
 }
 /* ===== 开场交接单（首次到访显示一次） ===== */
 function introBody(){
  if(isEn()){return `<div class="intro-letter" role="dialog" aria-modal="true" aria-label="Internal handover note (translated copy)">${introFraming()}
  <div class="intro-head">NANYU MUNICIPAL ARCHIVES · INTERNAL HANDOVER NOTE · TRANSLATED COPY · NOT FILED WITH THE RECORDS</div>
  <h2 class="intro-title">To whoever takes over this workbench</h2>
  <p>You don't need to turn the light table off. It used to be switched off, but the switch broke once, and after it was fixed nobody bothered anymore. In summer that side gets hot — just move your chair out a bit.</p>
  <p>Gloves are in the first drawer on the left; the key is under the pen holder. That is the only key; don't take it home. The water room barely has any hot water after three; some days it does, depends on luck.</p>
  <p>How to repair a file — training should have covered it. A few more lines here, to save trouble later.</p>
  <p>Don't copy things off a duplicate straight into an original; check the original first. If you ever get two stamps that both look right, look at which sheet each stamp was sitting on to begin with. And forms with no issuing field — leave them; don't fill one in yourself. That went wrong once before. I never learned how it was settled.</p>
  <p>The files for each day are put out by the system; no need to look for them ahead of time. When you finish one it closes by itself, sometimes before you have finished reading the notice. To go back to something, go in through the index.</p>
  <p>Last April the system stopped for four minutes. I wasn't in that day; I saw it later in the records. The on-duty column was blank, and the tech team called it maintenance. I remember checking it several times. In the end nothing was changed.</p>
  <p>Some file numbers in the index have no registration behind them. If you hit one of those, leave it be. I reported it twice — once it came back asking for more materials, the other time nothing came of it. Either way it doesn't affect the day's work.</p>
  <p>Lin Cheng stopped coming in after March. I never picked up all of what she was handling; some of it is still in the workbench panel. Xu Wenzhou left at the end of September; the form said personal reasons. If you need the older records, start with what he left behind — he remembers better than I do.</p>
  <p>There are a few pages I have never been able to open. I asked; they said it wasn't a permissions thing. I stopped asking.</p>
  <p>That is about everything. The notes the people before me left are all behind the drawer; flip through them if you have time. Some of what is written no longer applies, especially the ones from before the system update.</p>
  <p>Let the gloves dry before you put them away; don't shove them back in damp.</p>
  <p class="intro-sign">Good luck.</p>
  <p class="intro-actions"><button class="btn" data-act="dismiss-intro">Take over the workbench</button></p>
 </div>`}
  return `<div class="intro-letter" role="dialog" aria-modal="true" aria-label="内部交接单">${introFraming()}
  <div class="intro-head">南屿市档案馆 · 内部交接单 · 不随卷宗归档</div>
  <h2 class="intro-title">致接手这张工作台的人</h2>
  <p>灯箱不用关。原来是要关的，后来开关坏过一次，修好以后也没人关了。夏天坐那边热，自己把椅子往外挪一点。</p>
  <p>手套在左边第一个抽屉，钥匙在笔筒下面。钥匙只有这一把，别带回去。开水房三点以后基本没热水，偶尔有，看运气。</p>
  <p>卷宗怎么修，培训的时候应该讲过。我再写几句，省得以后麻烦。</p>
  <p>副本上的东西别直接往原件里填，先对原件。碰到两枚章都对得上的情况，看看章原来盖在哪张纸上。还有，没有签发栏的表格先放着，不要自己补。这个以前出过事，后来怎么处理的我也不知道。</p>
  <p>每天的卷宗是系统放的，不用提前找。做完一卷会自动关闭，有时候还没来得及看完提示就关了。要回头查的话，从索引进去。</p>
  <p>去年四月系统停过四分钟。那天我不在，是后来查记录看到的。当班人那栏空着，技术组说是维护造成的。我记得查了好几次，最后也没改什么。</p>
  <p>索引里有些卷宗号查不到登记信息。遇到这种先放着。我报过两次，一次退回来让我补材料，另一次就没下文了。反正不影响当天交卷。</p>
  <p>林澄三月以后就没来过。她原来负责的那部分我没接全，有几份还在台面板里。许闻舟是九月底办的离职，原因填的个人原因。你要查旧记录，可以先看他留下的，他记得比我细。</p>
  <p>有几页我这边一直打不开。问过，说不是权限问题。后来也没再问。</p>
  <p>差不多就这些。前面几个人留的纸条我都放在抽屉后面了，有空可以翻一下。有些写的已经不适用了，尤其是系统更新之前的。</p>
  <p>手套用完晾一下再收，别湿着塞回去。</p>
  <p class="intro-sign">祝顺利。</p>
  <p class="intro-actions"><button class="btn" data-act="dismiss-intro">接手工作台</button></p>
 </div>`}
 function introFraming(){return `<div class="intro-language"><span>${zt('界面语言','Interface language')}</span><button class="lang-toggle" data-lang-toggle aria-label="${zt('Switch to English','切换到中文')}">${isEn()?'中文':'EN'}</button></div><p class="play-notice">${zt('开始前：本作保留中文原件及文字谜题，需使用外部检索、地图和音频分析工具。完整流程包括线下领取实体二维码；仅远程游玩无法走完整条链。','Before starting: Chinese originals and text puzzles remain essential. External research, maps and audio-analysis tools are involved. Completion includes a physical QR pickup; remote-only play cannot finish the chain.')}</p>`;}
 function showIntro(){
  introOpener=document.activeElement;
  const veil=document.createElement('div');veil.className='intro-veil';veil.innerHTML=introBody();
  document.body.appendChild(veil);wire(veil);modalBackground();modalFocus(veil.querySelector('.intro-letter'));
  window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>veil.classList.add('on')));
 }
 function dismissIntro(){
  if(!mutate(s=>{s.introDismissed=true;}))return;
  const v=document.querySelector('.intro-veil');if(v){v.inert=true;v.classList.remove('on');v.classList.add('closing');v.querySelector('.intro-letter').removeAttribute('aria-modal');
   // Keep the transition, but immediately return focus and release background interaction.
   modalBackground();if(panelKind)modalFocus(document.getElementById('drawer'));else if(introOpener?.isConnected)introOpener.focus({preventScroll:true});window.setTimeout(()=>v.remove(),320);
  }
 }
 /* ===== 结案报告页 ===== */
 function finaleBody(){if(!released(D.steps[stepCount-1].day)||state.stepUnlocked<stepCount)return `<div class="notice">${zt('该报告尚未解封。结案报告（Z-00）须在全部卷宗完成修复校验后开放阅览。','This report is still sealed. The closing report (Z-00) opens for reading only after every volume has passed verification.')}</div><p><a href="index.html">${zt('回到阅览','Back to reading')}</a></p>`;
  if(!state.capstoneOk){return `<div class="k">${zt('Z-00 · 结案档案 · 2026','Z-00 · CASE FILE · 2026')}</div><div class="drop-lock reveal"><div class="eyebrow">FINAL SEAL / Z-00</div><form id="capstone-form" class="answer-row"><input type="text" id="capstone-input" aria-label="${zt('拆封口令','Unsealing phrase')}" autocomplete="off" spellcheck="false" placeholder="${zt('拆封口令','Unsealing phrase')}"/><button type="submit" class="btn">${zt('拆封','UNSEAL')}</button></form></div>${renderFeedback()}`}
  return `<div class="k">${zt('Z-00 · 结案档案 · 2026','Z-00 · CASE FILE · 2026')}</div><h2 class="finale-h">第零号证人从未出生。</h2><div class="terminal-block">CASE Z-00 / CLOSED
身份：许静仪 · 合成于 2025-04-03 13:30 · 2026 年登记为补录
SOURCE ROOT: CORE-17 · 三个年代，同一生成根
REEL-A / REEL-B：共享采样
八组脉冲 / 1946：登记在持有人栏存在之前
独立评估：记录不全</div><p class="muted">“我想听原件。”——林澄 / 最后一次录音</p><blockquote class="interlude"><p class="k">许闻舟 / 未寄出的信</p><p>“我没失踪。我只是被从他们的系统里删掉了。<br><br>只是希望下一位看到它的人，会去看原件。”</p></blockquote><p class="muted">“账号上的 MISSING 是一种权限状态，不是一个人的命运。”——许闻舟 / 离职前批注</p><p class="tiny">取件点的那张纸仍在原处。它是全案唯一没有被系统誊录过的材料——你把它拿在手里，才走到了这一页。</p><p>${zt('<a href="index.html">回看卷宗</a> · <a href="catalog.html">馆藏目录</a> · <a href="log.html">修复日志</a>','<a href="index.html">Back to the files</a> · <a href="catalog.html">Catalog</a> · <a href="log.html">Repair log</a>')}</p><p class="tiny" style="margin-top:18px">${zt('——本页由系统生成。生成时间：拆封这一刻。','—— This page was generated by the system. Generated at: the moment you unsealed it.')}</p>`}
 /* ===== 事件绑定 ===== */
 function wire(scope){scope.querySelectorAll('[data-act]').forEach(el=>el.addEventListener('click',async e=>{let action=el.dataset.act;switch(action){
  case 'panel':openPanel(el.dataset.panel);break;
  case 'close-panel':closePanel();break;
  case 'show-evidence':openPanel('evidence',el.dataset.ev);break;
  case 'nav':navigate(el.dataset.rec);break;
  case 'compare-wave':await verifyWave();break;
  case 'gacha':if(mutate(s=>{s.drawAttempts++;}))reboot();break;
  case 'check-hamming':{if(!syncState())break;let syn=hammingSyndrome(state.bits),changes=[...state.bits].filter((v,i)=>v!=='0100011'[i]).length;if(syn.s1===0&&syn.s2===0&&syn.s4===0&&changes===1&&state.bits==='0110011'){complete('parity')}else{sfx.reject();resultMessage=zt('S4S2S1 ≠ 000 :: 单比特修正未完成。','S4S2S1 ≠ 000 :: Single-bit correction not complete.');reboot()}break}
  case 'mai-reset':{if(mutate(s=>{s.maiTapped=[];}))reboot();break}
  case 'check-verdict':submitVerdict();break;
  case 'export':downloadText('zephyr-investigation-notes.txt',state.notes||zt('（空白调查笔记）','(empty investigation notes)'));break;
  case 'audio':{sfx.toggle();showToast(audioMuted?zt('系统提示音已关闭','System sounds off'):zt('系统提示音已开启','System sounds on'));renderPanel();break}
  case 'import-save':{try{let txt=document.getElementById('save-import')?.value||'',obj=decodeSave(txt);if(obj.v!==1||!Number.isInteger(obj.stepUnlocked)||obj.stepUnlocked<0||obj.stepUnlocked>stepCount)throw Error('Invalid save');if(!syncState())break;const ticket=epoch;if(!window.confirm(zt('确定将这份存档覆盖本机当前进度和笔记吗？','Overwrite this device\'s current progress and notes with this save?')))break;if(!syncState()||ticket!==epoch)break;captureRecovery();if(!mutate(s=>Object.assign(s,normalizeState(obj))))break;resultMessage='';refreshFromState();showToast(durable?zt('存档已导入','Save imported'):zt('已载入本页；尚未保存到浏览器，请导出备份。','Loaded in this page only; not saved to the browser. Export a backup.'));}catch(err){showToast(zt('存档格式无效，请重新复制完整内容','Invalid save format; copy the full string again'))}break}
  case 'reset':reset();break;
  case 'dismiss-intro':dismissIntro();break;
  default:break
 }}));
 scope.querySelectorAll('[data-wave]').forEach(el=>el.addEventListener('click',()=>{const [side,n]=el.dataset.wave.split(':');if(mutate(s=>{s[side==='A'?'waveA':'waveB']=Number(n);})){sfx.blip(430,.05,'sine',.012);reboot();}}));
 scope.querySelectorAll('[data-bit]').forEach(el=>el.addEventListener('click',()=>{let i=Number(el.dataset.bit);if(mutate(s=>{const b=[...s.bits];b[i]=b[i]==='1'?'0':'1';s.bits=b.join('');})){sfx.blip(660,.04,'square',.01);reboot();}}));
 scope.querySelectorAll('[data-trace]').forEach(el=>el.addEventListener('click',()=>{let id=el.dataset.trace;if(mutate(s=>{s.traceOpen=s.traceOpen.includes(id)?s.traceOpen.filter(x=>x!==id):[...s.traceOpen,id];}))reboot()}));
 scope.querySelectorAll('[data-mai]').forEach(el=>el.addEventListener('click',()=>{let n=Number(el.dataset.mai);if(!syncState())return;if(state.maiTapped.includes(n)){playTap(n);return}if(mutate(s=>{s.maiTapped.push(n);})){playTap(n);reboot();}}));
 scope.querySelectorAll('input[type="radio"][name^="claim"]').forEach(el=>el.addEventListener('change',()=>{let i=Number(el.name.replace('claim',''));mutate(s=>{s.verdict[i]=el.value==='T';})}));
 const form=scope.querySelector('#answer-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const field=scope.querySelector('#answer-input');const raw=field?.value||'';submitInput(raw)});
 const capform=scope.querySelector('#capstone-form');if(capform)capform.addEventListener('submit',async e=>{e.preventDefault();if(!syncState())return;const raw=scope.querySelector('#capstone-input')?.value||'',ticket=epoch;
  const hash=await sha256Text(norm(raw));if(!syncState()||ticket!==epoch)return;
  if(released(D.steps[stepCount-1].day)&&state.stepUnlocked===stepCount&&hash===finaleCapstoneHash){if(!mutate(s=>{s.capstoneOk=true;}))return;resultMessage='';failStreak=0}
  else{failStreak++;resultMessage=rejectMsg();sfx.reject()}
  renderFinale();});
 }
 function renderFinale(preserve=true){const fb=document.getElementById('finale-body');if(fb)replaceView(fb,finaleBody(),preserve);}
 function reboot(preserve=true){const body=document.getElementById('reader');
  if(body&&curStep)replaceView(body,recordBody(curStep.id),preserve);
  updateProgress();
  if(panelKind)renderPanel(preserve);renderStorageNotice();}
 function bindNotes(nb){let el=nb.querySelector('#notes-field');if(el){el.addEventListener('input',()=>{const value=el.value;mutate(s=>{s.notes=value;});})}}
 function updateProgress(){const bar=document.getElementById('progress-bar'),cnt=document.getElementById('progress-count');
  if(bar)bar.style.width=(solvedCount()/stepCount*100).toFixed(1)+'%';
  if(cnt)cnt.textContent=progressLabel();
  const fl=document.getElementById('finale-link');if(fl)fl.hidden=state.stepUnlocked<stepCount}
 function reset(){if(!syncState())return;const ticket=epoch,msg=zt('确定清除本设备的全部调查进度和笔记吗？此操作不可撤销。','Erase all investigation progress and notes on this device? This cannot be undone.');if(window.confirm(msg)){if(!syncState()||ticket!==epoch)return;if(!mutate(s=>Object.assign(s,defaultState())))return;for(const k of Object.keys(recoveryDrafts))delete recoveryDrafts[k];resultMessage='';refreshFromState();showToast(durable?zt('调查进度已清除','Investigation progress erased'):zt('本页进度已清除；浏览器存储不可用，磁盘存档未确认清除。','Page progress cleared; browser storage is unavailable, so the stored save could not be confirmed erased.'));}}
 function downloadText(name,content){let blob=new Blob([content],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2500)}
 function encodeSave(){const bytes=new TextEncoder().encode(JSON.stringify(state));let str='';for(let i=0;i<bytes.length;i++)str+=String.fromCharCode(bytes[i]);return btoa(str).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
 function decodeSave(s){const str=atob(String(s).trim().replace(/-/g,'+').replace(/_/g,'/'));const bytes=Uint8Array.from(str,c=>c.charCodeAt(0));return JSON.parse(new TextDecoder().decode(bytes))}
 /* ===== 音频（WebAudio 合成，仅提示音；无环境音） ===== */
 let audioCtx;const AUDIO_PREF_KEY='zephyr-audio-pref';
 let audioMuted=false;try{audioMuted=localStorage.getItem(AUDIO_PREF_KEY)==='off'}catch{}
 function ensureCtx(){try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();return audioCtx}catch{return null}}
 const sfx={
  blip(freq=440,dur=.08,type='sine',gain=.02){if(audioMuted)return;const ctx=ensureCtx();if(!ctx)return;try{const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(gain,ctx.currentTime);g.gain.exponentialRampToAtTime(.0001,ctx.currentTime+dur);o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+dur+.02)}catch{}},
  accept(){this.blip(523,.09,'triangle',.028);window.setTimeout(()=>this.blip(784,.13,'triangle',.028),95)},
  reject(){this.blip(140,.13,'square',.02)},
  toggle(){audioMuted=!audioMuted;try{localStorage.setItem(AUDIO_PREF_KEY,audioMuted?'off':'on')}catch{};return audioMuted}
 };
 function playTap(n){sfx.blip(230+n*32,.15,'sine',.03)}
 /* ===== 实体取件封存条（?seal=）：扫码即核验，页面无输入框 ===== */
 function readSealFromUrl(){const args=new URLSearchParams(window.location.search),seal=args.get('seal');if(seal){if(!mutate(s=>{s.receivedSeal=seal;}))return;if(!durable)return;showToast(zt('已接收二维码携带的封存条。','Seal strip received from the QR code.'));args.delete('seal');const q=args.toString();try{history.replaceState(null,'',location.pathname+(q?'?'+q:'')+location.hash)}catch{}}}
 function maybeAutoSeal(){if(!state.receivedSeal)return;const idx=stepIdx('dropcoords');
  if(!isAccessible(idx)||idx!==state.stepUnlocked||state.solved.dropcoords)return;
  const ticket=epoch,seal=state.receivedSeal;
  sha256Text(norm(seal)).then(h=>{if(!syncState()||ticket!==epoch||state.receivedSeal!==seal)return;if(h===C.pickup.sealSha256){complete('dropcoords')}});
 }
 // 源码层：控制台属于档案系统，只留记录，不给答案。
 const loreMap={
  'CORE-17':'第 17 号构建源。三个年代的索引都指向它。删除请求：三次，全部驳回。',
  '004':'转录备注 004：本页在恢复时缺少签发栏。签发人身份未确立。',
  'Z-00':'收件人档案。物品：A4 纸一张（仅印 QR）。状态：待领取。',
  'WX-17':'1946 年设备登记编号。持有人栏：[FIELD LOST]。',
  '042':'第 042 号卷宗。数字化失败。分发残片五段，注销四段；ARCHIVE-DEPT 一段的注销申请从未提出。分发无法撤回。',
  'BOOT':'引导日志只写入档案系统。它不解释自己。'
 };
 function emitConsole(){const style='color:#b23a2e;font-family:monospace;font-size:12px';console.log('%cARCHIVE-00 :: 20 FILES RESTORED',style);console.log('%cTRANSFER LOG :: VOL. 042 :: SEGMENTS IN ORDER: SYS-LOG / ROBOT / ERR-PAGE / INDEX',style);console.log('%cSEGMENT SYS-LOG :: 54 48 45 20',style);console.log('%cLINE-A :: B-SIDE PLAYBACK 7 4 9 12 1 8 5 13 3 11 2 10 6 :: REEL UNUSABLE',style);console.log('%c系统不回答没有编号的问题。',style)}
 window.ZephyrDev={getProgress:()=>({stepUnlocked:state.stepUnlocked,current:state.current,solved:{...state.solved}}),getManual:()=>D.manual,getAnnex:()=>D.annex,query:id=>loreMap[id]||'INDEX NOT FOUND'};
 /* ===== 页面启动 ===== */
 function init(){
  const reader=document.getElementById('reader');
  if(reader){REL='./';emitConsole();
   const params=new URLSearchParams(location.search),rid=params.get('rec');
   let idx=rid?stepIdx(rid):-1;
   if(idx<0||!isAccessible(idx))idx=Math.min(state.stepUnlocked,stepCount-1);
   if(idx<0)idx=0;
   reader.innerHTML=recordBody(D.steps[idx].id);
   wire(reader);animateIn(reader);updateProgress();maybeAutoSeal();
   const top=document.querySelector('.top');
   if(top)wire(top);
   if(location.hash==='#panel')openPanel('notes');
   const backdrop=document.getElementById('backdrop');
   if(backdrop)backdrop.addEventListener('click',closePanel);
   const dclose=document.getElementById('drawer-close');
   if(dclose)dclose.addEventListener('click',closePanel);
   if(!state.introDismissed)showIntro();
   return}
  const fb=document.getElementById('finale-body');
  if(fb){REL='./';fb.innerHTML=finaleBody();emitConsole();wire(fb);animateIn(fb);return}
 }
 if(window.addEventListener){window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY||e.key===null)syncState();});window.addEventListener('focus',()=>syncState());}
 if(document.addEventListener){document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')syncState();});document.addEventListener('keydown',modalKeys);document.addEventListener('zephyr-before-language-change',e=>{if(storageUnavailable)e.preventDefault();});document.addEventListener('zephyr-language-change',()=>{
  reboot();renderFinale();const veil=document.querySelector('.intro-veil:not(.closing)');if(veil)replaceView(veil,introBody());
  const drawer=document.getElementById('drawer-title');if(drawer&&panelKind)drawer.textContent=panelKind==='evidence'?zt('开放证物','OPEN EVIDENCE'):zt('读者工作台','READER WORKBENCH');
 });}
 readSealFromUrl();init();
 renderStorageNotice();
})();
