# Circuit Coast

Original Bruno-inspired exploratory personal technology landscape. Everything needed at runtime is self-hosted and works over ordinary HTTP with WebGL. This study is local design exploration, not production or aesthetic approval.

## Run
From this directory:

```sh
python -m http.server 8911 --bind 127.0.0.1
```

Open `http://127.0.0.1:8911/`. Stop the server with Ctrl-C. The worker's verification server is shut down at handoff. Parent owns LAN assembly.

## Visitor paths
- Drive the six-wheel service rover with WASD/arrows; R resets it. Enter visits a nearby destination when the world is focused.
- Click a physical destination sign or choose any direct-navigation button. Driving is optional.
- Mobile: touch controls use real pointer capture; menu opens all direct destinations.
- Read the field guide; use Next destination, Back to exploring or Escape. LinkedIn is the sole actual contact route.
- Pause freezes both rover and ambient movement. Reduced motion starts static, exposes direct navigation, and immediately relocates the rover on destination selection.
- WebGL failure leaves all five content destinations accessible.

## Shipping files
Copy only `index.html`, `style.css`, `world.js`, `assets/` into the preview slug. No root paths, sibling dependencies, CDN runtime, installations or build step. Private docs/evidence are not runtime content and must not be served by the parent's launcher.

## Verification
`results.json` contains actual browser observations. `.impeccable/review/desktop.png` (1440×900), `mobile.png` (390×844), and `mobile-contact.png` document settled real rendering. Both main captures are paused for stability.

`VERIFY_BROWSER.py` is a reproducible Hermes `browser_exec` script, not standalone Python. Start the server and invoke with browser session `ten01`:

```python
# Run Circuit Coast browser checks
exec(open('/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/01-bruno-world/VERIFY_BROWSER.py').read())
```

It was executed successfully after correcting a test assumption about rover heading. Full original observations, including incomplete native Enter packets that failed, are preserved rather than relabeled as passes.

## Art and dependency provenance
- All geometry, layout, SVG icons, vehicle and scenery are original procedural authoring in `world.js` / `index.html`. No reference models, source, screenshots or copied pixels ship.
- Three.js 0.170.0 and its BufferGeometryUtils are vendored from the official package through jsDelivr. MIT license in `assets/THREE-LICENSE.txt`. Utility import rewritten to the local module.
- Barlow regular and Barlow Condensed 600 downloaded from Google Fonts, with their SIL OFL licenses beside them.
- No shipping raster assets. Browser PNGs are verification evidence, generated from this local artifact. The user-pinned Bruno screenshot remains an external reference only.

## Limits
Bounded rover steering and keep-out zones, not a rigid-body physics engine. No sound, actual homelab data, portfolio proof, submission form or backend. Fixed overview camera rather than a fully follow-camera game. No sustained mobile-device FPS benchmark. Independent parent review must judge originality, reference-level finish and ensemble separation.
