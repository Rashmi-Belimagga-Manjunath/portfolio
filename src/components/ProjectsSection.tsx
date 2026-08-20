"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const projects = [
  {
    number: "01",
    name: "VIRELLE",
    category: "AI Product",
    description: "AI-powered matchmaking platform with behavioral science and NLP. Built end-to-end in 48 hours.",
    tags: ["AI Agents", "MCP", "FastAPI", "React"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=600&fit=crop",
    ],
  },
  {
    number: "02",
    name: "SOVA",
    category: "AI Strategy",
    description: "Autonomous AI travel companion. Product strategy and go-to-market framework.",
    tags: ["Product Strategy", "RAG", "LLM"],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=600&fit=crop",
    ],
  },
  {
    number: "03",
    name: "RouteForge AI",
    category: "AI Platform",
    description: "AI-powered logistics optimization engine targeting EU SMBs.",
    tags: ["AI Strategy", "React", "TypeScript"],
    images: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop",
    ],
  },
  {
    number: "04",
    name: "Digital Story",
    category: "Research",
    description: "Human-AI collaboration in personal safety and narrative generation.",
    tags: ["AI", "Research", "UX"],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=600&fit=crop",
    ],
  },
];

const totalCards = projects.length;

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - 1 - index) * 0.03]
  );

  return (
    <div ref={cardRef} className="h-[85vh] relative" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">{project.category}</p>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA]">{project.name}</h3>
            </div>
          </div>
          <a
            href="#"
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors self-start"
          >
            Live Project
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-5 gap-3">
          {/* Left column - 2 stacked images */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(130px, 16vw, 230px)" }}>
              <img src={project.images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(160px, 22vw, 340px)" }}>
              <img src={project.images[1]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right column - 1 tall image */}
          <div className="col-span-3 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden">
            <img src={project.images[2]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
