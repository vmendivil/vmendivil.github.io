'use strict';
const chapterLinks = [...document.querySelectorAll('.chapters a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const active = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    chapterLinks.forEach(link => {
      if (link.hash === '#' + active.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-12% 0px -45% 0px',threshold:0});
  chapterLinks.forEach(link => observer.observe(document.querySelector(link.hash)));
}
const problem = document.getElementById('problem');
const change = document.getElementById('change');
const status = document.getElementById('draft-status');
document.getElementById('build-draft').addEventListener('click', () => {
  const first = problem.value.trim();
  const second = change.value.trim();
  problem.removeAttribute('aria-invalid');
  change.removeAttribute('aria-invalid');
  if (!first || !second) {
    status.textContent = 'Add the problem and the change you want, then prepare your draft.';
    const missing = !first ? problem : change;
    missing.setAttribute('aria-invalid','true');
    missing.focus();
    return;
  }
  document.getElementById('draft').value = `Hi Victor,\n\nI’d like to explore a contained piece of remote work.\n\nWhat’s happening: ${first}\n\nWhat I’d like to change: ${second}\n\nCould we clarify the scope and a useful first step?`;
  document.getElementById('draft-result').hidden = false;
  status.textContent = 'Draft prepared on this page only. Nothing has been sent or saved.';
});
document.getElementById('select-draft').addEventListener('click', () => {
  const draft = document.getElementById('draft');
  draft.focus();
  draft.select();
  status.textContent = 'Draft selected. Use your device’s copy command to keep it.';
});
