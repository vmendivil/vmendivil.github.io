# Asset provenance

## Shipping assets
- `assets/three.module.js`, `three-LICENSE.txt`: unmodified Three.js revision170 maintained runtime and MIT license, copied from sibling04 library files only. No reference source, scene or CSS copied.
- Bellefair and Karla TTF/OFL files: pre-existing self-hosted google/fonts OFL files retained unchanged.
- `assets/leaf.svg`: pre-existing original prototype favicon retained.
- Arrow SVGs: originally authored24-unit paths,1.4-unit rounded currentColor stroke; directions down, up and northeast.
- No shipping raster files, reference pixels, stock photographs, generated imagery or third-party botanical models.

## Original runtime raster methods
`landscape.js` is the exact reproducible source. Seed23119; generator uses `seed=(Math.imul(seed,1664525)+1013904223)>>>0`, normalized by4294967296. Texture generation precedes geometry generation and consumes that stream.

Both textures are256×256 RGBA CanvasTextures, generated pixel by pixel. Bark luminance `v=.48+.16*sin(x*.43+sin(y*.07)*2)+.1*sin(x*1.3)+random*.16`; gravel luminance `v=.4+random*.3+.08*sin(x*.19)*cos(y*.14)`. RGB is[v*180,v*159,v*125], alpha255. Bark repeats2×3, gravel5×5. sRGB; maps also drive StandardMaterial bump at.12 bark,.1 stone,.07 ground. Original procedural pigment/noise, not generated photographs.

The reflection raster is an ephemeral half-float WebGLRenderTarget, up to1024×768. Every visible frame renders the actual original scene from a camera mirrored below y=0, with water hidden. A projected texture matrix maps the reflection onto water, whose shader adds normal waves, Fresnel, absorption tint and specular light. No screenshot or reference image is loaded into the reflection.

## Browser evidence rasters
Final desktop/mobile/fullpage PNGs are real Chromium/CDP screenshots of this prototype, not generated artwork. Native compositor captures use `fromSurface:false` because standard surface captures timed out. Full-page captures pin only `.garden` to its prior viewport height while extending the capture viewport; no tiling or reconstructed scene. `desktop.png` is the exact top1440×900 crop of the single valid1440×3548 desktop-full capture, produced by `ffmpeg -i desktop-full.png -vf crop=1440:900:0:0 -frames:v 1 desktop.png`. The crop repairs native-window clipping; no artistic pixels were edited. Mobile390×844 and fullmobile390×4442 are direct one-frame captures. Metadata embeds this origin, not a fabricated image-generation prompt.

`superseded-canvas2d/` contains only historical browser evidence of the rejected prior renderer and is not shipping imagery or evidence of this build.

## Reference
`/home/trex/vhmc/temp/site-reference-research/ameen-archive.webp` was inspected for warm botanical light/material/depth expectations. It was not copied into the artifact or used as a raster texture. The creek bank geometry and composition are independently authored.
