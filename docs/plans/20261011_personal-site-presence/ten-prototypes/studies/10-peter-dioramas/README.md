# Small Worlds · prototype 10

Three original ceramic architectural miniatures: homelab garden, everyday workshop and curiosity observatory. Native previous/next buttons replace the artwork and caption. About/background, practical working approach, freelance constraints and a direct real LinkedIn route are reachable without viewing all artworks. Illustrations are explicitly imagined, never case-study proof.

## Run
From this directory:

```sh
python -m http.server 8920 --bind 127.0.0.1
```

Open `http://127.0.0.1:8920/`. HTTP is required for the local ES module. No build, package install, credentials, external CDN or secure context needed.

The parent's LAN assembly should copy only `index.html`, `style.css`, `worlds.js` and `assets/`. All links are relative; any own directory path works. Do not copy PRODUCT/SURFACE/DESIGN/verification/test metadata into public preview.

## Verification
Current refinement: run `python3 -m http.server 9020 --bind 127.0.0.1` in this directory, then `node verify-content.cjs` in another shell. It uses the existing read-only `/home/trex/vhmc/projects/devPilot/node_modules/playwright` installation; no install or build. The test checks six viewport sizes, saves settled main/reading/contact screenshots and writes `content-results.json` without regenerating original artwork assets. Stop the loopback server after checks.

Historical `verify.py` exports the original still assets and writes the old scene-build `results.json`; it is not the current content test and should not be rerun for a reading refinement.

## Assets and licensing
- `worlds.js`: original procedurally authored geometry and composition. No imported models, Peter source pixels or copied characters.
- `assets/world-1.png` through `world-3.png`: actual local canvas exports of those worlds, transparent alpha crop; source provenance embedded in PNG text. Hashes/dimensions in `PROVENANCE.json`.
- `assets/three.module.js`: self-hosted Three.js 0.170.0, MIT; license in `assets/THREE-LICENSE.txt`; retrieved from jsDelivr distribution.
- `assets/manrope.ttf`: Google Fonts Manrope variable font, SIL Open Font License; license in `assets/MANROPE-LICENSE.txt`.
- `assets/favicon.svg`: original authored arch mark.

## Performance
Rendering is event-driven on load, resize or scene selection, with no continuous animation loop. Pixel ratio capped at 1.75. Three worlds are built on demand; old geometry is disposed. A WebGL failure or lost context swaps to local authored stills without disabling navigation. Main meaningful content remains ordinary semantic HTML.

## Review
Local prototype verification complete. Aesthetic comparison and LAN assembly belong to parent. No commits, pushes, deployment, server/firewall configuration changes or writes outside this owned study.
