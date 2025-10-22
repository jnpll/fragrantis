"use client";

import Link from "next/link";

import { FragranceCard } from "@/components/catalogue/fragrance-card";
import { CatalogueToolbar } from "@/components/catalogue/catalogue-toolbar";
import { type SortOption } from "@/components/catalogue/filters-panel";
import { type Gender, type Season, fragrances } from "@/lib/data/fragrances";
import { olfactory_accords } from "@/lib/data/olfactory-accords";
import { olfactory_families } from "@/lib/data/olfactory-families";
import { useEffect, useMemo, useState } from "react";

const genderLabels: Record<Gender, string> = {
  male: "Masculine",
  female: "Feminine",
  unisex: "Unisex",
};

const accordColorMap = new Map(
  olfactory_accords.map((accord) => [accord.name, accord.color] as const),
);

const CATALOGUE_STATE_KEY = "catalogue:filters";

type StoredCatalogueState = {
  families: string[];
  accords: string[];
  genders: Gender[];
  seasons: Season[];
  brands: string[];
  search: string;
  sort: SortOption;
};

const SORT_OPTIONS: SortOption[] = [
  "brand-asc",
  "brand-desc",
  "name-asc",
  "name-desc",
  "newest",
  "oldest",
];

const GENDER_VALUES: Gender[] = ["male", "female", "unisex"];
const SEASON_VALUES: Season[] = ["spring", "summer", "fall", "winter"];

const isSortOption = (value: unknown): value is SortOption =>
  typeof value === "string" && SORT_OPTIONS.includes(value as SortOption);

const sanitizeStoredState = (value: unknown): StoredCatalogueState | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const data = value as Partial<Record<keyof StoredCatalogueState, unknown>>;

  const sanitizeStringArray = (input: unknown): string[] =>
    Array.isArray(input)
      ? input.filter((item): item is string => typeof item === "string")
      : [];

  const families = sanitizeStringArray(data.families);
  const accords = sanitizeStringArray(data.accords);
  const brands = sanitizeStringArray(data.brands);
  const genders = Array.isArray(data.genders)
    ? data.genders.filter(
        (gender): gender is Gender =>
          typeof gender === "string" &&
          GENDER_VALUES.includes(gender as Gender),
      )
    : [];
  const seasons = Array.isArray(data.seasons)
    ? data.seasons.filter(
        (season): season is Season =>
          typeof season === "string" &&
          SEASON_VALUES.includes(season as Season),
      )
    : [];
  const search = typeof data.search === "string" ? (data.search as string) : "";
  const sort = isSortOption(data.sort)
    ? (data.sort as SortOption)
    : "brand-asc";

  return {
    families,
    accords,
    genders,
    seasons,
    brands,
    search,
    sort,
  };
};

const readStoredCatalogueState = (): StoredCatalogueState | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(CATALOGUE_STATE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    return sanitizeStoredState(parsed);
  } catch {
    return null;
  }
};

const familyById = new Map(
  olfactory_families.map((family) => [family.id, family.name] as const),
);

const accordFamilyLookup = new Map(
  olfactory_accords.map(
    (accord) => [accord.name, familyById.get(accord.familyId) ?? ""] as const,
  ),
);

const familyOptions = Array.from(familyById.values()).sort((a, b) =>
  a.localeCompare(b),
);

const accordOptions = Array.from(
  new Set(olfactory_accords.map((accord) => accord.name)),
).sort((a, b) => a.localeCompare(b));

const brandOptions = Array.from(
  new Set(fragrances.map((fragrance) => fragrance.brand)),
).sort((a, b) => a.localeCompare(b));

const genderOptions: Gender[] = [...GENDER_VALUES];
const seasonOptions: Season[] = [...SEASON_VALUES];
const seasonLabels: Record<Season, string> = {
  spring: "Spring",
  summer: "Summer",
  fall: "Fall",
  winter: "Winter",
};

