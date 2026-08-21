"use client";

import FadeIn from "./FadeIn";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Testimonials</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          What people say
        </h2>
        <p className="text-[#6B7280] text-sm mb-14 max-w-md">
          Words from people I&apos;ve worked with and learned from.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="card rounded-2xl p-6 sm:p-8 h-full flex flex-col">
              <span className="text-4xl font-serif leading-none mb-2" style={{ color: "rgba(232, 87, 58, 0.3)" }}>"</span>
              <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed flex-1 italic">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-[#1A1A1A] font-medium text-sm">{t.name}</p>
                <p className="text-[#6B7280] text-xs">
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
