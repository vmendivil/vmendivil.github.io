# Concept 03 — Crystal narrative

A standalone static personal-site exploration. Open `index.html` directly or serve this directory:

```sh
python -m http.server 8133 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8133/. No build step, external runtime dependencies, third-party requests or production integration.

## Composition

An oversized crystal portrait introduces Victor; a change of portrait angle moves into everyday friction. A mineral-green passage connects people, process and technology through staggered typography, followed by a quieter employed-experience passage. The close invites a contained piece of work, with an optional, honest local message-shaping tool. No service cards, fabricated cases, testimonials or client claims.

## Files

- `index.html`, `style.css`, `site.js`: independently authored site.
- `assets/`: two locally converted portrait illustrations, self-hosted variable fonts, font licenses and raster provenance sidecars.
- `PRODUCT.md`: exact copied parent product context.
- `BRIEF.md`: approved direction and implementation contract.
- `DESIGN.md`, `.impeccable/design.json`: system extracted from the built surface.
- `VERIFY.md`, `verify.cjs`, `.impeccable/review/`: real Chromium evidence and bounded checks.

## Asset origins

- `portrait-opening.webp`: `/home/trex/vhmc/images/me/faceted-three-quarter.png`.
- `portrait-listening.webp`: `/home/trex/vhmc/images/me/faceted-left-profile.png`.
- Both are pre-existing user-approved generated illustrations, not photographs. Original generation prompts are unknown. Converted with ffmpeg to WebP, quality 87; no regeneration or alteration of source files.
- Archivo variable font: https://github.com/google/fonts/tree/main/ofl/archivo
- Public Sans variable font: https://github.com/google/fonts/tree/main/ofl/publicsans
- Both fonts retain their SIL Open Font License text in assets.

## Demo boundary

The draft tool builds text in the current page only. It does not submit, email, call an API, use cookies or local storage, or automatically copy to the clipboard. It selects a draft for the visitor to copy. No contact address has been invented. Production contact routing and exact engagement terms remain undecided.

## Reproduce verification

`node verify.cjs` uses the existing installed Playwright at the absolute path recorded in the script (not a new site dependency), with the server running on port 8133. On another machine, replace that require path with your installed Playwright. It captures desktop/mobile evidence, tests draft preparation, current-chapter navigation, reduced motion, no-script reading and narrow widths. The browser UI helper screenshot call timed out; the final evidence uses locally installed Playwright Chromium instead.

Independent finish review is intentionally left to the parent agent. No commit, push or publication was performed.
