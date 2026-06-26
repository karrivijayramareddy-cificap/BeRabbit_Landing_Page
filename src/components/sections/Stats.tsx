"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "50+", label: "Partner Colleges" },
  { value: "95%", label: "Placement Rate" },
  { value: "24/7", label: "Mentor Support" },
];

export function Stats() {
  return (
    <section className="py-12 border-y border-border bg-white/50">
      <div className="fluid-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
