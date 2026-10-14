const range = document.querySelector('#alignment');
const state = document.querySelector('#state');
const button = document.querySelector('#align');
const poster = document.querySelector('.poster');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const label = document.querySelector('label[for="alignment"]');
const help = document.querySelector('#scrub-help');
function render() {
  range.disabled = button.disabled = motion.matches;
  label.textContent = motion.matches ? 'Still composition' : 'Bring it into sync';
  help.textContent = motion.matches
    ? 'Reduced motion is on. Word movement controls are disabled.'
    : 'Drag to play. Arrow keys work, too.';
  if (motion.matches) {
    poster.style.setProperty('--shift', 0);
    state.textContent = 'Movement off';
    range.setAttribute('aria-valuetext', 'Movement off — still composition');
    button.firstChild.textContent = 'Movement disabled ';
    return;
  }
  const value = Number(range.value);
  poster.style.setProperty('--shift', (100 - value) / 100);
  state.textContent = value === 100 ? 'In sync' : value < 35 ? 'A little scattered' : 'Finding the rhythm';
  range.setAttribute('aria-valuetext', `${value}% aligned — ${state.textContent}`);
  button.firstChild.textContent = value === 100 ? 'Scatter the words ' : 'Align the words ';
}
motion.addEventListener('change', render);
range.addEventListener('input', render);
button.addEventListener('click', () => { range.value = Number(range.value) === 100 ? '15' : '100'; render(); });
render();
