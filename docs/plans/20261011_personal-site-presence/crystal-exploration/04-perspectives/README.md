# Concept 04 — Perspectives

A self-contained static portrait cabinet. Open `index.html` directly or serve this directory:

```sh
python -m http.server 8404 --bind 127.0.0.1
```

Visit http://127.0.0.1:8404/. No build step, package install, external runtime request, contact backend or analytics. A local preview server was restarted for the independent-review corrections (PID 1149824, terminal session proc_9b5f44ffbc7d); parent may stop it after review.

## What is built
An uneven portrait triptych navigates people, process and technology perspectives. Selecting a portrait changes the selected brass frame and a shared reading notebook, with one blur-resolve transition. Professional content covers repetitive workflows, tools not matching work, Dynamics 365 F&O friction and 15+ years of employed end-to-end delivery experience. The conversation button toggles an explicit demonstration boundary and never sends, stores or collects information.

## Real verification
- Two bounded screenshot rounds, desktop 1440×1000 and mobile 390×844. Final full-page PNGs visually inspected and saved to `.impeccable/review/desktop.png` and `mobile.png`.
- Final document widths 1425px (1440px viewport with scrollbar) and 390px (390px viewport): no horizontal overflow at inspected widths.
- Three images and both local font files loaded. Minimum visible text after correction: 12px.
- People and technology selections changed content and `aria-pressed`; native keyboard Space activated the People portrait. Programmatic focus displayed a solid outline. An initial raw CDP Enter dispatch did not activate; do not claim Enter independently verified.
- Contact demo opened, `aria-expanded` reflected state, localStorage remained empty. Code has no form, fetch, storage call or delivery endpoint.
- Reduced motion emulation matched true and notebook animation computed to `none`; content remained present.
- Internal anchor targets resolved. Local HTTP returned 200. `node --check script.js` passed.
- Contrast calculations: ink/wall 14.70:1; muted/wall 9.17:1; ink/teal 8.19:1; secondary/teal 6.10:1; button text/brass 9.02:1. These are source solid-color pair calculations, not a full accessibility certification.
- Detector ran exactly once, producing 12 warnings in `.impeccable/review/detector.json`. Small text warnings corrected together; all visible text now >=12px. Notebook padding warning contradicted by computed insets: desktop 65px/128.25px, mobile 35px/31.1875px. Original findings retained. No second detector run.
- Raster provenance scan: 3 rasters, 0 missing. Total assets including fonts/licenses: 457790 bytes.

## Independent-review corrections
Delivery descriptions are now 14px on both viewport classes; mobile delivery rows stack, the notebook eyebrow is removed, and a brass selection instruction appears immediately below the mobile portraits. Fresh captures replace the original PNGs. Current evidence and visual inspection are in `.impeccable/review/review-fixes.md` and `review-fix-checks.json`; original checks above describe the first build. Detector was not rerun.

## Asset provenance
Three pre-existing user-provided stylized illustrations were visually inspected before placement:
- `assets/front.jpg` ← `/home/trex/vhmc/images/me/faceted-front.png`, resized to 900px using ffmpeg.
- `assets/shoulder.jpg` ← `/home/trex/vhmc/images/me/faceted-over-shoulder.png`, resized to 700px.
- `assets/profile.jpg` ← `/home/trex/vhmc/images/me/faceted-left-profile.png`, resized to 700px.

Source/origin statements embedded as JPEG COM metadata. Original generation prompts unknown; no new artwork generated. Marcellus and Manrope were downloaded from the Google Fonts source repository with their OFL license files and are served locally.

## Impeccable / handoff
PRODUCT.md copied unchanged from parent exploration. Context ran once successfully in this root after a failed first call caused by a nonexistent working directory (no launcher execution on that call). New-work, craft-floor, Experience/Persuade mode and documentation references loaded. Direction seed 8768fa39 recorded in seed.txt; explicit user-pinned cabinet brief overrides alternatives. Surface contract in SURFACE.md. Built-system documentation in DESIGN.md and `.impeccable/design.json`; documenter performed inline under the no-subagent write constraint. Parent handles independent final review; no final ship verdict claimed here.

Limits: two Chromium viewport classes, not all browsers/devices; no automated axe or exhaustive keyboard audit, no published cases, no invented clients/results, no live contact delivery, no production changes, no commits/push/publication. Original seed and documentation files are development artifacts, not page-linked content. Only files within this concept root were created/modified.

## Reusable local workflow
For another constrained static concept: copy product truth inside the authorized root; load context there once; inspect real art; write a code-led direction contract; use independently authored structure and local fonts; inspect desktop/mobile in one batch; run detector once and fix mechanical findings in a single batch; make one final confirmation capture; retain exact findings and caveats; hand off fresh review to parent. Never launder provenance or a failed check into a success claim.
