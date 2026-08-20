"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: "🎯",
    title: "Product Strategy",
    description: "Roadmaps, discovery, prioritisation, and execution. Turning ambiguity into shipped products.",
  },
  {
    icon: "🤖",
    title: "AI/ML Build",
    description: "RAG architectures, multi-agent systems, LLM workflows. I don't just talk about AI — I build with it.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description: "KPI design, A/B testing, funnel analysis, Power BI dashboards. Decisions backed by evidence.",
  },
  {
    icon: "🔬",
    title: "Research",
    description: "Published at EUt+ DATS & STATS 2026. Invited speaker on RAG AI Assistants for product documentation.",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto bg-surface rounded-2xl">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">What I Do</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How I can help.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1}>
            <div className="p-6 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
