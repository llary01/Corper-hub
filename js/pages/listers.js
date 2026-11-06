// Page: For listers (post / manage homes)
V.listers=function(){const u=me();let b;
if(!u)b=`<div class="panel"><h2>List your rooms on CorperHub</h2><p>Create a lister account, upload your ID and get a Verified badge on every listing.</p><a class="btn" href="#lister-signup">Create a lister account</a> <a class="btn o" href="#login">Log in</a></div>`;
else if(u.role!=='lister')b=`<div class="empty">You’re logged in as a renter. Lister tools need a lister account.<br><br><a class="btn" href="#lister-signup">Create a lister account</a></div>`;
else{const mine=ld('mine',[]).filter(l=>l.uid===u.email);b=`<div class="panel"><h2>Post a home</h2><form class="f" id="pf"><div class="r"><label>Room type<select name="type">${TYPES.map(t=>`<option>${t}`).join('')}</select></label><label>Price per year (₦)<input name="price" type="number" min="10000" required></label></div><div class="r"><label>State<select name="state">${Object.keys(STATES).map(s=>`<option>${s}`).join('')}</select></label><label>Area<input name="area" required></label></div><label>Description<textarea name="d" rows="3" required></textarea></label><div class="err" id="e"></div><button class="btn">Post home</button></form></div><h2>Your listings</h2>${mine.length?`<div class="grid" style="margin-top:16px">${mine.map((l,i)=>card(l,i)+'').join('')}</div><p><button class="btn d sm" id="delall">Delete all my listings</button></p>`:'<div class="empty">No listings yet.</div>'}`}
return `<div class="pg"><div class="wrap"><h1>For listers</h1><p class="mut">${u&&u.role==='lister'?(u.verified?'Your account is Verified.':''):''}</p>${b}</div></div>`};

bindings.push(p=>{
const pf=$('#pf');if(pf)pf.onsubmit=e=>{e.preventDefault();const d=new FormData(pf),u=me();
sv('mine',[{id:'u'+Date.now(),uid:u.email,type:d.get('type'),price:+d.get('price'),area:d.get('area').trim(),state:d.get('state'),r:0,n:0,v:u.verified,f:0,owner:u.name,phone:u.phone,d:d.get('d').trim()},...ld('mine',[])]);toast('Home posted');route()};
const da=$('#delall');if(da)da.onclick=()=>{if(confirm('Delete all your listings?')){sv('mine',ld('mine',[]).filter(l=>l.uid!==me().email));route()}};
});
