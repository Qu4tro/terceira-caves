# RESEARCH.md — Terceira caves research digest

Compiled 2026-08-16 by the research agent. Machine-friendly tables; one section per research point.
Coordinate convention: `lat,lon` WGS84 decimal degrees. "1994" = Borges, Pereira & Silva 1994 (*Grutas e Algares dos Açores — I: Seis novas topografias de tubos de lava da ilha Terceira*, Actas 3.º Congresso Nacional de Espeleologia, pp. 2–26; table read from page scans `ocr_terceira1994/rot08_band*.png`, `rot09_band*.png` in the old scratchpad). "IPEA" = montanheiros.com/speleoazores/ipea-terceira/. "Nunes 2014" = Nunes et al., Comunicações Geológicas (2014) 101, Especial I, 283-288 (LNEG PDF, local copy `research/lneg_terceira_mapping.pdf|.txt`). "Resolução 163/2024" = Resolução do Conselho do Governo n.º 163/2024 de 4/11 (local `resolucao_layout.txt`). "Cron" = montanheiros.com chronology pages. "PdL" = Pingo de Lava (II série) article PDFs (local copies under scratchpad `research/pdf/`).

---

## 0. DECISIONS NEEDED FROM THE USER

| # | Decision | Recommendation | Evidence (see sections below) |
|---|----------|----------------|-------------------------------|
| D1 | **Merge `Gruta Brisa Azul` + `Gruta dos Ratões` into one row?** They are one cave. | **Merge.** Keep name `Gruta Brisa Azul` (official SIGCAVA/Resolução spelling "Gruta Briza Azul"), aliases: Gruta Briza Azul, Gruta dos Ratões, Gruta do Ilhéu das Cabras. **Coordinates: keep the SIGCAVA point 38.632611,-27.149912** — verified to sit on the north face of Ilhéu Pequeno (western islet), exactly where all sources place the cave. Drop the `Gruta dos Ratões` row's 38.6303,-27.1434 anchor (it sits at the south side of the EASTERN islet — wrong islet and wrong face). Length: 80 m official (IPEA/SIGCAVA/1994) but Barcelos's 2018 re-measurement gives ~50 m × 10 m wide × 7–8 m high — carry both. Depth: fissure runs surface→bottom at ~15 m; dive max 24 m. | §1 row A1; CM Angra (Angrosfera) verbatim: "Gruta Briza Azul ou Gruta dos Ratões"; PdL 2018 *Os Ilhéus das Cabras* (Barcelos): cave on Ilhéu Pequeno, N face, named 28-08-1971 after the boat "Briza Azul"; 1994 table lists ONE marine-erosion cave "Brisa Azul, Ilhéus das Cabras, 80 m"; dive.visitazores: "north face of western islet". |
| D2 | Freguesia of the Ilhéus das Cabras (affects merged row) | SIGCAVA says Feteira; Barcelos 2018 documents that the islets belonged to Feteira only 1911–1913 and have otherwise always been Porto Judeu; pt.wiki Ratões also says Porto Judeu. Suggest `Porto Judeu` with a note, or keep SIGCAVA's `Feteira` for consistency with the official layer. | PdL 2018 pp. 55-56 |
| D3 | **Add `Algar do Carvão` and `Gruta do Natal` rows?** Both are class-A cavities present in SIGCAVA/Resolução but absent from the CSV (presumably because they are managed show caves). | Add them (flagged `show cave`), or state the exclusion policy in the repo. Proposed rows in §2. | §2 |
| D4 | **`Gruta do Terreiro da Macela` coordinates conflict.** SIGCAVA/CSV point 38.766064,-27.251300 (Biscoitos, next to Balcões). But the cave's *discovery record* (PdL 2016 Notas Espeleológicas, p. 81) places it "a umas centenas de metros" from Gruta do Biscoito, near the Terceira golf club (Agualva, ~38.735,-27.15 — golf club at 38.7343,-27.1609 per OSM). Either SIGCAVA misplaced it, or two homonymous sites exist. | Keep SIGCAVA point but add a warning note; ask Montanheiros if possible. CSV note "Same toponym as Balcões' location; likely same system" is likely wrong. | §2/§4 |
| D5 | `Fenda do Monte Brasil` (visited 2024-02-22, Cron) vs CSV `Fenda do Pico Zimbreiro` (Monte Brasil) — same feature? Unresolvable from sources; the 2024 log lists it without comment. | Treat as probably the same; do NOT add a new row; note the 2024 visit on Pico Zimbreiro's row. | §7 |
| D6 | Which of the ~17 documented-but-not-official cavities (§2) get CSV rows? Most have no coordinates (freguesia-level at best). | Add at least: Gruta do Tanque (305.85 m — longer than most C-class caves), Furna do Portão, Gruta da Presa da Genoveva, Gruta do Pico das Caldeirinhas, Gruta do Cerro V, Algar do Fouqué, Gruta dos Piratas, Furna do Frade, Fenda dos Algares, Cova do Caldeirão (Sé), Galerias da Feteira, Gruta da Baía de Vila Maria, Algar das Furnas — all with `coord_type=freguesia-level/unknown`. | §2 |
| D7 | `Algar Adérito de Freitas` point (38.80179,-27.29105) falls in the SEA (GLO-30 = 0 m). 1994 places it at Pico Matias Simão, elev 150 m (cone is 153 m). 2024 team searched for "Algar do Pico Matias Simão" and could NOT find the entrance. | Re-anchor to the Pico Matias Simão cone (~38.7982,-27.2925, area anchor), add alias "Algar do Pico Matias Simão", note "entrance currently lost (2024 search unsuccessful)". | §1, §3, §7 |
| D8 | **Geology notes correction:** CSV notes say "Pau Velho flow (1761)" for Branca Opala, Caldeira, Queimada, Cascata etc. Nunes 2014 (geological mapping + Ar/Ar) shows the 1761 flow contains NO caves; the "Pau Velho" caves belong to the **Pico Galiarte pahoehoe field (<6,600 y BP)** and Galeria da Queimada belongs to the **Pico Gordo flow (~4,480 y BP)**. | Update notes per §4 table (keep "historically attributed to 1761 Pau Velho (Borges 1994)" as secondary note if desired). | §4 |
| D9 | `Gruta das Cinco Ribeiras` access description: CSV says "boat access; entrance ~14 m deep". dive.visitazores describes a shore-entered complex "dive begins in a natural pool", max 16 m; pt.wiki says "acesso é feito directamente pela costa". | Soften to "shore or boat; dive starts from the natural pool at Porto das Cinco Ribeiras; galleries to ~16 m". | §3 |
| D10 | Monte Brasil tubes: CSV note "Inside Monte Brasil" vs IPEA geomorphology field "**Gruta submarina**" for both Tubo 1 & 2 (and both SIGCAVA points fall in the sea — GLO-30 = 0 m; the 1994 survey credit is to French cave-divers P. Brunet & C. Thomas). | Change note to "submarine lava tube off Monte Brasil (IPEA: gruta submarina); surveyed by Brunet & Thomas + A. Silva (1994)". | §1 n.11, §3 |

---

## 1. ALIASES & DUPLICATES

### 1.1 Alias table (csv_name → aliases)

