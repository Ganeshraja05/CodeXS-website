"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300",
        scrolled ? "h-16 bg-background/80 border-border" : "h-20 bg-background/50 border-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-2">
              <Image src="/images/logo.png" alt="CodeXS Logo" width={32} height={32} className="object-contain" />
            </div>
            <span
              className={cn(
                "text-2xl font-bold transition-all duration-300",
                scrolled ? "text-foreground" : "text-primary",
              )}
            >
              CodeXS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium relative py-2 transition-all duration-300 group",
                  pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === item.path ? "w-full" : "",
                  )}
                ></span>
              </Link>
            ))}
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Get Started</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors",
                    pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

