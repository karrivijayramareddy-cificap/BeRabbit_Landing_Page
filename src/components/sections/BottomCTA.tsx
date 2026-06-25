"use client";

import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="py-24 px-4">
      <div className="fluid-container">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-headline-lg md:text-[40px] font-heading font-bold text-white mb-6 leading-tight">
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Join thousands of students who are already using BeRabbit to transform their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-50 font-bold text-base h-14 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                Enroll Now for ₹1499
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-base h-14 px-8 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-transform bg-transparent">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
