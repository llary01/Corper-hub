// Pages: Login, Signup, Lister signup, Forgot password
V.login=function(){return `<div class="acard"><h1>Welcome back</h1><p class="mut">Log in to find or manage homes.</p><form class="f" id="lf"><label>Email<input name="email" type="email" required placeholder="Email" autocomplete="email"></label><label><span style="display:flex;justify-content:space-between">Password <a href="#forgot">Forgot password?</a></span><input name="pw" type="password" required placeholder="Password" autocomplete="current-password"></label><div class="err" id="e"></div><button class="btn">Log in</button></form><div class="or">or</div><a class="btn o" style="display:block" href="#signup">Create a renter account</a><p class="mut" style="text-align:center">House owner or agent? <a href="#lister-signup">Create a lister account</a></p></div>`};
V.signup=function(){return signupForm('renter')};
V['lister-signup']=function(){return signupForm('lister')};
V.forgot=function(){return `<div class="acard"><h1>Reset password</h1><p class="mut">Enter your account email and choose a new password.</p><form class="f" id="ff"><label>Email<input name="email" type="email" required placeholder="Email"></label><label>New password<input name="pw" type="password" minlength="8" required placeholder="At least 8 characters"></label><div class="err" id="e"></div><button class="btn">Reset password</button></form><p style="text-align:center"><a href="#login">Back to log in</a></p></div>`};
function signupForm(role){const L=role==='lister';return `<div class="acard"><h1>${L?'Create your lister account':'Create your renter account'}</h1><p class="mut">${L?'Owners and agents upload ID to get a Verified badge.':'Free for renters. Takes about a minute.'}</p><form class="f" id="sg" data-role="${role}"><label>Full name<input name="name" required placeholder="Full name" autocomplete="name"></label><label>Email<input name="email" type="email" required placeholder="Email" autocomplete="email"></label><label>Phone number<input name="phone" type="tel" required placeholder="Phone number" autocomplete="tel"></label>${L?'<label>ID document (NIN slip, driver’s licence or passport)<input name="id" type="file" accept="image/*,.pdf" required></label>':''}<label>Password<input name="pw" type="password" required minlength="8" placeholder="Password" autocomplete="new-password"></label><label class="chk"><input type="checkbox" name="t"> I agree to the terms and privacy policy</label><div class="err" id="e"></div><button class="btn">Create account</button></form><p class="mut" style="text-align:center">Already have an account? <a href="#login">Log in</a></p>${L?'':'<p class="mut" style="text-align:center">House owner or agent? <a href="#lister-signup">Create a lister account</a></p>'}</div>`}

bindings.push(p=>{
const set=(id,m,ok)=>{const e=$('#e');if(e){e.textContent=m;e.className=ok?'ok':'err'}};
const lf=$('#lf');if(lf)lf.onsubmit=async e=>{e.preventDefault();const d=new FormData(lf),em=d.get('email').trim().toLowerCase(),u=users().find(x=>x.email===em);
if(!u||u.h!==await hash(d.get('pw')))return set(0,'Email or password is wrong. Check both and try again.');sv('sess',em);toast('Welcome back, '+u.name.split(' ')[0]);location.hash=u.role==='lister'?'listers':'home'};
const sg=$('#sg');if(sg)sg.onsubmit=async e=>{e.preventDefault();const d=new FormData(sg),em=d.get('email').trim().toLowerCase(),role=sg.dataset.role;
if(d.get('name').trim().length<2)return set(0,'Enter your full name.');
if(!/^\S+@\S+\.\S+$/.test(em))return set(0,'Enter a valid email address.');
if(d.get('phone').replace(/\D/g,'').length<10)return set(0,'Enter a phone number with at least 10 digits.');
if(d.get('pw').length<8)return set(0,'Password must be at least 8 characters.');
if(users().some(x=>x.email===em))return set(0,'That email already has an account. Log in instead.');
if(!d.get('t'))return set(0,'Tick the box to agree to the terms and privacy policy.');
const u={name:d.get('name').trim(),email:em,phone:d.get('phone').trim(),role,h:await hash(d.get('pw')),verified:role==='lister'?1:0,idFile:role==='lister'?d.get('id').name:''};
sv('users',[...users(),u]);sv('sess',em);toast('Account created');location.hash=role==='lister'?'listers':'home'};
const ff=$('#ff');if(ff)ff.onsubmit=async e=>{e.preventDefault();const d=new FormData(ff),em=d.get('email').trim().toLowerCase(),L=users(),u=L.find(x=>x.email===em);
if(!u)return set(0,'No account uses that email.');if(d.get('pw').length<8)return set(0,'Password must be at least 8 characters.');
u.h=await hash(d.get('pw'));sv('users',L);set(0,'Password updated. Taking you to log in…',1);setTimeout(()=>location.hash='login',1200)};
});
