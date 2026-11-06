// App state and data access
let S={q:'',bud:'',type:'',view:'all'};
const users=()=>ld('users',[]),me=()=>users().find(u=>u.email===ld('sess',null));
const all=()=>[...SEED,...ld('mine',[])];
const revs=id=>ld('revs',{})[id]||[];
const rate=l=>{const rv=revs(l.id),n=(l.n||0)+rv.length;const s=(l.r||0)*(l.n||0)+rv.reduce((a,b)=>a+b.stars,0);return{r:n?(s/n).toFixed(1):'–',n}};
const saved=()=>ld('saved',{})[ld('sess',null)]||[];
