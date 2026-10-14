# Concept 05 — Type Facet

A self-contained, original static concept. Open `index.html` directly, or serve this folder:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Preview: http://127.0.0.1:8765/ (builder's local server was started on port 8765).

## Distinctive direction

The name is the opening composition, not a slogan over an image. The generated portrait inhabits the O in VICTOR: the person is part of the lettering rather than an adjacent hero asset. Chalk condensed type, graphite planes and a mineral-copper working field establish the identity. A second profile portrait supports the end-to-end perspective later in the story.

Content order: personal identity → recognizable friction → selectable approach → employed experience and cross-team scope → honest local conversation outline. Dynamics is one problem category and one source of experience, not the entire positioning.

## Working behavior

- Three native problem buttons update the approach title, explanation and useful question, with a single selected `aria-pressed` state and live-region announcement.
- The approach action preselects the corresponding conversation topic.
- A native disclosure explains requirements through support.
- Empty form input produces an explicit local error and input focus.
- Valid input prepares an outline in the page using text nodes; nothing sends, persists or executes the input.
- The edit action returns focus to the input. Reduced motion disables clip animation and smooth scrolling.

No backend, outbound delivery endpoint, analytics, external runtime resource, invented clients, outcomes or testimonials. This is an illustrative concept, not a published site.

## Assets

Both portraits were visually inspected before selection. They are user-supplied generated illustrations. WebP conversions retain source provenance in the adjacent `.webp.json` sidecars; Impeccable's raster scan returned `2 rasters, 0 missing`.

- `assets/portrait-front.webp`: `/home/trex/vhmc/images/me/faceted-front.png`, resized to 800px with ffmpeg, quality 88.
- `assets/portrait-profile.webp`: `/home/trex/vhmc/images/me/faceted-left-profile.png`, resized to 700px with ffmpeg, quality 88.
- Self-hosted Barlow Condensed Bold and Manrope Regular/Bold, retrieved from Google's font distribution. OFL licenses are in `assets/fonts/`.

Original image-generation prompts are unavailable and are not invented. No new image generation was performed.

## Browser evidence

Final captures in `.impeccable/review/`:

- `desktop.png` — 1440px-wide complete page, valid final capture.
- `mobile.png` — 390px-wide complete page, valid final capture.
- `mobile-outline.png` — 390×844 exercised local-outline state, including a text-only HTML-looking input, dark focus treatment and “Prepared locally. Not sent.” disclosure.
- `checks.json` — real browser responsive checks at 320, 390, 650, 768, 1000, 1280, 1440 and 1600px; no horizontal overflow, loaded images, valid anchor targets, zero external resources, reduced-motion computed behavior, actual section padding and 12px minimum supporting text.
- `interactions.json` — click-driven assertions for every approach, topic preselection, disclosure open/close, empty and valid submissions, edit focus and empty local/session storage.

Original build evidence remains in `checks.json` and `interactions.json`; those files were not rerun or rewritten in this follow-up. The original harness full-page route had capture failures and used a full-document-height viewport workaround. The follow-up below replaces the PNGs with fresh standard Playwright captures and supplies separate, reproducible keyboard evidence.

## Detector and bounded finish

Impeccable context ran once from this owned folder. The detector ran once against `index.html style.css script.js`. It reported undersized supporting text, a 4.0:1 placeholder contrast and cramped-padding findings. The one correction batch raised all supporting/functional text to at least 12px and changed the placeholder color. Final browser computed styles confirmed a 12px minimum. Computed contrast: primary dark reading pair 13.29:1; supporting text on raised plane 6.97:1; copper reading pair 5.72:1; corrected placeholder 5.16:1.

The remaining detector padding findings are not treated as design rules: they were checked against actual computed/rendered padding (20px sheet footer, 88px problem section, 90px conversation section on desktop). The detector appears not to resolve these logical padding declarations. The final screenshots show inset content. The detector was not rerun, per the one-run instruction.

### Follow-up: whitespace and real keyboard evidence

