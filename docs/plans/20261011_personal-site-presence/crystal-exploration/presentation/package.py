from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json, zipfile
root = Path(__file__).resolve().parent.parent
out = root / 'presentation'
names = ['01-monumental','02-atlas','03-narrative','04-perspectives','05-type-facet']
labels = ['01 Monumental','02 Faceted Atlas','03 Narrative','04 Perspectives','05 Type Facet']
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 23)
boards = {}
for viewport, height, crop_height in [('desktop',800,None),('mobile',1100,1040)]:
    board=Image.new('RGB',(2000,height),'#181818')
    draw=ImageDraw.Draw(board)
    for i,(name,label) in enumerate(zip(names,labels)):
        im=Image.open(root/name/'.impeccable/review'/f'{viewport}.png').convert('RGB')
        limit=crop_height or int(im.width*1.7)
        im=im.crop((0,0,im.width,min(im.height,limit)))
        im.thumbnail((392,height-60))
        draw.text((i*400+12,12),label,fill='white',font=font)
        board.paste(im,(i*400+4,54))
    board.save(out/f'{viewport}-comparison.jpg',quality=92)
manifest=[]
allowed={'.html','.css','.js','.woff','.woff2','.ttf','.otf','.png','.jpg','.jpeg','.webp','.svg','.txt'}
with zipfile.ZipFile(out/'five-crystal-concepts.zip','w',zipfile.ZIP_DEFLATED) as z:
    for name in names:
        p=root/name
        count=0
        for f in p.rglob('*'):
            rel=f.relative_to(p)
            if not f.is_file() or any(x.startswith('.') for x in rel.parts):
                continue
            if f.suffix.lower() in allowed and ((len(rel.parts)==1 and f.name in ['index.html','style.css','script.js','site.js','atlas.css','atlas.js']) or rel.parts[0]=='assets'):
                z.write(f,str(Path(name)/rel))
                count+=1
        manifest.append({'concept':name,'entry':str(p/'index.html'),'packaged_files':count})
(out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
assert len(manifest)==5 and all(x['packaged_files']>1 for x in manifest)
print(json.dumps(manifest,indent=2))
print('archive_bytes=',(out/'five-crystal-concepts.zip').stat().st_size)