| csv_name | aliases | evidence |
|---|---|---|
| Gruta Brisa Azul | Gruta Briza Azul (official spelling); Gruta dos Ratões; Gruta do Ilhéu das Cabras | Angrosfera/CM Angra: "a conhecida Gruta Briza Azul ou Gruta dos Ratões" (angrosfera.cmah.pt/vulcoes/IlheusCabras/texto.html); PdL 2018 pp. 49-52: baptised 28-08-1971 after the launch "Briza Azul" ("a 'briza' deste último barco se escrevia com 'Z'"); "Gruta dos Ratões... nome pela qual hoje é mais conhecida entre os homens do mar" (eagle rays *Myliobatis aquila*); dive.visitazores.com/pt-pt/divespots/gruta-do-ilhéu-das-cabras |
| Gruta dos Ratões | — DUPLICATE of Gruta Brisa Azul → merge (D1) | same as above; 1994 table lists only ONE marine cave at Ilhéus das Cabras ("Brisa Azul", 80 m, UTM 4869/42876) |
| Gruta do Natal *(not in CSV)* | Galeria Negra (original); Galerias Negras (1994); Gruta do Cavalo (from 1964, horse bones found) | PdL 2025 *Gruta do Natal: bioespeleologia…* (Amorim et al.): "Inicialmente conhecida como Galeria Negra… renomeada como Gruta do Cavalo em 1964… a partir de 1969… Gruta do Natal"; 1994 table row 18: "G. do Natal — Galerias Negras; G. do Cavalo". NOTE: the lead "**Algar** do Cavalo" is not supported by any source — all say **Gruta** do Cavalo. |
| Gruta dos Principiantes | Gruta do Pau Velho; Gruta dos Carvoeiros | 1994 table row 19: "G. do Pau Velho — G. dos Principiantes; G. dos Carvoeiros". CSV already carries these. **"Gruta dos Príncipes": NOT FOUND in any source checked** (montanheiros site, IPEA, wikis, PdL, 1994, catalogue) — treat as unverified/likely corruption of "Principiantes". |
| Gruta do Camelo | Gruta do Carmelo (variant); jointly with Furna de Santa Maria referred to as "Gruta de Santa Maria e do Carmelo" | montanheiros.com/espeleologia-terceira/ photo gallery section "Gruta de Santa Maria e do Carmelo, Porto Judeu". SIGCAVA/IPEA/1994 all keep **two separate caves** (Furna de Santa Maria 320 m at 38.71350,-27.18174; Gruta do Camelo 255.87 m at 38.713465,-27.182011 — ~65 m apart, Cabrito area). Recommendation: keep two rows; record "Carmelo" as spelling variant. |
| Gruta das Agulhas | G. da Salga (1994); Galeria da Salga (initial name) | SIARAM: "foi inicialmente chamada de Galeria da Salga, por estar localizada na Ponta dos Coelhos, na zona da Salga"; 1994 row 9. Distinct from the small 2014 `Gruta da Salga` (25 m) — NOT duplicates (see n.1 below). |
| Gruta dos Balcões | Gruta do Bastião | 1994 table row 21: "G. dos Balcões — G. do Bastião" (new alias, not in CSV) |
| Gruta da Branca Opala | Gruta do Rabão | 1994 row 6 (CSV has it) |
| Gruta de Santo António | Gruta do Recanto | 1994 row 13 (CSV has it) |
| Galeria da Queimada | Cafua Velha | 1994 row 5; Cron 1991-02-03 (CSV has it) |
| Gruta do Martelo | **Gruta da Terra Mole II** | PdL 2014 Notas Espeleológicas, 10-07-2014: "uma nova cavidade vulcânica a que se deu o nome de Gruta da Terra Mole II, ou Gruta do Martelo pois foi encontrado um martelo próximo da entrada". **Resolves CSV note on Gruta da Terra Mole ("A Terra Mole II is also catalogued; location unknown") — Terra Mole II = Martelo, already in CSV at 38.766529,-27.252959.** pt.wiki lists "Gruta da Terra Mole II" as its own entry (duplicate name). |
| Algar Adérito de Freitas | Algar do Pico Matias Simão | Cron 2024-01-11 ("à procura das entradas… do Algar do Pico Matias Simão"); 1994 row: "A. Adérito de Freitas — Pico Matias Simão" |
| Furna do Portão *(not in CSV)* | Cafua do Portão | montanheiros gallery ("Furna do Portão, Altares"); Cron 2024-02-22 ("Cafua do Portão") |
| Galeria do Felisberto Joaquim | Algar do Felisberto Joaquim | Cron 2024-01-18; Cron 1991-01-27/02-02 ("algar nos pastos de Felisberto Joaquim em São Sebastião") |
| Furna das Feiticeiras | Algar das Feiticeiras | Cron 2024-01-11 |
| Algar/Gruta do Mistério | Algar do Mistério + Gruta do Mistério (discovered 24-12-1990, measured 01-01-1991) | Cron 1990/1991 |
| Gruta do Baldio | Gruta dos Baldios (variant) | pt.wiki Lista de grutas dos Açores |
| Furna d'Água | Furna de Água (variant) | pt.wiki list carries both spellings as separate entries (duplicate) |
| Gruta do Morro da Azenha | Gruta dos Morros da Azenha (variant) | pt.wiki list carries both (duplicate entries) |
| Algar dos Funis | (possibly) the algar described by F. Fouqué, *Voyages Géologiques aux Açores* (1873) | Cron 1992-01-19: "segundo parece terá sido este o algar descrito por F. Fouqué…". BUT a separate "Algar do Fouqué" was visited 2024-02-22 (§7) — relationship unresolved. |
| Tubo I/II do Monte Brasil | Tubo 1/2 do Monte Brasil (numbering variants) | IPEA, wiki. See D10: IPEA geomorphology = "Gruta submarina". |

Notes:
1. `Gruta da Salga` (CSV, 38.646524,-27.100941, S. Sebastião) is the small 25 m tube inventoried 09-07-2014 near Gruta das Agulhas (PdL 2014: "~25 m… altura máxima de 70 cm… já era conhecido dos Montanheiros mas nunca havia sido explorado"). It is NOT a duplicate of Agulhas despite Agulhas' old alias "G. da Salga" — keep both rows (CSV note already says this; confirmed).
2. `Furna das Pombas` / `Furna dos Ninhos` / `Furna da Nascente` (Quatro Ribeiras coast) are three DISTINCT marine-erosion caves that share nearly one coordinate in SIGCAVA (all ~38.7951,-27.1957±30 m; 1994 gave all three the same grid ref 4829/42943). Not duplicates, but the points are cliff-section anchors, not individual entrances.
3. Same-name traps confirmed and excluded: `Gruta da Cabana` (Apiaí, Brazil — limestone, en.wiki); `Gruta do Tanque` also exists on **Graciosa** (pt.wiki list) — the Terceira one is a different 2012 discovery; `Furnas do Enxofre` (Terceira) is a **fumarole field, not a cave** (≠ Furna do Enxofre cave, Graciosa); `Furna das Pombas` also on S. Jorge and Pico; `Gruta do Esqueleto`/`Gruta da Ribeira Seca` also on S. Miguel/S. Jorge; S. Jorge has its own "Algar do Carvão" (= Algar do Montoso, Cron 1990).

### 1.2 Freguesia/administrative discrepancies (for the notes field)

| cave | CSV/SIGCAVA | other source |
|---|---|---|
| Gruta do Coelho, Gruta do Natal, Cerro I–III, Gruta Pequena, Algar do Negro, Algar/Gruta do Mistério, Galeria da Queimada | Biscoitos (Praia da Vitória) | IPEA says freguesia **Altares** (Angra) for all of these; PdL 2015 also calls Queimada "freguesia dos Altares". The Lagoa do Negro plateau sits near the triple freguesia boundary. |
| Gruta do Baldio | Vila de São Sebastião | PdL 2014: "pertence à Vila de São Sebastião apesar de grande parte das pessoas acharem que o local está na freguesia do Porto Martins"; flow = Pico da Fonte do Bastardo. Cron 2014-08-21 says "na Fonte do Bastardo". CSV value is correct. |
| Gruta da Canada das Vinhas | Praia da Vitória | PdL 2016: Canada das Vinhas, **freguesia do Porto Martins**; discovered 28-06-2016 by EDA workers digging a lamppost foundation. |
| Gruta de Santo António | Fonte do Bastardo | 1994 said "Porto Martins"; IPEA says Fonte do Bastardo (CSV correct). |
| Algar dos Funis | Serreta (SIGCAVA) | IPEA: Raminho, depth 300 m (CSV already flags). |
| Algar do Canadão | Serreta (SIGCAVA) | IPEA: Santa Bárbara; Cron 1992-03-22 "Serra de Santa Bárbara". |
| Gruta do Esqueleto, Gruta dos Ratos | Porto Judeu (SIGCAVA) | IPEA + pt.wiki: Posto Santo (CSV already flags). |
| Ilhéus das Cabras (Brisa Azul) | Feteira | Porto Judeu per PdL 2018 + pt.wiki (see D2). |

---

## 2. MISSING CAVITIES (documented on Terceira, absent from the CSV)

Baseline counts: Borges 1994 = 53 cavities (31 lava tubes + 8 algares + 4 marine-erosion + 10 other). Catálogo 2014/2020 & Nunes 2014: 69. Official (Resolução 163/2024 = SIGCAVA) = **70** (9 A + 4 B + 56 C + 1 D). IPEA web pages = 68. pt.wikipedia "Lista de grutas dos Açores" = 92 names (with ~4 internal duplicates). Montanheiros count trajectory in their own words: 66 cavities in May 2012 (after Gruta do Tanque), ">70" after the 2014 discoveries. **The "97 documented cavities" figure could not be verified in any online source — flag to user.** The CSV's 81 = SIGCAVA 70 − (Algar do Carvão, Gruta do Natal) + 13 non-SIGCAVA entries.

### 2.1 Proposed rows

