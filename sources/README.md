# sources/

Durable copies of the primary documents behind `terceira_caves.csv` and
`cavedata.js`. Everything here is either an official publication or a
verbatim extract from one — nothing in this folder is inference.

| File | What it is |
|---|---|
| `resolucao_163_2024.pdf` | Resolução do Conselho do Governo n.º 163/2024, de 4 de novembro (Jornal Oficial I série n.º 123). Anexo I lists every Azorean cavity with its class and its four scores; anexo II defines the 0–5 scales and the class thresholds. This is the diploma the `class_2024` column comes from. |
| `resolucao_163_2024_anexo1_terceira.csv` | The 78 Terceira rows of anexo I, parsed out of the PDF: name, class, biologia, geologia, integridade, dimensão. All 70 rows that also exist in SIGCAVA match SIGCAVA exactly on all four scores. |
| `dlr_10_2019A.pdf` | Decreto Legislativo Regional n.º 10/2019/A, de 22 de maio, pp. 1–9 of Jornal Oficial I série n.º 59 — the protection regime itself. Artigo 4.º defines classes A–D, artigo 5.º makes class A a *cavidade vulcânica protegida* inside the island Natural Park, artigo 7.º b) controls or restricts access to classes A and B, artigo 8.º lists the forbidden and conditioned activities. The app's per-class regime text is a faithful précis of these articles. |
| `bdj2019/bdj32530_species_profiles.txt` | Plain-text extract of the 15 species conservation profiles in Borges et al. (2019), *Biodiversity Data Journal* 7: e32530 (CC BY 4.0). Four of the 15 species reach Terceira caves. |
| `bdj2019/terceira_cave_fauna.csv` | The flattened per-cave fauna table that `cavedata.js` is built from: 82 cave × taxon records, 29 taxa, 14 caves. Sources are `B` (the paper), `G` (GBIF dataset *Azorean Cave Arthropods*, Borges et al.) or `BG`. |
| `borges1994/borges1994_topografias.pdf` | Borges, Pereira & Silva (1994), *Grutas e Algares dos Açores. I – Seis novas topografias de tubos de lava da ilha Terceira*, Actas do 3.º Congresso Nacional de Espeleologia, pp. 2–26. |
| `borges1994/borges1994-*.png` | The survey plates from that paper, 300 dpi, deskewed and cropped to the plate frame. |

## The 1994 topographies — what was and was not integrated

The paper's title promises six topographies of Terceira lava tubes:

| # | Cave (as printed) | Figure | In this PDF | Already has a survey plan in the app |
|---|---|---|---|---|
| 1 | Gruta do Caldeira | Fig. 5 | yes (scanned twice, pp. 14 and 15) | yes |
| 2 | Gruta Branca Opala | Fig. 6 | **no — the plate is missing from this scan** | yes |
| 3 | Gruta do Coelho | Fig. 7 | yes | yes |
| 4 | Gruta da Achada | Fig. 8 | yes | **no** |
| 5 | Gruta das Mercês II | Fig. 9 | yes | **no** |
| 6 | Gruta da Madre de Deus | Fig. 10 | yes | yes |

So only two of the six would add anything to the map — Gruta da Achada and
Gruta das Mercês II — and those are exactly the two that cannot be placed
honestly. **Neither was integrated as a survey plan.** Reasons:

* No plate in the paper carries a coordinate grid, graticule, UTM tick or
  benchmark. The only positional metadata is the Tabela I military grid
  reference, granular to ~100 m — and the repo already records the Caldeira
  grid reference as sitting 590 m off its true position.
* Achada and Mercês II have no entry in `cave_entrances.json` and no SIGCAVA
  survey polyline (`ter_32` and `ter_42` are official *points*, not lines), so
  there is no control point and no independent shape to fit against. For
  Achada the two available points — SIGCAVA 38.729568/-27.151334 and GBIF
  38.72977/-27.15186 — already disagree by ~51 m.
* Tabela I gives Gruta das Mercês I and Gruta das Mercês II the *same* grid
  reference and the *same* elevation, while SIGCAVA puts them 59 m apart. The
  source cannot say which cave its own reference belongs to.
* No plate states whether its north arrow is true or magnetic north. These are
  1992 compass surveys; Azorean declination at that date is of order 10° W, so
  an unqualified azimuth can rotate a whole plan by about that much.
* The Caldeira sheet mixes scales (plan 1:250, sections 1:200) and the paper
  was mimeographed then photocopied, so printed ratios are unreliable — only
  the graduated bar can be trusted.

To integrate Achada or Mercês II properly, someone needs, per cave: a
trustworthy WGS 84 fix on an identifiable point of the drawing (an entrance
mark or station 0), and a statement of the survey's north datum. With those two
things a similarity transform from the scale bar is enough. Without them any
overlay would be a guess dressed as a survey, so the plates stay here as
images.

Two further notes from the same source, recorded but not acted on:
`terceira_caves.csv` gives Gruta do Chocolate 109.7 m where SIGCAVA and the
diploma give 108.7 m, and Algar/Gruta do Pico das Dez 20 m depth where SIGCAVA
gives 14 m.
