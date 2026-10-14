"""Run after both renderer capture scripts, before browser verification."""
from pathlib import Path
import hashlib, json, struct, zlib
from datetime import datetime, timezone
root = Path(__file__).resolve().parent.parent
scene_hash = hashlib.sha256((root / 'scene.js').read_bytes()).hexdigest()
chapter_capture = json.loads((root / 'verification/chapter-capture-raw.json').read_text())
views = {v['asset']: v for v in chapter_capture['views']}
assets = ['assets/landscape.png', *views]
records = []
for asset in assets:
    path = root / asset
    raw = path.read_bytes()
    width, height = struct.unpack('>II', raw[16:24])
    provenance = {'creator': 'Original Work in Motion study / Victor Mendivil personal-site exploration',
                  'source': 'Locally authored scene.js geometry; no source-site raster, model or code reuse',
                  'scene_sha256': scene_hash, 'method': 'Chromium WebGL canvas capture with self-hosted Three.js',
                  'dimensions': [width, height], 'captured_at_utc': datetime.now(timezone.utc).isoformat(),
                  'illustrative': True, 'real_installation': False,
                  'view': views.get(asset, {'name': 'hero fallback', 'size': 48})}
    payload = b'Provenance\0' + json.dumps(provenance, separators=(',', ':')).encode('ascii')
    chunk = struct.pack('>I', len(payload)) + b'tEXt' + payload + struct.pack('>I', zlib.crc32(b'tEXt' + payload))
    final = raw[:33] + chunk + raw[33:]
    path.write_bytes(final)
    records.append({'asset': asset, 'sha256': hashlib.sha256(final).hexdigest(), 'bytes': len(final), **provenance})
(root / 'verification/asset-provenance.json').write_text(json.dumps({'assets': records}, indent=2) + '\n')
print(json.dumps({'embedded': len(records), 'assets': assets, 'scene_sha256': scene_hash}))
