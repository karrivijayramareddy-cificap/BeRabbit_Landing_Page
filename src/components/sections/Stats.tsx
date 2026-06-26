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
    <section className="py-12 relative overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/60 via-blue-50/30 to-orange-50/60 -z-10" />

      <div className="fluid-container">
        <div className="glass rounded-2xl px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-orange-100/60">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col items-center justify-center text-center px-4 py-4"
              >
                <h3 className="text-display-lg text-gradient font-heading mb-1">
                  {stat.value}
                </h3>
                <p className="text-caption uppercase tracking-wider text-foreground/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
