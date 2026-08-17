/* cavedata.js — optional data sidecar for terceira-caves-app.html.
 *
 * Loaded by a plain <script src> tag, exactly like photos.js: if the file is
 * absent the 404 is silent and window.CAVEDATA simply stays undefined, so
 * every section it feeds disappears and the rest of the card is untouched.
 *
 * Keys are the exact `name` strings from terceira_caves.csv.
 *
 *   sg  SIGCAVA / Resolução do Conselho do Governo n.º 163/2024 assessment
 *       id    SIGCAVA unique_id, "_ln" appended for the survey-line layer
 *             because the two layers number independently (null: the cave is
 *             in Anexo I but has no GIS feature at all)
 *       g b d i   geologia / biologia / dimensão / integridade, official 0-5
 *                 scale of Anexo II. Score 0 means "no information available"
 *                 in the diploma and is written as null here.
 *       h w   maximum height / width in metres (null when not recorded)
 *       topo  true when SIGCAVA holds an official survey (topografia = Sim)
 *
 *   ac  how you get in: entrance type, gear, tide/sea, land access, hazards
 *   gl  a sentence of geology beyond the flow name the CSV already carries
 *   ds  a short description of the cave itself
 *       en / pt  the text, in English and European Portuguese
 *       sr       the source it is drawn from
 *       Nothing in ac / gl / ds is inferred: every one of them traces to a
 *       source recorded in RESEARCH.md §3, §4 or §5. Caves without a sourced
 *       fact simply have no block.
 *
 *   fa  arthropods recorded in the cave
 *       n   scientific name        au  authority
 *       or  order (or class, in the older source)   fa  family
 *       ec  troglobiont | unconfirmed | eutroglophile   (cave adaptation)
 *       bg  endemic-ter | endemic-azo | endemic | native | introduced
 *       en / pt  common name, when the source gives one
 *       sr  B  = Borges et al. 2019, Biodiversity Data Journal 7: e32530
 *           G  = GBIF, dataset "Azorean Cave Arthropods" (Borges et al.)
 *           M  = Borges, P.A.V., "Fauna Grutas.xls" (sheet Lista), the cave
 *                fauna workbook distributed by Os Montanheiros / SpeleoAzores
 *                (created 2000-01-24, last revised 2005-11-09). GREY
 *                LITERATURE: undated records, no determiner, and nomenclature
 *                of 2000-2005 vintage, transcribed verbatim - a few family
 *                spellings in it are the source's own. Provisional entries in
 *                the workbook (n. sp., "???", names without an authority) were
 *                left out on purpose. Attribution established from content
 *                fingerprinting, the workbook's OLE metadata and two archived
 *                download URLs; it is not a peer-reviewed source.
 *           letters combine when more than one source has the record.
 *
 * Fauna caveat: this is what those sources record, not a complete inventory.
 * Only 14 Terceira caves have any arthropod records at all; a cave with no
 * `fa` block has not been surveyed, which is not the same as empty.
 */

