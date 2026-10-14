# 19 — Afterlight Floors
Runtime: `index.html`, `style.css`, `app.js`, `scene.js`, `assets/` only. Everything else is private build/review documentation. Parent owns runtime assembly, launcher and LAN server; none modified here.

## Local run
From this study directory: `python -m http.server 9119 --bind 127.0.0.1`.
Open `http://127.0.0.1:9119/#1f`. Four states `#1f`, `#2f`, `#3f`, `#4f`; append `/read` for chapter deep links. Floor 1 About, 2 Practice, 3 Curiosity, 4 Contact. Escape returns from reading; browser Back/Forward follows hash history.

## Reproduce browser evidence
Existing read-only Playwright: `/home/trex/vhmc/projects/devPilot/node_modules/playwright`.
With local server running: `node verify.cjs` then `node verify-extra.cjs`.
No npm install/build required; all runtime dependencies and fonts self-hosted. Tests write `results.json`, `results-extra.json`, and `.impeccable/review/` captures.

## Hand-off
No copied reference assets or identities. Original studies labeled as illustrations, not shipped client work. Contact opens genuine LinkedIn; no fake email, form, storage or transmission. Stop source server after tests. Parent must run independent comparison and assembled LAN verification. No production changes or commits authorized.
