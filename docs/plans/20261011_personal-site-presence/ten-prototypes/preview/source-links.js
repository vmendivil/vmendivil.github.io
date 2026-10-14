'use strict';
// Keep the local comparison link away from existing controls and visible writing.
(() => {
  const link = document.getElementById('prototype-source-link');
  if (!link) return;
  // Native link activation must not trigger scene or document shortcuts behind it.
  for (const type of ['click','pointerdown','pointerup','keydown','keyup']) {
    link.addEventListener(type, event => {
      if ((type === 'keydown' || type === 'keyup') && event.key === 'Tab') return;
      event.stopPropagation();
    });
  }
  const visible = r => r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  function place() {
    const current = link.getBoundingClientRect();
    const inBounds = current.left >= 0 && current.top >= 0 && current.right <= innerWidth && current.bottom <= innerHeight;
    if (inBounds && (link.matches(':hover') || document.activeElement === link)) return;
    const w = link.offsetWidth, h = link.offsetHeight, margin = 12;
    if (!w || !h) return;
    const controls = [...document.querySelectorAll('a,button,input,select,textarea,summary,[role="button"]')]
      .filter(el => el !== link && !el.closest('[hidden],[inert]'))
      .filter(el => { const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) !== 0; })
      .map(el => el.getBoundingClientRect()).filter(visible);
    const text = [], walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!node.textContent.trim() || !parent || parent.closest('#prototype-source-link,script,style,svg,[hidden],[inert]')) continue;
      const style = getComputedStyle(parent);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
      const range = document.createRange(); range.selectNodeContents(node);
      text.push(...[...range.getClientRects()].filter(visible));
    }
    const right = innerWidth - w - margin, bottom = innerHeight - h - margin, center = (innerWidth - w) / 2;
    const candidates = [[right,bottom],[margin,bottom],[center,bottom],[center,margin],[right,margin],[margin,margin]];
    for (let y = bottom - h - margin; y >= margin; y -= h + margin) candidates.push([right,y],[margin,y],[center,y]);
    const scored = candidates.map(([x,y], order) => {
      const box = {left:x-3,right:x+w+3,top:y-3,bottom:y+h+3};
      const controlArea = controls.reduce((sum,r) => sum + overlap(box,r),0);
      const textArea = text.reduce((sum,r) => sum + overlap(box,r),0);
      return {x,y,order,controlArea,textArea,score:controlArea*1000+textArea};
    }).sort((a,b) => a.score-b.score || a.order-b.order);
    const best = scored[0];
    link.style.setProperty('--source-left', best.x+'px');
    link.style.setProperty('--source-top', best.y+'px');
    link.dataset.placed = 'true';
    link.dataset.controlOverlap = String(best.controlArea);
    link.dataset.textOverlap = String(best.textArea);
  }
  let timer;
  const queue = () => { clearTimeout(timer); timer = setTimeout(place,120); };
  addEventListener('resize',queue);
  addEventListener('scroll',queue,true);
  addEventListener('load',queue);
  document.addEventListener('click',queue,true);
  document.addEventListener('keyup',queue,true);
  requestAnimationFrame(place);
  setTimeout(place,800);
})();
