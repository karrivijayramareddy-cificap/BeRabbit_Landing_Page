"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Award, TrendingUp, Building2, UserCircle } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="text-orange-500" size={24} />,
    title: "Structured Learning Path",
    description: "Follow a step-by-step curriculum designed by industry experts to take students from basics to advanced levels.",
    bgColor: "bg-orange-50"
  },
  {
    icon: <Briefcase className="text-blue-500" size={24} />,
    title: "Industry Relevant Skills",
    description: "Master Python, DSA, and other tech that companies are actually hiring for in today's market.",
    bgColor: "bg-blue-50"
  },
  {
    icon: <TrendingUp className="text-green-500" size={24} />,
    title: "Performance Tracking",
    description: "Real-time analytics and dashboards to visualize coding progress and aptitude scores.",
    bgColor: "bg-green-50"
  },
  {
    icon: <UserCircle className="text-purple-500" size={24} />,
    title: "Certification & ROI",
    description: "Demonstrate skill proficiency to unlock top placements and premium salary packages.",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Award className="text-red-500" size={24} />,
    title: "Placement Assistance",
    description: "Mock interviews, resume building, and soft skills training to crack the final hiring rounds.",
    bgColor: "bg-red-50"
  },
  {
    icon: <Building2 className="text-indigo-500" size={24} />,
    title: "College Integration",
    description: "Seamlessly sync with your college curriculum and let TPOs monitor active batches easily.",
    bgColor: "bg-indigo-50"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            More Than a Learning Platform
          </h2>
          <p className="text-body-lg text-foreground/70">
            We provide the comprehensive ecosystem needed to bridge the gap between education and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bgColor} transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-headline-md font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-body-md text-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
