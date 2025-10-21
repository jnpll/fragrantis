"use client";

import { FiltersPanel } from "@/components/catalogue/filters-panel";
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
  return (
    <div
      className={cn(
        "sticky top-16 z-40 w-full border-b border-border/60 bg-card/60 backdrop-blur supports-backdrop-filter:bg-background/80",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-3 pt-8 pb-4 md:flex-row md:items-center md:justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="link"
                className="flex items-center gap-2 has-[>svg]:px-0 py-2 text-xs font-medium uppercase tracking-widest"
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
    </div>
  );
}
