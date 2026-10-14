# Personal site — development workspace

Branch: **`feat/problem-solving-presence`**. This branch contains the source studies, planning context, review evidence and assembled comparison preview. The root `index.html` remains the old site; this is local exploration, not a production deployment or design selection.

## Continue on another machine

```sh
git clone --branch feat/problem-solving-presence --single-branch https://github.com/vmendivil/vmendivil.github.io.git
cd vmendivil.github.io
```

The assembled **22-prototype** preview is checked in and needs only Python3:

```sh
python3 docs/plans/20261011_personal-site-presence/ten-prototypes/serve_preview.py
```

Open **http://127.0.0.1:8788/**. Stop with Ctrl+C. No service/daemon is installed or started automatically. To access from another device, deliberately pass `--bind YOUR_LAN_IP`; the old machine's IP is not a portable default.

## Browser verification

Install Node.js/npm and Python3, then:

```sh
npm ci
npx playwright install chromium
npm run verify:preview
```

This reproducible smoke runner starts its own loopback preview on port9878, checks all22 initial views/source links at desktop and phone widths, checks served shipping hashes and native Contact for10–12, and shuts down its server/browser in `finally`. Results: `verification/clone-readiness/results.json`. It is a smoke gate, **not** a replacement for the retained study-specific full-path reviews or physical Safari/GPU testing.

Pinned Playwright is repository-local; the new runner does not depend on another project's `node_modules`. Many historic harnesses have been migrated to the local import; historical evidence and some older scripts still describe machine-specific paths/ports and require adjustment before reuse. Do not treat a failed legacy path as new application evidence.

## Reassemble after changing study sources

The committed preview already contains the assembled runtimes. Reassembly is optional:

```sh
python3 -m venv .venv
# Linux/macOS:
.venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python docs/plans/20261011_personal-site-presence/ten-prototypes/assemble_preview.py
# Windows: use .venv\Scripts\python.exe instead.
```

Use `--only-slug <exact-slug>` to assemble just a changed study. For10–12 the assembler checks the exact READY shipping allowlist/hashes; update the handoff after verification before assembling intentional edits. Do not use historical expansion hash guards as a fresh all-study readiness certificate.

### Prototype18 protected asset

The pending private `studies/18-artisans/assets/cyan-portrait.png` is explicitly excluded from Git. Its denied provenance/publication operation was **not** retried. The approved older PNG remains committed in `preview/18-artisans/assets/`; the assembler hash-checks and retains all six approved preview PNGs, never private source replacements. The source18 folder consequently omits this one asset in a clone; use the complete assembled preview or its existing `closure/runtime-check` compatibility copy for testing. Do not blindly publish/copy private assets or run provenance operations to “fix” this exclusion.

## Evidence and boundaries

- Sources and factual briefs: `docs/plans/20261011_personal-site-presence/ten-prototypes/studies/` and collection briefs.
- Each study's `PARENT_CLOSURE.md` / fidelity reports distinguish current and historical evidence.
- 10–12 exact inventories: `studies/<slug>/fidelity/pending-shipping.json`.
- Migration/assembly record: `verification/clone-readiness/HANDOFF.md`.
- Original reference recordings/screenshots are retained locally; reports, JSON results and inventories are committed. By explicit user choice, bulky generated historical captures are omitted from this branch. Referenced capture paths in old reports may therefore be local-only, not missing application dependencies.
- Browser profiles, sockets/authority files, local dependencies/venvs, assembly scratch and bulky historical captures are ignored. Runtime artwork, all assembled pages and required desktop thumbnail inputs remain committed. The full earlier snapshot is retained locally on `archive/full-evidence-local`, not pushed.
- No project preview server should remain running on the original machine after this handoff. Unrelated SSH, DNS, file-sharing and Hermes services are not website preview processes and were not stopped.
