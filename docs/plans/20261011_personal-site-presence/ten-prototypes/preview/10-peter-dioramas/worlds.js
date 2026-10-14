import * as T from './assets/three.module.js';
const canvas=document.querySelector('#world');
const places=[{title:'The homelab garden',copy:'A little room for servers, experiments, and the satisfaction of getting things to work.',alt:'An original miniature homelab garden with ceramic arches, tiny server racks, plants and a curved bridge'},{title:'The everyday workshop',copy:'An imagined home for useful automation: small tools, thoughtful processes, fewer repetitive steps.',alt:'An original miniature peach workshop with a conveyor, tiny robotic arm, tool wall and mint greenhouse'},{title:'The curiosity observatory',copy:'A place to look a little further — inspired by my interest in AI-assisted work and web apps.',alt:'An original miniature lavender observatory with a telescope, curved staircase, book collection and garden'}];
let current=0,renderer,scene,camera,world;
const palette={cream:0xffefdb,mint:0x9bcab9,peach:0xeba58d,lavender:0xb2a2d4,ink:0x354b70,blue:0x76a7be,leaf:0x598979,pink:0xe9b6c0,yellow:0xf2cd7d,white:0xfff9ef};
const mats=Object.fromEntries(Object.entries(palette).map(([k,c])=>[k,new T.MeshPhysicalMaterial({color:c,roughness:k==='leaf'?.7:.28,metalness:0,clearcoat:k==='leaf'?0:.65,clearcoatRoughness:.22})]));
mats.glass=new T.MeshPhysicalMaterial({color:0xb7e4d8,transparent:true,opacity:.3,roughness:.1,clearcoat:1,side:T.DoubleSide,depthWrite:false});
let group,keyLight;
const reduced=matchMedia("(prefers-reduced-motion: reduce)");
let angle=-.12,targetAngle=-.12,zoom=1,targetZoom=1,lightAngle=0,targetLight=0,frame=0,visible=true,paused=false,draws=0;
window.fidelityState=()=>({draws,frame,current,angle,zoom,paused,visible,hidden:document.hidden});
function mesh(geo,mat,x,y,z){const o=new T.Mesh(geo,mats[mat]||mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;group.add(o);return o}
function box(w,h,d,x,y,z,m='cream',r=.07){const s=new T.Shape();const a=-w/2,b=-h/2;s.moveTo(a+r,b);s.lineTo(a+w-r,b);s.quadraticCurveTo(a+w,b,a+w,b+r);s.lineTo(a+w,b+h-r);s.quadraticCurveTo(a+w,b+h,a+w-r,b+h);s.lineTo(a+r,b+h);s.quadraticCurveTo(a,b+h,a,b+h-r);s.lineTo(a,b+r);s.quadraticCurveTo(a,b,a+r,b);const geo=new T.ExtrudeGeometry(s,{depth:d,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:12});geo.translate(0,0,-d/2);return mesh(geo,m,x,y,z)}
function cyl(r,h,x,y,z,m='cream',r2=r){return mesh(new T.CylinderGeometry(r2,r,h,64),m,x,y,z)}
function sphere(r,x,y,z,m='cream',sx=1,sy=1,sz=1){const o=mesh(new T.SphereGeometry(r,32,24),m,x,y,z);o.scale.set(sx,sy,sz);return o}
function torus(r,t,x,y,z,m='cream',arc=Math.PI*2){return mesh(new T.TorusGeometry(r,t,12,80,arc),m,x,y,z)}
function line(points,r,m='cream'){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));return mesh(new T.TubeGeometry(curve,48,r,8,false),m,0,0,0)}
function plant(x,y,z,scale=1){cyl(.19*scale,.32*scale,x,y+.16*scale,z,'peach',.23*scale);cyl(.235*scale,.055*scale,x,y+.31*scale,z,'cream');cyl(.16*scale,.015*scale,x,y+.342*scale,z,'ink');for(let j=0;j<6;j++){const a=j*2.399;const o=sphere(.17*scale,x+Math.cos(a)*.13*scale,y+(.47+j*.045)*scale,z+Math.sin(a)*.13*scale,'leaf',.6,1.8,.4);o.rotation.z=Math.cos(a)*.65;o.rotation.x=Math.sin(a)*.65}}
function tree(x,y,z,scale=1,m='mint'){cyl(.055*scale,.8*scale,x,y+.4*scale,z,'peach');sphere(.34*scale,x,y+1.0*scale,z,m,1,1.65,1);sphere(.25*scale,x-.19*scale,y+.86*scale,z+.06*scale,m,1,1.3,1)}
function stair(x,y,z,n=9,w=.8,dir=0){const g=new T.Group();group.add(g);const original=group;group=g;for(let i=0;i<n;i++)box(w,.12*(i+1),.18,x,y+.06*(i+1),z-i*.18,'cream',.012);group=original;g.rotation.y=dir;return g}
function arch(x,y,z,r=1.15,m='peach',depth=.22){const shape=new T.Shape();shape.moveTo(-r,0);shape.lineTo(-r,r);shape.absarc(0,r,r,Math.PI,0,true);shape.lineTo(r,0);shape.lineTo(r-.25,0);shape.lineTo(r-.25,r);shape.absarc(0,r,r-.25,0,Math.PI,false);shape.lineTo(-r+.25,0);shape.closePath();return mesh(new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:.04,bevelSize:.035,bevelSegments:4,curveSegments:48}),m,x,y,z)}
function railing(r,y,cx,cz,start=0,end=Math.PI){for(let a=start;a<=end+.01;a+=.16){cyl(.018,.38,cx+Math.cos(a)*r,y+.19,cz+Math.sin(a)*r,'cream')}line(Array.from({length:40},(_,i)=>{let a=start+(end-start)*i/39;return[cx+Math.cos(a)*r,y+.39,cz+Math.sin(a)*r]}),.024,'cream')}
function server(x,y,z){box(.5,1.3,.48,x,y+.65,z,'ink');for(let i=0;i<6;i++){box(.42,.13,.035,x,y+.16+i*.18,z+.27,'lavender',.012);for(let j=0;j<4;j++)box(.012,.07,.02,x-.14+j*.07,y+.16+i*.18,z+.30,'ink',.003);sphere(.019,x+.17,y+.16+i*.18,z+.3,i%2?'mint':'yellow')} }
function tiles(cx,y,cz,r,m='cream'){for(let i=0;i<20;i++){let a=i*.72,rr=.25+i*.055;if(rr<r)cyl(.09,.018,cx+Math.cos(a)*rr,y,cz+Math.sin(a)*rr,m)}}
function pool(x,y,z,r=1){cyl(r,.17,x,y,z,'cream');cyl(r-.09,.045,x,y+.1,z,'blue');for(let i=0;i<4;i++){const t=torus(.14+i*.12,.009,x+.15,y+.127,z-.1,'cream');t.rotation.x=Math.PI/2}for(let i=0;i<5;i++){sphere(.05,x-.5+i*.14,y+.16,z+.4,'pink',1,.4,1)}}
function bench(x,y,z){for(let i=0;i<4;i++)box(.75,.035,.07,x,y+.32,z+i*.085,'peach',.01);for(const xx of [-.27,.27])box(.05,.3,.37,x+xx,y+.15,z+.12,'cream');box(.75,.28,.045,x,y+.53,z-.06,'peach')}
function book(x,y,z,m='peach'){box(.09,.35,.24,x,y+.175,z,m,.008);box(.075,.29,.22,x,y+.175,z+.013,'cream',.005)}
function homelab(){
 cyl(2.9,.36,0,.2,0,'cream');cyl(2.87,.09,0,.42,0,'mint');
 cyl(1.7,.65,-.4,.78,-.65,'lavender');cyl(1.67,.08,-.4,1.145,-.65,'cream');
 cyl(1.35,.5,-.5,1.41,-1,'peach');cyl(1.32,.06,-.5,1.69,-1,'cream');
 // Sculpture-like double arch, perpendicular return and glazed ribbed crown.
 arch(-.52,1.72,-1.38,1.03,'mint',.34);const a=arch(-1.65,1.19,-.2,.67,'cream',.25);a.rotation.y=Math.PI/2;
 for(let i=0;i<13;i++) {const aa=i*Math.PI/12; sphere(.045,-.52+Math.cos(aa)*1.04,2.75+Math.sin(aa)*1.04,-1.40,'cream',1,1,2)}
 server(-.86,1.72,-1.05);server(-.18,1.72,-1.05);
 box(.8,.055,.6,.45,1.76,-.5,'cream');for(const x of [.18,.72])cyl(.025,.34,x,1.56,-.5,'peach');box(.38,.25,.05,.45,1.95,-.72,'ink');box(.33,.2,.018,.45,1.95,-.68,'blue');box(.4,.02,.15,.45,1.79,-.43,'lavender');cyl(.055,.09,.8,1.84,-.42,'peach');
 line([[-.9,1.75,-.75],[-.95,1.78,-.36],[-.3,1.73,-.25],[.45,1.76,-.3]],.018,'pink');
 stair(.86,.5,.83,10,.75);railing(1.56,1.2,-.4,-.65,0,.8);railing(1.56,1.2,-.4,-.65,2.25,3.5);
 pool(-.15,.51,1.3,.98);
 // Curved footbridge with individual deck slats and delicate balustrade.
 for(let i=0;i<15;i++){let t=i/14,x=-1.27+t*2.25,y=.64+Math.sin(t*Math.PI)*.28;box(.145,.045,.46,x,y,1.27,'peach',.008);if(i%2===0)for(const z of [1.01,1.53])cyl(.018,.25,x,y+.15,z,'cream')}
 for(const z of [1.01,1.53])line(Array.from({length:30},(_,i)=>[-1.27+i/29*2.25,.95+Math.sin(i/29*Math.PI)*.28,z]),.022,'cream');
 tree(-2,.49,-.5,1.0,'mint');tree(1.9,.49,-.4,.8,'pink');tree(-1.8,.49,1.3,.68,'lavender');plant(1.05,1.2,-1.0,.8);plant(-1.4,1.72,-1.4,.6);plant(1.65,.49,.83,.85);bench(-1.9,.49,.3);tiles(1.8,.5,1.0,.6);cyl(.28,.16,1.85,.58,-1.3,'peach');sphere(.23,1.85,.85,-1.3,'yellow');
 // Tiny hardware on its own round garden table.
 cyl(.4,.045,1.5,.9,-.4,'cream');cyl(.06,.4,1.5,.7,-.4,'peach');box(.32,.09,.23,1.5,.98,-.4,'leaf');for(let i=0;i<8;i++)box(.014,.035,.024,1.37+i*.037,1.025,-.3,'yellow',.001);
}
function workshop(){
 cyl(2.75,.34,0,.19,0,'cream');cyl(2.72,.07,0,.4,0,'peach');
 box(2.9,.24,1.9,-.35,.57,-.62,'cream',.25);
 box(2.85,2.1,.18,-.35,1.7,-1.45,'peach',.15);box(.16,2.1,1.6,-1.7,1.7,-.62,'peach',.08);
 arch(.92,.7,-1.33,.58,'cream',.2);
 // scalloped canopy with separate ceramic roof ribs
 for(let i=0;i<19;i++){let x=-1.76+i*.15;line([[x,2.85,-1.5],[x,3.02,-1.05],[x,2.94,-.52],[x,2.72,-.12]],.075,'lavender')}
 for(const x of [-1.6,.77])cyl(.035,2.0,x,1.71,-.15,'cream');
 box(1.7,.085,.55,-.3,1.18,-.75,'mint');for(const x of [-.96,.36])box(.08,.5,.4,x,.9,-.75,'cream');
 box(1.35,.65,.06,-.45,2.08,-1.31,'ink');for(let i=0;i<8;i++)for(let j=0;j<3;j++)sphere(.016,-1+i*.16,1.86+j*.17,-1.26,'cream');
 for(let i=0;i<4;i++){line([[-.95+i*.3,2.27,-1.2],[-.95+i*.3,1.98,-1.2]],.025,i%2?'yellow':'peach');torus(.064,.018,-.95+i*.3,2.32,-1.2,'cream')}
 // Toolboxes, little parts and desk lamp
 box(.32,.18,.25,-.7,1.31,-.7,'ink');box(.16,.1,.14,-.2,1.29,-.8,'yellow');line([[.34,1.22,-.9],[.34,1.65,-.9],[.12,1.77,-.9]],.03,'cream');const shade=cyl(.12,.18,.08,1.73,-.9,'peach',.04);shade.rotation.z=-.7;
 // Conveyor of individually shaped wheels, parts and ceramic automation arm.
 box(1.8,.15,.55,.5,.88,.64,'ink');for(let i=0;i<14;i++){const r=cyl(.085,.54,-.34+i*.13,.98,.64,'cream');r.rotation.x=Math.PI/2}
 for(const x of [-.25,1.22])for(const z of [.45,.82])cyl(.04,.45,x,.62,z,'lavender');for(let i=0;i<4;i++)box(.18,.16,.18,-.13+i*.35,1.1,.64,i%2?'mint':'peach');
 cyl(.32,.2,-1.05,.55,.73,'lavender');cyl(.14,.4,-1.05,.84,.73,'cream');sphere(.18,-1.05,1.12,.73,'peach');line([[-1.05,1.12,.73],[-.92,1.59,.73],[-.42,1.63,.73],[-.34,1.34,.73]],.075,'cream');sphere(.12,-.92,1.59,.73,'ink');sphere(.11,-.42,1.63,.73,'peach');line([[-.4,1.32,.73],[-.47,1.22,.73]],.02,'ink');line([[-.28,1.32,.73],[-.21,1.22,.73]],.02,'ink');
 // Greenhouse: airy bent glasshouse vocabulary, no glass-dependent readability.
 cyl(.67,.28,1.78,.56,-.7,'mint');for(let i=0;i<6;i++){let aa=i*Math.PI/3;line([[1.78+Math.cos(aa)*.53,.7,-.7+Math.sin(aa)*.53],[1.78+Math.cos(aa)*.53,1.5,-.7+Math.sin(aa)*.53],[1.78,1.85,-.7]],.026,'cream')};railing(.55,.95,1.78,-.7,0,Math.PI*2);for(let i=0;i<6;i++){const a=i*Math.PI/3,b=a+Math.PI/3;const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute([1.78+Math.cos(a)*.53,.7,-.7+Math.sin(a)*.53,1.78+Math.cos(b)*.53,.7,-.7+Math.sin(b)*.53,1.78+Math.cos(a)*.53,1.5,-.7+Math.sin(a)*.53,1.78+Math.cos(b)*.53,.7,-.7+Math.sin(b)*.53,1.78+Math.cos(b)*.53,1.5,-.7+Math.sin(b)*.53,1.78+Math.cos(a)*.53,1.5,-.7+Math.sin(a)*.53],3));geo.computeVertexNormals();const pane=mesh(geo,mats.glass,0,0,0);pane.castShadow=false;}plant(1.78,.7,-.7,.9);plant(1.78,.42,.6,.8);plant(-2,.42,.4,.7);tree(-1.5,.42,1.7,.8,'mint');tree(.75,.42,1.8,.65,'lavender');tiles(.1,.45,1.65,1);bench(-.15,.43,1.6);for(let i=0;i<3;i++)cyl(.1,.12,-1.17+i*.2,1.3,-.85,'pink');
}
function observatory(){
 cyl(2.75,.35,0,.2,0,'cream');cyl(2.72,.08,0,.43,0,'lavender');
 cyl(1.55,.6,-.3,.77,-.55,'peach');cyl(1.51,.09,-.3,1.12,-.55,'cream');
 cyl(1.03,1.8,-.55,2.07,-.9,'mint');
 // Dome is a hollow shell, split opening, rim and individually articulated ribs.
 const dome=mesh(new T.SphereGeometry(1.09,64,32,.18,Math.PI*2-.36,0,Math.PI/2),'lavender',-.55,2.97,-.9);dome.rotation.y=-.15;
 const rim=torus(1.05,.075,-.55,2.98,-.9,'cream');rim.rotation.x=Math.PI/2;
 for(let i=0;i<11;i++){let a=i*Math.PI*2/11;line(Array.from({length:25},(_,j)=>{let t=j/24*Math.PI/2;return[-.55+Math.cos(a)*1.10*Math.sin(t),2.97+1.10*Math.cos(t),-.9+Math.sin(a)*1.10*Math.sin(t)]}),.011,'cream')}
 // Arched portal over dark glazing.
 const portal=arch(-.55,1.18,.09,.55,'cream',.14);box(.68,.85,.04,-.55,1.61,.14,'ink');box(.58,.74,.02,-.55,1.61,.175,'blue');box(.035,.83,.025,-.55,1.61,.195,'cream');
 // Telescope on a separate viewing balcony.
 cyl(.84,.23,1.1,1.38,-.08,'mint');cyl(.81,.05,1.1,1.52,-.08,'cream');railing(.79,1.55,1.1,-.08,-.15,Math.PI*1.15);
 cyl(.045,.68,1.1,1.91,-.08,'ink');for(let i=0;i<3;i++){let a=i*Math.PI*2/3;line([[1.1,2.01,-.08],[1.1+Math.cos(a)*.3,1.58,-.08+Math.sin(a)*.3]],.025,'cream')}
 const telescope=cyl(.14,.7,1.1,2.22,-.08,'cream',.18);telescope.rotation.z=-1.05;const lens=cyl(.13,.03,1.41,2.40,-.08,'ink');lens.rotation.z=-1.05;const eye=cyl(.07,.17,.75,2.01,-.08,'peach');eye.rotation.z=-1.05;
 // Winding stair (individually oriented treads around tower).
 for(let i=0;i<16;i++){let a=.25+i*.115;const b=box(.57,.07,.22,-.3+Math.cos(a)*1.62,.53+i*.065,-.55+Math.sin(a)*1.62,'cream',.015);b.rotation.y=-a; if(i%2===0)cyl(.02,.3,-.3+Math.cos(a)*1.87,.68+i*.065,-.55+Math.sin(a)*1.87,'cream')}
 line(Array.from({length:32},(_,i)=>{let a=.25+i/31*1.725;return[-.3+Math.cos(a)*1.87,.88+i/31*.975,-.55+Math.sin(a)*1.87]}),.025,'cream');
 // Circular reading terrace and a little library.
 cyl(.9,.26,-1.08,.59,1.2,'mint');cyl(.87,.045,-1.08,.74,1.2,'cream');box(.86,.73,.25,-1.13,1.15,1.05,'peach');for(let i=0;i<3;i++)box(.81,.025,.27,-1.13,.84+i*.28,1.06,'cream');for(let i=0;i<7;i++)book(-1.45+i*.105,.87,1.05,['ink','lavender','mint'][i%3]);cyl(.36,.06,-.7,1.02,1.65,'peach');cyl(.04,.24,-.7,.86,1.65,'cream');box(.27,.04,.2,-.7,1.08,1.65,'cream');bench(-1.55,.75,1.58);plant(1.57,.48,1.08,.95);tree(-2,.47,-.35,.95,'pink');tree(1.45,.47,-1.58,.95,'mint');plant(-1.7,1.17,-1.13,.55);pool(.64,.48,1.75,.5);
}
function init(){renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;scene=new T.Scene();camera=new T.OrthographicCamera(-5,5,3.3,-3.3,.1,100);camera.position.set(8,7.5,11);camera.lookAt(0,1.3,0);scene.add(new T.HemisphereLight(0xfff8ee,0xb0a0c6,2.1));const light=keyLight=new T.DirectionalLight(0xfff4df,4.5);light.position.set(-3,8,5);light.castShadow=true;light.shadow.mapSize.set(2048,2048);Object.assign(light.shadow.camera,{left:-5,right:5,top:6,bottom:-5,near:1,far:20});light.shadow.bias=-.0003;light.shadow.normalBias=.03;light.shadow.radius=3;scene.add(light);const fill=new T.DirectionalLight(0xc7dcff,1.3);fill.position.set(5,4,-4);scene.add(fill);const floor=new T.Mesh(new T.PlaneGeometry(200,200),new T.ShadowMaterial({color:0x51446f,opacity:.19}));floor.rotation.x=-Math.PI/2;floor.position.y=-.025;floor.receiveShadow=true;scene.add(floor);build();new ResizeObserver(resize).observe(canvas.parentElement);resize()}
function batchMiniature(){const batches=new Map();world.updateMatrixWorld(true);world.traverse(o=>{if(!o.isMesh)return;const key=o.material.uuid;if(!batches.has(key))batches.set(key,{material:o.material,meshes:[]});batches.get(key).meshes.push(o);});for(const {material,meshes} of batches.values()){const positions=[],normals=[];for(const m of meshes){const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry;const nm=new T.Matrix3().getNormalMatrix(m.matrixWorld),v=new T.Vector3();for(let i=0;i<g.attributes.position.count;i++){v.fromBufferAttribute(g.attributes.position,i).applyMatrix4(m.matrixWorld);positions.push(v.x,v.y,v.z);v.fromBufferAttribute(g.attributes.normal,i).applyNormalMatrix(nm);normals.push(v.x,v.y,v.z);}m.parent.remove(m);}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new T.Float32BufferAttribute(normals,3));const joined=new T.Mesh(geo,material);joined.castShadow=material!==mats.glass;joined.receiveShadow=true;world.add(joined);}}
function build(){if(world){scene.remove(world);world.traverse(o=>{if(o.geometry)o.geometry.dispose()})}group=world=new T.Group();scene.add(world);[homelab,workshop,observatory][current]();batchMiniature();world.rotation.y=angle;resize();window.worldReady=true;canvas.dataset.scene=String(current)}
function resize(){if(!renderer)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);render();}
function render(){if(!renderer||!visible||document.hidden)return;const aspect=canvas.clientWidth/canvas.clientHeight;const span=(aspect<1.4?3.62:3.18)/zoom;camera.left=-span*aspect;camera.right=span*aspect;camera.top=span;camera.bottom=-span;camera.updateProjectionMatrix();world.rotation.y=angle;keyLight.position.set(-3+lightAngle*8,8,5-lightAngle*3);renderer.render(scene,camera);draws++;}
function animate(){if(frame)cancelAnimationFrame(frame);frame=0;if(reduced.matches||paused||!visible||document.hidden){angle=targetAngle;zoom=targetZoom;lightAngle=targetLight;render();return;}let last=performance.now();function tick(now){frame=0;if(document.hidden||!visible)return;const k=1-Math.exp(-(now-last)/110);last=now;angle+=(targetAngle-angle)*k;zoom+=(targetZoom-zoom)*k;lightAngle+=(targetLight-lightAngle)*k;render();if(Math.abs(angle-targetAngle)+Math.abs(zoom-targetZoom)+Math.abs(lightAngle-targetLight)>.001)frame=requestAnimationFrame(tick);else{angle=targetAngle;zoom=targetZoom;lightAngle=targetLight;render();}}frame=requestAnimationFrame(tick);}
function describe(){document.querySelector('#view-state').textContent=`${['Front','Right','Back','Left'][((Math.round((targetAngle+.12)/(Math.PI/2))%4)+4)%4]} view · ${targetZoom>1?'detail lens':'whole miniature'}`;}
function turn(delta){targetAngle+=delta*Math.PI/2;describe();animate();}
document.querySelector('#turn-left').onclick=()=>turn(-1);document.querySelector('#turn-right').onclick=()=>turn(1);
document.querySelector('#detail').onclick=e=>{targetZoom=targetZoom===1?1.27:1;e.currentTarget.setAttribute('aria-pressed',String(targetZoom>1));e.currentTarget.textContent=targetZoom>1?'Whole miniature':'Look closer';describe();animate();};
document.querySelector('#light').onclick=e=>{targetLight=1-targetLight;e.currentTarget.setAttribute('aria-pressed',String(!!targetLight));animate();};
document.querySelector('#motion').onclick=e=>{paused=!paused;e.currentTarget.setAttribute('aria-pressed',String(paused));e.currentTarget.textContent=paused?'Resume movement':'Pause movement';animate();};
reduced.addEventListener('change',animate);document.addEventListener('visibilitychange',animate);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;animate();}).observe(canvas);
function change(delta){current=(current+delta+places.length)%places.length;const p=places[current];document.querySelector('#scene-title').textContent=p.title;document.querySelector('#scene-copy').textContent=p.copy;document.querySelector('#counter').textContent=`${current+1} / 3`;canvas.setAttribute('aria-label',p.alt);const fallback=document.querySelector('#fallback');fallback.src=`assets/world-${current+1}.png`;fallback.alt=p.alt;if(renderer){angle=targetAngle-.28;build();animate();}}
document.querySelector('#next').addEventListener('click',()=>change(1));document.querySelector('#previous').addEventListener('click',()=>change(-1));
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();showFallback()});
function showFallback(){canvas.hidden=true;canvas.style.display='none';document.querySelector('#fallback').hidden=false;document.querySelector('#render-message').hidden=false;renderer=null;if(frame)cancelAnimationFrame(frame);frame=0;document.querySelectorAll('.inspection button').forEach(b=>{b.disabled=true});document.querySelector('#view-state').textContent='Still illustrations · use previous / next';window.worldReady='fallback'}
try{if(new URLSearchParams(location.search).has("fallback"))throw new Error("Requested fallback");init()}catch(e){console.warn('WebGL unavailable; using original rendered stills.',e.message);showFallback()}
