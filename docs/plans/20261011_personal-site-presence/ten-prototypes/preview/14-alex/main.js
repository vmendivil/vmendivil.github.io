const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')].filter(s=>s.id!=='top');
let scheduled=false;
function setCurrent(){scheduled=false;const limit=Math.max(document.querySelector('header').offsetHeight+15,innerHeight*.35);let active=null;for(const section of sections){if(section.getBoundingClientRect().top<=limit)active=section.id;}links.forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(setCurrent);}},{passive:true});window.addEventListener('resize',setCurrent);setCurrent();
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const d=document.activeElement.closest('details[open]');if(d){d.open=false;d.querySelector('summary').focus();}}});
