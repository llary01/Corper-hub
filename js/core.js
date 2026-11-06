// Core helpers: DOM, storage, escaping, formatting, toast
const $=s=>document.querySelector(s),mem={};
const ld=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?(mem[k]??d):JSON.parse(v)}catch(e){return mem[k]??d}};
const sv=(k,v)=>{mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const naira=n=>'₦'+Number(n).toLocaleString('en-NG');
const hash=async p=>{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('ch:'+p));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')};
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2400)}

// Shared registries (filled by the page files)
const V={};          // page views
const bindings=[];   // per-page event binders
