"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Award, TrendingUp, Building2, UserCircle } from "lucide-react";

const features = [
  {
    icon: <BookOpen size={22} className="text-orange-500" />,
    iconBg: "bg-gradient-to-br from-orange-50 to-orange-100/60",
    title: "Structured Learning Path",
    description: "Follow a step-by-step curriculum designed by industry experts to take students from basics to advanced levels.",
  },
  {
    icon: <Briefcase size={22} className="text-blue-500" />,
    iconBg: "bg-gradient-to-br from-blue-50 to-blue-100/60",
    title: "Industry Relevant Skills",
    description: "Master Python, DSA, and other tech that companies are actually hiring for in today's market.",
  },
  {
    icon: <TrendingUp size={22} className="text-green-500" />,
    iconBg: "bg-gradient-to-br from-green-50 to-green-100/60",
    title: "Performance Tracking",
    description: "Real-time analytics and dashboards to visualize coding progress and aptitude scores.",
  },
  {
    icon: <UserCircle size={22} className="text-purple-500" />,
    iconBg: "bg-gradient-to-br from-purple-50 to-purple-100/60",
    title: "Certification & ROI",
    description: "Demonstrate skill proficiency to unlock top placements and premium salary packages.",
  },
  {
    icon: <Award size={22} className="text-red-500" />,
    iconBg: "bg-gradient-to-br from-red-50 to-red-100/60",
    title: "Placement Assistance",
    description: "Mock interviews, resume building, and soft skills training to crack the final hiring rounds.",
  },
  {
    icon: <Building2 size={22} className="text-indigo-500" />,
    iconBg: "bg-gradient-to-br from-indigo-50 to-indigo-100/60",
    title: "College Integration",
    description: "Seamlessly sync with your college curriculum and let TPOs monitor active batches easily.",
  },
];

export function Features() {
  return (
    <section className="section-xl bg-background" id="features">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            More Than a Learning Platform
          </h2>
          <p className="text-body-lg text-foreground/60">
            We provide the comprehensive ecosystem needed to bridge the gap between education and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-8 group cursor-default"
            >
              {/* Icon container with gradient bg */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-headline-md font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-body-md text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
