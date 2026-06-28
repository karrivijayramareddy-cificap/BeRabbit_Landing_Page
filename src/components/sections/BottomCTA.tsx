"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="section-xl px-4">
      <div className="fluid-container">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-20 md:px-20 text-center"
          style={{ background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)" }}
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-black/10 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Glass card wrapper for content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-display-lg font-heading text-white mb-5">
              Ready to Launch Your Career?
            </h2>
            <p className="text-body-lg text-white/85 mb-10">
              Join thousands of students who are already using BeRabbit to transform their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary font-bold text-base h-13 px-9 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/95 hover:scale-[1.02] transition-all duration-200"
              >
                <Link href="#features">Enroll Now for ₹1499</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-base h-13 px-9 rounded-lg hover:bg-white/25 hover:scale-[1.02] transition-all duration-200"
              >
                <Link href="mailto:chodagiriprasad5@gmail.com">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
