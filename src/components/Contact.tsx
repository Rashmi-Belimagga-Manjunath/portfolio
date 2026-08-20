"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Let&apos;s Talk
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-7xl font-medium mb-8">
          Let&apos;s build<br />something.
        </h2>
        <p className="text-lg text-muted/60 max-w-lg mb-16">
          I&apos;m always interested in conversations about product, AI, research, and the space where they intersect.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:rashmimanjunath95@gmail.com"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase px-8 py-4 border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300"
          >
            Email
            <span className="text-xs">→</span>
          </a>
          <a
            href="https://linkedin.com/in/rashmi-manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase px-8 py-4 border border-border text-muted hover:border-border-hover hover:text-foreground transition-all duration-300"
          >
            LinkedIn
            <span className="text-xs">→</span>
          </a>
          <a
            href="https://github.com/Rashmi-Belimagga-Manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase px-8 py-4 border border-border text-muted hover:border-border-hover hover:text-foreground transition-all duration-300"
          >
            GitHub
            <span className="text-xs">→</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
