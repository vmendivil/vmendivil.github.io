// Original optical-depth interaction: geometry on desktop, composed plates on lite.
const optical=document.createElement('div');optical.className='optical-control';
optical.innerHTML='<label for="optical-depth">Reveal the layers</label><input id="optical-depth" type="range" min="0" max="100" value="35" step="5"><output for="optical-depth">Light between the folds</output>';
document.querySelector('.opening .words').append(optical);
const depth=optical.querySelector('input'),readout=optical.querySelector('output');
document.querySelector('.opening .portrait-art').insertAdjacentHTML('beforeend','<img class="optical-alternate" src="assets/curiosity-portrait.jpg" alt="">');
const still=document.querySelector('#world-still');still.insertAdjacentHTML('afterend','<img class="wide-alternate" src="assets/curiosity-wide.jpg" alt="">');
function revealLayers(){const value=Number(depth.value)/100;document.documentElement.style.setProperty('--optical',value);readout.textContent=value<.3?'Layers held close':value>.7?'Light through the open layers':'Light between the folds';depth.setAttribute('aria-valuetext',Math.round(value*100)+' percent open — '+readout.textContent);window.dispatchEvent(new CustomEvent('threshold-reveal',{detail:value}));}
depth.addEventListener('input',revealLayers);revealLayers();
const chapterLinks=[...document.querySelectorAll('nav a')];
const chapterObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)chapterLinks.forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('.chapter').forEach(chapter=>chapterObserver.observe(chapter));
// Each native reading continuation keeps its own open state and Escape path.
