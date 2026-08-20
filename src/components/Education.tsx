"use client";

import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Education
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          Foundation.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl">
        <ScrollReveal>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
              2026 — 2027
            </p>
            <h3 className="text-lg font-medium mb-2">
              MSc Artificial Intelligence for Business
            </h3>
            <p className="text-sm text-muted/60 mb-4">
              National College of Ireland, Dublin
            </p>
            <p className="text-sm text-muted/50 leading-relaxed">
              Focus on AI product development, RAG architectures, machine learning lifecycle, and responsible AI adoption.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
              2014 — 2018
            </p>
            <h3 className="text-lg font-medium mb-2">
              Bachelor of Engineering — Information Technology
            </h3>
            <p className="text-sm text-muted/60 mb-4">
              Visvesvaraya Technological University (VTU)
            </p>
            <p className="text-sm text-muted/50 leading-relaxed">
              Engineering foundation with focus on information technology systems and software development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
