export type OlfactoryFamily = {
  id: number
  name: string
  slug: string
  description: string
  order: number
}

export type OlfactoryAccord = {
  name: string
  slug: string
  familyId: number
  description: string
  color: string
}

export const olfactory_families: OlfactoryFamily[] = [
    {
      "id": 1,
      "name": "Fresh",
      "slug": "fresh",
      "description": "Bright, clean, and airy scents that evoke lightness, water, or greenery.",
      "order": 1
    },
    {
      "id": 2,
      "name": "Floral",
      "slug": "floral",
      "description": "Fragrances centered on blossoms and petals, from soft powdery florals to rich white flowers.",
      "order": 2
    },
    {
      "id": 3,
      "name": "Fruity",
      "slug": "fruity",
      "description": "Sweet, juicy, or tart fruit impressions that add liveliness and playfulness to compositions.",
      "order": 3
    },
    {
      "id": 4,  
      "name": "Woody",
      "slug": "woody",
      "description": "Grounded scents built from woods, mosses, and earthy materials, providing depth and warmth.",
      "order": 4
    },
    {
      "id": 5,
      "name": "Warm",
      "slug": "warm",
      "description": "Comforting, rich tones built around amber, vanilla, and gourmand nuances that feel cozy and enveloping.",
      "order": 5
    },
    {
      "id": 6,
      "name": "Resinous",
      "slug": "resinous",
      "description": "Deep, smoky, or balsamic accords from natural resins, incense, and woods that add density and mystery.",
      "order": 6
    },
    {
      "id": 7,
      "name": "Animalic",
      "slug": "animalic",
      "description": "Musky, leathery, or skin-like accords that lend sensuality, depth, and a raw natural character.",
      "order": 7
    }
  ]


