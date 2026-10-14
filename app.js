/* RECURSIVE / ZEPHYR — 一个无第三方依赖的离线优先 ARG 引擎。 */
(() => {
 'use strict';
 const D = window.ZEPHYR_DATA, C = window.ZEPHYR_CONFIG;
 const STORAGE_KEY = 'zephyr-zero-arg-v1';
 const DAY_NAMES = ['第零日 / 零号索引','第一日 / 两份档案','第二日 / 双轨信号','第三日 / 未来材料','第四日 / 来源追查','终局 / 第零号证人'];
 const DAY_SLUGS = ['1946 · ORIGIN','1986 · COPIES','SIGNAL · RECONSTRUCTION','2026 · INSERTION','AUDIT · PROVENANCE','Z-00 · RELEASE'];
 const root = document.getElementById('root');
 const defaultState = () => ({v:1,started:false,stepUnlocked:0,current:0,hints:{},notes:'',solved:{},receivedSeal:'',ended:false,endingChoice:'',waveA:null,waveB:null,bits:'0110111',verdict:[null,null,null,null],traceOpen:[],drawAttempts:0,introDismissed:false});
 let state;
 try { state = {...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; } catch {state=defaultState()}
 let drawer = null, viewedRecord = null, resultMessage = '', timerHandle = null;
 let fxScope = 'full'; const REDUCED = matchMedia('(prefers-reduced-motion: reduce)');
 const visitedSteps = new Set(); let failStreak = 0;
 const norm = v => String(v??'').normalize('NFKC').toUpperCase().replace(/[\s\-_/:.,，。；;()（）\[\]]/g,'');
 const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt = s => String(s).replace(/\n/g,'<br>');
 const pad = n => String(n).padStart(2,'0');
 const stepCount = D.steps.length;
 const solvedCount = () => Math.min(state.stepUnlocked,stepCount);
 const isDone = i => i < state.stepUnlocked;
 function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({...state,current:Math.min(state.current,stepCount)}));}catch(e){console.warn('保存失败',e)}}
 const showToast = msg => {const el = document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);window.setTimeout(()=>el.remove(),3300)};
 const firstIndexDay = d => D.steps.findIndex(x=>x.day===d);
 const isPreview=()=>C.previewMode===true;
 function releaseTime(day){const t=Date.parse(C.launchAt);if(!Number.isFinite(t))return 0;return t+(day-1)*Math.max(0,C.chapterIntervalHours||0)*3600000}
 function released(day){return isPreview() || Date.now()>=releaseTime(day)}
 function launchFmt(ms){return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Singapore'}).format(new Date(ms))+'（新加坡时间）'}
 function isAccessible(i){return i>=0&&i<stepCount&&i<=state.stepUnlocked&&released(D.steps[i].day)}
 function sourceLinks(ids){if(!ids||!ids.length)return '';return `<div class="refs">${ids.map(id=>{let s=D.sources[id];return `<a href="${esc(s.url)}" rel="noopener noreferrer" target="_blank">${esc(s.title)} — ${esc(s.detail)}</a>`}).join('<br>')}</div>`}
 function allEvidence(){const allowed=new Set();D.steps.slice(0,Math.min(stepCount,state.stepUnlocked+1)).forEach(s=>(s.evidence||[]).forEach(a=>allowed.add(a)));return [...allowed]}
 function footHTML(){const links=[['index','目录'],['dossiers','证物'],['notes','笔记'],['transfer','迁移'],['audio',`声音 ${audioMuted?'关':'开'}`],['reset','重置']];return `<footer class="foot">${isPreview()?'<span>预览模式</span> · ':''}<span>${solvedCount()} / ${stepCount}</span> · ${links.map(l=>`<button data-act="${l[0]}">${l[1]}</button>`).join(' · ')}</footer>`}
 function chapterHTML(){return [1,2,3,4,5,6].map(day=>{const idx=firstIndexDay(day),unlocked=idx<=state.stepUnlocked,available=released(day),done=D.steps.filter(s=>s.day===day).every(s=>state.solved[s.id]);return `<p class="idx-row"><button data-day="${day}" ${(!unlocked||!available)?'disabled':''}>${DAY_NAMES[day-1]}${done?' ✓':''}</button> <span class="idx-slug">${(!unlocked||!available)?'封存':DAY_SLUGS[day-1]}</span></p>`}).join('')}
 function introHTML(){return `<section class="stage"><div class="k">Z-00 · 档案 00 · 修复转录</div><h1 class="stage-h">第零号证人</h1><div class="stage-body"><p>1946 年 11 月 17 日，一份没有签名的无线电登记表记录了八次短促的信号。八十年后，两所大学的研究记录声称，从这八次信号中找到了一个已经失踪的人。</p><p>三个年代的文件指向同一个名字。没有人见过原件。</p></div><p><button data-act="start">恢复档案 →</button></p><p class="tiny">独立制作的虚构 ARG。游戏中的 ZEPHYR 项目、研究人员与事故并不存在；所引用的真实高校及公共机构页面仅作历史核对。游戏不收集真实聊天、地址或个人账号信息。</p></section>`}
 function stageMain(){if(state.current>=stepCount)return finaleHTML();let s=D.steps[state.current],done=isDone(state.current),locked=!released(s.day);let pieces=[`<section class="stage"><div class="k">${pad(state.current+1)} / ${pad(stepCount)} · DAY ${pad(s.day)} · ${esc(s.id)}</div><h1 class="stage-h">${esc(s.title)}</h1><p class="stage-sub">${esc(s.subtitle)}</p><div class="stage-body">${s.description.map(p=>`<p>${esc(p)}</p>`).join('')}</div>`];
 if(locked){pieces.push(`<p class="muted">卷宗尚未开放。开放时间：${esc(launchFmt(releaseTime(s.day)))}。此前资料可在证物柜查看。</p></section>`);return pieces.join('')}
 pieces.push(renderMaterial(s));
 pieces.push(`<p class="evline">证物：${s.evidence.map(id=>`<button data-record="${id}">${esc(D.records[id].title)}</button>`).join(' · ')}</p>`);
 if(s.refs.length)pieces.push(sourceLinks(s.refs));
 pieces.push(renderAnswerPanel(s,done));
 if(done){const after=D.interludes[s.id];if(after){pieces.push(`<blockquote class="interlude"><p class="k">${esc(after.speaker)}</p><p>${esc(after.text).replace(/\n/g,"<br>")}</p></blockquote>`)}const next=state.current+1<stepCount;pieces.push(`<p class="nextrow"><button data-act="next">${next?'下一份 →':'查看最终报告 →'}</button></p>`)}
 pieces.push('</section>');return pieces.join('')}
 function term(s){return `<div class="terminal-block">${esc(s)}</div>`}
 function renderMaterial(s){switch(s.kind){
  case 'hex':return `<img src="assets/1946-scan.jpg" alt="虚构的 1946 年设备登记扫描图，注明八次脉冲和十六进制登记号" class="scan-image" loading="lazy"/><div class="paper"><div class="paper-title">NO. 00 / DEVICE REGISTRY · 1946</div><div class="paper-lines">17 NOV 1946     23:17<br>REGISTER: <b>59 48 2D 31 37</b><br>CHANNEL: WX/17<br>OPERATOR: ■■■■■■<br><br>“先看设备，再查人。”</div><span class="paper-index">ASCII / HEADER BYTES / 5 OCTETS</span></div><p class="scan-note">原文件：<a href="evidence/1946-device-record.txt" download>下载 1946 登记转录件 ↓</a></p>`;
  case 'source':return `<div class="terminal-block">${s.id==='history'?'STAMP: NUS / 1946\nCLAIM: ORIGINAL INSTITUTIONAL DOCUMENT\nSTATUS: HISTORICAL CHECK REQUIRED':s.id==='rename'?'1986: NTI / SOUTH-WEST CAMPUS\n2015: THE HIVE\n2026: [REDACTED]': 'PHOTO CAPTION: 1946 / BIRD PARADISE / MANDAI\nQUESTION: WHEN COULD THAT CAPTION HAVE BEEN WRITTEN?'}</div><p class="subdued">使用官方公开网页独立核实，不依赖这里的单方叙述。</p>`;
  case 'book-zh':return `<div class="paper"><div class="paper-title">第三抄本 / 1946 RECOVERED WORKBOOK</div><pre class="paper-lines">${esc(D.manual.map((s,i)=>`${pad(i+1)}  ${s}`).join('\n'))}</pre><span class="paper-index">行:字 · 从 1 开始 · 忽略标点　${esc(s.clue)}</span></div><p class="scan-note"><a href="evidence/1946-workbook.txt" target="_blank">打开独立转录文件 ↗</a></p>`;
  case 'cipher':return `<div class="terminal-block">${esc(s.clue)}\n\nKEY: [THE HIVE / 2015]\nALGORITHM: [FOLDING LETTERS]</div><p class="subdued">“回到它在 2015 年被叫出的名字。”——林澄</p>`;
  case 'wave':return renderWave();
  case 'maimai':return renderMai();
  case 'arcaea':return renderArcaea();
  case 'hamming':return renderHamming();
  case 'earth':return renderGacha();
  case 'memory':return `<div class="memory-card"><div class="memory-card-title">WITNESS-B / PRIVATE MEMORY CROSS-CHECK</div><p>他们说，两个人曾在 YC Dining Bar 停留。那天桌上有一杯颜色鲜艳的鸡尾酒。</p><p>从哪一天开始，一家酒吧的酒单也会被放进 1946 年的无线电档案？</p><div class="tiny">经玩家提供的已确认信息：YC Dining Bar、Singapore Sling。<br>聊天时间索引：${esc(C.personal.confirmedChatTime||'【待配置：不影响主线通关】')}</div></div>`;
  case 'book-en':return `<div class="paper"><div class="paper-title">CABINET B / MAINTENANCE ANNEX / 1986</div><pre class="paper-lines">${esc(D.annex.map((s,i)=>`${pad(i+1)}  ${s}`).join('\n'))}</pre><span class="paper-index">LINE.WORD / 1-INDEXED · ${esc(s.clue)}</span></div><p class="scan-note"><a href="evidence/1986-cabinet-b.txt" target="_blank">打开固定版本的维修手册 ↗</a></p>`;
  case 'binary':return `<div class="terminal-block">SOURCE: github.com/Anormalm/recursive-web\nFILE: node3.txt\nHINT: The street remembers the group chat.\n\n00110010 00110000 00110010 00110101\n00110000 00110100 00110000 00110011\n00110001 00110111 00110011 00110000</div><p class="subdued">时间索引可以证明文件中存在这个字符串，但不能证明当天发生了任何对话。</p>`;
  case 'provenance':return renderProvenance();
  case 'physical':return renderPickup();
  case 'verdict':return renderVerdict();
  default:return ''
 }}
 function renderAnswerPanel(s,done){if(done)return '';
 if(['wave','hamming','verdict'].includes(s.kind)){return `<div class="answer"><p class="k">提交 · ${esc(s.answerLabel||'验证')}</p>${renderSpecialControls(s)}${renderHints(s)}${renderFeedback()}</div>`}
 return `<div class="answer"><p class="k">请提交：${esc(s.answerLabel)}</p><form id="answer-form" class="answer-row"><input id="answer-input" aria-label="${esc(s.answerLabel)}" autocomplete="off" spellcheck="false" placeholder="输入恢复出的结果" ${s.kind==='physical'&&state.receivedSeal?'value="'+esc(state.receivedSeal)+'"':''}/><button type="submit">核验</button></form>${renderHints(s)}${renderFeedback()}</div>`}
 function renderFeedback(){return resultMessage?`<p class="feedback" role="status">${esc(resultMessage)}</p>`:''}
 function renderHints(s){const count=state.hints[s.id]||0;return `<p class="hintrow"><button data-act="hint">提示 ${count}/3</button></p>${count?`<div class="query-log">${s.hints.slice(0,count).map((h,i)=>`<p class="query-line">提示${i+1} :: ${esc(h)}</p>`).join('')}</div>`:''}`}
 async function sha256Text(text){const bytes=new TextEncoder().encode(text),digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('')}
 const acceptedHash = {
  header:'463652c9a23362b2c0e29610ea0f461986cce14b00050c352f55ca280003d039',
  history:'e54eebe2ffc3db6964d6d656235b4e414bbd1e7d776c4a8b93bcd39529965477',
  namecode:'04d9ad89827a5762bd08e58f660add13a8e3f9b448b1295a68aafc845f61cea8',
  rename:'d8fddcfe3a4d0a72b147306cb7a97e39d8e83dcb9ca77c698f381a2362a07e83',
  vigenere:'b1bb6842a53de9b26f195257e70308d29dc30e3dd501880ba144d37119902dda',
  maimai:'635d62bbd67d383c240f8c5061500450f44f40d2b0b1f0f6cd17785525557303',
  arcaea:'9cc2de5e81744719a130b19eeb316b7940566dc46c556307d35d5b220e962d71',
  earth:'eb86b8fff98d66347fbfdec99501133009d7905ab40e0ae6463f42389635b337',
  mandai:'de567cef95507de8f811d576cee73c7dc446025878ed49a7c7ebade95f53b515',
  sling:'145a8241f11a9352f777629892c1c738a082bacda17a388efdb7d035fff62c68',
  annex:'a565c612998fb586d15ab29a65e07e6a95bf982dd6ccfd9363ebe5a3af9ec3ff',
  binary:'7fe131e9e63fd04086ac86f707c0fee62fcea204e8e9a3ca9f185781e35140d2',
  provenance:'3ce2135d4020e1fa45e0709d7c905ea5e2313691c5da623a7b2ef9bf3b55a566'
 };
 // 校验失败的分级回复：先冷，后给方法。不出现答案。
 function rejectMsg(){const staged=['校验失败 :: CHECKSUM MISMATCH','输入与既有校验值不一致。记录未变更。'];let msg=staged[Math.min(failStreak,staged.length)-1]||staged[1];if(failStreak>=3){const notes=['转录员备注：核对的是原始登记表，不是后来的叙述。','转录员备注：先确认格式，再确认内容。','转录员备注：重复提交不会改变校验值。'];msg+='　'+notes[Math.min(failStreak-3,notes.length-1)]}return msg}
 async function submitInput(value){let s=D.steps[state.current];if(!s||isDone(state.current)||!released(s.day))return;const input=norm(value);
  if(s.kind==='physical'){const hash=await sha256Text(input);if(hash===C.pickup.sealSha256){complete(s.id);return}failStreak++;sfx.reject();resultMessage=rejectMsg();render('reject');return}
  if(acceptedHash[s.id]&&await sha256Text(s.id+':'+input)===acceptedHash[s.id]){complete(s.id);return}
  failStreak++;sfx.reject();resultMessage=rejectMsg();render('reject')
 }
 function complete(id){const s=D.steps[state.current];if(s?.id!==id||isDone(state.current))return;state.solved[id]=true;state.stepUnlocked=Math.max(state.stepUnlocked,state.current+1);state.hints[id]=state.hints[id]||0;failStreak=0;resultMessage='';save();showToast(`✓ ${s.title} · 已归档`);sfx.accept();if(state.stepUnlocked===stepCount){console.log('%cARCHIVE-00 :: CASE Z-00 CLOSED','color:#98bc9d;font-family:monospace;font-size:12px')}render('solved');}
 function advance(){if(state.current<stepCount&&isDone(state.current)){state.current++;visitedSteps.add(D.steps[Math.min(state.current,stepCount-1)]?.id);resultMessage='';save();render('full');window.scrollTo({top:0,behavior:'smooth'});return}if(state.current===stepCount){render('full')}}
 // REEL-X：真正的重复必须字节序列一致，不只是波形“看起来像”。
 const generateWave=(seed)=>{let x=seed>>>0;return Array.from({length:16},()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return Math.round(((x>>>11)/2097151)*190-95)})};
 const aWaves=Array.from({length:8},(_,i)=>generateWave(i*167+41));
 const bWaves=Array.from({length:8},(_,i)=>generateWave(i*239+780));
 bWaves[6]=aWaves[3].slice();
 function plotWave(arr){let xy=arr.map((n,i)=>`${5+i*6.1},${35-n*.20}`).join(' ');return `<svg viewBox="0 0 102 70" preserveAspectRatio="none" aria-hidden="true"><line x1="0" x2="102" y1="35" y2="35" stroke="#3d4d57" stroke-width=".7"/><polyline points="${xy}" fill="none" stroke="#90bcc7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
 function waveRow(side,arr){const selected=side==='A'?state.waveA:state.waveB;return `<div><div class="wave-label">REEL-${side} / DIGITAL FRAGMENTS</div><div class="wave-track">${arr.map((a,i)=>`<button class="wave-cell ${selected===i?'selected':''}" data-wave="${side}:${i}" aria-label="${side} 卷，第 ${i+1} 段" aria-pressed="${selected===i}">${plotWave(a)}<span>${side}${i+1}</span></button>`).join('')}</div></div>`}
 function renderWave(){return `<p class="subdued">已恢复的采样显示为八格。图形可能相似，只有数值完全相同才算一份拷贝。</p><div class="wave-grid">${waveRow('A',aWaves)}${waveRow('B',bWaves)}</div><p class="scan-note"><a download href="evidence/1986-reel-a.wav">下载 A 卷 WAV</a> · <a download href="evidence/1986-reel-b.wav">下载 B 卷 WAV</a>　（音频为游戏生成的模拟样本）</p><div id="wave-digest" class="hash-result">请各选一格，然后点击“校验采样”。</div>`}
 function renderSpecialControls(s){if(s.kind==='wave')return `<p><button data-act="compare-wave">校验采样</button></p>`;
 if(s.kind==='hamming')return `<p><button data-act="check-hamming">验证校验位</button></p>`;
 if(s.kind==='verdict')return `<p><button data-act="check-verdict">提交来源审计</button></p>`;return ''}
 async function verifyWave(){if(state.waveA===null||state.waveB===null){resultMessage='请先在两卷录音中各选一个片段。';render();return}
  const A=aWaves[state.waveA],B=bWaves[state.waveB];const same=A.every((x,i)=>x===B[i]);const digest=async arr=>{if(!crypto?.subtle)return '浏览器不可用';let payload=new Uint8Array(new Int16Array(arr).buffer);let hash=await crypto.subtle.digest('SHA-256',payload);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('')};
  const hashA=await digest(A),hashB=await digest(B);
  if(same){complete('wave');return}
  resultMessage=`采样不一致 :: A${state.waveA+1} ≠ B${state.waveB+1}`;sfx.reject();render('reject');let el=document.getElementById('wave-digest');if(el)el.textContent=`SHA(A) ${hashA.slice(0,24)}… / SHA(B) ${hashB.slice(0,24)}…`;
 }
 const maiLetters=['N','I','B','E','T','C','B','A'];const maiOrder=[6,8,7,2,1,4,5,3];
 function renderMai(){const r=107,ox=128,oy=128;let pads=maiLetters.map((c,i)=>{const angle=-Math.PI/2+i*Math.PI/4;const x=ox+r*Math.cos(angle)-31.5,y=oy+r*Math.sin(angle)-31.5;return `<button class="mai-pad" data-mai="${i+1}" style="left:${x}px;top:${y}px" aria-label="触点 ${i+1} 字母 ${c}"><small>${i+1}</small>${c}</button>`}).join('');return `<div class="mai-scene"><div class="mai-round">${pads}<div class="mai-center">8 CHANNELS<br>READ THE TAPS</div></div><div class="mai-info"><div class="eyebrow">MAI · EIGHT-CHANNEL RECOVERY</div><p>每格只记录一次 TAP。纸上按顺序留下八个编号；转盘以北方作为 1 号触点，顺时针编号。<br>不要排序，按到达先后读取。</p><div class="mai-taps">${maiOrder.map(n=>`<span class="tap-number">${n}</span>`).join('')}</div><p class="tiny" style="margin-top:13px">点击任意触点可试听短促的校验音，便于对照位置。</p></div></div>`}
 const arcaeaTarget='MIRROR1986';const arcaeaActive=['sky','floor','sky','floor','floor','sky','sky','floor','sky','floor'];
 const otherNoise=['Q','V','Z','K','T','A','7','G','L','P'];
 function renderArcaea(){let sky='',floor='';for(let i=0;i<10;i++){const on=arcaeaActive[i];let s=on==='sky'?arcaeaTarget[i]:otherNoise[i],f=on==='floor'?arcaeaTarget[i]:otherNoise[i];sky+=`<div class="arc-cell ${on==='sky'?'on sky':''}">${s}<small>${on==='sky'?'●':''}</small></div>`;floor+=`<div class="arc-cell ${on==='floor'?'on floor':''}">${f}<small>${on==='floor'?'●':''}</small></div>`}return `<div class="arcaea-board"><div class="lane-title"><span>SKY / 2026</span><span>UPPER TRACK</span></div><div class="arc-row">${sky}</div><div class="lane-title"><span>FLOOR / 1986</span><span>LOWER TRACK</span></div><div class="arc-row">${floor}</div><div class="arc-number">${Array.from({length:10},(_,i)=>`<span>${pad(i+1)}</span>`).join('')}</div></div><p class="subdued">只读取有光点且被点亮的轨道。数字也是正常字符，不必另行换算。</p>`}
 function hammingSyndrome(bits){const b=[...bits].map(Number),xor=indices=>indices.reduce((r,i)=>r^b[i-1],0);let s1=xor([1,3,5,7]),s2=xor([2,3,6,7]),s4=xor([4,5,6,7]);return {s1,s2,s4,pos:s1+2*s2+4*s4}}
 const pullCards=[
 {id:'U-11',char:'ARCHIVE / 01',star:2},{id:'U-42',char:'ARCHIVE / 02',star:2},
 {id:'U-16',char:'ARCHIVE / 03',star:3},{id:'U-27',char:'ARCHIVE / 04',star:2},
 {id:'U-09',char:'ARCHIVE / 05',star:2},{id:'672',char:'神代类',star:4,title:'为内心，拍一张'},
 {id:'U-29',char:'ARCHIVE / 07',star:2},{id:'U-08',char:'ARCHIVE / 08',star:2},
 {id:'U-37',char:'ARCHIVE / 09',star:2},{id:'U-31',char:'ARCHIVE / 10',star:3}
 ];
 function renderGacha(){return `<div class="gacha-sim"><div class="gacha-head"><div class="eyebrow">RECRUITMENT LOG / RECOVERED 2026</div><h3>第 345 号封存招募</h3><p>有人从 Earth-online 的界面中复制了一段招募动画。它能运行，但作者不一定是原来的开发者。</p></div><div class="gacha-banner"><span>COLORFUL FESTIVAL / ARCHIVAL IMITATION</span><strong>回收遗失的十个记忆片段</strong><small>所有图像为本游戏原创符号卡片，而非游戏官方卡面</small></div><div class="gacha-grid">${state.drawAttempts?pullCards.map((c,i)=>`<div class="gacha-card ${c.star===4?'ssr':c.star===3?'sr':''}" style="animation-delay:${i*50}ms"><div class="gacha-stars">${'★'.repeat(c.star)}</div><div class="gacha-symbol">${c.star===4?'Z':String(i+1).padStart(2,'0')}</div><div class="gacha-card-name">${esc(c.char)}</div><div class="gacha-card-id">${esc(c.id)}</div></div>`).join(''):`<div class="gacha-covered">被封存的招募记录 / 点击下面的按钮重建一次十连</div>`}</div><div class="gacha-controls"><button data-act="gacha">${state.drawAttempts?'再次重建同一段招募':'恢复十连招募'} →</button><span class="tiny">REPLAY COUNT: ${state.drawAttempts}</span></div>${state.drawAttempts>=2?'<p class="gacha-warning">REPLAY ANOMALY：两次重建的顺序与结果完全一致。旧日志中没有记录真正的随机种子。比较真实的 Earth-online 实现。</p>':''}</div><div class="terminal-block">GACHA_ID = ???\nDISPLAY_CARD_SOURCE_ID = ???\nINITIAL_COMMIT_DATE = ????????\n\nREFERENCE: Zephyruz/Earth-online</div><p class="subdued">卡池编号、展示卡编号和提交日期属于三种不同证据。页面里这段动画是有人仿照她的作品制作的，并不等同于真实游戏结果。</p>`}
 function renderHamming(){const syn=hammingSyndrome(state.bits),data=[2,4,5,6].map(i=>state.bits[i]).join(''),hex=parseInt(data,2).toString(16).toUpperCase();return `<p class="subdued">收到的七位原码：<code>0110111</code>。试着点击其中一位，把它纠正过来。</p><div class="hamming-board"><div class="bit-row">${[...state.bits].map((v,i)=>`<button class="bit-btn ${'0110111'[i]!==v?'is-flipped':''}" data-bit="${i}" aria-label="第 ${i+1} 位：${v}">${v}<small>${i+1}</small></button>`).join('')}</div><div class="syndrome">S4 / S2 / S1 = <b>${syn.s4}${syn.s2}${syn.s1}</b>　错误位置 = <b>${syn.pos===0?'无':syn.pos}</b><br>DATA(3,5,6,7) = ${data}　/　HEX = ${hex}</div></div><p class="tiny">要求：恰好修正一位，三个偶校验组全部通过。</p>`}
 function renderProvenance(){const options=[{id:'1946',t:'1946 / DIARY-IMAGE',children:['narrative-v3','OCR-MERGE','CORE-17']},{id:'1986',t:'1986 / REEL-B',children:['signal-v2','REEL-EXPORT','CORE-17']},{id:'2026',t:'2026 / EVALUATION',children:['eval-v6','REPORT-ASSEMBLER','CORE-17']}];return `<div class="subdued">点开三份文件的父级目录；记录它们共同的最末级构建源。</div><div class="dossier-grid" style="margin-top:18px">${options.map(o=>`<button class="dossier-item" data-trace="${o.id}"><div class="dossier-date">INPUT NODE / ${o.id}</div><div class="dossier-name">${o.t} ${state.traceOpen.includes(o.id)?'−':'+'}</div><div class="dossier-type">${state.traceOpen.includes(o.id)?o.children.map((x,i)=>`↳ ${i===2?'INGEST_ROOT':'PARENT_'+(i+1)}: ${x}`).join('<br>'):'展开处理链'}</div></button>`).join('')}</div>`}
 function renderPickup(){const p=C.pickup;const hasGeo=Number.isFinite(p.latitude)&&Number.isFinite(p.longitude);let coords=hasGeo?`${p.latitude.toFixed(6)}, ${p.longitude.toFixed(6)}`:'COORDINATES WITHHELD';let mapUrl=hasGeo?`https://www.google.com/maps/search/?api=1&query=${p.latitude}%2C${p.longitude}`:'';return `<div class="pickup-map"><div class="eyebrow">Z-00 / PHYSICAL DELIVERY</div><h2 class="coords">${esc(coords)}</h2><div class="label">${esc(p.label)}</div><p class="subdued">${esc(p.instructions)}</p>${mapUrl?`<a href="${mapUrl}" target="_blank" rel="noopener noreferrer">在 Google 地图中打开 ↗</a>`:'<p class="tiny">当前为演示部署，尚未配置私人取件坐标。纸质信件仍可凭封存口令完成验证。</p>'}</div><p class="scan-note">实体 QR 的扫描链接将在本站添加一个一次性用途的剧情标记；不会要求定位权限。印刷文件见制作人套件。</p>`}
 const questions=[['1946 年设备记录确实记载了八组电脉冲。',true],['许静仪的身份已由 1946 年未经修改的人员原件证实。',false],['1986 第二卷录音独立于第一卷采样形成。',false],['2026 内部的独立审计记录曾被人为筛选或改写。',true]];
 function renderVerdict(){return `<div class="terminal-block">FINAL AUDIT / ORIGINAL SOURCE\nDEVICE INDEX: YH-17\nFOUND: EIGHT PULSES\nOPERATOR IDENTITY: NOT ESTABLISHED\nSAMPLE INDEPENDENCE: FAILED\nEVALUATION INTEGRITY: FAILED</div><div class="dossier-grid" style="margin-top:20px">${questions.map((q,i)=>`<div class="memory-card" style="padding:13px 17px"><div class="memory-card-title">CLAIM ${pad(i+1)}</div><div style="font-size:13px;margin-bottom:12px">${esc(q[0])}</div><div class="validation-grid" style="grid-template-columns:1fr 1fr"><label><input type="radio" name="claim${i}" value="T" ${state.verdict[i]===true?'checked':''}/> 可由证据支持</label><label><input type="radio" name="claim${i}" value="F" ${state.verdict[i]===false?'checked':''}/> 不能由证据支持</label></div></div>`).join('')}</div>`}
 function submitVerdict(){const chosen=state.verdict;if(chosen.some(x=>x===null)){resultMessage='尚有未完成的判断。';render('reject');return}const all=questions.every((q,i)=>q[1]===chosen[i]);if(all){complete('verdict')}else{sfx.reject();resultMessage='至少一项结论与原件不符。';render('reject')}}
 function finaleHTML(){return `<section class="stage"><div class="k">Z-00 · 结案档案 · 2026</div><h1 class="stage-h">第零号证人从未出生。</h1><div class="terminal-block">CASE Z-00 / CLOSED
身份：许静仪 · 合成于 2026
SOURCE ROOT: CORE-17
REEL-A / REEL-B：共享采样
独立评估：记录不全</div><p class="muted">“我想听原件。”——林澄 / 最后一次录音</p><blockquote class="interlude"><p class="k">许闻舟 / 未寄出的信</p><p>“我没失踪。我只是被从他们的系统里删掉了。<br><br>只是希望下一位看到它的人，会去看原件。”</p></blockquote><p class="tiny">你完成了这份虚构档案的调查。NUS、NTU、Mandai 等现实机构没有参与游戏中的事件。</p><p><button data-act="dossiers">复核全部证物</button> · <button data-act="notes">调查笔记</button> · <button data-act="back">回看上一份档案</button></p></section>`}
 function encodeSave(){const bytes=new TextEncoder().encode(JSON.stringify(state));let str='';for(let i=0;i<bytes.length;i++)str+=String.fromCharCode(bytes[i]);return btoa(str).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
 function decodeSave(s){const str=atob(String(s).trim().replace(/-/g,'+').replace(/_/g,'/'));const bytes=Uint8Array.from(str,c=>c.charCodeAt(0));return JSON.parse(new TextDecoder().decode(bytes))}
 function drawerHTML(){if(!drawer)return '';if(drawer==='index')return `<div class="drawer-overlay"><div class="drawer" role="dialog" aria-label="目录" aria-modal="true"><div class="drawer-head"><h2 class="drawer-title">目录</h2><button class="drawer-close" data-act="close">关闭 ×</button></div><div class="drawer-content">${chapterHTML()}</div></div></div>`;
 if(drawer==='transfer')return `<div class="drawer-overlay"><div class="drawer" role="dialog" aria-label="迁移存档" aria-modal="true"><div class="drawer-head"><h2 class="drawer-title">跨设备转移</h2><button class="drawer-close" data-act="close">关闭 ×</button></div><div class="drawer-content"><p class="muted">本游戏不使用云端账号。如果在电脑上解谜、用手机扫描二维码，手机不会自动出现电脑的调查进度。可以在这里复制一次性的本地存档字符串，把它贴到另一台设备。存档包含笔记，请只在你自己的设备之间传递。</p><p class="k">此设备的存档（选中复制）</p><textarea id="save-export" class="note-area" style="min-height:115px" readonly>${esc(encodeSave())}</textarea><p class="k" style="margin-top:18px">从另一台设备导入存档</p><textarea id="save-import" class="note-area" style="min-height:120px" placeholder="将另一台设备的存档字符串粘贴在这里"></textarea><p style="margin-top:12px"><button data-act="import-save">导入并覆盖本机进度</button></p><p class="tiny">不会调用任何外部服务。导入后可继续从上次解开的章节开始。</p></div></div></div>`;if(drawer==='notes')return `<div class="drawer-overlay"><div class="drawer" role="dialog" aria-label="调查笔记" aria-modal="true"><div class="drawer-head"><h2 class="drawer-title">调查笔记</h2><button class="drawer-close" data-act="close">关闭 ×</button></div><div class="drawer-content"><p class="muted">你记录的推理仅保存在当前浏览器，不会发送到服务器。切勿写入需要在线同步的敏感个人信息。</p><textarea id="notes-field" class="note-area" placeholder="时间线、可疑版本、需要回头复核的细节……">${esc(state.notes)}</textarea><div style="margin-top:13px"><button data-act="export">导出调查记录 .txt</button></div></div></div></div>`;
 if(viewedRecord&&D.records[viewedRecord]){const r=D.records[viewedRecord];return `<div class="drawer-overlay"><div class="drawer" role="dialog" aria-label="${esc(r.title)}" aria-modal="true"><div class="drawer-head"><h2 class="drawer-title">证物详情</h2><button class="drawer-close" data-act="close">关闭 ×</button></div><div class="drawer-content record-view"><p><button class="record-back" data-act="record-back">← 返回证物柜</button></p><p class="k">${esc(r.date)} · ${esc(r.type)}</p><h3 class="record-title">${esc(r.title)}</h3><pre>${esc(r.body)}</pre></div></div></div>`}
 const list=allEvidence();return `<div class="drawer-overlay"><div class="drawer" role="dialog" aria-label="证物柜" aria-modal="true"><div class="drawer-head"><h2 class="drawer-title">证物柜</h2><button class="drawer-close" data-act="close">关闭 ×</button></div><div class="drawer-content"><p class="muted">已解封 ${list.length} 份文件。系统不保证其中每一份都真实。打开原件，比较来源。</p><div class="dossier-grid">${list.map(k=>{const r=D.records[k];return `<button class="dossier-item" data-record="${k}"><span class="dossier-date">${esc(r.date)}</span> <span class="dossier-name">${esc(r.title)}</span> <span class="dossier-type">${esc(r.type)}</span></button>`}).join('')}</div></div></div></div>`}
 function render(scope){fxScope=scope||'minor';let isIntro=!state.started;root.dataset.fx=fxScope;root.innerHTML=`<div class="page">${isIntro?introHTML():stageMain()}${footHTML()}</div>${drawerHTML()}`;attach();
 if(drawer==='notes'){let el=document.getElementById('notes-field');if(el){el.addEventListener('input',()=>{state.notes=el.value;save()})}}}
 function navTo(i){if(!isAccessible(i))return;state.current=i;visitedSteps.add(D.steps[i]?.id);resultMessage='';save();render('full');window.scrollTo({top:0,behavior:'smooth'})}
 function reset(){const msg='确定清除本设备的全部调查进度和笔记吗？此操作不可撤销。';if(window.confirm(msg)){state=defaultState();drawer=null;viewedRecord=null;resultMessage='';save();render('full')}}
 function downloadText(name,content){let blob=new Blob([content],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2500)}
 function attach(){root.querySelectorAll('[data-act]').forEach(el=>el.addEventListener('click',async e=>{let action=el.dataset.act;switch(action){
  case 'start':state.started=true;save();render('full');break;
  case 'next':advance();break;
  case 'back':navTo(stepCount-1);break;
  case 'index':drawer='index';sfx.drawer();render('drawer');break;
  case 'dossiers':drawer='dossiers';viewedRecord=null;sfx.drawer();render('drawer');break;
  case 'notes':drawer='notes';sfx.drawer();render('drawer');break;
  case 'transfer':drawer='transfer';sfx.drawer();render('drawer');break;
  case 'import-save':{try{let txt=document.getElementById('save-import')?.value||'',obj=decodeSave(txt);if(obj.v!==1||!Number.isInteger(obj.stepUnlocked)||obj.stepUnlocked<0||obj.stepUnlocked>stepCount)throw Error('记录版本或完成章节数有误');if(!window.confirm('确定将这份存档覆盖本机当前进度和笔记吗？'))break;state={...defaultState(),...obj,current:Math.max(0,Math.min(stepCount,obj.current||0))};drawer=null;resultMessage='';save();render('full');showToast('存档已导入');}catch(err){showToast('存档格式无效，请重新复制完整内容')}break}
  case 'close':closeDrawer();break;
  case 'record-back':drawer='dossiers';viewedRecord=null;render('drawer');break;
  case 'reset':reset();break;
  case 'audio':{sfx.toggle();showToast(audioMuted?'环境音已关闭':'环境音已开启');render('minor');break}
  case 'hint':{const s=D.steps[state.current];state.hints[s.id]=Math.min(3,(state.hints[s.id]||0)+1);sfx.blip(520,.06,'triangle',.015);save();render('minor');break}
  case 'compare-wave':await verifyWave();break;
  case 'gacha':state.drawAttempts=(state.drawAttempts||0)+1;save();render();break;
  case 'check-hamming':{let syn=hammingSyndrome(state.bits),changes=[...state.bits].filter((v,i)=>v!=='0110111'[i]).length;if(syn.pos===0&&changes===1&&state.bits==='0110011'){complete('hamming')}else{sfx.reject();resultMessage='S4S2S1 ≠ 000 :: 单比特修正未完成。';render('reject')}break}
  case 'check-verdict':submitVerdict();break;
  case 'export':downloadText('zephyr-investigation-notes.txt',state.notes||'（空白调查笔记）');break;
  default:break
 }}));
 root.querySelectorAll('[data-day]').forEach(el=>el.addEventListener('click',()=>{let idx=firstIndexDay(Number(el.dataset.day));let day=Number(el.dataset.day),last=D.steps.map((s,i)=>({s,i})).filter(x=>x.s.day===day&&x.i<=state.stepUnlocked).map(x=>x.i);navTo(last.find(i=>!isDone(i))??last[0]??idx)}));
 root.querySelectorAll('[data-record]').forEach(el=>el.addEventListener('click',()=>{drawer='dossiers';viewedRecord=el.dataset.record;render('drawer')}));
 root.querySelectorAll('[data-wave]').forEach(el=>el.addEventListener('click',()=>{const [side,n]=el.dataset.wave.split(':');state[side==='A'?'waveA':'waveB']=Number(n);sfx.blip(430,.05,'sine',.012);save();render('minor')}));
 root.querySelectorAll('[data-bit]').forEach(el=>el.addEventListener('click',()=>{let i=Number(el.dataset.bit),b=[...state.bits];b[i]=b[i]==='1'?'0':'1';state.bits=b.join('');sfx.blip(660,.04,'square',.01);save();render('minor')}));
 root.querySelectorAll('[data-trace]').forEach(el=>el.addEventListener('click',()=>{let id=el.dataset.trace;state.traceOpen=state.traceOpen.includes(id)?state.traceOpen.filter(x=>x!==id):[...state.traceOpen,id];save();render('minor')}));
 root.querySelectorAll('[data-mai]').forEach(el=>el.addEventListener('click',()=>{let n=Number(el.dataset.mai);playTap(n);el.classList.add('blink');setTimeout(()=>el.classList.remove('blink'),160)}));
 root.querySelectorAll('input[type="radio"][name^="claim"]').forEach(el=>el.addEventListener('change',()=>{let i=Number(el.name.replace('claim',''));state.verdict[i]=el.value==='T';save()}));
 const form=document.getElementById('answer-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const field=document.getElementById('answer-input');const raw=field?.value||'';submitInput(raw)})
 root.querySelectorAll('.drawer-overlay').forEach(el=>el.addEventListener('click',e=>{if(e.target===el){closeDrawer()}}));
 }
 // 音频：全部由 WebAudio 合成，无外部文件。AudioContext 只在用户手势内创建（浏览器自动播放策略），
 // 引导序列保持静音；环境低鸣在首次交互后淡入。开关偏好存独立 key，不写入游戏存档。
 let audioCtx,humGain=null;const AUDIO_PREF_KEY='zephyr-audio-pref';
 let audioMuted=false;try{audioMuted=localStorage.getItem(AUDIO_PREF_KEY)==='off'}catch{}
 function ensureCtx(){try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();return audioCtx}catch{return null}}
 const sfx={
  blip(freq=440,dur=.08,type='sine',gain=.02){if(audioMuted)return;const ctx=ensureCtx();if(!ctx)return;try{const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(gain,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+dur);o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+dur+.02)}catch{}},
  accept(){this.blip(523,.09,'triangle',.028);window.setTimeout(()=>this.blip(784,.13,'triangle',.028),95)},
  reject(){this.blip(140,.13,'square',.02)},
  drawer(){this.blip(300,.04,'triangle',.014);window.setTimeout(()=>this.blip(212,.05,'triangle',.012),50)},
  hum(on){const ctx=ensureCtx();if(!ctx)return;if(on&&!audioMuted&&!humGain){try{const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=52;g.gain.setValueAtTime(.0001,ctx.currentTime);g.gain.linearRampToValueAtTime(.0055,ctx.currentTime+2.5);o.connect(g).connect(ctx.destination);o.start();humGain={o,g}}catch{}}if((!on||audioMuted)&&humGain){try{const{o,g}=humGain;g.gain.linearRampToValueAtTime(.0001,ctx.currentTime+.6);o.stop(ctx.currentTime+.7)}catch{}humGain=null}},
  toggle(){audioMuted=!audioMuted;try{localStorage.setItem(AUDIO_PREF_KEY,audioMuted?'off':'on')}catch{};this.hum(!audioMuted);return audioMuted}
 };
 function playTap(n){sfx.blip(230+n*32,.15,'sine',.03)}
 function startAmbience(){sfx.hum(true)}
 ['pointerdown','keydown'].forEach(evt=>document.addEventListener(evt,startAmbience,{once:true,capture:true}));
 function closeDrawer(){const el=root.querySelector('.drawer-overlay');if(el){el.classList.add('closing');window.setTimeout(()=>{drawer=null;viewedRecord=null;render('drawer')},175)}else{drawer=null;viewedRecord=null;render('drawer')}}
 function readSealFromUrl(){let args=new URLSearchParams(window.location.search),seal=args.get('seal');if(seal){state.receivedSeal=seal;save();showToast('已接收二维码携带的封存条。到达终局卷宗后仍需核验。');try{history.replaceState(null,'',location.pathname+location.hash)}catch{}}}
 // 已扫码且到达物证环节，可主动提交封存码。扫码不跳关，防止提前剧透。
 if(state.receivedSeal){/* 扫码只预填口令；不会跳过未完成的章节。 */}
 // 无引导序列：直接进入档案。源码层注释见 index.html。
 // 源码层：控制台属于档案系统，只留记录，不给答案。
 const loreMap={
  'CORE-17':'第 17 号构建源。三个年代的索引都指向它。删除请求：三次，全部驳回。',
  '004':'转录备注 004：本页在恢复时缺少签发栏。签发人身份未确立。',
  'Z-00':'收件人档案。物品：A4 原始审计表（复制件）。状态：待领取。',
  'WX-17':'1946 年设备登记编号。持有人栏：[FIELD LOST]。',
  'BOOT':'引导日志只写入档案系统。它不解释自己。'
 };
 function emitConsole(){const style='color:#93b0bb;font-family:monospace;font-size:12px';console.log('%cARCHIVE-00 :: 17 FILES RESTORED',style);console.log('%cOPERATOR AUTHORITY :: UNVERIFIED',style);console.log('%c系统不回答没有编号的问题。',style)}
 window.ZephyrDev={getProgress:()=>({stepUnlocked:state.stepUnlocked,current:state.current,solved:{...state.solved}}),getManual:()=>D.manual,getAnnex:()=>D.annex,query:id=>loreMap[id]||'INDEX NOT FOUND'};
 readSealFromUrl();render('full');emitConsole();
})();
