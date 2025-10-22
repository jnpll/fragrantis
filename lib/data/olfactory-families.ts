export type OlfactoryFamily = {
  id: number;
  name: string;
  slug: string;
  description: string;
  order: number;
};

export const olfactory_families: OlfactoryFamily[] = [
  {
    id: 1,
    name: "Fresh",
    slug: "fresh",
    description:
      "Bright, clean, and airy scents that evoke lightness, water, or greenery.",
    order: 1,
  },
  {
    id: 2,
    name: "Floral",
    slug: "floral",
    description:
      "Fragrances centered on blossoms and petals, from soft powdery flowers to sweet juicy fruits.",
    order: 2,
  },
  {
    id: 3,
    name: "Woody",
    slug: "woody",
    description:
      "Grounded scents built from woods, mosses, and earthy materials, providing depth and warmth.",
    order: 3,
  },
  {
    id: 4,
    name: "Amber",
    slug: "amber",
    description:
      "Comforting, rich tones built around resinous, vanilla, and gourmand nuances that feel cozy and enveloping.",
    order: 4,
  },
];
