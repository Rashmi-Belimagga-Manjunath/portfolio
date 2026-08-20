"use client";

const projects = [
  {
    name: "VIRELLE",
    status: "done" as const,
    description: "AI-powered matchmaking platform with behavioral science and NLP. Built end-to-end in 48 hours.",
    tags: ["AI/ML", "Python", "NLP"],
    link: "/work/virelle",
  },
  {
    name: "SOVA",
    status: "done" as const,
    description: "Autonomous AI travel companion. Product strategy and go-to-market framework.",
    tags: ["AI Strategy", "Product Research"],
    link: "/work/sova",
  },
  {
    name: "RouteForge AI",
    status: "done" as const,
    description: "AI-powered logistics optimization engine. Built with Gemini and Google Maps Platform.",
    tags: ["AI/ML", "Python", "Logistics"],
    link: "/work/routeforge",
  },
  {
    name: "Digital Story",
    status: "done" as const,
    description: "Prototype exploring human-AI collaboration in personal safety and narrative generation.",
    tags: ["AI", "Research", "UX"],
    link: "/work/digital-story",
  },
  {
    name: "RAG Research",
    status: "live" as const,
    description: "Ongoing research on Retrieval-Augmented Generation architectures for enterprise knowledge bases.",
    tags: ["Research", "NLP", "Python"],
    link: "#",
  },
];

const statusColors: Record<string, string> = {
  done: "bg-green-100 text-green-700",
  live: "bg-blue-100 text-blue-700",
  wip: "bg-orange-100 text-orange-700",
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
