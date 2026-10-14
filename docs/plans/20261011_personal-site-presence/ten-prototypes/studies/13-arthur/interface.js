const motion = document.querySelector('#motion');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
window.thresholdPaused = reduced.matches;
function updateMotion(){const live=document.body.classList.contains('webgl')&&matchMedia('(min-width:1050px) and (min-height:500px)').matches;motion.disabled=!live||reduced.matches;motion.setAttribute('aria-pressed',String(window.thresholdPaused));motion.textContent=!live?'Static light':reduced.matches?'Motion reduced':window.thresholdPaused?'Resume light':'Pause light';}
new MutationObserver(updateMotion).observe(document.body,{attributes:true,attributeFilter:['class']});addEventListener('resize',updateMotion);
updateMotion();motion.addEventListener('click',()=>{window.thresholdPaused=!window.thresholdPaused;updateMotion();window.dispatchEvent(new Event('threshold-render'));});
reduced.addEventListener('change',()=>{window.thresholdPaused=reduced.matches;updateMotion();window.dispatchEvent(new Event('threshold-render'));});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const opened=document.querySelector('details[open]');if(opened){opened.open=false;opened.querySelector('summary').focus();}}});
document.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{detail.querySelector('summary').setAttribute('aria-expanded',String(detail.open));}));
