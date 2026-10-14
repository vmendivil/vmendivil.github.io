# 09 — Living Index
Independent organic artwork-led personal gallery. Shipping files: index.html, style.css, gallery.js, assets/ (including licenses). No build step, external runtime or sibling dependencies. Parent should copy only shipping files, not docs or verification.

Current content/mobile checks: `python -m http.server 9019 --bind 127.0.0.1`, then `node verify-content.cjs`. Raw current results: `content-results.json`. Current main and open-state screenshots are under `.impeccable/review/`. The commands below and results.json refer to the historical material batch.

Historical local check: `python -m http.server 8919 --bind 127.0.0.1` from this directory. Open http://127.0.0.1:8919/. Worker server is stopped after checks. Parent owns LAN assembly.

`node verify.cjs` uses existing Playwright from /home/trex/vhmc/projects/devPilot/node_modules/playwright, not a runtime dependency. Start the loopback server first. Evidence and assertions are in results.json and .impeccable/review/. Detector raw output preserved once; not rerun after fixes.

Nothing committed, published or changed outside this owned study. No form storage/transmission. Art is explicitly illustrative, not fabricated proof.
