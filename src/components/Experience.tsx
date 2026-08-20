"use client";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "FlyRank",
    period: "July 2026 · Remote",
    description: "Developing AI-powered solutions using ML and LLMs for real-world business applications. Building AI workflows with Python, prompt engineering, RAG, model evaluation, and LLM-based automation.",
  },
  {
    role: "Product Manager",
    company: "Aurigo Software Technologies",
    period: "Jan 2023 – Dec 2025",
    description: "Owned enterprise SaaS roadmaps. Increased feature adoption by 18% within two quarters. Reduced backlog cycle time by 22%. Improved sprint velocity by 15%. Built Power BI dashboards improving executive reporting efficiency by 30%.",
  },
  {
    role: "Associate Product Manager",
    company: "Zenefits",
    period: "Jul 2019 – Jan 2023",
    description: "Supported roadmap planning and sprint coordination. Designed A/B experiments resulting in 15% conversion uplift and ~$3M annual revenue impact. Built KPI dashboards reducing churn by 4%.",
  },
  {
    role: "Inside Sales Manager",
    company: "Simplilearn",
    period: "Jul 2018 – Dec 2018",
    description: "Managed outbound sales pipelines for professional certification programmes. Conducted needs analysis and positioned solutions aligned with customer goals.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="relative pl-6 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gray-400" />
            <h3 className="text-lg font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-500">{exp.company} · {exp.period}</p>
            <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
