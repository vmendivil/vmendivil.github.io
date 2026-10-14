# 02 — Kinetic technology poster

Independent, code-led **first-screen study**, not a complete personal site or production change. Preview: `http://127.0.0.1:8122/`. Start it with `python -m http.server 8122 --bind 127.0.0.1` from this folder.

## Behavior and named corrections
- SOFTWARE / PROCESS / PEOPLE / IN SYNC remain a staggered, near-full-screen poster on aubergine/violet with lilac, coral and peach lettering. No portrait, card, diagram or console added.
- Normal motion: native range changes word offset, angle and SOFTWARE's variable-font width; the button toggles alignment. Arrow keys, Enter and Space work.
- **Truthful reduced motion:** lettering stays composed, and both native movement controls are disabled. Labels read “Still composition”, “Movement off”, “Movement disabled”; help explicitly explains the disabled controls. Disabled controls skip Tab. Live preference changes disable/re-enable controls without reloading; no fictitious changing alignment is announced.
- **Copy/control collision:** controls now participate in a flex-column document flow, with auto top margin and 32px padding before their heading. Desktop display scale changed from 12.2vw to 11.4vw to retain the complete 900px first screen with readable practice copy. Mobile typography and color fields are preserved.

Factual scope: Victor Mendivil, end-to-end Dynamics 365 F&O, process automation, Raspberry Pi homelab, AI-assisted work. No fabricated clients, outcomes, contact submission or storage.

## Current real verification
Run `node .impeccable/review/verify.cjs` while the preview server is running. The test currently resolves Playwright from the local npm cache and uses installed Chromium explicitly; those paths are machine-specific. Playwright 1.64.0's default browser revision was missing; installed Chromium **153.0.8010.12** ran successfully instead. Final execution exited **0**.

Current evidence supersedes old browser checks where behavior/layout changed:
- `.impeccable/review/revision-checks.json`: full DOM rectangles, word transforms/bounds, keyboard results and touch outputs.
- `.impeccable/review/revision-run.txt`: exact successful execution output.
- `.impeccable/review/desktop.png`: fresh **1440×900**, normal motion, value **65**.
- `.impeccable/review/mobile.png`: fresh **390×844**, normal motion, value **65**.
- `desktop-reduced.png` and `mobile-reduced.png`: corresponding reduced-motion captures.
- All four final captures opened and visually inspected. Entire words and practice copy remain readable; violet/coral poster identity retained; control separation is visibly clear.

### Layout assertions
At **0, 50, 100**, on both target viewports and in normal/reduced motion, practice-copy and control-heading intersection area is **0px²**. Assertions also require positive separation, no horizontal overflow and complete word rectangles inside viewport width.

| Viewport | Practice bottom | Control heading top | Gap | Document height |
|---|---:|---:|---:|---:|
| 1440×900 | 740.90625px | 774px | 33.09375px | 900px |
| 390×844 | 631.265625px | 677px | 45.734375px | 844px |

All listed states produce the same copy/control geometry. Programmatic value assignment is used **only for layout sampling**, not as keyboard or touch evidence. Reduced-motion test assignments do not simulate an enabled control: both controls remain disabled, the poster stays fixed and output stays “Movement off”.

### Real keyboard assertions
Both desktop and mobile contexts:
- Normal: Tab → `alignment`; ArrowRight **65 → 66**; Tab → `align`; Enter → **100**; Space → **15 / A little scattered**.
- Reduced: neither disabled control receives Tab focus; ArrowRight/Enter/Space leave value **65** and status **Movement off**.
- Live preference: normal → reduced → normal disables and re-enables controls without reload. Initial immediate assertion raced Chromium's asynchronous media-change event; the final test waits for the observed enabled/disabled state and passes.

### Native touch evidence
Playwright mobile context has `hasTouch: true`, `isMobile: true`, **390×844** viewport. Actual Chromium CDP `Input.dispatchTouchEvent` touchStart/touchMove/touchEnd drives the **native input range**, not DOM-dispatched touch events:
- Drag **65% → 20%** returns value **20 / A little scattered**.
- Subsequent tap at **80%** returns value **80 / Finding the rhythm**.
- Fresh document navigation precedes final default screenshots, avoiding gesture/focus contamination.

No page exceptions were recorded (`errors: []`).

## Retained historical evidence
- `browser-checks.json` and `final-checks.json` predate this correction; preserve them as historical records, not current acceptance.
- Prior harness touch dispatch timed out; that earlier unverified result is superseded by the actual Playwright/CDP touch pass above.
- `contrast.json`: lilac/coral/peach against violet/aubergine yield **5.34/7.86**, **4.66/6.86**, **8.66/12.75**, all above 4.5:1.
- `detector-raw.json`: the single previous `impeccable detect --json index.html style.css script.js` invocation returned **[]**, exit **0**. It predates later corrections. Detector **not rerun**; no post-fix scanner claim.

## Remaining limitations / parent handoff
- Touch evidence is synthesized browser-protocol input in desktop Chromium with touch emulation, **not a physical phone/iOS Safari/Android device pass**. Multitouch, interrupted gestures and cross-browser behavior remain untested.
- Target first screens fit; shorter windows can scroll because minimum heights remain 900px desktop / 850px intermediate / 780px phone. Other viewport acceptance and 200% zoom remain open.
- Page exceptions were checked, but a broader network/console/accessibility audit was not performed.
- Parent's fresh full comparative visual review is pending. These named corrections and local technical results are not independent aesthetic approval or production approval.
- Context loader reported missing `.impeccable/config.json` buildPath; no scope-expanding repair performed. Existing code-led authority retained.
- All edits stay inside `02-kinetic`; no production edits, commits, deployment or remote writes.

## Files / authority
`PRODUCT.md`: supplied truth and assumptions. `direction.md` and `.impeccable/surfaces/index-html.md`: seven directions, seed **d562bb9c**, catalog verdicts, direction contract. `seed-raw.txt`: successful own roll. `DESIGN.md` + `.impeccable/design.json`: synchronized built-world documentation. `index.html`, `style.css`, `script.js`: independently authored surface. `fonts/`: local fonts and OFL licenses. Review PNGs are browser captures, not shipping imagery.

Font provenance: Anybody variable TTF from `https://raw.githubusercontent.com/google/fonts/main/ofl/anybody/Anybody%5Bwdth,wght%5D.ttf`; Manrope regular from `https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf`; Manrope semibold from `https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf`. Licenses retrieved from Google Fonts `ofl/anybody/OFL.txt` and `ofl/manrope/OFL.txt`.
