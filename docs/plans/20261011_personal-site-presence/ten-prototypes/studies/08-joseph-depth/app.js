import * as THREE from './assets/three.module.js';
const canvas=document.querySelector('#scene'), button=document.querySelector('#pause'), status=document.querySelector('#scene-state');
const preference=matchMedia('(prefers-reduced-motion: reduce)');
let reduced=preference.matches, paused=false, unavailable=false, renderer, frame=0, last=0, time=0, progress=0, targetProgress=0, draws=0;
function fallback(){unavailable=true;if(frame)cancelAnimationFrame(frame);frame=0;document.body.classList.add('scene-unavailable');status.textContent='Architectural scene unavailable · all content remains below';button.textContent='Atmosphere unavailable';button.disabled=true;window.__scene={ready:false,fallback:true,draws};}
try{
renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.5));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
const scene=new THREE.Scene();scene.background=new THREE.Color('#0b5553');scene.fog=new THREE.FogExp2('#0a5551',.026);
const camera=new THREE.PerspectiveCamera(innerWidth<700?65:55,innerWidth/innerHeight,.1,130);
scene.add(new THREE.HemisphereLight('#c3e5ce','#173f3b',2.4));
const sun=new THREE.DirectionalLight('#ffe1a7',3.8);sun.position.set(8,18,-18);scene.add(sun);
const fill=new THREE.DirectionalLight('#76c6bd',1.7);fill.position.set(-12,5,18);scene.add(fill);
// Warmth stays at the terminal bay; water and the reading foreground stay unchanged.
const amber=new THREE.PointLight('#ffc075',110,18,1.6);amber.position.set(0,7,-48);scene.add(amber);
// Original deterministic marble: mineral layers and fine mineral veins.
let seed=83071;function random(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646;}
const textureCanvas=document.createElement('canvas');textureCanvas.width=textureCanvas.height=512;const ctx=textureCanvas.getContext('2d');ctx.fillStyle='#99aa91';ctx.fillRect(0,0,512,512);
for(let j=0;j<2200;j++){const y=random()*512,x=random()*512;ctx.strokeStyle=`rgba(${random()>.45?'32,76,62':'221,230,196'},${.02+random()*.1})`;ctx.lineWidth=.4+random()*2;ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x-60,y+50,x+100,y+70,x+130,y+180);ctx.stroke();}
for(let j=0;j<17;j++){let y=random()*512;ctx.strokeStyle='rgba(34,80,67,.32)';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(0,y);for(let x=0;x<530;x+=12){y+=Math.sin(x*.03+j)*4+random()*5-2.5;ctx.lineTo(x,y)}ctx.stroke();}
const stoneMap=new THREE.CanvasTexture(textureCanvas);stoneMap.wrapS=stoneMap.wrapT=THREE.RepeatWrapping;stoneMap.colorSpace=THREE.SRGBColorSpace;
const marble=new THREE.MeshStandardMaterial({color:'#acc3a5',map:stoneMap,roughness:.72,metalness:.06});
const jade=new THREE.MeshStandardMaterial({color:'#366e5d',map:stoneMap,roughness:.58,metalness:.18});
const bronze=new THREE.MeshStandardMaterial({color:'#c99c58',roughness:.36,metalness:.6});
function mesh(geometry,material,x,y,z,parent=scene){const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);parent.add(m);return m;}
function cylinder(rt,rb,h,x,y,z,material=marble){return mesh(new THREE.CylinderGeometry(rt,rb,h,48),material,x,y,z);}
// Fluted piers with lathed capitals, round plinths, gilded collar, and built stone drums.
function column(x,z){const group=new THREE.Group();group.position.set(x,0,z);scene.add(group);
const profile=[new THREE.Vector2(.85,-2.7),new THREE.Vector2(.85,-2.45),new THREE.Vector2(.67,-2.35),new THREE.Vector2(.6,-2.15),new THREE.Vector2(.57,5.4),new THREE.Vector2(.68,5.55),new THREE.Vector2(.78,5.85),new THREE.Vector2(.9,5.95),new THREE.Vector2(.9,6.15)];
mesh(new THREE.LatheGeometry(profile,56),marble,0,0,0,group);
for(let n=0;n<18;n++){let a=n/18*Math.PI*2;mesh(new THREE.CylinderGeometry(.056,.075,7.45,7),jade,Math.cos(a)*.567,1.62,Math.sin(a)*.567,group)}
for(let n=0;n<5;n++){mesh(new THREE.TorusGeometry(.583,.027,6,48),jade,0,-1+n*1.5,0,group).rotation.x=Math.PI/2;}
for(let y of [-2.25,5.57])mesh(new THREE.TorusGeometry(.66,.05,8,48),bronze,0,y,0,group).rotation.x=Math.PI/2;
for(let n=0;n<3;n++)mesh(new THREE.CylinderGeometry(1.2-n*.13,1.2-n*.13,.2,48),n===1?jade:marble,0,-2.9+n*.2,0,group);
}
// Arch voussoirs are actual extruded wedge-shaped masonry, not boxes or a flat arch image.
function arch(z){for(let n=0;n<25;n++){const a=n/25*Math.PI+.013,b=(n+1)/25*Math.PI-.013;const s=new THREE.Shape();s.absarc(0,0,6.0,a,b,false);s.lineTo(Math.cos(b)*6.65,Math.sin(b)*6.65);s.absarc(0,0,6.65,b,a,true);s.closePath();mesh(new THREE.ExtrudeGeometry(s,{depth:.65,bevelEnabled:true,bevelThickness:.045,bevelSize:.04,bevelSegments:2,steps:1,curveSegments:5}),n%5===0?jade:marble,0,6,z);}
for(let r of [5.94,6.72]){const curve=new THREE.EllipseCurve(0,0,r,r,0,Math.PI,false,0);const points=curve.getPoints(64).map(p=>new THREE.Vector3(p.x,p.y,0));mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),64,.045,6,false),bronze,0,6,z+.7);}
column(-6,z);column(6,z);
}
for(let z=5;z>=-49;z-=8)arch(z);
// Scalloped gallery balustrades, worn stair terraces and broad submerged floor.
for(let side of [-1,1]){for(let z=2;z>-50;z-=2){cylinder(.12,.19,1.55,side*7,-1.3,z,jade);mesh(new THREE.SphereGeometry(.22,12,8),marble,side*7,-.45,z)}
const rail=new THREE.CatmullRomCurve3([new THREE.Vector3(side*7,-.3,5),new THREE.Vector3(side*7,-.3,-20),new THREE.Vector3(side*7,-.3,-53)]);scene.add(new THREE.Mesh(new THREE.TubeGeometry(rail,48,.11,8,false),marble));}
for(let i=0;i<7;i++){const stair=cylinder(5.2+i*.53,5.2+i*.53,.24,0,-2.75-i*.22,-44, i%2?jade:marble);stair.scale.z=1.25;}
mesh(new THREE.PlaneGeometry(110,150),new THREE.MeshStandardMaterial({color:'#164b44',map:stoneMap,roughness:.55,metalness:.22}),0,-4,-25).rotation.x=-Math.PI/2;
// Inlaid route markings and carved round medallions.
for(let z=6;z>-43;z-=5){const disk=cylinder(1.7,1.7,.055,0,-3.2,z,jade);mesh(new THREE.TorusGeometry(1.42,.035,6,64),bronze,0,-3.16,z).rotation.x=Math.PI/2;for(let i=0;i<8;i++){const a=i*Math.PI/4;mesh(new THREE.TorusGeometry(.29,.025,5,24),marble,Math.sin(a)*.9,-3.14,z+Math.cos(a)*.9).rotation.x=Math.PI/2;}}
// Amber oculus framed by concentric carved stone rims.
const oculusStone=new THREE.MeshStandardMaterial({color:'#c8b38c',map:stoneMap,roughness:.72,emissive:'#b77b32',emissiveIntensity:.45,fog:false});
for(let n=0;n<4;n++)mesh(new THREE.TorusGeometry(3.9+n*.24,.11,12,96),oculusStone,0,7,-52-n*.13);
// A luminous interior, not an overlay: ordinary depth testing retains every vault in front.
const oculusLight=new THREE.ShaderMaterial({vertexShader:'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec2 vUv; void main(){float r=length(vUv-.5)*2.0; vec3 edge=vec3(.66,.31,.085); vec3 heart=vec3(1.0,.78,.40); gl_FragColor=vec4(mix(heart,edge,smoothstep(.12,1.0,r)),1.0);\n #include <tonemapping_fragment>\n #include <colorspace_fragment>\n}'});
const portal=mesh(new THREE.CircleGeometry(3.87,96),oculusLight,0,7,-53);
for(let n=0;n<24;n++){const a=n*Math.PI/12;const r=4.7;const detail=mesh(new THREE.SphereGeometry(.14,10,8),bronze,Math.cos(a)*r,7+Math.sin(a)*r,-52.2);detail.scale.y=1.8;detail.rotation.z=a-Math.PI/2;}
// Tall light volumes: fragment fade at edges and along depth prevents solid cone silhouettes.
const beamMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{t:{value:0}},vertexShader:'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec2 vUv; uniform float t; void main(){float edge=pow(sin(vUv.x*3.14159),3.0); float end=sin(vUv.y*3.14159); float striation=.65+.35*sin(vUv.x*120.0+t*.2); gl_FragColor=vec4(.62,.82,.64,edge*end*striation*.036);}'});
for(let i=0;i<6;i++){const beam=mesh(new THREE.CylinderGeometry(.55,3.5,25,24,1,true),beamMaterial,7-i*1.5,9,-4-i*9);beam.rotation.z=-.28;}
// Water caustics on an offset floor membrane.
const waterMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{t:{value:0}},vertexShader:'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec2 vUv; uniform float t; void main(){vec2 p=vUv*110.0; float a=sin(p.x+sin(p.y*.8+t*.14)*2.0); float b=sin(p.y+sin(p.x*.72-t*.1)*2.5); float caustic=pow(max(0.0,1.0-abs(a+b)*3.0),5.0); gl_FragColor=vec4(.42,.8,.67,caustic*.22+.035);}'});
mesh(new THREE.PlaneGeometry(90,120,1,1),waterMaterial,0,-3.10,-25).rotation.x=-Math.PI/2;
const particlesGeometry=new THREE.BufferGeometry(),positions=[];for(let i=0;i<(innerWidth<700?180:420);i++)positions.push((random()-.5)*24,random()*17-3,random()*75-58);particlesGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));const particles=new THREE.Points(particlesGeometry,new THREE.PointsMaterial({color:'#c9e8c9',size:.04,transparent:true,opacity:.55,depthWrite:false}));scene.add(particles);
// Batch fixed stonework by material to keep mobile draw-call cost bounded.
scene.updateMatrixWorld(true);
for(const material of [marble,jade,bronze]){
 const originals=[];scene.traverse(object=>{if(object.isMesh&&object.material===material)originals.push(object);});
 const parts=originals.map(object=>{let g=object.geometry.index?object.geometry.toNonIndexed():object.geometry.clone();g.applyMatrix4(object.matrixWorld);return g;});
 const merged=new THREE.BufferGeometry();
 for(const name of ['position','normal','uv']){const size=parts[0].getAttribute(name).itemSize;const count=parts.reduce((sum,g)=>sum+g.getAttribute(name).array.length,0);const values=new Float32Array(count);let offset=0;for(const g of parts){const valuesPart=g.getAttribute(name).array;values.set(valuesPart,offset);offset+=valuesPart.length;}merged.setAttribute(name,new THREE.BufferAttribute(values,size));}
 originals.forEach(object=>{object.parent.remove(object);object.geometry.dispose();});parts.forEach(g=>g.dispose());scene.add(new THREE.Mesh(merged,material));
}
// Start inside the pier line so the terminal bay is not hidden behind a column.
// Mobile looks slightly lower, placing the destination above the reading layer.
function setCamera(p){const mobile=innerWidth<700;
// Arrival / approach / turn / oculus: positions remain inside the original piers.
const positions=[mobile?[-2,5.3,19]:[-4.2,5.3,19],[-1.6,3.7,3],[3.8,2.5,-12],[1.9,2.2,-27],[0,3.8,-42]];
const targets=[mobile?[-3.5,-4.5,-20]:[-4,5.7,-20],[0,5.6,-25],[-1,4.8,-37],[0,6,-49],[0,7,-53]];
const index=Math.min(3,Math.floor(p*4)),f=p>=1?1:p*4-index,u=f*f*(3-2*f);
const mix=(points)=>points[index].map((v,i)=>v+(points[index+1][i]-v)*u);
camera.position.set(...mix(positions));camera.lookAt(...mix(targets));
scene.fog.density=.026-Math.sin(p*Math.PI)*.004;
}
function render(){if(unavailable)return;setCamera(reduced?0:progress);const drawStart=performance.now();renderer.render(scene,camera);const renderMs=performance.now()-drawStart;draws++;window.__scene={ready:true,webgl:true,reduced,paused,progress,targetProgress,draws,renderMs,camera:camera.position.toArray(),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles};}
const chapters=[...document.querySelectorAll('main>section')];
function scroll(){if(unavailable)return;let index=0;while(index<chapters.length-1&&scrollY>=chapters[index+1].offsetTop)index++;const start=chapters[index].offsetTop,end=chapters[index+1]?.offsetTop??start;targetProgress=Math.min(1,(index+(end>start?(scrollY-start)/(end-start):0))/(chapters.length-1));if(!frame&&!reduced){progress=targetProgress;render();}}
function tick(now){frame=0;if(unavailable||document.hidden)return;const elapsed=Math.min((now-last)/1000,.05);last=now;if(!paused&&!reduced){time+=elapsed;progress+=(targetProgress-progress)*(1-Math.exp(-elapsed*9));particles.position.y=Math.sin(time*.12)*.18;beamMaterial.uniforms.t.value=time;waterMaterial.uniforms.t.value=time;render();frame=requestAnimationFrame(tick);}}
function resume(){if(!unavailable&&!paused&&!reduced&&!document.hidden&&!frame){last=performance.now();frame=requestAnimationFrame(tick);}}
function controls(){if(unavailable)return;button.disabled=reduced;button.textContent=reduced?'Motion reduced':paused?'Resume atmosphere':'Pause atmosphere';button.setAttribute('aria-pressed',String(paused));status.textContent=reduced?'Stationary architectural study':paused?'Atmosphere paused · scroll still moves the camera':'Live architectural study';}
button.addEventListener('click',()=>{paused=!paused;controls();if(paused&&frame){cancelAnimationFrame(frame);frame=0;}render();resume();});
preference.addEventListener('change',e=>{reduced=e.matches;if(frame){cancelAnimationFrame(frame);frame=0;}controls();render();resume();});
addEventListener('scroll',scroll,{passive:true});addEventListener('resize',()=>{if(unavailable)return;camera.aspect=innerWidth/innerHeight;camera.fov=innerWidth<700?65:55;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);scroll();render();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else resume();});canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();if(frame)cancelAnimationFrame(frame);fallback();});
controls();scroll();render();resume();
}catch(error){console.warn('WebGL unavailable; readable fallback remains.',error.message);fallback();}
