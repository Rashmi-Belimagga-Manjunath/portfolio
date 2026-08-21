"use client";

import FadeIn from "./FadeIn";
import skillsData from "@/data/skills.json";

export default function SkillsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Skills &amp; Tools</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          The kit
        </h2>
        <p className="text-[#6B7280] text-sm mb-12 max-w-md">
          PM skills I practise and the tools I use to ship them.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h3 className="text-[#1A1A1A] font-bold text-lg mb-5">Skills</h3>
        <div className="flex flex-wrap gap-2.5 mb-14">
          {skillsData.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[#4B5563] card"
            >
              <span>{skill.emoji}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h3 className="text-[#1A1A1A] font-bold text-lg mb-5">Tools</h3>
        <div className="flex flex-wrap gap-2.5">
          {skillsData.tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-2 rounded-full text-sm text-[#4B5563] card"
            >
              {tool}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
