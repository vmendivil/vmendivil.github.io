# 20 — Field Editions
Complete local static personal-site prototype inspired by the inspected current Alphamark editorial grammar. All changes confined to this study. No production/preview/launcher changes or commits.

## Run
From this directory: `python3 -m http.server 9120 --bind 127.0.0.1`
Open `http://127.0.0.1:9120/`. No install or build needed.
Tests: `node verify.cjs`, `node verify-extra.cjs`, `node confirm-framing.cjs`. They use the existing read-only Playwright dependency at `/home/trex/vhmc/projects/devPilot/node_modules/playwright` and installed Chromium. Start the local server first. `python3 make-boards.py` assembles existing screenshots via ffmpeg; it does not run another browser inspection.

## Runtime-only assembly manifest
Copy index.html, workable-system.html, after-hours.html, ai-judgment.html, style.css, fallback.css, main.js and assets/ (including font OFL) together. All paths are relative. Do not copy private Markdown, tests, results, .impeccable or capture-board files into public preview. Parent owns that assembly and LAN verification.

## Visitor path
Main collection → three real local essays → return to Editions. Approach/About describe verified personal context, contained freelance availability and separate career interest. Every route has complete contact with the exact supplied LinkedIn URL. Mobile menu, no-JS inline navigation, reduced-motion and failed-asset readable-text fallbacks.

See PRODUCT.md, SURFACE.md, DESIGN.md, ASSET_PROVENANCE.md, VERIFICATION.md and REVIEW.md for private build authority/evidence. Physical Safari/device testing and independent comparative aesthetic acceptance remain unverified.
