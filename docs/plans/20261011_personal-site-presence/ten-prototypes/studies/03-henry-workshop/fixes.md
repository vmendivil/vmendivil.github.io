# Workshop reviewer fixes

## Changed
- Tightened desktop camera and used a more frontal mobile desk view. Physical monitor, keyboard, notebook, server and envelope are larger; no card-based replacement.
- Removed task-light shadow casting that made sharp black silhouettes behind tools, books and lamp. Added broad warm directional fill and brighter hemispheric bounce. Task-lamp dimming still changes real lighting.
- Deleted the reading eyebrow node and its selection updater, so all reading headings stand alone.
- Updated SURFACE.md, DESIGN.md and token sidecar to describe final camera and lighting.

## Real execution
`fix-checks.py` runs with browser_exec helpers; loopback preview at port 8913. `fixes.json` contains 24 passing assertions: real pointer navigation, native Tab/Enter/Space/Escape, reduced-motion initial pause, mobile reading/no horizontal overflow, assets/fonts, actual canvas raycasts on monitor and envelope, and monitor texture updates. Playwright was not importable in the current project; existing Chromium CDP harness was used without timeout loops.

Settled captures replaced the same paths:
- `.impeccable/review/desktop.png` — 1440×900.
- `.impeccable/review/mobile.png` — 390×844.

Both were inspected together once after this single fix batch. Desk objects are larger and tool/shelf shadow silhouettes are gone. Residual: the left enclosure still reads very dark; mobile retains visible foreground floor and smaller monitor text than desktop. These are disclosed for parent fix-list verdict, not claimed fully resolved or reference-level approved. No fresh console-error audit was performed in this batch.

Original `.impeccable/detector-raw.json`, `results.json`, and VERIFICATION.md remain historical. Detector was deliberately not rerun. No production, preview assembly, commit or outside-study writes. Parent aesthetic verdict remains pending.
