import Image from "next/image"
import { useMemo } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatAccordName, getAccordTextColor } from "@/lib/accord-utils"
import type { Fragrance } from "@/lib/temp-data"

type FragranceCardProps = {
  fragrance: Fragrance
  accordColorMap: Map<string, string>
  genderLabel: string
}

export function FragranceCard({
  fragrance,
  accordColorMap,
  genderLabel,
}: FragranceCardProps) {
  const gradientConfig = useMemo(() => {
    const primaryColors = fragrance.accords.main
      .map((accord) => accordColorMap.get(accord))
      .filter((color): color is string => Boolean(color))

    const fallback = "oklch(0.78 0.06 264)"
    const baseColors =
      primaryColors.length >= 3
        ? primaryColors.slice(0, 3)
        : [...primaryColors, ...Array(3 - primaryColors.length).fill(primaryColors[0] ?? fallback)]

    const withAlpha = (color: string, alpha: number) =>
      color.replace(/\)$/, ` / ${alpha})`)

    const borderGradient = `linear-gradient(45deg, ${baseColors.join(", ")})`
    const glassGradient = `linear-gradient(45deg, ${withAlpha(baseColors[0], 0.22)}, ${withAlpha(
      baseColors[1],
      0.16
    )}, ${withAlpha(baseColors[2], 0.2)})`

    return {
      borderGradient,
      glassGradient,
    }
  }, [accordColorMap, fragrance.accords.main])

  const { borderGradient, glassGradient } = gradientConfig

  return (
    <Card className="relative flex h-full flex-col overflow-hidden dark:rounded-2xl backdrop-blur-xl transition-shadow duration-200 hover:shadow-lg">
      <div
        className="invisible dark:visible pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          padding: 1,
          background: borderGradient,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className="invisible dark:visible absolute inset-0 -z-10 rounded-2xl"
        style={{
          background: glassGradient,
          opacity: 0.55,
          backdropFilter: "blur(18px)",
        }}
      />
      <CardHeader className="gap-0">
        {fragrance.imageUrl ? (
          <div className="relative aspect-5/6 w-full overflow-hidden dark:rounded-t-xl">
            <Image
              src={fragrance.imageUrl}
              alt={`${fragrance.name} by ${fragrance.brand}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              unoptimized
            />
          </div>
        ) : (
          <div className="aspect-5/6 w-full overflow-hidden dark:rounded-t-xl bg-muted">
            <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Image pending
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-5">
        <div id="fragrance-title" className="space-y-1">
          <CardTitle className="text-xl">{fragrance.name}</CardTitle>
          <CardDescription className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/80">
            {fragrance.brand}
          </CardDescription>
        </div>

        <div id="fragrance-scent-profile" className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Scent Profile
          </h2>
          <div className="flex flex-wrap gap-2">
            {fragrance.accords.main.map((accord) => (
                <Badge
                key={`main-${accord}`}
                className="text-muted-foreground dark:text-(--accord-text-color) bg-muted dark:bg-(--accord-bg-color)"
                style={{
                  '--accord-bg-color': accordColorMap.get(accord),
                  '--accord-text-color': getAccordTextColor(accordColorMap.get(accord)),
                } as React.CSSProperties}
                >
                {formatAccordName(accord)}
                </Badge>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">{fragrance.notes.join(" · ")}</p>
          </div>
        </div>

        <p id="fragrance-description" className="text-sm text-muted-foreground font-light italic">{fragrance.description}</p>

      </CardContent>
      <CardFooter className="mt-auto border-t border-border/60">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{fragrance.otherDetails.launchYear}</span>
          <span aria-hidden="true">•</span>
          <span>{fragrance.intensity}</span>
          <span aria-hidden="true">•</span>
          <span>{genderLabel}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
