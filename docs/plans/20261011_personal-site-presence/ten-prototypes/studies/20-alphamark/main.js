const menu = document.querySelector('#menu');
const toggle = document.querySelector('.menu-toggle');
const close = document.querySelector('.menu-close');
function openMenu(){menu.showModal(); document.body.classList.add('menu-open'); toggle.setAttribute('aria-expanded','true'); close.focus();}
function closeMenu(){menu.close();}
toggle.addEventListener('click',openMenu);
close.addEventListener('click',closeMenu);
menu.addEventListener('close',()=>{document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.focus();});
menu.addEventListener('keydown',event=>{
  if(event.key!=='Tab') return;
  const items=[...menu.querySelectorAll('a,button')];
  const first=items[0],last=items[items.length-1];
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{closeMenu();}));
// Native routes plus shared editorial plate continuity; no fetch-based pseudo navigation.
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const collection=document.querySelector('#editions');
const routePlate=document.querySelector('.wide-plate img,.ai-spread img');
const editionLinks=[...document.querySelectorAll('.lead-edition,.edition')];
function namePlate(image){document.querySelectorAll('[style*="view-transition-name"]').forEach(e=>e.style.viewTransitionName='none');if(image&&!reduced.matches)image.style.viewTransitionName='edition-plate';}
if(routePlate)namePlate(routePlate);
editionLinks.forEach(link=>link.addEventListener('click',()=>{namePlate(link.querySelector('img'));try{sessionStorage.setItem('field-origin',JSON.stringify({href:link.getAttribute('href'),scroll:scrollY}));}catch{}}));
function restoreEdition(){if(!collection||location.hash!=='#editions')return;let origin;try{origin=JSON.parse(sessionStorage.getItem('field-origin'));}catch{}if(origin){const link=editionLinks.find(a=>a.getAttribute('href')===origin.href);if(link){namePlate(link.querySelector('img'));scrollTo({top:origin.scroll,behavior:'instant'});link.focus({preventScroll:true});}}}
window.addEventListener('pageswap',event=>{if(!event.viewTransition||reduced.matches)return;const href=new URL(event.activation.entry.url).pathname.split('/').pop();const link=editionLinks.find(a=>a.getAttribute('href')===href);if(link)namePlate(link.querySelector('img'));else if(routePlate)namePlate(routePlate);});
window.addEventListener('pagereveal',restoreEdition);window.addEventListener('pageshow',restoreEdition);if(collection)requestAnimationFrame(restoreEdition);
reduced.addEventListener('change',()=>{if(reduced.matches)namePlate(null);});
// No-script navigation remains available on narrow screens.
