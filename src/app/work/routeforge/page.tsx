"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function RouteForgeCaseStudy() {
  return (
    <div className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <Link
          href="/#work"
          className="text-xs tracking-[0.2em] uppercase text-muted/50 hover:text-accent transition-colors duration-300 mb-8 inline-block"
        >
          ← Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent/50 mb-4">
            Case Study
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-8xl font-medium mb-6">
            RouteForge AI
          </h1>
          <p className="text-xl text-muted/60 max-w-2xl mb-8">
            Intelligent AI Adoption Platform — personalised roadmaps for EU SMBs in under 10 minutes.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI Strategy", "React", "TypeScript", "EU AI Act", "Product"].map((t) => (
              <span key={t} className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted/50">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-px bg-border max-w-[1400px] mx-auto" />

      <div className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <ScrollReveal>
              <Section title="Overview">
                <p>
                  RouteForge AI is an AI adoption platform targeting the 80%+ of EU SMBs yet to integrate AI. It addresses
                  real barriers including cost, complexity, and EU AI Act compliance. The platform delivers personalised,
                  phased AI roadmaps in under 10 minutes — no consultants or jargon required.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                <p>
                  The majority of European small and medium businesses want to adopt AI but face overwhelming barriers:
                  technical complexity, regulatory uncertainty (EU AI Act), cost of consultants, and lack of clear starting
                  points. Existing solutions are either too technical or too generic.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Solution">
                <p>
                  A personalised, phased AI roadmap engine. The platform takes a business through a structured assessment
                  of their goals, budget, and regulatory requirements, then delivers tailored recommendations with built-in
                  EU AI Act compliance guidance. The entire process takes under 10 minutes.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Product Decisions">
                <ul className="space-y-2">
                  <li>Designed for speed — under 10 minutes to complete, no consultants needed</li>
                  <li>Built-in EU AI Act compliance guidance from the start</li>
                  <li>Validated pain points through direct research with F&amp;B business owners in Dublin</li>
                  <li>Phased adoption approach — start small, prove value, then expand</li>
                  <li>No jargon — plain language recommendations for non-technical business owners</li>
                </ul>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                <p>
                  RouteForge taught me that AI adoption is fundamentally a people problem, not a technology problem.
                  The businesses we spoke to didn&apos;t need another AI tool — they needed clarity on where to start,
                  what compliance means for them, and how to prove ROI before scaling. The product had to reduce complexity,
                  not add to it.
                </p>
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <ScrollReveal>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Role</p>
                  <p className="text-sm">Co-Founder &amp; Product Lead</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Tailwind", "Vite"].map((t) => (
                      <span key={t} className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 border border-border text-muted/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Links</p>
                  <a href="https://github.com/Rashmi-Belimagga-Manjunath/routeforgeai" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent/70 hover:text-accent transition-colors duration-300">
                    GitHub →
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[10px] tracking-[0.3em] uppercase text-accent/50 mb-4">{title}</h2>
      <div className="text-sm text-muted/70 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