window.CAVEDATA = {
  "Algar do Carvão": {
    "sg": {"id": "ter_1_ln", "g": 5, "b": 5, "d": 5, "i": 4, "h": null, "w": null, "topo": true},
    "ac": {
      "en": "Show cave. The crater drops about 45 m in a vertical conduit to a scree ramp, then a second drop reaches the lake at roughly −90 m. Open to the public through a staircase and tunnel since 1966, and in winter as well since 2015.",
      "pt": "Gruta turística. A cratera desce cerca de 45 m em conduta vertical até uma rampa de escombros, seguindo-se novo desnível que termina na lagoa, a cerca de −90 m. Aberta ao público por escadaria e túnel desde 1966 e, desde 2015, também no inverno.",
      "sr": "SIARAM; Cron"
    },
    "gl": {
      "en": "Two ages in one cavity. The older, lower part is cut in a thick peralkaline trachyte lava from Pico Alto about 3,200 years old; the upper part is the drained conduit of a small scoria cone built in a strombolian eruption 1,730 years ago.",
      "pt": "Duas idades numa só cavidade. A parte mais antiga, na base, está relacionada com uma espessa lava de composição traquítica peralcalina do Pico Alto, com cerca de 3200 anos; a parte superior corresponde à conduta drenada de um pequeno cone de escórias, formado no decurso de uma erupção estromboliana há 1730 anos.",
      "sr": "PdL 2023 (Geologia, Local 4)"
    },
    "ds": {
      "en": "The crater of this algar drops in a vertical conduit for about 45 m until it meets a ramp; from there a second vertical step ends in a lagoon of clear water, so the algar is about 90 m deep in all. Its extremely rare white amorphous-silica stalactites and stalagmites are the reason it is celebrated. The bottom lake reaches some 15 m in depth and is sometimes nearly dry after summer. Two spider species are known from nowhere else.",
      "pt": "A cratera deste algar desce em conduta vertical cerca de 45 m até encontrar uma rampa; a partir daqui há novo desnível vertical, que termina numa lagoa de águas límpidas, fazendo com que o algar tenha cerca de 90 m de profundidade total. São as extremamente raras estalactites e estalagmites de sílica amorfa, de cor branca, que o celebrizaram. A lagoa do fundo chega a ter cerca de 15 m de profundidade e por vezes fica quase seca no fim do verão. Duas espécies de aranhas não são conhecidas de mais nenhum lugar.",
      "sr": "SIARAM; PdL 2025"
    },
    "fa": [
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "B"},
      {"n": "Catops coracinus", "au": "Kellner", "or": "Coleoptera", "fa": "Leiodidae", "sr": "M"}
    ]
  },

  "Gruta das Agulhas": {
    "sg": {"id": "ter_4_ln", "g": 5, "b": 5, "d": 5, "i": 4, "h": 5.4, "w": 4.5, "topo": true},
    "ac": {
      "en": "Coastal lava tube at Ponta dos Coelhos, at the foot of Pico do Refugo. The way in is a scramble down the sea cliff, and only at low tide with a calm sea. In 2023 the sea broke the rock that supported the entrance, and SIARAM now calls the approach dangerous and difficult; the Montanheiros describe visits in rough sea as “muito problemática”. The upstream opening is blocked by unstable slabs — a dig was abandoned in January 2024. Private land.",
      "pt": "Tubo lávico costeiro na Ponta dos Coelhos, na base do Pico do Refugo. Entra-se descendo a arriba, e só na maré baixa e com o mar calmo. Em 2023 o mar partiu a rocha que servia de apoio à entrada e o SIARAM considera hoje o acesso perigoso e difícil; os Montanheiros descrevem as visitas com mar agitado como “muito problemática[s]”. A abertura de montante está obstruída por lajes instáveis — a desobstrução foi abandonada em janeiro de 2024. Terreno privado.",
      "sr": "SIARAM; Cron 2024-01-04"
    },
    "gl": {
      "en": "Formed in lavas from the eruption of Pico do Refugo, which ran down to the sea on the Porto Judeu flank of Cinco Picos.",
      "pt": "Formada por lavas com origem na erupção do Pico do Refugo, que correram até ao mar no flanco de Porto Judeu do vulcão dos Cinco Picos.",
      "sr": "Angrosfera; SIARAM"
    },
    "ds": {
      "en": "First called Galeria da Salga, for the Ponta dos Coelhos in the Salga area. Locals already knew the tube when the Montanheiros first explored it in 1969. It was renamed for the opal needles that grow in it — secondary mineral formations 2 to 5 mm long, thin and sharp. The floors are aa and pahoehoe lava, and four separate flow levels are visible, forming handsome lateral benches in places. The bacterial mats covering parts of the roof and walls are just as remarkable. Three troglobites are recorded here: Pseudoblothrus vulcanus, Macarorchestia martini and Pseudosinella ashmoleorum.",
      "pt": "Foi inicialmente chamada Galeria da Salga, por ficar na Ponta dos Coelhos, na zona da Salga. O tubo já era conhecido de alguns populares quando os Montanheiros o exploraram pela primeira vez, em 1969. Foi rebaptizada pelas agulhas de opala que nela se formam — formações minerais secundárias de 2 a 5 mm, finas e pontiagudas. Os pavimentos são de lavas aa e pahoehoe, notando-se quatro níveis de fluxo que nalguns troços formam bonitas bancadas laterais. Igualmente notáveis são os exuberantes tapetes bacterianos que revestem partes do tecto e das paredes. Estão registados três troglóbios: Pseudoblothrus vulcanus, Macarorchestia martini e Pseudosinella ashmoleorum.",
      "sr": "SIARAM (Paulo Barcelos); Angrosfera"
    },
    "fa": [
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "BM"},
      {"n": "Macarorchestia martini", "au": "Stock, 1989", "or": "Amphipoda", "fa": "Talitridae", "ec": "unconfirmed", "bg": "endemic-ter", "sr": "BM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "BM"},
      {"n": "Chthonius ischnocheles", "au": "(Hermann, 1804)", "or": "Pseudoscorpiones", "fa": "Chthoniidae", "bg": "introduced", "sr": "GM"},
      {"n": "Cryptophagus sp.", "au": "Herbst, 1792", "or": "Coleoptera", "fa": "Cryptophagidae", "sr": "G"},
      {"n": "Phthiracarus (Archiphthiracarus) falciformis", "au": "Morell & Subías", "or": "Acari-Oribatei", "fa": "Phthiracaridae", "bg": "endemic", "sr": "M"},
      {"n": "Scheloribates laevigatus", "au": "(C.L. Koch)", "or": "Acari-Oribatei", "fa": "Scheloribatidae", "sr": "M"},
      {"n": "Dysdera crocata", "au": "C.L. Koch", "or": "Araneae", "fa": "Dysderidae", "sr": "M"},
      {"n": "Eidmanella pallida", "au": "(Emerton)", "or": "Araneae", "fa": "Nesticidae", "sr": "M"},
      {"n": "Lithobius melanopus borgei", "au": "Eason & Ashmole", "or": "Chilopoda", "fa": "Lithobiidae", "bg": "endemic", "sr": "M"},
      {"n": "Cryptops hortensis", "au": "Leach", "or": "Chilopoda", "fa": "Cryptopidae", "sr": "M"},
      {"n": "Ligia italica", "au": "Fabricius", "or": "Crustacea", "fa": "Ligiidae", "sr": "M"},
      {"n": "Halophiloscia couchi", "au": "(Kinahan)", "or": "Crustacea", "fa": "Oniscidae", "sr": "M"},
      {"n": "Armadilloniscus littoralis", "au": "(Budde-Lund)", "or": "Crustacea", "fa": "Scyphacidae", "sr": "M"},
      {"n": "Orchestia chevreuxi", "au": "De Guerne", "or": "Crustacea", "fa": "Talitridae", "bg": "endemic", "sr": "M"},
      {"n": "Trichoniscus pygmeus", "au": "Sars", "or": "Crustacea", "fa": "Trichonoscidae", "sr": "M"},
      {"n": "Pseudophonus rufipes", "au": "(De Geer)", "or": "Coleoptera", "fa": "Carabidae", "sr": "M"},
      {"n": "Ptenidium pusillum", "au": "(Gyllenhal)", "or": "Coleoptera", "fa": "Ptiliidae", "sr": "M"},
      {"n": "Atheta (s. str.) laticollis", "au": "(Stephens)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "M"},
      {"n": "Disparrhopalites patrizii", "au": "(Cassagnau & Delamare)", "or": "Collembola", "fa": "Arrhopalitidae", "sr": "M"},
      {"n": "Pseudosinella azorica", "au": "Gama", "or": "Collembola", "fa": "Entomobryidae", "bg": "endemic", "sr": "M"},
      {"n": "Entomobrya dollfusi", "au": "Denis", "or": "Collembola", "fa": "Entomobryidae", "sr": "M"},
      {"n": "Lepidocyrtus curvicollis", "au": "Bourlet", "or": "Collembola", "fa": "Entomobryidae", "sr": "M"},
      {"n": "Folsomia candida", "au": "(Willem)", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Folsomia fimetaria", "au": "(Linnaeus)", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Isotoma maritima meridionalis", "au": "Altner", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Neelus murinus", "au": "Folsom", "or": "Collembola", "fa": "Neelidae", "sr": "M"},
      {"n": "Anisolabis maritima", "au": "Gene", "or": "Dermaptera", "fa": "Carcinophoridae", "sr": "M"}
    ]
  },

  "Gruta dos Balcões": {
    "sg": {"id": "ter_5_ln", "g": 5, "b": 5, "d": 5, "i": 3, "h": 6, "w": 7, "topo": true},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "GM"},
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BGM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "BM"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Creophilus maxillosus maxillosus", "au": "(Linnaeus, 1758)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Meta marianae", "au": "(Scopoli)", "or": "Araneae", "fa": "Tetragnathidae", "sr": "M"},
      {"n": "Lithobius pilicornis", "au": "Newport", "or": "Chilopoda", "fa": "Lithobiidae", "sr": "M"},
      {"n": "Oniscus asellus", "au": "(Linnaeus)", "or": "Crustacea", "fa": "Oniscidae", "sr": "M"},
      {"n": "Hydroporus guernei", "au": "Régimbart", "or": "Coleoptera", "fa": "Dystiscidae", "bg": "endemic", "sr": "M"},
      {"n": "Aloconota sulcifrons", "au": "(Stephens)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "M"},
      {"n": "Disparrhopalites patrizii", "au": "(Cassagnau & Delamare)", "or": "Collembola", "fa": "Arrhopalitidae", "sr": "M"},
      {"n": "Lepidocyrtus curvicollis", "au": "Bourlet", "or": "Collembola", "fa": "Entomobryidae", "sr": "M"},
      {"n": "Hypogastrura denticulata", "au": "(Bagnall)", "or": "Collembola", "fa": "Hypogastruridae", "sr": "M"},
      {"n": "Folsomia fimetaria", "au": "(Linnaeus)", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Isotomurus palustris", "au": "(Müller)", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Neelus murinus", "au": "Folsom", "or": "Collembola", "fa": "Neelidae", "sr": "M"},
      {"n": "Tomocerus minor", "au": "(Lubbock)", "or": "Collembola", "fa": "Tomoceridae", "sr": "M"},
      {"n": "Spilopsyllus cuniculi", "or": "Siphonaptera", "fa": "Pulicidae", "sr": "M"}
    ]
  },

  "Gruta da Branca Opala": {
    "sg": {"id": "ter_6_ln", "g": 5, "b": 5, "d": 3, "i": 4, "h": 5, "w": 10, "topo": true},
    "ac": {
      "en": "Three entrances — one skylight and two collapses — with walking and crawling inside. The cave works as a storm-water collector: on heavy-rain days the whole passage between survey points 8 and 11 fills with water and “impossível qualquer tipo de progressão”. Mud and organic debris throughout.",
      "pt": "Três entradas — uma clarabóia e dois abatimentos — e progressão a pé e a rastejar. A gruta funciona como colector de águas pluviais: nos dias de grandes chuvadas toda a galeria entre os pontos 8 e 11 fica ocupada por água, sendo “impossível qualquer tipo de progressão”. Lama e detritos orgânicos por todo o lado.",
      "sr": "Borges 1994 pp. 514-535"
    },
    "ds": {
      "en": "Found by a man looking for runaway ducks. A short linear lava tube of 99 m, with characteristics unique in the Azores and perhaps worldwide: between survey points 6 and 13 the side walls and the roof are completely coated in siliceous material — the “opal” of the name — in varied forms.",
      "pt": "Terá sido descoberta por um particular quando procurava localizar alguns patos fugidiços. É um tubo de lava linear de pequenas dimensões, com 99 m, de características únicas nos Açores e talvez a nível mundial: entre os pontos 6 e 13 as paredes laterais e o tecto estão completamente recobertos com materiais de características siliciosas — a “opala” do nome — de formas variadas.",
      "sr": "Borges 1994"
    },
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Aleochara verna", "au": "Say, 1833", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "G"},
      {"n": "Anotylus nitidifrons", "au": "(Wollaston, 1871)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Laemostenus complanatus", "au": "(Dejean, 1828)", "or": "Coleoptera", "fa": "Carabidae", "bg": "introduced", "sr": "G"},
      {"n": "Paranchus albipes", "au": "(Fabricius, 1796)", "or": "Coleoptera", "fa": "Carabidae", "bg": "introduced", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"}
    ]
  },

  "Gruta do Caldeira": {
    "sg": {"id": "ter_7_ln", "g": 4, "b": 5, "d": 3, "i": 3, "h": 2.6, "w": 5.6, "topo": true},
    "ac": {
      "en": "A walk-in tube running under pastures; it ends in an impassable collapse.",
      "pt": "Tubo de acesso pedonal que se desenvolve por debaixo de pastagens; termina num abatimento intransponível.",
      "sr": "Borges 1994"
    },
    "ds": {
      "en": "A small lava tube, 148 m long, running under pastures. It first reached print in two local newspaper pieces in 1986, after air condensing at the cave mouth alarmed the neighbours. The 1986 reports describe stalactites, flowstone, benches and ropy-lava floors — everything, they wrote, suggesting a branch of Gruta dos Balcões.",
      "pt": "Tubo de lava de pequenas dimensões, com 148 m, que se desenvolve por debaixo de pastagens. Foi assinalado pela primeira vez em dois artigos da imprensa local, em 1986, depois de a condensação do ar saído da gruta ter provocado preocupação nos habitantes. Esses artigos descrevem estalactites, escorrimentos, bancadas e pavimentos de lava cordada — tudo, escreviam, “indicando ser um possível ramal da gruta dos Balcões”.",
      "sr": "Borges 1994 (citando a imprensa local de 1986)"
    },
    "fa": [
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "BM"},
      {"n": "Pseudosinella azorica", "au": "Gama", "or": "Collembola", "fa": "Entomobryidae", "bg": "endemic", "sr": "M"}
    ]
  },

  "Gruta do Chocolate": {
    "sg": {"id": "ter_8_ln", "g": 5, "b": 5, "d": 4, "i": 5, "h": 6.2, "w": 3.6, "topo": true},
    "ac": {
      "en": "The entrance is a hole 40 by 40 cm — a crawl to get in. Discovered 08-03-1987; entrance clearing work took place in January 1991.",
      "pt": "A entrada é um buraco de 40 por 40 cm — entra-se a rastejar. Descoberta em 08-03-1987; houve trabalhos de desobstrução em janeiro de 1991.",
      "sr": "SIGCAVA; Cron 1987, 1991"
    },
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "B"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Chthonius ischnocheles", "au": "(Hermann, 1804)", "or": "Pseudoscorpiones", "fa": "Chthoniidae", "bg": "introduced", "sr": "G"},
      {"n": "Cixius azoterceirae", "au": "Remane & Asche, 1979", "or": "Hemiptera", "fa": "Cixiidae", "bg": "native", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Haplobainosoma lusitanum", "au": "Verhoeff, 1900", "or": "Chordeumatida", "fa": "Haplobainosomatidae", "bg": "introduced", "sr": "G"},
      {"n": "Ommatoiulus moreleti", "au": "(Lucas, 1860)", "or": "Julida", "fa": "Julidae", "bg": "introduced", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Euphthiracarus cribrarius", "au": "(Berlese)", "or": "Acari-Oribatei", "fa": "Euphthiracaridae", "sr": "M"},
      {"n": "Euzetes globula", "au": "(Nicolet)", "or": "Acari-Oribatei", "fa": "Euzetidae", "sr": "M"},
      {"n": "Acrogalumna longiplumus", "au": "(Berlese)", "or": "Acari-Oribatei", "fa": "Galumnidae", "sr": "M"},
      {"n": "Hermanniella granulata", "au": "(Nicolet)", "or": "Acari-Oribatei", "fa": "Hermanniellidae", "sr": "M"},
      {"n": "Nanhermannia nanus", "au": "(Nicolet)", "or": "Acari-Oribatei", "fa": "Nanhermanniidae", "sr": "M"},
      {"n": "Phthiracarus piger", "au": "(Scopoli)", "or": "Acari-Oribatei", "fa": "Phthiracaridae", "sr": "M"}
    ]
  },

  "Gruta da Madre de Deus": {
    "sg": {"id": "ter_10_ln", "g": 4, "b": 5, "d": 3, "i": 4, "h": 13.5, "w": 11.5, "topo": true},
    "ac": {
      "en": "Walk-in, with two entrances. A rope is needed for the 13.5 m internal pit at the north-west end (survey point 24), and there is a crawling squeeze of some difficulty between points 12 and 15.",
      "pt": "Acesso pedonal, com duas entradas. É preciso corda para o algar interior de 13,50 m no extremo NW (ponto 24) e há, entre os pontos 12 e 15, um estrangulamento que obriga a “passagem rastejante de alguma dificuldade”.",
      "sr": "Borges 1994"
    },
    "gl": {
      "en": "Part of the south-eastern sector of the Basaltic Fissural Zone, in the products of the Fonte do Bastardo eruption, dated to 2,000–3,000 years BP.",
      "pt": "Integra o sector SE da Zona Fissural Basáltica, nos produtos da erupção da Fonte do Bastardo, datada de 2000–3000 anos BP.",
      "sr": "Nunes 2014, citando Montesinos et al. 2003"
    },
    "ds": {
      "en": "Two entrances open into a cave whose chamber 7 is packed with tree roots. Between points 12 and 15 an offset constriction forces a crawl of some difficulty. Its best-known feature is the “Língua de Sogra”, a great slab that peeled off one of the side walls. There is a large chamber at point 0 and a 13.5 m vertical pit at point 24, and several kinds of lava stalactite hang from the ceilings. The centipede Lithobius obscurus azoreae lives here. First described in print by Ormonde in 1936, as “A Furna da Madre de Deus no Porto Martins”.",
      "pt": "Duas entradas dão acesso a uma gruta cuja sala 7 está repleta de raízes de árvores. Entre os pontos 12 e 15 um estrangulamento desnivelado obriga a “passagem rastejante de alguma dificuldade”. O elemento mais conhecido é a célebre “Língua de Sogra”, uma grande laje que se desprendeu de uma das paredes laterais. Há uma sala de grande amplitude no ponto 0 e um algar com 13,50 m de vertical no ponto 24, e nos tectos vários tipos de estalactites lávicas. Vive aqui a centopeia Lithobius obscurus azoreae. A primeira referência impressa é de Ormonde, 1936, “A Furna da Madre de Deus no Porto Martins”.",
      "sr": "Borges 1994; Ormonde 1936"
    },
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "GM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "B"}
    ]
  },

  "Gruta da Malha": {
    "sg": {"id": "ter_11_ln", "g": 4, "b": 5, "d": 4, "i": 3, "h": null, "w": null, "topo": true},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "BG"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Atheta aeneicollis", "au": "(Sharp, 1869)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Paranchus albipes", "au": "(Fabricius, 1796)", "or": "Coleoptera", "fa": "Carabidae", "bg": "introduced", "sr": "G"},
      {"n": "Pterostichus aterrimus aterrimus", "au": "(Herbst, 1784)", "or": "Coleoptera", "fa": "Carabidae", "bg": "native", "sr": "G"}
    ]
  },

  "Gruta do Natal": {
    "sg": {"id": "ter_12_ln", "g": 5, "b": 5, "d": 4, "i": 3, "h": 7, "w": 12, "topo": true},
    "ac": {
      "en": "Show cave: a walk-in tube with an easy floor and high ceilings, with a visitor centre at the entrance.",
      "pt": "Gruta turística: tubo de acesso pedonal, com trânsito fácil, chão com poucos desníveis e tectos altos, com centro de visitantes à entrada.",
      "sr": "SIARAM; Angrosfera"
    },
    "gl": {
      "en": "The Ar/Ar sample that sets the age limit for the Pico do Gaspar fissural system was taken in this cave.",
      "pt": "Foi nesta gruta que se colheu a amostra Ar/Ar que fixa o limite de idade do sistema fissural do Pico do Gaspar.",
      "sr": "Nunes 2014"
    },
    "ds": {
      "en": "A lava tube 697 m long, easy to walk, with a floor of few level changes and high ceilings. It was first known as Galeria Negra, renamed Gruta do Cavalo in 1964 after horse bones were found in it, and has been Gruta do Natal since 1969 — the first Christmas Mass was said inside on 25 December 1969.",
      "pt": "Tubo de lava com 697 m de comprimento total, de trânsito fácil, com um chão com poucos desníveis e tectos altos. Foi inicialmente conhecida como Galeria Negra, renomeada Gruta do Cavalo em 1964, depois de nela se terem encontrado ossos de cavalo, e é Gruta do Natal desde 1969 — a primeira Missa de Natal no seu interior foi a 25 de dezembro de 1969.",
      "sr": "Angrosfera/SIARAM; PdL 2025"
    },
    "fa": [
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Tomocerus minor", "au": "(Lubbock)", "or": "Collembola", "fa": "Tomoceridae", "sr": "M"}
    ]
  },

  "Furna de Santa Maria": {
    "sg": {"id": "ter_2_ln", "g": 3, "b": 5, "d": 3, "i": 3, "h": null, "w": null, "topo": true},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "B"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Haplobainosoma lusitanum", "au": "Verhoeff, 1900", "or": "Chordeumatida", "fa": "Haplobainosomatidae", "bg": "introduced", "sr": "G"},
      {"n": "Nopoiulus kochii", "au": "(Gervais, 1847)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"}
    ]
  },

  "Galeria da Queimada": {
    "sg": {"id": "ter_3_ln", "g": 5, "b": 3, "d": 5, "i": 3, "h": 10.9, "w": 2.5, "topo": true},
    "gl": {
      "en": "The Pico Gordo flows are dated by radiocarbon on material found beneath the flow, at about 4,480 ± 40 years BP.",
      "pt": "As escoadas do Pico Gordo estão datadas por radiocarbono em material encontrado por baixo do derrame, em cerca de 4480 ± 40 anos BP.",
      "sr": "Nunes 2014"
    }
  },

  "Gruta do Coelho": {
    "sg": {"id": "ter_9_ln", "g": 3, "b": 5, "d": 2, "i": 3, "h": 5, "w": 7.2, "topo": true},
    "ac": {
      "en": "Three possible entrances; the main one looks like a rabbit burrow and is entered on hands and knees. Inside there are large collapse zones and the layout is labyrinthine.",
      "pt": "Três entradas possíveis; a principal assemelha-se muito a uma toca de coelho e entra-se de gatas. No interior há grandes zonas de abatimento e o desenvolvimento é algo labiríntico.",
      "sr": "Borges 1994"
    },
    "ds": {
      "en": "Possibly already known to the old “Montanheiros”. The present name comes from the shape of the main entrance, very like a rabbit burrow. It lies in the Lagoa do Negro area and probably belongs to the same complex as Gruta do Natal and Algar do Negro. The layout is somewhat labyrinthine, and at the upstream end there is a large chamber about 6 by 4 metres.",
      "pt": "Possivelmente já era conhecida pelos antigos “Montanheiros”. O nome actual deve-se à configuração da entrada principal, que se assemelha muito a uma toca de coelho. Localiza-se na zona da Lagoa do Negro e pertencerá possivelmente ao mesmo complexo da Gruta do Natal e do Algar do Negro. O desenvolvimento é algo labiríntico e, no extremo montante, existe uma grande sala com cerca de 6 por 4 metros.",
      "sr": "Borges 1994"
    },
    "fa": [
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "BG"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BGM"},
      {"n": "Pseudosinella ashmoleorum", "au": "Gama, 1988", "or": "Collembola", "fa": "Entomobryidae", "ec": "eutroglophile", "bg": "endemic-azo", "en": "Cave-dwelling springtail", "sr": "BM"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Platynothrus peltifer", "au": "(Koch)", "or": "Acari-Oribatei", "fa": "Camisiidae", "sr": "M"},
      {"n": "Acrogalumna longiplumus", "au": "(Berlese)", "or": "Acari-Oribatei", "fa": "Galumnidae", "sr": "M"},
      {"n": "Nothrus palustris azorensis", "au": "Pérez-Iñigo", "or": "Acari-Oribatei", "fa": "Nothridae", "bg": "endemic", "sr": "M"},
      {"n": "Pardosa acoreensis", "au": "Simon", "or": "Araneae", "fa": "Lycosidae", "bg": "endemic", "sr": "M"},
      {"n": "Aloconota sulcifrons", "au": "(Stephens)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "M"},
      {"n": "Hypogastrura denticulata", "au": "(Bagnall)", "or": "Collembola", "fa": "Hypogastruridae", "sr": "M"},
      {"n": "Folsomia fimetaria", "au": "(Linnaeus)", "or": "Collembola", "fa": "Isotomidae", "sr": "M"},
      {"n": "Tomocerus minor", "au": "(Lubbock)", "or": "Collembola", "fa": "Tomoceridae", "sr": "M"},
      {"n": "Aphaereta minuta", "au": "(Nees)", "or": "Hymenoptera", "fa": "Braconidae", "sr": "M"}
    ]
  },

  "Gruta dos Principiantes": {
    "sg": {"id": "ter_13_ln", "g": 3, "b": 5, "d": 3, "i": 3, "h": 4, "w": 12, "topo": true},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Pseudoblothrus vulcanus", "au": "Mahnert, 1990", "or": "Pseudoscorpiones", "fa": "Syarinidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "B"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Anotylus nitidifrons", "au": "(Wollaston, 1871)", "or": "Coleoptera", "fa": "Staphylinidae", "sr": "G"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Chthonius ischnocheles", "au": "(Hermann, 1804)", "or": "Pseudoscorpiones", "fa": "Chthoniidae", "bg": "introduced", "sr": "G"},
      {"n": "Cylindroiulus propinquus", "au": "(Porat, 1870)", "or": "Julida", "fa": "Julidae", "bg": "introduced", "sr": "G"},
      {"n": "Epuraea biguttata", "au": "(Thunberg, 1784)", "or": "Coleoptera", "fa": "Nitidulidae", "bg": "introduced", "sr": "G"},
      {"n": "Euborellia annulipes", "au": "(Lucas, 1847)", "or": "Dermaptera", "fa": "Anisolabididae", "bg": "introduced", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Paranchus albipes", "au": "(Fabricius, 1796)", "or": "Coleoptera", "fa": "Carabidae", "bg": "introduced", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Scolopostethus thomsoni", "au": "Reuter, 1874", "or": "Hemiptera", "fa": "Rhyparochromidae", "bg": "native", "sr": "G"}
    ]
  },

  "Algar da Canada do Laranjo": {
    "sg": {"id": "ter_1", "g": 1, "b": 3, "d": 1, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A small pit and tube, 7 m long. The entrance could not be found in January 2024.",
      "pt": "Pequeno algar com tubo, 7 m de desenvolvimento. Em janeiro de 2024 não foi possível encontrar a entrada.",
      "sr": "Cron 2024-01-11"
    }
  },

  "Algar do Biscoitinho": {
    "sg": {"id": "ter_2", "g": 1, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Algar do Canadão": {
    "sg": {"id": "ter_3", "g": 1, "b": 2, "d": 2, "i": 5, "h": null, "w": null, "topo": false}
  },

  "Algar do Chambre": {
    "sg": {"id": "ter_4", "g": 1, "b": 2, "d": 3, "i": null, "h": null, "w": null, "topo": false}
  },

  "Algar do Funil": {
    "sg": {"id": "ter_5", "g": 1, "b": 3, "d": 3, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A pit of −22 m — vertical gear.",
      "pt": "Poço de −22 m — material de progressão vertical.",
      "sr": "Borges 1994"
    }
  },

  "Algar do João Caldo Quente": {
    "sg": {"id": "ter_6", "g": 1, "b": null, "d": 3, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Algar do Juncal": {
    "sg": {"id": "ter_7", "g": 1, "b": null, "d": 5, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A fissure 50 m deep — vertical gear.",
      "pt": "Fenda com 50 m de profundidade — material de progressão vertical.",
      "sr": "IPEA; SIGCAVA"
    }
  },

  "Algar do Negro": {
    "sg": {"id": "ter_8", "g": 1, "b": 3, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Algar do Outeiro da Doninha": {
    "sg": {"id": "ter_9", "g": 2, "b": 2, "d": 1, "i": 2, "h": null, "w": null, "topo": false}
  },

  "Algar do Pico Alto": {
    "sg": {"id": "ter_10", "g": 1, "b": null, "d": 4, "i": null, "h": null, "w": null, "topo": false}
  },

  "Algar do Pico do Funil": {
    "sg": {"id": "ter_11", "g": 1, "b": 3, "d": 1, "i": null, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A pit of about 8 m dropping to −15 m, beside its twin tube. Both were reported by the Montanheiros on 25-01-2024 to have been completely buried by the landowner in 2021 or 2022 — treat them as destroyed or inaccessible.",
      "pt": "Algar de cerca de 8 m que desce a −15 m, ao lado do tubo gémeo. Em 25-01-2024 os Montanheiros registaram que ambos “terão sido completamente subterrados pelo proprietário em 2021 ou 2022” — considerar destruídos ou inacessíveis.",
      "sr": "Cron 2024-01-25"
    }
  },

  "Algar do Pico Gaspar I": {
    "sg": {"id": "ter_12", "g": 1, "b": 1, "d": 3, "i": 4, "h": null, "w": null, "topo": false}
  },

  "Algar do Pico Gaspar II": {
    "sg": {"id": "ter_13", "g": 1, "b": 1, "d": 3, "i": 4, "h": null, "w": null, "topo": false}
  },

  "Algar dos Funis": {
    "sg": {"id": "ter_14", "g": 2, "b": null, "d": null, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A vertical algar needing rope work. Found obstructed in 1992; digging attempts were made on 22 and 29 January 1995.",
      "pt": "Algar vertical, exige material de progressão vertical. Encontrado obstruído em 1992; houve tentativas de desobstrução em 22 e 29 de janeiro de 1995.",
      "sr": "Cron 1992-01-19, 1995-01-22"
    }
  },

  "Algar/Gruta do Mistério": {
    "sg": {"id": "ter_15", "g": 3, "b": 3, "d": 3, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A 12 m entry pit — rope needed — opening into 151 m of tube.",
      "pt": "Poço de entrada de 12 m — é preciso corda — que dá acesso a 151 m de tubo.",
      "sr": "Borges 1994; SIGCAVA"
    }
  },

  "Algar/Gruta do Pico das Dez": {
    "sg": {"id": "ter_16", "g": 2, "b": 3, "d": 3, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "An entrance pit into the gallery — vertical gear. The topographic survey and georeferencing were redone on 11-01-2024.",
      "pt": "Poço de entrada para a galeria — material de progressão vertical. Topografia e georreferenciação refeitas em 11-01-2024.",
      "sr": "Borges 1994; Cron 2024-01-11"
    }
  },

  "Cova do Caldeirão": {
    "sg": {"id": "ter_17", "g": 1, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Fenda do Pico Zimbreiro": {
    "sg": {"id": "ter_18", "g": 1, "b": 2, "d": 3, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A tectonic fissure on Monte Brasil, about 100 m deep — serious vertical terrain.",
      "pt": "Fenda tectónica no Monte Brasil, com cerca de 100 m de profundidade — terreno vertical exigente.",
      "sr": "IPEA; Borges 1994"
    }
  },

  "Furna d'Água": {
    "sg": {"id": "ter_19", "g": 4, "b": 1, "d": 4, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Walk-in gallery on the western edge of the Guilherme Moniz caldera. It is an active water catchment with managed access; occasional guided visits happen (the Pedaços de Mar campaign on 03-06-2023, a Montanheiros photo expedition on 13-06-2025).",
      "pt": "Galeria de acesso pedonal no bordo oeste da caldeira de Guilherme Moniz. É uma captação de água em serviço, de acesso controlado; há visitas guiadas ocasionais (campanha Pedaços de Mar em 03-06-2023; expedição fotográfica dos Montanheiros em 13-06-2025).",
      "sr": "Cron 2023, 2025"
    },
    "gl": {
      "en": "The Guilherme Moniz caldera holds an important perched aquifer. Drinking water is drawn from strong springs inside caves such as this one and Furna do Cabrito, both formed by the same Pico do Carvão lava, which spilled eastwards where the ridge crest was lower.",
      "pt": "A caldeira de Guilherme Moniz alberga um importante aquífero suspenso. A água para consumo é captada em fortes nascentes no interior de grutas como esta ou a Furna do Cabrito, originadas pela mesma lava do Pico do Carvão que transbordou a leste, onde a cumeeira da serra era mais baixa.",
      "sr": "Angrosfera, Guilherme Moniz (Paulo Barcelos / CMAH)"
    }
  },

  "Furna da Nascente": {
    "sg": {"id": "ter_20", "g": 1, "b": 2, "d": 3, "i": 5, "h": null, "w": null, "topo": false}
  },

  "Furna da Rua Longa": {
    "sg": {"id": "ter_21", "g": 1, "b": 2, "d": 2, "i": 4, "h": null, "w": null, "topo": false}
  },

  "Furna das Feiticeiras": {
    "sg": {"id": "ter_22", "g": 1, "b": 1, "d": null, "i": null, "h": null, "w": null, "topo": false}
  },

  "Furna das Pombas": {
    "sg": {"id": "ter_23", "g": 1, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A sea cave on the PR02TER Baías da Agualva walking trail.",
      "pt": "Furna marinha no percurso pedestre PR02TER — Baías da Agualva.",
      "sr": "IPEA; SIGCAVA"
    }
  },

  "Furna do Cabrito": {
    "sg": {"id": "ter_24", "g": 3, "b": 3, "d": 3, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Walk-in tube in the Cabrito area; visited on guided activities in 2023 and on the Montanheiros photo expedition of 13-06-2025.",
      "pt": "Tubo de acesso pedonal na zona do Cabrito; visitada em actividades guiadas em 2023 e na expedição fotográfica dos Montanheiros de 13-06-2025.",
      "sr": "Cron 2023, 2025"
    },
    "gl": {
      "en": "The Guilherme Moniz caldera holds an important perched aquifer. Drinking water is drawn from strong springs inside caves such as this one and Furna d’Água, both formed by the same Pico do Carvão lava, which spilled eastwards where the ridge crest was lower.",
      "pt": "A caldeira de Guilherme Moniz alberga um importante aquífero suspenso. A água para consumo é captada em fortes nascentes no interior de grutas como esta ou a Furna d’Água, originadas pela mesma lava do Pico do Carvão que transbordou a leste, onde a cumeeira da serra era mais baixa.",
      "sr": "Angrosfera, Guilherme Moniz (Paulo Barcelos / CMAH)"
    }
  },

  "Furna do Poço Negro": {
    "sg": {"id": "ter_25", "g": 1, "b": 2, "d": 1, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A coastal erosion cave in the Raminho/Serreta cliff, at sea level — sea state governs the approach.",
      "pt": "Gruta de erosão costeira na arriba do Raminho/Serreta, ao nível do mar — o estado do mar condiciona o acesso.",
      "sr": "Borges 1994; IPEA"
    }
  },

  "Furna dos Ninhos": {
    "sg": {"id": "ter_26", "g": 1, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Galeria da Ribeira Seca": {
    "sg": {"id": "ter_27", "g": 1, "b": 3, "d": 1, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A walk-in gallery. Coordinates were recorded and the interior photographed on 04-01-2024.",
      "pt": "Galeria de acesso pedonal. Coordenadas registadas e interior fotografado em 04-01-2024.",
      "sr": "Cron 2024-01-04"
    }
  },

  "Galeria do Fanal": {
    "sg": {"id": "ter_28", "g": 1, "b": 3, "d": 1, "i": 4, "h": null, "w": null, "topo": false}
  },

  "Galeria do Felisberto Joaquim": {
    "sg": {"id": "ter_29", "g": 1, "b": null, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Galeria do Sequeira": {
    "sg": {"id": "ter_30", "g": 1, "b": 3, "d": 1, "i": 2, "h": null, "w": null, "topo": false}
  },

  "Gruta Brisa Azul": {
    "sg": {"id": "ter_31", "g": 1, "b": 2, "d": 3, "i": 5, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Marine cave on the north face of Ilhéu Pequeno, the western islet of the Ilhéus das Cabras, about half a nautical mile offshore. Boat only — roughly ten minutes from the Angra marina. The opening is a comfortable four metres high at low tide and boats up to about seven metres can go in and turn round inside; a nine-metre boat needs skill. Divers and snorkellers enter through a fissure that runs from the surface to about 15 m, with a maximum dive depth of 24 m and weak currents — no special certification is required. Boats entering disturb the eagle rays, so leaving the boat outside is recommended. Landing on the islets is hard: there is no dock, only steps cut into the Ilhéu Pequeno slope.",
      "pt": "Furna marinha na face norte do Ilhéu Pequeno, o ilhéu ocidental dos Ilhéus das Cabras, a cerca de meia milha da costa. Só por barco — cerca de dez minutos a partir da marina de Angra. Com a maré baixa a abertura tem uns confortáveis quatro metros de altura e embarcações até cerca de sete metros entram e viram lá dentro; com nove metros exige perícia. Mergulhadores entram por uma fenda que vai da superfície aos ~15 m, com profundidade máxima de mergulho de 24 m e correntes fracas — não é exigida certificação especial. Os barcos que entram incomodam os ratões, pelo que se recomenda deixar a embarcação no exterior. Desembarcar nos ilhéus é difícil: não há cais, apenas degraus talhados na encosta do Ilhéu Pequeno.",
      "sr": "PdL 2018 pp. 51-52; dive.visitazores.com"
    },
    "gl": {
      "en": "The Ilhéus das Cabras are the remains of submarine eruptions on the southern flank of the Cinco Picos volcano, some 22,000 years ago. Repeated vertical fracturing of the palagonitised tuffs, together with marine abrasion, opened a series of cavities — some of them subaquatic — of which this is the best known.",
      "pt": "Os Ilhéus das Cabras resultam de erupções submarinas ocorridas no flanco sul do vulcão dos Cinco Picos, há sensivelmente 22 000 anos. A reiterada fracturação vertical dos tufos palagonitizados, aliada à abrasão marinha, originou uma série de cavidades — algumas subaquáticas — de que esta é a mais conhecida.",
      "sr": "PdL 2018 p. 46 (F. Cota Rodrigues)"
    },
    "ds": {
      "en": "Seamen knew the cave long before the Montanheiros first explored it, on 28 August 1971; they named it after one of the boats they came in, the launch Briza Azul — and, as Barcelos notes, that boat spelt “briza” with a z. At low tide the opening is a comfortable four metres high. The cave runs about 50 m in and is up to 10 m wide. In summer great numbers of eagle rays — the “ratões” that give it its other name — gather inside, and the shafts of light coming through the entrance catch them gliding in the water column. Andrade had already described the place in 1843: “há uma extensa câmara vulcânica cujo pavimento é um profundo mar cheio de peixes, cercado e coberto de uma abóbada de lava amarela petrificada”.",
      "pt": "Esta gruta já era bastante conhecida pelos homens do mar quando foi explorada pela primeira vez pelos Montanheiros, a 28 de agosto de 1971; baptizaram-na com o nome de uma das embarcações em que chegaram, a Briza Azul — e, como nota Barcelos, “a ‘briza’ deste último barco se escrevia com ‘Z’”. Com a maré baixa a abertura apresenta uns confortáveis quatro metros de altura. A gruta tem cerca de 50 m de comprimento e 10 m de largura máxima. No verão é possível observar no seu interior grande número de ratões, e os raios de luz que penetram pela entrada apanham-nos a planar na coluna de água. Andrade já a descrevera em 1843: “há uma extensa câmara vulcânica cujo pavimento é um profundo mar cheio de peixes, cercado e coberto de uma abóbada de lava amarela petrificada”.",
      "sr": "PdL 2018 pp. 49-52 (Paulo Barcelos); Andrade 1843"
    }
  },

  "Gruta da Achada": {
    "sg": {"id": "ter_32", "g": 2, "b": 5, "d": 2, "i": 5, "h": null, "w": null, "topo": false},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Trechus terceiranus", "au": "Machado, 1988", "or": "Coleoptera", "fa": "Carabidae", "ec": "troglobiont", "bg": "endemic-ter", "en": "Cave ground-beetle", "pt": "Carocho cavernícola", "sr": "BG"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Brachydesmus superus", "au": "Latzel, 1884", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Catops coracinus", "au": "Kellner, 1846", "or": "Coleoptera", "fa": "Leiodidae", "bg": "native", "sr": "G"},
      {"n": "Chthonius ischnocheles", "au": "(Hermann, 1804)", "or": "Pseudoscorpiones", "fa": "Chthoniidae", "bg": "introduced", "sr": "G"},
      {"n": "Geophilus truncorum", "au": "Bergsøe & Meinert, 1866", "or": "Geophilomorpha", "fa": "Geophilidae", "bg": "native", "sr": "G"},
      {"n": "Lasius grandis", "au": "Forel, 1909", "or": "Hymenoptera", "fa": "Formicidae", "bg": "native", "sr": "G"},
      {"n": "Nopoiulus kochii", "au": "(Gervais, 1847)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"},
      {"n": "Polydesmus coriaceus", "au": "Porat, 1870", "or": "Polydesmida", "fa": "Polydesmidae", "bg": "introduced", "sr": "G"},
      {"n": "Rhopalosiphoninus latysiphon", "au": "(Davidson, 1912)", "or": "Hemiptera", "fa": "Aphididae", "bg": "introduced", "sr": "G"}
    ]
  },

  "Gruta da Canada das Vinhas": {
    "sg": {"id": "ter_33", "g": 2, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Opened by a mechanical digger in 2016; about 30 m of otherwise sealed tube, with very limited air exchange — the discoverers found no microbial mats at all, which they put down to that isolation.",
      "pt": "Aberta por uma retroescavadora em 2016; cerca de 30 m de tubo de outro modo selado, com trocas de ar muito limitadas — não foram observados quaisquer tapetes microbianos, o que os descobridores atribuem a esse isolamento.",
      "sr": "PdL 2016"
    },
    "ds": {
      "en": "Discovered on 28 June 2016 by EDA workers when a mechanical digger opened the foundation for a lamppost. About 30 m long. Some roots come through the roof fissures, but no microbial mats were seen on the walls — which the discoverers put down to how isolated the inside of the cave had been.",
      "pt": "Descoberta a 28 de junho de 2016 por trabalhadores da EDA, quando uma retroescavadora abria o alicerce para colocação de um poste de iluminação. Tem aproximadamente 30 metros de comprimento. Algumas raízes atravessam as fissuras do tecto, mas não foram observados quaisquer tapetes microbianos nas paredes, o que os descobridores atribuem ao isolamento do interior da gruta.",
      "sr": "PdL 2016"
    }
  },

  "Gruta da Canada do Laranjo": {
    "sg": {"id": "ter_34", "g": 1, "b": 1, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta da Cascata": {
    "sg": {"id": "ter_35", "g": 1, "b": 3, "d": 2, "i": 4, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A second entrance was found on 14-08-2014: a 15 m low, muddy crawl. The new section is “bastante difícil” and in winter the Montanheiros expect it to be completely impassable through flooding.",
      "pt": "Em 14-08-2014 foi encontrada uma segunda entrada: 15 m de rastejamento baixo e lamacento. O novo troço é “bastante difícil” e, no inverno, os Montanheiros contam que “seja completamente impossível o trânsito” por inundação.",
      "sr": "PdL 2014"
    }
  },

  "Gruta da Chamusca": {
    "sg": {"id": "ter_36", "g": 3, "b": null, "d": null, "i": null, "h": null, "w": null, "topo": false}
  },

  "Gruta da Malha Grande": {
    "sg": {"id": "ter_37", "g": 2, "b": 2, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Two small holes serve as entrances; maximum height 2 m, with mud at the way in.",
      "pt": "Dois pequenos buracos servem de entrada; altura máxima de 2 m, com lama junto às aberturas.",
      "sr": "PdL 2014"
    },
    "ds": {
      "en": "A cavity of more than 100 m with a maximum height of 2 m, holding some interesting speleothems: limonite columns, other secondary deposits, a profusion of roots and lava stalactites.",
      "pt": "Cavidade com mais de 100 metros de comprimento e altura máxima de 2 metros, com alguns espeleotemas interessantes: colunas de limonite, outros depósitos secundários, alguma profusão de raízes e estalactites lávicas.",
      "sr": "PdL 2014"
    }
  },

  "Gruta da Salga": {
    "sg": {"id": "ter_38", "g": 2, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false},
    "ds": {
      "en": "A small lava tube of about 25 m with a maximum height of 70 cm and no notable formations inside. The Montanheiros had long known of it but had never explored it before 9 July 2014.",
      "pt": "Pequeno tubo de lava com apenas cerca de 25 m e altura máxima de 70 cm, sem formações relevantes no interior. Já era conhecido dos Montanheiros mas nunca havia ainda sido explorado antes de 9 de julho de 2014.",
      "sr": "PdL 2014"
    }
  },

  "Gruta da Santinha": {
    "sg": {"id": "ter_39", "g": 1, "b": 1, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta da Terra Mole": {
    "sg": {"id": "ter_40", "g": 2, "b": 3, "d": 2, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta das Mercês I": {
    "sg": {"id": "ter_41", "g": 2, "b": 3, "d": 1, "i": 4, "h": null, "w": null, "topo": false}
  },

  "Gruta das Mercês II": {
    "sg": {"id": "ter_42", "g": 1, "b": 1, "d": null, "i": 1, "h": null, "w": null, "topo": false}
  },

  "Gruta de Santa Catarina": {
    "sg": {"id": "ter_43", "g": 1, "b": 1, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A 28 m tube, located on 25-10-1992 and explored on 01-11-1992.",
      "pt": "Tubo de 28 m, localizado em 25-10-1992 e explorado em 01-11-1992.",
      "sr": "Cron 1992"
    }
  },

  "Gruta de Santo António": {
    "sg": {"id": "ter_44", "g": 3, "b": 3, "d": 3, "i": 4, "h": null, "w": null, "topo": false},
    "fa": [
      {"n": "Lithobius obscurus azoreae", "au": "Eason & Ashmole, 1992", "or": "Lithobiomorpha", "fa": "Lithobiidae", "ec": "troglobiont", "bg": "endemic-azo", "sr": "G"},
      {"n": "Blaniulus guttulatus", "au": "(Fabricius, 1798)", "or": "Julida", "fa": "Blaniulidae", "bg": "introduced", "sr": "G"}
    ]
  },

  "Gruta do Alicerce": {
    "sg": {"id": "ter_45", "g": 1, "b": null, "d": 1, "i": null, "h": null, "w": null, "topo": false}
  },

  "Gruta do Baldio": {
    "sg": {"id": "ter_46", "g": 2, "b": 2, "d": 1, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Two entrances: the wider one has a stone wall built inside it to keep animals out; the second is much smaller and difficult. Maximum height 1.5 m, and the continuation is blocked by a very tight squeeze.",
      "pt": "Duas entradas: na mais larga levantaram, no interior, um muro de pedra para impedir a entrada de animais; a segunda é bem mais pequena e difícil. Altura máxima de 1,50 m e a continuação é barrada por um estrangulamento muito apertado.",
      "sr": "PdL 2014"
    },
    "gl": {
      "en": "Opened in the lava flow of Pico da Fonte do Bastardo.",
      "pt": "Aberta no derrame lávico do Pico da Fonte do Bastardo.",
      "sr": "PdL 2014"
    },
    "ds": {
      "en": "Divided into two sections separated by a collapse, close to 100 m in total length, with a maximum height of 1.5 m. Inside the wider entrance a stone wall was built to keep animals out. The cave is well preserved on the whole, with its original floor and roof.",
      "pt": "Está dividida em duas secções, separadas por um desabamento, com um comprimento total próximo dos 100 metros e altura máxima de 1,50 m. Junto à entrada mais larga, no interior, levantaram um muro de pedra para impedir a entrada de animais. No geral encontra-se bem preservada, com chão e tecto originais.",
      "sr": "PdL 2014"
    }
  },

  "Gruta do Biscoito": {
    "sg": {"id": "ter_47", "g": 1, "b": 1, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ds": {
      "en": "Found on ground near the Terceira golf club: a lava tube of low internal height with several openings, named on the spot.",
      "pt": "Encontrada em terrenos próximos do Clube de Golfe da Ilha Terceira: um tubo lávico com pouca altura interior e várias aberturas, a que se deu o nome no local.",
      "sr": "PdL 2016"
    }
  },

  "Gruta do Camelo": {
    "sg": {"id": "ter_48", "g": 3, "b": 1, "d": 3, "i": 1, "h": null, "w": null, "topo": false}
  },

  "Gruta do Cerro I": {
    "sg": {"id": "ter_49", "g": 1, "b": 3, "d": 2, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta do Cerro II": {
    "sg": {"id": "ter_50", "g": 1, "b": 3, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta do Cerro III": {
    "sg": {"id": "ter_51", "g": 1, "b": 3, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta do Esqueleto": {
    "sg": {"id": "ter_52", "g": 1, "b": 3, "d": 1, "i": 2, "h": null, "w": null, "topo": false}
  },

  "Gruta do Golfe": {
    "sg": {"id": "ter_53", "g": 1, "b": 3, "d": 1, "i": 2, "h": null, "w": null, "topo": false}
  },

  "Gruta do Martelo": {
    "sg": {"id": "ter_54", "g": 2, "b": 2, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Two entrances; maximum height 80 cm, so it is a crawl throughout. Rainwater comes in through the openings and the floor is mud and debris.",
      "pt": "Duas entradas; altura máxima de 80 cm, pelo que se progride sempre a rastejar. As águas da chuva entram pelas aberturas e o interior fica cheio de lama e detritos.",
      "sr": "PdL 2014"
    },
    "ds": {
      "en": "Found on 10 July 2014 and named Gruta da Terra Mole II, or Gruta do Martelo because a hammer was found near the entrance. Two entrances and about 80 m of passage; the maximum height does not exceed 80 cm. Rainwater comes in through the openings and leaves the inside full of mud and debris.",
      "pt": "Encontrada a 10 de julho de 2014 e baptizada Gruta da Terra Mole II, ou Gruta do Martelo “pois foi encontrado um martelo próximo da entrada”. Duas entradas e cerca de 80 m de desenvolvimento; a altura máxima não ultrapassa os 80 cm. As águas da chuva entram pelas aberturas e deixam o interior cheio de lama e detritos.",
      "sr": "PdL 2014"
    }
  },

  "Gruta do Morro da Azenha": {
    "sg": {"id": "ter_55", "g": 2, "b": 2, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A tube over 120 m long; very narrow, muddy sections limit how far you get.",
      "pt": "Tubo com mais de 120 m; troços muito estreitos e lamacentos limitam a progressão.",
      "sr": "PdL 2014"
    },
    "ds": {
      "en": "A cave more than 120 m long with very interesting formations: well-defined flow lines, sizeable lateral balconies and lava rendilhada.",
      "pt": "Gruta com mais de 120 metros de comprimento e formações bastante interessantes, como linhas de fluxo bem definidas, balcões laterais de considerável dimensão e lava rendilhada.",
      "sr": "PdL 2014"
    }
  },

  "Gruta do Pico do Funil": {
    "sg": {"id": "ter_56", "g": 3, "b": 3, "d": 2, "i": 3, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "A tube beside the twin pit. Both were reported by the Montanheiros on 25-01-2024 to have been completely buried by the landowner in 2021 or 2022 — treat them as destroyed or inaccessible.",
      "pt": "Tubo ao lado do algar gémeo. Em 25-01-2024 os Montanheiros registaram que ambos “terão sido completamente subterrados pelo proprietário em 2021 ou 2022” — considerar destruídos ou inacessíveis.",
      "sr": "Cron 2024-01-25"
    }
  },

  "Gruta do Terreiro da Macela": {
    "sg": {"id": "ter_57", "g": 2, "b": 2, "d": 1, "i": 2, "h": null, "w": null, "topo": false},
    "ds": {
      "en": "Looked at on the same outing as Gruta do Biscoito, “a umas centenas de metros” from it, and likewise low inside. Note that the SIGCAVA position used on this map is some 9 km from that description — see the field notes.",
      "pt": "Espreitada na mesma saída que a Gruta do Biscoito, “a umas centenas de metros” desta, e também baixa no interior. Note-se que a posição do SIGCAVA aqui usada fica a cerca de 9 km dessa descrição — ver as notas de campo.",
      "sr": "PdL 2016"
    }
  },

  "Gruta do Zé Grande I": {
    "sg": {"id": "ter_58", "g": 1, "b": null, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta do Zé Grande II": {
    "sg": {"id": "ter_59", "g": 2, "b": 1, "d": 1, "i": 3, "h": null, "w": null, "topo": false}
  },

  "Gruta dos Buracos": {
    "sg": {"id": "ter_60", "g": 2, "b": 5, "d": 3, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Several “buracos” — holes — serve as entrances; they were found on 06-12-1992 near Pau Velho.",
      "pt": "Vários “buracos” servem de entrada; foram encontrados em 06-12-1992, perto do Pau Velho.",
      "sr": "Cron 1992-12-06"
    },
    "gl": {
      "en": "The Ar/Ar sample that dates the whole Malha–Balcões–Chamusca cave system — the Pico Galiarte pahoehoe field — was taken in this cave.",
      "pt": "Foi nesta gruta que se colheu a amostra Ar/Ar que data todo o sistema de grutas Malha–Balcões–Chamusca — o campo pahoehoe do Pico Galiarte.",
      "sr": "Nunes 2014"
    },
    "ds": {
      "en": "Found on 6 December 1992 as a set of holes near Pau Velho that turned out to be entrances. It is known for its iron speleothems — stalactites, stalagmites and limonite columns, one of them, in a 2007 caption, “maior do que eu!”.",
      "pt": "Encontrada a 6 de dezembro de 1992 como um conjunto de buracos perto do Pau Velho “que mais não eram que entradas”. É conhecida pelos espeleotemas de ferro — estalactites, estalagmites e colunas de limonite, uma delas, numa legenda de 2007, “maior do que eu!”.",
      "sr": "Cron 1992-12-06; PdL 2024"
    }
  },

  "Gruta dos Ratos": {
    "sg": {"id": "ter_61", "g": 1, "b": 3, "d": 2, "i": 2, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Walk-in tube in the Cabrito area. The entrance was not found on 25-01-2024 — lost under dense vegetation.",
      "pt": "Tubo de acesso pedonal na zona do Cabrito. Em 25-01-2024 não foi possível encontrar a entrada — perdida sob vegetação densa.",
      "sr": "Cron 2024-01-25"
    }
  },

  "Gruta Pequena": {
    "sg": {"id": "ter_62", "g": 1, "b": 3, "d": 1, "i": null, "h": null, "w": null, "topo": false}
  },

  "Tubo I do Monte Brasil": {
    "sg": {"id": "ter_63", "g": 1, "b": 2, "d": 1, "i": 5, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Submarine lava tube — cave diving. The 1994 survey is credited to the French cave-divers P. Brunet and C. Thomas with A. Silva.",
      "pt": "Tubo lávico submarino — mergulho em gruta. O levantamento de 1994 é creditado aos mergulhadores franceses P. Brunet e C. Thomas com A. Silva.",
      "sr": "IPEA; Borges 1994"
    }
  },

  "Tubo II do Monte Brasil": {
    "sg": {"id": "ter_64", "g": 1, "b": 2, "d": 1, "i": 5, "h": null, "w": null, "topo": false},
    "ac": {
      "en": "Submarine lava tube — cave diving. The 1994 survey is credited to the French cave-divers P. Brunet and C. Thomas with A. Silva.",
      "pt": "Tubo lávico submarino — mergulho em gruta. O levantamento de 1994 é creditado aos mergulhadores franceses P. Brunet e C. Thomas com A. Silva.",
      "sr": "IPEA; Borges 1994"
    }
  },

  "Gruta do Camarão": {
    "sg": {"id": null, "g": 1, "b": 2, "d": 1, "i": 4, "h": null, "w": null, "topo": null}
  },

  "Algar Adérito de Freitas": {
    "ac": {
      "en": "An algar on Pico Matias Simão. The entrance could not be found in January 2024.",
      "pt": "Algar no Pico Matias Simão. Em janeiro de 2024 não foi possível encontrar a entrada.",
      "sr": "Cron 2024-01-11"
    },
    "gl": {
      "en": "Pico Matias Simão is a spatter cone set on a radial fracture of the great Serra de Santa Bárbara volcano. The cone rises to 153 metres and is heavily dissected by the sea.",
      "pt": "O Pico Matias Simão corresponde a um cone de salpicos de lava (spatter), instalado numa fractura radial ao grande vulcão da Serra de Santa Bárbara. O aparelho vulcânico, que se eleva até aos 153 metros, encontra-se muito dissecado pela acção do mar.",
      "sr": "PdL 2023 (Salomé Meneses / Açores Geoparque)"
    }
  },

  "Gruta das Cinco Ribeiras": {
    "ac": {
      "en": "An underwater gallery complex in the zone of Porto das Cinco Ribeiras. The cave is entered directly from the shore and the dive begins in the natural pool; maximum depth about 16 m, weak currents. Used for initiation dives and night dives.",
      "pt": "Complexo de galerias subaquáticas na zona do Porto das Cinco Ribeiras. O acesso faz-se directamente pela costa e o mergulho começa na piscina natural; profundidade máxima cerca de 16 m, correntes fracas. Usada para mergulhos de iniciação e mergulhos nocturnos.",
      "sr": "dive.visitazores.com; pt.wikipedia"
    },
    "ds": {
      "en": "A coastal cave entered directly from the shore, in the zone of Porto das Cinco Ribeiras. Wikipedia gives its position as 38º40.5'N, 27º19.85'W. Divers describe a gallery complex reaching about 16 m.",
      "pt": "Gruta costeira cujo acesso é feito directamente pela costa, na zona de influência do Porto das Cinco Ribeiras. A Wikipédia dá as suas coordenadas como 38º40.5'N, 27º19.85'W. Os mergulhadores descrevem um complexo de galerias que desce a cerca de 16 m.",
      "sr": "pt.wikipedia; dive.visitazores.com"
    }
  },

  "Gruta do Tanque": {
    "ac": {
      "en": "Three openings to the surface; mud and humidity come in through them.",
      "pt": "Três aberturas para o exterior; por elas entram lama e humidade.",
      "sr": "pt.wikipedia"
    },
    "ds": {
      "en": "An extensive formation, 305.85 m of total length spread over several tunnels, discovered by Os Montanheiros early in 2012 and announced that May as the island’s 66th cavity. It has three openings to the surface. The published photographs show lava stalactites, silica deposits, yellow moulds on the roof, levées and pahoehoe lava.",
      "pt": "Formação bastante extensa, com 305,85 m de comprimento total divididos por vários túneis, descoberta pelos Montanheiros no início de 2012 e anunciada em maio desse ano como a 66.ª cavidade da ilha. Tem três aberturas para o exterior. As fotografias publicadas mostram estalactites lávicas, depósitos de sílica, bolores amarelos no tecto, lévees e lava do tipo pahoehoe.",
      "sr": "pt.wikipedia; montanheiros.com"
    }
  },

  "Gruta dos Piratas": {
    "ac": {
      "en": "At the Ilhéus das Cabras, reachable only by boat; some of the islet caves are subaquatic. Landing on the islets is hard — there is no dock, only steps cut into the Ilhéu Pequeno slope.",
      "pt": "Nos Ilhéus das Cabras, só alcançáveis por barco; algumas das cavidades dos ilhéus são subaquáticas. Desembarcar é difícil — não há cais, apenas degraus talhados na encosta do Ilhéu Pequeno.",
      "sr": "PdL 2018 pp. 46, 52"
    },
    "gl": {
      "en": "The Ilhéus das Cabras are the remains of submarine eruptions on the southern flank of the Cinco Picos volcano, some 22,000 years ago. Repeated vertical fracturing of the palagonitised tuffs, together with marine abrasion, opened a series of cavities, some of them subaquatic; Cota Rodrigues names this one alongside Brisa Azul.",
      "pt": "Os Ilhéus das Cabras resultam de erupções submarinas ocorridas no flanco sul do vulcão dos Cinco Picos, há sensivelmente 22 000 anos. A reiterada fracturação vertical dos tufos palagonitizados, aliada à abrasão marinha, originou uma série de cavidades, algumas subaquáticas; Cota Rodrigues nomeia esta a par da Brisa Azul.",
      "sr": "PdL 2018 p. 46 (F. Cota Rodrigues)"
    }
  },

  "Travessia do Ilhéu Grande (sem nome)": {
    "ac": {
      "en": "A dive-through: a fissure on the north side of Ilhéu Grande lets a diver swim 240 m through the islet and surface inside another cave on the channel side — “não sem alguma dificuldade e risco”. The channel cave itself admits small boats. Landing on the islets is hard: no dock, only steps cut into the Ilhéu Pequeno slope.",
      "pt": "Travessia a mergulho: uma fenda no lado norte do Ilhéu Grande permite atravessar o ilhéu a nado por 240 m e emergir dentro de outra gruta do lado do canal — “não sem alguma dificuldade e risco”. A gruta do canal admite pequenas embarcações. Desembarcar nos ilhéus é difícil: não há cais, apenas degraus talhados na encosta do Ilhéu Pequeno.",
      "sr": "PdL 2018 p. 52"
    },
    "gl": {
      "en": "A fracture cave in the palagonitised tuffs of the Ilhéus das Cabras, surtseyan cones built on a transverse submarine fault on the southern flank of Cinco Picos about 22,000 years ago.",
      "pt": "Cavidade de fractura nos tufos palagonitizados dos Ilhéus das Cabras, cones surtseyanos instalados numa falha submarina transversal no flanco sul dos Cinco Picos há cerca de 22 000 anos.",
      "sr": "PdL 2018 p. 46 (F. Cota Rodrigues)"
    },
    "ds": {
      "en": "A fissure on the north side of Ilhéu Grande runs right through the islet: a diver can swim the 240 m and come out inside another cave on the channel side, “não sem alguma dificuldade e risco”. Small boats can enter the channel cave. Its mouth episodically runs yellow with tuff in suspension. The cave has no recorded name — the label used here is descriptive.",
      "pt": "Uma fenda no lado norte do Ilhéu Grande atravessa o ilhéu de lado a lado: um mergulhador percorre os 240 m e sai dentro de outra gruta do lado do canal, “não sem alguma dificuldade e risco”. A gruta do canal admite pequenas embarcações. À sua boca surge episodicamente água amarelada, de tufo em suspensão. A cavidade não tem nome registado — a designação aqui usada é descritiva.",
      "sr": "PdL 2018 p. 52"
    }
  }
};
