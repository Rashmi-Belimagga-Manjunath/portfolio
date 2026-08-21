"use client";

import FadeIn from "./FadeIn";
import experience from "@/data/experience.json";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Experience</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Where I&apos;ve built
        </h2>
        <p className="text-[#6B7280] text-sm mb-14 max-w-md">
          Roles that shaped how I ship product — with the outcomes owned end-to-end.
        </p>
      </FadeIn>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.1}>
              <div className="relative pl-12 sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-5 top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#E8573A]" />

                <div className="card rounded-2xl p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-[#1A1A1A] font-bold text-lg">{job.role}</h3>
                      <p className="text-[#6B7280] text-sm">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-[#9CA3AF] text-xs uppercase tracking-wider whitespace-nowrap">
                      {job.dates}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#4B5563] text-sm mb-4">{job.description}</p>

                  {/* Highlights */}
                  {job.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="text-[#6B7280] text-sm flex items-start gap-2">
                          <span className="text-[#E8573A] mt-1">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics */}
                  {job.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {job.metrics.map((m, j) => (
                        <div key={j} className="px-3 py-1.5 rounded-lg metric-badge">
                          <span className="text-[#E8573A] font-bold text-sm">{m.value}</span>
                          <span className="text-[#6B7280] text-xs ml-1.5">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] text-[#9CA3AF] uppercase tracking-wider bg-gray-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
