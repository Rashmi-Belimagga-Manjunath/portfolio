"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function DigitalStoryCaseStudy() {
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
            Digital Story
          </h1>
          <p className="text-xl text-muted/60 max-w-2xl mb-8">
            Interactive digital storytelling platform combining narrative, multimedia, and UI design for engaging story experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind", "Lovable AI"].map((t) => (
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
                  Digital Story is an interactive digital storytelling platform that combines narrative, multimedia elements,
                  and thoughtful UI design to create engaging, narrative-driven user experiences. Built with React, TypeScript,
                  and Tailwind CSS using Lovable AI.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                <p>
                  Digital stories often feel like static documents with images. The challenge was to create a platform where
                  narrative unfolds through interaction — where the reader becomes a participant in the story.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Solution">
                <p>
                  An interactive platform where stories unfold through user engagement. Multimedia elements — images, animations,
                  interactive components — are woven into the narrative flow, creating an experience that feels alive rather than
                  static.
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                <p>
                  This project deepened my understanding of how UI design and narrative structure interact. The best digital
                  stories aren&apos;t just well-written — they&apos;re well-designed experiences where every interaction serves
                  the narrative. It also taught me how AI-assisted development (Lovable AI) can accelerate prototyping while
                  maintaining design quality.
                </p>
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <ScrollReveal>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Role</p>
                  <p className="text-sm">Product &amp; Build</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="border border-border p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted/40 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Tailwind", "Vite", "Lovable AI"].map((t) => (
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
                    <a href="https://digitalstory.lovable.app/" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent/70 hover:text-accent transition-colors duration-300">
                      Live Demo →
                    </a>
                    <a href="https://github.com/Rashmi-Belimagga-Manjunath/digitalstory" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent/70 hover:text-accent transition-colors duration-300">
                      GitHub →
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
