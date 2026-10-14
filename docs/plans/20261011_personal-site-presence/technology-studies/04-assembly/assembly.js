'use strict';
// Runtime parametric explanatory geometry. All parts share one measured axis;
// separation changes their actual world-space z coordinates, not a raster frame.
const canvas=document.querySelector('#cutaway'), ctx=canvas.getContext('2d');
const button=document.querySelector('#assemble'), label=document.querySelector('#button-label'), status=document.querySelector('#assembly-status');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let width=0,height=0,separation=1,assembled=false,frame=0;
const layers=[{name:'Release gate',z:0,w:390,d:226,top:'#746469',edge:'#32262b'}, {name:'Test',z:36,w:350,d:204,top:'#cfcdc2',edge:'#676367'}, {name:'Posting rule',z:72,w:370,d:218,top:'#b7b5b0',edge:'#515054'}, {name:'Requirement',z:108,w:390,d:226,top:'#e3e0d5',edge:'#7d787a'}];
function project(x,y,z){const mobile=width<600,scale=mobile?width/825:Math.min(width/1040,height/590);return [width*.5+(x*.87-y*.72)*scale,height*(mobile?.83:.70)+(x*.29+y*.34-z*.94)*scale];}
function path(points){ctx.beginPath();points.forEach((p,i)=>{const v=project(...p);i?ctx.lineTo(...v):ctx.moveTo(...v)});ctx.closePath();}
function face(points,color,shine=false){path(points);if(shine){const v=project(...points[0]),b=project(...points[2]);const g=ctx.createLinearGradient(...v,...b);g.addColorStop(0,color);g.addColorStop(.4,color);g.addColorStop(1,'#8e888c');ctx.fillStyle=g;}else ctx.fillStyle=color;ctx.fill();ctx.strokeStyle='#f0ede428';ctx.lineWidth=.6;ctx.stroke();}
function box(x,y,z,w,d,h,top,edge,metal=true){face([[x,y,z],[x+w,y,z],[x+w,y,z+h],[x,y,z+h]],edge);face([[x+w,y,z],[x+w,y+d,z],[x+w,y+d,z+h],[x+w,y,z+h]],edge);face([[x,y+d,z],[x+w,y+d,z],[x+w,y+d,z+h],[x,y+d,z+h]],edge);face([[x,y,z+h],[x+w,y,z+h],[x+w,y+d,z+h],[x,y+d,z+h]],top,metal);}
function bolt(x,y,z){const p=project(x,y,z), q=project(x+8,y,z),r=Math.abs(q[0]-p[0]);ctx.save();ctx.translate(...p);ctx.rotate(-.10);ctx.beginPath();ctx.ellipse(0,0,r*1.15,r*.60,0,0,Math.PI*2);ctx.fillStyle='#444046';ctx.fill();ctx.strokeStyle='#f1e9dd7a';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.moveTo(-r*.4,0);ctx.lineTo(r*.4,0);ctx.strokeStyle='#161316';ctx.stroke();ctx.restore();}
function plate(layer,index){const z=layer.z+index*64*separation,x=-layer.w/2,y=-layer.d/2,thickness=index===0?20:13;const slotW=170,slotD=62;
// A true open rectangular section: four solids, no painted-on opening.
box(x,y,z,layer.w,(layer.d-slotD)/2,thickness,layer.top,layer.edge);
box(x,-slotD/2,z,(layer.w-slotW)/2,slotD,thickness,layer.top,layer.edge);
box(slotW/2,-slotD/2,z,(layer.w-slotW)/2,slotD,thickness,layer.top,layer.edge);
box(x,slotD/2,z,layer.w,(layer.d-slotD)/2,thickness,layer.top,layer.edge);
// Machining passes and engraved indexing provide material, not random circuitry.
for(let i=0;i<7;i++){const a=project(x+18,slotD/2+9+i*5,z+thickness+.2),b=project(-slotW/2-10,slotD/2+9+i*5,z+thickness+.2);ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.strokeStyle=index===0?'#ccafa22b':'#fffefb32';ctx.lineWidth=.5;ctx.stroke();}
[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx,sy])=>bolt(sx*(layer.w/2-26),sy*(layer.d/2-25),z+thickness+1));
// One continuity spine, red at every section of the same input-to-operation axis.
box(-69,-22,z+thickness,138,44,9,'#f65d46','#9a302f',false);
return z;
}
function leader(point,end){const a=project(...point);ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(end[0]+(a[0]<end[0]?-35:35),end[1]);ctx.lineTo(...end);ctx.strokeStyle='#c9b4af90';ctx.lineWidth=.8;ctx.stroke();ctx.beginPath();ctx.arc(...a,2.6,0,Math.PI*2);ctx.fillStyle='#f65d46';ctx.fill();}
function render(){ctx.clearRect(0,0,width,height);const mobile=width<600;
// A restrained projected ground shadow anchors the physical model.
const shadow=ctx.createRadialGradient(width*.50,height*.83,10,width*.50,height*.83,width*.34);shadow.addColorStop(0,'#100c10aa');shadow.addColorStop(1,'#100c1000');ctx.fillStyle=shadow;ctx.fillRect(0,height*.52,width,height*.48);
// Continuous steel guides; their scale is entirely illustrative, not measured data.
[[-166,-80],[166,-80],[-166,80],[166,80]].forEach(([x,y])=>box(x-3,y-3,-9,6,6,142+192*separation,'#a39c9d','#61545b'));
// Vermilion common spine is visible through the section's open bore.
box(-29,-15,5,58,30,132+192*separation,'#f65d46','#873337',false);
layers.forEach(plate);
// Base datum line expresses one assembled mechanism, not an ornamental grid.
const a=project(-240,139,-17),b=project(240,139,-17);ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.strokeStyle='#b5919180';ctx.lineWidth=1;ctx.stroke();
if(!mobile){leader([-190,-45,121+192*separation],[width*.17,height*.16]);leader([181,20,86+128*separation],[width*.80,height*.36]);leader([-173,88,49+64*separation],[width*.18,height*.61]);leader([190,80,21],[width*.80,height*.81]);}
canvas.dataset.separation=separation.toFixed(3);canvas.dataset.state=assembled?'assembled':'exploded';}
function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);render();}
function toggle(){assembled=!assembled;button.setAttribute('aria-pressed',String(assembled));label.textContent=assembled?'Explode the system':'Assemble the system';status.textContent=assembled?'Assembled · a changed rule needs new tests before release.':'Exploded · follow the requirement through each section.';cancelAnimationFrame(frame);const from=separation,target=assembled?0:1,start=performance.now();if(motion.matches){separation=target;render();return;}function tick(now){const t=Math.min((now-start)/1000,1),ease=1-Math.pow(1-t,5);separation=from+(target-from)*ease;render();if(t<1)frame=requestAnimationFrame(tick);}frame=requestAnimationFrame(tick);}
button.addEventListener('click',toggle);motion.addEventListener('change',()=>{cancelAnimationFrame(frame);separation=assembled?0:1;render();});new ResizeObserver(resize).observe(canvas);resize();
