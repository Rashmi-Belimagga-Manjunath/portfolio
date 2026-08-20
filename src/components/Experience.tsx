"use client";

import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    company: "FlyRank",
    role: "AI/ML Intern",
    dates: "Jul 2026 — Present",
    location: "Remote",
    highlights: [
      "Developing AI-powered solutions using ML and LLMs for real-world business applications",
      "Building AI workflows using Python, prompt engineering, RAG, model evaluation, and LLM-based automation",
      "Integrating ML and LLM capabilities into scalable applications",
    ],
  },
  {
    company: "Aurigo Software Technologies",
    role: "Product Manager",
    dates: "Jan 2023 — Dec 2025",
    location: "Bangalore",
    highlights: [
      "Increased feature adoption by 18% within two quarters by reprioritising roadmap investments based on usage analytics",
      "Reduced backlog cycle time by 22% through improved refinement, clearer acceptance criteria, and structured sprint planning",
      "Improved release predictability and sprint velocity by 15% through cross-functional coordination",
      "Developed Power BI dashboards analysing feature adoption, enhancing executive reporting efficiency by 30%",
      "Authored PRDs in Confluence across engineering, design, and QA teams",
    ],
  },
  {
    company: "Zenefits",
    role: "Associate Product Manager",
    dates: "Jul 2019 — Jan 2023",
    location: "Bangalore",
    highlights: [
      "Designed and executed A/B experiments resulting in 15% conversion uplift and ~$3M annual revenue impact",
      "Built KPI dashboards linking product usage to customer behaviour, reducing churn by 4%",
      "Translated business requirements into user stories and acceptance criteria",
      "Partnered with customer success to convert user feedback into prioritised backlog improvements",
    ],
  },
  {
    company: "Simplilearn",
    role: "Inside Sales Manager",
    dates: "Jul 2018 — Dec 2018",
    location: "Bangalore",
    highlights: [
      "Managed outbound sales pipelines for professional certification programmes",
      "Conducted needs analysis and positioned solutions aligned with customer goals",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Experience
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          Where I&apos;ve been.
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {roles.map((role, i) => (
            <ScrollReveal key={role.company} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-20 py-10 group">
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-12 w-2 h-2 rounded-full bg-muted/30 group-hover:bg-accent transition-colors duration-300 -translate-x-[3.5px]" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors duration-300">
                      {role.role}
                    </h3>
                    <p className="text-sm text-accent/70">{role.company}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-muted/50">{role.dates}</p>
                    <p className="text-xs text-muted/40">{role.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted/60 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-muted/20"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
