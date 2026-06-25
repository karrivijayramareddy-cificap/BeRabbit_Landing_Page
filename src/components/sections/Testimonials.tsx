"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Neha Sharma",
    role: "SDE at TechCorp",
    content: "The structured approach of BeRabbit changed everything for me. The 1:1 mock interviews were particularly helpful for my technical rounds.",
    initials: "NS",
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "Rohan Das",
    role: "Analyst at DataSys",
    content: "Coming from a tier-3 college, I lacked exposure. BeRabbit gave me the skills and the confidence to compete with the best.",
    initials: "RD",
    color: "bg-orange-100 text-orange-700"
  },
  {
    name: "Dr. K. Natarajan",
    role: "TPO, REC Institute",
    content: "Our college placement metrics run seamlessly! Over 100+ students upgraded in real-time. Our placement percentage increased by 20%.",
    initials: "KN",
    color: "bg-green-100 text-green-700"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="fluid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-lg font-heading text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-body-lg text-foreground/70">
            Hear from our students and institutional partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-body-md text-foreground/80 mb-8 flex-1 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-heading ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
