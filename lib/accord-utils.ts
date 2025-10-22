export const formatAccordName = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, "$1 $2");

export const getAccordTextColor = (color?: string) => {
  if (!color) {
    return "oklch(0.145 0 0)";
  }

  const lightnessMatch = color.match(/oklch\(([\d.]+)%?/);
  const lightness = lightnessMatch ? Number.parseFloat(lightnessMatch[1]) : 60;

  return lightness > 70 ? "oklch(0.145 0 0)" : "oklch(0.985 0 0)";
};
