"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  {
    phase: "Phase 1: Aptitude",
    description: "Master quantitative, logical, and verbal reasoning with 1000+ practice questions.",
    align: "right"
  },
  {
    phase: "Phase 2: Python Core",
    description: "Learn industry-standard Python programming from scratch to advanced concepts.",
    align: "left"
  },
  {
    phase: "Phase 3: DSA Fundamentals",
    description: "Crack tech interviews with core concepts, data structures and algorithmic thinking.",
    align: "right"
  },
  {
    phase: "Phase 4: Interview Skills",
    description: "Soft skills training, resume builds, and group discussion simulators.",
    align: "left"
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-background" id="roadmap">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            Your Path to Day-Zero Placement
          </h2>
          <p className="text-body-lg text-foreground/70">
            A comprehensive, step-by-step roadmap designed for high-performance placements.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 !== 0; // 0-indexed, so 0 is right, 1 is left etc based on design, wait... 
              // Actually, looking at design Phase 1 is on the left or right? Let's just alternate.
              // Let's use the align property
              const isRightAligned = step.align === "right";
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between">
                  
                  {/* Left Content Space */}
                  <div className={`md:w-[45%] ${isRightAligned ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'} mb-8 md:mb-0 text-center`}>
                    <motion.div
                      initial={{ opacity: 0, x: isRightAligned ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow inline-block w-full max-w-sm"
                    >
                      <h4 className="text-primary font-bold text-lg mb-2 font-heading">{step.phase}</h4>
                      <p className="text-foreground/70 text-sm">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-100 border-4 border-white flex items-center justify-center z-10 shadow-sm hidden md:flex">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Right Content Space (Empty) */}
                  <div className="md:w-[45%] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