export const olfactory_accords: OlfactoryAccord[] = [

  // Fresh family (id: 1)
  { name: "FreshSpicy", slug: "freshspicy", familyId: 1, description: "Bright, aromatic spices such as pink pepper and ginger for lively freshness.", color: "oklch(77.7% 0.152 181.912)" },
  { name: "Green", slug: "green", familyId: 1, description: "Evokes leaves, grass, stems, and nature; crisp, natural freshness.", color: "oklch(79.2% 0.209 151.711)" },
  { name: "Aromatic", slug: "aromatic", familyId: 1, description: "Herbal, cooling, and masculine-leaning tones from lavender, sage, or rosemary.", color: "oklch(76.5% 0.177 163.223)" },
  { name: "Herbal", slug: "herbal", familyId: 1, description: "Green and spicy herb tones such as basil, thyme, or mint that refresh and lift.", color: "oklch(87.1% 0.15 154.449)" },
    { name: "Citrus", slug: "citrus", familyId: 1, description: "Sparkling zest from lemon, bergamot, or grapefruit; adds brightness and clarity.", color: "oklch(91% 0.17 98)" },

  { name: "Aquatic", slug: "aquatic", familyId: 1, description: "Dewy, watery freshness reminiscent of rain, mist, or cool streams.", color: "oklch(86.5% 0.127 207.078)" },
  { name: "Marine", slug: "marine", familyId: 1, description: "Salty, oceanic breeze notes inspired by sea air and coastal minerals.", color: "oklch(62% 0.19 260)" },
  { name: "Mineral", slug: "mineral", familyId: 1, description: "Dry, stony, or salty tones resembling warm rocks and mineral air.", color: "oklch(39% 0.08 241)" },
  { name: "Ozonic", slug: "ozonic", familyId: 1, description: "Airy, transparent, synthetic cleanness that feels like open sky or wind.", color: "oklch(90.1% 0.058 230.902)" },
  { name: "Clean", slug: "clean", familyId: 1, description: "Pure, skin-like, or laundry-clean freshness that feels neutral and airy.", color: "oklch(88% 0.06 254)" },

  // Floral family (id: 2)
  { name: "Floral", slug: "floral", familyId: 2, description: "Classic flower bouquet scent profile spanning soft to intense blossoms.", color: "oklch(66.7% 0.295 322.15)" },
  { name: "WhiteFloral", slug: "whitefloral", familyId: 2, description: "Lush white flowers like jasmine, tuberose, and gardenia with rich intensity.", color: "oklch(93% 0.04 319)" },
  { name: "Rose", slug: "rose", familyId: 2, description: "Elegant, romantic floral accord built on rose petals and damask richness.", color: "oklch(64.5% 0.246 16.439)" },
  { name: "Powdery", slug: "powdery", familyId: 2, description: "Soft, dry, cosmetic-like quality from iris, violet, or heliotrope.", color: "oklch(89.4% 0.057 293.283)" },

  // Fruity family (id: 3)
  { name: "Fruity", slug: "fruity", familyId: 3, description: "Sweet, tart, or juicy fruit tones adding playfulness and energy to a fragrance.", color: "oklch(71% 0.17 22)" },

  // Woody family (id: 4)
  { name: "Woody", slug: "woody", familyId: 4, description: "Warm, grounding woods such as cedar, sandalwood, or vetiver.", color: "oklch(48% 0.10 62)" },
  { name: "DryWood", slug: "drywood", familyId: 4, description: "Crisp, arid woods like guaiac or oak, often smoky or slightly bitter.", color: "oklch(55.3% 0.013 58.071)" },
  { name: "Earthy", slug: "earthy", familyId: 4, description: "Soil-like, rooty, or mineral dampness evoking the forest floor.", color: "oklch(55.5% 0.163 48.998)" },
  { name: "Mossy", slug: "mossy", familyId: 4, description: "Soft green dampness of moss and lichen, often used in chypre blends.", color: "oklch(53.2% 0.157 131.589)" },
  { name: "Oud", slug: "oud", familyId: 4, description: "Dark, resinous agarwood with smoky, leathery, or balsamic undertones.", color: "oklch(44% 0.01 74)" },

  // Warm family (id: 5)
  { name: "WarmSpicy", slug: "warmspicy", familyId: 5, description: "Deep, hot spices like cinnamon and cardamom creating a cozy feel.", color: "oklch(55.3% 0.195 38.402)" },
  { name: "Sweet", slug: "sweet", familyId: 5, description: "Sugary warmth from vanilla, caramel, or tonka; comforting and enveloping.", color: "oklch(72% 0.17 13)" },
  { name: "Vanilla", slug: "vanilla", familyId: 5, description: "Creamy sweetness of vanilla and tonka bean with cozy depth.", color: "oklch(94.5% 0.129 101.54)" },
  { name: "Amber", slug: "amber", familyId: 5, description: "Golden warmth built from resins, vanilla, and labdanum; sensual and rich.", color: "oklch(76.9% 0.188 70.08)" },
  { name: "Gourmand", slug: "gourmand", familyId: 5, description: "Edible, dessert-like accords such as chocolate, coffee, or almond.", color: "oklch(64.6% 0.222 41.116)" },

  // Resinous family (id: 6)
  { name: "Resinous", slug: "resinous", familyId: 6, description: "Thick, ambered depth from tree resins such as benzoin and myrrh.", color: "oklch(80% 0.16 86)" },
  { name: "Balsamic", slug: "balsamic", familyId: 6, description: "Sweet, sticky warmth from balsams and labdanum resins.", color: "oklch(37% 0.04 257)" },
  { name: "Smoky", slug: "smoky", familyId: 6, description: "Burnt woods, incense, or tar-like nuances creating darkness and mystery.", color: "oklch(44% 0.00 0)" },
  { name: "Incense", slug: "incense", familyId: 6, description: "Spiritual smoky resin tone, often frankincense or olibanum-driven.", color: "oklch(39% 0.06 188)" },

  // Animalic family (id: 7)
  { name: "Musky", slug: "musky", familyId: 7, description: "Clean or animalic skin-like warmth that enhances sensual depth.", color: "oklch(71% 0.04 257)" },
  { name: "Animalic", slug: "animalic", familyId: 7, description: "Raw, primal tones reminiscent of fur, skin, or civet for intensity.", color: "oklch(0.51 0.20 17)" },
  { name: "Leather", slug: "leather", familyId: 7, description: "Supple, smoky hide-like tones adding rugged sophistication.", color: "oklch(47% 0.157 37.304)" },
  
]

