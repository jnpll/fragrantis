import Image from "next/image"

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
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <CardHeader className="gap-0 hover:cursor-pointer">
        {fragrance.imageUrl ? (
          <div className="relative aspect-3/4 w-full overflow-hidden bg-muted">
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
          <div className="aspect-3/4 w-full overflow-hidden bg-muted">
            <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Image pending
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <CardTitle className="text-xl hover:underline hover:cursor-pointer">{fragrance.name}</CardTitle>
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
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
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
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">{fragrance.notes.join(" · ")}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground italic">{fragrance.description}</p>

      </CardContent>
      <CardFooter className="mt-auto">
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
      </CardFooter>
    </Card>
  )
}
