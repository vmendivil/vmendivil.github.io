"""Stage public runtimes only, with selective assembly preserving prior prototypes."""
from pathlib import Path
import argparse, hashlib, json, shutil, re
from PIL import Image

parser=argparse.ArgumentParser()
parser.add_argument('--from-number',type=int,default=1)
parser.add_argument('--only-slug',action='append',default=[])
args=parser.parse_args()
root=Path(__file__).resolve().parent
preview=root/'preview'
manifest_path=preview/'manifest.json'
rows=json.loads(manifest_path.read_text())
assert rows and len({r['slug'] for r in rows})==len(rows)
assert len({r['number'] for r in rows})==len(rows)
selected=[r for r in rows if r['number']>=args.from_number and (not args.only_slug or r['slug'] in args.only_slug)]
assert selected, 'No selected prototypes'
for row in selected:
    assert re.fullmatch(r'[0-9]{2}-[a-z0-9-]+',row['slug']), row['slug']
    assert (root/'studies'/row['slug']/'index.html').is_file(), row['slug']
    assert (root/'studies'/row['slug']/'.impeccable/review/desktop.png').is_file(), row['slug']
# Verify preserved originals before and after an expansion-only assembly.
originals=root/'original-ten-runtime-hashes.json'
def verify_originals():
    if args.from_number<11 or not originals.exists():
        return
    for relative,expected in json.loads(originals.read_text()).items():
        f=preview/relative
        assert f.is_file() and hashlib.sha256(f.read_bytes()).hexdigest()==expected, relative
verify_originals()
runtime_suffixes={'.html','.css','.js','.mjs','.woff','.woff2','.ttf','.otf','.png','.jpg','.jpeg','.webp','.avif','.svg','.ico','.glb','.gltf','.bin','.hdr','.exr','.ktx2','.mp3','.ogg','.wav','.mp4','.webm','.glsl','.vert','.frag','.wasm'}
allowed_dirs={'assets','fonts','vendor','images','models','textures','audio','data'}
stage=root/'.assembly-stage'
backups=root/'.assembly-backup'
stage.mkdir(exist_ok=True);backups.mkdir(exist_ok=True)
report=[]
(preview/'thumbnails').mkdir(exist_ok=True)
# Complete every selected staging directory before changing any served prototype.
for row in selected:
    source=root/'studies'/row['slug']
    target=stage/row['slug']
    if target.exists():shutil.rmtree(target)
    target.mkdir()
    copied=[]
    exact_manifest = source / 'fidelity/pending-shipping.json'
    exact_paths = None
    if exact_manifest.exists():
        handoff = json.loads(exact_manifest.read_text())
        assert handoff['verdict'] == 'READY', row['slug']
        exact_paths = set(handoff['runtimeAllowlist'])
        for rel in exact_paths:
            assert hashlib.sha256((source/rel).read_bytes()).hexdigest() == handoff['sha256'][rel], (row['slug'], rel)
    # Study18's private raster remains blocked. A clone includes the approved
    # preview assets, so always retain those PNGs rather than private variants.
    held_pngs = {}
    if row['slug'] == '18-artisans':
        inventory = json.loads((source / 'closure/shipping-hashes.json').read_text())['shippingHashes']
        for rel, expected in inventory.items():
            if rel.endswith('.png'):
                old = preview / row['slug'] / rel
                assert old.is_file() and hashlib.sha256(old.read_bytes()).hexdigest() == expected, ('Protected served PNG mismatch', rel)
                held_pngs[rel] = old
    for f in source.rglob('*'):
        rel=f.relative_to(source)
        if exact_paths is not None and str(rel) not in exact_paths:continue
        if not f.is_file() or f.is_symlink() or any(x.startswith('.') for x in rel.parts):continue
        if any(x in {'node_modules','test','tests','review','scripts'} for x in rel.parts):continue
        if f.name.lower().startswith(('verify','test','browser-check','inspect-')):continue
        runtime=len(rel.parts)==1 and f.suffix.lower() in runtime_suffixes
        asset=rel.parts[0] in allowed_dirs and f.suffix.lower() in runtime_suffixes|{'.json','.txt'}
        if not(runtime or asset):continue
        if row['slug'] == '18-artisans' and f.suffix.lower() == '.png':continue
        dest=target/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(f,dest);copied.append(str(rel))
    for rel, old in held_pngs.items():
        dest=target/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(old,dest);copied.append(rel)
    screenshot=source/'.impeccable/review/desktop.png'
    image=Image.open(screenshot).convert('RGB');image.thumbnail((960,600))
    image.save(stage/(row['slug']+'.jpg'),quality=90)
    report.append({'slug':row['slug'],'files':copied,'screenshot_source':str(screenshot)})
for row in selected:
    target=preview/row['slug'];backup=backups/row['slug']
    if backup.exists():shutil.rmtree(backup)
    if target.exists():target.rename(backup)
    try:(stage/row['slug']).rename(target)
    except Exception:
        if backup.exists():backup.rename(target)
        raise
    (stage/(row['slug']+'.jpg')).replace(preview/'thumbnails'/(row['slug']+'.jpg'))
    if backup.exists():shutil.rmtree(backup)
    row.update(ready=True,thumbnail='thumbnails/'+row['slug']+'.jpg')
verify_originals()
tmp=manifest_path.with_suffix('.json.next');tmp.write_text(json.dumps(rows,indent=2)+'\n');tmp.replace(manifest_path)
(root/'assembly-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'assembled_this_run':len(selected),'total_entries':len(rows),'ready':sum(r['ready'] for r in rows),'file_counts':{r['slug']:len(r['files']) for r in report}},indent=2))