| name | class | lat | lon | coord_type | freguesia | concelho | length_m | depth_m | notes | source |
|---|---|---|---|---|---|---|---|---|---|---|
| Algar do Carvão | A | 38.727775 | -27.214652 | official point (SIGCAVA) | Porto Judeu | Angra do Heroísmo | 120 | 90 | Show cave (Os Montanheiros); Monumento Natural Regional (since 1987 Reserva Geológica; MN since 2004); drained conduit of a scoria cone formed ~1,730 y BP over ~3,200 y-old Pico Alto trachyte; unique white amorphous-silica stalactites/stalagmites; bottom lake up to ~15 m, sometimes nearly dry after summer; 1994 elev 629 m, "≈583 m a.s.l." commonly cited, GLO-30 at point = 603 m; first descent 1893; visitor tunnel 1966; ~60k visitors/2019; new CAVE visitor centre under construction since 2024-10 | SIGCAVA; Resolução 163/2024 (A); PdL2023 Geologia; SIARAM; Cron |
| Gruta do Natal | A | 38.737769 | -27.267997 | official point (SIGCAVA); Nunes 2014 main entrance 38.73747,-27.26846 | Biscoitos (IPEA: Altares) | Praia da Vitória | 696.6 | | Show cave (Os Montanheiros, open since 1-6-1999, first lava tube opened to the public in the Azores); aka Galeria Negra/Gruta do Cavalo; Pico do Gaspar fissural system flow (<12,100 y BP, Nunes 2014); ~700 m, max height 12 m, easy floor; Christmas Mass tradition since 1969; CAMões analogue astronaut mission lived inside 22–28 Nov 2023 | SIGCAVA; Resolução 163/2024 (A); Nunes 2014; PdL2025 GrutaNatal; SIARAM |
| Gruta do Tanque | — | | | unknown (freguesia-level: Biscoitos) | Biscoitos | Praia da Vitória | 305.85 | | Discovered by Montanheiros early 2012, announced 24-05-2012 as the island's 66th cavity; 3 openings; several branching tunnels; lava stalactites, silica deposits, yellow moulds, levées, pahoehoe floor; photo set on montanheiros.com/espeleologia-terceira/ | Cron 2012-05-24; pt.wiki Gruta do Tanque; montanheiros gallery |
| Furna do Portão | — | | | unknown (freguesia-level: Altares) | Altares | Angra do Heroísmo | | | aka Cafua do Portão; photo set (4 photos) on montanheiros.com/espeleologia-terceira/; visited during 2024-02-22 georeferencing round | montanheiros gallery; Cron 2024-02-22 |
| Gruta da Presa da Genoveva | — | | | unknown (SE Terceira; visited in one day together with Baldio/Sto António/Sta Catarina/João Caldo Quente/Felisberto Joaquim/Achada) | (S. Sebastião / Fonte do Bastardo area?) | | | | georeferenced/explored/surveyed 2024-01-18 | Cron 2024-01-18 |
| Gruta do Pico das Caldeirinhas | — | | | unknown (Pico das Caldeirinhas is an "old BFZ" scoria cone in the central fissural zone, Nunes 2014 fig. 3 — Biscoitos/Altares uplands) | | | | | georeferenced/explored/surveyed 2024-02-01 (same round as Cascata/Terra Mole/Pequena/Negro/Mistério) | Cron 2024-02-01; Nunes 2014 (cone) |
| Gruta do Cerro V (Cerro 5) | — | | | unknown (Cerro group cluster ≈38.748,-27.271) | Biscoitos/Altares | | | | Visited 2024-02-22 with Cerro 1/2/3 and one unresolved "Gruta do Cerro (?)" — a Cerro IV may also exist | Cron 2024-02-22 |
| Algar do Fouqué | — | | | unknown | | | | | Visited 2024-02-22 (listed between Cafua do Portão and Fenda do Monte Brasil). Name honours F. Fouqué, whose 1873 *Voyages Géologiques aux Açores* describes a large algar; in 1992 the Montanheiros believed that algar was the (obstructed) Algar dos Funis — relationship unresolved | Cron 2024-02-22; Cron 1992-01-19 |
| Gruta dos Piratas | — | | | unknown (Ilhéus das Cabras) | Porto Judeu/Feteira | Angra do Heroísmo | | | Marine-erosion/fracture cave at the Ilhéus das Cabras, named by Prof. F. Cota Rodrigues alongside Brisa Azul ("destacando-se a Gruta Brisa Azul ou dos Ratões e a Gruta dos Piratas"); some of the islet caves are subaquatic | PdL 2018 p. 46 |
| (unnamed) Ilhéu Grande through-cave | — | | | unknown (N side of Ilhéu Grande → channel between the islets) | Porto Judeu/Feteira | Angra do Heroísmo | 240 | | Fissure on the N side of Ilhéu Grande lets a diver swim 240 m through the islet, exiting inside another cave on the channel side ("não sem alguma dificuldade e risco"); channel cave admits small boats; episodic yellow water at its mouth from suspended tuff | PdL 2018 p. 52 |
| Furna do Frade | — | | | unknown (Serra do Morião slope) | (Porto Judeu / S. Sebastião area) | Angra do Heroísmo | | | Searched for on 27-01-1991; "a furna encontrava-se tapada" (entrance blocked); in pt.wiki list | Cron 1991-01-27; pt.wiki list |
| Fenda dos Algares | — | | | unknown (Altares) | Altares | Angra do Heroísmo | | | Measured 07-03-2004 (same day as Terra Mole) | Cron 2004-03-07 |
| Cova do Caldeirão (Sé) | — | | | unknown (Sé / Monte Brasil area?) | Angra (Sé) | Angra do Heroísmo | | 100? | Second Cova do Caldeirão (CSV note on the Serreta one already anticipates it). pt.wiki: "fenda em encosta… profundidade de 100 m" — WARNING: figures identical to Fenda do Pico Zimbreiro; possible wiki copy error | pt.wiki Cova do Caldeirão (Sé) |
| Galerias da Feteira | — | | | unknown (near Pico Geraldes / Pico do Magina / Pico da Vima, Feteira) | Feteira | Angra do Heroísmo | ~100 each | | Several lava tubes ~100 m each | pt.wiki Galerias da Feteira |
| Gruta da Baía de Vila Maria | — | | | unknown (Baía de Vila Maria, S of Praia da Vitória) | (Cabo da Praia / Santa Cruz) | Praia da Vitória | | | Coastal; wiki list entry only (no article) | pt.wiki list |
| Algar das Furnas | — | | | unknown | | | | | wiki list entry only (no article, no data) | pt.wiki list |
| Fenda do Pico do Má-Olho | — | | | unknown (Pico do Má-Olho, Terra Brava) | Biscoitos/Agualva | Praia da Vitória | | 5 | Informal: fenda checked 18-08-2015; only 5 m but rope needed; much obsidian incrusted in the rock | PdL 2015 Notas, 18-08-2015 |

