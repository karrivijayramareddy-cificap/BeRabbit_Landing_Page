"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featureTags = [
  { icon: <CheckCircle2 size={15} className="text-gray-500" />, label: "Placement Focused" },
  { icon: <GraduationCap size={15} className="text-gray-500" />, label: "College Ready" },
  { icon: <TrendingUp size={15} className="text-gray-500" />, label: "Outcome Driven" },
  { icon: <DollarSign size={15} className="text-gray-500" />, label: "Affordable" },
];

export function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-orange-50/60 via-white to-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/30 via-transparent to-transparent -z-10" />

      <div className="fluid-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-gray-700 text-sm font-medium mb-7 border border-orange-100">
            <span className="text-base">✨</span>
            <span>Next-Gen Placement Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-[2.6rem] md:text-5xl font-heading font-extrabold text-gray-900 mb-5 leading-tight">
            Transform Students Into{" "}
            <span className="text-primary">Placement&#8209;Ready</span>{" "}
            Professionals
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            Structured learning, aptitude preparation, communication training, projects, and placement readiness—all in one platform designed for the modern career journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-9">
            <Button
              asChild
              className="bg-[#7B3A0E] hover:bg-[#6b3009] text-white font-bold text-base px-8 h-12 rounded-xl shadow-none transition-all"
            >
              <Link href="#features">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-blue-600 border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 font-bold text-base px-8 h-12 rounded-xl shadow-none transition-all"
            >
              <Link href="#enterprise">Book Demo</Link>
            </Button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {featureTags.map((tag, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                {tag.icon}
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full max-w-[520px] mx-auto lg:ml-auto"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-gq41CXDPyOhVnYuJ44_dAc9R8LouZv1ay4WsJNWBaBvnnH1u94G3qv4aIympE4nU1b-YBWqvv47btZYXAYFDt7kmsEi-BpeQjUgdaGSp9Yh-QwHlXTBdgHzo23rd7HdXJFPLQU-ywyj9QPLztGIKuY1lYQQX7Ooo7ksrg3O3n9lg1jRP7ioijpssvmHXRTGZAi8NcMZ5Z-NDsVxfZxJoNcz7LZbELA4CNF4IQ2-2nXBvZi66nEEBKk3THk-4Zf8LlEPt3zEatbY"
              alt="BeRabbit Dashboard"
              fill
              className="object-cover"
              unoptimized
              loading="eager"
            />

            {/* Ananya Card - overlaid on the image */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-5 left-4 sm:left-5 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3 w-52 border border-gray-100"
            >
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <span className="text-primary text-sm font-bold">AS</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-800 leading-tight">Ananya Sharma</p>
                <p className="text-[10px] text-gray-400 mb-1.5">Placed at TechCorp</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[80%]" />
                </div>
                <p className="text-[10px] text-primary font-bold text-right mt-0.5">80% Ready</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
