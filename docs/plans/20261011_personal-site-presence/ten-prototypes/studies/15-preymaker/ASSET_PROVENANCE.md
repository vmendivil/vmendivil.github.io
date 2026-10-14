# Original asset provenance

All four shipping JPEGs were rendered locally from `tools/scene.js`, an independently authored original Three.js scene. They are synthetic illustrations, not photographs of Victor's equipment, real projects or client outcomes. The same exact authoring specification is embedded in JPEG COM metadata; Impeccable scan returned `4 rasters, 0 missing`.

## Model and materials
- PCB: green board, individual copper traces/vias/pads, chip and pins, scattered passive components, gold double pin header, physically modeled metallic port enclosures, clear lid, four stand-offs and screw slots. No branded board geometry/logo was downloaded.
- Computer: original finned aluminum enclosure with 24 separate cooling fins, screw heads, side vents and front ports. No product ownership or specific product claim.
- Leads: two authored Catmull-Rom tube curves, different materials and modeled connector.
- Notebook: authored ruled canvas texture, hand-set graphite-style questions about requirements and support, spiral rings, paper thickness and pencil.
- Environment: seeded fine-noise tabletop; original studio-light reflection planes, cool directional key/rim, hemisphere fill, soft mapped shadows, ACES tone mapping.

## Cameras and files
- wide.jpg — 2200×1350; opening oblique tabletop. SHA256 `5534d593ccaed2a341ca39f1573921f826a26e01038953c83e00eaf8a86df0c5`.
- portrait.jpg — 1000×1600; independently framed portrait camera, not a crop of the desktop screenshot. SHA256 `65e52cd2a826efca0cd027d0aa2860f717c473333dbc28493c0b2f0592e1572e`.
- detail.jpg — 2000×1150; close board camera. SHA256 `701ed19a2228f2a55165c1b56b405411fa8513d7a2334ee4fcdc44b97eba0986`.
- notes.jpg — 2000×1150; notebook/board oblique camera. SHA256 `b759be7105bfafee3f1dc4480a20401227411527ba241773c916a9cf4289c521`.

## Fonts and tools
Archivo variable font and OFL license retrieved from google/fonts `ofl/archivo/Archivo[wdth,wght].ttf` and `OFL.txt`. Self-hosted runtime font. Three.js is the existing MIT renderer copied with its license into private `tools/` only; it does not ship in runtime. Playwright is the already-installed read-only devPilot dependency. No host tools installed.

## Reference research only
Read the full expansion brief and ref15 findings. Visually inspected archived cinematic case frame `15-preymaker-frame-1-3.jpg` and white ruled contact `15-preymaker-archive.png`. Actual live media previously failed black: not used as intended art direction. Borrowed grammar: edge-to-edge cinematic crops, bold heading scale, minimal chrome, filmstrip reading and ruled white contact. No Preymaker film, pixel asset, logo, model, client/project text, office address, award, source or VFX claim is shipped.
