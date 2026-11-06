// Global click handling: save, show contact, open listing
document.addEventListener('click',e=>{
const s=e.target.closest('[data-save]');if(s){e.stopPropagation();const u=me();if(!u){toast('Log in to save homes');location.hash='login';return}
const m=ld('saved',{}),a=m[u.email]||[],id=s.dataset.save;m[u.email]=a.includes(id)?a.filter(x=>x!==id):[...a,id];sv('saved',m);toast(a.includes(id)?'Removed from saved homes':'Saved');route();return}
const c=e.target.closest('[data-contact]');if(c){if(!me()){toast('Log in to see contact details');location.hash='login';return}c.outerHTML=`<a class="btn sm" href="tel:${esc(c.dataset.contact)}">${esc(c.dataset.contact)}</a>`;return}
const o=e.target.closest('[data-open]');if(o)openL(o.dataset.open)});
