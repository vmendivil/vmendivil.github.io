from pathlib import Path
import subprocess
import sys
p=Path(__file__).parent/'evidence'/('confirmation' if len(sys.argv)>1 else 'runtime')
names=[f'{n}-{s}' for n in ['desktop','narrow','mobile','wide','landscape','tablet'] for s in ['main','reading','contact']]
for i,name in enumerate(names):
 subprocess.run(['ffmpeg','-v','error','-y','-i',str(p/(name+'.png')),'-vf','scale=360:480:force_original_aspect_ratio=decrease,pad=360:510:(ow-iw)/2:0:color=0xdddddd,drawtext=text='+name+':fontcolor=black:fontsize=18:x=8:y=488',str(p/f'inspect-{i:02}.png')],check=True)
subprocess.run(['ffmpeg','-v','error','-y','-framerate','1','-i',str(p/'inspect-%02d.png'),'-vf','tile=3x6','-frames:v','1',str(p/'inspection-matrix.png')],check=True)
