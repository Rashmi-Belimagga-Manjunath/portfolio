"use client";

const experiences = [
  {
    role: "Product Manager — AI Products",
    company: "Freelance / Contract",
    period: "2024 – Present",
    description: "Building AI-enabled products including VIRELLE (AI matchmaking), SOVA (AI travel companion), and RouteForge AI (logistics optimization). Conducting research on RAG architectures.",
  },
  {
    role: "Product Manager",
    company: "Aurigo Technologies",
    period: "2022 – 2024",
    description: "Led product strategy for infrastructure technology SaaS platform. Drove 18% feature adoption gain through data-driven product decisions.",
  },
  {
    role: "Product Manager",
    company: "Zenefits",
    period: "2020 – 2022",
    description: "Managed B2B SaaS HR platform. Ran A/B experiments contributing to $3M revenue impact.",
  },
  {
    role: "Product Manager",
    company: "Blackstone / Permanent TSB",
    period: "2018 – 2020",
    description: "Product management for banking and financial services technology.",
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
