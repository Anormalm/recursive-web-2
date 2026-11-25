import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
export function game(options={}){
 const storage=options.storage||new Map(),listeners={},elements={},timers=new Map(),faults=options.faults||{},events={},toasts=[];let timerId=0,reads=0,writes=0;
 const listen=(k,f)=>{(events[k]??=[]).push(f);listeners[k]=event=>events[k].forEach(fn=>fn(event));};
 const setTimeout=(fn,delay)=>{if(!options.timers)return;const id=++timerId;timers.set(id,{fn,delay});return id;},clearTimeout=id=>timers.delete(id);
 const ctx={window:{addEventListener:listen,confirm:()=>true},console:{log(){},warn(){}},TextEncoder,TextDecoder,btoa,atob,crypto:Object.hasOwn(options,'crypto')?options.crypto:webcrypto,URLSearchParams,Intl,Uint8Array,Int16Array,setTimeout,clearTimeout,Date:class extends Date{static now(){return ctx.now;}},localStorage:{getItem(k){reads++;if(options.denied||faults.read?.(k,reads))throw Error('read denied');return faults.readValue?faults.readValue(k,storage.get(k)??null,reads):storage.get(k)??null;},setItem(k,v){writes++;if(options.denied||faults.write?.(k,v,writes))throw Error('write denied');if(!faults.dropWrite?.(k,v,writes))storage.set(k,v);}},location:{search:options.search||'',pathname:options.pathname||'/',hash:options.hash||''},history:{replaceState(...args){ctx.replaced=args;}},document:{getElementById(id){return elements[id]||null;},createElement(){return {setAttribute(){},appendChild(){},remove(){}};},body:{dataset:{},appendChild(el){toasts.push(el.textContent);}},addEventListener:listen}};
 ctx.window.location=ctx.location;ctx.window.setTimeout=setTimeout;ctx.now=options.now??0;vm.createContext(ctx);
 for(const f of ['config.js','data.js',...(options.noStory?[]:['js/story.js']),...(options.noGuidance?[]:['js/task-guidance.js']),...(options.noTopology?[]:['js/archive-topology.js'])])vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'),ctx);
 if(options.brokenStory)ctx.window.ZEPHYR_STORY=options.brokenStory;
 if(options.brokenTopology)ctx.window.ZEPHYR_ARCHIVE=options.brokenTopology;
 let engine=readFileSync(new URL('../js/engine.js',import.meta.url),'utf8');
 engine=engine.replace('readSealFromUrl();init();',`window.test={topologyReady,validSave,physicalReady,uiModel,isDone,solvedCount,init,sceneDocuments,saveBody,receiptBody,renderAnswerPanel,sourceBody,modalKeys,modalFocus,setPanel:kind=>panelKind=kind,focusCurrentTask,storyDock,wire,stationControls,archiveBody,availableMaterials,commitStoryEntry,dockBody,pendingScene,commitScene,sourceAvailable,sceneEligible,storyWaived,canInvestigate,canUnseal,campaignClosed,ingestState,freshStory,storyBody,storyDock,derivedDocuments,dossierText,finaleView,replaceView,resumeStory,reviewStory,originalReceiptsBody,releaseTime,released,isAccessible,allEvidence,complete,submitInput,verifyWave,submitVerdict,maybeAutoSeal,finaleBody,recordBody,activateFile,setMode,pinEvidence,operateBody,originalBody,evidenceGroups,evidenceMatches,evidencePicker,evidenceBody,widgetChange,motion,arrivalBody,getStation:()=>station,getEpoch:()=>epoch,renderMaterial,hammingSyndrome,acceptedHash,sha256Text,norm,mutate,syncState,save,reset,normalizeState,encodeSave,decodeSave,readSealFromUrl,renderMai,renderArcaea,getRecovery:()=>recoveryDrafts,getState:()=>state,setState:s=>state=ingestState(s),finaleCapstoneHash,aWaves,bWaves,maiLetters,maiOhm,arcaeaTarget,arcBeats};`);
 if(options.startup)engine=engine.replace('renderStorageNotice();scheduleRelease();notifyUI();','readSealFromUrl();init();renderStorageNotice();scheduleRelease();notifyUI();');
 vm.runInContext(engine,ctx);return {ctx,t:ctx.window.test,D:ctx.window.ZEPHYR_DATA,C:ctx.window.ZEPHYR_CONFIG,storage,listeners,elements,timers,faults,toasts};
}
// Minimal reading surface for route-entry tests; no parser or puzzle-answer helpers.
export function mountReader(g){
 const node=id=>({id,dataset:{},style:{},classList:{add(){},remove(){},contains(){return false;}},scrollLeft:0,scrollTop:0,innerHTML:'',setAttribute(){},addEventListener(){},contains(){return false;},querySelector(){return null;},querySelectorAll(){return [];}});
 for(const id of ['reader','task-content','task-pane','pin-pane','task-label','task-scroll','pin-content','pin-tabs','station-controls','finding-dock'])g.elements[id]=node(id);
 const comparison=node('comparison');g.elements['pin-content'].querySelector=()=>comparison;g.elements['pin-pane'].querySelector=()=>node('pin-control');
 g.ctx.document.querySelector=()=>null;
 g.ctx.history.replaceState=(...args)=>{g.ctx.replaced=args;const url=new URL(args[2],'https://example.test'+g.ctx.location.pathname+g.ctx.location.search+g.ctx.location.hash);Object.assign(g.ctx.location,{pathname:url.pathname,search:url.search,hash:url.hash});};
 return g.elements;
}
export function resolveScenes(g){
 let scene;
 while((scene=g.t.pendingScene())){
  if(!g.t.commitScene(scene.id,scene.options[0].id,scene.fixedSources))throw Error('Could not commit fixture scene '+scene.id);
 }
}
