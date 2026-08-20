"use client";

import ScrollReveal from "./ScrollReveal";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Research &amp; Speaking
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          Contributing to the conversation.
        </h2>
      </ScrollReveal>

      <div className="space-y-12">
        {/* Publication */}
        <ScrollReveal>
          <div className="border border-border p-8 md:p-12 hover:border-border-hover transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
                  Publication
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                  Retrieval-Augmented AI Assistants for Product Documentation Analysis: Supporting Data-Driven Product Backlog Decisions
                </h3>
                <p className="text-sm text-muted/60 leading-relaxed mb-4">
                  Sole-authored paper exploring how RAG-based AI assistants can support product managers in making data-driven backlog decisions. Presented to an international audience of researchers and academics.
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-muted/50 mb-1">EUt+ DATS &amp; STATS 2026 Workshop</p>
                <p className="text-xs text-muted/50 mb-1">University of Cassino and Southern Lazio</p>
                <p className="text-xs text-muted/50 mb-1">Open-Access EUt+ Academic Press Proceedings</p>
                <p className="text-xs text-muted/50">Cassino, Italy</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Speaking */}
        <ScrollReveal delay={0.1}>
          <div className="border border-border p-8 md:p-12 hover:border-border-hover transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
                  Invited Speaker
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                  EUt+ DATS &amp; STATS 2026 Workshop
                </h3>
                <p className="text-sm text-muted/60 leading-relaxed mb-4">
                  Delivered a talk on Retrieval-Augmented AI Assistants for Product Documentation Analysis to an international audience of researchers and academics at the University of Cassino and Southern Lazio, Italy.
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-muted/50 mb-1">European University of Technology</p>
                <p className="text-xs text-muted/50 mb-1">Academic Workshop</p>
                <p className="text-xs text-muted/50">2026</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Startup Pitch */}
        <ScrollReveal delay={0.2}>
          <div className="border border-border p-8 md:p-12 hover:border-border-hover transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
                  Startup Pitch
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                  TU Dublin Sustainability Innovation Event
                </h3>
                <p className="text-sm text-muted/60 leading-relaxed mb-4">
                  Pitched an original startup concept focused on sustainability innovation. Shortlisted among top submissions, demonstrating entrepreneurial thinking and ability to communicate complex ideas to a cross-disciplinary panel.
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-muted/50 mb-1">TU Dublin</p>
                <p className="text-xs text-muted/50 mb-1">Sustainability Innovation</p>
                <p className="text-xs text-muted/50">Shortlisted</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
