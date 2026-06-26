"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Full Python & DSA Certifications",
  "Unrivaled Interview Profile Building",
  "Soft Skills & Communication Training",
  "Be a part of BeRabbit WhatsApp Community",
];

export function Pricing() {
  return (
    <section className="section-xl relative overflow-hidden bg-gradient-to-b from-background to-orange-50/30">
      {/* Background glow */}
      <div className="absolute inset-0 glow-orange blur-3xl opacity-30 -z-10" />

      <div className="fluid-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-headline-lg md:text-[2.25rem] font-heading font-bold text-foreground mb-5 leading-tight">
              Premium Training,<br />
              <span className="text-gradient">Accessible Pricing</span>
            </h2>
            <p className="text-body-lg text-foreground/60 mb-10">
              We deliver quality career preparation at a fraction of the cost. Champion the 10x ROI for your career.
            </p>

            <ul className="space-y-5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={20} />
                  <span className="text-body-md font-medium text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto w-full max-w-md"
          >
            <div className="glass-hero-card p-1 relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-0 right-0 bg-primary text-white text-caption font-bold px-3 py-1 rounded-bl-xl z-10">
                MOST POPULAR
              </div>

              <div className="bg-white/90 rounded-[1.375rem] p-9 text-center">
                <p className="text-caption uppercase tracking-widest text-foreground/40 mb-5">
                  Limited Time Offer
                </p>

                <div className="flex items-center justify-center gap-4 mb-5">
                  <span className="text-2xl text-foreground/35 line-through font-semibold">₹4999</span>
                  <span className="text-5xl font-extrabold text-foreground font-heading tracking-tight">₹1499</span>
                </div>

                <p className="text-label-md text-primary mb-9 bg-orange-50 border border-orange-100 inline-block px-4 py-1.5 rounded-full">
                  Save 70% on standard enrollment
                </p>

                {/* Progress-style bar for visual interest */}
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-9">
                  <div className="progress-bar-fill w-[72%]" />
                </div>
                <p className="text-caption text-foreground/40 mb-6">72% seats filled — hurry!</p>

                <Button
                  asChild
                  size="lg"
                  className="w-full text-base h-13 rounded-lg btn-primary"
                >
                  <Link href="mailto:hello@berabbit.com">Claim This Offer</Link>
                </Button>

                <p className="text-caption text-foreground/40 mt-4">
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
