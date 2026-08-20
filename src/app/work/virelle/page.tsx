"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function VirelleCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto">
        <Link href="/#work" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
          ← Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-light text-accent font-medium mb-4 inline-block">
            Case Study
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VIRELLE</h1>
          <p className="text-lg text-muted max-w-2xl mb-6">
            The Intelligent Hospitality Organisation — a five-agent AI system that runs a complete business operation
            from live data to a final signed decision.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["AI Agents", "MCP", "FastAPI", "React", "SQLite", "OpenAI"].map((t) => (
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
                VIRELLE is a pitch-ready AI organisation for The Virelle Dublin, a fictional five-star boutique hotel.
                Five specialised AI agents — Researcher, Designer, Maker, Communicator, and Manager — run a complete
                business operation from live data to a final signed executive decision, powered by a real MCP server
                over the hotel&apos;s SQLite database.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                Hospitality businesses make decisions based on gut feel, outdated spreadsheets, and fragmented data.
                What if an AI system could query live data — weather, events, destination interest, hotel occupancy —
                and run a complete decision pipeline from research to executive sign-off?
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Five Agents">
                <div className="space-y-3">
                  <AgentRow name="Eleanor Hayes" role="Research & Intelligence Director" q="Is there an opportunity?" color="#2563eb" />
                  <AgentRow name="Sofia Laurent" role="Experience Design Director" q="What should we create?" color="#f59e0b" />
                  <AgentRow name="Julian Mercer" role="Product & Prototyping Director" q="Can we make it tangible?" color="#10b981" />
                  <AgentRow name="Amelia Bennett" role="Brand & Growth Director" q="How do we create demand?" color="#ec4899" />
                  <AgentRow name="Alexander Sterling" role="Executive Director" q="Should the business actually do it?" color="#8b5cf6" />
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Technical Architecture">
                <div className="font-mono text-sm text-muted bg-surface p-6 rounded-xl overflow-x-auto">
                  <pre>{`frontend/           Vite + React 18 + Tailwind
backend/
  main.py           FastAPI — REST + SSE API
  pipeline.py       Operation orchestrator
  agents.py         5 agents (prompts, JSON contracts)
  llm.py            OpenAI / Anthropic abstraction
  mcp_server.py     12 MCP tools over hotel SQLite
  live_data.py      Events / weather / destination data
  hotel_db.py       SQLite schema + query layer`}</pre>
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="How an Operation Flows">
                <ol className="space-y-3 list-decimal list-inside text-sm text-muted leading-relaxed">
                  <li>You give VIRELLE Command a mission</li>
                  <li>Eleanor queries live events, weather, and hotel MCP — produces evidence-backed brief</li>
                  <li>Sofia designs the experience from that brief</li>
                  <li>Julian builds the bookable product with working booking flow via MCP</li>
                  <li>Amelia writes the launch campaign</li>
                  <li>Alexander independently re-queries live data and decides: LAUNCH APPROVED, REQUEST REVISION, or DO NOT LAUNCH</li>
                </ol>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                Building VIRELLE taught me that multi-agent AI systems are fundamentally product coordination problems.
                Each agent needs clear scope, strict output contracts, and defined handoff points — just like any
                well-run product team. The MCP protocol proved that tool use can be standardized across agents.
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <SidebarCard title="Role" content="Product Manager & AI Builder" />
              <SidebarCard title="Stack" content="Python, FastAPI, React, SQLite, MCP, OpenAI, Anthropic, Tailwind" />
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Links</p>
                <div className="space-y-2">
                  <a href="https://github.com/Rashmi-Belimagga-Manjunath/VIRELLE" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">GitHub →</a>
                  <a href="https://rashmi-belimagga-manjunath.github.io/VIRELLE/" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">Live Demo →</a>
                </div>
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

function AgentRow({ name, role, q, color }: { name: string; role: string; q: string; color: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
      <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-light">{role}</p>
        <p className="text-xs text-muted-light italic mt-0.5">&ldquo;{q}&rdquo;</p>
      </div>
    </div>
  );
}

function SidebarCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-6 rounded-xl border border-border">
      <p className="text-xs text-muted-light uppercase tracking-widest mb-3">{title}</p>
      <p className="text-sm text-muted">{content}</p>
    </div>
  );
}
