"use client";

import ScrollReveal from "./ScrollReveal";

const aiProjects = [
  {
    title: "VIRELLE",
    description: "Five-agent AI system with MCP server, live data, and React frontend.",
    link: "/work/virelle",
  },
  {
    title: "SOVA AI Assistant",
    description: "RAG-based product documentation retrieval and backlog analysis.",
    link: "/work/sova",
  },
  {
    title: "RouteForge AI",
    description: "AI adoption platform for EU SMBs with compliance guidance.",
    link: "/work/routeforge",
  },
  {
    title: "Hospital Readmission Model",
    description: "ML-based decision support for healthcare — interpretable and GDPR-aware.",
    link: "#",
  },
];

export default function BuildWithAI() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <div className="bg-surface rounded-2xl p-8 md:p-12">
          <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Build</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I build with AI.
          </h2>
          <p className="text-muted max-w-xl mb-10">
            I don&apos;t just talk about AI. I build with it. Every project involves hands-on
            work with LLMs, RAG architectures, multi-agent systems, or machine learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.05}>
                <a
                  href={project.link}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-accent mt-0.5">→</span>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted">{project.description}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
