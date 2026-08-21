"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import projects from "@/data/projects.json";

const totalCards = projects.length;

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-gray-200 bg-white p-4 sm:p-6 md:p-8 origin-top shadow-lg"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">{project.category}</p>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#1A1A1A]">{project.name}</h3>
            </div>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-white transition-all hover:opacity-90"
            style={{ background: "var(--accent-gradient)" }}
          >
            {project.liveUrl.includes("github.com") ? "View Code" : "View Live"}
          </a>
        </div>

        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(130px, 16vw, 230px)" }}>
              <img src={project.images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(160px, 22vw, 340px)" }}>
              <img src={project.images[1]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
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
    <section id="projects" className="bg-[#F3F0EC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
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
