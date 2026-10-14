import * as THREE from './assets/three.module.js';
const canvas=document.querySelector('#world'), button=document.querySelector('#motion'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches, unavailable=false, frame=0, pending=false, draws=0, started=performance.now();
function schedule(){if(!unavailable&&!pending){pending=true;requestAnimationFrame(draw);}}
function fallback(){unavailable=true;paused=true;canvas.hidden=true;document.querySelector('.fallback').hidden=false;button.hidden=true;button.disabled=true;document.documentElement.dataset.webgl='fallback';window.__fidelity={draws,paused:true,fallback:true};}
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();fallback();});
function label(){if(unavailable)return;button.textContent=reduced.matches?'Still view · reduced motion':paused?'Resume motion':'Pause motion';button.setAttribute('aria-pressed',String(paused));button.disabled=reduced.matches;}
label();button.addEventListener('click',()=>{paused=!paused;label();if(!paused)schedule();});reduced.addEventListener('change',()=>{paused=reduced.matches;label();schedule();});
let renderer,scene,camera,sculpture,ribbons=[];
try{
renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x153cff);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(36,1,.1,100);camera.position.set(0,0,10);
// Authored studio reflection map: broad softboxes, cobalt walls and a warm floor.
const envCanvas=document.createElement('canvas');envCanvas.width=2048;envCanvas.height=1024;const c=envCanvas.getContext('2d');c.fillStyle='#1738ba';c.fillRect(0,0,2048,1024);c.fillStyle='#060e2c';c.fillRect(0,600,2048,424);c.fillStyle='#fbf9e8';c.fillRect(110,190,280,490);c.fillRect(1130,60,520,170);c.fillStyle='#bdd1ff';c.fillRect(1800,250,160,400);c.fillStyle='#f3eeae';c.fillRect(600,800,600,200);const env=new THREE.CanvasTexture(envCanvas);env.mapping=THREE.EquirectangularReflectionMapping;const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromEquirectangular(env).texture;pmrem.dispose();env.dispose();
scene.add(new THREE.HemisphereLight(0xdce8ff,0x091342,3));const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(-4,6,7);scene.add(key);const rim=new THREE.DirectionalLight(0x829dff,4);rim.position.set(5,-2,-3);scene.add(rim);
const chrome=new THREE.MeshStandardMaterial({color:0xe2e9f4,metalness:1,roughness:.18,side:THREE.DoubleSide});const ceramic=new THREE.MeshStandardMaterial({color:0xf3f1e5,metalness:.12,roughness:.26});const cobalt=new THREE.MeshStandardMaterial({color:0x052cff,metalness:.65,roughness:.23});const yellow=new THREE.MeshStandardMaterial({color:0xe9ee75,metalness:.35,roughness:.26});
sculpture=new THREE.Group();scene.add(sculpture);
// Seven long folded laminations, each with its own compound curve and rolled lip.
for(let band=0;band<7;band++){
 const positions=[],indices=[],steps=150,widthSteps=10,edges=[[],[]];
 for(let i=0;i<=steps;i++){const u=i/steps;const angle=u*Math.PI*1.68+band*.64;const r=1.52+Math.sin(u*Math.PI)*.42;const lift=(u-.5)*2.5;for(let j=0;j<=widthSteps;j++){const v=j/widthSteps-.5;const rr=r+v*.42;const x=Math.cos(angle)*rr,y=lift+v*.65*Math.sin(angle*1.5),z=Math.sin(angle)*rr*.72+Math.sin(v*Math.PI)*.19;positions.push(x,y,z);if(j===0||j===widthSteps)edges[j===0?0:1].push(new THREE.Vector3(x,y,z));}
 }
 for(let i=0;i<steps;i++)for(let j=0;j<widthSteps;j++){const a=i*(widthSteps+1)+j,b=a+widthSteps+1;indices.push(a,b,a+1,b,b+1,a+1);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();const petal=new THREE.Group();petal.add(new THREE.Mesh(geo,band===3?cobalt:chrome));edges.forEach(edge=>petal.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edge),150,.014,5,false),chrome)));petal.rotation.z=band*.09;sculpture.add(petal);ribbons.push(petal);
}
const core=new THREE.Mesh(new THREE.SphereGeometry(.77,64,48),ceramic);core.scale.set(.9,1.16,.9);sculpture.add(core);
// Fine concentric ribs and flush ceramic rings create an optical instrument, not a primitive.
for(let i=0;i<19;i++){const y=(i-9)*.068,rad=Math.sqrt(Math.max(.1,.77*.77-(y/1.16)**2))*.91;const rib=new THREE.Mesh(new THREE.TorusGeometry(rad,.009,6,80),i%5===0?yellow:chrome);rib.rotation.x=Math.PI/2;rib.position.y=y;sculpture.add(rib);}
const orbital=new THREE.Group();orbital.rotation.set(.55,.2,-.4);sculpture.add(orbital);const orbit=new THREE.Mesh(new THREE.TorusGeometry(2.28,.018,8,180,Math.PI*1.7),chrome);orbital.add(orbit);for(let i=0;i<9;i++){const a=i*.21-1;const detail=new THREE.Mesh(new THREE.SphereGeometry(i===4?.1:.028,16,12),yellow);detail.position.set(Math.cos(a)*2.28,Math.sin(a)*2.28,0);orbital.add(detail);}
sculpture.rotation.set(.22,-.35,-.24);

function resize(){if(unavailable)return;const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();const mobile=w<700;const portrait=!mobile&&camera.aspect<1;sculpture.scale.setScalar(mobile?1.02:portrait?.82:1.15);sculpture.position.set(mobile?0:portrait?1.2:1.7,mobile?0:.08,0);camera.position.z=portrait?14.5:10;renderer.render(scene,camera);}addEventListener('resize',resize);resize();document.documentElement.dataset.webgl='ready';schedule();
}catch(error){fallback();console.warn('WebGL unavailable: readable still fallback enabled.');}
function draw(){pending=false;if(!renderer||unavailable||document.hidden)return;
const opening=document.querySelector('.opening'), rect=canvas.getBoundingClientRect();
if(rect.bottom<=0||rect.top>=innerHeight)return;
const travel=Math.max(0,Math.min(1,scrollY/(opening.offsetHeight-innerHeight||innerHeight)));
const p=reduced.matches?0:travel, ease=p*p*(3-2*p);
const entrance=reduced.matches?1:Math.min(1,(performance.now()-started)/1600);
if(!paused)frame++;
sculpture.rotation.y=-.35+ease*.9+(!paused&&!reduced.matches?Math.sin(frame*.002)*.05:0);
sculpture.rotation.z=-.24+ease*.16;
ribbons.forEach((r,i)=>{r.position.y=(i-3)*(ease*.28+(1-entrance)*.18);r.rotation.z=i*.09+(i-3)*ease*.065;});
camera.position.z=(camera.aspect<1&&canvas.clientWidth>700?14.5:10)-ease*1.7;
renderer.toneMappingExposure=1.2+Math.sin(ease*Math.PI)*.2;
const drawStart=performance.now();renderer.render(scene,camera);const renderMs=performance.now()-drawStart;draws++;
window.__fidelity={draws,renderMs,progress:p,paused,reduced:reduced.matches,entrance,camera:camera.position.toArray()};
if(!paused)schedule();}
addEventListener('scroll',()=>{if(paused||canvas.getBoundingClientRect().bottom>0)schedule();},{passive:true});document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule();});
