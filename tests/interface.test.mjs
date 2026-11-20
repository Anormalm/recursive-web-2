import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

function languagePage({lang='zh',denied=false,veto=false}={}){
 const listeners={},stored=new Map(),toggle={textContent:'',setAttribute(k,v){this[k]=v;}},title={dataset:{en:'Witness Zero'}},description={content:'中文说明',dataset:{en:'English description'}};
 const url=new URL('https://example.test/recursive-web-2/index.html?rec=registry#panel'),location={href:url.href,origin:url.origin,search:url.search,assign(href){this.assigned=href;}};
 const document={title:'第零号证人',readyState:'complete',baseURI:url.href,documentElement:{dataset:{lang}},head:{querySelector:()=>title},querySelector:()=>description,querySelectorAll:()=>[toggle],addEventListener(name,fn){(listeners[name]??=[]).push(fn);},dispatchEvent(event){for(const fn of listeners[event.type]||[])fn(event);return !event.defaultPrevented;}};
 if(veto)document.addEventListener('zephyr-before-language-change',e=>e.preventDefault());
 const history={replaceState(_state,_title,href){this.replaced=href;location.href=href;location.search=new URL(href).search;}};
 vm.runInNewContext(readFileSync(new URL('../js/i18n.js',import.meta.url),'utf8'),{document,location,history,URL,URLSearchParams,Event,localStorage:{setItem(k,v){if(denied)throw Error('denied');stored.set(k,v);}}});
 const click=element=>{let prevented=false;document.dispatchEvent({type:'click',target:{closest:s=>s==='[data-lang-toggle]'?(element===toggle?toggle:null):s==='a[href]'&&element!==toggle?element:null},preventDefault(){prevented=true;}});return prevented;};
 return {document,location,history,stored,toggle,description,click};
}

test('actual i18n delegate reloads an ordinary page while retaining route and hash',()=>{
 const p=languagePage();assert.equal(p.click(p.toggle),true);const target=new URL(p.location.assigned);
 assert.equal(target.searchParams.get('lang'),'en');assert.equal(target.searchParams.get('rec'),'registry');assert.equal(target.hash,'#panel');assert.equal(p.stored.get('zephyr-lang'),'en');
});
test('actual i18n delegate honors engine veto and denied storage without reload',()=>{
 for(const options of [{veto:true},{denied:true}]){const p=languagePage(options);let changed=0;p.document.addEventListener('zephyr-language-change',()=>changed++);p.click(p.toggle);
 assert.equal(p.location.assigned,undefined);assert.equal(p.document.documentElement.lang,'en');assert.equal(p.document.title,'Witness Zero');assert.equal(p.description.content,'English description');assert.equal(p.toggle.textContent,'中文');assert.equal(changed,1);
 const target=new URL(p.history.replaced);assert.equal(target.searchParams.get('rec'),'registry');assert.equal(target.searchParams.get('lang'),'en');assert.equal(target.hash,'#panel');
 p.click(p.toggle);assert.equal(p.document.title,'第零号证人');assert.equal(p.document.documentElement.lang,'zh-CN');}
});
test('actual language link fallback is limited to same-origin page links',()=>{
 const p=languagePage({denied:true});p.click(p.toggle);
 for(const [href,eligible] of [['catalog.html?filter=open#row',true],['core-17/',true],['https://outside.example/catalog.html',false],['assets/1946-scan.jpg',false]]){const a={href,getAttribute:()=>href};p.click(a);
 if(eligible){const next=new URL(a.href);assert.equal(next.searchParams.get('lang'),'en');if(href.startsWith('catalog')){assert.equal(next.searchParams.get('filter'),'open');assert.equal(next.hash,'#row');}}else assert.equal(a.href,href);}
});
test('actual chrome controller paints initial metadata and subsequent language/status changes',()=>{
 const events={},small={},heading={},identity={hidden:false,querySelector:s=>s==='h1'?heading:small},status={},link={setAttribute(k,v){this[k]=v;}},row={dataset:{step:'registry'},classList:{toggle(k,v){this[k]=v;}},querySelector:s=>s==='a'?link:status};
 let listener,unsubscribed=0;const model=locale=>({locale,arrived:true,mode:'original',files:[{id:'registry',day:1,number:'WX-1946-011',title:'档案题名',active:true,status:locale==='zh'?'available':'completed'}],chapters:[{day:1,title:locale==='zh'?'第一天':'Day 1'}]});
 const document={body:{dataset:{}},getElementById:()=>identity,querySelectorAll:()=>[row]},window={ZephyrUI:{subscribe(fn){listener=fn;return()=>unsubscribed++;},getModel:()=>model('zh')},addEventListener(name,fn){events[name]=fn;}};
 vm.runInNewContext(readFileSync(new URL('../js/game-ui.js',import.meta.url),'utf8'),{window,document});
 assert.equal(status.textContent,'可调查');assert.equal(heading.textContent,'档案题名');assert.equal(document.body.dataset.era,'1946');listener(model('en'));assert.equal(status.textContent,'Filed');assert.equal(row.classList.done,true);assert.match(link['aria-label'],/Filed/);
 events.pagehide({persisted:true});assert.equal(unsubscribed,0);events.pagehide({persisted:false});assert.equal(unsubscribed,1);
});
