# Current all-21 fidelity pass

This section supersedes the older behavior/verification statements below. See FIDELITY_CONTRACT.md and FIDELITY_REPORT.md for actual implementation, executed evidence and limits. Preserve all previous results as historical.

From this owned directory, `node verify-fidelity.cjs` starts/stops its own loopback server on9404, using the existing read-only Playwright install. It writes private six-size evidence under fidelity-evidence/ (confirmation/ for05/06). `node capture-final.cjs` produces current normal-motion recording/closure evidence. Do not run these concurrently on the same study port or overwrite retained evidence during independent review.

Shipping runtime includes **fidelity.css** along with index.html, existing style.css, program.css, main.js and existing assets/. Never ship fidelity-evidence, docs, runners or .impeccable. Parent owns actualLAN assembly/source-comparison injection, not these worker servers. No build or install required.

# Run and handoff

From this directory:

```sh
python -m http.server 9014 --bind 127.0.0.1
```

Open http://127.0.0.1:9014. Worker check server has been stopped. Parent owns LAN serving, launcher and shipping-copy assembly. Runtime is plain static HTML/CSS/ES modules and requires HTTP, not file://. No install or build step. No external requests at runtime except a visitor intentionally following LinkedIn.

## Copy into preview
Only `index.html`, `style.css`, **`program.css`**, `main.js` and `assets/` are shipping material. Keep docs, verification scripts/results and `.impeccable/` out of served preview. All runtime URLs are relative.

## Browse
Next cue visits question → making → curiosity → conversation → opening. Direct chapter buttons always work. ArrowRight/ArrowLeft change chapters; Tab reaches all native controls; Enter and Space activate them; Escape pauses the ambient stage. Desktop wheel over the stage is implemented with throttled chapter cues. Mobile uses simpler static cuts and ordinary vertical page scrolling. No required game. LinkedIn is real; no form/transmission/storage is simulated.

## Current verification
With the server above running, execute `node verify-content.cjs` (existing runner at `/home/trex/vhmc/projects/devPilot/node_modules/playwright`, no install). `NO_CAPTURE=1 node verify-content.cjs` repeats behavior without replacing the bounded final screenshots. Current result: 139/139 passes in `content-results.json`. All requested viewports, actual keyboard/tap/wheel, long reading, reduced motion and WebGL fallback covered. New program is inline, with contents/page-turn cues and Read the program / See this scene links. Current disclosure and parent-review limits are in `content-mobile-fixes.md`.

## Historical verification
`verify-browser.py` is a Browser Use `browser_exec` recipe, not a standalone Python executable: helpers `js`, `cdp`, `new_tab`, `goto_url`, `wait_for_load`, `click_at_xy` are supplied by that runtime. Run it in browser session `ten04` while the loopback server is active. The final version completed and saved 32 passing checks; native touch/wheel transport limitations are recorded, not converted into passes. Final captures were recorded separately after CDP screenshot transport errors. See VERIFICATION.md and results.json.

## Original art / dependencies
All scene geometry, original symbolic bobbin inventor, material textures, stage composition, leaves/clouds/arch contours, SVG icons and favicon are authored in this prototype. No copied Bilal models, scene artwork, music or character likeness. No shipping raster assets: grain/paper texture and paper labels are runtime-authored canvas textures. Sources and licenses in ASSET_PROVENANCE.md and assets/.

## Historical residual review items (superseded by current verification)
Parent comparative aesthetic acceptance is still required. Small mobile stage caption/pause control are 10px and flagged by the single detector run; the lower scene lettering is decorative, not the only content route. Mobile intro overlaps the top pelmet slightly. Wheel/touch could not be independently verified because the CDP transport timed out. Reduced-motion initialization/content was verified but the after-cut capture timed out, so visible-cut acceptance remains explicitly open. No final aesthetic pass is claimed.
