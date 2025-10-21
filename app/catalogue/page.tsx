"use client"

import Link from "next/link"

import { FiltersPanel } from "@/components/catalogue/filters-panel"
import { FragranceCard } from "@/components/catalogue/fragrance-card"
import {
  type Gender,
  fragrances,
  olfactory_accords,
  olfactory_families,
} from "@/lib/temp-data"
import { useMemo, useState } from "react"

const genderLabels: Record<Gender, string> = {
  male: "Masculine",
  female: "Feminine",
  unisex: "Unisex",
}

const sortedFragrances = [...fragrances].sort((a, b) =>
  a.brand.localeCompare(b.brand)
)

const accordColorMap = new Map(
  olfactory_accords.map((accord) => [accord.name, accord.color] as const)
)

const familyById = new Map(
  olfactory_families.map((family) => [family.id, family.name] as const)
)

const accordFamilyLookup = new Map(
  olfactory_accords.map(
    (accord) => [accord.name, familyById.get(accord.familyId) ?? ""] as const
  )
)

const familyOptions = Array.from(familyById.values()).sort((a, b) =>
  a.localeCompare(b)
)

const accordOptions = Array.from(
  new Set(olfactory_accords.map((accord) => accord.name))
).sort((a, b) => a.localeCompare(b))

const brandOptions = Array.from(
  new Set(fragrances.map((fragrance) => fragrance.brand))
).sort((a, b) => a.localeCompare(b))

const genderOptions: Gender[] = ["male", "female", "unisex"]

export default function CataloguePage() {
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>([])
  const [selectedAccords, setSelectedAccords] = useState<string[]>([])
  const [selectedGenders, setSelectedGenders] = useState<Gender[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const toggleSelection = <T,>(
    value: T,
    setter: (updater: (prev: T[]) => T[]) => void
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const filteredFragrances = useMemo(() => {
    return sortedFragrances.filter((fragrance) => {
      const fragranceAccords = [
        ...fragrance.accords.main,
        ...fragrance.accords.sub,
      ]

      if (
        selectedAccords.length > 0 &&
        !fragranceAccords.some((accord) => selectedAccords.includes(accord))
      ) {
        return false
      }

      const fragranceFamilies = new Set(
        fragranceAccords
          .map((accord) => accordFamilyLookup.get(accord))
          .filter((family): family is string => Boolean(family))
      )

      if (
        selectedFamilies.length > 0 &&
        !selectedFamilies.some((family) => fragranceFamilies.has(family))
      ) {
        return false
      }

      if (
        selectedGenders.length > 0 &&
        !selectedGenders.includes(fragrance.gender)
      ) {
        return false
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(fragrance.brand)
      ) {
        return false
      }

      return true
    })
  }, [
    selectedAccords,
    selectedFamilies,
    selectedGenders,
    selectedBrands,
  ])

  const clearFilters = () => {
    setSelectedFamilies([])
    setSelectedAccords([])
    setSelectedGenders([])
    setSelectedBrands([])
  }

  const handleToggleFamily = (family: string) =>
    toggleSelection(family, setSelectedFamilies)
  const handleToggleAccord = (accord: string) =>
    toggleSelection(accord, setSelectedAccords)
  const handleToggleGender = (gender: string) =>
    toggleSelection(gender as Gender, setSelectedGenders)
  const handleToggleBrand = (brand: string) =>
    toggleSelection(brand, setSelectedBrands)

  const filtersProps = {
    familyOptions,
    accordOptions,
    genderLabels: genderLabels as Record<string, string>,
    genderOptions,
    brandOptions,
    selections: {
      families: selectedFamilies,
      accords: selectedAccords,
      genders: selectedGenders,
      brands: selectedBrands,
    },
    onToggleFamily: handleToggleFamily,
    onToggleAccord: handleToggleAccord,
    onToggleGender: handleToggleGender,
    onToggleBrand: handleToggleBrand,
    onClear: clearFilters,
  }

  return (
    <div className="min-h-screen bg-background">
      <FiltersPanel
        className="fixed left-6 top-28 hidden w-64 lg:block"
        {...filtersProps}
      />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-6">
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

        <div className="space-y-8 lg:space-y-10">
          <div className="lg:hidden">
            <FiltersPanel {...filtersProps} />
          </div>

          <div className="space-y-6">
            {filteredFragrances.length > 0 ? (
              <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredFragrances.map((fragrance) => (
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
  )
}
