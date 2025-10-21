import { Button } from "@/components/ui/button"
import { formatAccordName } from "@/lib/accord-utils"
import { cn } from "@/lib/utils"

type FiltersPanelProps = {
  className?: string
  familyOptions: string[]
  accordOptions: string[]
  genderLabels: Record<string, string>
  genderOptions: string[]
  brandOptions: string[]
  selections: {
    families: string[]
    accords: string[]
    genders: string[]
    brands: string[]
  }
  onToggleFamily: (family: string) => void
  onToggleAccord: (accord: string) => void
  onToggleGender: (gender: string) => void
  onToggleBrand: (brand: string) => void
  onClear: () => void
}

export function FiltersPanel({
  className,
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
    0

  return (
    <aside
      className={cn("space-y-6 border-r border-border p-5", className)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Filters
        </h2>
        <Button
          variant="link"
          size="sm"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className={!hasActiveFilters ? "invisible text-muted-foreground" : "text-muted-foreground"}
        >
          Clear
        </Button>
      </div>

      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Family
          </p>
          <div className="max-h-40 space-y-2 overflow-y-auto pr-1 text-sm">
            {familyOptions.map((family) => (
              <label
                key={family}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-background text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  checked={selections.families.includes(family)}
                  onChange={() => onToggleFamily(family)}
                />
                <span>{family}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Accords
          </p>
          <div className="max-h-48 space-y-2 overflow-y-auto pr-1 text-sm">
            {accordOptions.map((accord) => (
              <label
                key={accord}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-background text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  checked={selections.accords.includes(accord)}
                  onChange={() => onToggleAccord(accord)}
                />
                <span>{formatAccordName(accord)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Gender
          </p>
          <div className="space-y-2 text-sm">
            {genderOptions.map((gender) => (
              <label
                key={gender}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-background text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  checked={selections.genders.includes(gender)}
                  onChange={() => onToggleGender(gender)}
                />
                <span>{genderLabels[gender]}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Brand
          </p>
          <div className="max-h-40 space-y-2 overflow-y-auto pr-1 text-sm">
            {brandOptions.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-background text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  checked={selections.brands.includes(brand)}
                  onChange={() => onToggleBrand(brand)}
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
