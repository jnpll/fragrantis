import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  IconCalendarDown,
  IconCalendarUp,
  IconSortAscendingLetters,
  IconSortAZ,
  IconSortDescendingLetters,
  IconSortZA,
} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type SortOption =
  | "brand-asc"
  | "brand-desc"
  | "name-asc"
  | "name-desc"
  | "newest"
  | "oldest";

type SortBase = "brand" | "name" | "newest";
type SortDirection = "asc" | "desc";

type SortControlsProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const sortBaseOptions: { label: string; value: SortBase }[] = [
  { label: "Brand", value: "brand" },
  { label: "Name", value: "name" },
  { label: "Newest", value: "newest" },
];

const getBaseFromSort = (value: SortOption): SortBase => {
  if (value.startsWith("brand")) {
    return "brand";
  }
  if (value.startsWith("name")) {
    return "name";
  }
  return "newest";
};

const getDirectionFromSort = (value: SortOption): SortDirection => {
  if (value === "newest" || value.endsWith("-desc")) {
    return "desc";
  }
  return "asc";
};

const composeSortValue = (
  base: SortBase,
  direction: SortDirection,
): SortOption => {
  switch (base) {
    case "brand":
      return direction === "desc" ? "brand-desc" : "brand-asc";
    case "name":
      return direction === "desc" ? "name-desc" : "name-asc";
    case "newest":
    default:
      return direction === "desc" ? "newest" : "oldest";
  }
};

export function SortControls({ value, onChange }: SortControlsProps) {
  const selectedBase = getBaseFromSort(value);
  const selectedDirection = getDirectionFromSort(value);

  const toggleDirection = () => {
    const nextDirection = selectedDirection === "asc" ? "desc" : "asc";
    onChange(composeSortValue(selectedBase, nextDirection));
  };

  const nextDirectionLabel =
    selectedDirection === "asc"
      ? "Set descending order"
      : "Set ascending order";
  const currentDirectionLabel =
    selectedBase === "newest"
      ? selectedDirection === "desc"
        ? "Newest first"
        : "Oldest first"
      : selectedDirection === "asc"
        ? "Ascending order"
        : "Descending order";

  return (
    <div className="space-y-2">
      <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Sort
      </h2>
      <div className="flex items-center gap-2">
        <Select
          value={selectedBase}
          onValueChange={(base) => {
            const nextBase = base as SortBase;
            const nextDirection =
              nextBase === "newest" ? "desc" : selectedDirection;
            onChange(composeSortValue(nextBase, nextDirection));
          }}
        >
          <SelectTrigger className="w-full uppercase text-xs tracking-widest font-light">
            <SelectValue
              placeholder="Select sorting"
              aria-label="Sort fragrances"
            />
          </SelectTrigger>
          <SelectContent>
            {sortBaseOptions.map((option) => (
              <SelectItem
                className="uppercase text-xs tracking-widest font-light"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={toggleDirection}
              className="shrink-0"
              aria-label={nextDirectionLabel}
            >
              {selectedBase === "newest" ? (
                selectedDirection === "desc" ? (
                  <IconCalendarDown className="size-4" stroke={1.7} />
                ) : (
                  <IconCalendarUp className="size-4" stroke={1.7} />
                )
              ) : selectedDirection === "asc" ? (
                <IconSortAscendingLetters className="size-4" stroke={1.7} />
              ) : (
                <IconSortDescendingLetters className="size-4" stroke={1.7} />
              )}
              <span className="sr-only">{currentDirectionLabel}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">{currentDirectionLabel}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
