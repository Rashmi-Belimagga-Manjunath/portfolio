"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs text-muted-light uppercase tracking-widest mb-4">01 — About</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A bit about me.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a Product Manager with 6+ years of experience across B2B SaaS, HRTech,
                infrastructure technology, and AI-enabled products.
              </p>
              <p>
                My work sits at the intersection of product strategy, analytics, and emerging
                AI technologies. I enjoy transforming complex business challenges into practical,
                user-focused solutions.
              </p>
              <p>
                Currently pursuing an MSc in Artificial Intelligence for Business at
                National College of Ireland, while building AI products and conducting
                research on RAG architectures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <MetricCard number="6+" label="Years in Product" />
            <MetricCard number="18%" label="Feature Adoption Gain" detail="Aurigo Technologies" />
            <MetricCard number="$3M" label="Revenue Impact" detail="Zenefits A/B Experiments" />
            <MetricCard number="4" label="AI Products Built" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function MetricCard({ number, label, detail }: { number: string; label: string; detail?: string }) {
  return (
    <div className="flex items-baseline gap-4 p-4 rounded-lg bg-surface">
      <span className="text-3xl font-bold text-accent">{number}</span>
      <div>
        <p className="text-sm font-medium">{label}</p>
        {detail && <p className="text-xs text-muted-light">{detail}</p>}
      </div>
    </div>
  );
}
