import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type Gender,
  olfactory_accords,
  fragrances,
} from "@/lib/temp-data"
import { formatAccordName, getAccordTextColor } from "@/lib/accord-utils"

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
              occasions. Artwork slots are available for future bottle imagery.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedFragrances.map((fragrance) => (
            <Card key={`${fragrance.brand}-${fragrance.name}`}>
              <CardHeader className="gap-4">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-dashed border-border/70 bg-muted">
                  <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Image pending
                  </div>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl">
                    {fragrance.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/80">
                    {fragrance.brand}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span>{fragrance.concentration}</span>
                    <span aria-hidden="true">•</span>
                    <span>{genderLabels[fragrance.gender]}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Scent Profile
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.accords.main.map((accord) => (
                      <Badge
                        key={`main-${accord}`}
                        style={{
                          backgroundColor: accordColorMap.get(accord),
                          color: getAccordTextColor(accordColorMap.get(accord)),
                          borderColor: "transparent",
                        }}
                      >
                        {formatAccordName(accord)}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">
                    {fragrance.notes.join(" · ")}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  {fragrance.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>Launched {fragrance.otherDetails.launchYear}</span>
                  <span aria-hidden="true">•</span>
                  <span>{fragrance.otherDetails.fragranceFamily}</span>
                  {fragrance.otherDetails.collection && (
                    <>
                      <span aria-hidden="true">•</span>
                      <span>{fragrance.otherDetails.collection}</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
