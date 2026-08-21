"use client";

import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 text-center">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase mb-8"
          style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-[#D7E2EA]/60 mb-10 max-w-md mx-auto" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}>
          I&apos;m always open to interesting problems, ambitious people, and products worth building.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:rashmimanjunath95@gmail.com?subject=Hello%20Rashmi"
            className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base"
            style={{
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
              border: "2px solid rgba(255,255,255,0.8)",
            }}
          >
            Email Me
          </a>
          <a
            href="tel:+353894125300"
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors"
          >
            +353 894125300
          </a>
          <a
            href="https://linkedin.com/in/rashmi-manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Rashmi-Belimagga-Manjunath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p className="text-[#D7E2EA]/30 text-xs">
          © 2026 · Rashmi Manjunath · All Rights Reserved
        </p>
      </FadeIn>
    </section>
  );
}
