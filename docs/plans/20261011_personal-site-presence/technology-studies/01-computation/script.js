const button=document.querySelector('#run');
const flow=document.querySelector('#flow');
const status=document.querySelector('#status');
const output=document.querySelector('#outputs');
const raw=[{id:' PO-041 ',approved:true},{id:'po-042',approved:false},{id:'PO-043',approved:true}];
let running=false;
// SVG units are CSS pixels in the measured flow, never an independently stretched map.
function layoutRoutes(){
 const svg=flow.querySelector('.routes');
 const box=flow.getBoundingClientRect();
 const local=element=>{const r=element.getBoundingClientRect();return {left:r.left-box.left,right:r.right-box.left,top:r.top-box.top,bottom:r.bottom-box.top,cy:(r.top+r.bottom)/2-box.top};};
 const gate=local(flow.querySelector('.operator'));
 const mobile=matchMedia('(max-width:700px)').matches;
 const cx=(gate.left+gate.right)/2;
 svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);
 svg.removeAttribute('preserveAspectRatio');
 flow.querySelectorAll('.route').forEach((path,i)=>{
  const a=local(flow.querySelectorAll('.source li')[i]);
  const b=local(output.children[i]);
  const d=mobile
   ? `M${a.right} ${a.cy} H${box.width-8-i*4} V${gate.top-16} H${cx} V${gate.top} M${cx} ${gate.bottom} V${gate.bottom+16} H${8+i*4} V${b.cy} H${b.left}`
   : `M${a.right} ${a.cy} H${gate.left-16} L${cx} ${gate.cy} L${gate.right+16} ${b.cy} H${b.left}`;
  path.setAttribute('d',d);
 });
 svg.querySelector('.gate').setAttribute('d',mobile?`M${cx-24} ${gate.top} H${cx+24} M${cx-24} ${gate.bottom} H${cx+24}`:`M${cx-15} 0 V${box.height} M${cx+15} 0 V${box.height}`);
}
const routeObserver=new ResizeObserver(layoutRoutes);
routeObserver.observe(flow);
routeObserver.observe(output);
new MutationObserver(layoutRoutes).observe(output,{childList:true,subtree:true,characterData:true});
document.fonts.ready.then(layoutRoutes);
window.addEventListener('resize',layoutRoutes);
function finish(){
 const records=raw.map(record=>({id:record.id.trim().toUpperCase(),action:record.approved?'release order':'request approval'}));
 output.replaceChildren(...records.map(record=>{const li=document.createElement('li');const code=document.createElement('code');code.textContent=record.id;const action=document.createElement('span');action.textContent=record.action;li.append(code,action);return li;}));
 flow.dataset.state='complete';status.textContent='Complete. Two releases; one approval needed.';
 document.querySelector('#gate-text').textContent='clean → test → route';
 document.querySelector('#summary').textContent='Every record has a next step. Exceptions stay visible.';
 button.disabled=false;button.firstChild.textContent='Run it again ';running=false;
 layoutRoutes();
}
button.addEventListener('click',()=>{
 if(running)return;running=true;button.disabled=true;flow.dataset.state='running';
 status.textContent='Normalizing identifiers…';output.querySelectorAll('li span').forEach(x=>x.textContent='processing');
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return;}
 setTimeout(()=>{status.textContent='Checking approval. Routing the next action…';document.querySelector('#gate-text').textContent='approved ? release : review';},550);
 setTimeout(finish,1250);
});
