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
function chromePage({files,locale='zh',catalogPage=true,api=true}={}){
 const events={},listeners={};let listener,unsubscribed=0,replacements=0,document;
 const element=tag=>({tag,dataset:{},children:[],textContent:'',hidden:false,value:'',events:{},append(...nodes){this.children.push(...nodes);},setAttribute(k,v){this[k]=v;},addEventListener(name,fn){this.events[name]=fn;},focus(options){document.activeElement=this;this.focusOptions=options;},replaceChildren(...nodes){replacements++;this.children=nodes;if(this.children.includes(document.activeElement))document.activeElement=null;}});
 const nodes={'station-identity':element('div')};
 if(catalogPage)for(const [id,tag] of [['catalog-files','ul'],['catalog-search','input'],['catalog-search-form','form'],['catalog-empty','p'],['catalog-search-label','label']])nodes[id]=element(tag);
 const toggle=element('button'),title={dataset:{en:'Catalog'}},description={content:'中文说明',dataset:{en:'Catalog description'}};
 const url=new URL('https://example.test/recursive-web-2/catalog.html?lang='+locale),location={href:url.href,origin:url.origin,search:url.search,assign(href){this.assigned=href;}};
 document={title:'馆藏目录',readyState:'complete',baseURI:url.href,documentElement:{dataset:{lang:locale}},activeElement:null,head:{querySelector:()=>title},querySelector:()=>description,querySelectorAll:()=>[toggle],getElementById:id=>nodes[id],createElement:element,addEventListener(name,fn){(listeners[name]??=[]).push(fn);},dispatchEvent(event){for(const fn of listeners[event.type]||[])fn(event);return !event.defaultPrevented;}};
 const base={locale,files:files||[{id:'registry',number:'WX-1946-011',title:'档案题名',day:1,active:true,accessible:true,evidence:[{id:'aRegistry',title:'设备登记记录',date:'1946 · 原始记录',type:'史料副本'}]}]};
 // The presentation may not fall back to game or saved-state fields.
 for(const field of ['frontierId','completed','total','chapters','solved'])Object.defineProperty(base,field,{get(){throw Error('Forbidden model field: '+field);}});
 for(const file of base.files)for(const field of ['status','completed','chapter','index'])Object.defineProperty(file,field,{get(){throw Error('Forbidden file field: '+field);}});
 const window={ZephyrUI:api?{subscribe(fn){listener=fn;return()=>unsubscribed++;},getModel:()=>base}:null,addEventListener(name,fn){events[name]=fn;}};
 const history={replaceState(_state,_title,href){location.href=href;location.search=new URL(href).search;}};
 const context={window,document,location,history,URL,URLSearchParams,Event,localStorage:{setItem(){throw Error('denied');}}};
 vm.runInNewContext(readFileSync(new URL('../js/game-ui.js',import.meta.url),'utf8'),context);
 return {nodes,document,location,events,context,toggle,model:base,update(next){listener(next);},get replacements(){return replacements;},get unsubscribed(){return unsubscribed;},search(query){nodes['catalog-search'].value=query;nodes['catalog-search'].events.input();},rows(){return nodes['catalog-files'].children.filter(row=>!row.hidden);},link(row){return row.children[1].children[0];}};
}

test('actual document chrome renders accessible metadata without findings or progress',()=>{
 const p=chromePage({files:[{id:'registry',number:'WX-1946-011',title:'档案题名',active:true,accessible:true,evidence:[{id:'aRegistry',title:'设备登记记录',date:'1946',type:'史料副本'}]},{id:'future',number:'FUTURE',title:'Future title',accessible:false}]});
 assert.equal(p.nodes['station-identity'].textContent,'WX-1946-011');assert.equal(p.rows().length,1);assert.equal(p.rows()[0].children.length,2);assert.equal(p.nodes['catalog-empty'].hidden,true);
 assert.equal(p.rows()[0].children[1].children[1].textContent,'设备登记记录 · 1946 · 史料副本');
 const link=p.link(p.rows()[0]),href=new URL(link.href);assert.equal(href.searchParams.get('rec'),'registry');assert.equal(href.searchParams.get('lang'),'zh');assert.equal(href.pathname,'/recursive-web-2/index.html');assert.equal(link['aria-label'],'WX-1946-011 档案题名');
 p.update({locale:'en',files:[]});assert.equal(p.nodes['station-identity'].hidden,true);assert.equal(p.rows().length,0);assert.equal(p.nodes['catalog-empty'].hidden,false);assert.equal(p.nodes['catalog-empty'].textContent,'No originals open yet.');
 p.events.pagehide({persisted:true});assert.equal(p.unsubscribed,0);p.events.pagehide({persisted:false});p.events.pagehide({persisted:false});assert.equal(p.unsubscribed,1);
});

