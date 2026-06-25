"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, GraduationCap, Building, FileText, ShieldCheck } from "lucide-react";

const collegeFeatures = [
  {
    icon: <LayoutDashboard size={24} className="text-orange-400" />,
    title: "Placement Analytics",
    description: "Detailed dashboards to track performance, strengths, and areas of improvement."
  },
  {
    icon: <Users size={24} className="text-orange-400" />,
    title: "Student Reports",
    description: "Download detailed student readiness reports to share with recruiters."
  },
  {
    icon: <GraduationCap size={24} className="text-orange-400" />,
    title: "Placement Portal",
    description: "Comprehensive college management system for attendance, tests, and marks."
  },
  {
    icon: <FileText size={24} className="text-orange-400" />,
    title: "Custom Curriculums",
    description: "Tailor the curriculum paths for specific company hiring rounds."
  },
  {
    icon: <ShieldCheck size={24} className="text-orange-400" />,
    title: "Verified Skill Sets",
    description: "Authentic assessments backed by proctored testing environments."
  },
  {
    icon: <Building size={24} className="text-orange-400" />,
    title: "Placement Support",
    description: "Connect your students with our network of hiring partners across India."
  }
];

export function InstitutionalAccess() {
  return (
    <section className="py-24 bg-slate-900 text-white rounded-[2rem] mx-4 md:mx-8 my-12 relative overflow-hidden" id="colleges">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="fluid-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg font-heading mb-4">
              Everything Colleges Need To Improve Placements
            </h2>
            <p className="text-body-lg text-slate-300">
              Experience the best B2B platform customized for your institution. Track, manage, and boost student career success.
            </p>
          </div>
          <Button variant="outline" className="bg-white text-slate-900 hover:bg-slate-100 border-none font-semibold px-6 hover:scale-[1.02] transition-transform">
            Request Institutional Access
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className="mb-6 bg-slate-900/80 w-12 h-12 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
