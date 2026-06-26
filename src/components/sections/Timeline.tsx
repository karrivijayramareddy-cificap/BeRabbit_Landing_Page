"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  {
    phase: "Phase 1: Aptitude",
    description: "Master quantitative, logical, and verbal reasoning with 1000+ practice questions.",
    status: "complete",
  },
  {
    phase: "Phase 2: Python Core",
    description: "Learn industry-standard Python programming from scratch to advanced concepts.",
    status: "active",
  },
  {
    phase: "Phase 3: DSA Fundamentals",
    description: "Crack tech interviews with core concepts, data structures and algorithmic thinking.",
    status: "upcoming",
  },
  {
    phase: "Phase 4: Interview Skills",
    description: "Soft skills training, resume builds, and group discussion simulators.",
    status: "upcoming",
  },
];

const nodeColor = (status: string) => {
  if (status === "complete") return "bg-primary text-white shadow-[0_0_0_4px_rgba(249,115,22,0.2)]";
  if (status === "active") return "bg-secondary text-white shadow-[0_0_0_4px_rgba(37,99,235,0.2)]";
  return "bg-white border-2 border-[#E2E8F0] text-foreground/50";
};

export function Timeline() {
  return (
    <section className="section-xl bg-gradient-to-b from-background to-blue-50/20" id="roadmap">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            Your Path to Day-Zero Placement
          </h2>
          <p className="text-body-lg text-foreground/60">
            A comprehensive, step-by-step roadmap designed for high-performance placements.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E2E8F0] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {timelineSteps.map((step, index) => {
              const isRight = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between">

                  {/* Content */}
                  <div className={`md:w-[44%] ${isRight ? "md:text-right md:pr-14" : "md:order-2 md:text-left md:pl-14"} mb-6 md:mb-0 text-center`}>
                    <motion.div
                      initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                      className="glass-card p-6 inline-block w-full max-w-sm text-left"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-caption uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${
                          step.status === "complete" ? "text-primary bg-orange-50" :
                          step.status === "active"   ? "text-secondary bg-blue-50" :
                          "text-foreground/40 bg-gray-50"
                        }`}>
                          {step.status === "complete" ? "✓ Done" : step.status === "active" ? "● Active" : "Upcoming"}
                        </span>
                      </div>
                      <h4 className="text-headline-md font-heading text-foreground mb-2">{step.phase}</h4>
                      <p className="text-body-md text-foreground/60">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 font-bold text-sm font-heading hidden md:flex ${nodeColor(step.status)}`}>
                    {index + 1}
                  </div>

                  {/* Spacer */}
                  <div className="md:w-[44%] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
