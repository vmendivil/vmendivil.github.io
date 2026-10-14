# Current all-21 fidelity pass

This section supersedes the older behavior/verification statements below. See FIDELITY_CONTRACT.md and FIDELITY_REPORT.md for actual implementation, executed evidence and limits. Preserve all previous results as historical.

From this owned directory, `node verify-fidelity.cjs` starts/stops its own loopback server on9405, using the existing read-only Playwright install. It writes private six-size evidence under fidelity-evidence/ (confirmation/ for05/06). `node capture-final.cjs` produces current normal-motion recording/closure evidence. Do not run these concurrently on the same study port or overwrite retained evidence during independent review.

Shipping runtime includes **fidelity.css** along with index.html, existing style.css, world.js and existing assets/. Never ship fidelity-evidence, docs, runners or .impeccable. Parent owns actualLAN assembly/source-comparison injection, not these worker servers. No build or install required.

# Signal from Elsewhere

From this directory, serve the isolated study: `python -m http.server 9015 --bind 127.0.0.1`, then open http://127.0.0.1:9015. Stop that worker server after verification. Parent copies only `index.html`, `style.css`, `world.js` and `assets/` into preview; private docs and evidence never ship.

No build/install needed. Runtime is local WebGL / Three.js 0.169.0 (MIT), Fredoka and Nunito (SIL OFL), with plain HTTP support. Licenses/source URLs are in `assets/`. No reference screenshot ships.

Arrow/WASD movement and held on-screen arrows explore the accepted alien world. Landmarks and Field guide reach all five unchanged entries. The cyan field journal has persistent Back to world/contents and a separately scrollable body; driving controls disappear and the scene becomes inert while reading. Tab remains within reading, Escape closes, focus returns to the original invoker. Pause stops continuous rendering; paused reading navigation gets one frame. Hidden pages do not draw. Reduced motion retains a stationary overview; WebGL failure retains readable content.

## Reproduce current browser checks
With the loopback server running: `node content-mobile-checks.cjs`. Existing `/home/trex/vhmc/projects/devPilot/node_modules/playwright` is used read-only. Headless Chromium works without setup; when DISPLAY is set the same runner uses headed Chromium. To rerun only behavior without recapturing: `SKIP_CAPTURE=1 node content-mobile-checks.cjs`. Full runner covers six requested viewports and saves `content-mobile-results.json`; optional captures are saved inside `.impeccable/review/`.

Actual hidden lifecycle uses the browser-use daemon: `browser_exec(code="exec(open('/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/05-thibault-expedition/content-hidden-checks.py').read())", session="browsercontent05")`. Its native hidden observation is saved as `content-hidden-results.json`. WM-less Xvfb/headless foreground-tab attempts are labelled honestly when Chromium stays visible.

Current scope, captures and limits: `content-mobile-fixes.md`, `VERIFICATION.md`. Historical initial runners/results remain available but are not current keyboard/touch evidence. Parent owns visual acceptance and preview assembly.
