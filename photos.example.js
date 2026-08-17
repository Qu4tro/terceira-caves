/* photos.example.js — template for the optional photo sidecar.
 *
 * Copy this file to `photos.js` (same directory as terceira-caves-app.html),
 * uncomment the entry below and fill it in. The app loads `photos.js` with a
 * plain <script src> tag: if the file is absent nothing happens, and if a cave
 * has no key here its card simply shows no Photos section.
 *
 * Rules for the photo-finder:
 *
 * - Top-level keys are the EXACT `name` strings from terceira_caves.csv —
 *   accents and apostrophes byte-exact (e.g. "Furna d'Água"; JS-escape the
 *   apostrophe as needed). Unknown keys are silently ignored by the app.
 * - All 6 fields are required per photo. `en`/`pt` captions are one short
 *   sentence each — translate yourself if the source only has one language.
 *   `credit` is the author/photographer as the license requires. `license` is
 *   a short SPDX-ish label ("CC BY-SA 4.0", "CC0", "Public domain"). `url` is
 *   the source page, not the raw image.
 * - Licensing: public domain / CC0 / CC BY / CC BY-SA only. No ND (resizing
 *   makes a derivative), no NC, no "all rights reserved". The attribution line
 *   is rendered under each photo, which satisfies BY.
 * - Files: JPEG, sRGB, long edge <= 1600 px, target <= 300 KB, EXIF stripped.
 *   Put them in a `photos/` subdirectory. Filename = lowercase-ASCII slug of
 *   the cave name + "-NN.jpg" (e.g. gruta-do-chocolate-01.jpg). 1-3 per cave.
 * - This must stay a single valid standalone script: run `node --check photos.js`
 *   after every edit.
 */

window.PHOTOS = {

  // "Gruta das Agulhas": [
  //   { "f": "gruta-das-agulhas-01.jpg",
  //     "en": "Entrance at low tide", "pt": "Entrada na maré baixa",
  //     "credit": "Jane Doe", "license": "CC BY-SA 4.0",
  //     "url": "https://commons.wikimedia.org/wiki/File:..." }
  // ]

};
