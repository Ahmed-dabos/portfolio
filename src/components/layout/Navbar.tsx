"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold tracking-tighter">
          AG<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg md:hidden"
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 text-base font-medium bg-foreground text-background px-6 py-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