export type Gender = "male" | "female" | "unisex"
export type SuitableTime = "day" | "night"
export type Season = "spring" | "summer" | "fall" | "winter"

export type Fragrance = {
  name: string
  brand: string
  concentration: string
  gender: Gender
  suitableTimes: SuitableTime[]
  suitableSeasons: Season[]
  notes: string[]
  accords: {
    main: string[]
    sub: string[]
  }
  description: string
  otherDetails: {
    collection?: string
    launchYear: number
    fragranceFamily: string
    topNotes: string[]
    heartNotes: string[]
    baseNotes: string[]
  }
}

export const fragrances: Fragrance[] = [
  {
    name: "Oud Voyager",
    brand: "Tom Ford",
    concentration: "Eau de Parfum",
    gender: "unisex",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "fall", "winter"],
    notes: ["Geranium", "Peony", "Oud", "Cypriol", "Osmanthus"],
    accords: {
      main: ["Floral", "Oud"],
      sub: ["Woody", "Green", "WarmSpicy", "Amber"],
    },
    description:
      "A journey where the past, present, and future unite ancient oud with futuristic florals in a warm, captivating embrace.",
    otherDetails: {
      collection: "Private Blend",
      launchYear: 2025,
      fragranceFamily: "Floral Woody Amber",
      topNotes: ["Geranium"],
      heartNotes: ["Peony", "Osmanthus"],
      baseNotes: ["Oud", "Cypriol"],
    },
  },
  {
    name: "Y",
    brand: "Yves Saint Laurent",
    concentration: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "summer", "fall"],
    notes: [
      "Apple",
      "Bergamot",
      "Ginger",
      "Sage",
      "Tonka Bean",
      "Cedarwood",
    ],
    accords: {
      main: ["Aromatic", "Woody"],
      sub: ["FreshSpicy", "Amber", "Sweet"],
    },
    description:
      "The fragrance of creative, self-made men. A bold blend of freshness and strength combining lavender, geranium, and woody amber notes.",
    otherDetails: {
      launchYear: 2018,
      fragranceFamily: "Aromatic Fougere",
      topNotes: ["Apple", "Ginger", "Bergamot"],
      heartNotes: ["Sage", "Juniper Berries", "Geranium"],
      baseNotes: ["Cedarwood", "Tonka Bean", "Amberwood"],
    },
  },
  {
    name: "Acqua di Giò Profondo",
    brand: "Giorgio Armani",
    concentration: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "summer"],
    notes: ["Marine Notes", "Bergamot", "Rosemary", "Patchouli", "Cypress"],
    accords: {
      main: ["Marine", "Aromatic"],
      sub: ["Woody", "FreshSpicy", "Mineral"],
    },
    description:
      "A deep, aquatic interpretation of the iconic Acqua di Giò, blending marine notes with aromatic woods and mineral freshness.",
    otherDetails: {
      launchYear: 2020,
      fragranceFamily: "Aromatic Aquatic",
      topNotes: ["Marine Notes", "Bergamot"],
      heartNotes: ["Rosemary", "Lavender", "Cypress"],
      baseNotes: ["Patchouli", "Amber", "Musk"],
    },
  },
  {
    name: "Ultra Male",
    brand: "Jean Paul Gaultier",
    concentration: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: [
      "Pear",
      "Lavender",
      "Cinnamon",
      "Vanilla",
      "Amber",
      "Patchouli",
    ],
    accords: {
      main: ["Sweet", "WarmSpicy"],
      sub: ["Amber", "Vanilla", "Fruity"],
    },
    description:
      "An irresistible blend of juicy pear, warm spices, and sensual vanilla — a bold evolution of the original Le Male.",
    otherDetails: {
      launchYear: 2015,
      fragranceFamily: "Amber Fougere",
      topNotes: ["Pear", "Lavender", "Mint"],
      heartNotes: ["Cinnamon", "Clary Sage", "Caraway"],
      baseNotes: ["Vanilla", "Amber", "Patchouli"],
    },
  },
  {
    name: "Eros Flame",
    brand: "Versace",
    concentration: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: [
      "Mandarin",
      "Black Pepper",
      "Rosemary",
      "Tonka Bean",
      "Cedar",
    ],
    accords: {
      main: ["WarmSpicy", "Citrus"],
      sub: ["Woody", "Amber", "Sweet"],
    },
    description:
      "A passionate, fiery fragrance that blends citrus brightness with spicy, woody depth — the scent of love in flames.",
    otherDetails: {
      launchYear: 2018,
      fragranceFamily: "Woody Spicy",
      topNotes: ["Mandarin", "Black Pepper", "Lemon"],
      heartNotes: ["Rosemary", "Geranium", "Pepperwood"],
      baseNotes: ["Tonka Bean", "Cedar", "Vanilla"],
    },
  },
  {
    name: "Terre d’Hermès",
    brand: "Hermès",
    concentration: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["day"],
    suitableSeasons: ["spring", "fall"],
    notes: ["Orange", "Vetiver", "Cedar", "Pepper", "Patchouli"],
    accords: {
      main: ["Woody", "Earthy"],
      sub: ["Citrus", "DryWood", "Mineral"],
    },
    description:
      "An ode to the elements — earthy vetiver and dry woods grounded by sparkling orange zest.",
    otherDetails: {
      launchYear: 2006,
      fragranceFamily: "Woody Spicy",
      topNotes: ["Orange", "Grapefruit"],
      heartNotes: ["Pepper", "Pelargonium", "Flint"],
      baseNotes: ["Vetiver", "Cedar", "Patchouli"],
    },
  },
  {
    name: "MYSLF",
    brand: "Yves Saint Laurent",
    concentration: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "summer", "fall"],
    notes: ["Bergamot", "Orange Blossom", "Ambrofix", "Patchouli"],
    accords: {
      main: ["Aromatic", "Woody"],
      sub: ["Amber", "Citrus", "Clean"],
    },
    description:
      "A statement of modern masculinity — the contrast of bright citrus, smooth florals, and warm woods.",
    otherDetails: {
      launchYear: 2023,
      fragranceFamily: "Woody Floral",
      topNotes: ["Bergamot"],
      heartNotes: ["Orange Blossom"],
      baseNotes: ["Ambrofix", "Patchouli"],
    },
  },
  {
    name: "1 Million",
    brand: "Paco Rabanne",
    concentration: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Cinnamon", "Leather", "Amber", "Blood Mandarin", "Rose"],
    accords: {
      main: ["WarmSpicy", "Leather"],
      sub: ["Amber", "Sweet", "Citrus"],
    },
    description:
      "A flamboyant scent of wealth and power — spicy leather wrapped in amber sweetness and citrus sparkle.",
    otherDetails: {
      launchYear: 2008,
      fragranceFamily: "Woody Spicy",
      topNotes: ["Blood Mandarin", "Grapefruit"],
      heartNotes: ["Cinnamon", "Rose", "Spice"],
      baseNotes: ["Leather", "Amber", "Patchouli"],
    },
  },
  {
    name: "The One for Men",
    brand: "Dolce & Gabbana",
    concentration: "Eau de Parfum",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Grapefruit", "Ginger", "Cardamom", "Tobacco", "Amber"],
    accords: {
      main: ["WarmSpicy", "Amber"],
      sub: ["Woody", "Sweet", "Tobacco"],
    },
    description:
      "A sophisticated balance of spices and warm tobacco, radiating timeless masculine elegance.",
    otherDetails: {
      launchYear: 2015,
      fragranceFamily: "Woody Spicy",
      topNotes: ["Grapefruit", "Coriander", "Basil"],
      heartNotes: ["Cardamom", "Ginger"],
      baseNotes: ["Tobacco", "Amber", "Cedar"],
    },
  },
  {
    name: "Gaultier Divine Elixir",
    brand: "Jean Paul Gaultier",
    concentration: "Eau de Parfum Elixir",
    gender: "female",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: [
      "Orange Blossom",
      "Jasmine",
      "Honey",
      "Tonka Bean",
      "Patchouli",
    ],
    accords: {
      main: ["WhiteFloral", "Sweet"],
      sub: ["Amber", "Vanilla", "WarmSpicy"],
    },
    description:
      "An elixir of divine femininity — luminous white florals coated in honeyed sweetness and warm amber.",
    otherDetails: {
      launchYear: 2024,
      fragranceFamily: "Amber Floral",
      topNotes: ["Orange Blossom"],
      heartNotes: ["Jasmine", "Honey"],
      baseNotes: ["Tonka Bean", "Patchouli"],
    },
  },
  {
    name: "Libre",
    brand: "Yves Saint Laurent",
    concentration: "Eau de Parfum",
    gender: "female",
    suitableTimes: ["day", "night"],
    suitableSeasons: ["spring", "fall", "winter"],
    notes: [
      "Lavender",
      "Orange Blossom",
      "Vanilla",
      "Tonka Bean",
      "Ambergris",
    ],
    accords: {
      main: ["WhiteFloral", "Amber"],
      sub: ["Vanilla", "Aromatic", "Sweet"],
    },
    description:
      "Freedom in a bottle — the tension between masculine lavender and feminine orange blossom wrapped in sensual amber.",
    otherDetails: {
      launchYear: 2019,
      fragranceFamily: "Amber Fougere",
      topNotes: ["Mandarin", "Lavender"],
      heartNotes: ["Orange Blossom", "Jasmine"],
      baseNotes: ["Vanilla", "Tonka Bean", "Ambergris"],
    },
  },
  {
    name: "Good Girl Blush Elixir",
    brand: "Carolina Herrera",
    concentration: "Eau de Parfum Elixir",
    gender: "female",
    suitableTimes: ["night"],
    suitableSeasons: ["spring", "fall"],
    notes: ["Ylang-Ylang", "Rose", "Vanilla", "Tonka Bean", "Patchouli"],
    accords: {
      main: ["Floral", "Sweet"],
      sub: ["Vanilla", "Amber", "WarmSpicy"],
    },
    description:
      "A sensual re-imagining of Good Girl — creamy florals and glowing vanilla enriched with the intensity of an elixir.",
    otherDetails: {
      launchYear: 2023,
      fragranceFamily: "Amber Floral",
      topNotes: ["Ylang-Ylang"],
      heartNotes: ["Rose"],
      baseNotes: ["Vanilla", "Tonka Bean", "Patchouli"],
    },
  },
  {
    name: "La Nuit de l’Homme",
    brand: "Yves Saint Laurent",
    concentration: "Eau de Toilette",
    gender: "male",
    suitableTimes: ["night"],
    suitableSeasons: ["fall", "winter"],
    notes: ["Cardamom", "Lavender", "Cedar", "Vetiver", "Coumarin"],
    accords: {
      main: ["WarmSpicy", "Woody"],
      sub: ["Aromatic", "Amber", "Sweet"],
    },
    description:
      "Seductive and mysterious, La Nuit de l’Homme blends cardamom spice and creamy woods for irresistible allure.",
    otherDetails: {
      launchYear: 2009,
      fragranceFamily: "Woody Spicy",
      topNotes: ["Cardamom"],
      heartNotes: ["Lavender", "Cedar"],
      baseNotes: ["Vetiver", "Coumarin"],
    },
  },
]
