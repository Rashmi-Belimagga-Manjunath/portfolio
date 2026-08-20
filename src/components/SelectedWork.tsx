"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    slug: "virelle",
    title: "VIRELLE",
    subtitle: "The Intelligent Hospitality Organisation",
    description: "Five-agent AI system running a complete business operation from live data to executive decision.",
    tags: ["AI Agents", "MCP", "FastAPI", "React"],
    color: "#2563eb",
  },
  {
    slug: "sova",
    title: "SOVA",
    subtitle: "Calm Self-Reflection Product",
    description: "A product designed around pressure-free daily rituals. Rejects gamification for emotional safety.",
    tags: ["Product Strategy", "RAG", "LLM"],
    color: "#059669",
  },
  {
    slug: "routeforge",
    title: "RouteForge AI",
    subtitle: "Intelligent AI Adoption Platform",
    description: "Personalised AI roadmaps for EU SMBs in under 10 minutes with EU AI Act compliance.",
    tags: ["AI Strategy", "React", "TypeScript"],
    color: "#7c3aed",
  },
  {
    slug: "digital-story",
    title: "Digital Story",
    subtitle: "Interactive Storytelling Platform",
    description: "Interactive digital storytelling combining narrative, multimedia, and thoughtful UI design.",
    tags: ["React", "TypeScript", "Lovable AI"],
    color: "#ea580c",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={`/work/${project.slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-white hover:border-border-hover hover:shadow-lg transition-all duration-300">
        {/* Color bar */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: project.color }}
        />

        <div className="p-6">
          <p className="text-xs text-muted-light mb-2">{project.subtitle}</p>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-xs font-medium text-accent group-hover:underline">
            View Case Study →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Selected Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects I&apos;ve built.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
