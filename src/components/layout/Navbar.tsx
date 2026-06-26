"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="fluid-container flex h-[60px] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Home size={20} className="text-primary" strokeWidth={2.2} />
          <span className="text-primary text-[1.25rem] font-extrabold font-heading tracking-tight">BeRabbit</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center">
          {["Product|#features", "Courses|#roadmap", "For Colleges|#enterprise"].map((item) => {
            const [label, href] = item.split("|");
            return (
              <Link
                key={href}
                href={href}
                className="text-label-md text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/login" className="text-label-md font-bold text-primary hover:opacity-75 transition-opacity">
            Login
          </Link>
          <Button
            asChild
            className="rounded-full font-bold px-6 h-10 bg-primary hover:bg-primary/90 text-white text-sm shadow-none border-0 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] transition-all duration-200"
          >
            <Link href="#features">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground/70 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full w-full bg-white/95 backdrop-blur-[12px] border-b border-orange-100 shadow-xl">
          <div className="px-6 pt-3 pb-6 flex flex-col gap-3">
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-body-md font-medium text-foreground/80 hover:text-primary">Product</Link>
            <Link href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-body-md font-medium text-foreground/80 hover:text-primary">Courses</Link>
            <Link href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-body-md font-medium text-foreground/80 hover:text-primary">For Colleges</Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-body-md font-bold text-primary">Login</Link>
            <Button asChild className="w-full rounded-full font-bold bg-primary text-white hover:bg-primary/90">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
