# Clone-ready development handoff

## Delivery scope

Prepared on branch `feat/problem-solving-presence`; root production `index.html` and `_config.yml` are unchanged. Source studies, briefs/planning, authored assets, original research/review evidence, historical failures and assembled comparison runtimes are retained in Git, apart from the explicit exclusions in `.gitignore`.

This supersedes older `workers-running` / `independent-closures-running` status files **for the clone handoff**; those files remain historical, not claims that workers or servers are still active. All22 source studies were assembled for local comparison. This is not production publishing or universal design/physical-device approval.

### Compact upload decision
The original full snapshot was committed locally but never reached the remote branch. Upload throughput was approximately45KB/s for about1GB of evidence. The user explicitly chose **all code/assets/plans/reports now, bulky historical captures local**. The current branch therefore excludes generated screenshot/video/trace history and release copies, while retaining runtime artwork, assembled preview and desktop assembler inputs. JSON results, hash inventories, source code, briefs and reports remain tracked. Historical capture paths can be local-only; they are not required to run the preview. The complete original snapshot remains on local branch `archive/full-evidence-local`, not pushed. Browser/session data and the denied private raster remain excluded from both delivery scopes.

## Repairs and portability

- Removed blanket `/docs/plans/` exclusion, which previously hid essentially all work from Git.
- Added repository-local pinned Playwright + npm lockfile and pinned optional Pillow requirements.
- Added root README with clone, serve, optional assembly, verification and shutdown commands. The supported new `tools/verify-preview.cjs` workflow is independent of the old machine/IP/another project's packages.
- Migrated a subset of historical Playwright imports to repository-local resolution. Some legacy scripts/evidence still use original absolute machine paths/ports; their historical reproduction commands are not certified portable. The root workflow is the supported fresh-clone gate.
- Default preview bind is loopback, not the previous fixed LAN address.
- Assembler enforces the current exact10–12 READY allowlists and hashes; retained fallback assets are included.
- Assembler retains prototype18's six approved preview PNGs after exact hash checks. The blocked private cyan portrait is not included in Git, not copied/published, and no provenance operation was retried. It will be absent from source18 in a clone; the complete approved preview and existing compatibility check copy remain available.
- Vendored/license bytes and raw historical reference/stdout bytes are preserved through explicit Git attributes instead of altering hashes to satisfy whitespace cosmetics. Markdown blank-at-EOF is intentional; authored code whitespace checks pass.

## Executed checks

- Optional assembler executed with locally installed `Pillow==12.0.0`: **22/22 assembled**, ready manifest22, runtime-only public directory.
- `npm run verify:preview`: **44/44** normal-motion desktop1440×900/phone390×844 initial/source-link checks passed. Gallery contains all22 links; no recorded page/HTTP errors, broken decoded eager images or overflow.
- The same run read back every shipping file for10–12 over actual loopback HTTP and compared SHA-256; for HTML it removed only the tested injected comparison chrome before matching source hashes. Native Contact and supplied LinkedIn routes exercised for10–12.
- Clean **compact** Git checkout at a distinct filesystem path: fresh isolated Python virtualenv, pinned Pillow install, `npm ci`,22/22 assembly with the blocked source raster absent, and another44/44 portable smoke checks passed. Cached package downloads/browser binaries were reused; this is clean-checkout proof, not remote-machine or physical-device certification. `clean-checkout-results.json` pins the exact tested source commit.
- Syntax checks: **287 JavaScript/module/CommonJS files and33 Python files**, zero syntax failures.
- First smoke attempt timed out at09 with a20s load budget after reusing a page through eight renderers. It is not counted as a pass. The confirmed runner closes each study page and allows90s; final44 completed. This was test isolation/deadline repair, not an application redesign.
- Existing full-path study evidence and narrow functional closures remain separately labeled in each study; the all22 smoke is not new complete six-viewport/full-journey certification for every study.
- Staging audit excluded browser profiles/sockets/authority files, node_modules, venv/cache/scratch and the blocked private PNG; no staged individual file reaches100MB. A targeted credential-pattern scan of text sources found no suspects.
- Both pre-existing project previews (ports8787,8788) were stopped; the test preview9878 self-closes. Final listener verification is performed before reporting delivery. Unrelated SSH/DNS/file-sharing/Hermes services are deliberately untouched.

## Next machine

Follow root README. The preview itself needs only Python3 and is already assembled; npm/browser dependencies are optional until running browser tests. Bulky raw captures are intentionally local-only per the decision above. Do not start an automatic daemon or blindly restore pending private assets. No commit/push to main or merge/production deployment is part of this handoff.
