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
      "Building AI workflows using Python, prompt engineering, RAG, and LLM-based automation",
    ],
  },
  {
    company: "Aurigo Software Technologies",
    role: "Product Manager",
    dates: "Jan 2023 — Dec 2025",
    location: "Bangalore",
    highlights: [
      "Increased feature adoption by 18% within two quarters through roadmap reprioritisation",
      "Reduced backlog cycle time by 22% through improved refinement and sprint planning",
      "Developed Power BI dashboards enhancing executive reporting efficiency by 30%",
    ],
  },
  {
    company: "Zenefits",
    role: "Associate Product Manager",
    dates: "Jul 2019 — Jan 2023",
    location: "Bangalore",
    highlights: [
      "Designed A/B experiments resulting in 15% conversion uplift and ~$3M annual revenue impact",
      "Built KPI dashboards linking product usage to customer behaviour, reducing churn by 4%",
    ],
  },
  {
    company: "Simplilearn",
    role: "Inside Sales Manager",
    dates: "Jul 2018 — Dec 2018",
    location: "Bangalore",
    highlights: [
      "Managed outbound sales pipelines for professional certification programmes",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Where I&apos;ve worked.
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {roles.map((role, i) => (
          <ScrollReveal key={role.company} delay={i * 0.1}>
            <div className="p-6 rounded-xl border border-border bg-white">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-semibold">{role.role}</h3>
                  <p className="text-sm text-accent">{role.company}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-muted-light">{role.dates}</p>
                  <p className="text-xs text-muted-light">{role.location}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {role.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-muted-light mt-1">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
