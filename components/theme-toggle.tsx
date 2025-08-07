"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun className="h-5 w-5 transition-all duration-300 group-hover:text-primary" />
        ) : (
          <Moon className="h-5 w-5 transition-all duration-300 group-hover:text-primary" />
        )}
      </div>
    </Button>
  )
}

