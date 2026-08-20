"use client";

import Link from "next/link";

const projects = [
  {
    slug: "virelle",
    title: "VIRELLE",
    subtitle: "AI-powered matchmaking platform with behavioral science and NLP",
    tags: ["AI Agents", "MCP", "FastAPI", "React"],
  },
  {
    slug: "sova",
    title: "SOVA",
    subtitle: "Autonomous AI travel companion — product strategy and GTM",
    tags: ["Product Strategy", "RAG", "LLM"],
  },
  {
    slug: "routeforge",
    title: "RouteForge AI",
    subtitle: "AI-powered logistics optimization engine",
    tags: ["AI Strategy", "React", "TypeScript"],
  },
  {
    slug: "digital-story",
    title: "Digital Story",
    subtitle: "Human-AI collaboration in personal safety and narrative generation",
    tags: ["React", "TypeScript", "Lovable AI"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Selected Work</h1>
      <p className="text-gray-500 text-sm mb-10">Case studies from products I&apos;ve built.</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block border border-gray-200 rounded-lg hover:shadow-md transition-all p-6"
          >
            <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3">{project.subtitle}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
              View Case Study →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
