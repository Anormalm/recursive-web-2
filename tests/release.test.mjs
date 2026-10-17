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
 engine=engine.replace('readSealFromUrl();init();',`window.test={releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,hammingSyndrome,acceptedHash,sha256Text,norm,getState:()=>state,setState:s=>state={...defaultState(),...s}};`);
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
 const {ctx,t,C}=game();ctx.now=Date.parse('2026-10-20T10:59:59Z');t.setState({stepUnlocked:17,capstoneOk:true});assert.match(t.finaleBody(),/尚未解封/);
 C.launchAt='invalid';assert.equal(t.released(1),false);assert.doesNotThrow(()=>t.recordBody('registry'));
 C.launchAt='2026-10-20T19:00:00+08:00';for(const hours of [0,-1,NaN,Infinity,'24']){C.chapterIntervalHours=hours;assert.equal(t.released(1),false);}
});
test('17 stages complete in dependency order; unavailable and repeated completions rejected',()=>{
 const {ctx,t,D}=game();ctx.now=Date.parse('2026-10-26T00:00:00Z');
 for(let i=0;i<D.steps.length;i++){t.complete(D.steps[(i+1)%D.steps.length].id);assert.equal(t.getState().stepUnlocked,i);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);t.complete(D.steps[i].id);assert.equal(t.getState().stepUnlocked,i+1);}
 assert.equal(Object.keys(t.getState().solved).length,17);
});
test('production configuration and public tree contain no GM kit',()=>{
 const {C}=game();assert.equal(C.previewMode,false);assert.equal(C.launchAt,'2026-10-20T19:00:00+08:00');assert.equal(existsSync(new URL('../gm',import.meta.url)),false);
 assert.equal(C.pickup.sealSha256.length,64);
});
