# 02 — Faceted Atlas

A complete independently authored static concept. Open `index.html` directly, or serve this folder:

```sh
python -m http.server 8022 --bind 127.0.0.1
```

Preview: http://127.0.0.1:8022/ (server started during implementation).

## What works

- Three problem pathways update the selected map route, `aria-pressed` state, live guidance and conversation topic.
- The mobile map becomes a readable vertical route selector.
- Conversation composer produces a selectable draft locally. Nothing is sent, stored or delivered; no contact address is invented.
- Native controls, explicit labels, focus outlines, skip link, reduced-motion behavior and self-hosted fonts.

## Evidence

- `.impeccable/review/desktop.png`: 1440px full-page capture, inspected.
- `.impeccable/review/mobile.png`: 390px full-page capture, inspected.
- `.impeccable/review/checks.json`: actual browser width checks at 320, 390, 768, 1024 and 1440; no horizontal overflow. Reduced motion reports `matches: true`, animation `none`; normal animation was checked as `trace`.
- `.impeccable/review/interactions.json`: actual clicks through all three pathways, matching topic updates, draft generation with entered context and focus on the output textarea.
- `.impeccable/review/contrast.json`: all text-palette / surface pairings exceed 4.5:1.
- `node --check atlas.js`: passed.
- `.impeccable/detector.json`: detector run once. Tiny mobile portrait metadata and tight route-control leading were corrected to 12px and 1.3 respectively. The conversation-padding warning is a false positive: the rendered section has 5% horizontal padding on desktop, 6% on mobile. Detector not rerun, per bounded workflow.

## Visual-system documentation

`DESIGN.md` and `.impeccable/design.json` record actual tokens, components, responsive rules and motion. Documenter role performed inline because this child cannot spawn agents. Independent finish review is reserved for the parent; this is not a claim of independent approval.

## Assets and limits

Portrait source: `/home/trex/vhmc/images/me/faceted-three-quarter-left.png`, an existing user-supplied generated illustration. Inspected before use, resized and converted to WebP via ffmpeg. Provenance sidecar: `assets/victor-faceted.webp.json`; original generation prompt unavailable. Asset provenance scan: one raster, zero missing. Barlow regular/semibold sourced from Google Fonts repository and self-hosted with `assets/OFL.txt`.

No invented clients, results, testimonials or case studies. Contact route remains undecided. No production edits, commits, pushes or publication. Everything created is scoped to this concept folder.

Browser capture issue: one CDP beyond-viewport capture repeated viewport tiles. It was discarded and replaced with full-height viewport captures, then visually validated. One initial width assertion incorrectly treated a scrollbar gutter as overflow; corrected to document width <= viewport width. These were evidence-harness defects, not fabricated passing results.
