"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

type Theme = "light" | "dark";

const resolveInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export function Navbar() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = resolveInitialTheme();
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Fragrantis
        </Link>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          aria-pressed={theme === "dark"}
          onClick={toggleTheme}
          className="relative flex h-9 w-9 items-center justify-center"
        >
          {mounted ? (
            theme === "dark" ? (
              <IconSun className="h-5 w-5" aria-hidden />
            ) : (
              <IconMoon className="h-5 w-5" aria-hidden />
            )
          ) : (
            <IconMoon className="h-5 w-5" aria-hidden />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
