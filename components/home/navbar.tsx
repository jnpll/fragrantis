"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { IconMoon, IconSun } from "@tabler/icons-react"

export function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const effectiveTheme = !mounted
    ? undefined
    : theme === "system"
      ? resolvedTheme
      : theme

  const isDark = effectiveTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

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
          aria-pressed={isDark}
          onClick={toggleTheme}
          className="relative flex h-9 w-9 items-center justify-center"
        >
          {mounted && isDark ? (
            <IconSun className="h-5 w-5" aria-hidden />
          ) : (
            <IconMoon className="h-5 w-5" aria-hidden />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
