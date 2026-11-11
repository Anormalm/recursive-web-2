import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
export function game(options={}){
 const storage=options.storage||new Map(),listeners={},elements={};
 const ctx={window:{addEventListener(k,f){listeners[k]=f;},confirm:()=>true},console:{log(){},warn(){}},TextEncoder,TextDecoder,btoa,atob,crypto:options.crypto||webcrypto,URLSearchParams,Intl,Uint8Array,Int16Array,Date:class extends Date{static now(){return ctx.now;}},localStorage:{getItem(k){if(options.denied)throw Error('denied');return storage.get(k)??null;},setItem(k,v){if(options.denied)throw Error('denied');storage.set(k,v);}},location:{search:'',pathname:'/',hash:''},history:{replaceState(...args){ctx.replaced=args;}},document:{getElementById(id){return elements[id]||null;},createElement(){return {setAttribute(){},appendChild(){},remove(){}};},body:{appendChild(){}},addEventListener(k,f){listeners[k]=f;}}};
 ctx.window.location=ctx.location;ctx.window.setTimeout=()=>{};ctx.now=0;vm.createContext(ctx);
 for(const f of ['config.js','data.js',...(options.noStory?[]:['js/story.js'])])vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'),ctx);
 if(options.brokenStory)ctx.window.ZEPHYR_STORY=options.brokenStory;
 let engine=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');
 engine=engine.replace('readSealFromUrl();init();',`window.test={pendingScene,commitScene,sourceAvailable,sceneEligible,storyWaived,canInvestigate,canUnseal,campaignClosed,ingestState,freshStory,storyBody,storyDock,derivedDocuments,dossierText,finaleView,replaceView,resumeStory,reviewStory,originalReceiptsBody,releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,activateFile,setMode,pinEvidence,operateBody,originalBody,evidenceGroups,evidenceMatches,evidencePicker,evidenceBody,widgetChange,motion,arrivalBody,getStation:()=>station,getEpoch:()=>epoch,renderMaterial,hammingSyndrome,acceptedHash,sha256Text,norm,mutate,syncState,save,reset,normalizeState,encodeSave,decodeSave,readSealFromUrl,renderMai,renderArcaea,getRecovery:()=>recoveryDrafts,getState:()=>state,setState:s=>state=normalizeState(s),finaleCapstoneHash,aWaves,bWaves,maiLetters,maiOhm,arcaeaTarget,arcBeats};`);
 vm.runInContext(engine,ctx);return {ctx,t:ctx.window.test,D:ctx.window.ZEPHYR_DATA,C:ctx.window.ZEPHYR_CONFIG,storage,listeners,elements};
}
export function resolveScenes(g){
 let scene;
 while((scene=g.t.pendingScene())){
  const source=scene.sources.find(id=>g.t.sourceAvailable(id));
  if(!g.t.commitScene(scene.id,scene.options[0].id,[source]))throw Error('Could not commit fixture scene '+scene.id);
 }
}
