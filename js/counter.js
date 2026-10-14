/* 简易访问计数（仅本地）。 */
(() => { try {
  const k='zephyr-hits';
  let n=parseInt(localStorage.getItem(k)||'34127',10);
  if(!Number.isFinite(n)) n=34127;
  n=n+1;
  localStorage.setItem(k,String(n));
  const el=document.getElementById('hitcount');
  if(el) el.textContent='您是第 '+String(n).padStart(6,'0')+' 位访问者';
} catch(e){} })();
