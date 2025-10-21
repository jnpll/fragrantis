import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  variant?: "default" | "underline";
};

function Input({ className, type, variant = "default", ...props }: InputProps) {
  const baseClasses =
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses =
    variant === "underline"
      ? "border-input border-0 border-b bg-transparent px-0 py-2 text-base shadow-none focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
      : "dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]";

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        baseClasses,
        "outline-none md:text-sm",
        variant !== "underline" &&
          "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        variantClasses,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
