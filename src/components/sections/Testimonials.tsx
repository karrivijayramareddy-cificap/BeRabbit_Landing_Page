"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "SDE at TechCorp",
    content: "The structured approach of BeRabbit changed everything for me. The 1:1 mock interviews were particularly helpful for my technical rounds.",
    initials: "RV",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    name: "Priya Singh",
    role: "Analyst at DataSys",
    content: "Coming from a tier-3 college, I lacked exposure. BeRabbit gave me the skills and the confidence to compete with the best.",
    initials: "PS",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Dr. Srinivasan",
    role: "TPO, REC Institute",
    content: "Our college placement metrics run seamlessly! Over 100+ students upgraded in real-time. Our placement percentage increased by 20%.",
    initials: "DS",
    gradient: "from-green-400 to-green-600",
  },
];

export function Testimonials() {
  return (
    <section className="section-xl bg-gradient-to-b from-blue-50/20 to-background">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-body-lg text-foreground/60">
            Hear from our students and institutional partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={15} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-md text-foreground/70 leading-relaxed mb-8 flex-1 italic">
                <span className="text-primary text-2xl font-heading leading-none mr-1">&ldquo;</span>
                {t.content}
                <span className="text-primary text-2xl font-heading leading-none ml-1">&rdquo;</span>
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#E2E8F0]">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold font-heading text-white text-sm bg-gradient-to-br ${t.gradient} shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-label-md font-bold text-foreground">{t.name}</h4>
                  <p className="text-caption text-foreground/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
