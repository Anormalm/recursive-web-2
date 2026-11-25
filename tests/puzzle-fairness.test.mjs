import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {game} from './game-fixture.mjs';
const now=Date.parse('2026-11-20');
const setup=options=>game({now,...options});
const legacy=(g,n)=>g.t.setState(g.t.ingestState({v:1,stepUnlocked:n,started:true}));
const step=(g,id)=>g.D.steps.find(s=>s.id===id);

test('reel inspection exposes only the selected fragments and keeps every original integer',()=>{
 const g=setup();legacy(g,5);g.t.activateFile('reels');const s=step(g,'reels'),before=JSON.stringify([g.t.aWaves,g.t.bWaves]);
 assert.match(g.t.operateBody(s),/sample-inspection/);assert.doesNotMatch(g.t.operateBody(s),/<td>/);
 g.t.widgetChange('wave','reels',s=>{s.waveA=0;s.waveB=1;});const saved=g.t.encodeSave(),epoch=g.t.getEpoch(),html=g.t.operateBody(s);
 for(const [side,index,values] of [['A',0,g.t.aWaves[0]],['B',1,g.t.bWaves[1]]]){assert.ok(html.includes(`REEL-${side} / ${side}${index+1}`));for(const [i,v] of values.entries())assert.ok(html.includes(`<tr><th scope="row">${i+1}</th><td>${v}</td></tr>`));}
 assert.equal((html.match(/<td>/g)||[]).length,32);assert.doesNotMatch(html,/data-match|recommended|difference-highlight/);
 assert.equal(JSON.stringify([g.t.aWaves,g.t.bWaves]),before);assert.equal(g.t.encodeSave(),saved);assert.equal(g.t.getEpoch(),epoch);
});
test('completed reel inspection uses disposable review selections, not canonical save',()=>{
 const g=setup();legacy(g,6);g.t.activateFile('reels');g.t.setMode('operate');const saved=g.t.encodeSave(),epoch=g.t.getEpoch();
 assert.ok(g.t.widgetChange('wave','reels',s=>{s.waveA=1;s.waveB=2;}));assert.match(g.t.operateBody(step(g,'reels')),/REEL-A \/ A2/);
 assert.equal(g.t.encodeSave(),saved);assert.equal(g.t.getEpoch(),epoch);
});
test('sampling digest is retrievable only from an earned receipt and settles asynchronously',async()=>{
 let settle;const g=setup({crypto:{subtle:{digest:()=>new Promise(r=>settle=r)}}}),s=step(g,'reels');legacy(g,5);
 assert.doesNotMatch(g.t.receiptBody(s),/earned-sample-digest/);legacy(g,6);
 assert.match(g.t.receiptBody(s),/earned-sample-digest/);assert.doesNotMatch(g.t.receiptBody(s),/0{64}/);
 settle(new ArrayBuffer(32));await new Promise(r=>setImmediate(r));assert.match(g.t.receiptBody(s),/0{64}/);
});
test('late sample digest updates only a still-earned mounted receipt without saving',async()=>{
 for(const keepEarned of [true,false]){let settle;const g=setup({crypto:{subtle:{digest:()=>new Promise(r=>settle=r)}}});legacy(g,6);g.t.activateFile('reels');const output={textContent:'pending'};g.elements['earned-sample-digest']=output;if(!keepEarned)legacy(g,5);const saved=g.t.encodeSave(),epoch=g.t.getEpoch();settle(new ArrayBuffer(32));await new Promise(r=>setImmediate(r));assert.equal(output.textContent,keepEarned?'0'.repeat(64):'pending');assert.equal(g.t.encodeSave(),saved);assert.equal(g.t.getEpoch(),epoch);}
});
test('unavailable sample crypto stays honestly unavailable and does not invent a digest',async()=>{
 const g=setup({crypto:undefined});legacy(g,6);await new Promise(r=>setImmediate(r));const html=g.t.receiptBody(step(g,'reels'));assert.match(html,/摘要还没出来/);assert.doesNotMatch(html,/0{64}/);g.ctx.document.documentElement={dataset:{lang:'en'}};assert.match(g.t.receiptBody(step(g,'reels')),/Digest not ready/);
});
test('typed inputs describe existing response categories without a solution or method',()=>{
 const g=setup();for(const id of ['institution','building','reelnote','newsclip','triangulate']){const html=g.t.renderAnswerPanel(step(g,id),false);assert.match(html,/id="answer-contract"/);assert.match(html,/aria-describedby="answer-contract"/);}
 assert.match(g.t.renderAnswerPanel(step(g,'newsclip'),false),/开幕日/);assert.doesNotMatch(g.t.renderAnswerPanel(step(g,'reelnote'),false),/Vigen|Autokey|凯撒|维吉/);
 assert.doesNotMatch(g.t.renderAnswerPanel(step(g,'dropcoords'),false),/answer-input/);
});
test('field guidance is nonfiction, explicitly unverified and does not replace pickup',()=>{
 const g=setup();legacy(g,12);g.t.activateFile('dropcoords');const saved=g.t.encodeSave(),epoch=g.t.getEpoch(),html=g.t.originalBody(step(g,'dropcoords'));
 assert.match(html,/field-readiness/);assert.match(html,/还没确认/);assert.match(html,/不要安排出行/);assert.match(html,/非剧情/);
 assert.doesNotMatch(html,/mailto:|data-act="complete|geolocation|location-check/);assert.equal(g.t.encodeSave(),saved);assert.equal(g.t.getEpoch(),epoch);
 assert.match(g.t.arrivalBody(),/field-readiness/);assert.match(g.t.sourceBody('aDrop'),/field-readiness/);legacy(g,0);assert.equal(g.t.sourceBody('aDrop'),'');assert.match(g.t.recordBody('dropcoords'),/field-readiness/);
});
test('literal newspaper text aid is availability-gated, bilingual labelled, original English',()=>{
 const g=setup();assert.match(g.t.sourceBody('aPress'),/press-transcription/);assert.equal(g.t.getState().solved.newsclip,undefined);g.ctx.now=g.t.releaseTime(4)-1;assert.equal(g.t.sourceBody('aPress'),'');g.ctx.now=now;g.t.activateFile('newsclip');const saved=g.t.encodeSave(),s=step(g,'newsclip');
 const html=g.t.originalBody(s);assert.match(html,/press-transcription/);assert.match(html,/OPENS BY CITY HALL/);assert.match(html,/opened yesterday evening/);assert.match(html,/挡住/);
 assert.ok(html.startsWith(g.t.renderMaterial(s)));assert.match(html,/\[date: absent\]/);assert.match(html,/\[masthead: upper letter portions torn away\]/);assert.match(html,/\[photo-obscured\]/);assert.match(g.t.sourceBody('aPress'),/press-transcription/);
 g.ctx.document.documentElement={dataset:{lang:'en'}};assert.match(g.t.originalBody(s),/Visible print/);assert.match(g.t.originalBody(s),/opened yesterday evening/);assert.equal(g.t.encodeSave(),saved);
});
test('transfer instructions explicitly protect the newer QR receipt from older imports',()=>{
 const g=setup();assert.match(g.t.arrivalBody(),/还没确认/);
 const saved=g.t.encodeSave(),html=g.t.saveBody();assert.match(html,/扫码前/);assert.match(html,/旧存档/);
 g.ctx.document.documentElement={dataset:{lang:'en'}};assert.match(g.t.saveBody(),/QR link/);assert.equal(g.t.encodeSave(),saved);
});
test('reading aid styles retain dock foreground and print legibility',()=>{
 const css=readFileSync(new URL('../styles.css',import.meta.url),'utf8');assert.match(css,/\.answer-contract\{[^}]*color:inherit/);const print=css.slice(css.indexOf('@media print'));for(const selector of ['.task-guidance','.task-guidance p','.task-guidance summary','.task-guidance li'])assert.ok(print.includes(selector));assert.match(print,/\.task-guidance \.field-status\{color:#000\}/);
});
test('optional guidance absence leaves the original game usable and all pages load it before engine',()=>{
 for(const p of ['index.html','catalog.html','finale.html']){const h=readFileSync(new URL('../'+p,import.meta.url),'utf8');assert.ok(h.indexOf('js/task-guidance.js')>=0);assert.ok(h.indexOf('js/task-guidance.js')<h.indexOf('js/engine.js'));}
 const g=setup({noGuidance:true});legacy(g,5);g.t.activateFile('reels');assert.doesNotThrow(()=>g.t.operateBody(step(g,'reels')));assert.doesNotThrow(()=>g.t.arrivalBody());
});
