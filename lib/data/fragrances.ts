export type Gender = "male" | "female" | "unisex";
export type SuitableTime = "day" | "night";
export type Season = "spring" | "summer" | "fall" | "winter";

export type Fragrance = {
  name: string;
  brand: string;
  imageUrl?: string;
  intensity: string;
  gender: Gender;
  suitableTimes: SuitableTime[];
  suitableSeasons: Season[];
  notes: string[];
  accords: {
    main: string[];
    sub: string[];
  };
  description: string;
  otherDetails: {
    collection?: string;
    manufacturerDescription: string;
    perfumer: string;
    launchYear: number;
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
  };
};

export const fragrances: Fragrance[] = [
  {
    name: "Oud Voyager",
    brand: "Tom Ford",
    imageUrl: "https://i.ibb.co/PZPnTZCN/tom-ford-oud-voyager.jpg",
    intensity: "Eau de Parfum",
    gender: "unisex",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "fall", "winter"],
    notes: ["Geranium", "Peony", "Oud", "Cypriol", "Osmanthus"],
    accords: {
      main: ["Floral", "Oud"],
      sub: ["Woody", "Green", "Warm Spicy", "Amber"],
    },
    description:
      "A journey where the past, present, and future unite ancient oud with futuristic florals in a warm, captivating embrace.",
    otherDetails: {
      collection: "Private Blend",
      launchYear: 2025,
      manufacturerDescription:
        "Tom Ford's futuristic florals meet ancient oud in an opulent Private Blend release, crafted with exacting attention to ingredient sourcing and blending finesse.",
      perfumer: "Antoine Maisondieu",
      topNotes: ["Geranium"],
      heartNotes: ["Peony", "Osmanthus"],
      baseNotes: ["Oud", "Cypriol"],
    },
  },
  {
    name: "Y",
    brand: "Yves Saint Laurent",
    imageUrl: "https://i.ibb.co/Cpc31JjR/ysl-y-edp.jpg",
    intensity: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "summer", "fall"],
    notes: ["Apple", "Bergamot", "Ginger", "Sage", "Tonka Bean", "Cedarwood"],
    accords: {
      main: ["Aromatic", "Woody"],
      sub: ["Fresh Spicy", "Amber", "Warm Spicy"],
    },
    description:
      "The fragrance of creative, self-made men. A bold blend of freshness and strength combining lavender, geranium, and woody amber notes.",
    otherDetails: {
      launchYear: 2018,
      manufacturerDescription:
        "YSL Beauty's olfactory anthem for self-made visionaries—engineered with precision distillation to balance vibrant freshness and addictive depth.",
      perfumer: "Dominique Ropion",
      topNotes: ["Apple", "Ginger", "Bergamot"],
      heartNotes: ["Sage", "Juniper Berries", "Geranium"],
      baseNotes: ["Cedarwood", "Tonka Bean", "Amberwood"],
    },
  },
  {
    name: "Acqua di Giò Profondo",
    brand: "Giorgio Armani",
    imageUrl:
      "https://i.ibb.co/0Vzpry7y/giorgio-armani-acqua-di-gio-profondo.webp",
    intensity: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "summer"],
    notes: ["Marine Notes", "Bergamot", "Rosemary", "Patchouli", "Cypress"],
    accords: {
      main: ["Marine", "Aromatic"],
      sub: ["Woody", "Fresh Spicy", "Mineral"],
    },
    description:
      "A deep, aquatic interpretation of the iconic Acqua di Giò, blending marine notes with aromatic woods and mineral freshness.",
    otherDetails: {
      launchYear: 2020,
      manufacturerDescription:
        "Giorgio Armani Profumo Laboratories' marine-aromatic signature, bottling chromed citrus and deep woods in a refined, pressure-distilled concentrate.",
      perfumer: "Alberto Morillas",
      topNotes: ["Marine Notes", "Bergamot"],
      heartNotes: ["Rosemary", "Lavender", "Cypress"],
      baseNotes: ["Patchouli", "Amber", "Musk"],
    },
  },
  {
    name: "Ultra Male",
    brand: "Jean Paul Gaultier",
    imageUrl: "https://i.ibb.co/mV490g8y/jean-paul-gaultier-ultra-male.jpg",
    intensity: "Eau de Toilette Intense",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: [
      "Black Lavender",
      "Pear",
      "Woody Vanilla",
      "Bergamot",
      "Mint",
      "Lavender",
    ],
    accords: {
      main: ["Amber", "Aromatic"],
      sub: ["Vanilla", "Fruity", "Warm Spicy"],
    },
    description:
      "An irresistible blend of juicy pear, warm spices, and sensual vanilla — a bold evolution of the original Le Male.",
    otherDetails: {
      launchYear: 2015,
      manufacturerDescription:
        "Atelier Jean Paul Gaultier's intense fougère elixir, macerated for heightened sweetness and spice to deliver night-ready impact.",
      perfumer: "Francis Kurkdjian",
      topNotes: ["Pear", "Lavender", "Mint"],
      heartNotes: ["Cinnamon", "Clary Sage", "Caraway"],
      baseNotes: ["Vanilla", "Amber", "Patchouli"],
    },
  },
  {
    name: "Eros Flame",
    brand: "Versace",
    imageUrl: "https://i.ibb.co/TMYQLjnm/versace-eros-flame.webp",
    intensity: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Mandarin", "Black Pepper", "Rosemary", "Tonka Bean", "Cedar"],
    accords: {
      main: ["Warm Spicy", "Citrus"],
      sub: ["Woody", "Amber", "Vanilla"],
    },
    description:
      "A passionate, fiery fragrance that blends citrus brightness with spicy, woody depth — the scent of love in flames.",
    otherDetails: {
      launchYear: 2018,
      manufacturerDescription:
        "Versace's Milan atelier combines fiery Mediterranean citrus with precision-extracted woods to ignite a bold, long-lasting aura.",
      perfumer: "Olivier Pescheux",
      topNotes: ["Mandarin", "Black Pepper", "Lemon"],
      heartNotes: ["Rosemary", "Geranium", "Pepperwood"],
      baseNotes: ["Tonka Bean", "Cedar", "Vanilla"],
    },
  },
  {
    name: "Terre d’Hermès",
    brand: "Hermès",
    imageUrl: "https://i.ibb.co/3VwPHYv/hermes-terre-d-hermes.jpg",
    intensity: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "fall"],
    notes: ["Orange", "Vetiver", "Cedar", "Pepper", "Patchouli"],
    accords: {
      main: ["Woody", "Earthy"],
      sub: ["Citrus", "Chypre", "Mineral"],
    },
    description:
      "An ode to the elements — earthy vetiver and dry woods grounded by sparkling orange zest.",
    otherDetails: {
      launchYear: 2006,
      manufacturerDescription:
        "Hermès' parfumier workshop distills mineral citrus and refined vetiver through a patient maceration process celebrating earth and sky.",
      perfumer: "Jean-Claude Ellena",
      topNotes: ["Orange", "Grapefruit"],
      heartNotes: ["Pepper", "Pelargonium", "Flint"],
      baseNotes: ["Vetiver", "Cedar", "Patchouli"],
    },
  },
  {
    name: "MYSLF",
    brand: "Yves Saint Laurent",
    imageUrl: "https://i.ibb.co/5gshsXm8/ysl-myslf.webp",
    intensity: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "summer", "fall"],
    notes: ["Bergamot", "Orange Blossom", "Ambrofix", "Patchouli"],
    accords: {
      main: ["Floral", "Woody"],
      sub: ["Amber", "Citrus", "Mineral"],
    },
    description:
      "A statement of modern masculinity — the contrast of bright citrus, smooth florals, and warm woods.",
    otherDetails: {
      launchYear: 2023,
      manufacturerDescription:
        "YSL Beauty's neo-modern statement, blending couture orange blossom and abstract woods in a high-tech aroma fusion process.",
      perfumer: "Daniela Andrier",
      topNotes: ["Bergamot"],
      heartNotes: ["Orange Blossom"],
      baseNotes: ["Ambrofix", "Patchouli"],
    },
  },
  {
    name: "1 Million",
    brand: "Paco Rabanne",
    imageUrl: "https://i.ibb.co/5gW9KTRT/paco-rabanne-1-million.jpg",
    intensity: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Cinnamon", "Leather", "Amber", "Blood Mandarin", "Rose"],
    accords: {
      main: ["Warm Spicy", "Leather"],
      sub: ["Amber", "Vanilla", "Citrus"],
    },
    description:
      "A flamboyant scent of wealth and power — spicy leather wrapped in amber sweetness and citrus sparkle.",
    otherDetails: {
      launchYear: 2008,
      manufacturerDescription:
        "Paco Rabanne's perfumery labs combine molten spices and gilded leather through proprietary extraction for audacious projection.",
      perfumer: "Christophe Raynaud, Olivier Pescheux, Michel Girard",
      topNotes: ["Blood Mandarin", "Grapefruit"],
      heartNotes: ["Cinnamon", "Rose", "Spice"],
      baseNotes: ["Leather", "Amber", "Patchouli"],
    },
  },
  {
    name: "The One for Men",
    brand: "Dolce & Gabbana",
    imageUrl: "https://i.ibb.co/ZzXkx98f/dolce-and-gabbana-the-one-edp.jpg",
    intensity: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Grapefruit", "Ginger", "Cardamom", "Tobacco", "Amber"],
    accords: {
      main: ["Woody", "Amber"],
      sub: ["Aromatic", "Warm Spicy", "Smoky"],
    },
    description:
      "A sophisticated balance of spices and warm tobacco, radiating timeless masculine elegance.",
    otherDetails: {
      launchYear: 2015,
      manufacturerDescription:
        "Dolce & Gabbana's Sartoria fragrance studio melds refined spices and honeyed tobacco via small-batch infusion for timeless elegance.",
      perfumer: "Olivier Polge",
      topNotes: ["Grapefruit", "Coriander", "Basil"],
      heartNotes: ["Cardamom", "Ginger"],
      baseNotes: ["Tobacco", "Amber", "Cedar"],
    },
  },
  {
    name: "Divine Elixir",
    brand: "Jean Paul Gaultier",
    imageUrl:
      "https://i.ibb.co/nqbDtVbm/jean-paul-gaultier-gaultier-divine-elixir.webp",
    intensity: "Parfum",
    gender: "female",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Salty Note", "Tuberose", "Tonka Bean"],
    accords: {
      main: ["Amber", "Floral"],
      sub: ["Vanilla", "Marine"],
    },
    description:
      "An elixir of divine femininity — luminous white florals coated in honeyed sweetness and warm amber.",
    otherDetails: {
      launchYear: 2024,
      manufacturerDescription:
        "Gaultier's Maison blends luminous florals and liquorous tonka inside a gilded elixir process tailored for sensual radiance.",
      perfumer: "Quentin Bisch",
      topNotes: ["Orange Blossom"],
      heartNotes: ["Jasmine", "Honey"],
      baseNotes: ["Tonka Bean", "Patchouli"],
    },
  },
  {
    name: "Libre",
    brand: "Yves Saint Laurent",
    imageUrl: "https://i.ibb.co/SDLVgyMr/ysl-libre.webp",
    intensity: "Eau de Parfum",
    gender: "female",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "fall", "winter"],
    notes: ["Lavender", "Orange Blossom", "Vanilla", "Tonka Bean", "Ambergris"],
    accords: {
      main: ["Floral", "Fougère"],
      sub: ["Amber", "Aromatic", "Vanilla"],
    },
    description:
      "Freedom in a bottle — the tension between masculine lavender and feminine orange blossom wrapped in sensual amber.",
    otherDetails: {
      launchYear: 2019,
      manufacturerDescription:
        "YSL Beauty's ateliers weave haute couture lavender and amber accords with precision distillation for a signature tension.",
      perfumer: "Anne Flipo, Carlos Benaïm, Dominique Ropion",
      topNotes: ["Mandarin", "Lavender"],
      heartNotes: ["Orange Blossom", "Jasmine"],
      baseNotes: ["Vanilla", "Tonka Bean", "Ambergris"],
    },
  },
  {
    name: "Good Girl Blush Elixir",
    brand: "Carolina Herrera",
    imageUrl:
      "https://i.ibb.co/JRrKhWP2/carolina-herrera-good-girl-blush-elixir.webp",
    intensity: "Eau de Parfum Elixir",
    gender: "female",
    suitableTimes: ["night"],
    suitableSeasons: ["spring", "fall"],
    notes: ["Ylang-Ylang", "Rose", "Vanilla", "Tonka Bean", "Patchouli"],
    accords: {
      main: ["Floral", "Chypre"],
      sub: ["Vanilla", "Amber", "Warm Spicy"],
    },
    description:
      "A sensual re-imagining of Good Girl — creamy florals and glowing vanilla enriched with the intensity of an elixir.",
    otherDetails: {
      launchYear: 2023,
      manufacturerDescription:
        "Carolina Herrera's perfumery lab macerates luminous florals and creamy vanilla into an intense chypre-inspired elixir.",
      perfumer: "Quentin Bisch",
      topNotes: ["Bergamot", "Bitter Almond"],
      heartNotes: ["Ylang-Ylang", "Rose"],
      baseNotes: ["Vanilla", "Patchouli"],
    },
  },
  {
    name: "La Nuit de l’Homme",
    brand: "Yves Saint Laurent",
    imageUrl: "https://i.ibb.co/bjy3MZ39/ysl-la-nuit-de-lhomme.webp",
    intensity: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Cardamom", "Lavender", "Cedar", "Vetiver", "Coumarin"],
    accords: {
      main: ["Warm Spicy", "Woody"],
      sub: ["Aromatic", "Amber", "Vanilla"],
    },
    description:
      "Seductive and mysterious, La Nuit de l’Homme blends cardamom spice and creamy woods for irresistible allure.",
    otherDetails: {
      launchYear: 2009,
      manufacturerDescription:
        "YSL's contemporary atelier infuses cardamom and lavender through precise cold maceration for a smoldering evening trail.",
      perfumer: "Anne Flipo, Pierre Wargnye, Dominique Ropion",
      topNotes: ["Cardamom"],
      heartNotes: ["Lavender", "Cedar"],
      baseNotes: ["Vetiver", "Coumarin"],
    },
  },
  {
    name: "Virgin Island Water",
    brand: "Creed",
    imageUrl: "https://i.ibb.co/1Ghfw4Cr/creed-virgin-island-water.jpg",
    intensity: "Eau de Parfum",
    gender: "unisex",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "summer"],
    notes: [
      "Coconut",
      "Lime",
      "Bergamot",
      "Ylang-Ylang",
      "White Rum",
      "Sugar Cane",
    ],
    accords: {
      main: ["Citrus", "Fruity"],
      sub: ["Fruity", "Fresh Spicy", "Woody", "Marine"],
    },
    description:
      "Inspired by sailing through the Caribbean waters — the scent of lime, coconut, and white rum carried on a warm sea breeze.",
    otherDetails: {
      launchYear: 2007,
      manufacturerDescription:
        "Creed's Parisian atelier captures Caribbean breezes with hand-zested citrus and island botanicals in small copper stills.",
      perfumer: "Erwin Creed, Pierre Bourdon",
      topNotes: ["Lime", "Bergamot", "Mandarin"],
      heartNotes: ["Coconut", "Ylang-Ylang", "Jasmine"],
      baseNotes: ["White Rum", "Sugar Cane", "Musk"],
    },
  },
  {
    name: "Bottled Absolu",
    brand: "Hugo Boss",
    imageUrl: "https://i.ibb.co/R4J30j1m/hugo-boss-bottled-absolu.jpg",
    intensity: "Parfum Intense",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Incense", "Leather", "Patchouli", "Myrrh", "Cedarwood", "Davana"],
    accords: {
      main: ["Smoky", "Leather"],
      sub: ["Amber", "Woody", "Resinous", "Balsamic"],
    },
    description:
      "Dark incense and myrrh fuse with smooth leather and woody patchouli to evoke depth, warmth, and timeless masculinity.",
    otherDetails: {
      launchYear: 2019,
      manufacturerDescription:
        "Hugo Boss's Cologne Atelier slow-roasts resins and leathers to create a richly textured, evening-ready parfum intense.",
      perfumer: "Annick Ménardo",
      topNotes: ["Incense", "Leather"],
      heartNotes: ["Patchouli", "Myrrh"],
      baseNotes: ["Cedarwood", "Davana"],
    },
  },
  {
    name: "Neroli Portofino",
    brand: "Tom Ford",
    imageUrl: "https://i.ibb.co/4wDMVxTt/tom-ford-neroli-portofino.jpg",
    intensity: "Eau de Parfum",
    gender: "unisex",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "summer"],
    notes: [
      "Neroli",
      "Bergamot",
      "Mandarin",
      "Orange Blossom",
      "Amber",
      "Musk",
    ],
    accords: {
      main: ["Citrus", "Aromatic"],
      sub: ["Floral", "Fresh Spicy", "Amber", "Aquatic"],
    },
    description:
      "An effervescent citrus-aromatic blend inspired by the sparkling waters and sunlit breezes of the Italian Riviera. ",
    otherDetails: {
      collection: "Private Blend",
      launchYear: 2011,
      manufacturerDescription:
        "Tom Ford Private Blend artisans weave Italian citrus oils and coastal botanicals into a luminous, cold-pressed elixir.",
      perfumer: "Rodrigo Flores-Roux",
      topNotes: ["Bergamot", "Mandarin", "Lemon", "Neroli"],
      heartNotes: ["Orange Blossom", "Rosemary", "Lavender"],
      baseNotes: ["Amber", "Musk", "Angelica"],
    },
  },
];
