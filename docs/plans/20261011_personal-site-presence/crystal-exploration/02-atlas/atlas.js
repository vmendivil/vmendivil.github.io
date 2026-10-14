const pathways = {
  repeat: {location:'repetition', title:'Give the repetitive work a better route.', description:'When the same information is copied, checked and chased, the real work waits. I start by tracing what happens today—and where a small change could help.', step:'Walk through one repeated task: where it starts, who touches it and what “done” actually means.'},
  tools: {location:'tool mismatch', title:'Make the tools follow the work.', description:'A useful internal tool should fit the people using it. When spreadsheets, forms and systems leave gaps, I look at the workflow before deciding what to connect or build.', step:'Pick one place where information gets lost, entered twice or handed off outside the system. Describe what each person needs there.'},
  dynamics: {location:'Dynamics processes', title:'Look beyond the screen that’s stuck.', description:'A Dynamics 365 F&O issue can sit at the intersection of setup, process, integrations and expectations. My end-to-end ERP experience helps connect those different angles.', step:'Trace one transaction from its starting requirement to the point it gets stuck. Include the people, decisions and systems along the way.'}
};
function selectRoute(key) {
  const route = pathways[key];
  document.querySelectorAll('[data-route]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.route === key)));
  document.querySelectorAll('[data-line]').forEach(line => line.classList.toggle('active', line.dataset.line === key));
  document.querySelector('.route-location').textContent = `You are here: ${route.location}`;
  document.getElementById('route-title').textContent = route.title;
  document.getElementById('route-description').textContent = route.description;
  document.getElementById('route-step').textContent = route.step;
  document.getElementById('problem').value = key;
}
document.querySelectorAll('[data-route]').forEach(button => button.addEventListener('click', () => selectRoute(button.dataset.route)));
selectRoute('repeat');
document.getElementById('draft-form').addEventListener('submit', event => {
  event.preventDefault();
  const problem = document.getElementById('problem');
  const context = document.getElementById('context').value.trim();
  const message = document.getElementById('message');
  message.value = `Hi Victor,\n\nI’d like to talk about ${problem.options[problem.selectedIndex].text.toLowerCase()}.\n\n${context || 'Here’s what is happening today: [add a little context].'}\n\nCould we explore what a practical next step might look like?`;
  document.getElementById('draft-result').hidden = false;
  message.focus();
});
