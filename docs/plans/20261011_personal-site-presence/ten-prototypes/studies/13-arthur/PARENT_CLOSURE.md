# 13-arthur — parent closure

## HOLD — desktop WebGL closure still blocked

The independent first pass reproduced a normal 1440×900 WebGL compositor screenshot timeout at the first capture (60s, after fonts loaded). One named repair batch removed synchronous `gl.finish()` and spaced scene updates by 120ms using a cancellable timeout (same geometry/material/shadows/raster). Metrics now measure JS render dispatch, not GPU completion; maximum scheduling rate is approximately eight draws/sec, not the earlier planned20fps. Added truthful disabled Static light in noJS/lite/failure states, Motion reduced on reduced desktop, and mutation/resize synchronization.
Confirmation reproduced the same first normal desktop screenshot timeout. Only one opening bounds/assets check completed; zero fresh captures. **These 13 changes are not browser-certified.** No current pause/resume/hidden or desktop long-reading closure is claimed. Keep public13 unchanged. The exact reproducer is `LP_NUM_THREADS=2 python studies/13-arthur/parent-batch.py --confirm`, served loopback9613, normal1440×900, first `page.screenshot`60s timeout. No further renderer replacement, material simplification or self-QA loop performed. Authorized coordinator must resolve screenshot/rendering responsiveness and rerun affected complete paths before assembly.
Prior six-size evidence matched the pre-edit runtime hashes, but current scene/interface/HTML hashes differ; that evidence is historical for these changes. The historical checkpoint's stale13 capture issue is not closed and is not permission to redesign optical folds.

## Evidence and review boundary
- Session `pending-13-15`; checked dedicated loopback ports9613–9615. Servers stopped in runner finally block. Read-only existing Playwright; LP_NUM_THREADS=2.
- Inspection: `fidelity-evidence/parent-inspection/parent-inspection-results.json` and execution.txt.
- Named confirmation: `fidelity-evidence/parent-confirmation/parent-confirmation-results.json` and execution.txt.
- Current source/reference/capture SHA256 and exact runtime allowlist: `PARENT_SHIPPING_SHA256.json`. Archive reference hashes match all recorded source evidence. No live source access or playback is newly claimed.
- No fresh rendered13 image; previous captures explicitly historical.
- Historical detector never rerun. This is scoped functional review, not a new detector-backed Impeccable critique or user artistic acceptance. Questions skipped: authorized functional closure scope, no aesthetic decision requested.

## Runtime-only handoff
Copy **only** the exact `runtimeAllowlist` in PARENT_SHIPPING_SHA256.json; do not expose tests, docs, provenance metadata, private references, tools or evidence. Do not assemble this HOLD candidate.

## Restrictions and limits
Only assigned studies13/14/15 written. Shared root/preview/manifest/ledger/assembly, siblings, Git/remotes, installs and host configuration untouched. Native Chromium input/trusted emulated touch are not physical Safari/iPhone/GPU assurance. Reference13 archived translucent/mineral composition;14 observed editorial expansion;15 archived film chronology with current live loader limitation. No source assets/code reused, no new professional claims.
