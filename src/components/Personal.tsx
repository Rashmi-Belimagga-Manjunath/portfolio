"use client";

import ScrollReveal from "./ScrollReveal";

const interests = [
  { label: "Strength training", icon: "◆" },
  { label: "Nonfiction books", icon: "◆" },
  { label: "Reading Substacks", icon: "◆" },
  { label: "Exploring new cafés", icon: "◆" },
  { label: "Industry meetups", icon: "◆" },
  { label: "10k Marathon runner", icon: "◆" },
];

export default function Personal() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Outside the Roadmap
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          The person behind the product work.
        </h2>
      </ScrollReveal>

      <div className="max-w-3xl">
        <ScrollReveal>
          <p className="text-lg text-muted/60 leading-relaxed mb-12">
            Beyond product strategy and AI systems, I&apos;m drawn to things that
            ground me — strength training, long runs, discovering a quiet café
            I haven&apos;t been to before, and the kind of nonfiction that changes
            how I think about a problem.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, i) => (
            <ScrollReveal key={interest.label} delay={i * 0.05}>
              <div className="border border-border p-5 hover:border-border-hover transition-all duration-300 group">
                <span className="text-accent/30 text-xs mb-3 block group-hover:text-accent/60 transition-colors duration-300">
                  {interest.icon}
                </span>
                <p className="text-sm text-muted/70">{interest.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
