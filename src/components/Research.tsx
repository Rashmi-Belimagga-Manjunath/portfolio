"use client";

import ScrollReveal from "./ScrollReveal";

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Research &amp; Speaking</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contributing to the conversation.
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        <ScrollReveal>
          <div className="p-6 md:p-8 rounded-xl border border-border bg-white hover:border-border-hover hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-light text-accent font-medium mb-3 inline-block">
                  Publication
                </span>
                <h3 className="text-lg font-semibold mb-2">
                  Retrieval-Augmented AI Assistants for Product Documentation Analysis: Supporting Data-Driven Product Backlog Decisions
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sole-authored paper exploring how RAG-based AI assistants can support product managers
                  in making data-driven backlog decisions.
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-muted-light">EUt+ DATS &amp; STATS 2026</p>
                <p className="text-xs text-muted-light">University of Cassino, Italy</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="p-6 md:p-8 rounded-xl border border-border bg-white hover:border-border-hover hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-medium mb-3 inline-block">
                  Invited Speaker
                </span>
                <h3 className="text-lg font-semibold mb-2">
                  EUt+ DATS &amp; STATS 2026 Workshop
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Delivered a talk to an international audience of researchers and academics at the
                  University of Cassino and Southern Lazio, Italy.
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-muted-light">European University of Technology</p>
                <p className="text-xs text-muted-light">2026</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
