/* 泽风计划 · 语言切换（无第三方依赖）。
   系统界面双语；原件不随系统翻译。 */
(() => {
 'use strict';
 const KEY = 'zephyr-lang';
 const isEn = () => document.documentElement.dataset.lang === 'en';
 function init(){
  if(isEn()){
   document.documentElement.lang = 'en';
   const de = document.querySelector('meta[name="description"]');
   if(de && de.dataset.en) de.setAttribute('content', de.dataset.en);
   const t = document.head.querySelector('title');
   if(t && t.dataset.en) document.title = t.dataset.en;
  }
  document.querySelectorAll('[data-lang-toggle]').forEach(b => {
   b.textContent = isEn() ? '中文' : 'EN';
   b.setAttribute('aria-label', isEn() ? '切换到中文 / Switch to Chinese' : 'Switch to English / 切换到英文');
   b.addEventListener('click', () => {
    try { localStorage.setItem(KEY, isEn() ? 'zh' : 'en'); } catch(e) {}
    location.reload();
   });
  });
 }
 if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
 else init();
})();
