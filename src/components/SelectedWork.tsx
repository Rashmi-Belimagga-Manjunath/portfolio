"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: "virelle",
    title: "VIRELLE",
    subtitle: "The Intelligent Hospitality Organisation",
    description:
      "A pitch-ready AI organisation for a five-star Dublin hotel. Five specialised AI agents run a complete business operation from live data to a final signed decision, powered by a real MCP server.",
    tags: ["AI Agents", "MCP", "FastAPI", "React", "SQLite"],
    role: "Product Manager & AI Builder",
    color: "#c8a97e",
    github: "https://github.com/Rashmi-Belimagga-Manjunath/VIRELLE",
    demo: "https://rashmi-belimagga-manjunath.github.io/VIRELLE/",
    link: "/work/virelle",
  },
  {
    id: "sova",
    title: "SOVA",
    subtitle: "Calm Self-Reflection Product",
    description:
      "A calm self-reflection app designed around small, pressure-free daily rituals. Rejects gamification and anxiety-driven engagement in favour of emotional safety and returnability.",
    tags: ["Product Strategy", "RAG", "LLM", "UX Design", "Jira"],
    role: "Senior Product Strategist",
    color: "#7eb5a8",
    github: null,
    demo: null,
    link: "/work/sova",
  },
  {
    id: "routeforge",
    title: "RouteForge AI",
    subtitle: "Intelligent AI Adoption Platform",
    description:
      "An AI adoption platform targeting the 80%+ of EU SMBs yet to integrate AI. Delivers personalised, phased roadmaps in under 10 minutes with EU AI Act compliance guidance.",
    tags: ["AI Strategy", "React", "TypeScript", "EU AI Act", "Product"],
    role: "Co-Founder & Product Lead",
    color: "#8b9ec8",
    github: "https://github.com/Rashmi-Belimagga-Manjunath/routeforgeai",
    demo: null,
    link: "/work/routeforge",
  },
  {
    id: "digital-story",
    title: "Digital Story",
    subtitle: "Interactive Storytelling Platform",
    description:
      "An interactive digital storytelling platform combining narrative, multimedia, and UI design for engaging story experiences. Built with React, TypeScript, and Lovable AI.",
    tags: ["React", "TypeScript", "Tailwind", "Lovable AI"],
    role: "Product & Build",
    color: "#c89b8b",
    github: "https://github.com/Rashmi-Belimagga-Manjunath/digitalstory",
    demo: "https://digitalstory.lovable.app/",
    link: "/work/digital-story",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group block relative"
    >
      <div className="border border-border hover:border-border-hover transition-all duration-500 p-8 md:p-10 relative overflow-hidden">
        {/* Accent line */}
        <div
          className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
          style={{ backgroundColor: project.color }}
        />

        {/* Number */}
        <span className="text-[10px] tracking-[0.3em] text-muted/40 uppercase mb-6 block">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium mb-3 group-hover:tracking-wide transition-all duration-500">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-muted mb-6">{project.subtitle}</p>

        {/* Description */}
        <p className="text-sm md:text-base text-muted/70 max-w-xl leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted/60 group-hover:border-border-hover group-hover:text-muted transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted/50">{project.role}</span>
          <div className="flex items-center gap-4">
            {project.github && (
              <span className="text-xs text-muted/40 group-hover:text-accent transition-colors duration-300">
                GitHub
              </span>
            )}
            {project.demo && (
              <span className="text-xs text-muted/40 group-hover:text-accent transition-colors duration-300">
                Live Demo
              </span>
            )}
            <span className="text-xs tracking-[0.15em] uppercase text-accent/60 group-hover:text-accent transition-colors duration-300">
              View Case Study →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Selected Work
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-16 md:mb-24 max-w-2xl">
          Products I&apos;ve built and strategy I&apos;ve shaped.
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
