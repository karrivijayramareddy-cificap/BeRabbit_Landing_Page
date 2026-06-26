"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is BeRabbit really for absolute beginners?",
    answer: "Yes! Our curriculum is designed to take you from the very basics of programming to advanced algorithmic thinking. We assume zero prior knowledge in Phase 1 and build your foundation step-by-step.",
  },
  {
    question: "Can I see my profile performance?",
    answer: "Absolutely. BeRabbit provides a comprehensive student dashboard with real-time analytics. You can track your mock test scores, aptitude improvements, and coding proficiency over time.",
  },
  {
    question: "Does BeRabbit provide guaranteed placements?",
    answer: "While we don't 'guarantee' a job, we guarantee you'll be placement-ready. We provide extensive mock interviews, resume reviews, and direct connections to our network of hiring partners to maximize your success rate.",
  },
  {
    question: "How does the WhatsApp community help?",
    answer: "The BeRabbit WhatsApp community is a space for peer-to-peer learning, instant doubt resolution, and exclusive job updates from our recruitment team.",
  },
];

export function FAQ() {
  return (
    <section className="section-xl bg-background">
      <div className="fluid-container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-headline-lg font-heading text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-foreground/60">
            Everything you need to know before you start.
          </p>
        </div>

        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-xl px-6 border-0 shadow-none"
            >
              <AccordionTrigger className="text-left text-label-md font-semibold text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body-md text-foreground/60 pb-5 leading-relaxed border-t border-[#E2E8F0] pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
