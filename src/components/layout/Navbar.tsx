"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Rabbit } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="fluid-container flex h-16 md:h-[60px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Rabbit size={18} className="text-primary" />
            </div>
            <span className="text-primary text-xl font-bold font-heading">BeRabbit</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-primary transition-colors">Product</Link>
          <Link href="#roadmap" className="hover:text-primary transition-colors">Courses</Link>
          <Link href="#enterprise" className="hover:text-primary transition-colors">For Colleges</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity px-2 py-1">
            Login
          </Link>
          <Button asChild className="rounded-full font-bold px-7 py-2 shadow-none bg-primary hover:bg-primary/90 text-white text-sm h-9">
            <Link href="#features">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full w-full border-b border-gray-100 shadow-lg">
          <div className="px-6 pt-3 pb-6 space-y-3 flex flex-col">
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">Product</Link>
            <Link href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">Courses</Link>
            <Link href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">For Colleges</Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-semibold text-primary">Login</Link>
            <Button asChild className="w-full rounded-full font-bold bg-primary text-white">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
