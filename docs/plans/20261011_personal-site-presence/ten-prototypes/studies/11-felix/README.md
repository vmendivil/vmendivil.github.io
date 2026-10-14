# 11 — Signal Lounge
Standalone original prototype, privately owned under `studies/11-felix` only. Not published or assembled into the parent preview.
## Run
From this study directory:
```sh
python -m http.server 9111 --bind 127.0.0.1
```
Visit http://127.0.0.1:9111/ . Runtime needs only `index.html`, `style.css`, `main.js`, `assets/lounge.svg`, `assets/favicon.svg`, `assets/archivo-black.ttf` (retain font license `assets/OFL.txt`). No build, CDN or secure-context dependency. Do not ship private documentation/test/capture files in the parent assembly.
## Browse
Tune About / Practice / Curiosity / Contact. Read this channel opens the full broadcast transcript. Contact opens its correspondence text directly. Back to the lounge or Escape returns to the same selected channel; Next continues reading. Tab, Enter and Space operate native buttons; optional 1–4 tune channels. Pause rain and reduced-motion stillness never affect reading.
## Reproduce checks
Existing dependency is used read-only; no installation:
```sh
ROUND=final node verify.cjs
node contact-sheets.cjs final
```
`python author-scene.py` reproduces the original vector art deterministically; it is not required at runtime.
Evidence: `results.json`, `initial-results.json`, `.impeccable/review/`. `desktop.png` / `mobile.png` show initial overview; `content-desktop.png` / `content-mobile.png` show Practice opened; `landscape.png` / `content-landscape.png` show short landscape. Each About/Practice/Curiosity screen and reading state has desktop/mobile captures; `contact-screen-*` shows contact entry with the room and title; `contact-*` and `contact-end-*` are continuation/end-of-program positions, not claims of full-page contact capture. All captures are viewport images, not synthesized full pages.
## Limits
Chromium emulation and trusted synthetic touch, not physical iPhone or Safari certification. Artwork is a detailed vector illustration, not a photographic 3D render. Parent independent comparative review and runtime-only LAN assembly/testing remain required. No email/form delivery, login, analytics or external runtime request. The external LinkedIn link is verified as an exact href; no external click/submission was performed.
