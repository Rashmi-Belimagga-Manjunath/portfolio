"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s connect.
        </h2>
        <p className="text-muted max-w-lg mb-10">
          I&apos;m always interested in conversations about product, AI, research,
          and the space where they intersect.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:rashmimanjunath95@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Email Me →
          </a>
          <a
            href="https://linkedin.com/in/rashmi-manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:border-border-hover hover:bg-surface transition-all duration-200"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/Rashmi-Belimagga-Manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:border-border-hover hover:bg-surface transition-all duration-200"
          >
            GitHub →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
