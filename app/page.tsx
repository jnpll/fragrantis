import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-10 lg:px-16">
        <section className="space-y-6 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Fragrantis
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Craft olfactory experiences with confidence
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Browse curated scent families, explore signature accords, and build
            compositions grounded in a rich palette of OKLCH color references.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button asChild size="lg">
              <Link href="/catalogue">Explore the catalogue</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/olfactory">View the scent profiles</Link>
            </Button>
          </div>
        </section>

        <section className="grid gap-8 rounded-xl border border-border bg-card/40 p-8 sm:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Olfactory Families
            </h2>
            <p className="text-sm text-muted-foreground">
              Understand how each family contributes to a fragrance, from airy
              fresh compositions to deep resinous blends.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Signature Accords
            </h2>
            <p className="text-sm text-muted-foreground">
              Each accord is paired with a color swatch, giving you an instant,
              visual shorthand for tonal balance and intensity.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
