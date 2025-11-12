"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            David Boies 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 ml-2 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 bg-primary text-primary-foreground font-medium rounded-md text-center hover:opacity-90"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
