from pathlib import Path
from PIL import Image, ImageDraw, PngImagePlugin
import json, hashlib, sys
root=Path(__file__).parent
assets=[]
for path in sorted((root/'assets').glob('*.png')):
    image=Image.open(path)
    meta=PngImagePlugin.PngInfo()
    meta.add_text('Source','Original synthetic landscape authored in studies/18-artisans/main.js; Three.js rendering, not an image-generation model.')
    meta.add_text('Creation','node render-stills.cjs on local port 9118. Separate wide and portrait camera. No source-reference pixels, shaders, or models.')
    if not sys.argv[1:] or path.stem in sys.argv[1:]:
        if path.stem=='cyan-portrait':
            meta.add_text('Composition','Portrait moon x=4, y=18, z=-145; same authored camera and terrain; whole silhouette clear of heading. Wide composition unchanged.')
        image.save(path,pnginfo=meta)
    assets.append({'file':str(path.relative_to(root)),'origin':'original procedural landscape','dimensions':list(image.size),'sha256':hashlib.sha256(path.read_bytes()).hexdigest()})
(root/'asset-provenance.json').write_text(json.dumps({'assets':assets,'runtimeLibrary':'Vendored Three.js (MIT), library only; no sibling scene code copied.','font':'Manrope, Google Fonts repository / ofl/manrope, SIL OFL 1.1.','reference':'Artisans d’idées archived creator imagery inspected privately; no reference imagery ships.'},indent=2))
shots=sorted((root/'.impeccable/review').glob('*.png'))
for start in range(0,len(shots),9):
    batch=shots[start:start+9];board=Image.new('RGB',(1200,1200),'#202822');draw=ImageDraw.Draw(board)
    for i,path in enumerate(batch):
        image=Image.open(path);image.thumbnail((380,350));x=(i%3)*400;y=(i//3)*400
        board.paste(image,(x,y+30));draw.text((x+10,y+7),path.name,fill='#ffffff')
    board.save(root/f'.impeccable/review/evidence-board-{start//9}.jpg')
raw=json.loads((root/'.impeccable/review/detector-raw.json').read_text())
print(json.dumps({'shippingStills':len(assets),'captureCount':len(shots),'detectorFindings':len(raw),'boards':(len(shots)+8)//9}))
