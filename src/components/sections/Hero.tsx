"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featureTags = [
  { icon: <CheckCircle2 size={15} className="text-primary" />, label: "Placement Focused" },
  { icon: <GraduationCap size={15} className="text-primary" />, label: "College Ready" },
  { icon: <TrendingUp size={15} className="text-primary" />, label: "Outcome Driven" },
  { icon: <DollarSign size={15} className="text-primary" />, label: "Affordable" },
];

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-background">
      {/* Radial glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-orange -z-10 blur-3xl" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] glow-blue -z-10 blur-3xl" />

      <div className="fluid-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/60 text-label-md text-foreground/70 mb-7">
            <span>✨</span>
            <span>Next-Gen Placement Platform</span>
          </div>

          {/* Display Heading */}
          <h1 className="text-display-lg font-heading text-foreground mb-5">
            Transform Students Into{" "}
            <span className="text-gradient">Placement&#8209;Ready</span>{" "}
            Professionals
          </h1>

          <p className="text-body-lg text-foreground/60 mb-9 max-w-lg">
            Structured learning, aptitude preparation, communication training, projects, and placement readiness—all in one platform designed for the modern career journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              asChild
              className="btn-primary h-12 px-8 text-base rounded-lg shadow-none"
            >
              <Link href="#features">Get Started</Link>
            </Button>
            <Button
              asChild
              className="btn-secondary h-12 px-8 text-base rounded-lg"
            >
              <Link href="#enterprise">Book Demo</Link>
            </Button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {featureTags.map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 text-label-md text-foreground/60">
                {tag.icon}
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Mockup + Ananya Card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full max-w-[520px] mx-auto lg:ml-auto"
        >
          {/* Orange glow behind image */}
          <div className="absolute -inset-4 glow-orange blur-2xl rounded-3xl -z-10" />

          {/* Dashboard Mockup */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-orange-100/40 shadow-[0_20px_60px_rgba(249,115,22,0.15),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-gq41CXDPyOhVnYuJ44_dAc9R8LouZv1ay4WsJNWBaBvnnH1u94G3qv4aIympE4nU1b-YBWqvv47btZYXAYFDt7kmsEi-BpeQjUgdaGSp9Yh-QwHlXTBdgHzo23rd7HdXJFPLQU-ywyj9QPLztGIKuY1lYQQX7Ooo7ksrg3O3n9lg1jRP7ioijpssvmHXRTGZAi8NcMZ5Z-NDsVxfZxJoNcz7LZbELA4CNF4IQ2-2nXBvZi66nEEBKk3THk-4Zf8LlEPt3zEatbY"
              alt="BeRabbit Dashboard"
              fill
              className="object-cover"
              unoptimized
              loading="eager"
            />

            {/* Ananya Card — elevated glass overlay on image */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glass-hero-card absolute bottom-4 left-4 sm:left-5 p-3.5 flex items-center gap-3 w-52"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}>
                <span className="text-white text-xs font-bold">AS</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-label-md text-foreground leading-tight">Ananya Sharma</p>
                <p className="text-caption text-foreground/50 mb-1.5">Placed at TechCorp</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="progress-bar-fill w-[80%]" />
                </div>
                <p className="text-caption text-primary font-bold text-right mt-1">80% Ready</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
