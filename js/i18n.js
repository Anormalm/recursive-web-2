/* 泽风计划 · 界面双语；原件不随系统翻译。 */
(() => {
 'use strict';
 const KEY='zephyr-lang';
 const isEn=()=>document.documentElement.dataset.lang==='en';
 const title=document.head.querySelector('title'),description=document.querySelector('meta[name="description"]');
 const zhTitle=document.title,zhDescription=description?.content;
 function applyLanguage(){
  document.documentElement.lang=isEn()?'en':'zh-CN';
  document.title=isEn()&&title?.dataset.en?title.dataset.en:zhTitle;
  if(description)description.content=isEn()&&description.dataset.en?description.dataset.en:zhDescription;
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>{
   b.textContent=isEn()?'中文':'EN';
   b.setAttribute('aria-label',isEn()?'切换到中文 / Switch to Chinese':'Switch to English / 切换到英文');
  });
 }
 function init(){applyLanguage();
  // Delegation includes the first-visit letter, which the engine renders later.
  document.addEventListener('click',e=>{
   const toggle=e.target.closest('[data-lang-toggle]');
   if(toggle){
    e.preventDefault();const next=isEn()?'zh':'en',url=new URL(location.href);
    url.searchParams.set('lang',next);
    const before=new Event('zephyr-before-language-change',{cancelable:true});document.dispatchEvent(before);
    let reload=!before.defaultPrevented;try{localStorage.setItem(KEY,next);}catch{reload=false;}
    if(reload)location.assign(url.href);else{
     // No reload: otherwise switching language would discard the engine's in-memory save.
     history.replaceState(null,'',url.href);
     document.documentElement.dataset.lang=next;document.documentElement.lang=next==='en'?'en':'zh-CN';
     applyLanguage();document.dispatchEvent(new Event('zephyr-language-change'));
    }
    return;
   }
   const a=e.target.closest('a[href]');if(!a)return;
   // URL language is a per-navigation fallback when browser storage is denied.
   const lang=new URLSearchParams(location.search).get('lang');
   if(lang!=='zh'&&lang!=='en')return;
   const url=new URL(a.getAttribute('href'),document.baseURI);
   if(url.origin===location.origin&&(/\.html$/.test(url.pathname)||url.pathname.endsWith('/'))){url.searchParams.set('lang',lang);a.href=url.href;}
  });
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