Not proposed as new rows (name variants of existing rows): "Gruta da Terra Mole II" (= Gruta do Martelo), "Gruta dos Morros da Azenha" (= Morro da Azenha), "Gruta dos Baldios" (= Baldio), "Furna de Água" (= Furna d'Água), "Gruta do Funil" in Cron 2024-02-01 (almost certainly the gruta at Algar do Funil), "Fenda do Monte Brasil" (probably = Fenda do Pico Zimbreiro, see D5), "Gruta da Furna da Madre de Deus" (historical name of Madre de Deus, Ormonde 1936).

### 2.2 Borges 1994 full inventory (reference; all 53 names cross-checked against CSV)
All 53 cavities of the 1994 tables map onto current CSV names or the two show caves, except none — i.e. the CSV (+Carvão+Natal) fully covers the 1994 inventory. Aliases used there: Galeria Queimada=Cafua Velha; Branca Opala=G. do Rabão; Agulhas=G. da Salga; Santo António=G. do Recanto; Natal=Galerias Negras/G. do Cavalo; Pau Velho=Principiantes=Carvoeiros; Balcões=G. do Bastião. 1994-only location details worth keeping: Feiticeiras="Outeiro do Bogango", Adérito de Freitas="Pico Matias Simão", Laranjas="Ribeira dos Pães, Lajes", Bugia="Bujia, Lajes", Poço Negro="Serreta" (coastal, elev 0 m), Camarão="Cinco Ribeiras", Zé Grande="Serretinha", Santinha="Estrada das Doze Ribeiras", Mercês="Canada das Mercês, Feteira", Achada="Biscoito das Fontinhas".

---

## 3. PRACTICAL ACCESS (only sourced facts; everything not listed = unknown)

| cave | entrance type | access / gear | constraints & hazards | source |
|---|---|---|---|---|
| Gruta das Agulhas | coastal lava tube; entry down the coastal cliff (arriba) at Ponta dos Coelhos/Salga; base of Pico do Refugo | cliff scramble; low tide + calm sea only (CSV note confirmed) | **In 2023 the sea broke the lava platform at the (only) entrance; visits now "muito problemática" in rough sea; upstream opening obstructed by unstable slabs (2024 attempt abandoned); landowner met at exit (private land)** — SIARAM: "o acesso… hoje… perigoso e difícil devido à ação do mar que partiu partes da rocha que serviam de apoio à entrada" | Cron 2024-01-04; SIARAM |
| Gruta Brisa Azul / Ratões | marine cave, N face of Ilhéu Pequeno, opening ~4 m high at low tide | boat only (10 min from Angra marina, ~15 min stated in 2018; 0.5 nmi off the coast); small boats (≤7 m) can enter and turn inside; divers/snorkelers: entry fissure surface→15 m, dive max 24 m, weak current, "no special certification needed" | Boats entering disturb the eagle rays — recommended to leave the boat outside; 9-m boats need skill | PdL 2018 pp. 51-52; dive.visitazores |
| Gruta das Cinco Ribeiras | underwater gallery complex at Porto das Cinco Ribeiras | dive/snorkel; "dive begins within a natural pool" (shore); max depth 16 m; weak currents; suitable for initiation & night dives | | dive.visitazores "Cinco Ribeiras"; pt.wiki (acesso pela costa) |
| Tubo I & II do Monte Brasil | submarine lava tubes (IPEA: "gruta submarina") | cave diving (surveyed by cave-divers Brunet & Thomas, 1994) | | IPEA; 1994 (topo credit "e") |
| Algar do Carvão | 45 m vertical pit → scree ramp → second drop to lake at −90 m | show cave: staircase/tunnel (public since 1966); winter opening since 2015 | | SIARAM; Cron |
| Gruta do Natal | walk-in tube (show cave) | easy floor, high ceilings; visitor centre | | SIARAM/Angrosfera |
| Furna d'Água | walk-in gallery, W edge of Guilherme Moniz caldera | managed water-supply cave; occasional guided visits (e.g. Pedaços de Mar campaign 03-06-2023; Montanheiros photo expedition 13-06-2025) | active water catchment | Cron 2023/2025; CSV note confirmed |
| Furna do Cabrito | walk-in tube, Cabrito area | visited on guided activities (2023, 2025 photo expedition) | | Cron |
| Algar do Pico do Funil + Gruta do Pico do Funil | pit (8 m/−15 m) + adjacent tube | — | **"terão sido completamente subterradas pelo proprietário em 2021 ou 2022"** — both reportedly buried/filled by the landowner; effectively destroyed/inaccessible | Cron 2024-01-25 |
| Gruta dos Ratos | walk-in tube, Cabrito | — | entrance lost under dense vegetation (2024 search failed) | Cron 2024-01-25 |
| Algar da Canada do Laranjo | small pit/tube (7 m) | — | entrance could not be found in Jan 2024 | Cron 2024-01-11 |
| Algar Adérito de Freitas | algar at Pico Matias Simão | — | entrance could not be found in Jan 2024 | Cron 2024-01-11 |
| Algar dos Funis | vertical algar (IPEA: 300 m depth claim), Raminho | vertical caving gear | found obstructed in 1992; desobstruction attempts 22/29-01-1995 (photos exist) | Cron 1992-01-19, 1995-01-22 |
| Algar do Funil | pit −22 m (1994) | vertical gear | | 1994 |
| Algar do Juncal | fissure, depth 50 m | vertical gear | | IPEA/SIGCAVA |
| Algar/Gruta do Mistério | 12 m entry pit → 151 m tube | rope for the pit (CSV note confirmed) | | 1994; SIGCAVA |
| Algar do Pico das Dez | pit −20 m → 114 m gallery | vertical gear; topo/georef redone 2024-01-11 | | 1994; Cron 2024 |
| Fenda do Pico Zimbreiro | tectonic fissure on Monte Brasil, ~100 m deep | serious vertical terrain | Monte Brasil is a military area (access rules apply) — *inference, not sourced* | IPEA; 1994 (-100 m?) |
| Gruta do Chocolate | 40×40 cm hole (CSV) | crawl entry | discovered 8-03-1987; desobstruction works Jan 1991 | Cron 1980/1991 |
| Gruta da Cascata | tube; 2nd entrance found 14-08-2014 (15 m low crawl, muddy) | | new section "bastante difícil… no inverno, seja completamente impossível o trânsito" (flooding) | PdL 2014 |
| Gruta do Martelo (Terra Mole II) | 2 entrances; max height 0.8 m | crawl | rainwater enters, floor full of mud and debris | PdL 2014 |
| Gruta da Malha Grande | 2 small holes as entrances; max height 2 m | crawl at entrances, mud | | PdL 2014 |
| Gruta do Baldio | 2 entrances: wider one has an internal stone wall (animal barrier); 2nd much smaller, difficult | max height 1.5 m; continuation blocked by a tiny squeeze | | PdL 2014 |
| Gruta do Morro da Azenha | tube >120 m | very narrow muddy sections limit progress | | PdL 2014 |
| Gruta da Branca Opala | 3 entrances (1 skylight + 2 collapse) | walk/crawl | acts as storm-water collector: between survey pts 8–11 the cave FLOODS completely on heavy-rain days ("impossível qualquer tipo de progressão"); mud/organic debris | 1994 pp. 514-535 |
| Gruta da Madre de Deus | walk-in; two entrances; internal 13.5 m pit at NW end (pt 24) | rope for the internal pit | squeeze between pts 12–15 ("passagem rastejante de alguma dificuldade") | 1994 |
| Gruta do Coelho | 3 possible entrances; main entry like a rabbit burrow | crawl entry | large collapse zones; labyrinthine | 1994 |
| Gruta do Caldeira | walk-in under pastures | | ends in an impassable collapse | 1994 (quoting 1986 press) |
| Gruta do Tanque | 3 openings | | mud + humidity entering via the openings | pt.wiki |
| Gruta da Canada das Vinhas | opened by machine in 2016; ~30 m sealed tube | | very limited air exchange noted (no microbial mats) | PdL 2016 |
| Furna das Pombas (Agualva) | sea cave on PR02TER trail (CSV confirmed) | walk | | CSV/IPEA |
| Furna do Poço Negro | coastal erosion cave, Raminho/Serreta cliff (1994 elev 0 m) | coastal | sea state | 1994; IPEA |
| Galeria da Ribeira Seca | walk-in gallery | coordinates + interior photos taken 2024-01-04 | | Cron 2024 |
| Gruta de Santa Catarina | 28 m tube (located 25-10-1992, explored 01-11-1992) | | | Cron 1992 |
| Gruta dos Buracos | multiple "buracos" (holes) as entrances, found 06-12-1992 | | | Cron 1992 |
| Ilhéus das Cabras (landing) | — | landing on the islets is hard: no dock; steps carved in the Ilhéu Pequeno slope still visible | | PdL 2018 |

All other CSV caves: no sourced access data found → `unknown`.

---

## 4. GEOLOGIC CONTEXT

Volcanic framework (catalogue 2020; Nunes 2014; PdL2023 field guide): four polygenetic caldera volcanoes — **Cinco Picos–Serra do Cume** (oldest, E), **Guilherme Moniz** (>400 ka, centre-S), **Pico Alto** (centre-N), **Santa Bárbara** (~1 Ma, W, summit 1021 m) — plus the **Basaltic Fissural Zone (BFZ)** in two sectors (central: Pico da Bagacina–Pico do Gaspar lineament; SE: S. Sebastião–Porto Martins & Cinco Picos). ~70% of Terceira caves are in the BFZ. Historical eruptions: 1761 (Mistérios Negros trachyte domes + Mistério Velho dos Biscoitos hawaiite flow), 1867 & 1998–2001 submarine (Serreta).

Key mapped cave–flow correlations (Nunes 2014, Table 1 — entrance UTM26N WGS84 given there; converted values in `research/nunes2014_table1.csv`; they match SIGCAVA points to 0–182 m):

| csv_name | system / flow | age | confidence | source |
|---|---|---|---|---|
| Gruta do Cerro I, II, III; Galeria da Queimada | BFZ central — **Pico Gordo lava flows** | ~4,480±40 y BP (14C under flow) | high | Nunes 2014 |
| Gruta da Malha; Gruta dos Buracos; Gruta dos Balcões; Gruta da Terra Mole; Gruta da Cascata; Gruta dos Principiantes; Gruta do Caldeira; Gruta da Branca Opala; Gruta do Chocolate; Gruta da Chamusca | BFZ central — **"Malha-Balcões-Chamusca lava caves system"**: pahoehoe field of Pico Galiarte (aka Pico dos Pedreiros) | Holocene, potentially <6,600 y BP (Ar/Ar limit; sample at Gruta dos Buracos) | high | Nunes 2014. **Supersedes the 1994/CSV "Pau Velho 1761" attribution: "The 1761 A.D. hawaiite lava flow does not incorporate any volcanic cave"** (some cave branches merely run beneath the 1761 flow) |
| Gruta da Santinha; Algar do Pico Gaspar I & II; Algar/Gruta do Mistério; Algar do Negro; Gruta Pequena; Gruta do Natal*; Gruta do Coelho | BFZ central — **Pico do Gaspar fissural system** pahoehoe | <12,100 y BP (Ar/Ar limit; sample at Gruta do Natal) | high | Nunes 2014; Angrosfera Pico Gaspar (episode <12,100 y BP over last-50-ka field, Self 1982) |
| Algar do Funil | BFZ "old formations" | pre-Holocene units | high | Nunes 2014 |
| Furna da Rua Longa | Pico Alto trachyte (PA T) at the shoreline | — | high | Nunes 2014 |
| Algar da Canada do Laranjo; Gruta da Canada do Laranjo | Santa Bárbara basaltic lavas (SB B) forming the Altares sea-cliffs | — | high | Nunes 2014 |
| Gruta do Martelo (Terra Mole II) | same flow as the Pau Velho-area caves → Pico Galiarte field | <6,600 y | medium-high | PdL 2014 ("parece também ter origem na mesma corrente de lava que formou várias grutas na zona do Pau Velho") |
| Gruta da Malha Grande; Algar do Outeiro da Doninha; Gruta do Morro da Azenha; Gruta do Tanque | Biscoitos BFZ lava fields (Galiarte/Gordo area) | Holocene | medium (adjacent to mapped units, not explicitly assigned) | PdL 2014; Nunes 2014 map extent |
| Gruta da Madre de Deus; Gruta de Santo António; Galeria do Sequeira | BFZ SE sector — **Fonte do Bastardo eruption** | 2,000–3,000 y BP | high | Nunes 2014 citing Montesinos et al. 2003 |
| Gruta do Baldio | Pico da Fonte do Bastardo lava flow | 2,000–3,000 y BP | high | PdL 2014 ("derrame lávico do Pico da Fonte do Bastardo") |
| Gruta da Canada das Vinhas | Porto Martins area — same BFZ SE field | ~2–3 ka (inferred) | low-medium | PdL 2016 (location only) |
| Furna d'Água; Furna do Cabrito | **Pico do Carvão flow** filling Guilherme Moniz caldera | ~2,000 y BP | high | Angrosfera Guilherme Moniz: "nascentes… no interior de grutas como a Furna d'Água ou a Furna do Cabrito, originadas pela mesma lava do Pico do Carvão" |
| Furna de Santa Maria; Gruta do Camelo; Gruta do Esqueleto; Gruta dos Ratos | Cabrito area — very likely same Pico do Carvão/caldera-fill basalts | ~2 ka (inferred) | medium | location (1994 "Cabrito"); no explicit mapping found |
| Algar do Carvão* | BFZ scoria cone (~1,730 y BP) drained conduit over Pico Alto peralkaline trachyte (~3,200 y BP) | 1.7/3.2 ka | high | PdL2023 Geologia (Local 4) |
| Gruta das Agulhas | **Pico do Refugo eruption** lavas that ran to the sea (Porto Judeu / Cinco Picos flank) | — | high | Angrosfera Agulhas; SIARAM |
| Gruta da Salga; Gruta do Alicerce | same Porto Judeu coastal flow field as Agulhas | — | medium | PdL 2014 (Salga "próximo da Gruta das Agulhas") |
| Gruta da Achada; Gruta do Golfe; Gruta do Biscoito; Gruta do Terreiro da Macela | Fontinhas/Agualva lava flow ("Biscoito das Fontinhas"; 2024 log: "derrame lávico das Fontinhas") | — | medium | 1994 (Achada loc.); Cron 2024-01-25; PdL 2016 |
| Algar do Pico Alto | fissure on Pico Alto volcano flank | — | high (location) | IPEA (fenda, encosta; −25 m) |
| Algar do Chambre; Algar do Juncal | fissures at Rocha do Chambre / Biscoitos escarpment (Pico Alto/BFZ margin) | — | low | IPEA (tipo: fenda), 1994 |
| Algar do Canadão; Algar do Biscoitinho; Cova do Caldeirão (Serreta, near Pico Negrão); Algar dos Funis; Furna do Poço Negro; Furna das Feiticeiras (Outeiro do Bogango); Algar/Gruta do Pico das Dez | **Santa Bárbara volcano** flanks (fissures/algares in SB basalts & trachytes) | — | medium-high (location; Canadão at 952 m on the upper flank) | IPEA; 1994; Cron 1991-1992 |
| Algar Adérito de Freitas | **Pico Matias Simão spatter cone** — strombolian cone on a radial fissure of Santa Bárbara, coastal Altares, 153 m | — | high | PdL2023 Pico Matias Simão; 1994 |
| Gruta do Camarão; Gruta das Cinco Ribeiras | SW coast lavas of Santa Bárbara volcano | — | medium-high | pt.wiki Cinco Ribeiras ("directamente relacionada com… Vulcão da Serra de Santa Bárbara"); IPEA (Camarão: tubo em arriba) |
| Gruta Brisa Azul/Ratões; Gruta dos Piratas; Ilhéu Grande through-cave | **Ilhéus das Cabras surtseyan tuff cone** on a transverse submarine fault, S flank of Cinco Picos volcano; caves = marine erosion along vertical fractures in palagonitized tuffs | ~22,000 y BP | high | PdL 2018 (Cota Rodrigues quote) |
| Tubo I & II do Monte Brasil; Fenda do Pico Zimbreiro | **Monte Brasil** surtseyan cone area (tubes submarine; Zimbreiro = tectonic fissure) | Holocene cone | medium | IPEA; 1994 |
| Gruta das Mercês I & II; Gruta do Zé Grande I & II; Galerias da Feteira | Feteira/Serretinha coastal platform (Cinco Picos flank / SE BFZ lavas) | — | low | locations only |
| Furna da Bugia; Gruta das Laranjas | Lajes area (NE Terceira, Cinco Picos/Serra do Cume side) | — | low | 1994 locations |
| Furna das Pombas, Furna dos Ninhos, Furna da Nascente | marine-erosion caves in the Quatro Ribeiras coastal lavas (N coast) | — | medium (type certain, substrate unassigned) | IPEA (gruta de erosão, arriba) |
| Galeria do Fanal | coastal gallery in Angra (S. Pedro) cliffs | — | low | IPEA (arriba) |
| Galeria do Felisberto Joaquim; Algar do João Caldo Quente; Galeria da Ribeira Seca; Gruta de Santa Catarina | S. Sebastião/Cabo da Praia — Cinco Picos flank / SE BFZ | — | low-medium | IPEA locations |

---

## 5. DESCRIPTION SOURCE MATERIAL (verbatim PT excerpts for later EN/PT description drafting)

Format: cave → excerpt (source). Long 1994 descriptions for **Gruta do Caldeira** and **Gruta do Coelho** are in `borges1994_ocr_full.txt` (old scratchpad) — not repeated in full here.

- **Gruta das Agulhas** — "A Gruta das Agulhas foi inicialmente chamada de Galeria da Salga, por estar localizada na Ponta dos Coelhos, na zona da Salga… Este tubo de lava, formado por lavas com origem na erupção do Pico do Refugo, já era conhecido de alguns populares quando foi explorado pela primeira vez em 1969 pelos Montanheiros… Foi rebatizada como Gruta das Agulhas, devido à presença de formações minerais secundárias de opala com 2 a 5 mm de comprimento, finas e pontiagudas como agulhas. Os pavimentos são formados por lavas aa e pahoehoe, sendo notáveis os quatro níveis de fluxo de lavas que nalguns troços formam bonitas bancadas laterais. Igualmente notáveis são os exuberantes tapetes bacterianos que revestem partes do teto e das paredes." (SIARAM, siaram.azores.gov.pt/cavidades-vulcanicas/gruta-agulhas/_texto.html, by Paulo Barcelos; shorter variant at angrosfera.cmah.pt/pat-espeleo/agulhas/texto.html adds troglobites *Pseudoblothrus vulcanus, Macarorchestia martini, Pseudosinella ashmoleorum*.)
- **Gruta do Caldeira** — 1994: "A Gruta do Caldeira encontra-se localizada no complexo lávico… Trata-se de um tubo de lava de pequenas dimensões (148 m) cujo desenvolvimento conhecido se faz por debaixo de pastagens. Foi pela primeira vez assinalado em dois artigos da imprensa local (ANÓNIMO, 1986a e 1986b). A condensação de ar saído da gruta provocou preocupação nos habitantes locais…" + 1986 press description of formations ("Estalactites; escorrimentos, bancadas, pavimentos de lava cordada, tudo indicando ser um possível ramal da gruta dos Balcões"). (borges1994_ocr_full.txt, GRUTA DO CALDEIRA section.)
- **Gruta da Branca Opala** — 1994: "Este tubo terá sido descoberto por um particular quando procurava localizar alguns patos fugidiços. Trata-se de um tubo de lava linear de pequenas dimensões (99 m), com características únicas nos Açores (e talvez a nível mundial). Existem três entradas… Nos dias de grandes chuvadas, entre o ponto 8 e 11 toda a gruta fica ocupada por água… Entre os pontos 6 e 13 as paredes laterais e o tecto estão completamente recobertos com materiais de características siliciosas ('Opala') de formas variadas." (borges1994_ocr_full.txt.)
- **Gruta do Coelho** — 1994: "…possivelmente era já conhecido pelos antigos 'Montanheiros'… O nome actual deve-se à configuração da entrada principal, que se assemelha muito a uma toca de coelho. Localiza-se na zona da Lagoa do Negro, pertencendo possivelmente ao mesmo complexo da Gruta do Natal e do Algar do Negro… possui um desenvolvimento algo labiríntico… No seu extremo montante existe uma grande sala com 6-4 metros." (borges1994_ocr_full.txt.)
- **Gruta da Madre de Deus** — 1994 highlights: "a sala 7 está repleta de raízes de árvores…; o estrangulamento desnivelado existente entre os pontos 12 e 15, obrigando a passagem rastejante de alguma dificuldade; a célebre 'Língua de Sogra', ou seja, uma grande laje que se desprendeu duma das paredes laterais…; a existência de duas entradas…, uma sala de grande amplitude (ponto 0) e um algar com 13,50 m de vertical (ponto 24); nos tectos… vários tipos de estalactites lávicas. FAUNA: … a centopeia *Lithobius obscurus azoreae*…" (borges1994_ocr_full.txt; first press ref: Ormonde 1936, *A Furna da Madre de Deus no Porto Martins*.)
- **Gruta Brisa Azul / dos Ratões** — Andrade 1843: "À porta desta furna voltada ao noroeste da entrada, há uma extensa câmara vulcânica cujo pavimento é um profundo mar cheio de peixes, cercado e coberto de uma abóbada de lava amarela petrificada…". Barcelos 2018: "Esta gruta era… já bastante conhecida pelos homens do mar, quando foi explorada pela primeira vez pelos Montanheiros a 28 de agosto de 1971… É então decidido batizar a gruta de Briza Azul, nome de uma das embarcações. A abertura com a maré baixa apresenta uns confortáveis 4 metros de altura… A gruta tem cerca de 50 m de comprimento e 10 m de largura máxima… É possível observar no verão, no seu interior, grande número de 'ratões'… os raios de luz a penetrar pela entrada no interior escuro da gruta, com os ratões a planar na coluna de água…" (PdL 2018 pp. 49-52.)
- **Ilhéus das Cabras (geology, for the merged row)** — Cota Rodrigues: "Os ilhéus das Cabras resultam de erupções submarinas que ocorreram no flanco sul do vulcão dos Cinco Picos… há sensivelmente 22000 anos… A reiterada fracturação vertical dos tufos… aliada à abrasão marinha, originou uma série de cavidades, algumas das quais subaquáticas, destacando-se a Gruta Brisa Azul ou dos Ratões e a Gruta dos Piratas." (PdL 2018 p. 46.)
- **Gruta do Tanque** — "É uma formação geológica bastante extensa, apresentando 305,85 metros de comprimento total divididos por vários túneis… descoberta pela Associação… 'Os Montanheiros' no início de 2012… tem três aberturas para o exterior…" (pt.wikipedia *Gruta do Tanque*.) Gallery captions: "Estalactites lávicas… Depósitos de sílica… Bolores amarelos no teto… Lévees e lava tipo pahoehoe…" (montanheiros.com/espeleologia-terceira/.)
- **Gruta do Baldio** — "Esta gruta está dividida em duas secções, separadas por um desabamento, com um comprimento total próximo dos 100 metros e altura máxima de 1,50 metros. Junto à entrada mais larga, no interior, levantaram um muro de pedra para impedir a entrada de animais… A gruta no geral encontra-se bem preservada, com chão e teto originais…" (PdL 2014 Notas Espeleológicas.)
- **Gruta da Malha Grande** — "…uma nova cavidade vulcânica com mais 100 metros de comprimento e altura máxima de 2 metros… alguns espeleotemas interessantes como: colunas de limonite, outros depósitos secundários, alguma profusão de raízes e estalactites lávicas." (PdL 2014.)
- **Gruta do Morro da Azenha** — "…uma gruta com mais de 120 metros de comprimento… formações bastante interessantes, como linhas de fluxo bem definidas, balcões laterais de considerável dimensão e lava rendilhada." (PdL 2014.)
- **Gruta do Martelo (Terra Mole II)** — "Este tubo lávico parece também ter origem na mesma corrente de lava que formou várias grutas na zona do Pau Velho. A gruta apresenta duas entradas e um comprimento de aproximadamente 80 metros. A altura máxima não ultrapassa os 80 cm. As águas da chuva entram pelas aberturas… deixando o interior cheio de lama e detritos." (PdL 2014.)
- **Gruta da Salga** — "Com apenas cerca de 25 m… e altura máxima de 70 cm não apresentava formações relevantes no seu interior. Este pequeno tubo de lava já era conhecido dos Montanheiros mas nunca havia ainda sido explorado." (PdL 2014.)
- **Gruta da Canada das Vinhas** — "…uma nova gruta descoberta por trabalhadores da EDA, quando uma retroescavadora abria o alicerce para colocação de um poste de iluminação… Tem aproximadamente 30 metros de comprimento. Algumas raízes atravessam as fissuras do teto, mas não foram observados quaisquer tapetes microbianos nas paredes, o que se deve certamente ao isolamento do interior da gruta…" (PdL 2016.)
- **Gruta do Biscoito & Gruta do Terreiro da Macela** — "…terrenos próximos do Clube de Golfe da Ilha Terceira… Descobriu-se um tubo lávico com pouca altura interior e várias aberturas, ao qual se resolveu dar o nome de Gruta do Biscoito… A umas centenas de metros desta gruta fomos espreitar uma outra, a que se deu o nome de Gruta do Terreiro da Macela. Esta é também baixa no interior…" (PdL 2016.)
- **Gruta dos Buracos** — exhibition caption: "Estalactites e estalagmites de depósito de ferro (Gruta dos Buracos, ilha Terceira, Açores)" (PdL 2024 *Grutas nos Céus*); discovery: "Descoberta de buracos perto da zona do Pau Velho, que mais não eram que entradas para a Gruta dos Buracos" (Cron 1992-12-06). CSV's limonite note confirmed by 2007 gallery captions ("Estalagtites de Limonite", "Colunas de Limonite… maior do que eu!").
- **Furna d'Água / Furna do Cabrito (context)** — "…um importante aquífero suspenso, sendo a água para consumo captada em fortes nascentes… no interior de grutas como a Furna d'Água ou a Furna do Cabrito, originadas pela mesma lava do Pico do Carvão que transbordou a leste onde a cumeeira da serra era mais baixa." (angrosfera.cmah.pt/vulcoes/GuilhermeMoniz/texto.html, Paulo Barcelos/CMAH.)
- **Algar do Carvão*** — "A cratera deste algar desce em conduta vertical cerca de 45 m até encontrar uma rampa… A partir daqui há novo desnível vertical, que termina numa lagoa de águas límpidas, fazendo com que o algar tenha cerca de 90 m de profundidade total… As extremamente raras estalactites e estalagmites de sílica amorfa, de cor branca…" (SIARAM.) Geology: "A parte mais antiga na base está relacionada com uma espessa lava de composição traquítica peralcalina do Pico Alto, com uma idade de cerca de 3200 anos, enquanto a parte superior… corresponde à conduta drenada de um pequeno cone de escórias, formado no decurso de uma erupção estromboliana há 1730 anos…" (PdL2023 Geologia, Local 4.)
- **Gruta do Natal*** — "Este tubo de lava, com 697 m de comprimento total, apresenta um trânsito fácil no seu interior, um chão com poucos desníveis e tetos altos… a 25 de dezembro de 1969 a primeira Missa de Natal no seu interior…" (Angrosfera/SIARAM.) + alias history (PdL 2025, §1).
- **Pico Matias Simão (for Algar Adérito de Freitas)** — "…corresponde a um cone de salpicos de lava (spatter), instalado numa fratura radial ao grande vulcão da Serra de Sta. Bárbara… O aparelho vulcânico, que se eleva até aos 153 metros, encontra-se muito dissecado pela ação do mar…" (PdL 2023, Salomé Meneses / Açores Geoparque.)
- **Gruta das Cinco Ribeiras** — "Trata-se de uma gruta costeira cujo acesso é feito directamente pela costa… coordenadas geográficas: Latitude 38º40.5'N e Longitude 27º19.85'W… localizada na zona de influência do Porto das Cinco Ribeiras… A formação geológica desta gruta está directamente relacionada com a existência do Vulcão da Serra de Santa Bárbara." (pt.wikipedia.) Dive framing: gallery complex, dive starts in the natural pool, max 16 m (dive.visitazores "Cinco Ribeiras").
- **Fauna flags for descriptions** (BDJ 7:e32530, `bdj32530.txt`): Terceira caves repeatedly cited as habitat of endemic cave arthropods: Gruta das Agulhas, Gruta do Coelho, Gruta dos Balcões, Gruta da Malha, Gruta do Caldeira, Gruta dos Principiantes, Gruta do Natal, Algar do Carvão (two spider species only known from Algar do Carvão; *Trechus terceiranus*; cave rock-cress fauna). PdL 2025 *Os Artrópodes do Algar do Carvão* adds monitoring history.
- **IPEA per-cave images** (locator maps/photos; usable later): `https://www.montanheiros.com/wp-content/uploads/2019/06/<Name>.jpg` for: Algar-da-Canada-do-Laranjo(-1,-2), Algar-do-Biscoitinho, Algar-do-Canadão, Algar-do-Carvao, Algar-do-Chambre, Algar-do-Funil, Algar-do-João-Caldo-Quente, Algar-do-Juncal, Algar-do-Negro, Algar-do-Pico-Alto, Algar-do-Pico-do-Funil, furna-poco-negro, galeria-queimada, gruta-agulhas, Gruta-da-Branca-Opala, Gruta-da-Cascata, Gruta-da-Chamusca, Gruta-da-Santinha, Gruta-das-Mercês-I-1, Gruta-dos-balcoes, Gruta-dos-buracos, gruta-dos-principiantes, gruta-madre-Deus, gruta-malha, gruta-merces-ii-pl (survey plan), gruta-Natal, gruta-terra-mole.

---

## 6. ENTRANCE ELEVATIONS (Copernicus GLO-30)

Method: single Copernicus GLO-30 COG tile `Copernicus_DSM_COG_10_N38_00_W028_00_DEM` (AWS open data), sampled with `gdallocationinfo` at the CSV coordinates (all 81 rows) + the two show caves at SIGCAVA points. Machine copy: `scratchpad/research/elevations_glo30.csv`.
Caveats: GLO-30 is a **DSM** (surface model) — forested points can read ~5–20 m high; coastal cave values are the cliff-top/terrain at the coordinate, not the sea-level entrance; 0.0 = point falls in the sea (flagged). Heights are EGM2008 geoid metres.
Sanity checks: Gruta do Natal 542.8 vs published 540 (1994); Galeria da Queimada 468.9 vs 473; Balcões 393.3 vs 390; Coelho 534.0 vs 540; Feiticeiras 605.6 vs 600; Agulhas 30.3 (clifftop) vs 5 (cave, 1994). Algar do Carvão: 603.0 at the SIGCAVA point vs "entrance ≈583 m" commonly cited and 629 m in the 1994 table — the SIGCAVA point sits on the vegetated cone; treat 583 m (published) as the entrance value and 603 m as the DSM at-point value.

| name | lat | lon | elevation_m | flag |
|---|---|---|---|---|
| Gruta das Agulhas | 38.64601 | -27.10572 | 30.3 | coastal: clifftop value; cave entrance near sea level (1994: 5 m) |
| Gruta dos Balcões | 38.76383 | -27.25553 | 393.3 | |
| Gruta da Branca Opala | 38.78051 | -27.25156 | 229.8 | 1994 published 280 m |
| Gruta do Caldeira | 38.774287 | -27.258573 | 297.3 | 1994 published 260 m (at its own grid ref) |
| Gruta do Chocolate | 38.78006 | -27.25213 | 233.4 | 1994 published 250 m |
| Gruta da Madre de Deus | 38.68298 | -27.06898 | 68.0 | 1994 published 210 m — 1994 value implausible; DSM value credible |
| Gruta da Malha | 38.75121 | -27.25433 | 498.4 | 1994: 490 m |
| Furna de Santa Maria | 38.71350 | -27.18174 | 441.3 | 1994: 450 m |
| Galeria da Queimada | 38.751408 | -27.267293 | 468.9 | 1994: 473 m |
| Gruta do Coelho | 38.73946 | -27.27155 | 534.0 | 1994: 540 m |
| Gruta dos Principiantes | 38.77014 | -27.25670 | 336.9 | 1994: 350 m |
| Algar da Canada do Laranjo | 38.799258 | -27.285273 | 69.7 | 1994 (algar row): 40 m |
| Algar do Biscoitinho | 38.757344 | -27.357442 | 338.5 | 1994: 510 m (at its own grid ref) |
| Algar do Canadão | 38.746735 | -27.324201 | 952.2 | 1994: 890 m; high Santa Bárbara flank |
| Algar do Chambre | 38.755255 | -27.240570 | 611.8 | 1994: 680 m |
| Algar do Funil | 38.739715 | -27.255074 | 529.7 | 1994: 500 m |
| Algar do João Caldo Quente | 38.694103 | -27.139231 | 346.9 | |
| Algar do Juncal | 38.757906 | -27.239578 | 576.3 | |
| Algar do Negro | 38.736463 | -27.270503 | 556.5 | 1994: 540 m |
| Algar do Outeiro da Doninha | 38.749658 | -27.253636 | 517.4 | |
| Algar do Pico Alto | 38.755990 | -27.210120 | 798.1 | 1994: 800 m |
| Algar do Pico do Funil | 38.723813 | -27.212706 | 563.0 | 1994: 580 m (CSV note "~580 m" confirmed) |
| Algar do Pico Gaspar I | 38.730154 | -27.270928 | 571.0 | 1994 (single "A. do Pico Gaspar"): 540 m |
| Algar do Pico Gaspar II | 38.728354 | -27.269886 | 580.5 | |
| Algar dos Funis | 38.763723 | -27.345756 | 373.6 | |
| Algar/Gruta do Mistério | 38.736020 | -27.271261 | 561.2 | 1994: 545 m (CSV "~545 m" note is the 1994 value) |
| Algar/Gruta do Pico das Dez | 38.710401 | -27.345695 | 349.9 | 1994: 350 m — excellent agreement |
| Cova do Caldeirão | 38.749343 | -27.345123 | 645.8 | Serreta, near Pico Negrão |
| Fenda do Pico Zimbreiro | 38.645009 | -27.229331 | 146.1 | 1994: 180 m |
| Furna d'Água | 38.708180 | -27.178696 | 413.3 | 1994: 400 m; Angrosfera says "~640 m" for the caldera interior — refers to caldera floor, not this point |
| Furna da Nascente | 38.795134 | -27.195991 | 63.3 | coastal cliff; cave at sea level (1994: 0 m) |
| Furna da Rua Longa | 38.797971 | -27.244434 | 6.7 | shoreline |
| Furna das Feiticeiras | 38.715617 | -27.317953 | 605.6 | 1994: 600 m |
| Furna das Pombas | 38.795161 | -27.195622 | 43.0 | coastal cliff; cave at sea level |
| Furna do Cabrito | 38.712463 | -27.183204 | 449.2 | 1994: 400 m |
| Furna do Poço Negro | 38.780761 | -27.361876 | 0.0 | POINT IN SEA — coastal erosion cave (1994 elev 0 m, Serreta) |
| Furna dos Ninhos | 38.795134 | -27.195852 | 60.8 | coastal cliff; cave at sea level |
| Galeria da Ribeira Seca | 38.678829 | -27.092893 | 171.6 | 1994: 175 m |
| Galeria do Fanal | 38.653399 | -27.229311 | 0.0 | POINT IN/AT SEA — cliff-base gallery (IPEA: arriba) |
| Galeria do Felisberto Joaquim | 38.705568 | -27.145728 | 370.9 | |
| Galeria do Sequeira | 38.684016 | -27.073595 | 87.2 | |
| Gruta Brisa Azul | 38.632611 | -27.149912 | 34.4 | N face of Ilhéu Pequeno; cave at sea level (0 m) |
| Gruta da Achada | 38.729568 | -27.151334 | 320.4 | 1994: 310 m |
| Gruta da Canada das Vinhas | 38.677819 | -27.067427 | 21.5 | |
| Gruta da Canada do Laranjo | 38.800658 | -27.283759 | 37.4 | 1994 (gruta row): 25 m |
| Gruta da Cascata | 38.769531 | -27.252567 | 359.3 | 1994: 340 m |
| Gruta da Chamusca | 38.783850 | -27.252997 | 146.6 | |
| Gruta da Malha Grande | 38.747392 | -27.259486 | 495.5 | |
| Gruta da Salga | 38.646524 | -27.100941 | 6.2 | coastal |
| Gruta da Santinha | 38.721512 | -27.266823 | 511.1 | 1994: 490 m |
| Gruta da Terra Mole | 38.767770 | -27.254425 | 366.2 | 1994: 375 m |
| Gruta das Mercês I | 38.652708 | -27.150092 | 148.7 | 1994: 135 m |
| Gruta das Mercês II | 38.652185 | -27.149964 | 139.8 | 1994: 135 m |
| Gruta de Santa Catarina | 38.700430 | -27.050209 | 31.8 | 1994: 40 m |
| Gruta de Santo António | 38.684917 | -27.073435 | 95.7 | 1994: 135 m |
| Gruta do Alicerce | 38.644971 | -27.104628 | 18.0 | coastal |
| Gruta do Baldio | 38.682022 | -27.077019 | 93.6 | |
| Gruta do Biscoito | 38.735786 | -27.151140 | 298.9 | |
| Gruta do Camelo | 38.713465 | -27.182011 | 445.2 | 1994: 465 m |
| Gruta do Cerro I | 38.746365 | -27.271162 | 486.1 | |
| Gruta do Cerro II | 38.748880 | -27.271252 | 471.8 | |
| Gruta do Cerro III | 38.749194 | -27.271644 | 468.4 | |
| Gruta do Esqueleto | 38.710668 | -27.184338 | 452.2 | |
| Gruta do Golfe | 38.731868 | -27.156401 | 314.8 | |
| Gruta do Martelo | 38.766529 | -27.252959 | 379.8 | |
| Gruta do Morro da Azenha | 38.772242 | -27.257365 | 321.9 | |
| Gruta do Pico do Funil | 38.723588 | -27.212671 | 559.4 | 1994: 580 m |
| Gruta do Terreiro da Macela | 38.766064 | -27.251300 | 378.2 | position disputed — see D4 |
| Gruta do Zé Grande I | 38.651394 | -27.148710 | 132.9 | 1994: 125 m |
| Gruta do Zé Grande II | 38.651065 | -27.152007 | 99.5 | |
| Gruta dos Buracos | 38.755976 | -27.253417 | 467.0 | |
| Gruta dos Ratos | 38.709373 | -27.182633 | 445.6 | |
| Gruta Pequena | 38.736689 | -27.270136 | 550.7 | 1994: 540 m |
| Tubo I do Monte Brasil | 38.642824 | -27.217155 | 0.0 | POINT IN SEA — submarine tube (IPEA) |
| Tubo II do Monte Brasil | 38.642527 | -27.217211 | 0.0 | POINT IN SEA — submarine tube (IPEA) |
| Gruta do Camarão | 38.66928 | -27.32840 | 0.0 | POINT IN SEA — coastal tube in cliff (IPEA: arriba); converted 1994 grid is approximate |
| Furna da Bugia | 38.76330 | -27.08366 | 76.5 | 1994: 90 m |
| Algar Adérito de Freitas | 38.80179 | -27.29105 | 0.0 | POINT IN SEA — see D7 (re-anchor to Pico Matias Simão, 1994 elev 150 m) |
| Gruta das Laranjas | 38.78154 | -27.12740 | 25.9 | 1994: 20 m |
| Gruta das Cinco Ribeiras | 38.67500 | -27.33083 | 0.0 | underwater/shoreline cave — 0 is correct |
| Gruta dos Ratões | 38.63030 | -27.14340 | 2.4 | row to be merged into Gruta Brisa Azul (D1) |
| *Algar do Carvão* (not in CSV) | 38.727775 | -27.214652 | 603.0 | published entrance ≈583 m; 1994: 629 m |
| *Gruta do Natal* (not in CSV) | 38.737769 | -27.267997 | 542.8 | published 540 m |

Also available for 27 caves: **published 1994 elevations** (in the flag column above) and **Nunes 2014 main-entrance coordinates** (`research/nunes2014_table1.csv`) — the latter agree with SIGCAVA to 0–182 m and are preferable as *entrance* points for Galeria da Queimada (38.75012,-27.26602), Gruta da Malha (38.74966,-27.25374) and Gruta dos Balcões (38.76320,-27.25355) where the CSV currently uses survey centroids/GBIF.

---

## 7. NEW MONTANHEIROS MATERIAL (2024–2025)

Pingo de Lava 2024 and 2025 issues contain **no "Notas Espeleológicas" article** (index checked: montanheiros.com/publicacoes/pingo-lava-serie2/). The survey campaign record lives in the chronology page (montanheiros.com/os-montanheiros/cronologia2010, "2024" section). Work log:

| date | caves | content |
|---|---|---|
| 2024-01-04 | Gruta das Agulhas; Galeria da Ribeira Seca | Agulhas: upstream-exit dig abandoned (unstable slabs); 2023 sea damage to entrance platform documented; interior photos taken. Ribeira Seca: coordinates recorded; interior photos taken. |
| 2024-01-11 | Gruta do Pico das Dez; Algar das Feiticeiras (=Furna das Feiticeiras) | georeferencing + exploration + topographic survey. Failed to find: Algar da Canada do Laranjo, Algar do Pico Matias Simão (=Adérito de Freitas). |
| 2024-01-18 | Gruta da Presa da Genoveva (new name); Gruta do Baldio; Gruta de Santo António; Gruta de Santa Catarina; Algar do João Caldo Quente; Algar do Felisberto Joaquim; Gruta da Achada | georeferencing + exploration + topo survey. |
| 2024-01-25 | Gruta do Golfe + minor holes in the Fontinhas flow | georef/survey. Algar do Pico do Funil + adjacent gruta found buried by landowner (2021/22). Gruta dos Ratos entrance not found (vegetation). |
| 2024-02-01 | "Gruta do Funil"; Gruta do Pico das Caldeirinhas (new name); Gruta da Cascata; Gruta da Terra Mole; Gruta Pequena; Algar do Negro; Algar/Gruta do Mistério; Gruta da Malha (upstream part; 2 nearby openings checked) | georef/exploration/topo. |
| 2024-02-22 | Gruta do Cerro 2, 3, "Cerro (?)", Cerro 1, **Cerro 5**; **Cafua do Portão**; **Algar do Fouqué**; Fenda do Monte Brasil | georef + exploration. |
| 2025-05-28 | Gruta da Terra Mole | German TV (Galileo X-Plorer) filmed Montanheiros studying the cave. |
| 2025-06-13 | Furna d'Água; Furna do Cabrito | photo expedition for the planned book "Paisagens Subterrâneas" (new photos exist, unpublished). |

Photos: the 2024 chronology mentions photos (Agulhas, Ribeira Seca interiors) but none are published on the page. Published photo sets relevant to CSV caves live at montanheiros.com/espeleologia-terceira/ (Gruta do Tanque ~21 photos, Furna do Portão 4, Gruta dos Buracos ~11 (2007), Galeria Queimada 16 (2015), Principiantes (2007/2015), Balcões (2014 exploration), Terra Mole (2007), Madre de Deus, Malha, Agulhas, "Gruta de Santa Maria e do Carmelo" (4), Furna das Pombas, Furna do Poço Negro, Porto Judeu 2014 exploration, Posto Santo 2014 water-erosion cavity, Golf-area holes 2016). Pingo de Lava PDFs with cave photography: PdL2018 Ilhéus-Cabras (Ratões interior photos 7A-7C, through-cave 8A-8B), PdL2014/2015/2016 Notas (Salga, Martelo, Cascata, Baldio, Morro da Azenha, Malha Grande, Principiantes, Queimada), PdL2024 Grutas-nos-Céus (Gruta dos Buracos iron speleothems; Algar do Carvão silica stalactites).

---

## 8. SOURCES CHECKED THAT YIELDED NOTHING (for Terceira caves)

- speleoazores.com — dead; Wayback CDX (`speleo_cdx.txt`) shows only content now mirrored at montanheiros.com/speleoazores/ (nothing extra; only 3 Terceira cave-map GIFs: Algar do Carvão, Furna d'Água, Gruta do Natal).
- Catálogo das Cavidades Vulcânicas dos Açores (2020 PDF, `catalogo.pdf`): the per-cave chapters cover S. Maria/S. Miguel/Graciosa/S. Jorge/Faial/Flores only — **Terceira (69) and Pico (129) have no individual entries in this volume** (verified against full re-extraction; entry counts match Table I for the other islands exactly).
- Pingo de Lava espeleo expedition reports 2017, 2018, 2019 (Espeleo-triângulo/Espeleo2019/Prospeção-S.Jorge), Espeleo2022: Pico/Faial/S. Jorge/Graciosa only — no Terceira caves.
- PdL 2022 "Proteção do património" PDF: no cave content.
- PdL 2024 "Atuação musical em grutas": Furna do Enxofre (Graciosa) only.
- PdL 2017 "Nova gruta submarina": São Jorge (Ribeira do Nabo), not Terceira.
- geocaching.com: login-gated, skipped (per brief).
- Montanheiros "Documentação" page: statutes/legislation PDFs only.
- "97 documented cavities on Terceira": not found on montanheiros.com, in Pingo de Lava PDFs, the chronology, the Resolução, or web search — unverified (see §2 counts).
- "Gruta dos Príncipes": no occurrence anywhere (only "Principiantes").
- OSM Nominatim: no entry for the Ilhéus das Cabras (islet outlines obtained from Overpass coastline ways instead: west islet/Ilhéu Pequeno ≈38.6315,-27.1493; east/Ilhéu Grande ≈38.6318,-27.1436; identification confirmed by GLO-30 heights 59 vs 138 m against published 84 vs 147 m).
- opentopodata public API: not used — the Copernicus GLO-30 tile was downloaded and sampled locally instead (equivalent data, no rate limits).
- en.wikipedia "Gruta da Cabana": Brazil (same-name trap; excluded).
- Angrosfera per-cave pages FurnaAgua/FurnaCabrito: text is a mispasted copy of the Algar do Carvão text (site bug) — do not quote those two pages; the Guilherme Moniz volcano page is the good Furna d'Água/Cabrito source. Likewise angrosfera MonteBrasil volcano page repeats the Mistérios Negros text (bug).

## 9. Source registry (primary URLs)

- montanheiros.com: `/speleoazores/ipea-terceira/` (68-entry inventory + images), `/espeleologia-terceira/` (photo galleries), `/os-montanheiros/cronologia1990|2000|2010` (chronology 1990–2025), `/publicacoes/pingo-lava-serie2/` (PDF index), `/gruta-do-natal/`, `/algarCarvao/`.
- Pingo de Lava PDFs (local copies in scratchpad `research/pdf/`): PingoLava2014/2015/2016 Notas-espeleologicas; PingoLava2018-Ilheus-Cabras; PingoLava2023-Pico-Matias-Simao; Pingo-Lava2025-GrutaNatal; Pingo-Lava2025-Artropodes-Algar; Pingo-Lava2024-Grutas-nos-Ceus.
- CM Angra "Angrosfera": angrosfera.cmah.pt `/pat-espeleo.html` (+ agulhas/algar-carvao/natal cave texts), `/vulcoes/*/texto.html` (7 volcano texts incl. IlheusCabras with the "Briza Azul ou Ratões" statement; also as PDF `/vulcoes/IlheusCabras/Ilheus-Cabras.pdf`).
- SIARAM (Gov. Açores; Cloudflare — use curl_cffi): siaram.azores.gov.pt/cavidades-vulcanicas/{gruta-agulhas,gruta-natal,algar-carvao}/_texto.html.
- Nunes et al. 2014: lneg.pt/wp-content/uploads/2020/03/56_1794_ART_CG14_ESPECIAL_I.pdf (local `research/lneg_terceira_mapping.pdf`; Table 1 conversions in `research/nunes2014_table1.csv`).
- Resolução 163/2024 (local `resolucao_layout.txt` in old scratchpad; classes for all 70 official Terceira cavities).
- Borges/Pereira/Silva 1994 (local: `borges1994_6topografias.pdf`, page images incl. rotated table bands under `ocr_terceira1994/`).
- pt.wikipedia: "Lista de grutas dos Açores" (92 Terceira names) + 31 per-cave articles (raw export `research/ptwiki_caves.xml`).
- dive.visitazores.com: divespots `gruta-do-ilhéu-das-cabras`, `cinco-ribeiras`.
- Copernicus GLO-30 tile: copernicus-dem-30m.s3.amazonaws.com Copernicus_DSM_COG_10_N38_00_W028_00_DEM (local `research/glo30_N38_W028.tif`; results `research/elevations_glo30.csv`).
- BDJ fauna paper: doi 10.3897/BDJ.7.e32530 (local `bdj32530.txt`).
