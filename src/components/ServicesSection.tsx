"use client";

import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    name: "Product Strategy",
    description: "Defining product vision, roadmap, and go-to-market strategy based on customer insights, market analysis, and business objectives.",
  },
  {
    number: "02",
    name: "AI / ML Build",
    description: "Building AI-powered products using LLMs, RAG architectures, and machine learning workflows that solve real business problems.",
  },
  {
    number: "03",
    name: "Data & Analytics",
    description: "Leveraging data to drive product decisions through A/B testing, feature adoption analysis, KPI dashboards, and funnel optimization.",
  },
  {
    number: "04",
    name: "Research",
    description: "Conducting product research, user interviews, and academic work on responsible AI adoption and retrieval-augmented generation.",
  },
  {
    number: "05",
    name: "User-Centric Design",
    description: "Translating complex business requirements into intuitive user experiences through PRDs, wireframes, and close collaboration with design and engineering.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]">
              <span
                className="font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
