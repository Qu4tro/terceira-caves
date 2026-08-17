/* photos.js — photo sidecar for terceira-caves-app.html.
 *
 * Loaded by a plain <script src> tag; see photos.example.js for the schema.
 * Keys are the exact `name` strings from terceira_caves.csv.
 *
 * Inclusion rule applied here: a photo is listed only when its own source page
 * names the cave (title/description/category) AND places it on Terceira, or is
 * geotagged within ~200 m of the CSV coordinates. Licences are limited to
 * public domain / CC0 / CC BY / CC BY-SA. Files are sRGB JPEG, long edge
 * <= 1600 px, <= 300 KB, EXIF stripped.
 */

window.PHOTOS = {

  "Gruta dos Balcões": [
    { "f": "gruta-dos-balcoes-01.jpg",
      "en": "Lava ledges and pale mineral crust along the main tube.",
      "pt": "Bancadas de lava e crosta mineral clara ao longo do túnel principal.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_dos_Blac%C3%B5es,_forma%C3%A7%C3%B5es_geol%C3%B3gicas,_Biscoitos,_Praia_da_Vit%C3%B3ria,_Terceria,_A%C3%A7ores_1.JPG" },
    { "f": "gruta-dos-balcoes-02.jpg",
      "en": "Secondary mineral crust and small stalactites on the ceiling.",
      "pt": "Crosta mineral secundária e pequenas estalactites no teto.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_dos_Blac%C3%B5es,_forma%C3%A7%C3%B5es_geol%C3%B3gicas,_Biscoitos,_Praia_da_Vit%C3%B3ria,_Terceria,_A%C3%A7ores_3.JPG" },
    { "f": "gruta-dos-balcoes-03.jpg",
      "en": "A mud stalagmite standing on the cave floor.",
      "pt": "Uma estalagmite de lama erguida no piso da gruta.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_dos_Blac%C3%B5es,_forma%C3%A7%C3%B5es_geol%C3%B3gicas,_Estalagemite_de_lama,_Biscoitos,_Praia_da_Vit%C3%B3ria,_Terceria,_A%C3%A7ores_6.JPG" }
  ],

  "Gruta dos Principiantes": [
    { "f": "gruta-dos-principiantes-01.jpg",
      "en": "The tube narrows to a low crawl beyond the lit chamber.",
      "pt": "O túnel estreita-se numa passagem baixa para lá da sala iluminada.",
      "credit": "kallerna",
      "license": "CC0",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_dos_principiantes.jpg" },
    { "f": "gruta-dos-principiantes-02.jpg",
      "en": "Flow ledges curve across the wall of the lava tube.",
      "pt": "Bancadas de escoada curvam ao longo da parede do túnel de lava.",
      "credit": "kallerna",
      "license": "CC0",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_dos_principiantes_2016.jpg" }
  ],

  "Furna d'Água": [
    { "f": "furna-dagua-01.jpg",
      "en": "Lava-crusted roof over the main gallery.",
      "pt": "Teto revestido de lava sobre a galeria principal.",
      "credit": "Vitor Oliveira",
      "license": "CC BY-SA 2.0",
      "url": "https://commons.wikimedia.org/wiki/File:Furna_d%27%C3%81gua_-_Ilha_Terceira_-_Portugal_(3636121038).jpg" },
    { "f": "furna-dagua-02.jpg",
      "en": "The water channel that runs along the floor of the tube.",
      "pt": "O canal de água que corre ao longo do piso do túnel.",
      "credit": "Vitor Oliveira",
      "license": "CC BY-SA 2.0",
      "url": "https://commons.wikimedia.org/wiki/File:Furnas_da_%C3%81gua_-_Ilha_Terceira_-_Portugal_(299497814).jpg" },
    { "f": "furna-dagua-03.jpg",
      "en": "The channel curves away into the dark tube, lit by a caver's headlamp.",
      "pt": "O canal curva para o interior escuro do túnel, iluminado pela lanterna de capacete.",
      "credit": "Vitor Oliveira",
      "license": "CC BY-SA 2.0",
      "url": "https://commons.wikimedia.org/wiki/File:Desafio_Volta_ao_Mundo_-_Furnas_da_%C3%81gua_(299016629).jpg" }
  ],

  "Gruta Brisa Azul": [
    { "f": "gruta-brisa-azul-01.jpg",
      "en": "The sea-cave mouth on the north face of the Ilhéus das Cabras, reachable only by boat.",
      "pt": "A boca da gruta marinha na face norte dos Ilhéus das Cabras, acessível apenas de barco.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_Bela_Azul,_Ilh%C3%A9us_das_Cabras,_ilha_Terceira,_A%C3%A7ores,_Portugal.jpg" },
    { "f": "gruta-dos-ratoes-01.jpg",
      "en": "Backlit view out of the cave mouth on the north face of the Ilhéu das Cabras, about 15 m down.",
      "pt": "Contraluz da boca da gruta, na face norte do Ilhéu das Cabras, a cerca de 15 m de profundidade.",
      "credit": "dive.visitazores.com (Turismo dos Açores)",
      "license": "© Turismo dos Açores — uso pessoal / personal use only",
      "url": "https://dive.visitazores.com/pt-pt/divespots/gruta-do-ilh%C3%A9u-das-cabras" }
  ],

  "Furna das Pombas": [
    { "f": "furna-das-pombas-01.jpg",
      "en": "The cave mouth at the head of the Baía das Pombas cove, on the Agualva coast.",
      "pt": "A boca da gruta ao fundo da Baía das Pombas, na costa da Agualva.",
      "credit": "GTPV",
      "license": "CC BY-SA 4.0",
      "url": "https://commons.wikimedia.org/wiki/File:Gruta_Ba%C3%ADa_das_Pombas.jpg" },
    { "f": "furna-das-pombas-02.jpg",
      "en": "Inside the sea cave looking out to the cove; a caver on the boulder floor gives the scale.",
      "pt": "No interior da furna marinha, a olhar para a enseada; um espeleólogo no piso de blocos dá a escala.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" }
  ],

  "Gruta das Cinco Ribeiras": [
    { "f": "gruta-das-cinco-ribeiras-01.jpg",
      "en": "The lava shore at Cinco Ribeiras. The cave is not visible here: its entrance lies underwater, about 14 m down off this coast.",
      "pt": "A costa de lava das Cinco Ribeiras. A gruta não é visível: a sua entrada fica submersa, a cerca de 14 m de profundidade ao largo desta costa.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Costa_das_Cinco_Ribeiras,_local_da_Gruta_das_Cinco_Ribeiras.jpg" },
    { "f": "gruta-das-cinco-ribeiras-02.jpg",
      "en": "The headland above the dive site; the cave opens on the seabed off this point.",
      "pt": "A ponta sobranceira ao local de mergulho; a gruta abre-se no fundo do mar ao largo desta ponta.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Costa_das_Cinco_Ribeiras,_Ponta,_local_da_Gruta_das_Cinco_Ribeiras1.jpg" },
    { "f": "gruta-das-cinco-ribeiras-03.jpg",
      "en": "Lava boulders on the shore beside the cave site — the cave itself is reached only by boat and diving.",
      "pt": "Blocos de lava na costa junto ao local da gruta — o acesso à gruta faz-se apenas de barco e em mergulho.",
      "credit": "José Luís Ávila Silveira / Pedro Noronha e Costa",
      "license": "Public domain",
      "url": "https://commons.wikimedia.org/wiki/File:Costa_pr%C3%B3xima_%C3%A0_Gruta_das_Cinco_Ribeiras,_ilha_Terceira,_A%C3%A7ores,_Portugal.jpg" }
  ],

  /* =======================================================================
   * PERSONAL USE ONLY — NOT REDISTRIBUTABLE
   *
   * The `license` field is authoritative: any entry whose licence reads
   * "uso pessoal / personal use only" was copied from a source that grants
   * no reuse licence. Those are kept for this private, local copy of the
   * app and nothing else. Do NOT publish, mirror, re-host, or otherwise
   * redistribute those image files or their manifest entries, and do not
   * deploy this app publicly with the matching files in photos/.
   * Each one names its rights holder and links back to its source page.
   *
   * EVERY entry below this line is personal-use. Above the line all entries
   * are public domain / CC-licensed EXCEPT furna-das-pombas-02.jpg, which
   * is personal-use and marked as such in its own licence field.
   * ===================================================================== */

  "Gruta das Agulhas": [
    { "f": "gruta-das-agulhas-01.jpg",
      "en": "The mouth of the tube, opening straight onto the sea at Ponta dos Coelhos.",
      "pt": "A boca do túnel, a abrir diretamente sobre o mar na Ponta dos Coelhos.",
      "credit": "Paulo Barcelos / SIARAM (SRAAC)",
      "license": "© SRAAC / SIARAM — uso pessoal / personal use only",
      "url": "https://siaram.azores.gov.pt/cavidades-vulcanicas/gruta-agulhas/_texto.html" },
    { "f": "gruta-das-agulhas-02.jpg",
      "en": "A pale-crusted arch spans the gallery above the rubble floor.",
      "pt": "Uma abóbada com crosta clara cobre a galeria sobre o piso de blocos.",
      "credit": "Paulo Barcelos / SIARAM (SRAAC)",
      "license": "© SRAAC / SIARAM — uso pessoal / personal use only",
      "url": "https://siaram.azores.gov.pt/cavidades-vulcanicas/gruta-agulhas/_texto.html" },
    { "f": "gruta-das-agulhas-03.jpg",
      "en": "Close view of the tiny opal needles, 2–5 mm long, that give the cave its name.",
      "pt": "Grande plano das pequenas agulhas de opala, de 2 a 5 mm, que dão o nome à gruta.",
      "credit": "Paulo Barcelos / SIARAM (SRAAC)",
      "license": "© SRAAC / SIARAM — uso pessoal / personal use only",
      "url": "https://siaram.azores.gov.pt/cavidades-vulcanicas/gruta-agulhas/_texto.html" }
  ],

  "Gruta da Branca Opala": [
    { "f": "gruta-da-branca-opala-01.jpg",
      "en": "Pale opal nodules stand out against the oxidised lava of the side wall.",
      "pt": "Nódulos claros de opala destacam-se na lava oxidada da parede lateral.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-branca-opala/" },
    { "f": "gruta-da-branca-opala-02.jpg",
      "en": "A cream-coloured crust of opaline silica spreads across the ceiling.",
      "pt": "Uma crosta cor de creme de sílica opalina estende-se pelo teto.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-branca-opala/" },
    { "f": "gruta-da-branca-opala-03.jpg",
      "en": "Grape-like clusters of opal — the formations that give the cave its name.",
      "pt": "Cachos de opala em forma de uva — as formações que dão o nome à gruta.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-branca-opala/" }
  ],

  "Gruta do Caldeira": [
    { "f": "gruta-do-caldeira-01.jpg",
      "en": "Pale mineral drapery hangs down the wall of the tube.",
      "pt": "Escorrências minerais claras descem pela parede do túnel.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-caldeira/" },
    { "f": "gruta-do-caldeira-02.jpg",
      "en": "A flow ledge runs along the ribbed, rust-red wall.",
      "pt": "Uma bancada de escoada corre ao longo da parede estriada, cor de ferrugem.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-caldeira/" },
    { "f": "gruta-do-caldeira-03.jpg",
      "en": "A wrinkled lava ceiling with a gold and silver sheen, low over the passage.",
      "pt": "Um teto de lava enrugada com brilho dourado e prateado, baixo sobre a passagem.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-caldeira/" }
  ],

  "Gruta do Chocolate": [
    { "f": "gruta-do-chocolate-01.jpg",
      "en": "Glossy brown lava drips hang from the ceiling — the formations that give the cave its name.",
      "pt": "Escorrências de lava castanha e brilhante pendem do teto — as formações que dão o nome à gruta.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-do-chocolate/" },
    { "f": "gruta-do-chocolate-02.jpg",
      "en": "A pillowy crust of reddish-brown lava coats the wall of the tube.",
      "pt": "Uma crosta de lava castanho-avermelhada, de aspeto amolecido, reveste a parede do túnel.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-do-chocolate/" },
    { "f": "gruta-do-chocolate-03.jpg",
      "en": "Rust-red walls run back into the tube, with a bright ochre deposit on the floor.",
      "pt": "Paredes cor de ferrugem prolongam-se pelo túnel, com um depósito ocre vivo no piso.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-do-chocolate/" }
  ],

  "Gruta da Madre de Deus": [
    { "f": "gruta-da-madre-de-deus-01.jpg",
      "en": "The cave mouth among tree roots and boulders in the woodland at Porto Martins.",
      "pt": "A boca da gruta entre raízes e blocos, no arvoredo de Porto Martins.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" },
    { "f": "gruta-da-madre-de-deus-02.jpg",
      "en": "A lamp picks out pale collapse blocks in the main gallery (April 1992).",
      "pt": "Um foco ilumina blocos de abatimento claros na galeria principal (abril de 1992).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" },
    { "f": "gruta-da-madre-de-deus-03.jpg",
      "en": "A band of pink-white mineral crust on the wall of the tube (April 1992).",
      "pt": "Uma faixa de crosta mineral rosada e branca na parede do túnel (abril de 1992).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" }
  ],

  "Gruta da Malha": [
    { "f": "gruta-da-malha-01.jpg",
      "en": "An oxidised red lava ledge above a floor of collapse blocks.",
      "pt": "Uma bancada de lava oxidada, avermelhada, por cima de um piso de blocos de abatimento.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-malha/" },
    { "f": "gruta-da-malha-02.jpg",
      "en": "Cream-coloured mineral crust on the ceiling, streaked with rust.",
      "pt": "Crosta mineral cor de creme no teto, riscada de ferrugem.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-malha/" },
    { "f": "gruta-da-malha-03.jpg",
      "en": "Ropy pahoehoe lava, still glossy, on the floor of the tube.",
      "pt": "Lava pahoehoe encordoada, ainda brilhante, no piso do túnel.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-malha/" }
  ],

  "Galeria da Queimada": [
    { "f": "galeria-da-queimada-01.jpg",
      "en": "The wide gallery, a caver far off giving the scale (July 2015).",
      "pt": "A galeria larga, com um espeleólogo ao fundo a dar a escala (julho de 2015).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" },
    { "f": "galeria-da-queimada-02.jpg",
      "en": "White straw stalactites and yellow mineral patches on the ceiling.",
      "pt": "Estalactites finas e brancas e manchas minerais amarelas no teto.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" },
    { "f": "galeria-da-queimada-03.jpg",
      "en": "A rust-orange flowstone cascade down the dark wall of the tube.",
      "pt": "Uma cascata de escorrência cor de ferrugem pela parede escura do túnel.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" }
  ],

  "Gruta do Coelho": [
    { "f": "gruta-do-coelho-01.jpg",
      "en": "A pale crusted lava wall above the dark lower passage (March 1992).",
      "pt": "Uma parede de lava com crosta clara sobre a passagem inferior escura (março de 1992).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" },
    { "f": "gruta-do-coelho-02.jpg",
      "en": "A caver's helmet in a side passage under the brown lava ceiling (March 1992).",
      "pt": "O capacete de um espeleólogo numa passagem lateral, sob o teto de lava castanha (março de 1992).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" }
  ],

  "Algar dos Funis": [
    { "f": "algar-dos-funis-01.jpg",
      "en": "Looking down the shaft on a rope, during the January 1995 clearing work.",
      "pt": "Vista para o interior do poço, com corda, durante os trabalhos de desobstrução de janeiro de 1995.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" },
    { "f": "algar-dos-funis-02.jpg",
      "en": "The team at the pit head, in the laurel woodland above the shaft (January 1995).",
      "pt": "A equipa à boca do algar, na mata de laurissilva sobre o poço (janeiro de 1995).",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/montanheiros/cronologia1990/" }
  ],

  "Furna do Cabrito": [
    { "f": "furna-do-cabrito-01.jpg",
      "en": "The water main runs down the middle of the tube; a caver stands at the far end.",
      "pt": "A conduta de água corre pelo meio do túnel; um espeleólogo está ao fundo.",
      "credit": "Paulo Henrique Silva / Câmara Municipal de Angra do Heroísmo",
      "license": "© Câmara Municipal de Angra do Heroísmo — uso pessoal / personal use only",
      "url": "https://angrosfera.cmah.pt/pat-espeleo/FurnaCabrito/intro.html" },
    { "f": "furna-do-cabrito-02.jpg",
      "en": "A spiral stair drops into the chamber, part of the water-capture works.",
      "pt": "Uma escada em caracol desce até à sala, parte das obras de captação de água.",
      "credit": "Paulo Henrique Silva / Câmara Municipal de Angra do Heroísmo",
      "license": "© Câmara Municipal de Angra do Heroísmo — uso pessoal / personal use only",
      "url": "https://angrosfera.cmah.pt/pat-espeleo/FurnaCabrito/intro.html" },
    { "f": "furna-do-cabrito-03.jpg",
      "en": "Cavers beside the built channel that carries the water along the floor.",
      "pt": "Espeleólogos junto ao canal construído que conduz a água ao longo do piso.",
      "credit": "Paulo Henrique Silva / Câmara Municipal de Angra do Heroísmo",
      "license": "© Câmara Municipal de Angra do Heroísmo — uso pessoal / personal use only",
      "url": "https://angrosfera.cmah.pt/pat-espeleo/FurnaCabrito/intro.html" }
  ],

  "Furna do Poço Negro": [
    { "f": "furna-do-poco-negro-01.jpg",
      "en": "The sea-cave mouth above a clear tidal pool on the Raminho coast.",
      "pt": "A boca da furna marinha sobre uma poça de maré transparente, na costa do Raminho.",
      "credit": "Os Montanheiros",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/espeleologia-terceira/" }
  ],

  "Gruta da Achada": [
    { "f": "gruta-da-achada-01.jpg",
      "en": "A caver at the collapse entrance, in the scrub above the Fontinhas fields.",
      "pt": "Um espeleólogo na entrada de abatimento, no matagal sobre os campos das Fontinhas.",
      "credit": "Os Montanheiros, Pingo de Lava n.º 32 (jun. 1995), «Grutas e Algares dos Açores (30) — Ilha Terceira: Gruta da Achada»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/wp-content/uploads/2022/02/PingoLava-32-Jun1995.pdf" },
    { "f": "gruta-da-achada-02.jpg",
      "en": "The low passage: a band of pale crust over a rough aa floor.",
      "pt": "A passagem baixa: uma faixa de crosta clara sobre um piso de lava aa.",
      "credit": "Os Montanheiros, Pingo de Lava n.º 32 (jun. 1995), «Grutas e Algares dos Açores (30) — Ilha Terceira: Gruta da Achada»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/wp-content/uploads/2022/02/PingoLava-32-Jun1995.pdf" }
  ],

  "Gruta da Cascata": [
    { "f": "gruta-da-cascata-01.jpg",
      "en": "The arched tube runs back into the dark, its walls under a pale crust.",
      "pt": "O túnel abobadado prolonga-se para a escuridão, com as paredes sob uma crosta clara.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-cascata/" },
    { "f": "gruta-da-cascata-02.jpg",
      "en": "Looking down into the rounded gallery, lichens still growing near the daylight.",
      "pt": "Vista de cima para a galeria arredondada, com líquenes ainda a crescer junto à luz do dia.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-cascata/" },
    { "f": "gruta-da-cascata-03.jpg",
      "en": "A slab of fallen ceiling rests on the floor of the gallery.",
      "pt": "Uma laje do teto abatido assenta no piso da galeria.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-cascata/" }
  ],

  "Gruta da Terra Mole": [
    { "f": "gruta-da-terra-mole-01.jpg",
      "en": "The arched ceiling carries the gold-and-silver bacterial film the cave is known for.",
      "pt": "O teto abobadado apresenta a película bacteriana dourada e prateada por que a gruta é conhecida.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-terra-mole/" },
    { "f": "gruta-da-terra-mole-02.jpg",
      "en": "Close view of the glazed, wrinkled lava surface of the wall.",
      "pt": "Vista de perto da superfície de lava enrugada e vitrificada da parede.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-terra-mole/" },
    { "f": "gruta-da-terra-mole-03.jpg",
      "en": "Round gas cavities pit the grey wall of the tube.",
      "pt": "Cavidades gasosas arredondadas picam a parede cinzenta do túnel.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-da-terra-mole/" }
  ],

  "Gruta de Santo António": [
    { "f": "gruta-de-santo-antonio-01.jpg",
      "en": "Cavers in the broad, high gallery — scanned from a 1991 bulletin, so the print is coarse.",
      "pt": "Espeleólogos na galeria larga e alta — digitalizado de um boletim de 1991, daí a impressão grosseira.",
      "credit": "Os Montanheiros, Pingo de Lava n.º 12 (dez. 1991), p. 235, «Grutas e Algares dos Açores (10) — Ilha Terceira: Gruta de Santo António»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://www.montanheiros.com/wp-content/uploads/2022/02/PingoLava-12-19Dez1991.pdf" }
  ],

  "Gruta dos Buracos": [
    { "f": "gruta-dos-buracos-01.jpg",
      "en": "Limonite stalactites and a squat stalagmite, the deposits the cave is best known for.",
      "pt": "Estalactites de limonite e uma estalagmite atarracada, os depósitos mais conhecidos da gruta.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-dos-buracos/" },
    { "f": "gruta-dos-buracos-02.jpg",
      "en": "Rust-orange limonite coats a block on the floor of the tube.",
      "pt": "Limonite cor de laranja reveste um bloco no piso do túnel.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-dos-buracos/" },
    { "f": "gruta-dos-buracos-03.jpg",
      "en": "One of the collapse hollows — the \"buracos\" that name the cave — seen from the surface.",
      "pt": "Uma das depressões de abatimento — os \"buracos\" que dão nome à gruta — vista à superfície.",
      "credit": "Freguesia de Biscoitos",
      "license": "© Freguesia de Biscoitos — uso pessoal / personal use only",
      "url": "https://freguesiabiscoitos.com/patrimonionatural/gruta-dos-buracos/" }
  ],

  "Gruta da Canada das Vinhas": [
    { "f": "gruta-da-canada-das-vinhas-01.jpg",
      "en": "Cavers dropping in through the collapsed roof, the way the cave was entered after its discovery in 2016.",
      "pt": "Espeleólogos a descer pelo teto abatido, por onde se entrou na gruta após a descoberta em 2016.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2016), «Notas Espeleológicas», legenda «Gruta da Canada das Vinhas. Terceira»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2016-Nota-expeleologicas.pdf" },
    { "f": "gruta-da-canada-das-vinhas-02.jpg",
      "en": "Two cavers crawling along the low lava tube inside.",
      "pt": "Dois espeleólogos a rastejar pelo túnel de lava baixo, no interior.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2016), «Notas Espeleológicas», legenda «Gruta da Canada das Vinhas. Terceira»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2016-Nota-expeleologicas.pdf" }
  ],

  "Gruta do Baldio": [
    { "f": "gruta-do-baldio-01.jpg",
      "en": "The entrance hole in the scrub on the Pico da Fonte do Bastardo lava field.",
      "pt": "O buraco de entrada, no matagal do derrame lávico do Pico da Fonte do Bastardo.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Baldio»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" },
    { "f": "gruta-do-baldio-02.jpg",
      "en": "The drystone wall built just inside the wider entrance to keep livestock out.",
      "pt": "O muro de pedra levantado no interior, junto à entrada mais larga, para impedir a entrada de animais.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Baldio»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" },
    { "f": "gruta-do-baldio-03.jpg",
      "en": "The survey team resting in the tube during the August 2014 exploration.",
      "pt": "A equipa de topografia a descansar no túnel, durante a exploração de agosto de 2014.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Baldio»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" }
  ],

  "Gruta do Martelo": [
    { "f": "gruta-do-martelo-01.jpg",
      "en": "The mossy entrance arch under the trees; the cave is also called Gruta da Terra Mole II.",
      "pt": "A entrada em arco, coberta de musgo, sob as árvores; a gruta também é chamada Gruta da Terra Mole II.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Martelo»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" }
  ],

  "Gruta do Morro da Azenha": [
    { "f": "gruta-do-morro-da-azenha-01.jpg",
      "en": "Cavers going in at the entrance, on the day the cave was found in August 2014.",
      "pt": "Espeleólogos a entrar pela boca da gruta, no dia da sua descoberta, em agosto de 2014.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Morro da Azenha»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" },
    { "f": "gruta-do-morro-da-azenha-02.jpg",
      "en": "Rust-orange lava crusts along the wall of the tube.",
      "pt": "Crostas de lava cor de ferrugem ao longo da parede do túnel.",
      "credit": "Os Montanheiros, Pingo de Lava (dez. 2014), «Notas Espeleológicas», legenda «Gruta do Morro da Azenha»",
      "license": "© Os Montanheiros — uso pessoal / personal use only",
      "url": "https://montanheiros.com/pdf-files/pingo-lava/PingoLava2014-Notas-espeleologicas.pdf" }
  ]

};
