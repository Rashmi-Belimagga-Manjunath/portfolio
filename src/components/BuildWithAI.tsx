"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const aiProjects = [
  {
    title: "VIRELLE",
    what: "Five-agent AI system for a luxury hotel — from live data to executive decision.",
    why: "Demonstrate that multi-agent AI can coordinate real business operations, not just answer questions.",
    how: "FastAPI + MCP server + OpenAI/Anthropic LLMs + React frontend + live external APIs.",
    tech: ["Python", "FastAPI", "MCP", "OpenAI", "React", "SQLite"],
    outcome: "Pitch-ready system with 5 named agents, 12 MCP tools, live data integration, and a working booking flow.",
  },
  {
    title: "SOVA AI Assistant",
    what: "RAG-based AI assistant for product documentation retrieval and backlog analysis.",
    why: "Product managers spend hours searching for context across documentation. RAG can ground AI responses in actual product knowledge.",
    how: "Flowise + OpenAI + RAG workflow with vector retrieval and context injection.",
    tech: ["RAG", "Flowise", "OpenAI", "Vector Search", "LLM"],
    outcome: "Working prototype that summarises and prioritises Jira PBIs from product documentation.",
  },
  {
    title: "RouteForge AI",
    what: "AI adoption platform for EU SMBs — personalised roadmaps in under 10 minutes.",
    why: "80%+ of EU SMBs haven't adopted AI. The barriers are cost, complexity, and compliance — not desire.",
    how: "React + TypeScript frontend with AI-ready architecture, phased recommendation engine.",
    tech: ["React", "TypeScript", "AI Strategy", "EU AI Act"],
    outcome: "Validated with F&B business owners in Dublin. Integrates EU AI Act compliance guidance.",
  },
  {
    title: "Hospital Readmission Decision Support",
    what: "ML model predicting hospital readmission risk, framed within Irish healthcare context.",
    why: "Readmission prevention is a critical healthcare challenge. The model supports — not replaces — clinical decisions.",
    how: "Python + scikit-learn + Logistic Regression + Diabetes 130-US Hospitals dataset.",
    tech: ["Python", "scikit-learn", "Logistic Regression", "Pandas"],
    outcome: "Interpretable model with GDPR-aware design and human-in-the-loop oversight.",
  },
];

export default function BuildWithAI() {
  return (
    <section id="build" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Build
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-6 max-w-2xl">
          I build with AI.
        </h2>
        <p className="text-lg text-muted/60 max-w-xl mb-16 md:mb-24">
          I don&apos;t just talk about AI. I build with it. Every project below involves hands-on work with LLMs, RAG architectures, multi-agent systems, or machine learning.
        </p>
      </ScrollReveal>

      <div className="space-y-px bg-border">
        {aiProjects.map((project, i) => (
          <AIProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function AIProjectRow({
  project,
  index,
}: {
  project: typeof aiProjects[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-background hover:bg-surface transition-colors duration-500 p-8 md:p-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Title */}
        <div className="lg:col-span-3">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 border border-border text-muted/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-2">What</p>
            <p className="text-sm text-muted/70 leading-relaxed">{project.what}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-2">How</p>
            <p className="text-sm text-muted/70 leading-relaxed">{project.how}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-2">Outcome</p>
            <p className="text-sm text-muted/70 leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
