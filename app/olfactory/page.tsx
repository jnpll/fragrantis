import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  olfactory_accords,
  olfactory_families,
  type OlfactoryAccord,
  type OlfactoryFamily,
} from "@/lib/temp-data"
import {
  formatAccordName,
  getAccordTextColor,
} from "@/lib/accord-utils"

const familiesWithAccords = olfactory_families
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((family: OlfactoryFamily) => ({
    ...family,
    accords: olfactory_accords.filter(
      (accord: OlfactoryAccord) => accord.familyId === family.id
    ),
  }))

export default function OlfactoryPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-4">
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
                Olfactory
              </li>
            </ol>
          </nav>
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Olfactory Families
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore every family and accord in the library
          </h1>
            <p className="max-w-3xl text-muted-foreground">
            Understand how each family contributes to a fragrance, from airy
            fresh compositions to deep resinous blends. Each accord within these 
            families tells its own story, creating the complex symphony of 
            scents that define modern perfumery.
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
