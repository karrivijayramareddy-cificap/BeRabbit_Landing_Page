"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="fluid-container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary text-2xl md:text-3xl font-bold font-heading">BeRabbit</span>
          </Link>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-foreground/80">
          <Link href="#features" className="hover:text-primary transition-colors hover:scale-105 duration-300">Product</Link>
          <Link href="#roadmap" className="hover:text-primary transition-colors hover:scale-105 duration-300">Courses</Link>
          <Link href="#enterprise" className="hover:text-primary transition-colors hover:scale-105 duration-300">For Colleges</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-primary hover:scale-105 px-4 py-2 transition-transform">
            Login
          </Link>
          <Button asChild className="rounded-full font-bold px-8 shadow-md hover:scale-105 transition-transform bg-primary">
            <Link href="#features">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-16 w-full border-b border-white/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary">Product</Link>
            <Link href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary">Courses</Link>
            <Link href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary">For Colleges</Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-primary">Login</Link>
            <Button asChild className="w-full rounded-full font-bold shadow-md">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
