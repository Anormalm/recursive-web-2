/* ZEPHYR · document chrome. Saves, originals and validation belong to engine.js. */
(() => {
 'use strict';
 const api=window.ZephyrUI;if(!api)return;
 const identity=document.getElementById('station-identity');
 const catalog=document.getElementById('catalog-files');
 const search=document.getElementById('catalog-search');
 const form=document.getElementById('catalog-search-form');
 const empty=document.getElementById('catalog-empty');
 const labels={zh:{search:'检索',placeholder:'档号、题名、日期或类型',empty:'暂无开放原件。',noMatch:'没有匹配。换个档号、题名、日期或类型试试。'},en:{search:'Search',placeholder:'File number, title, date or type',empty:'No originals open yet.',noMatch:'Nothing matches. Try another number, title, date or type.'}};
 const entries=new Map();let ordered=[],locale='zh',rendered=false;
 const text=value=>typeof value==='string'?value:'';
 const normalize=value=>text(value).normalize('NFKC').toLowerCase();
 function fileHref(id){
  const url=new URL('index.html',document.baseURI);
  url.searchParams.set('rec',id);
  const lang=new URLSearchParams(location.search).get('lang');
  if(url.origin===location.origin&&(lang==='zh'||lang==='en'))url.searchParams.set('lang',lang);
  return url.href;
 }
 function createEntry(id){
  const row=document.createElement('li');row.className='cat-row';row.dataset.record=id;
  const number=document.createElement('span');number.className='cat-no';
  const content=document.createElement('div');content.className='cat-entry';
  const link=document.createElement('a');
  const meta=document.createElement('p');meta.className='cat-meta';
  content.append(link,meta);row.append(number,content);
  return {row,number,link,meta,searchText:''};
 }
 function filter(){
  const words=normalize(search?.value||'').trim().split(/\s+/).filter(Boolean);let found=false;
  for(const id of ordered){const entry=entries.get(id);entry.row.hidden=!words.every(word=>entry.searchText.includes(word));if(!entry.row.hidden)found=true;}
  if(empty){empty.hidden=found;empty.textContent=ordered.length?labels[locale].noMatch:labels[locale].empty;}
 }
 function update(model){
  locale=labels[model.locale]?model.locale:'zh';
  const files=model.files||[],file=files.find(f=>f.active);
  if(identity){identity.hidden=!file;identity.textContent=file?.number||'';}
  if(!catalog)return;
  const label=document.getElementById('catalog-search-label');
  if(label)label.textContent=labels[locale].search;
  if(search)search.placeholder=labels[locale].placeholder;
  const visible=files.filter(f=>f.accessible),ids=visible.map(f=>f.id);
  for(const f of visible){
   let entry=entries.get(f.id);if(!entry){entry=createEntry(f.id);entries.set(f.id,entry);}
   // Only the engine's public metadata crosses this boundary. Never read bodies,
   // solution text, fragments, saved findings or withheld resources for search.
   const metadata=(Array.isArray(f.evidence)?f.evidence:[]).map(e=>[text(e.title),text(e.date),text(e.type)].filter(Boolean).join(' · ')).filter(Boolean);
   entry.number.textContent=text(f.number);entry.link.textContent=text(f.title);entry.link.href=fileHref(f.id);
   entry.link.setAttribute('aria-label',`${text(f.number)} ${text(f.title)}`.trim());
   entry.meta.textContent=metadata.join(' / ');entry.meta.title=metadata.join(' / ');entry.meta.hidden=!metadata.length;
   entry.searchText=normalize([text(f.number),text(f.title),...metadata].join(' '));
  }
  if(!rendered||ids.length!==ordered.length||ids.some((id,i)=>id!==ordered[i])){
   rendered=true;
   const focused=ordered.find(id=>entries.get(id)?.link===document.activeElement);
   catalog.replaceChildren(...ids.map(id=>entries.get(id).row));
   if(focused){if(ids.includes(focused))entries.get(focused).link.focus({preventScroll:true});else search?.focus({preventScroll:true});}
  }
  for(const id of entries.keys())if(!ids.includes(id))entries.delete(id);
  ordered=ids;filter();
 }
 search?.addEventListener('input',filter);
 form?.addEventListener('submit',e=>{e.preventDefault();filter();});
 // Translate this disposable search in place: neither its input nor keyboard
 // focus needs to be discarded by reloading the catalog to change language.
 if(search)document.addEventListener('zephyr-before-language-change',e=>e.preventDefault());
 const unsubscribe=api.subscribe(update);update(api.getModel());
 let stopped=false;window.addEventListener('pagehide',e=>{if(!e.persisted&&!stopped){stopped=true;unsubscribe();}});
})();
