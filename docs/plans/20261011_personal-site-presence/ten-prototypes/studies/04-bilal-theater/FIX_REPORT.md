# Reviewer fix report — 04 Bilal theater

## Disposition
Named reviewer fixes **resolved at local fix-list scope**, not independent aesthetic approval. Parent final review remains required. All work is contained within `studies/04-bilal-theater`; production, root, preview and commits are untouched.

## One material UI fix batch
- Replaced the mobile intro overlay with a normal-flow band before the canvas. Paragraph enlarged from 13px to 16px, not shrunk. Title stays 43px. Original wood, papercraft, inventor and guided story remain.
- Separate 310px mobile canvas and 64px caption/control rail prevent scene/paragraph collisions.
- Caption and next-cue description are 14px; pause is 12px with a minimum 100×44px target. Direct chapters have 44px minimum height.
- No JavaScript story changes needed: existing reduced-motion cut works when observed with a successful browser transport.

## Executed evidence
Existing Playwright and cached Chromium, no installation:

```sh
PYTHONPATH=/home/trex/.hermes/profiles/dev/cache/scratch/hardware-study-tools python verify-fixes.py
```

`fix-results.json`: **20/20 passed**, no page errors. Playwright `mouse.wheel(0, 180)` over the desktop theater advances to making. Actual Playwright touchscreen `.tap()` advances Next, selects all four chapters, and operates pause. This is browser-native synthesized input in Chromium touch emulation, not JavaScript `.click()`/DOM event simulation or physical-phone evidence.

At 390×844 intro band ends at y=280.875, exactly where canvas starts. Intro is 16px, caption 14px, pause 12px; pause measures 100×44px. Caption ends at x=227.6875 while pause starts at x=266.609375. No horizontal overflow in any chapter.

Reduced motion starts paused. Clicking Next changes actual canvas pixels from question/spools to making/conveyor. Before/after hashes differ; second post-cut canvas capture 450ms later is byte-identical, proving a visible static result rather than only ARIA updates. After screenshot visually inspected.

## Recaptures and bounded inspection
Same opening paths refreshed, inspected once together with post-change evidence:
- `.impeccable/review/desktop.png` — opening 1440×900, inspected.
- `.impeccable/review/mobile.png` — opening 390×844, reduced motion, inspected.
- `.impeccable/review/wheel-after.png` — desktop making after native wheel.
- `.impeccable/review/mobile-touch-after.png` — mobile making after native tap, inspected.
- `.impeccable/review/reduced-before.png` and `reduced-after.png` — desktop reduced-motion before/after; after inspected.

First harness attempt timed out loading a third live WebGL page after touch/wheel worked. Recipe corrected to close finished contexts and allow 90s navigation; execution then succeeded. Transport/resource recovery occurred before final inspection, not another UI polish batch. No further UI edits after inspection.

## Detector and remaining limits
Detector already ran once. Original raw JSON/stderr preserved, not rerun. Historical 10px caption/pause warnings predate this fix and are superseded by computed-style evidence, not a claimed fresh detector pass. Decorative prop lettering remains miniature; readable program is authoritative. Mobile intentionally uses more vertical room and a smaller separated stage instead of forcing all copy into one viewport.

Physical phone, iOS/Safari and independent comparative/aesthetic acceptance remain unavailable to this worker. Parent owns final acceptance and preview assembly. Loopback verification server shuts down on completion.
