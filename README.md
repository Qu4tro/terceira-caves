# Grutas da Terceira

A sourced dataset and a single-file offline map of the caves of Terceira
island, Azores — 97 lava tubes, volcanic pits and sea caves, each with WGS 84
coordinates, its official 2024 protection class, and per-cave notes on access,
geology, cave fauna and history. Every fact traces to a primary source.

**Live map:** https://qu4tro.github.io/terceira-caves/ (English / Português)

> [!WARNING]
> **Caving is dangerous, and most of these caves are legally protected.**
> Under [Decreto Legislativo Regional n.º 10/2019/A](sources/dlr_10_2019A.pdf)
> access to class A and B cavities is controlled or restricted, and many
> entrances are on private land. Several sea caves are reachable only by boat
> in calm seas. Coordinates are published for reference and study — they are
> official public data, not an invitation. Do not navigate by this map.

## What's here

| File | What it is |
|---|---|
| `terceira-caves-app.html` | The whole application: one self-contained HTML file, no build step, no external dependencies. Works fully offline from `file://`; when online it can also show OpenStreetMap raster tiles. Bilingual (EN/PT). |
| `terceira_caves.csv` | The master table: 97 caves × 23 columns — name, 2024 class, coordinates, parish, dimensions, the four official scores (geology, biology, dimension, integrity), elevation, volcanic system, flow age, notes, sources. |
| `cavedata.js` | Per-cave detail (83 entries): access and hazards, geology prose, descriptions, cave-fauna records, all with per-block source citations. |
| `photos.js` + `photos/` | 64 photographs covering 26 caves, all from Wikimedia Commons under free licences, with per-photo credit, licence and source URL (rendered in the app). EXIF stripped. |
| `cave_entrances.json`, `terceira_caves.gpx` | Entrance points and a GPX export of the master table. |
| `sigcava_raw/` | Raw extracts of the official SIGCAVA GIS layers this dataset was reconciled against, including the merged GeoJSON with survey polylines. |
| `sources/` | Archival copies of the primary documents (legal texts, the 1994 survey topographies, the 2019 fauna paper extracts). See [`sources/README.md`](sources/README.md). |
| `RESEARCH.md` | The research notes: what each source says, how conflicts were resolved, and what was deliberately left out. |

## Running the app

Open `terceira-caves-app.html` in a browser — that's it. `cavedata.js` and
`photos.js` are loaded as plain script sidecars; if `photos.js` is absent the
app runs without photos (see `photos.example.js` for the schema). The
included GitHub Actions workflow deploys the same files to GitHub Pages.

## The dataset

The island's official inventory is Anexo I of [Resolução do Conselho do
Governo n.º 163/2024](sources/resolucao_163_2024.pdf), which assigns every
cavity a class (A–D, strictest first) and four 0–5 scores. This repository
covers every official Terceira cavity plus caves documented in the
speleological literature that never entered the inventory. Where sources
disagree (coordinates, lengths, even which cave a name refers to), the
disagreement is kept and noted rather than silently resolved — see
`RESEARCH.md` for the open questions.

## Data sources

- **SIGCAVA** — the official volcanic-cavities GIS of the Azores Government
  (Secretaria Regional do Ambiente e Ação Climática / Direção Regional do
  Ambiente e Ação Climática): coordinates, classes, scores, dimensions,
  survey polylines.
- **Resolução do Conselho do Governo n.º 163/2024** and **Decreto Legislativo
  Regional n.º 10/2019/A** (Jornal Oficial da Região Autónoma dos Açores) —
  the classification and the protection regime.
- **Borges, Pereira & Silva (1994)**, *Grutas e Algares dos Açores. I — Seis
  novas topografias de tubos de lava da ilha Terceira*, Actas do 3.º
  Congresso Nacional de Espeleologia — descriptions and survey topographies.
- **Borges et al. (2019)**, Biodiversity Data Journal 7: e32530 (CC BY 4.0)
  and the GBIF dataset *Azorean Cave Arthropods* — cave fauna.
- **Os Montanheiros** (montanheiros.com) — expedition chronicles and the IPEA
  inventory; the association also runs the island's two show caves.
- **Copernicus GLO-30 DEM** — entrance elevations.
- **OpenStreetMap contributors** (ODbL) — coastline, roads and place names in
  the app's basemap.
- **Wikimedia Commons photographers** — per-photo credits in `photos.js`.

## Licensing

Mixed, by design — see [LICENSE](LICENSE) for the exact boundaries:

- **Code** (the app, the workflow): MIT.
- **Dataset and documentation** (CSV, `cavedata.js`, GPX, GeoJSON, research
  notes): CC BY 4.0, © 2026 Xavier Francisco, with underlying-source
  attributions as listed above.
- **Photographs** (`photos/`): third-party works under their own free
  licences, credited per file in `photos.js`.
- **Primary documents** (`sources/`, `sigcava_raw/`): third-party material
  kept for verifiability; rights remain with their publishers and authors.
