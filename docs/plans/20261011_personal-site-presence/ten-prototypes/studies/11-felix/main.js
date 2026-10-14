'use strict';
const channels = {
  about: {
    label: 'About', title: 'A seat by the window.',
    summary: 'I’m Victor, a software developer and problem solver. This is a quiet place to get to know the work—and the curiosity behind it.',
    segments: [
      ['The person behind the work', 'I’m Victor Mendivil. I like the point where a complicated request becomes something a person can actually use. Software is the medium; understanding the problem is where the work starts. My professional grounding is in Dynamics 365 Finance & Operations and ERP, where technical choices have to make sense alongside everyday business needs.'],
      ['More than the code', 'My work reaches across requirements, technical design, implementation, testing, deployment and support. It also includes coordination across teams. I’m interested in how those pieces fit together—not just whether a feature runs, but whether the request was understood, the change is clear and the next person can keep working with it.'],
      ['A little room for curiosity', 'Away from the immediate request, I’m drawn to Raspberry Pi homelabs, small servers and AI-assisted work. I like having room to ask what a tool is useful for, where it gets in the way and what still needs a person’s judgement. The Curiosity channel is about those interests, not a catalogue of claimed project results.'],
      ['What this place is', 'The lounge is an original illustration: a way to make a personal site feel a little more personal. It isn’t a photograph of my home, a working operating system or a live broadcast. Choose a channel to change the television illustration, then read the full text here. You don’t need to learn commands or finish a game to reach me.']
    ], end: 'If something here connects with your work, I’m reachable on LinkedIn.'
  },
  practice: {
    label: 'Practice', title: 'From a request to working software.',
    summary: 'Dynamics 365 F&O, ERP and the work around the code: understanding the request, making the change, and staying with it through delivery and support.',
    segments: [
      ['Start with the real request', 'Requirements are not just a list of screens or fields. I work to understand the problem behind a request, the people who will use the change and the business process around it. In ERP work, that context matters: a technically possible solution still has to fit the way a team operates.'],
      ['Give the change a shape', 'Technical design connects the request to implementation. I consider what needs to change, how it belongs in the wider system and what will need to be checked. Clear decisions and communication are part of that work, especially when several people or teams depend on the same change.'],
      ['Build, check, deliver', 'Implementation is one part of the journey. Testing and deployment are also in my scope, with attention to whether the result matches the request and can be introduced sensibly. I prefer to treat those responsibilities as connected rather than calling the job finished when the code is written.'],
      ['Stay with the work', 'Support and cross-team coordination keep the conversation going after delivery. Questions, unexpected behaviour and follow-up changes are part of software work. I’m interested in making those handoffs workable, with enough shared understanding that people can move forward without having to rediscover every decision.']
    ], end: 'This describes my practice and responsibilities, not a list of invented clients or outcomes.'
  },
  curiosity: {
    label: 'Curiosity', title: 'Small machines. Open questions.',
    summary: 'Raspberry Pi, homelabs and AI-assisted work. Interests I keep exploring, without pretending that every experiment is a finished product.',
    segments: [
      ['A server small enough to hold', 'Raspberry Pi and homelab servers interest me because they put software close to the machine it depends on. There is room to think about setup, services and the practical details behind an app. Here they are a personal interest, not evidence of a commercial infrastructure project or a claim about a particular home installation.'],
      ['AI in the work, not over it', 'I’m interested in AI-assisted processes: where assistance can reduce friction, help explore a question or make a routine step easier. I also want to understand where it needs checking. The useful question is not simply whether a tool can produce an answer, but whether that answer is appropriate for the work.'],
      ['Web apps as a place to try', 'AI-assisted web apps are another area I’m curious about. They bring ideas into a form someone can actually interact with, which makes the gaps easier to see. These are interests and exploratory directions; this page does not claim completed apps, user numbers or outcomes that have not been supplied.'],
      ['Keep the question open', 'Curiosity and professional responsibility belong together. A new tool can be exciting without becoming the answer to every request. I like learning how things fit, what the trade-offs are and when a simpler approach is enough. The lounge’s little circuit-board and orbit drawing are original illustrations of that spirit, not diagrams of a running system.']
    ], end: 'Have a thoughtful question about software, small servers or AI-assisted work? We can start a conversation.'
  },
  contact: {
    label: 'Contact', title: 'A small, clear next step.',
    summary: 'Tell me what you’re trying to make workable. LinkedIn is the real route for starting a conversation.',
    segments: [
      ['A project conversation', 'I’m full-time employed, so freelance work needs a contained scope and a realistic rhythm. Remote, evening or asynchronous work is the fit I can consider for individuals and small businesses. A useful first message says what is getting in the way, what help you need and any constraints that matter.'],
      ['A career conversation', 'I’m also interested in senior and technical-lead opportunities. If you’re reaching out about a role, the technical context, responsibilities and expectations are useful starting points. I can then understand whether there is a sensible fit rather than guessing from a title alone.'],
      ['An honest route', 'There is no message form hidden in this room. This local prototype does not send, store or deliver correspondence. The link below opens my supplied LinkedIn profile, where you can choose how to get in touch. No email address or additional contact destination has been invented.']
    ], end: 'Thanks for stopping by. The next conversation can start outside the lounge.'
  }
};
const order = Object.keys(channels);
let selected = 'about';
let reading = false;
const program = document.getElementById('program');
const masthead = document.querySelector('.masthead');
new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', `${masthead.getBoundingClientRect().height}px`)).observe(masthead);
const transcript = document.getElementById('transcript');
const title = document.getElementById('program-title');
const read = document.getElementById('read');
const end = document.querySelector('.program-end');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const contactURL = 'https://www.linkedin.com/in/vmendivilaxdeveloper';
function screen() {
  document.querySelectorAll('[data-broadcast]').forEach(group => {
    group.style.display = group.dataset.broadcast === selected ? '' : 'none';
  });
}
function draw() {
  const data = channels[selected];
  document.querySelectorAll('[data-channel]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.channel === selected)));
  document.getElementById('station').textContent = `${data.label} · personal broadcast`;
  document.getElementById('status').textContent = `${data.label} selected`;
  title.textContent = data.title;
  document.getElementById('summary').textContent = data.summary;
  transcript.innerHTML = data.segments.map(([heading, paragraph]) => `<section class="segment"><h3>${heading}</h3><div><p>${paragraph}</p></div></section>`).join('') + `<div class="signoff"><span>End of this channel</span><div><p>${data.end}</p><a href="${contactURL}" target="_blank" rel="noopener noreferrer">${selected === 'contact' ? 'Start on LinkedIn' : 'Find me on LinkedIn'} <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 18L18 6M7 6h11v11" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></a><p>${selected === 'contact' ? 'Opens an external profile. Nothing is sent from this prototype.' : 'Or tune another channel to keep reading.'}</p></div></div>`;
  program.classList.toggle('reading', reading);
  transcript.hidden = !reading;
  end.hidden = !reading;
  read.hidden = reading;
  read.setAttribute('aria-expanded', String(reading));
  document.getElementById('next').textContent = `Next: ${channels[order[(order.indexOf(selected) + 1) % order.length]].label}`;
  screen();
  opticalState();
}
function reveal() {
  reading = true;
  draw();
  title.focus({preventScroll: true});
  program.scrollIntoView({behavior: 'auto', block: 'start'});
}
function tune(key) {
  if (!channels[key]) return;
  selected = key;
  signal();
  if (key === 'contact') reading = true;
  draw();
  if (reading) {
    title.focus({preventScroll: true});
    program.scrollIntoView({behavior: 'auto', block: 'start'});
  }
}
function close() {
  reading = false;
  draw();
  window.scrollTo({top: 0, behavior: 'auto'});
  document.querySelector(`[data-channel="${selected}"]`).focus({preventScroll: true});
}
document.querySelectorAll('[data-channel]').forEach(button => button.addEventListener('click', () => tune(button.dataset.channel)));
read.addEventListener('click', reveal);
document.getElementById('close').addEventListener('click', close);
document.getElementById('next').addEventListener('click', () => tune(order[(order.indexOf(selected) + 1) % order.length]));
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  if (event.key === 'Escape' && reading) {event.preventDefault(); close();}
  if (['1','2','3','4'].includes(event.key)) {event.preventDefault(); tune(order[Number(event.key) - 1]);}
});
const ambience = document.getElementById('ambience');
let paused = false, sceneAvailable = false;
function motion() {
  const still = reduced.matches || paused || document.hidden || !roomVisible;
  if (still || !sceneAvailable) {
    signalAnimations.forEach(animation => animation.cancel());
    signalAnimations = [];
  }
  document.body.classList.toggle('paused', still);
  document.querySelectorAll('#receiver,#listen-light').forEach(button => {button.disabled = !sceneAvailable;});
  ambience.disabled = reduced.matches || !sceneAvailable;
  ambience.setAttribute('aria-pressed', String(still));
  ambience.textContent = !sceneAvailable ? 'Still illustration' : reduced.matches ? 'Rain still · reduced motion' : paused ? 'Resume rain' : 'Pause rain';
}
ambience.addEventListener('click', () => {paused = !paused; motion();});
reduced.addEventListener('change', motion);
let roomVisible=true,signalCount=0,signalAnimations=[];
function opticalState(){const svg=document.querySelector('.scene svg');if(!svg)return;svg.dataset.channel=selected;const dial=svg.querySelector('#station-dial');if(dial)dial.setAttribute('transform',`rotate(${order.indexOf(selected)*65} 955 323)`);document.body.dataset.channel=selected;}
function signal(){signalCount++;signalAnimations.forEach(a=>a.cancel());signalAnimations=[];const tube=document.querySelector('.scene svg [clip-path="url(#tube)"]');if(!tube||reduced.matches||paused||document.hidden||!roomVisible)return;signalAnimations.push(tube.animate([{opacity:.15,filter:'brightness(1.6)'},{opacity:.95,filter:'brightness(.8)',offset:.35},{opacity:1,filter:'brightness(1)'}],{duration:480,easing:'cubic-bezier(.16,1,.3,1)'}));}
window.fidelityState=()=>({selected,reading,signalCount,paused,roomVisible,sceneAvailable,hidden:document.hidden,animations:document.getAnimations().map(a=>({state:a.playState,time:a.currentTime}))});
document.querySelector('#screen-action').onclick=reveal;
document.querySelector('#receiver').onclick=e=>{const on=document.body.classList.toggle('receiver-view');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'Whole room':'Receiver';};
document.querySelector('#listen-light').onclick=e=>{const on=document.body.classList.toggle('late-light');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'Warm lamp':'Dim the lamp';};
new IntersectionObserver(entries=>{roomVisible=entries[0].isIntersecting;motion();}).observe(document.querySelector('.room'));
document.addEventListener('visibilitychange',()=>{if(document.hidden)signalAnimations.forEach(a=>a.cancel());motion();});
motion();
draw();
fetch('assets/lounge.svg').then(response => {if (!response.ok) throw new Error('Scene unavailable'); return response.text();}).then(svgText => {
  document.querySelector('.scene').innerHTML = svgText;
  sceneAvailable = true;
  screen(); motion();opticalState();
  const svg=document.querySelector('.scene svg');
  const area=document.createElementNS('http://www.w3.org/2000/svg','rect');area.setAttribute('x','617');area.setAttribute('y','274');area.setAttribute('width','359');area.setAttribute('height','235');area.setAttribute('fill','transparent');area.setAttribute('class','screen-hit');area.setAttribute('role','button');area.setAttribute('aria-label','Read selected broadcast');area.setAttribute('tabindex','0');area.addEventListener('click',reveal);area.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reveal();}});svg.append(area);
}).catch(() => {
  sceneAvailable = false;
  motion();
  ambience.textContent = 'Still illustration';
  document.getElementById('status').textContent = `${channels[selected].label} · text available`;
});
