import Link from "next/link"

import { FragranceCard } from "@/components/catalogue/fragrance-card"
import { type Gender, fragrances, olfactory_accords } from "@/lib/temp-data"

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

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-background">
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
      </main>
    </div>
  )
}