The mobile concatenation defect is fixed with explicit whitespace before every static `<br>` (10 boundaries), including all three mobile-hidden problem-label breaks. Dynamically rebuilt approach titles also insert a space before their break. CSS and desktop line breaks remain unchanged; the portrait-in-O, copper fields and truthful demo copy are preserved.

A real Playwright run now supersedes the earlier failed synthetic-CDP Enter attempt. The executable test is `.impeccable/review/keyboard-check.cjs`; exact assertion/actual/expected results are in `keyboard-results.json`, and raw stdout is in `keyboard-output.txt`. It reused the already-installed Playwright package at `/home/trex/vhmc/projects/devPilot/node_modules/playwright` without changing that project. Reproduce from `/home/trex/vhmc/projects` with:

```sh
node /home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/crystal-exploration/05-type-facet/.impeccable/review/keyboard-check.cjs
```

The runner serves this concept on an ephemeral loopback port and closes its server/browser afterward. Chromium `153.0.8010.12` returned **76 passing assertions**, ending with `ALL ASSERTIONS PASSED`. Control activation used actual `page.keyboard.press/type`, reached through Tab traversal, not programmatic focus, clicks or dispatched DOM events. Setup scrolls for lazy-image loading/capture only.

Actual outputs:
- At 320px and 390px: `Too much manual work.`, `The tools don’t fit the job.`, `Dynamics is holding things up.`; hidden BR display values `["none","none","none"]`; all BR boundaries have whitespace; horizontal-overflow test `true` (no overflow).
- At 1440px the same labels retain their desktop newlines and BR display `["inline","inline","inline"]`.
- At both 390px and 1440px: tools/Enter, dynamics/Space, manual/Enter select the correct approach, keep button focus and leave exactly one `aria-pressed="true"`. The native disclosure opens with Enter (`true`) and closes with Space (`false`). Starting-point Enter preselects `manual`; native select ArrowDown changes it to `tools`.
- Empty Enter submission displays `Add a sentence about the problem to prepare your outline.` and returns textarea focus with `aria-invalid="true"`.
- Valid Space submission renders the literal text `Teams retype <b>orders</b> each day.` with zero inserted `<b>` elements, topic `Tools that don’t fit`, focused visible result and `Prepared locally. Not sent.`.
- Edit/Enter returns textarea focus and preserves input; keyboard editing and Enter resubmission render `Teams retype <b>orders</b> each day. Updated.`.
- Action requests `[]`, external requests `[]`, storage `[0,0]`, page errors `[]` at both tested flow widths.

Fresh evidence replaces the same review paths: `desktop.png` (1440×3550), `mobile.png` (390×4142), `mobile-outline.png` (390×844). These are normal Playwright full-page/viewport captures with loaded local fonts/images, not the prior full-height-viewport workaround. Desktop/mobile were visually inspected together; a misplaced fixed skip-link artifact from capturing after setup scroll was corrected by resetting scroll before capture and confirmed in one bounded recapture. Final composition has no observed clipping/blank regions; mobile labels are separated and desktop breaks are intact. The outline capture was inspected and shows literal input plus local-only disclosure.

Limitations: Chromium viewport emulation and reduced-motion mode only; no physical phone, Safari/Firefox or assistive-technology test. 320px received layout/label checks, not the full keyboard flow. Independent parent visual verdict remains pending. The earlier detector was **not rerun**. The requested original `deleg_e2b881ba/task-4.log` was read, but its tool outputs are truncated summaries and do not expose the raw detector report; no raw report is recoverable there. The detector statements above are inherited documentation, not newly verified raw findings.

`DESIGN.md`, `.impeccable/design.json` and `.impeccable/surfaces/index-html.md` document the finished system and direction. Documentation was extracted inline because this builder cannot spawn agents. Independent finish review is intentionally pending with the parent agent, not self-certified as ship.

## Changed scope

All assets, code, documentation and evidence are confined to `05-type-facet/`. No production files, other concepts, research, commits, pushes or publication were changed.
