import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="fluid-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary text-2xl font-bold font-heading">BeRabbit</span>
          </Link>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-foreground/80">
          <Link href="#product" className="hover:text-primary transition-colors">Product</Link>
          <Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <Link href="#colleges" className="hover:text-primary transition-colors">For Colleges</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium hover:text-primary transition-colors">
            Login
          </Link>
          <Button className="rounded-md font-semibold px-6 shadow-sm hover:scale-[1.02] transition-transform">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
