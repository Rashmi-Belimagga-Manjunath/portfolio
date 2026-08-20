"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SovaCaseStudy() {
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
            SOVA
          </h1>
          <p className="text-xl text-muted/60 max-w-2xl mb-8">
            A calm self-reflection product designed around small, pressure-free daily rituals.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Product Strategy", "RAG", "LLM", "UX Design", "Jira", "Flowise"].map((t) => (
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
                  SOVA is a calm self-reflection application that stands as a direct counter-weight to the &quot;attention economy&quot;
                  which exploits user anxiety to drive vanity retention metrics. Unlike contemporary wellness apps, SOVA is
                  architected around returnability — ensuring users feel completely comfortable returning after breaks without
                  guilt or performance metrics.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                <p>
                  Most wellness and productivity apps rely on anxiety-driven engagement loops — daily streaks, push notifications,
                  guilt-based retention. This creates short-term spikes followed by rapid, permanent churn. SOVA was designed to
                  solve the problem of sustainable, pressure-free self-reflection.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Product Philosophy — Four Guiding Principles">
                <div className="space-y-3">
                  <Principle num="01" title="Calm over Urgency" desc="The product must never create panic, pressure, or FOMO." />
                  <Principle num="02" title="Progress without Pressure" desc="Skipping days is expected and structurally accepted." />
                  <Principle num="03" title="Support, not Control" desc="SOVA suggests reflective actions but never demands them." />
                  <Principle num="04" title="Clarity over Features" desc="A smaller number of well-crafted interactions over feature overload." />
                </div>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="Key Product Decisions">
                <ul className="space-y-2">
                  <li>Rejected daily streaks in favour of 7-day voluntary cycles</li>
                  <li>Implemented local-first guest storage (no forced sign-up)</li>
                  <li>Guilt-free exit — no prompts to stay, no retention pressure</li>
                  <li>Neutral state selectors — no positive/negative scoring</li>
                  <li>Success measured by peaceful exit, not session duration</li>
                </ul>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Returnability Paradox">
                <p>
                  In the absence of server-side push notifications, what acts as the gentle anchor to pull the user back?
                  SOVA&apos;s answer: a Voluntary Weekly Anchor. Users state a gentle intention at the start of the week. At the
                  end of 7 days, they receive the same quiet completion message regardless of frequency: &ldquo;You took time for
                  yourself this week. That is enough.&rdquo;
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="AI Component — RAG Architecture">
                <p>
                  Built an AI assistant using Flowise and OpenAI to support product documentation retrieval and backlog
                  analysis. Implemented a Retrieval-Augmented Generation (RAG) workflow to ground responses in product
                  knowledge documents. Developed an LLM pipeline to summarise and prioritise Jira Product Backlog Items.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                <p>
                  SOVA taught me that emotional safety is a product design constraint, not a feature. The hardest product
                  decisions were about what NOT to build — rejecting engagement hooks that would improve vanity metrics but
                  damage the user&apos;s relationship with the product. This project fundamentally changed how I think about
                  retention, success metrics, and the ethics of product design.
                </p>
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <ScrollReveal>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Role</p>
                  <p className="text-sm">Senior Product Strategist</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Key Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Flowise", "OpenAI", "RAG", "Jira", "Confluence"].map((t) => (
                      <span key={t} className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 border border-border text-muted/40">
                        {t}
                      </span>
                    ))}
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

function Principle({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-border">
      <span className="text-[10px] text-accent/40 mt-0.5">{num}</span>
      <div>
        <p className="text-sm font-medium mb-1">{title}</p>
        <p className="text-xs text-muted/50">{desc}</p>
      </div>
    </div>
  );
}
