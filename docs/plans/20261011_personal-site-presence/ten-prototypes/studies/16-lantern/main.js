document.body.classList.add('js');
const rooms=['about','practice','curiosity','contact'];
const places={about:'The study',practice:'The drafting bay',curiosity:'The roof atelier',contact:'The threshold'};
let origin=null;
const allLinks=[...document.querySelectorAll('a[href^="#"]')];
function show(id,focus=true){
 const active=rooms.includes(id);
 document.body.classList.toggle('is-reading',active);
 document.body.dataset.room=active?id:'';
 document.querySelectorAll('article').forEach(a=>a.hidden=active?a.id!==id:true);
 document.querySelectorAll('#room-index a').forEach(a=>{a.removeAttribute('aria-current');if(a.hash==='#'+id)a.setAttribute('aria-current','page')});
 document.querySelectorAll('.bay').forEach(a=>a.classList.toggle('selected',a.hash==='#'+id));
 document.querySelectorAll('.scene svg [id^="bay-"]').forEach(g=>g.style.filter=g.id==='bay-'+id?'brightness(1.5)':'');
 if(window.pavilionCamera)window.pavilionCamera.select(active?id:null);
 if(active){document.querySelector('#room-location').textContent=places[id];if(focus){window.scrollTo(0,document.querySelector('#reading').offsetTop-300);document.getElementById(id).focus({preventScroll:true})}}
 else if(id!=='room-index'&&focus){window.scrollTo(0,0);(origin||document.querySelector('.index-link')).focus({preventScroll:true})}
}
allLinks.forEach(a=>a.addEventListener('click',()=>{if(rooms.includes(a.hash.slice(1)))origin=a}));
window.addEventListener('hashchange',()=>show(location.hash.slice(1)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('is-reading')){e.preventDefault();location.hash='pavilion'}});
document.querySelector('#lighting').addEventListener('click',e=>{const on=document.body.classList.toggle('evening');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'Night light':'Evening light'});
show(location.hash.slice(1),false);
fetch('assets/pavilion.svg').then(r=>{if(!r.ok)throw Error('scene');return r.text()}).then(text=>{const svg=new DOMParser().parseFromString(text,'image/svg+xml').documentElement;if(svg.nodeName!=='svg')return;svg.setAttribute('role','img');svg.setAttribute('aria-label','Original warm timber pavilion with lit rooms, plum trees and reflecting pool');document.querySelector('.scene img').replaceWith(document.importNode(svg,true));installRoomCamera();show(location.hash.slice(1),false)}).catch(()=>{/* Static authored image and all room links remain usable. */});
