/* 泽风计划 · 数字化阅览系统脚本（无第三方依赖）。
   呈现层：单页阅览 + 面板；无提示机制——校验只回答通过与不通过。 */
(() => {
 'use strict';
 const D = window.ZEPHYR_DATA, C = window.ZEPHYR_CONFIG;
 const STORAGE_KEY = 'zephyr-zero-arg-v1';
 // 档号与目录题名：与馆藏目录页（catalog.html）保持一致。
 const ARCHIVE_NO = {registry:'WX-1946-011',institution:'WX-1946-012',namecode:'WX-1946-013',building:'WX-1986-021',reelnote:'WX-1986-022',reels:'WX-1986-023',dial:'WX-1986-031',tracks:'WX-1986-032',parity:'WX-1986-033',audit:'WX-1986-041',hiddenindex:'ZF-2026-042',dropcoords:'ZF-2026-043',annex:'WX-1986-052',recursion:'ZF-2026-061',provenance:'ZF-2026-071',masterkey:'ZF-2026-081',judgment:'ZF-2026-082'};
 const TITLES = {registry:'无线电设备登记表（持有人栏缺失）',institution:'档案A附件（校印年代存疑页）',namecode:'值班名单附页（索引七组）',building:'校园建筑名称变更备忘（复印件）',reelnote:'第二卷录音夹页（密文纸条）',reels:'数字采样列表（REEL-A / REEL-B）',dial:'十三触点信号转盘图',tracks:'双轨信号修复记录图',parity:'电气工程校验记录（磁带附页）',audit:'1986年影印件（含异常插入行）',hiddenindex:'第042号卷宗（数字化失败）',dropcoords:'取件通知（Z-00）',annex:'B柜英文维修附录',recursion:'前代项目引用件（旧网页打印件）',provenance:'三份材料处理日志摘录',masterkey:'加密封存的原始审计表',judgment:'审计判断表（四行）'};
 const defaultState = () => ({v:1,started:false,stepUnlocked:0,current:0,hints:{},notes:'',solved:{},receivedSeal:'',ended:false,endingChoice:'',waveA:null,waveB:null,bits:'0110111',verdict:[null,null,null,null],traceOpen:[],drawAttempts:0,introDismissed:false});
 let state;
 try { state = {...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; } catch {state=defaultState()}
 let resultMessage = '', curStep = null, REL = './', failStreak = 0;
 let panelKind = null, panelEvId = null;
 const norm = v => String(v??'').normalize('NFKC').toUpperCase().replace(/[\s\-_/:.,，。；;()（）\[\]]/g,'');
 const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pad = n => String(n).padStart(2,'0');
 const stepCount = D.steps.length;
 const solvedCount = () => Math.min(state.stepUnlocked,stepCount);
 const isDone = i => i < state.stepUnlocked;
 function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({...state,current:Math.min(state.current,stepCount)}));}catch(e){console.warn('保存失败',e)}}
 const showToast = msg => {const el = document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);window.setTimeout(()=>el.remove(),3300)};
 const isPreview=()=>C.previewMode===true;
 function releaseTime(day){const t=Date.parse(C.launchAt);if(!Number.isFinite(t))return 0;return t+(day-1)*Math.max(0,C.chapterIntervalHours||0)*3600000}
 function released(day){return isPreview() || Date.now()>=releaseTime(day)}
 function launchFmt(ms){return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Shanghai'}).format(new Date(ms))}
 function isAccessible(i){return i>=0&&i<stepCount&&i<=state.stepUnlocked&&released(D.steps[i].day)}
 function allEvidence(){const allowed=new Set();D.steps.slice(0,Math.min(stepCount,state.stepUnlocked+1)).forEach(s=>(s.evidence||[]).forEach(a=>allowed.add(a)));return [...allowed]}
 async function sha256Text(text){const bytes=new TextEncoder().encode(text),digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('')}
 const acceptedHash = {
  registry:'46b7699ca0d8af3e383032134cd522fbb9be0196a3c005eab28107eeee50684e',
  institution:'b4dec72f48fcec95ad30ffcdfc00c60694495212a0926447e75cef82cb1e217b',
  namecode:'fe5319a299d6405d01ac734871d17c6dc8f1f179acd51ad61caf0a0ab594d88c',
  building:'9893e409c7a9345b6aa41535796eff4310271c74ea976b67912d28ea453559c7',
  reelnote:'19fcc62b795dc479f33f8401dc6431e76455288434c1ba451eb76c9825daf502',
  dial:'36d9124ee34bfd61f64f7a9a704a6c65bfa1112ebdcfa51977a7a3fdf17605d1',
  tracks:'17cc2fc746250a574d19430cccc74fe4370416799c21f6b1e223c1dd24706dbb',
  audit:'498e1ba825b5509a6a1d1a5a756eb949d56b2f7b249905147fcebfaf54476759',
  hiddenindex:'f996f2b5ac9c17c2d9b3477672515c793c2c2e9263559448f9ee14d4ad4f7ca3',
  annex:'31b863994d82f82d713c5655b4b7c3ebafcf01395424d53bb5dbf0ede6fb8c9d',
  recursion:'efca1f21c91251d72b5e3121f7755698ba956fd426fea08892efb989c14eec02',
  provenance:'d8bef60d4bc0aa1ce299f4410e303a39132714e455ce6ca6aacb20243a80d3d6',
  masterkey:'1a5f6ee3a9caf694db15f35f2de46bcc1bc3634857546e1d3032687101312243'
 };
 // 校验失败只给冷回复。没有方法，没有格式提示，没有第二次机会之外的宽限。
 function rejectMsg(){const staged=['校验失败 :: CHECKSUM MISMATCH','输入与既有校验值不一致。记录未变更。'];return staged[Math.min(failStreak,staged.length)-1]}
 async function submitInput(value){let s=curStep;if(!s||isDone(stepIdx(s.id)))return;const input=norm(value);
  if(acceptedHash[s.id]&&await sha256Text(s.id+':'+input)===acceptedHash[s.id]){complete(s.id);return}
  failStreak++;sfx.reject();resultMessage=rejectMsg();reboot()
 }
 const stepIdx = id => D.steps.findIndex(s=>s.id===id);
 function complete(id){const idx=stepIdx(id);if(idx!==state.stepUnlocked||state.solved[id])return;const s=D.steps[idx];state.solved[id]=true;state.stepUnlocked=idx+1;state.current=idx;resultMessage='';failStreak=0;save();showToast(`修复校验通过 :: ${TITLES[id]||s.title} 已归档`);sfx.accept();ceremony();if(state.stepUnlocked===stepCount){console.log('%cARCHIVE-00 :: CASE Z-00 CLOSED','color:#b23a2e;font-family:monospace;font-size:12px');const fl=document.getElementById('finale-link');if(fl)fl.hidden=false}window.setTimeout(()=>reboot(),700)}
 /* ===== 入场动效（prefers-reduced-motion 由 CSS 兜底） ===== */
 function animateIn(scope){const els=scope.querySelectorAll('.reveal');if(!els.length)return;
  els.forEach((el,i)=>el.style.transitionDelay=Math.min(i*70,420)+'ms');
  window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>els.forEach(el=>el.classList.add('in'))))}
 /* ===== 解锁仪式：印章式「通过」 ===== */
 function ceremony(){const ov=document.createElement('div');ov.className='seal-ceremony';ov.setAttribute('aria-hidden','true');
  const mk=document.createElement('div');mk.className='seal-mark';mk.textContent='通过';ov.appendChild(mk);document.body.appendChild(ov);
  window.setTimeout(()=>ov.remove(),1500)}
 /* ===== 档案材料（只呈现原始材料本身，不带任何方法说明） ===== */
 function term(s){return `<div class="terminal-block">${esc(s)}</div>`}
 function renderMaterial(s){switch(s.kind){
  case 'hex':return term('NO. 00 / DEVICE REGISTRY · 17 NOV 1946 · 23:17\nCHANNEL: WX/17\nREGISTER: 59 48 2D 31 37 20 4D 41 52 4B 20 49 49 20 44 45 53 4B 20 53 45 54\nOPERATOR: [FIELD LOST]');
  case 'source':return term(s.id==='institution'?'ARCHIVE A / ANNEX LETTERHEAD\nSTAMP: NUS / 1946\nINK: CONSISTENT WITH PERIOD':'CAMPUS BUILDING MEMO / FRAGMENT\n1986: NTI / SOUTH-WEST CAMPUS\n2015: THE HIVE\n2026: [ ]');
  case 'book-zh':return `<div class="paper"><div class="paper-title">第三抄本 / 1946 RECOVERED WORKBOOK</div><pre class="paper-lines">${esc(D.manual.map((l,i)=>`${pad(i+1)}  ${l}`).join('\n'))}</pre><span class="paper-index">${esc(s.clue)}</span></div>`;
  case 'cipher':return term(`${s.clue}\n\n[印章] KEY: AS REGISTERED IN 1946`);
  case 'wave':return renderWave();
  case 'maimai':return renderMai();
  case 'arcaea':return renderArcaea();
  case 'hamming':return renderHamming();
  case 'earth':return renderGacha();
  case 'absent':return term('TRANSFER STATUS: FAILED\nPAGES DIGITIZED: 0\n\n该卷材料未随数字化系统保存。');
  case 'drop':return renderDrop(s);
  case 'book-en':return `<div class="paper"><div class="paper-title">CABINET B / MAINTENANCE ANNEX / 1986</div><pre class="paper-lines">${esc(D.annex.map((l,i)=>`${pad(i+1)}  ${l}`).join('\n'))}</pre><span class="paper-index">${esc(s.clue)}</span></div>`;
  case 'binary':return term('SOURCE: recursive-web / node3.txt\n\n00110010 00110000 00110010 00110101\n00110000 00110100 00110000 00110011\n00110001 00110111 00110011 00110000');
  case 'provenance':return renderProvenance();
  case 'sealed':return term('AUDIT TABLE / ORIGINAL / SEALED\n\nSWE LMKJMLF ASK VGIIXVJ VHG FGJM\n\nSEAL: INTACT · KEY NOT ON FILE')+`<p class="tiny seal-footnote">原件不在服务器里。</p>`;
  case 'verdict':return renderVerdict();
  default:return ''
 }}
 function renderAnswerPanel(s,done){if(done||s.kind==='drop')return '';
  if(['wave','hamming','verdict'].includes(s.kind)){return `<div class="answer reveal"><p class="k">修复校验</p>${renderSpecialControls(s)}${renderFeedback()}</div>`}
  return `<div class="answer reveal"><form id="answer-form" class="answer-row"><input type="text" id="answer-input" aria-label="输入核验内容" autocomplete="off" spellcheck="false" placeholder="输入核验内容"/><button type="submit" class="btn">核验</button></form>${renderFeedback()}</div>`}
 function renderFeedback(){return resultMessage?`<p class="feedback" role="status">${esc(resultMessage)}</p>`:''}
 /* REEL-X：真正的重复必须字节序列一致，不只是波形“看起来像”。 */
 const generateWave=(seed)=>{let x=seed>>>0;return Array.from({length:16},()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return Math.round(((x>>>11)/2097151)*190-95)})};
 const aWaves=Array.from({length:8},(_,i)=>generateWave(i*167+41));
 const bWaves=Array.from({length:8},(_,i)=>generateWave(i*239+780));
 bWaves[6]=aWaves[3].slice();
 const waveDigestOf=async arr=>{if(!crypto?.subtle)return '';let payload=new Uint8Array(new Int16Array(arr).buffer);let hash=await crypto.subtle.digest('SHA-256',payload);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('')};
 let waveDigest='';waveDigestOf(aWaves[3]).then(h=>{waveDigest=h;const el=document.getElementById('wave-digest-line');if(el&&curStep&&curStep.id==='reels')el.textContent=`采样摘要存档 / SHA-256(A4)\n${h}`});
 function plotWave(arr){let xy=arr.map((n,i)=>`${5+i*6.1},${35-n*.20}`).join(' ');return `<svg viewBox="0 0 102 70" preserveAspectRatio="none" aria-hidden="true"><line x1="0" x2="102" y1="35" y2="35" stroke="currentColor" stroke-width=".7" opacity=".25"/><polyline points="${xy}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
 function waveRow(side,arr){const selected=side==='A'?state.waveA:state.waveB;return `<div class="reveal"><div class="wave-label">REEL-${side} / DIGITAL FRAGMENTS</div><div class="wave-track">${arr.map((a,i)=>`<button class="wave-cell ${selected===i?'selected':''}" data-wave="${side}:${i}" aria-label="${side} 卷，第 ${i+1} 段" aria-pressed="${selected===i}">${plotWave(a)}<span>${side}${i+1}</span></button>`).join('')}</div></div>`}
 function renderWave(){const done=isDone(stepIdx('reels'));return `<div class="wave-grid">${waveRow('A',aWaves)}${waveRow('B',bWaves)}</div><div id="wave-digest" class="hash-result reveal"></div>${done?`<div id="wave-digest-line" class="hash-result reveal">采样摘要存档 / SHA-256(A4)\n${waveDigest}</div>`:''}`}
 function renderSpecialControls(s){if(s.kind==='wave')return `<p><button class="btn" data-act="compare-wave">校验采样</button></p>`;
  if(s.kind==='hamming')return `<p><button class="btn" data-act="check-hamming">验证校验位</button></p>`;
  if(s.kind==='verdict')return `<p><button class="btn" data-act="check-verdict">提交来源审计</button></p>`;return ''}
 async function verifyWave(){if(state.waveA===null||state.waveB===null){resultMessage='请先在两卷录音中各选一个片段。';reboot();return}
  const A=aWaves[state.waveA],B=bWaves[state.waveB];const same=A.every((x,i)=>x===B[i]);
  const hashA=await waveDigestOf(A),hashB=await waveDigestOf(B);
  if(same){complete('reels');return}
  resultMessage=`采样不一致 :: A${state.waveA+1} ≠ B${state.waveB+1}`;sfx.reject();reboot();let el=document.getElementById('wave-digest');if(el)el.textContent=`SHA(A) ${hashA.slice(0,24)}… / SHA(B) ${hashB.slice(0,24)}…`
 }
 const maiLetters=['X','A','N','E','T','B','C','A','B','I','N','E','N'];const maiOrder=[7,2,6,10,3,4,5,9,8,11,13,12,1];
 function renderMai(){const N=maiLetters.length,r=112,ox=150,oy=150,padPx=48;let pads=maiLetters.map((c,i)=>{const angle=-Math.PI/2+i*2*Math.PI/N;const x=ox+r*Math.cos(angle)-padPx/2,y=oy+r*Math.sin(angle)-padPx/2;return `<button class="mai-pad" data-mai="${i+1}" style="left:${x}px;top:${y}px;width:${padPx}px;height:${padPx}px" aria-label="触点 ${i+1} 字符 ${c}"><small>${i+1}</small>${c}</button>`}).join('');return `<div class="mai-scene reveal"><div class="mai-round">${pads}<div class="mai-center">13 CHANNELS</div></div><div class="mai-info"><div class="mai-taps">${maiOrder.map(n=>`<span class="tap-number">${n}</span>`).join('')}</div></div></div>`}
 const arcaeaTarget='MIRRORYEAR1986';const arcaeaActive=['sky','floor','sky','floor','floor','sky','sky','floor','sky','floor','floor','sky','floor','sky'];
 const otherNoise=['Q','V','Z','K','T','A','7','G','L','P','W','R','5','H'];
 function renderArcaea(){let sky='',floor='';for(let i=0;i<arcaeaTarget.length;i++){const on=arcaeaActive[i];let s=on==='sky'?arcaeaTarget[i]:otherNoise[i],f=on==='floor'?arcaeaTarget[i]:otherNoise[i];sky+=`<div class="arc-cell ${on==='sky'?'on sky':''}">${s}<small>${on==='sky'?'●':''}</small></div>`;floor+=`<div class="arc-cell ${on==='floor'?'on floor':''}">${f}<small>${on==='floor'?'●':''}</small></div>`}return `<div class="arcaea-board reveal"><div class="lane-title"><span>SKY / 2026</span><span>UPPER TRACK</span></div><div class="arc-row">${sky}</div><div class="lane-title"><span>FLOOR / 1986</span><span>LOWER TRACK</span></div><div class="arc-row">${floor}</div></div>`}
 function hammingSyndrome(bits){const b=[...bits].map(Number),xor=indices=>indices.reduce((r,i)=>r^b[i-1],0);let s1=xor([1,3,5,7]),s2=xor([2,3,6,7]),s4=xor([4,5,6,7]);return {s1,s2,s4}}
 const pullCards=[
  {id:'U-11',char:'ARCHIVE / 01',star:2},{id:'U-42',char:'ARCHIVE / 02',star:2},
  {id:'U-16',char:'ARCHIVE / 03',star:3},{id:'U-27',char:'ARCHIVE / 04',star:2},
  {id:'U-09',char:'ARCHIVE / 05',star:2},{id:'672',char:'神代类',star:4,title:'为内心，拍一张'},
  {id:'U-29',char:'ARCHIVE / 07',star:2},{id:'U-08',char:'ARCHIVE / 08',star:2},
  {id:'U-37',char:'ARCHIVE / 09',star:2},{id:'U-31',char:'ARCHIVE / 10',star:3}
 ];
 function renderGacha(){return `<div class="gacha-sim reveal"><div class="gacha-grid">${state.drawAttempts?pullCards.map((c,i)=>`<div class="gacha-card ${c.star===4?'ssr':c.star===3?'sr':''}" style="animation-delay:${i*50}ms"><div class="gacha-stars">${'★'.repeat(c.star)}</div><div class="gacha-symbol">${c.star===4?'Z':String(i+1).padStart(2,'0')}</div><div class="gacha-card-name">${esc(c.char)}</div><div class="gacha-card-id">${esc(c.id)}</div></div>`).join(''):`<div class="gacha-covered">第 345 号封存招募</div>`}</div><div class="gacha-controls"><button class="btn" data-act="gacha">${state.drawAttempts?'再次重建同一段招募':'恢复十连招募'} →</button><span class="tiny">REPLAY COUNT: ${state.drawAttempts}</span></div>${state.drawAttempts>=2?'<p class="gacha-warning">REPLAY ANOMALY：两次重建的顺序与结果完全一致。</p>':''}</div><div class="terminal-block reveal">GACHA_ID = ???\nDISPLAY_CARD_SOURCE_ID = ???\nINITIAL_COMMIT_DATE = ????????\n\nREFERENCE: Zephyruz/Earth-online</div>`}
 function renderHamming(){const syn=hammingSyndrome(state.bits);return `<div class="hamming-board reveal"><div class="bit-row">${[...state.bits].map((v,i)=>`<button class="bit-btn ${'0110111'[i]!==v?'is-flipped':''}" data-bit="${i}" aria-label="第 ${i+1} 位：${v}">${v}<small>${i+1}</small></button>`).join('')}</div><div class="syndrome">S4 / S2 / S1 = <b>${syn.s4}${syn.s2}${syn.s1}</b></div></div>`}
 function renderProvenance(){const options=[{id:'1946',t:'1946 / DIARY-IMAGE',children:['narrative-v3','OCR-MERGE','CORE-17']},{id:'1986',t:'1986 / REEL-B',children:['signal-v2','REEL-EXPORT','CORE-17']},{id:'2026',t:'2026 / EVALUATION',children:['eval-v6','REPORT-ASSEMBLER','CORE-17']}];return `<div class="dossier-list reveal">${options.map(o=>`<button class="dossier-item linkbtn" data-trace="${o.id}"><span class="dossier-date">INPUT NODE / ${o.id}</span> <span class="dossier-name">${o.t} ${state.traceOpen.includes(o.id)?'−':'+'}</span><br>${state.traceOpen.includes(o.id)?o.children.map((x,i)=>`↳ ${i===2?'INGEST_ROOT':'PARENT_'+(i+1)}: ${x}`).join('<br>'):'展开处理链'}</button>`).join('')}</div>`}
 function renderDrop(s){const done=isDone(stepIdx('dropcoords'));
  if(done){return `<div class="drop-receipt reveal"><div class="eyebrow">封存回执 / Z-00 / RECEIVED</div><pre class="seal-code">${esc(state.receivedSeal||'【记录缺失】')}</pre><p class="tiny">封存条已核验。回执随卷存档；纸上原件即密钥凭证。</p></div>`}
  return `<div class="drop-lock reveal"><div class="eyebrow">Z-00 / DELIVERY LOCK</div><pre class="seal-code">${esc(C.pickup.encodedCoords||'')}</pre><p class="tiny">${esc(C.pickup.instructions||'')}</p></div>`}
 const questions=[['1946 年设备记录确实记载了八组电脉冲。',true],['许静仪的身份已由 1946 年未经修改的人员原件证实。',false],['1986 第二卷录音独立于第一卷采样形成。',false],['2026 内部的独立审计记录曾被人为筛选或改写。',true]];
 function renderVerdict(){return `<div class="terminal-block reveal">FINAL AUDIT / ORIGINAL SOURCE\nDEVICE INDEX: 见第一卷\nFOUND: EIGHT PULSES\nOPERATOR IDENTITY: NOT ESTABLISHED\nSAMPLE INDEPENDENCE: FAILED\nEVALUATION INTEGRITY: FAILED</div><div class="dossier-list reveal" style="margin-top:16px">${questions.map((q,i)=>`<div class="claim"><div class="memory-card-title">CLAIM ${pad(i+1)}</div><div class="claim-text">${esc(q[0])}</div><div class="validation-grid"><label><input type="radio" name="claim${i}" value="T" ${state.verdict[i]===true?'checked':''}/> 可由证据支持</label><label><input type="radio" name="claim${i}" value="F" ${state.verdict[i]===false?'checked':''}/> 不能由证据支持</label></div></div>`).join('')}</div>`}
 function submitVerdict(){const chosen=state.verdict;if(chosen.some(x=>x===null)){resultMessage='尚有未完成的判断。';reboot();return}const all=questions.every((q,i)=>q[1]===chosen[i]);if(all){complete('judgment')}else{sfx.reject();resultMessage='至少一项结论与原件不符。';reboot()}}
 /* ===== 卷宗装配（著录：档号 / 题名 / 状态；无序号计数） ===== */
 function recMeta(s){const idx=stepIdx(s.id);const no=ARCHIVE_NO[s.id]||'—';const status=isDone(idx)?'修复校验已完成':'开放阅览';
  return `<header class="rec-meta reveal"><span class="rec-no">${esc(no)}</span><h2 class="rec-title">${esc(TITLES[s.id]||s.title)}</h2><span class="rec-status ${isDone(idx)?'is-done':''}">${status}</span></header>`}
 function evidenceLine(s){return `<p class="evline reveal">相关证物：${s.evidence.map(id=>`<button class="linkbtn" data-act="show-evidence" data-ev="${esc(id)}">${esc(D.records[id].title)}</button>`).join(' · ')}</p>`}
 function recordBody(stepId){const idx=stepIdx(stepId);if(idx<0)return '<p>目录中无此档号。</p>';
  const s=D.steps[idx];curStep=s;state.current=idx;failStreak=0;resultMessage=resultMessage||'';
  let html=recMeta(s);
  if(!released(s.day)){html+=`<div class="notice reveal">该卷尚未到期开放。开放时间：${esc(launchFmt(releaseTime(s.day)))}。</div><p class="nextrow"><a href="catalog.html">返回目录</a></p>`;return html}
  if(!isAccessible(idx)){html+='<div class="notice reveal">该卷暂不开放阅览。数字化阅览需按目录顺序完成此前各卷的修复校验，方可查阅本卷。</div><p class="nextrow"><a href="index.html">回到当前卷</a></p>';return html}
  const done=isDone(idx);
  html+=`<div class="material reveal">${renderMaterial(s)}</div>`;
  html+=evidenceLine(s);
  html+=renderAnswerPanel(s,done);
  if(done){const after=D.interludes[s.id];if(after){html+=`<blockquote class="interlude reveal"><p class="k">${esc(after.speaker)}</p><p>${esc(after.text).replace(/\n/g,'<br>')}</p></blockquote>`}}
  const prev=idx>0?`<button class="linkbtn" data-act="nav" data-rec="${D.steps[idx-1].id}">← 上一卷</button>`:'';
  const nextDone=done&&idx+1<stepCount?`<button class="linkbtn" data-act="nav" data-rec="${D.steps[idx+1].id}">下一卷 →</button>`:(done&&idx+1===stepCount?`<a class="linkbtn" href="finale.html">查看结案报告 →</a>`:'<span class="tiny">下一卷（需先完成本卷修复校验）</span>');
  html+=`<p class="nextrow reveal">${prev?prev+'　':""}<a href="catalog.html">目录</a>　·　${nextDone}</p>`;
  if(s.id==='dropcoords')maybeAutoSeal();
  return html}
 function navigate(id){const idx=stepIdx(id);if(idx<0)return;
  if(!isAccessible(idx)){showToast('该卷暂不开放阅览');return}
  resultMessage='';try{history.replaceState(null,'',location.pathname+'?rec='+encodeURIComponent(id))}catch{}
  const body=document.getElementById('reader');body.innerHTML=recordBody(id);wire(body);animateIn(body);window.scrollTo({top:0,behavior:'auto'})}
 /* ===== 证物面板 ===== */
 function evidenceBody(id){const list=allEvidence();
  if(id){if(!list.includes(id)||!D.records[id])return `<p>该证物尚未开放。</p><p><button class="linkbtn" data-act="show-evidence">← 返回开放证物列表</button></p>`;
   const r=D.records[id];return `<div class="rec-meta"><span class="rec-no">${esc(id)}</span><h2 class="rec-title">${esc(r.title)}</h2><span class="rec-status">${esc(r.date)} · ${esc(r.type)}</span></div><div class="record-view"><pre>${esc(r.body)}</pre></div><p><button class="linkbtn" data-act="show-evidence">← 返回开放证物列表</button></p>`}
  return `<p class="muted">已解封 ${list.length} 份文件。系统不保证其中每一份都真实。打开原件，比较来源。</p><ul class="ev-list">${list.map(k=>{const r=D.records[k];return `<li><button class="linkbtn" data-act="show-evidence" data-ev="${esc(k)}">${esc(r.title)}</button><span class="tiny"> ${esc(r.date)}</span></li>`}).join('')}</ul>`}
 /* ===== 工作台面板 ===== */
 function progressLabel(){const n=solvedCount();if(n>=stepCount)return '结案 · Z-00';const s=D.steps[Math.min(state.stepUnlocked,stepCount-1)];return (D.days&&D.days[s.day])||''}
 function notesBody(){return `<div class="panel-meta">${esc(progressLabel())}</div>
  <h3>调查笔记</h3><p class="tiny">你记录的推理仅保存在当前浏览器，不会发送到服务器。切勿写入需要在线同步的敏感个人信息。</p><textarea id="notes-field" class="note-area" placeholder="时间线、可疑版本、需要回头复核的细节……">${esc(state.notes)}</textarea><p><button class="btn" data-act="export">导出调查记录 .txt</button></p>
  <h3>跨设备转移</h3><p class="muted">本系统不使用云端账号。复制一次性的本地存档字符串，贴到另一台设备即可转移进度。存档包含笔记，请只在你自己的设备之间传递。</p><p class="k">此设备的存档（选中复制）</p><textarea id="save-export" class="note-area" style="min-height:84px" readonly>${esc(encodeSave())}</textarea><p class="k" style="margin-top:14px">从另一台设备导入存档</p><textarea id="save-import" class="note-area" style="min-height:84px" placeholder="将另一台设备的存档字符串粘贴在这里"></textarea><p style="margin-top:10px"><button class="btn" data-act="import-save">导入并覆盖本机进度</button></p>
  <h3>系统提示音</h3><p><button class="btn" data-act="audio">${audioMuted?'开启提示音':'关闭提示音'}</button></p>
  <h3>重置</h3><p><button class="btn" data-act="reset">清除本设备的全部调查进度和笔记</button></p>`}
 /* ===== 面板开合 ===== */
 function openPanel(kind,evId){panelKind=kind;panelEvId=evId||null;
  const drawer=document.getElementById('drawer'),backdrop=document.getElementById('backdrop');
  if(!drawer)return;drawer.classList.add('open');if(backdrop)backdrop.classList.add('open');
  document.getElementById('drawer-title').textContent=kind==='evidence'?'开放证物':'读者工作台';
  renderPanel();if(location.hash!=='#panel')try{history.replaceState(null,'',location.pathname+location.search+'#panel')}catch{}}
 function renderPanel(){const body=document.getElementById('drawer-body');if(!body)return;
  if(panelKind==='evidence'){body.innerHTML=evidenceBody(panelEvId)}
  else{body.innerHTML=notesBody();bindNotes(body)}
  wire(body)}
 function closePanel(){panelKind=null;panelEvId=null;
  const drawer=document.getElementById('drawer'),backdrop=document.getElementById('backdrop');
  if(drawer)drawer.classList.remove('open');if(backdrop)backdrop.classList.remove('open')}
 /* ===== 结案报告页 ===== */
 function finaleBody(){if(state.stepUnlocked<stepCount)return `<div class="notice">该报告尚未解封。结案报告（Z-00）须在全部卷宗完成修复校验后开放阅览。</div><p><a href="index.html">回到阅览</a></p>`;
  return `<div class="k">Z-00 · 结案档案 · 2026</div><h2 class="finale-h">第零号证人从未出生。</h2><div class="terminal-block">CASE Z-00 / CLOSED
身份：许静仪 · 合成于 2026
SOURCE ROOT: CORE-17
REEL-A / REEL-B：共享采样
独立评估：记录不全</div><p class="muted">“我想听原件。”——林澄 / 最后一次录音</p><blockquote class="interlude"><p class="k">许闻舟 / 未寄出的信</p><p>“我没失踪。我只是被从他们的系统里删掉了。<br><br>只是希望下一位看到它的人，会去看原件。”</p></blockquote><p><a href="index.html">回看卷宗</a> · <a href="catalog.html">馆藏目录</a> · <a href="log.html">修复日志</a></p>`}
 /* ===== 事件绑定 ===== */
 function wire(scope){scope.querySelectorAll('[data-act]').forEach(el=>el.addEventListener('click',async e=>{let action=el.dataset.act;switch(action){
  case 'panel':openPanel(el.dataset.panel);break;
  case 'close-panel':closePanel();break;
  case 'show-evidence':openPanel('evidence',el.dataset.ev);break;
  case 'nav':navigate(el.dataset.rec);break;
  case 'compare-wave':await verifyWave();break;
  case 'gacha':state.drawAttempts=(state.drawAttempts||0)+1;save();reboot();break;
  case 'check-hamming':{let syn=hammingSyndrome(state.bits),changes=[...state.bits].filter((v,i)=>v!=='0110111'[i]).length;if(syn.s1===0&&syn.s2===0&&syn.s4===0&&changes===1&&state.bits==='0110011'){complete('parity')}else{sfx.reject();resultMessage='S4S2S1 ≠ 000 :: 单比特修正未完成。';reboot()}break}
  case 'check-verdict':submitVerdict();break;
  case 'export':downloadText('zephyr-investigation-notes.txt',state.notes||'（空白调查笔记）');break;
  case 'audio':{sfx.toggle();showToast(audioMuted?'系统提示音已关闭':'系统提示音已开启');renderPanel();break}
  case 'import-save':{try{let txt=document.getElementById('save-import')?.value||'',obj=decodeSave(txt);if(obj.v!==1||!Number.isInteger(obj.stepUnlocked)||obj.stepUnlocked<0||obj.stepUnlocked>stepCount)throw Error('记录版本或完成章节数有误');if(!window.confirm('确定将这份存档覆盖本机当前进度和笔记吗？'))break;state={...defaultState(),...obj,current:Math.max(0,Math.min(stepCount,obj.current||0))};resultMessage='';save();reboot();renderPanel();showToast('存档已导入');}catch(err){showToast('存档格式无效，请重新复制完整内容')}break}
  case 'reset':reset();break;
  default:break
 }}));
 scope.querySelectorAll('[data-wave]').forEach(el=>el.addEventListener('click',()=>{const [side,n]=el.dataset.wave.split(':');state[side==='A'?'waveA':'waveB']=Number(n);sfx.blip(430,.05,'sine',.012);save();reboot()}));
 scope.querySelectorAll('[data-bit]').forEach(el=>el.addEventListener('click',()=>{let i=Number(el.dataset.bit),b=[...state.bits];b[i]=b[i]==='1'?'0':'1';state.bits=b.join('');sfx.blip(660,.04,'square',.01);save();reboot()}));
 scope.querySelectorAll('[data-trace]').forEach(el=>el.addEventListener('click',()=>{let id=el.dataset.trace;state.traceOpen=state.traceOpen.includes(id)?state.traceOpen.filter(x=>x!==id):[...state.traceOpen,id];save();reboot()}));
 scope.querySelectorAll('[data-mai]').forEach(el=>el.addEventListener('click',()=>{let n=Number(el.dataset.mai);playTap(n);el.classList.add('blink');setTimeout(()=>el.classList.remove('blink'),160)}));
 scope.querySelectorAll('input[type="radio"][name^="claim"]').forEach(el=>el.addEventListener('change',()=>{let i=Number(el.name.replace('claim',''));state.verdict[i]=el.value==='T';save()}));
 const form=scope.querySelector('#answer-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const field=scope.querySelector('#answer-input');const raw=field?.value||'';submitInput(raw)});
 }
 function reboot(){const body=document.getElementById('reader');
  if(body&&curStep){body.innerHTML=recordBody(curStep.id);wire(body);animateIn(body)}
  updateProgress();
  if(panelKind)renderPanel()}
 function bindNotes(nb){let el=nb.querySelector('#notes-field');if(el){el.addEventListener('input',()=>{state.notes=el.value;save()})}}
 function updateProgress(){const bar=document.getElementById('progress-bar'),cnt=document.getElementById('progress-count');
  if(bar)bar.style.width=(solvedCount()/stepCount*100).toFixed(1)+'%';
  if(cnt)cnt.textContent=progressLabel();
  const fl=document.getElementById('finale-link');if(fl)fl.hidden=state.stepUnlocked<stepCount}
 function reset(){const msg='确定清除本设备的全部调查进度和笔记吗？此操作不可撤销。';if(window.confirm(msg)){state=defaultState();resultMessage='';save();reboot();showToast('调查进度已清除')}}
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
 function readSealFromUrl(){const args=new URLSearchParams(window.location.search),seal=args.get('seal');if(seal){state.receivedSeal=seal;save();showToast('已接收二维码携带的封存条。');args.delete('seal');const q=args.toString();try{history.replaceState(null,'',location.pathname+(q?'?'+q:'')+location.hash)}catch{}}}
 function maybeAutoSeal(){if(!state.receivedSeal)return;const idx=stepIdx('dropcoords');
  if(idx!==state.stepUnlocked||state.solved.dropcoords)return;
  sha256Text(norm(state.receivedSeal)).then(h=>{if(h===C.pickup.sealSha256){complete('dropcoords')}});
 }
 // 源码层：控制台属于档案系统，只留记录，不给答案。
 const loreMap={
  'CORE-17':'第 17 号构建源。三个年代的索引都指向它。删除请求：三次，全部驳回。',
  '004':'转录备注 004：本页在恢复时缺少签发栏。签发人身份未确立。',
  'Z-00':'收件人档案。物品：A4 纸一张（仅印 QR）。状态：待领取。',
  'WX-17':'1946 年设备登记编号。持有人栏：[FIELD LOST]。',
  '042':'第 042 号卷宗。数字化失败，分发残片四段。注销申请：成功。分发：无法撤回。',
  'BOOT':'引导日志只写入档案系统。它不解释自己。'
 };
 function emitConsole(){const style='color:#b23a2e;font-family:monospace;font-size:12px';console.log('%cARCHIVE-00 :: 17 FILES RESTORED',style);console.log('%cTRANSFER LOG :: VOL. 042 FAILED :: 0 PAGES',style);console.log('%cSEGMENT 1/4 :: 45 49 47 48 54 48 20',style);console.log('%c系统不回答没有编号的问题。',style)}
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
   return}
  const fb=document.getElementById('finale-body');
  if(fb){REL='./';fb.innerHTML=finaleBody();emitConsole();return}
 }
 readSealFromUrl();init();
})();
