"use client";

import FadeIn from "./FadeIn";
import skillsData from "@/data/skills.json";

export default function SkillsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Skills &amp; Tools</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          The kit
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          How I think, what I know, and the tools I use to ship.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {skillsData.clusters.map((cluster, i) => (
          <FadeIn key={cluster.name} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <h3 className="text-white font-bold text-lg mb-4">{cluster.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm text-[#D7E2EA]/70"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <h3 className="text-white font-bold text-lg mb-5">Tools</h3>
        <div className="flex flex-wrap gap-2.5">
          {skillsData.tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-2 rounded-full text-sm text-[#D7E2EA]/80"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {tool}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
