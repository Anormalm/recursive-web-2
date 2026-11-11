/* ZEPHYR · station chrome. Saves, originals and validation belong to engine.js. */
(() => {
 'use strict';
 const api=window.ZephyrUI;if(!api)return;
 const identity=document.getElementById('station-identity');
 const labels={zh:{filed:'已归档',available:'可调查',locked:'未开放',scheduled:'待解封'},en:{filed:'Filed',available:'Available',locked:'Locked',scheduled:'Scheduled'}};
 function update(model){
  const t=labels[model.locale],file=model.files.find(f=>f.active),chapter=model.chapters.find(c=>c.day===file?.day);
  if(identity){
   identity.hidden=!model.arrived;
   if(!identity.querySelector('h1'))identity.innerHTML='<small></small><h1></h1>';
   identity.querySelector('small').textContent=model.arrived?`${file?.number||''} / ${chapter?.title||''}`:model.locale==='en'?'Nanyu Municipal Archives':'南屿市档案馆';
   identity.querySelector('h1').textContent=model.arrived?(model.mode==='story'?model.storyTitle:file?.title)||'':model.locale==='en'?'Witness Zero':'第零号证人';
   document.body.dataset.era=file?.day===1?'1946':file?.day<5?'1986':'2026';
  }
  document.querySelectorAll('.cat-row[data-step]').forEach(row=>{
   const f=model.files.find(f=>f.id===row.dataset.step);if(!f)return;
   row.dataset.status=f.status;row.classList.toggle('done',f.status==='completed');
   const status=t[f.status==='completed'?'filed':f.status];row.querySelector('.cat-status').textContent=status;
   row.querySelector('a').setAttribute('aria-label',`${f.number} ${f.title} — ${status}`);
  });
 }
 const unsubscribe=api.subscribe(update);update(api.getModel());
 window.addEventListener('pagehide',e=>{if(!e.persisted)unsubscribe();},{once:true});
})();