export default function CataloguePage() {
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>([]);
  const [selectedAccords, setSelectedAccords] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<Gender[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<Season[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("brand-asc");

  const toggleSelection = <T,>(
    value: T,
    setter: (updater: (prev: T[]) => T[]) => void,
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  useEffect(() => {
    const stored = readStoredCatalogueState();
    if (!stored) {
      return;
    }

    const normalisedFamilies = stored.families.filter((family) =>
      familyOptions.includes(family),
    );
    const normalisedAccords = stored.accords.filter((accord) =>
      accordOptions.includes(accord),
    );
    const normalisedBrands = stored.brands.filter((brand) =>
      brandOptions.includes(brand),
    );
    const normalisedGenders = stored.genders.filter((gender) =>
      genderOptions.includes(gender),
    );
    const normalisedSeasons = stored.seasons.filter((season) =>
      seasonOptions.includes(season),
    );
    const normalisedSort = isSortOption(stored.sort)
      ? stored.sort
      : "brand-asc";

    if (normalisedFamilies.length > 0) {
      setSelectedFamilies(normalisedFamilies);
    }
    if (normalisedAccords.length > 0) {
      setSelectedAccords(normalisedAccords);
    }
    if (normalisedGenders.length > 0) {
      setSelectedGenders(normalisedGenders);
    }
    if (normalisedSeasons.length > 0) {
      setSelectedSeasons(normalisedSeasons);
    }
    if (normalisedBrands.length > 0) {
      setSelectedBrands(normalisedBrands);
    }
    if (stored.search.trim().length > 0) {
      setSearchQuery(stored.search);
    }
    if (normalisedSort !== "brand-asc") {
      setSortOption(normalisedSort);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const payload: StoredCatalogueState = {
      families: selectedFamilies,
      accords: selectedAccords,
      genders: selectedGenders,
      seasons: selectedSeasons,
      brands: selectedBrands,
      search: searchQuery,
      sort: sortOption,
    };

    try {
      const isPristine =
        payload.families.length === 0 &&
        payload.accords.length === 0 &&
        payload.genders.length === 0 &&
        payload.seasons.length === 0 &&
        payload.brands.length === 0 &&
        payload.search.trim() === "" &&
        payload.sort === "brand-asc";

      if (isPristine) {
        window.sessionStorage.removeItem(CATALOGUE_STATE_KEY);
      } else {
        window.sessionStorage.setItem(
          CATALOGUE_STATE_KEY,
          JSON.stringify(payload),
        );
      }
    } catch {
      // Ignore storage errors (e.g., quota exceeded, privacy mode)
    }
  }, [
    selectedFamilies,
    selectedAccords,
    selectedGenders,
    selectedSeasons,
    selectedBrands,
    searchQuery,
    sortOption,
  ]);

  const filteredFragrances = useMemo(() => {
    return fragrances.filter((fragrance) => {
      const fragranceAccords = [
        ...fragrance.accords.main,
        ...fragrance.accords.sub,
      ];

      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const haystack = [
          fragrance.name,
          fragrance.brand,
          fragrance.otherDetails.perfumer,
          ...fragrance.notes,
          ...fragranceAccords,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(query)) {
          return false;
        }
      }

      if (
        selectedAccords.length > 0 &&
        !fragranceAccords.some((accord) => selectedAccords.includes(accord))
      ) {
        return false;
      }

      const fragranceFamilies = new Set(
        fragranceAccords
          .map((accord) => accordFamilyLookup.get(accord))
          .filter((family): family is string => Boolean(family)),
      );

      if (
        selectedFamilies.length > 0 &&
        !selectedFamilies.some((family) => fragranceFamilies.has(family))
      ) {
        return false;
      }

      if (
        selectedGenders.length > 0 &&
        !selectedGenders.includes(fragrance.gender)
      ) {
        return false;
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(fragrance.brand)
      ) {
        return false;
      }

      if (
        selectedSeasons.length > 0 &&
        !fragrance.suitableSeasons.some((season) =>
          selectedSeasons.includes(season),
        )
      ) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedAccords,
    selectedFamilies,
    selectedGenders,
    selectedSeasons,
    selectedBrands,
  ]);

  const sortedFragrances = useMemo(() => {
    const list = [...filteredFragrances];
    switch (sortOption) {
      case "brand-desc":
        return list.sort((a, b) => b.brand.localeCompare(a.brand));
      case "name-asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
        return list.sort(
          (a, b) => b.otherDetails.launchYear - a.otherDetails.launchYear,
        );
      case "oldest":
        return list.sort(
          (a, b) => a.otherDetails.launchYear - b.otherDetails.launchYear,
        );
      case "brand-asc":
      default:
        return list.sort((a, b) => a.brand.localeCompare(b.brand));
    }
  }, [filteredFragrances, sortOption]);

  const clearFilters = () => {
    setSelectedFamilies([]);
    setSelectedAccords([]);
    setSelectedGenders([]);
    setSelectedSeasons([]);
    setSelectedBrands([]);
  };

  const handleToggleFamily = (family: string) =>
    toggleSelection(family, setSelectedFamilies);
  const handleToggleAccord = (accord: string) =>
    toggleSelection(accord, setSelectedAccords);
  const handleToggleGender = (gender: string) =>
    toggleSelection(gender as Gender, setSelectedGenders);
  const handleToggleSeason = (season: string) =>
    toggleSelection(season as Season, setSelectedSeasons);
  const handleToggleBrand = (brand: string) =>
    toggleSelection(brand, setSelectedBrands);

  const filtersProps = {
    familyOptions,
    accordOptions,
    genderLabels: genderLabels as Record<string, string>,
    genderOptions,
    seasonLabels,
    seasonOptions,
    brandOptions,
    selections: {
      families: selectedFamilies,
      accords: selectedAccords,
      genders: selectedGenders,
      seasons: selectedSeasons,
      brands: selectedBrands,
    },
    onToggleFamily: handleToggleFamily,
    onToggleAccord: handleToggleAccord,
    onToggleGender: handleToggleGender,
    onToggleSeason: handleToggleSeason,
    onToggleBrand: handleToggleBrand,
    onClear: clearFilters,
    sortValue: sortOption,
    onSortChange: (value: SortOption) => setSortOption(value),
  };

  const resultsCount = sortedFragrances.length;

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex w-full flex-col gap-0">
        <header className="space-y-6 w-full max-w-7xl mx-auto px-6 py-6 sm:px-10 lg:px-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">
                /
              </li>
              <li aria-current="page" className="font-medium text-foreground">
                Catalogue
              </li>
            </ol>
          </nav>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Fragrance Catalogue
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore our curated perfumery
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Browse signature perfumes from across the library. Each entry
              includes its key accords, note pyramid, and ideal wearing
              occasions. Choose your next scent with confidence.
            </p>
          </div>
        </header>

        <CatalogueToolbar
          filtersProps={filtersProps}
          searchQuery={searchQuery}
          onSearchChange={(value) => setSearchQuery(value)}
          resultsCount={resultsCount}
        />

        <div className="space-y-8 lg:space-y-10 w-full max-w-7xl mx-auto px-6 py-6 sm:px-10 lg:px-16">
          <div className="space-y-6">
            {resultsCount > 0 ? (
              <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sortedFragrances.map((fragrance) => (
                  <FragranceCard
                    key={`${fragrance.brand}-${fragrance.name}`}
                    fragrance={fragrance}
                    accordColorMap={accordColorMap}
                    genderLabel={genderLabels[fragrance.gender]}
                  />
                ))}
              </section>
            ) : (
              <div className="rounded-lg border border-dashed border-border/70 bg-card/40 p-10 text-center text-sm text-muted-foreground">
                No fragrances match the selected filters yet. Try adjusting your
                selections.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
