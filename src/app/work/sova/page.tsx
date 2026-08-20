"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SovaCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto">
        <Link href="/#work" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
          ← Back to Work
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-medium mb-4 inline-block">Case Study</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SOVA</h1>
          <p className="text-lg text-muted max-w-2xl mb-6">A calm self-reflection product designed around small, pressure-free daily rituals.</p>
          <div className="flex flex-wrap gap-1.5">
            {["Product Strategy", "RAG", "LLM", "UX Design", "Jira"].map((t) => (
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
                SOVA is a calm self-reflection application that stands as a direct counter-weight to the &quot;attention economy&quot;
                which exploits user anxiety to drive vanity retention metrics. Unlike contemporary wellness apps, SOVA is
                architected around returnability — ensuring users feel completely comfortable returning after breaks.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                Most wellness and productivity apps rely on anxiety-driven engagement loops — daily streaks, push notifications,
                guilt-based retention. This creates short-term spikes followed by rapid, permanent churn.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Four Guiding Principles">
                <div className="space-y-3">
                  <Principle n="01" t="Calm over Urgency" d="The product must never create panic, pressure, or FOMO." />
                  <Principle n="02" t="Progress without Pressure" d="Skipping days is expected and structurally accepted." />
                  <Principle n="03" t="Support, not Control" d="SOVA suggests reflective actions but never demands them." />
                  <Principle n="04" t="Clarity over Features" d="Fewer, well-crafted interactions over feature overload." />
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Key Product Decisions">
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Rejected daily streaks in favour of 7-day voluntary cycles</li>
                  <li>• Local-first guest storage (no forced sign-up)</li>
                  <li>• Guilt-free exit — no prompts to stay</li>
                  <li>• Neutral state selectors — no positive/negative scoring</li>
                  <li>• Success measured by peaceful exit, not session duration</li>
                </ul>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="AI Component — RAG Architecture">
                Built an AI assistant using Flowise and OpenAI to support product documentation retrieval and backlog
                analysis. Implemented a Retrieval-Augmented Generation (RAG) workflow to ground responses in product
                knowledge documents. Developed an LLM pipeline to summarise and prioritise Jira PBIs.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                SOVA taught me that emotional safety is a product design constraint, not a feature. The hardest
                product decisions were about what NOT to build — rejecting engagement hooks that would improve
                vanity metrics but damage the user&apos;s relationship with the product.
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Role</p>
                <p className="text-sm text-muted">Senior Product Strategist</p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Flowise", "OpenAI", "RAG", "Jira", "Confluence"].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-light font-medium">{t}</span>
                  ))}
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

function Principle({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
      <span className="text-xs text-accent font-mono">{n}</span>
      <div>
        <p className="text-sm font-medium">{t}</p>
        <p className="text-xs text-muted-light">{d}</p>
      </div>
    </div>
  );
}
