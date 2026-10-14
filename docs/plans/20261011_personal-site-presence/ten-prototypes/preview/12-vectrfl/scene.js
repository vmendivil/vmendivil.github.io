import * as THREE from './assets/vendor/three.module.js';
const canvas=document.querySelector('#landscape'),host=document.querySelector('.scene'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const chapters=[...document.querySelectorAll('.chapter')],links=[...document.querySelectorAll('.chapter-index a')];
let renderer;
try{
 if(new URLSearchParams(location.search).has('fallback'))throw new Error('Static landscape requested');
 renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.setClearColor('#d8e8f3');renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;
 const world=new THREE.Scene();world.background=null;world.fog=new THREE.Fog('#d8e8f3',65,115);
 const camera=new THREE.OrthographicCamera(-24,24,16,-16,.1,180);
 const porcelain=new THREE.MeshPhysicalMaterial({color:'#f2f4ed',roughness:.32,metalness:.02,clearcoat:.55,clearcoatRoughness:.24}),edge=new THREE.MeshStandardMaterial({color:'#a8c2d4',roughness:.72}),glass=new THREE.MeshPhysicalMaterial({color:'#88b6d0',roughness:.15,metalness:.05,transparent:true,opacity:.68,clearcoat:1,side:THREE.DoubleSide}),red=new THREE.MeshStandardMaterial({color:'#df705b',roughness:.58}),navy=new THREE.MeshStandardMaterial({color:'#56788b',roughness:.8}),cyan=new THREE.MeshStandardMaterial({color:'#50dce6',emissive:'#17b9d4',emissiveIntensity:.4,roughness:.38});
 world.add(new THREE.HemisphereLight('#eff7ff','#8ea9bf',1.05));const sun=new THREE.DirectionalLight('#fff5e3',3.2);sun.position.set(-24,30,18);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.radius=3;sun.shadow.camera.left=-42;sun.shadow.camera.right=42;sun.shadow.camera.top=30;sun.shadow.camera.bottom=-30;sun.shadow.camera.far=100;sun.shadow.bias=-.0003;sun.shadow.normalBias=.04;world.add(sun);
 const ground=new THREE.MeshStandardMaterial({color:'#b7d0e1',roughness:.94});
 const bevelShape=new THREE.Shape();bevelShape.moveTo(-.46,-.46);bevelShape.lineTo(.46,-.46);bevelShape.lineTo(.46,.46);bevelShape.lineTo(-.46,.46);bevelShape.closePath();const boxGeo=new THREE.ExtrudeGeometry(bevelShape,{depth:.92,bevelEnabled:true,bevelSize:.04,bevelThickness:.04,bevelSegments:3,steps:1});boxGeo.translate(0,0,-.46);const cylGeo=new THREE.CylinderGeometry(1,1,1,32);
 function box(x,y,z,w,h,d,mat=porcelain,parent=world){const m=new THREE.Mesh(boxGeo,mat);m.position.set(x,y,z);m.scale.set(w,h,d);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function cylinder(x,y,z,r,h,mat=porcelain,parent=world){const m=new THREE.Mesh(cylGeo,mat);m.scale.set(r,h,r);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function pipe(points,r=.1,mat=porcelain){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const m=new THREE.Mesh(new THREE.TubeGeometry(curve,32,r,8,false),mat);m.castShadow=true;world.add(m);return m;}
 function rail(x,z,w,d,y){for(const zz of [z-d/2,z+d/2]){box(x,y+.5,zz,w,.06,.06,edge);for(let xx=x-w/2;xx<=x+w/2;xx+=.7)box(xx,y+.25,zz,.04,.5,.04,edge);}for(const xx of [x-w/2,x+w/2])box(xx,y+.5,z,.06,.06,d,edge);}
 function base(x,z,w,d){box(x,.12,z,w,.24,d,edge);box(x,.27,z,w-.2,.06,d-.2);}
 function windows(x,z,w,h,d,rows=2){for(let row=0;row<rows;row++)for(let i=0;i<Math.floor(w/.75);i++){box(x-w/2+.4+i*.75,1+row*.65,z+d/2+.018,.38,.25,.035,glass);box(x-w/2+.4+i*.75,1+row*.65,z-d/2-.018,.38,.25,.035,glass);}}
 function roofVent(x,y,z){box(x,y,z,.8,.22,.7,edge);for(let i=0;i<5;i++)box(x-.32+i*.16,y+.13,z,.06,.04,.6);}
 // Continuous ground: recessed expansion joints, inset road, shared utility routes.
 box(3,-.28,0,200,.4,200,new THREE.MeshStandardMaterial({color:'#abc9df',roughness:.93}));
 for(let x=-22;x<29;x+=1.6)for(let z=-12;z<14;z+=1.6)box(x,-.065,z,1.58,.04,1.58,ground);
 box(3,-.027,0,56,.035,3.1,new THREE.MeshStandardMaterial({color:'#c3d8e8',roughness:.88}));
 for(let x=-24;x<30;x+=1.6)box(x,0,0,.7,.012,.035,porcelain);
 pipe([[-22,.04,1.45],[-10,.04,1.45],[-5,.04,1.45],[3,.04,1.45],[11,.04,1.45],[22,.04,1.45]],.05,cyan);
 for(let x=-16;x<23;x+=2.6){cylinder(x,.24,1.7,.065,.48);box(x,.48,1.7,.12,.055,.12,cyan);}
 // Requirements intake hall: arched ceramic ribs, translucent roof and deep portico.
 const intake=-10;base(intake,-4,7,6);box(intake,1.5,-4,6,2.4,4.9);windows(intake,-4,6,2.4,4.9,2);
 const archGeo=new THREE.CylinderGeometry(2.48,2.48,6,40,1,false,0,Math.PI);const arch=new THREE.Mesh(archGeo,porcelain);arch.rotation.z=Math.PI/2;arch.rotation.y=Math.PI/2;arch.position.set(intake,2.65,-4);arch.castShadow=true;arch.receiveShadow=true;world.add(arch);
 for(let i=0;i<9;i++){const a=new THREE.Mesh(new THREE.TorusGeometry(2.51,.045,6,32,Math.PI),edge);a.rotation.y=Math.PI/2;a.position.set(intake-2.7+i*.67,2.64,-4);world.add(a);}
 box(intake,1.9,-1.5,3,1.4,.05,glass);box(intake,.36,-.8,4,.14,1.4);for(const x of [-11.6,-8.4])cylinder(x,1.4,-.65,.1,2.1);box(intake,2.5,-.65,4,.15,1.3);roofVent(-11.5,5.2,-4);
 pipe([[-18,.07,4],[-15,.07,4],[-15,.07,2.3],[-10,.07,2.3],[-10,.07,-.6]],.06,cyan);
 // Design workshop: three original sawtooth roof sections, ribbed facade and gallery.
 const design=-1;base(design,4.6,7.8,5.4);box(design,1.65,4.6,7,2.7,4.5);windows(design,4.6,7,2.7,4.5,3);
 for(let i=0;i<3;i++){const shape=new THREE.Shape();shape.moveTo(-1.1,0);shape.lineTo(1.1,0);shape.lineTo(1.1,1.25);shape.lineTo(-1.1,.18);shape.closePath();const g=new THREE.ExtrudeGeometry(shape,{depth:4.5,bevelEnabled:true,bevelThickness:.05,bevelSize:.04,bevelSegments:2,steps:1});const roof=new THREE.Mesh(g,porcelain);roof.position.set(design-2.3+i*2.3,3,2.35);roof.castShadow=true;roof.receiveShadow=true;world.add(roof);box(design-1.21+i*2.3,3.63,4.6,.055,.95,4.2,glass);}
 for(let i=0;i<11;i++)box(design-3.3+i*.65,1.85,6.9,.075,2.8,.17);box(design,1.3,7.1,2,1.6,.09,glass);box(design,.4,7.6,2.7,.16,1.3);
 for(let i=0;i<6;i++)box(design-2.6+i*.95,.64,8.7,.65,.68,.55,porcelain);
 pipe([[-5,.07,1.45],[-5,.07,2],[-4,.07,2],[-4,.07,4.8]],.065,cyan);
 // Raised utility spine unites the architecture.
 box(3,3.1,-.1,15,.12,.65,edge);for(let x=-4;x<12;x+=3)box(x,1.5,-.1,.12,3,.12);rail(3,-.1,15,.65,3.15);pipe([[-5,3.45,-.1],[0,3.45,-.1],[7,3.45,-.1],[12,3.45,-.1]],.09);
 // Delivery: tall service volume, glazed loading bays and slatted conveyors.
 const delivery=9;base(delivery,-4.5,7.4,5.4);box(delivery,2,-4.5,6.8,3.4,4.6);windows(delivery,-4.5,6.8,3.4,4.6,3);box(delivery,3.9,-4.5,7.05,.35,4.8);rail(delivery,-4.5,6.8,4.55,4.1);
 for(let i=0;i<3;i++){box(7+i*2,1.1,-2.17,1.5,1.65,.06,glass);for(let j=0;j<8;j++)box(7+i*2,.47,-1.8+j*.16,1.25,.1,.06,edge);roofVent(7+i*2,4.3,-4.6);}
 for(let i=0;i<4;i++){box(13.8,.65,-6+i*1.05,2.1,.9,.75);for(let j=0;j<9;j++)box(12.85+j*.24,.67,-5.61+i*1.05,.04,.83,.03,edge);}
 for(let i=0;i<3;i++){const reel=cylinder(7.1+i*1.35,.65,-.95,.43,.65,red);reel.rotation.x=Math.PI/2;const hub=cylinder(7.1+i*1.35,.65,-.59,.17,.08,porcelain);hub.rotation.x=Math.PI/2;}
 pipe([[9,.06,1.45],[11,.06,1.45],[11,.06,-1.7]],.065,cyan);
 // Support loop: paired vessel silos, inspection platforms, pump house and return pipes.
 base(18,4,7.5,6);for(const x of [16.2,18.3]){cylinder(x,1.9,3.6,1,3.2);cylinder(x,3.6,3.6,1.07,.16);cylinder(x,3.79,3.6,.72,.16,edge);for(let i=0;i<4;i++){const t=new THREE.Mesh(new THREE.TorusGeometry(1.01,.035,6,40),edge);t.rotation.x=Math.PI/2;t.position.set(x,.65+i*.9,3.6);world.add(t);}box(x,2,4.65,.42,.7,.06,glass);for(let y=.5;y<3.8;y+=.22)box(x-1.02,y,3.6,.06,.04,.36);}
 box(20.8,1.05,4,1.8,1.5,3.4);windows(20.8,4,1.8,1.5,3.4,1);roofVent(20.8,1.94,4);box(17.2,2.6,3.6,3.8,.1,.6);rail(17.2,3.6,3.8,.6,2.65);
 pipe([[16.2,3.8,3.6],[16.2,4.4,3.6],[14.6,4.4,3.6],[14.6,.5,3.6],[14.6,.5,1.8]],.12);
 pipe([[18.3,3.8,3.6],[18.3,4.35,3.6],[20.8,4.35,3.6],[20.8,1.9,3.6]],.11);
 pipe([[19,.05,1.5],[22,.05,1.5],[23,.05,0],[23,.05,-9],[-15,.05,-9],[-16,.05,-7],[-16,.05,-4]],.07,cyan);
 // Scale details: inspection poles, cable trays, service hatches and stepped platforms.
 for(const [x,z] of [[-16,-5],[-6,7],[5,5],[14,-7],[24,4]]){cylinder(x,1.7,z,.065,3.4);box(x+.23,3.35,z,.5,.08,.24);box(x+.23,3.3,z,.42,.04,.2,cyan);base(x,z,.65,.65);}
 for(const [x,z] of [[-7,-8],[2,-7],[6,8],[23,-4]]){box(x,.12,z,1.5,.12,1.5,navy);for(let i=0;i<6;i++)box(x-.55+i*.22,.2,z,.08,.055,1.2,edge);}
 for(let x=-12;x<20;x+=1.1)box(x,.17,-9.8,.85,.27,.3);for(let x=-9;x<21;x+=4)box(x,.09,10.6,2.8,.14,.8,edge);
 // Batch immobile authored architecture by material; preserve all individual geometry and cast shadows.
 const batches=new Map();world.updateMatrixWorld(true);world.traverse(o=>{if(!o.isMesh)return;const key=o.material.uuid;if(!batches.has(key))batches.set(key,{material:o.material,meshes:[]});batches.get(key).meshes.push(o);});
 for(const {material,meshes} of batches.values()){const positions=[],normals=[];for(const m of meshes){const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry;const normalMatrix=new THREE.Matrix3().getNormalMatrix(m.matrixWorld),v=new THREE.Vector3();for(let i=0;i<g.attributes.position.count;i++){v.fromBufferAttribute(g.attributes.position,i).applyMatrix4(m.matrixWorld);positions.push(v.x,v.y,v.z);v.fromBufferAttribute(g.attributes.normal,i).applyNormalMatrix(normalMatrix);normals.push(v.x,v.y,v.z);}world.remove(m);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));const joined=new THREE.Mesh(geo,material);joined.castShadow=true;joined.receiveShadow=true;world.add(joined);}
 renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
 let previousTime=performance.now();let frame=0,currentX=-8,targetX=-8,currentSize=48,targetSize=48,currentZ=0,targetZ=0,visible=true,paused=false,draws=0,focusPart=-1,stopped=false;
 const home=host.parentElement,focusButtons=[...document.querySelectorAll('[data-focus]')];
 const transfer=new THREE.Mesh(new THREE.SphereGeometry(.18,16,12),new THREE.MeshStandardMaterial({color:'#c9fbff',emissive:'#47e8fa',emissiveIntensity:2,roughness:.2}));world.add(transfer);
 window.fidelityState=()=>({draws,frame,currentX,targetX,currentSize,paused,visible,stopped,hidden:document.hidden,focusPart,transfer:transfer.position.toArray()});
 function select(){if(stopped)return;let chapter=-1;const mobile=innerWidth<=650;for(let i=0;i<chapters.length;i++){if(chapters[i].getBoundingClientRect().top<innerHeight*.6)chapter=i;}links.forEach((a,i)=>a.setAttribute('aria-current',String(i===chapter)));host.dataset.chapter=String(chapter);
 if(mobile&&focusPart>=0){targetX=[-10,-1,9,18][focusPart];targetZ=[-3,4,-3,3][focusPart];targetSize=18;}
 else{if(!mobile&&focusPart>=0){home.prepend(host);host.classList.remove('focused');document.querySelectorAll('.chapter-still').forEach(f=>f.classList.remove('live'));focusPart=-1;focusButtons.forEach(b=>b.setAttribute('aria-pressed','false'));}targetZ=0;const start=chapters[0].offsetTop-innerHeight*.5,end=chapters[3].offsetTop-innerHeight*.5;const progress=Math.max(0,Math.min(1,(scrollY-home.offsetTop-start)/(end-start)));targetX=mobile?3:-8+20*progress;targetSize=mobile?37:48-11*Math.min(1,progress*4);}
 transfer.position.set(Math.max(-18,Math.min(22,targetX+3)),.28,1.45);if(reduced.matches||paused){currentX=targetX;currentZ=targetZ;currentSize=targetSize;}draw();}
 function draw(){if(stopped||frame||!visible||document.hidden)return;frame=requestAnimationFrame(now=>{frame=0;if(stopped||!visible||document.hidden)return;const ease=1-Math.exp(-(now-previousTime)/110);previousTime=now;currentX+=(targetX-currentX)*ease;currentZ+=(targetZ-currentZ)*ease;currentSize+=(targetSize-currentSize)*ease;if(Math.abs(currentX-targetX)<.02)currentX=targetX;if(Math.abs(currentZ-targetZ)<.02)currentZ=targetZ;if(Math.abs(currentSize-targetSize)<.02)currentSize=targetSize;const w=host.clientWidth,h=host.clientHeight,aspect=w/h;camera.left=-currentSize/2;camera.right=currentSize/2;camera.top=currentSize/aspect/2;camera.bottom=-camera.top;camera.updateProjectionMatrix();const t=new THREE.Vector3(currentX,focusPart>=0?1:0,currentZ);camera.position.copy(t).add(new THREE.Vector3(26,28,34));camera.lookAt(t);renderer.render(world,camera);draws++;if(currentX!==targetX||currentZ!==targetZ||currentSize!==targetSize)draw();});}
 document.querySelector('#motion').onclick=e=>{paused=!paused;e.currentTarget.setAttribute('aria-pressed',String(paused));e.currentTarget.textContent=paused?'Resume camera movement':'Pause camera movement';if(frame)cancelAnimationFrame(frame);frame=0;select();};
 focusButtons.forEach((b,i)=>b.onclick=()=>{const same=focusPart===i;document.querySelectorAll('.chapter-still').forEach(f=>f.classList.remove('live'));focusPart=same?-1:i;focusButtons.forEach((button,j)=>button.setAttribute('aria-pressed',String(!same&&j===i)));if(same){home.prepend(host);host.classList.remove('focused');}else{const f=chapters[i].querySelector('.chapter-still');f.prepend(host);f.classList.add('live');host.classList.add('focused');}visible=true;resize();});
 document.addEventListener('visibilitychange',()=>{if(frame)cancelAnimationFrame(frame);frame=0;if(!document.hidden)select();});
 if(new URLSearchParams(location.search).has('capture')){
  host.style.cssText='position:fixed;inset:0;width:100vw;height:100vh;margin:0;z-index:100';
  host.querySelectorAll('span').forEach(el=>el.hidden=true);
  window.captureLandscape=(name)=>{const views={overview:[3,0,0,48],requirements:[-10,1,-3,18],design:[-1,1,4,18],delivery:[9,1,-3,18],support:[18,1,3,17]};const [x,y,z,size]=views[name];visible=false;if(frame)cancelAnimationFrame(frame);frame=0;renderer.setPixelRatio(1);renderer.setSize(innerWidth,innerHeight,false);camera.left=-size/2;camera.right=size/2;camera.top=size/(innerWidth/innerHeight)/2;camera.bottom=-camera.top;camera.updateProjectionMatrix();const t=new THREE.Vector3(x,y,z);camera.position.copy(t).add(new THREE.Vector3(26,28,34));camera.lookAt(t);renderer.render(world,camera);return {name,target:[x,y,z],size,width:innerWidth,height:innerHeight};};
 }
 function retireRenderer(){stopped=true;if(frame)cancelAnimationFrame(frame);frame=0;home.prepend(host);host.classList.remove('ready','focused');host.dataset.renderer='static';canvas.hidden=true;focusPart=-1;document.querySelectorAll('.chapter-still').forEach(f=>f.classList.remove('live'));document.querySelectorAll('[data-focus],#motion').forEach(b=>{b.disabled=true;b.setAttribute('aria-pressed','false');});document.querySelector('#render-state').textContent='Static illustration · all reading remains available';}
 function resize(){if(stopped)return;renderer.setSize(host.clientWidth,host.clientHeight,false);select();}
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible&&frame){cancelAnimationFrame(frame);frame=0;}if(visible)draw();},{rootMargin:'100px'}).observe(host);
 addEventListener('scroll',select,{passive:true});addEventListener('resize',resize,{passive:true});reduced.addEventListener('change',select);canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();retireRenderer();});
 resize();host.classList.add('ready');host.dataset.renderer='webgl';
}catch(error){canvas.hidden=true;host.dataset.renderer='static';document.querySelectorAll('[data-focus],#motion').forEach(b=>{b.disabled=true});document.querySelector('#render-state').textContent='Static illustration · all reading remains available';}
