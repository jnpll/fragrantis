"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { FiltersPanel } from "@/components/catalogue/filters-panel";
import { FilterTag } from "@/components/catalogue/filter-tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";

type CatalogueToolbarProps = {
  filtersProps: React.ComponentProps<typeof FiltersPanel>;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  resultsCount: number;
  className?: string;
};

export function CatalogueToolbar({
  filtersProps,
  searchQuery,
  onSearchChange,
  resultsCount,
  className,
}: CatalogueToolbarProps) {
  const { selections, genderLabels, seasonLabels } = filtersProps;
  const [showTags, setShowTags] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const toolbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateStickyState = () => {
      const toolbarEl = toolbarRef.current;
      if (!toolbarEl) {
        setIsSticky(false);
        return;
      }

      const computedTop = parseFloat(
        window.getComputedStyle(toolbarEl).top || "0",
      );
      const offset = Number.isNaN(computedTop) ? 0 : computedTop;
      const { top } = toolbarEl.getBoundingClientRect();
      setIsSticky(top <= offset);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateStickyState);

    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateStickyState);
    };
  }, []);

  useEffect(() => {
    if (!isSticky) {
      setShowTags(true);
    }
  }, [isSticky]);

  const activeFilters = useMemo(
    () => [
      ...selections.families.map((family) => ({
        key: `family-${family}`,
        label: family,
        onRemove: () => filtersProps.onToggleFamily(family),
      })),
      ...selections.accords.map((accord) => ({
        key: `accord-${accord}`,
        label: accord,
        onRemove: () => filtersProps.onToggleAccord(accord),
      })),
      ...selections.genders.map((gender) => ({
        key: `gender-${gender}`,
        label: genderLabels[gender] ?? gender,
        onRemove: () => filtersProps.onToggleGender(gender),
      })),
      ...selections.seasons.map((season) => ({
        key: `season-${season}`,
        label: seasonLabels[season] ?? season,
        onRemove: () => filtersProps.onToggleSeason(season),
      })),
      ...selections.brands.map((brand) => ({
        key: `brand-${brand}`,
        label: brand,
        onRemove: () => filtersProps.onToggleBrand(brand),
      })),
    ],
    [
      filtersProps,
      genderLabels,
      selections.accords,
      selections.brands,
      selections.families,
      selections.genders,
      selections.seasons,
      seasonLabels,
    ],
  );

  const hasActiveFilters = activeFilters.length > 0;

  return (
    <div
      ref={toolbarRef}
      className={cn("sticky top-16 z-40 w-full", className)}
    >
      <div className="w-full bg-card">
        <div className="flex flex-col mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 gap-8 pt-8 pb-4 md:flex-row md:items-center md:justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="link"
                className="flex items-center gap-2 has-[>svg]:px-0 py-2 text-xs font-medium uppercase tracking-[0.3em]"
              >
                Filter &amp; Sort
                <IconChevronDown className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              title="Filter and sort catalogue"
              className="w-full max-w-xs border-r border-border/60 p-0 sm:max-w-sm"
            >
              <div className="h-full overflow-y-auto p-6">
                <FiltersPanel
                  {...filtersProps}
                  className={cn("space-y-6", filtersProps.className)}
                />
              </div>
            </SheetContent>
          </Sheet>

          <Input
            variant="underline"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name, brand, perfumer, or notes"
            className="w-full md:max-w-xs"
          />

          <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {resultsCount} products
            </span>
          </div>
        </div>
      </div>
      {hasActiveFilters ? (
        <div className="relative backdrop-blur supports-backdrop-filter:bg-background/80">
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div
              id="catalogue-active-filters"
              className={cn(
                "flex flex-wrap overflow-hidden gap-2 transition-all duration-300 ease-in-out",
                showTags
                  ? "max-h-52 opacity-100 py-4"
                  : "pointer-events-none max-h-0 opacity-0 py-0",
              )}
            >
              {activeFilters.map((filter) => (
                <FilterTag
                  key={filter.key}
                  label={filter.label}
                  onRemove={filter.onRemove}
                />
              ))}
            </div>
            {isSticky ? (
              <Button
                type="button"
                size="icon"
                variant="default"
                onClick={() => setShowTags((prev) => !prev)}
                aria-expanded={showTags}
                aria-controls="catalogue-active-filters"
                className="absolute size-6 top-full -translate-y-1/2 rounded-full border border-border shadow-sm transition-transform right-3 sm:right-7 lg:right-13"
              >
                <IconChevronDown
                  className={cn(
                    "transition-transform duration-300",
                    showTags ? "rotate-180" : "rotate-0",
                  )}
                />
                <span className="sr-only">
                  {showTags ? "Hide active filters" : "Show active filters"}
                </span>
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
