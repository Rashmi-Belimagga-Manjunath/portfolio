"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import projects from "@/data/projects.json";

const totalCards = projects.length;

const caseStudyFields = [
  { key: "problem", label: "The problem" },
  { key: "insight", label: "What insight made me care" },
  { key: "users", label: "Who is experiencing it" },
  { key: "hypothesis", label: "Product hypothesis" },
  { key: "aiArchitecture", label: "Where does AI enter" },
  { key: "decisionsNotBuilt", label: "What I deliberately did NOT build" },
  { key: "evaluation", label: "How I evaluated it" },
  { key: "tradeoffs", label: "What I struggled with" },
  { key: "outcome", label: "What happened" },
  { key: "next", label: "What I'd build next" },
];

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

  const cs = project.caseStudy;

  return (
    <div ref={cardRef} className="relative" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-4">
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
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-2.5 text-xs hover:bg-[#D7E2EA]/10 transition-colors self-start"
          >
            {project.liveUrl.includes("github.com") ? "View Code" : "View Live"}
          </a>
        </div>

        {/* Tagline */}
        <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl">
          {project.tagline}
        </p>

        {/* Screenshots */}
        <div className="grid grid-cols-5 gap-3 mb-5">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(100px, 12vw, 180px)" }}>
              <img src={project.images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden" style={{ height: "clamp(120px, 16vw, 260px)" }}>
              <img src={project.images[1]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-3 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden">
            <img src={project.images[2]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] text-[#D7E2EA]/40 uppercase tracking-wider"
              style={{ background: "rgba(255, 255, 255, 0.04)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case Study */}
        <div className="border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {caseStudyFields.map(({ key, label }) => (
              <div key={key}>
                <p className="text-[#B600A8] text-xs uppercase tracking-widest font-medium mb-1.5">
                  {label}
                </p>
                <p className="text-[#D7E2EA]/70 text-sm leading-relaxed">
                  {cs[key as keyof typeof cs]}
                </p>
              </div>
            ))}
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
