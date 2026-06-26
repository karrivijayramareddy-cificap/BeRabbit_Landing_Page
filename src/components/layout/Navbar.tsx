"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF8F5] border-b border-orange-100/60">
      <div className="fluid-container flex h-[58px] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Home size={20} className="text-primary" strokeWidth={2.2} />
          <span className="text-primary text-[1.25rem] font-extrabold font-heading tracking-tight">BeRabbit</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center text-[0.9rem] font-medium text-gray-600">
          <Link href="#features" className="hover:text-primary transition-colors">Product</Link>
          <Link href="#roadmap" className="hover:text-primary transition-colors">Courses</Link>
          <Link href="#enterprise" className="hover:text-primary transition-colors">For Colleges</Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/login"
            className="text-[0.9rem] font-bold text-primary hover:opacity-75 transition-opacity"
          >
            Login
          </Link>
          <Button
            asChild
            className="rounded-full font-bold px-6 h-10 bg-primary hover:bg-primary/90 text-white text-[0.9rem] shadow-none border-0"
          >
            <Link href="#features">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F5] absolute top-full w-full border-b border-orange-100 shadow-md">
          <div className="px-6 pt-3 pb-6 flex flex-col gap-3">
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">Product</Link>
            <Link href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">Courses</Link>
            <Link href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-medium text-gray-700 hover:text-primary">For Colleges</Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-primary">Login</Link>
            <Button asChild className="w-full rounded-full font-bold bg-primary text-white">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
