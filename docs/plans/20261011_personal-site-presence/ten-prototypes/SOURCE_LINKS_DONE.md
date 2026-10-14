# Source comparison links — complete

Authority: VikH message `1559174714826563705`, author `403734690042740746`, canonical thread `1558888025084268718`.

## Delivered
- All 21 served prototypes have an **Original site** link, opening a separate tab with `noopener noreferrer`.
- Gallery reference names link to the same original URLs. Where a reference-gallery page exists, a separate **View reference gallery** link preserves access to the inspected version.
- Source URLs are recorded explicitly in `preview/manifest.json`; the existing assembly retains these fields.
- The comparison link is preview-only chrome injected by `serve_preview.py`, with `preview/source-links.css` and `preview/source-links.js`. It does not alter any prototype's HTML, scene, reading content or artwork on disk, and it survives selective assembly.
- `source-links.js` places the link away from visible controls and writing, maintains a 44px target, and isolates native activation from background scene shortcuts. Without JavaScript the native link is still available.

## Verified
Run: `node verify_source_links.cjs` (resumable with `SOURCE_FROM=18`).

Evidence: `source-links-verification/results.json`, `summary.json` and desktop/mobile/landscape captures.
- 21 unique prototypes; 63 viewport activation cases.
- Desktop native Enter activation; phone trusted emulated touch; landscape native click. This is not a claim of full Tab-traversal certification across the entire collection.
- Correct literal href, separate tab, null opener, original page URL preserved, target sizing, viewport bounds and hit testing.
- No measured overlaps with existing controls or writing in the tested entry views.
- 21 gallery links and 21 JavaScript-disabled native links.
- Private/traversal/listing routes remain 404.
- First 17 checked under normal motion; 18–21 checked under reduced motion after the software-rendered animated scene stalled the headless test. That timeout is not treated as a new scene defect or authorization to rebuild.
- External navigation was intercepted with a fixture using `**/*` plus local-origin filtering. This proves navigation behavior, not third-party uptime or continued availability of old source designs.
- Detector output retained in `source-link-detector.json`.
- SHA-256 checks confirm all 693 snapshotted study/runtime files, including the 97 original-ten runtime files, remain unchanged. New helper files and gallery manifest/UI changes are outside those protected scene directories.

## Server and retained boundary
Current parent-owned persistent preview: `proc_e3924d9cb4af`, PID `1561790`, http://192.168.30.25:8788/ . Restart with `python -u serve_preview.py --bind 192.168.30.25 --port 8788` from this directory.

Prototype 18's pending PNG provenance operation was NOT retried or bypassed. Its previous served artwork and pending private image both remain byte-for-byte unchanged. No production writes, publishing, commits, router/firewall edits or host-service installation.

Refresh any already-open prototype page to receive the comparison link.
