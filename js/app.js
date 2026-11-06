// Router and startup
const AUTH=['login','signup','lister-signup','forgot'];
function route(){let p=location.hash.slice(1)||'home';if(!V[p])p='home';const au=AUTH.includes(p);
document.body.className=au?'auth':'';
$('#root').innerHTML=au?`<a class="logo" style="font-size:34px" href="#home">Corper<b>Hub</b></a>${V[p]()}<a class="back" href="#home">← Back to home</a>`:header(p)+V[p]()+foot;
scrollTo(0,0);bind(p)}

function bind(p){bindings.forEach(fn=>fn(p))}

// Generic bindings (menu, logout, search form, "see all")
bindings.push(p=>{
const m=$('#menu');if(m)m.onclick=()=>$('#nav').classList.toggle('open');
const o=$('#out');if(o)o.onclick=()=>{sv('sess',null);toast('Logged out');setTimeout(route,0)};
const sf=$('#sf');if(sf)sf.onsubmit=e=>{e.preventDefault();const d=new FormData(sf);S={q:d.get('q'),bud:d.get('bud'),type:d.get('type')};if(location.hash==='#search')route();else location.hash='search'};
const al=document.querySelector('[data-all]');if(al)al.onclick=()=>{S={q:'',bud:'',type:''}};
});

addEventListener('hashchange',()=>{$('#dlg').open&&$('#dlg').close();route()});
route();
