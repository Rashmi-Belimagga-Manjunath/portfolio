"use client";

import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto bg-surface rounded-2xl">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Education</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Foundation.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal>
          <div className="p-6 rounded-xl bg-white border border-border">
            <p className="text-xs text-muted-light mb-2">2026 — 2027</p>
            <h3 className="text-lg font-semibold mb-1">MSc Artificial Intelligence for Business</h3>
            <p className="text-sm text-accent mb-3">National College of Ireland, Dublin</p>
            <p className="text-sm text-muted leading-relaxed">
              Focus on AI product development, RAG architectures, machine learning lifecycle,
              and responsible AI adoption.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="p-6 rounded-xl bg-white border border-border">
            <p className="text-xs text-muted-light mb-2">2014 — 2018</p>
            <h3 className="text-lg font-semibold mb-1">Bachelor of Engineering — IT</h3>
            <p className="text-sm text-accent mb-3">Visvesvaraya Technological University</p>
            <p className="text-sm text-muted leading-relaxed">
              Engineering foundation with focus on information technology systems
              and software development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
