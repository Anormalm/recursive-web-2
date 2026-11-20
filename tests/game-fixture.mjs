import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
export function game(options={}){
 const storage=options.storage||new Map(),listeners={},elements={},timers=new Map(),faults=options.faults||{},events={},toasts=[];let timerId=0,reads=0,writes=0;
 const listen=(k,f)=>{(events[k]??=[]).push(f);listeners[k]=event=>events[k].forEach(fn=>fn(event));};
 const setTimeout=(fn,delay)=>{if(!options.timers)return;const id=++timerId;timers.set(id,{fn,delay});return id;},clearTimeout=id=>timers.delete(id);
 const ctx={window:{addEventListener:listen,confirm:()=>true},console:{log(){},warn(){}},TextEncoder,TextDecoder,btoa,atob,crypto:Object.hasOwn(options,'crypto')?options.crypto:webcrypto,URLSearchParams,Intl,Uint8Array,Int16Array,setTimeout,clearTimeout,Date:class extends Date{static now(){return ctx.now;}},localStorage:{getItem(k){reads++;if(options.denied||faults.read?.(k,reads))throw Error('read denied');return faults.readValue?faults.readValue(k,storage.get(k)??null,reads):storage.get(k)??null;},setItem(k,v){writes++;if(options.denied||faults.write?.(k,v,writes))throw Error('write denied');if(!faults.dropWrite?.(k,v,writes))storage.set(k,v);}},location:{search:options.search||'',pathname:'/',hash:''},history:{replaceState(...args){ctx.replaced=args;}},document:{getElementById(id){return elements[id]||null;},createElement(){return {setAttribute(){},appendChild(){},remove(){}};},body:{dataset:{},appendChild(el){toasts.push(el.textContent);}},addEventListener:listen}};
 ctx.window.location=ctx.location;ctx.window.setTimeout=setTimeout;ctx.now=options.now??0;vm.createContext(ctx);
 for(const f of ['config.js','data.js',...(options.noStory?[]:['js/story.js']),...(options.noGuidance?[]:['js/task-guidance.js'])])vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'),ctx);
 if(options.brokenStory)ctx.window.ZEPHYR_STORY=options.brokenStory;
 let engine=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');
 engine=engine.replace('readSealFromUrl();init();',`window.test={saveBody,receiptBody,renderAnswerPanel,sourceBody,modalKeys,modalFocus,setPanel:kind=>panelKind=kind,focusCurrentTask,storyDock,wire,stationControls,archiveBody,availableMaterials,commitStoryEntry,dockBody,pendingScene,commitScene,sourceAvailable,sceneEligible,storyWaived,canInvestigate,canUnseal,campaignClosed,ingestState,freshStory,storyBody,storyDock,derivedDocuments,dossierText,finaleView,replaceView,resumeStory,reviewStory,originalReceiptsBody,releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,activateFile,setMode,pinEvidence,operateBody,originalBody,evidenceGroups,evidenceMatches,evidencePicker,evidenceBody,widgetChange,motion,arrivalBody,getStation:()=>station,getEpoch:()=>epoch,renderMaterial,hammingSyndrome,acceptedHash,sha256Text,norm,mutate,syncState,save,reset,normalizeState,encodeSave,decodeSave,readSealFromUrl,renderMai,renderArcaea,getRecovery:()=>recoveryDrafts,getState:()=>state,setState:s=>state=normalizeState(s),finaleCapstoneHash,aWaves,bWaves,maiLetters,maiOhm,arcaeaTarget,arcBeats};`);
 if(options.startup)engine=engine.replace('renderStorageNotice();scheduleRelease();notifyUI();','readSealFromUrl();init();renderStorageNotice();scheduleRelease();notifyUI();');
 vm.runInContext(engine,ctx);return {ctx,t:ctx.window.test,D:ctx.window.ZEPHYR_DATA,C:ctx.window.ZEPHYR_CONFIG,storage,listeners,elements,timers,faults,toasts};
}
export function resolveScenes(g){
 let scene;
 while((scene=g.t.pendingScene())){
  if(!g.t.commitScene(scene.id,scene.options[0].id,scene.fixedSources))throw Error('Could not commit fixture scene '+scene.id);
 }
}
