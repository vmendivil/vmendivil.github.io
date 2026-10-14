# Experience fidelity report — Night Pavilion
## Outcome
Preserved timber architecture, Karla, all four factual readings/contact and native room index. Implemented a room-specific SVG camera with interruptible 680ms approach, selected-bay light, whole-house reversal and reduced-motion direct framing. Arrival leaves the scenic/index band visible above the reading rather than moving the new camera wholly offscreen. No ambient rendering loop.

Actual source is **Dwayne Koh's personal Lantern House portfolio**. Exact live/gallery URLs and current observations are in FIDELITY_CONTRACT.md and fidelity/source-observations.json. Live opening was captured; the next source screenshot timed out. Archived group-b mobile index/loader limitations remain authoritative; no fabricated source interior observation or copied asset.

## Real verification
Six sizes: 320×740, 390×844, 430×932, 844×390, 768×1024, 1440×900.
- `node fidelity-legacy.cjs`: six sizes × four rooms; direct bay selection, long reading/final actions, contact, close/return/focus, deep-link/reload/history, keyboard and trusted touch; reduced motion, no-JS and failed SVG-enhancement fetch. Final result: pass.
- From this folder: `ONLY=16-lantern node fidelity-verify.cjs`: six focal contexts plus six actual no-JS contexts and two preference/renderer-failure contexts. All passed, zero normal page/HTTP errors, idle camera draws zero. Interruption/reversal and immediate reduced-motion framing verified.
- `node fidelity-hidden.cjs`: native Tab/Enter journey, simulated document.hidden cancellation, zero hidden draws and resumed normal return. Visibility simulation is explicitly not physical-tab certification.
- Chronological normal-motion browser frames: `fidelity/focal-{0-whole,1-approach,2-threshold,3-return}-{width}x{height}.png`. Full main/all reading/contact captures: `fidelity/legacy/`. Desktop/phone/landscape reading/contact board: `fidelity/visual-inspection.jpg`, visually inspected along with actual-size phone reading and desktop contact. Test-driven captures are current; earlier .impeccable/review files are historical.
- One detector run: `fidelity/detector-raw.json`, exit 2 with one warning about the accepted wall's thick bottom beam. It is not a rounded card; retained architectural material. No clean-scan claim or detector rerun.
- Source/runtime hashes and counted contexts: `fidelity/runtime-hashes.json`; raw final assertions: `fidelity/{legacy-results,focal-results,hidden-keyboard-results}.json`. Initial focal timing failures are retained in `initial-focal-results.json`: fixed-duration waits were too strict under concurrent browser load; endpoint/hash assertions now wait for actual state.

## Runtime / reproduction
Overlay `index.html`, `main.js`, **`room-camera.js`**, **`experience.css`**; retain existing `style.css` and assets. Serve this folder loopback with `python -m http.server 9416 --bind 127.0.0.1`, then run the commands above. No shared preview/gallery/production edits.

## Tradeoffs / remaining review
This is authored SVG architectural illustration, not physical 3D water, interior loading or model navigation. The camera/light interaction meaningfully closes the existing gap without replacing the accepted scene. Physical-device/Safari and assistive-technology certification, independent source-fit review and parent-served LAN overlay checks remain outstanding. Local engineering passes do not select or publish this design.
