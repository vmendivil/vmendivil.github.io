'use strict';
const approaches = {
 manual: {title:'Find the repeat.\nRemove the friction.',copy:'Before automating anything, understand what repeats, who depends on it and where mistakes creep in. Then decide what should be simplified, connected or automated.',question:'“Which task keeps taking time away from the work you actually need to do?”'},
 tools: {title:'Start with the work.\nThen fit the tool.',copy:'Map what people actually need to do, not just the features a system offers. Separate the essential steps from the workarounds, then look for a smaller, better-fitting solution.',question:'“Where are people working around the tool instead of working with it?”'},
 dynamics: {title:'Trace the process.\nUnblock the system.',copy:'A Dynamics 365 F&O issue can cross requirements, configuration, technical design and team handoffs. Follow the process end to end before deciding where the change belongs.',question:'“Where does the process stop — and what needs to happen next?”'}
};
let activeProblem='manual';
const panel=document.querySelector('#approach-panel');
document.querySelectorAll('.problem-choice').forEach(button=>button.addEventListener('click',()=>{
 activeProblem=button.dataset.problem;
 const content=approaches[activeProblem];
 document.querySelectorAll('.problem-choice').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 const title=document.querySelector('#panel-title'); title.replaceChildren(); content.title.split('\n').forEach((line,index)=>{if(index)title.append(document.createTextNode(' '),document.createElement('br'));title.append(document.createTextNode(line));});
 document.querySelector('#panel-copy').textContent=content.copy;
 document.querySelector('#panel-question').textContent=content.question;
 panel.classList.remove('turning'); requestAnimationFrame(()=>panel.classList.add('turning'));
}));
document.querySelector('#panel-action').addEventListener('click',()=>{document.querySelector('#topic').value=activeProblem;});
const textarea=document.querySelector('#problem');
const error=document.querySelector('#problem-error');
textarea.addEventListener('input',()=>{document.querySelector('#character-count').textContent=`${textarea.value.length} / 1200`; if(textarea.value.trim()){error.hidden=true;textarea.removeAttribute('aria-invalid');}});
document.querySelector('#outline-form').addEventListener('submit',event=>{
 event.preventDefault(); const text=textarea.value.trim();
 if(!text){error.textContent='Add a sentence about the problem to prepare your outline.';error.hidden=false;textarea.setAttribute('aria-invalid','true');textarea.focus();return;}
 error.hidden=true;textarea.removeAttribute('aria-invalid');
 const topic=document.querySelector('#topic'); document.querySelector('#outline-topic').textContent=topic.options[topic.selectedIndex].textContent;
 document.querySelector('#outline-problem').textContent=text;
 const result=document.querySelector('#outline-result');result.hidden=false;result.setAttribute('tabindex','-1');result.focus({preventScroll:true});result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
});
document.querySelector('#edit-outline').addEventListener('click',()=>{textarea.focus();});
