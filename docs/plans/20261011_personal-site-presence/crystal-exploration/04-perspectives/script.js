const perspectives = {
  people: {label: 'The people perspective', title: 'A good solution starts\nwith a better conversation.', body: 'The person asking for a change and the person doing the daily work may see different problems. I start by listening to both: what they need, what gets in the way and what a workable change would mean for them.', question: 'Who is doing the work — and what do they wish someone understood?'},
  process: {label: 'The process perspective', title: 'The same task.\nAgain. And again.', body: 'When a manual workflow keeps repeating, the first question isn’t “what can we automate?” It’s “what is this work really trying to do?” I look at the handoffs, exceptions and decisions before choosing a tool.', question: 'Where does the work stop moving — and who has to pick it up?'},
  technology: {label: 'The technology perspective', title: 'The tool should fit\nthe work. Not the reverse.', body: 'Sometimes an existing tool needs a better fit. Sometimes a Dynamics 365 Finance & Operations process is stuck between a business requirement and its implementation. I connect the technical detail to the workflow it is meant to support.', question: 'Is the constraint in the tool, the setup or the way the work is organized?'}
};
const copy = document.querySelector('.perspective-copy');
document.querySelectorAll('[data-perspective]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-perspective]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const perspective = perspectives[button.dataset.perspective];
    document.querySelector('#perspective-label').textContent = perspective.label;
    const title = document.querySelector('#perspective-title');
    title.replaceChildren();
    perspective.title.split('\n').forEach((line, index) => {if(index) title.append(document.createElement('br')); title.append(document.createTextNode(line));});
    document.querySelector('#perspective-body').textContent = perspective.body;
    document.querySelector('#perspective-question').textContent = perspective.question;
    copy.classList.remove('changing');
    void copy.offsetWidth;
    copy.classList.add('changing');
  });
});
document.querySelector('#demo-contact').addEventListener('click', event => {
  const open = event.currentTarget.getAttribute('aria-expanded') !== 'true';
  event.currentTarget.setAttribute('aria-expanded', String(open));
  document.querySelector('#demo-response').hidden = !open;
});
