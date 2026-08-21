"use client";

import FadeIn from "./FadeIn";
import education from "@/data/education.json";

export default function EducationSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Education</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Academic path
        </h2>
        <p className="text-[#6B7280] text-sm mb-14 max-w-md">
          Engineering foundation, PM through AI.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.1}>
            <div className="card rounded-2xl p-6 sm:p-8 h-full">
              <p className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-2">
                {edu.dates}
              </p>
              <h3 className="text-[#1A1A1A] font-bold text-base sm:text-lg mb-1">
                {edu.degree}
              </h3>
              <p className="text-[#6B7280] text-sm mb-1">{edu.institution}</p>
              <p className="text-[#9CA3AF] text-xs mb-4">{edu.location}</p>

              <p className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-2">
                Focus
              </p>
              <p className="text-[#4B5563] text-sm">{edu.focus}</p>

              {edu.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-[#6B7280] text-sm flex items-start gap-2">
                      <span className="text-[#E8573A] mt-1">→</span>
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
