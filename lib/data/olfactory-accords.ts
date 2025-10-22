export type OlfactoryAccord = {
  name: string;
  slug: string;
  familyId: number;
  description: string;
  color: string;
};

export const olfactory_accords: OlfactoryAccord[] = [
  // Fresh family (id: 1)
  {
    name: "Citrus",
    slug: "citrus",
    familyId: 1,
    description:
      "Sparkling zest from lemon, bergamot, or grapefruit; adds brightness and clarity.",
    color: "oklch(85% 0.18 95)",
  },
  {
    name: "Fresh Spicy",
    slug: "freshspicy",
    familyId: 1,
    description:
      "Bright, aromatic spices such as pink pepper and ginger for lively freshness.",
    color: "oklch(78% 0.16 110)",
  },
  {
    name: "Green",
    slug: "green",
    familyId: 1,
    description:
      "Evokes leaves, grass, stems, and nature; crisp, natural freshness.",
    color: "oklch(74% 0.2 135)",
  },
  {
    name: "Aromatic",
    slug: "aromatic",
    familyId: 1,
    description:
      "Herbal, cooling tones from lavender, sage, or rosemary that energize a composition.",
    color: "oklch(70% 0.16 150)",
  },
  {
    name: "Fougère",
    slug: "fougère",
    familyId: 1,
    description:
      "Classic barbershop freshness weaving lavender, coumarin, and mossy undertones.",
    color: "oklch(68% 0.15 170)",
  },
  {
    name: "Aquatic",
    slug: "aquatic",
    familyId: 1,
    description:
      "Dewy, watery freshness reminiscent of rain, mist, or cool streams.",
    color: "oklch(80% 0.12 200)",
  },
  {
    name: "Marine",
    slug: "marine",
    familyId: 1,
    description:
      "Salty, oceanic breeze notes inspired by sea air and coastal minerals.",
    color: "oklch(60% 0.14 220)",
  },
  {
    name: "Mineral",
    slug: "mineral",
    familyId: 1,
    description:
      "Dry, stony, or salty tones resembling warm rocks and mineral air.",
    color: "oklch(50% 0.08 240)",
  },

  // Floral family (id: 2)
  {
    name: "Floral",
    slug: "floral",
    familyId: 2,
    description:
      "Classic flower bouquet scent profile spanning soft to intense blossoms.",
    color: "oklch(68% 0.25 325)",
  },
  {
    name: "Fruity",
    slug: "fruity",
    familyId: 2,
    description:
      "Sweet, tart, or juicy fruit tones adding playfulness and energy to a fragrance.",
    color: "oklch(73% 0.24 10)",
  },
  {
    name: "Powdery",
    slug: "powdery",
    familyId: 2,
    description:
      "Soft, dry, cosmetic-like quality from iris, violet, or heliotrope.",
    color: "oklch(82% 0.1 315)",
  },

  // Woody family (id: 3)
  {
    name: "Woody",
    slug: "woody",
    familyId: 3,
    description: "Warm, grounding woods such as cedar, sandalwood, or vetiver.",
    color: "oklch(48% 0.07 55)",
  },
  {
    name: "Earthy",
    slug: "earthy",
    familyId: 3,
    description:
      "Soil-like, rooty, or mineral dampness evoking the forest floor.",
    color: "oklch(42% 0.04 80)",
  },
  {
    name: "Mossy",
    slug: "mossy",
    familyId: 3,
    description:
      "Soft green dampness of moss and lichen, often used in chypre blends.",
    color: "oklch(45% 0.07 100)",
  },
  {
    name: "Oud",
    slug: "oud",
    familyId: 3,
    description:
      "Dark, resinous agarwood with smoky, leathery, or balsamic undertones.",
    color: "oklch(36% 0.03 75)",
  },
  {
    name: "Chypre",
    slug: "chypre",
    familyId: 3,
    description:
      "A classic structure balancing fresh citrus top notes with a mossy, woody, and resinous base.",
    color: "oklch(44% 0.07 20)",
  },
  {
    name: "Musky",
    slug: "musky",
    familyId: 3,
    description:
      "Soft, skin-like warmth that adds a smooth, velvety depth to woody foundations.",
    color: "oklch(54% 0.07 330)",
  },

  // Amber family (id: 4)
  {
    name: "Vanilla",
    slug: "vanilla",
    familyId: 4,
    description:
      "Creamy vanilla bean sweetness with soft tonka warmth and a velvety finish.",
    color: "oklch(88% 0.12 95)",
  },
  {
    name: "Amber",
    slug: "amber",
    familyId: 4,
    description:
      "Golden warmth built from resins, vanilla, and labdanum; sensual and rich.",
    color: "oklch(68% 0.24 85)",
  },
  {
    name: "Resinous",
    slug: "resinous",
    familyId: 4,
    description:
      "Thick, ambered depth from tree resins such as benzoin and myrrh.",
    color: "oklch(60% 0.21 70)",
  },
  {
    name: "Warm Spicy",
    slug: "warmspicy",
    familyId: 4,
    description:
      "Deep, hot spices like cinnamon and cardamom creating a cozy feel.",
    color: "oklch(58% 0.24 48)",
  },
  {
    name: "Balsamic",
    slug: "balsamic",
    familyId: 4,
    description: "Sweet, sticky warmth from balsams and labdanum resins.",
    color: "oklch(50% 0.2 35)",
  },
  {
    name: "Leather",
    slug: "leather",
    familyId: 4,
    description: "Supple, smoky hide-like tones adding rugged sophistication.",
    color: "oklch(45% 0.17 20)",
  },
  {
    name: "Animalic",
    slug: "animalic",
    familyId: 4,
    description:
      "Raw, primal tones reminiscent of fur, skin, or civet for intensity.",
    color: "oklch(42% 0.13 18)",
  },
  {
    name: "Smoky",
    slug: "smoky",
    familyId: 4,
    description:
      "Burnt woods, incense, or tar-like nuances creating darkness and mystery.",
    color: "oklch(35% 0.05 25)",
  },
];
