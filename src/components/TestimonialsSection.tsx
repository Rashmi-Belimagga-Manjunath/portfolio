"use client";

import FadeIn from "./FadeIn";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Testimonials</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          What people say
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          Words from people I&apos;ve worked with and learned from.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 sm:p-8 h-full flex flex-col"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <p className="text-[#D7E2EA] text-sm sm:text-base leading-relaxed flex-1 italic">
                <span className="text-3xl text-[#B600A8]/30 font-serif leading-none">&ldquo;</span>
                {t.quote}
                <span className="text-3xl text-[#B600A8]/30 font-serif leading-none">&rdquo;</span>
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-[#D7E2EA]/50 text-xs">
                  {t.role}{t.company ? ` · ${t.company}` : ""}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
