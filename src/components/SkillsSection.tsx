"use client";

import FadeIn from "./FadeIn";

const skills = [
  { emoji: "🎯", name: "Product Strategy" },
  { emoji: "🗺️", name: "Roadmapping" },
  { emoji: "📝", name: "PRD Writing" },
  { emoji: "🔍", name: "User Research" },
  { emoji: "🧩", name: "JTBD" },
  { emoji: "⚖️", name: "RICE / MoSCoW" },
  { emoji: "🚀", name: "MVP Definition" },
  { emoji: "📣", name: "GTM Strategy" },
  { emoji: "📐", name: "Market Sizing" },
  { emoji: "🧪", name: "A/B Testing" },
  { emoji: "🤝", name: "Stakeholder Mgmt" },
  { emoji: "📊", name: "Business Analysis" },
  { emoji: "🤖", name: "AI Product Strategy" },
  { emoji: "📈", name: "Product Analytics" },
  { emoji: "🗣️", name: "Customer Discovery" },
  { emoji: "👥", name: "Personas & ICP" },
  { emoji: "🧭", name: "Competitive Analysis" },
  { emoji: "✏️", name: "Wireframing" },
  { emoji: "🎚️", name: "Metrics & KPIs" },
  { emoji: "🧬", name: "Experimentation" },
  { emoji: "🗃️", name: "SQL Basics" },
  { emoji: "🔁", name: "Agile / Scrum" },
];

const tools = [
  "Figma",
  "Notion",
  "Jira",
  "Confluence",
  "Power BI",
  "MySQL",
  "ChatGPT",
  "Claude",
  "OpenAI",
  "GitHub",
  "Pendo",
  "Azure",
  "Excel",
  "Miro",
  "Slack",
];

export default function SkillsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Skills &amp; Tools</p>
        <h2
          className="text-white font-black mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          The kit
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-12 max-w-md">
          PM skills I practise and the tools I use to ship them.
        </p>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.1}>
        <h3 className="text-white font-bold text-lg mb-5">Skills</h3>
        <div className="flex flex-wrap gap-2.5 mb-14">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[#D7E2EA]/80"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span>{skill.emoji}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Tools */}
      <FadeIn delay={0.2}>
        <h3 className="text-white font-bold text-lg mb-5">Tools</h3>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool) => (
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
