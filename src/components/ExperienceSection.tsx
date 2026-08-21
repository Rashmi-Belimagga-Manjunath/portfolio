"use client";

import FadeIn from "./FadeIn";
import experience from "@/data/experience.json";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Experience</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Where I&apos;ve built
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          Roles that shaped how I ship product — with the outcomes owned end-to-end.
        </p>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.1}>
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-3 sm:left-5 top-1 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#B600A8]" />

                <div
                  className="rounded-2xl p-6 sm:p-8"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-white font-bold text-lg">{job.role}</h3>
                      <p className="text-[#D7E2EA]/60 text-sm">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider whitespace-nowrap">
                      {job.dates}
                    </span>
                  </div>

                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-[#B600A8] text-xs uppercase tracking-widest font-medium mb-1.5">Problem</p>
                      <p className="text-[#D7E2EA]/70 text-sm leading-relaxed">{job.problem}</p>
                    </div>

                    <div>
                      <p className="text-[#B600A8] text-xs uppercase tracking-widest font-medium mb-1.5">What I did</p>
                      <p className="text-[#D7E2EA]/70 text-sm leading-relaxed">{job.whatIdid}</p>
                    </div>

                    <div>
                      <p className="text-[#B600A8] text-xs uppercase tracking-widest font-medium mb-1.5">Outcome</p>
                      <p className="text-white font-medium text-sm leading-relaxed">{job.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] text-[#D7E2EA]/40 uppercase tracking-wider"
                        style={{ background: "rgba(255, 255, 255, 0.04)" }}
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
