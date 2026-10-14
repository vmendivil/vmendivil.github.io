"""Record verified inspiration URLs without changing any prototype runtime."""
from pathlib import Path
import hashlib, json
from urllib.parse import urlsplit
root = Path(__file__).resolve().parent
sources = {
 1: ('https://bruno-simon.com/', None),
 2: ('https://joshuas.world/?ref=landing.love', 'https://www.landing.love/sites/joshuas-world/'),
 3: ('https://henryheffernan.com/', None),
 4: ('https://bilal.show/', None),
 5: ('https://www.thibault-introvigne.com/', None),
 6: ('https://ameen-abdullah.dev/', 'https://www.landing.love/sites/ameen-abdullah/'),
 7: ('https://rohit-harish.com/', 'https://www.landing.love/sites/rohit-harish/'),
 8: ('https://joseph-san.com/', 'https://www.landing.love/sites/joseph-san-2/'),
 9: ('https://www.natalieliu.com/', 'https://www.landing.love/sites/natalieliu/'),
 10: ('https://petertarka.com/', 'https://www.refs.gallery/projects/peter-tarka'),
 11: ('https://felixrieseberg.com/?ref=landing.love', 'https://www.landing.love/sites/felixrieseberg/'),
 12: ('https://www.vectrfl.com/?ref=landing.love', 'https://www.landing.love/sites/vectrfl/'),
 13: ('https://aengel.io', 'https://www.awwwards.com/sites/arthur-engel-portfolio'),
 14: ('https://www.product.inc/#resume', 'https://www.awwwards.com/sites/alex-zapadenko-portfolio'),
 15: ('https://preymaker.com/', 'https://www.awwwards.com/sites/preymaker'),
 16: ('https://www.dwaynekoh.com/', 'https://www.awwwards.com/sites/lantern-house'),
 17: ('https://eddy-naboulet.dev/', 'https://www.awwwards.com/sites/eddyos-eddy-naboulet'),
 18: ('https://www.artisansdidees.com/en?ref=refs.gallery', None),
 19: ('https://www.rokumaruichi.tokyo/#4f', None),
 20: ('https://alphamark.design/?ref=refs.gallery', None),
 21: ('https://artemiilebedev.com/work', None),
}
manifest = root/'preview/manifest.json'
rows = json.loads(manifest.read_text())
assert len(rows) == len(sources) == 21
assert {r['number'] for r in rows} == set(sources)
for row in rows:
    source, reference = sources[row['number']]
    assert urlsplit(source).scheme == 'https' and urlsplit(source).netloc
    row.update(source_url=source, reference_url=reference)
# Capture preservation evidence; this task must not unblock or mutate 18's image.
protected = {str(p.relative_to(root)): hashlib.sha256(p.read_bytes()).hexdigest()
             for parent in (root/'preview', root/'studies')
             for row in rows for p in (parent/row['slug']).rglob('*')
             if p.is_file() and not any(x.startswith('.') for x in p.relative_to(parent/row['slug']).parts)}
(root/'source-links-preservation.json').write_text(json.dumps(protected, indent=2)+'\n')
tmp = manifest.with_suffix('.json.next')
tmp.write_text(json.dumps(rows, indent=2)+'\n'); tmp.replace(manifest)
print('21 source URLs recorded; prototype files and 18 metadata untouched.')
