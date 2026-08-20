"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stages = [
  {
    id: "problem",
    label: "Problem",
    description: "What pain exists? Who feels it? How often?",
    evidence: "At Aurigo, I identified that feature adoption was stagnating — not because of product quality, but because roadmap investments were misaligned with actual usage patterns. This became the starting point for a reprioritisation effort that increased adoption by 18%.",
  },
  {
    id: "discovery",
    label: "Discovery",
    description: "Research, interviews, data analysis, observation.",
    evidence: "For SOVA, I conducted product strategy discovery analysing onboarding flows, habit loops, and Jira backlogs. The findings revealed a 'cart-before-the-horse' paradox: interface tickets were done, but foundational principles were still in the backlog.",
  },
  {
    id: "insight",
    label: "Insight",
    description: "What pattern emerged from the noise?",
    evidence: "The insight across both Zenefits and Aurigo was consistent: conversion and adoption improve when you reduce friction, not add features. At Zenefits, A/B experiments that simplified flows delivered 15% conversion uplift and ~$3M revenue impact.",
  },
  {
    id: "framing",
    label: "Framing",
    description: "How do we define the problem space?",
    evidence: "RouteForge AI was framed around a specific insight: 80%+ of EU SMBs haven't adopted AI — not because they don't want to, but because the process is complex, expensive, and compliance-fraught. The frame became 'AI adoption in under 10 minutes, no consultants required.'",
  },
  {
    id: "prioritise",
    label: "Prioritise",
    description: "What matters most right now?",
    evidence: "Using backlog analytics and sprint velocity data at Aurigo, I reduced backlog cycle time by 22% by reprioritising based on usage analytics and structured customer feedback rather than stakeholder lobbying.",
  },
  {
    id: "build",
    label: "Build",
    description: "Ship something real. Learn from it.",
    evidence: "VIRELLE was built as a full-stack AI system — five agents, a real MCP server, live data integration, and a React frontend. SOVA was built using Flowise and RAG architecture. Every project is hands-on, not theoretical.",
  },
  {
    id: "measure",
    label: "Measure",
    description: "Did it work? How do we know?",
    evidence: "At Zenefits, I built KPI dashboards linking product usage to customer behaviour, which helped reduce churn by 4%. At Aurigo, Power BI dashboards analysing feature adoption improved executive reporting efficiency by 30%.",
  },
  {
    id: "learn",
    label: "Learn",
    description: "What did we discover? What changes?",
    evidence: "Every project teaches something new. VIRELLE taught me how multi-agent systems coordinate. SOVA taught me that emotional safety is a product design constraint, not a feature. RouteForge taught me that AI adoption is a people problem, not a technology problem.",
  },
];

export default function HowIThink() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="think" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Process
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          How I think.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stages.map((stage, i) => (
          <ScrollReveal key={stage.id} delay={i * 0.05}>
            <button
              onClick={() => setActive(active === stage.id ? null : stage.id)}
              className={`w-full text-left p-6 md:p-8 transition-all duration-500 group ${
                active === stage.id
                  ? "bg-surface-elevated"
                  : "bg-background hover:bg-surface"
              }`}
            >
              <span className="text-[10px] tracking-[0.3em] text-muted/40 block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                {stage.label}
              </h3>
              <p className="text-sm text-muted/60">{stage.description}</p>

              <AnimatePresence>
                {active === stage.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-border">
                      <p className="text-xs tracking-[0.15em] uppercase text-accent/60 mb-2">
                        Evidence
                      </p>
                      <p className="text-sm text-muted/70 leading-relaxed">
                        {stage.evidence}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