test('actual catalog searches numbers, titles and public evidence metadata, never bodies or hidden material',()=>{
 const evidence={id:'private-id',title:'Repair note',date:'1986',type:'Signal image'};for(const field of ['body','solution','clue'])Object.defineProperty(evidence,field,{get(){throw Error('Private metadata read: '+field);}});
 const p=chromePage({locale:'en',files:[{id:'tracks',number:'WX-1986-024',title:'Signal record',accessible:true,evidence:[evidence]},{id:'building',number:'WX-2015-017',title:'Place record',accessible:true,evidence:[]},{id:'future',number:'FUTURE',title:'Withheld title',accessible:false,evidence:[{title:'Hidden metadata'}]}]});
 for(const query of ['wx-1986','SIGNAL RECORD','Repair','1986 image','ＷＸ－１９８６－０２４']){p.search(query);assert.equal(p.rows().length,1,query);assert.equal(p.rows()[0].dataset.record,'tracks');}
 for(const query of ['private-id','tracks','solution','Withheld','Hidden metadata']){p.search(query);assert.equal(p.rows().length,0,query);assert.equal(p.nodes['catalog-empty'].hidden,false);assert.match(p.nodes['catalog-empty'].textContent,/Try another/);}
 p.search('  ');assert.equal(p.rows().length,2);assert.equal(p.nodes['catalog-empty'].hidden,true);
 let prevented=false;p.nodes['catalog-search-form'].events.submit({preventDefault(){prevented=true;}});assert.equal(prevented,true);
});

test('actual catalog keeps search and keyboard focus across updates and in-place language changes',()=>{
 const p=chromePage(),search=p.nodes['catalog-search'];search.focus();p.search('1946');const row=p.rows()[0],link=p.link(row),replacements=p.replacements;
 p.update({...p.model,locale:'en'});assert.equal(search.value,'1946');assert.equal(p.document.activeElement,search);assert.equal(p.rows()[0],row);assert.equal(p.replacements,replacements);assert.equal(search.placeholder,'File number, title, date or type');
 link.focus();p.update({...p.model,locale:'zh'});assert.equal(p.document.activeElement,link);assert.equal(p.replacements,replacements);
 p.update({...p.model,files:[...p.model.files,{id:'building',number:'OTHER',title:'Another original',accessible:true,evidence:[]}]});assert.equal(p.document.activeElement,link);assert.equal(link.focusOptions.preventScroll,true);
 vm.runInNewContext(readFileSync(new URL('../js/i18n.js',import.meta.url),'utf8'),p.context);
 p.document.addEventListener('zephyr-language-change',()=>p.update({...p.model,locale:p.document.documentElement.dataset.lang}));
 search.focus();p.document.dispatchEvent({type:'click',target:{closest:s=>s==='[data-lang-toggle]'?p.toggle:null},preventDefault(){}});
 assert.equal(p.location.assigned,undefined);assert.equal(p.document.documentElement.lang,'en');assert.equal(search.value,'1946');assert.equal(p.document.activeElement,search);assert.equal(new URL(p.link(p.rows()[0]).href).searchParams.get('lang'),'en');
 p.update({...p.model,files:[]});assert.equal(search.value,'1946');assert.equal(p.document.activeElement,search);
});

test('actual chrome safely handles reading-only pages and a missing engine',()=>{
 const p=chromePage({catalogPage:false});assert.equal(p.nodes['station-identity'].textContent,'WX-1946-011');p.update({locale:'en',files:[]});assert.equal(p.nodes['station-identity'].hidden,true);
 const missing=chromePage({api:false});assert.equal(missing.replacements,0);assert.equal(missing.nodes['catalog-search'].events.input,undefined);
});

test('ordinary archive navigation and topology script order appear on actual pages',()=>{
 for(const page of ['index.html','catalog.html','log.html','finale.html']){
  const html=readFileSync(new URL('../'+page,import.meta.url),'utf8'),nav=html.match(/<nav class="archive-nav"[\s\S]*?<\/nav>/)?.[0];assert.ok(nav,page);
  for(const [href,label] of [['index.html','Reading'],['catalog.html','Catalog'],['log.html','Staff notes']]){assert.ok(nav.includes('href="'+href+'"'),page+' '+href);assert.ok(nav.includes('>'+label+'<'),page+' '+label);}
  if(page!=='log.html')assert.ok(html.indexOf('src="js/archive-topology.js"')<html.indexOf('src="js/engine.js"'),page);
 }
 const catalog=readFileSync(new URL('../catalog.html',import.meta.url),'utf8');assert.match(catalog,/id="catalog-search" type="search"/);assert.match(catalog,/Bodies aren’t searched/);assert.doesNotMatch(catalog,/cat-status|data-step=|Filed|已归档|顺序即阅览顺序/);
 const css=readFileSync(new URL('../styles.css',import.meta.url),'utf8');assert.match(css,/\.shell,\.shell\.station-shell\{width:calc\(100% - 32px\)/);assert.match(css,/\.cat-row\{grid-template-columns:minmax\(0,1fr\);/);
});
