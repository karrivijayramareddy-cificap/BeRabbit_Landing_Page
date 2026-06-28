import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="fluid-container grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1 space-y-4">
          <span className="text-primary text-2xl font-bold font-heading">BeRabbit</span>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
            Bridging the gap between education and employment for the next generation of engineers.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold font-heading">Platform</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link href="#" className="hover:text-primary transition-colors">Students</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Placement Cells</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Businesses</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold font-heading">Company</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold font-heading">Newsletter</h4>
          <p className="text-sm text-foreground/70">
            Get the latest updates on placement trends and resources.
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Email" className="bg-white/50" />
            <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-transform">
              &rarr;
            </Button>
          </div>
        </div>
      </div>
      
      <div className="fluid-container mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} BeRabbit. All rights reserved.</p>
      </div>
    </footer>
  );
}
