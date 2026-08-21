"use client";

import FadeIn from "./FadeIn";
import education from "@/data/education.json";

export default function EducationSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Education</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Academic path
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          Engineering foundation, PM through AI.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 sm:p-8 h-full"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider mb-2">
                {edu.dates}
              </p>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                {edu.degree}
              </h3>
              <p className="text-[#D7E2EA]/60 text-sm mb-1">{edu.institution}</p>
              <p className="text-[#D7E2EA]/40 text-xs mb-4">{edu.location}</p>

              <p className="text-[#D7E2EA]/50 text-xs uppercase tracking-wider mb-2">Focus</p>
              <p className="text-[#D7E2EA]/70 text-sm">{edu.focus}</p>

              {edu.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-[#D7E2EA]/50 text-sm flex items-start gap-2">
                      <span className="text-[#B600A8] mt-1">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
