"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function VirelleCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
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
            VIRELLE
          </h1>
          <p className="text-xl text-muted/60 max-w-2xl mb-8">
            The Intelligent Hospitality Organisation — a five-agent AI system that runs a complete business operation from live data to a final signed decision.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI Agents", "MCP", "FastAPI", "React", "SQLite", "OpenAI", "Anthropic"].map((t) => (
              <span key={t} className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted/50">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-px bg-border max-w-[1400px] mx-auto" />

      {/* Content */}
      <div className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-16">
            <ScrollReveal>
              <Section title="Overview">
                <p>
                  VIRELLE is a pitch-ready AI organisation for The Virelle Dublin, a fictional five-star boutique hotel.
                  Five specialised AI agents — Researcher, Designer, Maker, Communicator, and Manager — run a complete
                  business operation from live data to a final signed executive decision, powered by a real MCP (Model Context
                  Protocol) server over the hotel&apos;s actual SQLite database.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                <p>
                  Hospitality businesses make decisions based on gut feel, outdated spreadsheets, and fragmented data.
                  What if an AI system could query live data — weather, events, destination interest, hotel occupancy —
                  and run a complete decision pipeline from research to executive sign-off?
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Five Agents">
                <div className="space-y-4">
                  <AgentRow name="Eleanor Hayes" role="Research & Intelligence Director" question="Is there an opportunity?" color="#4facfe" />
                  <AgentRow name="Sofia Laurent" role="Experience Design Director" question="What should we create?" color="#f6c86a" />
                  <AgentRow name="Julian Mercer" role="Product & Prototyping Director" question="Can we make it tangible?" color="#5eead4" />
                  <AgentRow name="Amelia Bennett" role="Brand & Growth Director" question="How do we create demand?" color="#f472b6" />
                  <AgentRow name="Alexander Sterling" role="Executive Director" question="Should the business actually do it?" color="#c4b5fd" />
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Technical Architecture">
                <div className="font-mono text-sm text-muted/60 bg-surface p-6 border border-border overflow-x-auto">
                  <pre>{`frontend/           Vite + React 18 + Tailwind
backend/
  main.py           FastAPI — REST + SSE API
  pipeline.py       Operation orchestrator
  agents.py         5 agents (prompts, JSON contracts)
  llm.py            OpenAI / Anthropic abstraction
  mcp_server.py     12 MCP tools over hotel SQLite
  mcp_client.py     MCP stdio client
  live_data.py      Events / weather / destination data
  hotel_db.py       SQLite schema + query layer
  seed.py           Dynamic seed (84 rooms)`}</pre>
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Live Data (Queried at Runtime)">
                <ul className="space-y-2">
                  <li>Fáilte Ireland Open Data — live Dublin events feed</li>
                  <li>Open-Meteo — live Dublin weather forecast</li>
                  <li>Wikimedia — live Dublin destination-interest signal</li>
                  <li>Hospitality Operations MCP — 12 tools over hotel SQLite database</li>
                </ul>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="How an Operation Flows">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>You give VIRELLE Command a mission — e.g. &quot;We have unsold rooms on Saturday. Find us an opportunity.&quot;</li>
                  <li>Eleanor queries live events, weather, destination interest and the hotel&apos;s MCP — scores the opportunity and produces an evidence-backed brief.</li>
                  <li>Sofia designs the experience from that brief and verifies what the hotel can physically deliver.</li>
                  <li>Julian builds the actual bookable product with a working booking flow that writes to the hotel DB via MCP.</li>
                  <li>Amelia writes the campaign — launch copy, channel strategy, timing.</li>
                  <li>Alexander independently re-queries live data at decision time, then decides: LAUNCH APPROVED, REQUEST REVISION, or DO NOT LAUNCH.</li>
                </ol>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                <p>
                  Building VIRELLE taught me that multi-agent AI systems are fundamentally product coordination problems.
                  Each agent needs clear scope, strict output contracts, and defined handoff points — just like any well-run
                  product team. The MCP protocol proved that tool use can be standardized across agents, and that live data
                  makes AI outputs grounded rather than hallucinated.
                </p>
              </Section>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <ScrollReveal>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Role</p>
                  <p className="text-sm">Product Manager & AI Builder</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "FastAPI", "React", "SQLite", "MCP", "OpenAI", "Anthropic", "Tailwind"].map((t) => (
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
                  <div className="space-y-2">
                    <a href="https://github.com/Rashmi-Belimagga-Manjunath/VIRELLE" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent/70 hover:text-accent transition-colors duration-300">
                      GitHub →
                    </a>
                    <a href="https://rashmi-belimagga-manjunath.github.io/VIRELLE/" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent/70 hover:text-accent transition-colors duration-300">
                      Live Demo →
                    </a>
                  </div>
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

function AgentRow({ name, role, question, color }: { name: string; role: string; question: string; color: string }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-border hover:border-border-hover transition-all duration-300">
      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted/50">{role}</p>
        <p className="text-xs text-muted/40 mt-1 italic">&ldquo;{question}&rdquo;</p>
      </div>
    </div>
  );
}
