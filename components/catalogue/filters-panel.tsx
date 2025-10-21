import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { SheetFooter } from "@/components/ui/sheet";
import { formatAccordName } from "@/lib/accord-utils";
import { cn } from "@/lib/utils";
import { SortControls, type SortOption } from "./sort-controls";

export type { SortOption } from "./sort-controls";

type FiltersPanelProps = {
  className?: string;
  sortValue: SortOption;
  onSortChange: (value: SortOption) => void;
  familyOptions: string[];
  accordOptions: string[];
  genderLabels: Record<string, string>;
  genderOptions: string[];
  brandOptions: string[];
  selections: {
    families: string[];
    accords: string[];
    genders: string[];
    brands: string[];
  };
  onToggleFamily: (family: string) => void;
  onToggleAccord: (accord: string) => void;
  onToggleGender: (gender: string) => void;
  onToggleBrand: (brand: string) => void;
  onClear: () => void;
};

export function FiltersPanel({
  className,
  sortValue,
  onSortChange,
  familyOptions,
  accordOptions,
  genderLabels,
  genderOptions,
  brandOptions,
  selections,
  onToggleFamily,
  onToggleAccord,
  onToggleGender,
  onToggleBrand,
  onClear,
}: FiltersPanelProps) {
  const hasActiveFilters =
    selections.families.length +
      selections.accords.length +
      selections.genders.length +
      selections.brands.length >
    0;

  return (
    <aside className={cn("flex h-full flex-col gap-6 p-5", className)}>
      <SortControls value={sortValue} onChange={onSortChange} />

      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Filters
        </h2>

        <Accordion
          type="multiple"
          className="flex-1 space-y-2 overflow-y-auto pr-1"
        >
          <AccordionItem value="family">
            <AccordionTrigger className="text-xs uppercase tracking-[0.3em]">
              Family
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-h-40 space-y-2 overflow-y-auto pr-1 text-sm">
                {familyOptions.map((family) => (
                  <label
                    key={family}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Checkbox
                      checked={selections.families.includes(family)}
                      onCheckedChange={() => onToggleFamily(family)}
                    />
                    <span>{family}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accords">
            <AccordionTrigger className="text-xs uppercase tracking-[0.3em]">
              Accords
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-h-48 space-y-2 overflow-y-auto pr-1 text-sm">
                {accordOptions.map((accord) => (
                  <label
                    key={accord}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Checkbox
                      checked={selections.accords.includes(accord)}
                      onCheckedChange={() => onToggleAccord(accord)}
                    />
                    <span>{formatAccordName(accord)}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="gender">
            <AccordionTrigger className="text-xs uppercase tracking-[0.3em]">
              Gender
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm">
                {genderOptions.map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Checkbox
                      checked={selections.genders.includes(gender)}
                      onCheckedChange={() => onToggleGender(gender)}
                    />
                    <span>{genderLabels[gender]}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger className="text-xs uppercase tracking-[0.3em]">
              Brand
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-h-40 space-y-2 overflow-y-auto pr-1 text-sm">
                {brandOptions.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Checkbox
                      checked={selections.brands.includes(brand)}
                      onCheckedChange={() => onToggleBrand(brand)}
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <SheetFooter
        className={
          !hasActiveFilters
            ? "invisible"
            : `text-muted-foreground mt-auto flex-none items-center justify-end space-y-0 gap-3 border-t border-border/60 pt-4`
        }
      >
        <Button
          variant="link"
          size="sm"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="underline hover:cursor-pointer"
        >
          Clear Filters
        </Button>
      </SheetFooter>
    </aside>
  );
}
