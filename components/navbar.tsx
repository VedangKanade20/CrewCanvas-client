"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full h-24 flex items-center justify-center absolute top-0 left-0 right-0 z-50">
      <header
        className={cn(
          "w-[95%] max-w-7xl mx-auto rounded-full transition-all duration-300",
          isScrolled ? "bg-background/70 backdrop-blur-md py-3 shadow-lg" : "bg-background/30 backdrop-blur-sm py-3",
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              CollabSpace
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up free</Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 mx-auto w-[95%] max-w-7xl bg-background/80 backdrop-blur-md rounded-xl border border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-lg">
          <div className="flex flex-col gap-2">
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full justify-start">
                Log in
              </Button>
            </Link>
            <Link href="/signup" className="w-full">
              <Button className="w-full justify-start">Sign up free</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
