"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function RouteForgeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto">
        <Link href="/#work" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
          ← Back to Work
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium mb-4 inline-block">Case Study</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">RouteForge AI</h1>
          <p className="text-lg text-muted max-w-2xl mb-6">Intelligent AI Adoption Platform — personalised roadmaps for EU SMBs in under 10 minutes.</p>
          <div className="flex flex-wrap gap-1.5">
            {["AI Strategy", "React", "TypeScript", "EU AI Act"].map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-light font-medium">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-px bg-border" />

      <div className="py-16 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <ScrollReveal>
              <Section title="Overview">
                RouteForge AI is an AI adoption platform targeting the 80%+ of EU SMBs yet to integrate AI. It addresses
                real barriers including cost, complexity, and EU AI Act compliance. The platform delivers personalised,
                phased AI roadmaps in under 10 minutes.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                The majority of European small and medium businesses want to adopt AI but face overwhelming barriers:
                technical complexity, regulatory uncertainty (EU AI Act), cost of consultants, and lack of clear starting points.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Solution">
                A personalised, phased AI roadmap engine. The platform takes a business through a structured assessment
                of their goals, budget, and regulatory requirements, then delivers tailored recommendations with built-in
                EU AI Act compliance guidance. Under 10 minutes, no consultants required.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                AI adoption is fundamentally a people problem, not a technology problem. The businesses we spoke to
                didn&apos;t need another AI tool — they needed clarity on where to start, what compliance means for them,
                and how to prove ROI before scaling.
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Role</p>
                <p className="text-sm text-muted">Co-Founder &amp; Product Lead</p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind", "Vite"].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-light font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Links</p>
                <a href="https://github.com/Rashmi-Belimagga-Manjunath/routeforgeai" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">GitHub →</a>
              </div>
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
      <h2 className="text-xs text-muted-light uppercase tracking-widest mb-3">{title}</h2>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
