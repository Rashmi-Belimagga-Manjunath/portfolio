"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    slug: "virelle",
    title: "VIRELLE",
    subtitle: "The Intelligent Hospitality Organisation",
    tags: ["AI Agents", "MCP", "FastAPI", "React"],
  },
  {
    slug: "sova",
    title: "SOVA",
    subtitle: "Calm Self-Reflection Product",
    tags: ["Product Strategy", "RAG", "LLM"],
  },
  {
    slug: "routeforge",
    title: "RouteForge AI",
    subtitle: "Intelligent AI Adoption Platform",
    tags: ["AI Strategy", "React", "TypeScript"],
  },
  {
    slug: "digital-story",
    title: "Digital Story",
    subtitle: "Interactive Storytelling Platform",
    tags: ["React", "TypeScript", "Lovable AI"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Selected Work
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium mb-16 md:mb-24">
          Products I&apos;ve built.
        </h1>
      </ScrollReveal>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <Link
              href={`/work/${project.slug}`}
              className="group block border border-border hover:border-border-hover transition-all duration-500 p-8 md:p-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted/40 uppercase mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium mb-3 group-hover:tracking-wide transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-sm text-muted mb-6">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-accent/60 group-hover:text-accent transition-colors duration-300">
                View Case Study →
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
