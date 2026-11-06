// Page: Cost estimates
V.costs=function(){const st=Object.keys(STATES);return `<div class="pg"><div class="wrap"><h1>Cost estimates</h1><p class="mut">Typical monthly costs for corpers. Rent comes from live listings.</p><div class="panel f"><label>State<select id="cs">${st.map(s=>`<option>${s}`).join('')}</select></label><div id="cr"></div></div></div></div>`};

bindings.push(p=>{
if(p==='costs'){const sel=$('#cs'),draw=()=>{const s=sel.value,L=all().filter(l=>l.state===s),avg=L.length?Math.round(L.reduce((a,l)=>a+l.price,0)/L.length):0,[t,f]=COST[s];$('#cr').innerHTML=`<table><tr><td>Average rent (${L.length} listing${L.length==1?'':'s'})</td><td>${avg?naira(avg)+' / year':'No listings yet'}</td></tr><tr><td>Rent per month</td><td>${avg?naira(Math.round(avg/12)):'–'}</td></tr><tr><td>Transport per month</td><td>${naira(t)}</td></tr><tr><td>Food per month</td><td>${naira(f)}</td></tr><tr><th>Estimated monthly total</th><th>${naira(Math.round(avg/12)+t+f)}</th></tr></table><p class="mut">Estimates only. Prices vary by area and season.</p>`};sel.onchange=draw;draw()}
});
