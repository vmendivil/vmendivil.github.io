# Run and review

From this directory:

```sh
python3 -m http.server 9118 --bind 127.0.0.1
```

Open http://127.0.0.1:9118/. This is a private worker preview; parent owns LAN assembly. Stop the worker server after checks. Runtime assembly copies **index.html, style.css, main.js, assets/** only. Do not publish this documentation, verification code or archived research.

## Reproduce
Existing Playwright is read-only at `/home/trex/vhmc/projects/devPilot/node_modules/playwright`.

```sh
node render-stills.cjs
node verify.cjs
```

`render-stills.cjs` creates six text-free original stills, with independent wide and portrait cameras. Run `provenance.py` in the existing Hermes Python environment with Pillow to add provenance metadata and regenerate the manifest/evidence boards; system `python3` here does not have Pillow. No packages were installed.

Shipping PNGs are original render captures, not copies of creator footage or reference screenshots. Manrope font and Three.js are locally hosted with their licenses. No external runtime CDN, trackers or form delivery.

## Review packet
- `PRODUCT.md`, `SURFACE.md`, `DESIGN.md`, `.impeccable/design.json`
- `results.json`, `.impeccable/review/browser-stdout.txt`
- `.impeccable/review/detector-raw.json`, `detector-stderr.txt` (single run, pre-mechanical corrections)
- `.impeccable/review/desktop.png`, `mobile.png`, `landscape.png`
- `content-*` are true viewport screenshots with navigation; `reading-*`, `approach-*`, `curiosity-*`, `contact-*` are complete-section captures with fixed chrome temporarily hidden to avoid screenshot stitching artifacts. Runtime chrome was not removed.
- `menu-*`, `scene-0-*`, `scene-1-*`, `scene-2-*`, `reduce.png`, `webgl-disabled.png`
- `asset-provenance.json` and embedded PNG text provenance

Physical Safari/iPhone behavior, real-device GPU performance, reference-level visual fidelity, independent comparative acceptance and assembled LAN verification are not established by worker tests. Parent must perform the fresh cross-study review and runtime assembly checks. No production authorization is implied.
