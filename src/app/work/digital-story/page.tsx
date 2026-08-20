"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function DigitalStoryCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto">
        <Link href="/#work" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
          ← Back to Work
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 font-medium mb-4 inline-block">Case Study</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Digital Story</h1>
          <p className="text-lg text-muted max-w-2xl mb-6">Interactive digital storytelling platform combining narrative, multimedia, and thoughtful UI design.</p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "TypeScript", "Tailwind", "Lovable AI"].map((t) => (
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
                Digital Story is an interactive digital storytelling platform that combines narrative, multimedia elements,
                and thoughtful UI design to create engaging, narrative-driven user experiences.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="The Problem">
                Digital stories often feel like static documents with images. The challenge was to create a platform where
                narrative unfolds through interaction — where the reader becomes a participant in the story.
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section title="What I Learned">
                This project deepened my understanding of how UI design and narrative structure interact. The best digital
                stories aren&apos;t just well-written — they&apos;re well-designed experiences where every interaction serves
                the narrative. It also taught me how AI-assisted development can accelerate prototyping while maintaining design quality.
              </Section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Role</p>
                <p className="text-sm text-muted">Product &amp; Build</p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind", "Vite", "Lovable AI"].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-light font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <p className="text-xs text-muted-light uppercase tracking-widest mb-3">Links</p>
                <div className="space-y-2">
                  <a href="https://digitalstory.lovable.app/" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">Live Demo →</a>
                  <a href="https://github.com/Rashmi-Belimagga-Manjunath/digitalstory" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">GitHub →</a>
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
