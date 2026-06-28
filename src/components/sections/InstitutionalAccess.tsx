"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutDashboard, Users, GraduationCap, Building, FileText, ShieldCheck } from "lucide-react";

const collegeFeatures = [
  {
    icon: <LayoutDashboard size={22} className="text-orange-400" />,
    title: "Placement Analytics",
    description: "Detailed dashboards to track performance, strengths, and areas of improvement.",
  },
  {
    icon: <Users size={22} className="text-orange-400" />,
    title: "Student Reports",
    description: "Download detailed student readiness reports to share with recruiters.",
  },
  {
    icon: <GraduationCap size={22} className="text-orange-400" />,
    title: "Placement Portal",
    description: "Comprehensive college management system for attendance, tests, and marks.",
  },
  {
    icon: <FileText size={22} className="text-orange-400" />,
    title: "Custom Curriculums",
    description: "Tailor the curriculum paths for specific company hiring rounds.",
  },
  {
    icon: <ShieldCheck size={22} className="text-orange-400" />,
    title: "Verified Skill Sets",
    description: "Authentic assessments backed by proctored testing environments.",
  },
  {
    icon: <Building size={22} className="text-orange-400" />,
    title: "Placement Support",
    description: "Connect your students with our network of hiring partners across India.",
  },
];

export function InstitutionalAccess() {
  return (
    <section
      className="section-xl relative overflow-hidden rounded-[2rem] mx-4 md:mx-8 my-12"
      id="enterprise"
      style={{ background: "#131b2e" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] glow-blue blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] glow-orange blur-3xl -z-10 opacity-40" />

      <div className="fluid-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg font-heading text-white mb-4">
              Everything Colleges Need To Improve Placements
            </h2>
            <p className="text-body-lg text-white/60">
              Experience the best B2B platform customized for your institution. Track, manage, and boost student career success.
            </p>
          </div>
          <Button
            asChild
            className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-lg hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)] transition-all duration-200"
          >
            <Link href="mailto:chodagiriprasad5@gmail.com">Request Institutional Access</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {collegeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-dark rounded-2xl p-7"
            >
              <div className="mb-5 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/15 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-headline-md font-heading text-white mb-2">{feature.title}</h3>
              <p className="text-body-md text-white/50 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
