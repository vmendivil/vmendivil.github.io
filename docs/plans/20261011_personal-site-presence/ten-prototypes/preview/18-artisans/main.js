import * as THREE from './assets/three.module.js';
const menu=document.querySelector('#menu');
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.open=false;}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const captureMode=new URLSearchParams(location.search).has('render');
const palette=[{sky:0x756039,fog:0x62533a,rock:0x37382a,light:0xffdea0,water:0x443e2b},{sky:0x174956,fog:0x20545e,rock:0x244650,light:0x83eced,water:0x173f4b},{sky:0xb4d4c7,fog:0x94b8a6,rock:0x547566,light:0xecffe3,water:0x6f9d8b}];
const fract=x=>x-Math.floor(x); const hash=(x,z)=>fract(Math.sin(x*127.1+z*311.7)*43758.5453);
function noise(x,z){let i=Math.floor(x),j=Math.floor(z),u=x-i,v=z-j;u=u*u*(3-2*u);v=v*v*(3-2*v);return (hash(i,j)*(1-u)+hash(i+1,j)*u)*(1-v)+(hash(i,j+1)*(1-u)+hash(i+1,j+1)*u)*v;}
function fbm(x,z){return noise(x,z)*.56+noise(x*2.1,z*2.1)*.27+noise(x*4.4,z*4.4)*.12+noise(x*9,z*9)*.05;}
const river=z=>Math.sin(z*.034)*9+Math.sin(z*.083)*2;
const instances=[];
const controls=[...document.querySelectorAll('.scene')].map((section,index)=>{
 const ui=document.createElement('div');ui.className='light-controls';
 ui.innerHTML=`<div><button class="illuminate" aria-pressed="false">Illuminate the thread</button><button class="pause-water" aria-pressed="false">Pause water</button></div><label>Follow the light <input class="route" aria-label="Follow the light in landscape ${index+1}" type="range" min="0" max="100" value="0"></label>`;
 section.append(ui);let lit=false,paused=false;
 const redraw=()=>instances[index]?.render(performance.now());
 ui.querySelector('.illuminate').addEventListener('click',e=>{lit=!lit;e.currentTarget.setAttribute('aria-pressed',String(lit));e.currentTarget.textContent=lit?'Soften the thread':'Illuminate the thread';section.classList.toggle('illuminated',lit);redraw();});
 ui.querySelector('.pause-water').addEventListener('click',e=>{paused=!paused;e.currentTarget.setAttribute('aria-pressed',String(paused));e.currentTarget.textContent=paused?'Resume water':'Pause water';scheduleWater();});
 ui.querySelector('.route').addEventListener('input',()=>{section.style.setProperty('--route-position',ui.querySelector('.route').value+'%');redraw();});
 return {section,ui,get lit(){return lit;},get paused(){return paused;},get route(){return Number(ui.querySelector('.route').value)/100;}};
});

