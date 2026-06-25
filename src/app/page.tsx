import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Timeline } from "@/components/sections/Timeline";
import { InstitutionalAccess } from "@/components/sections/InstitutionalAccess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BottomCTA } from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <Timeline />
        <InstitutionalAccess />
        <Testimonials />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
