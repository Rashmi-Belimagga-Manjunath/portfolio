"use client";

import ScrollReveal from "./ScrollReveal";

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Writing
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          Thinking in public.
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="max-w-2xl">
          <a
            href="https://rashmi95.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border p-8 hover:border-border-hover transition-all duration-500"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 mb-3">
              WordPress Blog
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium mb-3 group-hover:text-accent transition-colors duration-300">
              rashmi95.wordpress.com
            </h3>
            <p className="text-sm text-muted/60 leading-relaxed">
              Thoughts on product management, AI, research, and the intersection of technology and human-centred design.
            </p>
            <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-muted/40 group-hover:text-accent transition-colors duration-300">
              Visit Blog →
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
