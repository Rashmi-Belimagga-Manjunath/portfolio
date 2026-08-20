"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Best product manager, and Google is just waiting for her.",
    name: "Axel Ilenre",
    role: "Friend & Colleague",
  },
  {
    quote: "My unhinged version of me has unlimited potential.",
    name: "Manjunath DN",
    role: "Ex-Product Director",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">What People Say</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Kind words.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="p-8 rounded-xl border border-border bg-white hover:shadow-md transition-all duration-300">
              <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-light">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
