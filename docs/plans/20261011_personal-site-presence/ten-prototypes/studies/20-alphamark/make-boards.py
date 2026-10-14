from pathlib import Path
import subprocess,json
p=Path('.impeccable/review');manifest={}
for kind,w,h,batch,cols in [('mobile',390,844,3,3),('desktop',720,450,4,2),('landscape',844,390,4,2)]:
 files=sorted([f for f in p.glob('*.png') if f.stem==kind or f.stem.endswith('-'+kind)])
 for n in range(0,len(files),batch):
  group=files[n:n+batch];cmd=['ffmpeg','-hide_banner','-loglevel','error','-y']
  for f in group:cmd+=['-i',str(f)]
  filters=[f'[{i}:v]scale={w}:{h},setsar=1[v{i}]' for i in range(len(group))]
  if len(group)>1:filters+=[''.join(f'[v{i}]' for i in range(len(group)))+f'xstack=inputs={len(group)}:layout='+ '|'.join(f'{(i%cols)*w}_{(i//cols)*h}' for i in range(len(group)))+'[out]']
  else:filters[-1]=filters[-1].replace('[v0]','[out]')
  out=p/f'board-{kind}-{n//batch}.png';cmd+=['-filter_complex_threads','1','-filter_complex',';'.join(filters),'-map','[out]','-frames:v','1',str(out)]
  subprocess.run(cmd,check=True);manifest[str(out)]=[str(f) for f in group]
Path('capture-boards.json').write_text(json.dumps(manifest,indent=2));print(json.dumps(manifest))
