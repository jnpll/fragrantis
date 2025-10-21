"use client";

import { IconX } from "@tabler/icons-react";

import { Item } from "@/components/ui/item";
import { cn } from "@/lib/utils";

type FilterTagProps = {
  label: string;
  onRemove: () => void;
  className?: string;
};

export function FilterTag({ label, onRemove, className }: FilterTagProps) {
  return (
    <Item
      variant="outline"
      size="sm"
      className={cn(
        "rounded-none border-border/70 bg-muted/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em]",
        "flex items-center gap-2",
        className,
      )}
    >
      <span className="truncate text-muted-foreground">{label}</span>
      <button
        type="button"
        onClick={onRemove}
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label={`Remove filter ${label}`}
      >
        <IconX size={16} stroke={1.7} aria-hidden />
      </button>
    </Item>
  );
}
