"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-500/10 to-transparent -z-10 blur-3xl" />
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
            <span className="text-xl">✨</span>
            <span>Next-Gen Placement Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
            Transform Students Into <span className="text-gradient">Placement-Ready</span> Professionals
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl">
            Structured learning, aptitude preparation, communication training, projects, and placement readiness—all in one platform designed for the modern career journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="rounded-xl font-bold text-base px-8 shadow-xl bg-primary hover:scale-105 transition-all">
              <Link href="#features">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl font-bold text-base px-8 bg-white/50 backdrop-blur-sm border-blue-500/20 hover:bg-blue-50 hover:text-blue-700 hover:scale-105 transition-all">
              <Link href="#enterprise">Book Demo</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-medium text-foreground/80">
            {[
              "Placement Focused",
              "College Ready",
              "Outcome Driven",
              "Affordable"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="opacity-80">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative lg:ml-auto w-full max-w-[500px] mx-auto mt-12 lg:mt-0"
        >
          {/* Main Dashboard Mockup Image */}
          <div className="relative z-10 w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 shadow-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-gq41CXDPyOhVnYuJ44_dAc9R8LouZv1ay4WsJNWBaBvnnH1u94G3qv4aIympE4nU1b-YBWqvv47btZYXAYFDt7kmsEi-BpeQjUgdaGSp9Yh-QwHlXTBdgHzo23rd7HdXJFPLQU-ywyj9QPLztGIKuY1lYQQX7Ooo7ksrg3O3n9lg1jRP7ioijpssvmHXRTGZAi8NcMZ5Z-NDsVxfZxJoNcz7LZbELA4CNF4IQ2-2nXBvZi66nEEBKk3THk-4Zf8LlEPt3zEatbY"
              alt="Dashboard Mockup"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Floating Glass Card - Hidden on very small screens, shown and positioned properly on others */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute hidden sm:flex -left-8 -bottom-8 z-20 glass rounded-2xl p-5 items-center gap-4 w-64 -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
              <User className="text-primary" size={24} />
            </div>
            <div className="flex-1 w-full">
              <p className="text-sm font-bold text-foreground">Ananya Sharma</p>
              <p className="text-[10px] text-foreground/60 mb-2">Placed at TechCorp</p>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-[80%]" />
              </div>
              <p className="text-[10px] text-primary font-bold text-right mt-1">80% Ready</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
