'use strict';
function installRoomCamera(){
 const svg=document.querySelector('.scene svg'),full=[0,0,1200,800],reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let current=full.slice(),target=full.slice(),frame=0,draws=0,selected=null;
 const paint=()=>{svg.setAttribute('viewBox',current.join(' '));draws++;};
 function select(id){
  selected=id;cancelAnimationFrame(frame);frame=0;
  const bay=id&&svg.querySelector('#bay-'+id);
  if(bay){const b=bay.getBBox();const width=790,height=width*2/3;target=[b.x+b.width/2-width/2,b.y+b.height/2-height/2,width,height];}
  else target=full.slice();
  svg.dataset.camera=id||'whole';
  if(reduced.matches||document.hidden){current=target.slice();paint();return;}
  const from=current.slice(),start=performance.now();
  const tick=t=>{const p=Math.min(1,(t-start)/680),ease=1-Math.pow(1-p,4);current=from.map((v,i)=>v+(target[i]-v)*ease);paint();if(p<1)frame=requestAnimationFrame(tick);else frame=0;};
  frame=requestAnimationFrame(tick);
 }
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;current=target.slice();paint();}});
 reduced.addEventListener('change',()=>select(selected));
 window.pavilionCamera={select,get draws(){return draws;},get running(){return !!frame;},get view(){return current.slice();}};
}
