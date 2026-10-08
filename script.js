const $=(s,r=document)=>[...r.querySelectorAll(s)],hd=document.getElementById('hd');
addEventListener('scroll',()=>{hd.classList.toggle('s',scrollY>40);$('[data-p]').forEach(e=>{const r=e.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)e.style.translate='0 '+((r.top-innerHeight/2)*e.dataset.p).toFixed(1)+'px'})},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');$('[data-n]',e.target).forEach(c=>{const n=+c.dataset.n,p=c.dataset.pre||'',s=c.dataset.suf||'',t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1400);c.textContent=p+Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)});io.unobserve(e.target)}),{threshold:.2});
$('.rv').forEach(e=>io.observe(e));
// método
$('.st').forEach(s=>s.addEventListener('click',()=>{$('.st').forEach(x=>x!==s&&x.classList.remove('on'));s.classList.toggle('on')}));
// vídeo
const v=document.getElementById('v'),box=document.getElementById('vid');
box.querySelector('.pl').addEventListener('click',()=>{box.classList.add('go');v.controls=true;v.play()});