function makeScene(canvas, index){
 const p=palette[index], scene=new THREE.Scene();scene.background=new THREE.Color(p.sky);scene.fog=new THREE.FogExp2(p.fog,index===2?.009:.013);
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,preserveDrawingBuffer:captureMode}); renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)); renderer.localClippingEnabled=true; renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=index===2?1.15:1.05;
 const camera=new THREE.PerspectiveCamera(52,1,.1,500);
 scene.add(new THREE.HemisphereLight(index===0?0xb9a579:0xc5eeed,index===0?0x151911:0x1c3834,1.5));
 const sun=new THREE.DirectionalLight(p.light,index===2?3:2.8);sun.position.set(-35,22,-110);scene.add(sun);
 const key=new THREE.DirectionalLight(index===0?0x9aa57d:0x8fd9d8,.7);key.position.set(20,9,15);scene.add(key);
 // Authored sky: turbulent layered vapor, luminous horizon and directional moonlight.
 const sky=new THREE.Mesh(new THREE.SphereGeometry(260,48,32),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{base:{value:new THREE.Color(p.sky)},glow:{value:new THREE.Color(p.light)},kind:{value:index}},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 v;uniform vec3 base,glow;uniform float kind;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1)),f.x),f.y);}float f(vec2 p){return .55*n(p)+.27*n(p*2.03)+.13*n(p*4.2)+.05*n(p*8.3);}
 void main(){vec3 d=normalize(v);float clouds=f(d.xz*5.+vec2(d.y*13.,0.));float mist=exp(-abs(d.y-.015)*8.);float halo=pow(max(0.,dot(d,normalize(vec3(-.28,.13,-1.)))),24.);vec3 c=base*(.26+.40*mist)+glow*(halo*.5+mist*.11);c+=base*max(0.,clouds-.36)*.35;gl_FragColor=vec4(c,1.);}` }));scene.add(sky);
 // Continuous sculpted shore: broad masses with erosion at multiple scales.
 const geo=new THREE.PlaneGeometry(150,230,300,420);geo.rotateX(-Math.PI/2);geo.translate(0,0,-80);const pos=geo.attributes.position,colors=[];
 for(let i=0;i<pos.count;i++){let x=pos.getX(i),z=pos.getZ(i);let dist=Math.abs(x-river(z));let side=x>river(z)?1:0;let edge=7+noise(z*.09,side*5)*5;let ramp=Math.max(0,dist-edge);let mass=(2.5+fbm(x*.045,z*.045)*16)*Math.min(1,ramp/10);let ridge=Math.pow(fbm(x*.11,z*.11),2)*ramp*.25;let detail=(noise(x*.8,z*.8)-.5)*Math.min(1,ramp)*1.35;let y=mass+ridge+detail-.8;if(index===1)y*=.47;if(index===2)y*=.28;pos.setY(i,y);let c=new THREE.Color(p.rock);let tone=.48+fbm(x*.24,z*.24)*.75+Math.max(0,y)*.015;c.multiplyScalar(tone);colors.push(c.r,c.g,c.b);}
 geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();
 const grain=new Uint8Array(256*256*4);for(let z=0;z<256;z++)for(let x=0;x<256;x++){let v=Math.floor((fbm(x*.085,z*.12)*.8+hash(x,z)*.2)*255);let k=(z*256+x)*4;grain[k]=grain[k+1]=grain[k+2]=v;grain[k+3]=255;}const mineral=new THREE.DataTexture(grain,256,256);mineral.wrapS=mineral.wrapT=THREE.RepeatWrapping;mineral.repeat.set(24,38);mineral.needsUpdate=true;
 const land=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.96,metalness:.08,flatShading:false,bumpMap:mineral,bumpScale:.25}));scene.add(land);
 const reflected=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,metalness:0,side:THREE.DoubleSide,transparent:true,opacity:.36,clippingPlanes:[new THREE.Plane(new THREE.Vector3(0,-1,0),-.08)]}));reflected.scale.y=-1;reflected.position.y=-.15;scene.add(reflected);
 // Ripple water is a translucent surface over mirrored original land geometry.
 const water=new THREE.Mesh(new THREE.PlaneGeometry(170,260,1,1),new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{color:{value:new THREE.Color(p.water)},shine:{value:new THREE.Color(p.light)},time:{value:0},kind:{value:index}},vertexShader:'varying vec3 w;void main(){w=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}',fragmentShader:`varying vec3 w;uniform vec3 color,shine;uniform float time,kind;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){float wave=sin(w.z*3.2+sin(w.x*.7)+time*.3)*sin(w.x*.5+w.z*.13);float ripple=pow(max(0.,sin(w.z*11.+sin(w.x*2.)*2.+time*.12)),18.);float light=exp(-pow((w.x+8.)/(2.+abs(w.z)*.08),2.));float grain=h(floor(w.xz*30.))*.025;vec3 c=color*(.7+wave*.055+grain)+shine*light*(.06+ripple*.22);gl_FragColor=vec4(c,.65);}` }));water.rotation.x=-Math.PI/2;water.position.set(0,-.03,-80);scene.add(water);
 // Four independently curved filaments and softer physical water echoes.
 const path=new THREE.Group();for(let k=0;k<4;k++){const points=[];for(let j=0;j<=180;j++){let z=31-j*1.1;let x=river(z)+(index===1?Math.sin(z*.065)*2.5:0)+(k-1.5)*.23;let y=.22+Math.sin(j*.035)*.08;if(index===2&&z< -36)y+=Math.min(2.8,(-z-36)*.06);points.push(new THREE.Vector3(x,y,z));}
 const curve=new THREE.CatmullRomCurve3(points);const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,220,.045,6,false),new THREE.MeshBasicMaterial({color:p.light}));path.add(tube);
 const halo=new THREE.Mesh(new THREE.TubeGeometry(curve,220,.16,6,false),new THREE.MeshBasicMaterial({color:p.light,transparent:true,opacity:.12,depthWrite:false,blending:THREE.AdditiveBlending}));path.add(halo);
 const echo=tube.clone();echo.material=new THREE.MeshBasicMaterial({color:p.light,transparent:true,opacity:.19});echo.scale.y=-1;echo.position.y=-.15;path.add(echo);}
 scene.add(path);
 let moon;
 if(index===1){const moonMaterial=new THREE.ShaderMaterial({vertexShader:'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 p;void main(){float m=.84+.09*sin(p.x*6.)*sin(p.y*4.)+.04*sin(p.z*17.);gl_FragColor=vec4(vec3(.73,.96,.93)*m,1.);}'});moon=new THREE.Mesh(new THREE.SphereGeometry(6,48,32),moonMaterial);moon.position.set(20,18,-145);scene.add(moon);const moonLight=new THREE.PointLight(0x8ceeea,180,180,1);moonLight.position.set(-15,16,-50);scene.add(moonLight);}
 if(index===2){ // A horizontal civic-like threshold, not a gate or membrane.
 const stone=new THREE.MeshStandardMaterial({color:0xd3e1c8,roughness:.42,metalness:.18});
 for(let i=0;i<9;i++){const slab=new THREE.Mesh(new THREE.BoxGeometry(18+i*1.4,.55,3.2),stone);slab.position.set(6+i*.5,.28+i*.32,-38-i*3.5);scene.add(slab);const seam=new THREE.Mesh(new THREE.BoxGeometry(18+i*1.4,.035,.035),new THREE.MeshBasicMaterial({color:0xe9ffe2}));seam.position.set(slab.position.x,slab.position.y+.28,slab.position.z+1.61);scene.add(seam);}
 const wallGeo=new THREE.BoxGeometry(1.3,8.5,19);let wall=new THREE.Mesh(wallGeo,stone);wall.position.set(23,4,-66);wall.rotation.z=-.14;scene.add(wall);
 }
 // Wisps suspended in the valley establish several depth planes.
 for(let i=0;i<7;i++){const mist=new THREE.Mesh(new THREE.PlaneGeometry(140,8),new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{c:{value:new THREE.Color(p.fog)},phase:{value:i}},vertexShader:'varying vec2 uvv;void main(){uvv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 uvv;uniform vec3 c;uniform float phase;void main(){float edge=sin(uvv.y*3.14159);float a=edge*edge*.09*(.5+.5*sin(uvv.x*22.+phase));gl_FragColor=vec4(c,a);}' }));mist.position.set(0,2+i*.4,-15-i*23);scene.add(mist);}
 let portrait=false;
 const resize=()=>{const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;portrait=r.width<=600;if(moon)moon.position.x=portrait?4:20;camera.fov=portrait?58:52;camera.updateProjectionMatrix();};resize();
 let visible=false;
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;scheduleWater();},{threshold:.01});observer.observe(canvas);
 let draws=0,lastTime=0;
 function render(time=0){
  if(document.hidden)return;
  const control=controls[index],rect=canvas.parentElement.getBoundingClientRect();
  const scroll=Math.max(0,Math.min(1,-rect.top/rect.height));
  const progress=captureMode?0:Math.max(scroll,control.route),advance=progress*(index===0?24:index===1?18:28);
  const z=(portrait?20:26)-advance;
  camera.position.set(river(z)+(portrait?.7:5.8-progress*3)+(index===1?Math.sin(progress*Math.PI)*1.5:0),
    (portrait?(index===2?6:4.8):(index===2?5.2:3.7))+(index===2?progress*1.4:progress*.5),z);
  camera.lookAt(river(-50-advance*.45),index===2?4:7,-75-advance*.45);
  path.children.forEach((mesh,i)=>{mesh.material.transparent=i%3!==0;mesh.material.color.set(p.light).multiplyScalar(control.lit?1.7:1);mesh.material.opacity=i%3===0?(control.lit?1:.68):i%3===1?(control.lit?.3:.09):(control.lit?.35:.14);});
  sun.intensity=(index===2?3:2.8)*(control.lit?1.2:1);
  renderer.toneMappingExposure=(index===2?1.15:1.05)*(control.lit?1.1:1);
  if(!control.paused&&!reduced.matches)lastTime=time*.001;
  water.material.uniforms.time.value=lastTime;
  renderer.render(scene,camera);draws++;canvas.parentElement.classList.add('live');
 }
 render();const inst={resize,render,index,get draws(){return draws;},get visible(){return visible;},get camera(){return camera.position.toArray();},renderer};instances.push(inst);return inst;
}
if(!reduced.matches||captureMode){for(const canvas of document.querySelectorAll('canvas')){try{makeScene(canvas,Number(canvas.dataset.scene));}catch(err){console.warn('Landscape unavailable; using the still composition.',err.message);}}}
window.addEventListener('resize',()=>instances.forEach(i=>{i.resize();i.render();}));
let queued=false;window.addEventListener('scroll',()=>{if(queued||captureMode||reduced.matches)return;queued=true;requestAnimationFrame(()=>{instances.filter(i=>i.visible).forEach(i=>i.render());queued=false;});},{passive:true});
reduced.addEventListener('change',()=>{if(!reduced.matches&&instances.length===0)location.reload();});
let waterFrame=0,lastDraw=0;
function scheduleWater(){
 cancelAnimationFrame(waterFrame);waterFrame=0;
 if(document.hidden||reduced.matches||captureMode||!instances.some(i=>i.visible&&!controls[i.index].paused))return;
 const tick=time=>{waterFrame=0;if(document.hidden||reduced.matches)return;
  if(time-lastDraw>=1000/24){instances.filter(i=>i.visible&&!controls[i.index].paused).forEach(i=>i.render(time));lastDraw=time;}
  if(instances.some(i=>i.visible&&!controls[i.index].paused))waterFrame=requestAnimationFrame(tick);
 };waterFrame=requestAnimationFrame(tick);
}
function motionState(){controls.forEach(c=>{const button=c.ui.querySelector('.pause-water');button.disabled=reduced.matches||!instances.length;button.textContent=reduced.matches||!instances.length?'Still landscape':c.paused?'Resume water':'Pause water';});scheduleWater();}
document.addEventListener('visibilitychange',scheduleWater);reduced.addEventListener('change',motionState);motionState();
window.study18={instances,controls,get running(){return !!waterFrame;},renderAll:()=>instances.forEach(i=>i.render()),ready:true};
