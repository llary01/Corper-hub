// Page: Saved homes
V.saved=function(){const u=me();if(!u)return `<div class="pg"><div class="wrap"><h1>Saved homes</h1><div class="empty">Log in to see homes you saved. <br><br><a class="btn" href="#login">Log in</a></div></div></div>`;
const L=all().filter(l=>saved().includes(l.id));return `<div class="pg"><div class="wrap"><h1>Saved homes</h1>${L.length?`<div class="grid" style="margin-top:20px">${L.map(card).join('')}</div>`:'<div class="empty">Nothing saved yet. Tap the heart on any home to keep it here.</div>'}</div></div>`};
