"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-orange-500/10 to-transparent -z-10 blur-3xl" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="fluid-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-primary text-sm font-semibold mb-6 border border-orange-500/20">
            <Bot size={16} />
            <span>Your personalized AI mentor</span>
          </div>
          
          <h1 className="text-display-lg-mobile md:text-display-lg font-heading text-foreground mb-6">
            Transform Students Into <span className="text-gradient">Placement-Ready</span> Professionals
          </h1>
          
          <p className="text-body-lg text-foreground/70 mb-8 max-w-xl">
            Structured learning, portfolio preparation, customized training projects, and placement assistance in one platform designed for the modern career journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="rounded-md font-semibold text-base px-8 shadow-md hover:scale-[1.02] transition-transform">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-md font-semibold text-base px-8 bg-white/50 backdrop-blur-sm border-border hover:bg-white/80 hover:scale-[1.02] transition-transform">
              Book Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-foreground/80">
            {[
              "Structured Curriculum",
              "1:1 Mock Interviews",
              "Industry Mentorship",
              "24/7 AI Support"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative lg:ml-auto"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative z-10 w-full max-w-[600px] aspect-[4/3] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
            {/* Top Bar */}
            <div className="h-10 bg-slate-800/50 border-b border-slate-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Dashboard Content */}
            <div className="p-6 grid grid-cols-3 gap-6 flex-1">
              <div className="col-span-1 space-y-4">
                <div className="h-24 bg-slate-800 rounded-lg" />
                <div className="h-32 bg-slate-800 rounded-lg" />
              </div>
              <div className="col-span-2 space-y-4">
                <div className="h-12 bg-slate-800 rounded-lg" />
                <div className="h-48 bg-slate-800 rounded-lg flex items-center justify-center">
                  {/* Decorative chart lines */}
                  <div className="flex items-end gap-2 h-24">
                    {[40, 70, 45, 90, 65, 85].map((h, i) => (
                      <div key={i} className="w-6 bg-primary/80 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -left-12 bottom-12 z-20 glass rounded-xl p-4 flex items-center gap-4 w-64"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <Bot className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Interview Feedback</p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="text-xs text-foreground/60 mt-1">Ready for Day-Zero</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
