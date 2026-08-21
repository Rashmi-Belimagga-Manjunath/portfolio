"use client";

import FadeIn from "./FadeIn";
import publications from "@/data/publications.json";

export default function PublicationsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Publications</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Research
        </h2>
        <p className="text-[#6B7280] text-sm mb-14 max-w-md">
          Academic work on AI-assisted product management.
        </p>
      </FadeIn>

      {publications.map((pub, i) => (
        <FadeIn key={pub.title} delay={i * 0.1}>
          <div className="card rounded-2xl p-6 sm:p-8">
            <span
              className="text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium mb-4 inline-block"
              style={{
                background: "rgba(232, 87, 58, 0.08)",
                color: "#E8573A",
                border: "1px solid rgba(232, 87, 58, 0.15)",
              }}
            >
              {pub.type}
            </span>

            <h3 className="text-[#1A1A1A] font-bold text-lg sm:text-xl mb-3 leading-snug">
              {pub.title}
            </h3>

            <div className="space-y-1 mb-4">
              <p className="text-[#6B7280] text-sm">{pub.author}</p>
              <p className="text-[#9CA3AF] text-xs">{pub.venue} · {pub.institution}</p>
              <p className="text-[#9CA3AF] text-xs">Published in {pub.publication} · {pub.year}</p>
            </div>

            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium px-4 py-2 rounded-lg transition-all"
              style={{
                color: "#E8573A",
                background: "rgba(232, 87, 58, 0.08)",
                border: "1px solid rgba(232, 87, 58, 0.15)",
              }}
            >
              View Publication →
            </a>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
