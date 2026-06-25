"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Full Python & DSA Certifications",
  "Unrivaled Interview Profile Building",
  "Soft Skills & Communication Training",
  "Be a part of BeRabbit WhatsApp Community"
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="fluid-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline-lg md:text-[40px] font-heading font-bold text-foreground mb-6 leading-tight">
              Premium Training,<br/>
              <span className="text-primary">Accessible Pricing</span>
            </h2>
            <p className="text-body-lg text-foreground/70 mb-10">
              We deliver quality career preparation at a fraction of the cost. Champion the 10x ROI for your career.
            </p>
            
            <ul className="space-y-5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
                  <span className="text-body-md font-medium text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="glass-hero-card p-1 relative border-orange-500/20 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                MOST POPULAR
              </div>
              <div className="bg-white rounded-[1.25rem] p-8 text-center relative z-0">
                <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wide mb-4">Limited Time Offer</p>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-2xl text-foreground/40 line-through font-semibold">₹4999</span>
                  <span className="text-5xl font-extrabold text-foreground font-heading">₹1499</span>
                </div>
                <p className="text-sm text-primary font-medium mb-8 bg-orange-50 inline-block px-3 py-1 rounded-full">
                  Save 70% on standard enrollment
                </p>
                <Button size="lg" className="w-full text-lg h-14 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                  Claim This Offer
                </Button>
                <p className="text-xs text-foreground/50 mt-4">
                  Pay securely online. Instant access.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
