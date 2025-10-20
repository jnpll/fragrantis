import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
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
  return (
    <Card>
      <CardHeader className="gap-4">
        {fragrance.imageUrl ? (
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border/70 bg-muted">
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
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-dashed border-border/70 bg-muted">
            <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Image pending
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <CardTitle className="text-xl">{fragrance.name}</CardTitle>
          <CardDescription className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/80">
            {fragrance.brand}
          </CardDescription>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
            <span>{fragrance.concentration}</span>
            <span aria-hidden="true">•</span>
            <span>{genderLabel}</span>
          </div>
        </div>

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
          <div className="flex flex-wrap gap-1.5">
            {fragrance.accords.sub.map((accord) => (
              <Badge key={`sub-${accord}`} variant="secondary" className="text-xs">
                {formatAccordName(accord)}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">{fragrance.notes.join(" · ")}</p>
        </div>

        <p className="text-sm text-muted-foreground italic">{fragrance.description}</p>

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
  )
}
