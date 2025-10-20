import { Badge } from "@/components/ui/badge"
import {
  olfactory_accords,
  olfactory_families,
  type OlfactoryAccord,
  type OlfactoryFamily,
} from "@/lib/temp-data"

const familiesWithAccords = olfactory_families
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((family: OlfactoryFamily) => ({
    ...family,
    accords: olfactory_accords.filter(
      (accord: OlfactoryAccord) => accord.familyId === family.id
    ),
  }))

const getAccordTextColor = (color: string) => {
  const lightnessMatch = color.match(/oklch\(([\d.]+)%?/)
  const lightness = lightnessMatch ? Number.parseFloat(lightnessMatch[1]) : 60
  return lightness > 70 ? "oklch(0.145 0 0)" : "oklch(0.985 0 0)"
}

const formatAccordName = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, "$1 $2")

export default function MasterListPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Olfactory Catalogue
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Master List
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Explore every family and accord in the library. Each accord is
            represented with its signature OKLCH swatch pulled from the shadcn
            palette.
          </p>
        </header>

        <section className="space-y-10">
          {familiesWithAccords.map((family) => (
            <article
              key={family.id}
              className="space-y-4 rounded-lg border border-border bg-card/40 p-6 shadow-sm"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {family.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {family.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {family.accords.map((accord) => (
                  <Badge
                    key={accord.slug}
                    style={{
                      backgroundColor: accord.color,
                      color: getAccordTextColor(accord.color),
                      borderColor: "transparent",
                    }}
                  >
                    {formatAccordName(accord.name)}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
