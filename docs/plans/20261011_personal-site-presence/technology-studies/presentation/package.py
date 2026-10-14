from pathlib import Path
import json, re, zipfile, posixpath
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parent.parent
names = ['01-computation','02-kinetic','03-ecology','04-assembly','05-fieldnotes']
labels = ['01 Computation','02 Kinetic','03 Hardware','04 Assembly','05 Fieldnotes']
out = root / 'presentation'
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 22)
for viewport, height in [('desktop', 340), ('mobile', 910)]:
    board = Image.new('RGB', (2000, height), '#141414')
    draw = ImageDraw.Draw(board)
    for i, (name, label) in enumerate(zip(names, labels)):
        image = Image.open(root/name/'.impeccable/review'/f'{viewport}.png').convert('RGB')
        image.thumbnail((392, height-50))
        board.paste(image, (i*400+4, 48))
        draw.text((i*400+10, 10), label, fill='white', font=font)
    board.save(out/f'{viewport}-comparison.jpg', quality=95)
manifest = []
allowed = {'.css','.js','.woff','.woff2','.ttf','.otf','.png','.jpg','.jpeg','.webp','.svg'}
archive = out/'five-technology-studies.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as z:
    for name in names:
        folder = root/name
        count = 0
        for f in folder.rglob('*'):
            rel = f.relative_to(folder)
            if not f.is_file() or any(part.startswith('.') for part in rel.parts):
                continue
            runtime = len(rel.parts)==1 and (f.name=='index.html' or f.suffix in {'.css','.js','.woff','.woff2','.ttf','.otf'})
            asset = rel.parts[0] in {'assets','fonts'} and (f.suffix.lower() in allowed or 'LICENSE' in f.name.upper() or f.name=='PROVENANCE.md')
            if runtime or asset:
                z.write(f, str(Path(name)/rel))
                count += 1
        manifest.append({'concept':name,'label':labels[names.index(name)],'packaged_files':count})
    z.writestr('OPEN.txt','Local design studies only, not a deployed site.\nOpen each folder/index.html in your browser.\n03-ecology is now the photographic Hardware concept; the folder name is historical.\n')
with zipfile.ZipFile(archive) as z:
    entries = set(z.namelist())
    missing = []
    for n in entries:
        if Path(n).suffix not in {'.html','.css'}:
            continue
        for pair in re.findall(r'(?:src|href)=[\"\x27]([^\"\x27]+)|url\([\"\x27]?([^\"\x27)]+)', z.read(n).decode()):
            ref = next((x for x in pair if x), '').split('#')[0].split('?')[0]
            if not ref or ref.startswith(('http:','https:','data:','mailto:','tel:','/')):
                continue
            target = posixpath.normpath(str(Path(n).parent/ref))
            if target not in entries and target+'/index.html' not in entries:
                missing.append([n,ref])
    assert not missing, missing
    assert len(manifest)==5
print(json.dumps({'manifest':manifest,'missing_dependencies':missing,'archive_bytes':archive.stat().st_size},indent=2))
(out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
