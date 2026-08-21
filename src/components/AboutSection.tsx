"use client";

import FadeIn from "./FadeIn";

const skills = [
  "Product Strategy",
  "AI / ML Products",
  "Data & Analytics",
  "Research & Publications",
  "User-Centric Design",
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Emotional Heading */}
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 72px)" }}
            >
              I&apos;ve always been<br />
              obsessed with<br />
              &ldquo;but why?&rdquo;
            </h2>
          </FadeIn>

          {/* Right Column — About Text */}
          <FadeIn delay={0.15}>
            <div
              className="relative px-6 py-8 sm:px-8 sm:py-10 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                className="absolute -top-px left-1/4 right-1/4 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(182, 0, 168, 0.4), transparent)",
                }}
              />

              <div className="relative z-10 space-y-4 leading-relaxed text-[#D7E2EA]" style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}>
                <p>
                  Why do people use one feature and completely ignore another?<br />
                  Why does a beautifully designed product still frustrate people?<br />
                  Why are we building something just because we <em>can</em>?
                </p>
                <p>
                  And now, in the age of AI — <strong>what should we actually be building?</strong>
                </p>
                <p>That curiosity is what pulled me into product.</p>
                <p>
                  I started out close to customers, moved into product, spent years learning how complex B2B software actually gets built, and eventually found myself somewhere I didn&apos;t quite expect: at the intersection of <strong>product, data and AI</strong>.
                </p>
                <p>I like that intersection. I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use.</p>
                <p>
                  I&apos;ve worked with LLMs, RAG, machine learning, product analytics and AI workflows; built products from scratch; explored what responsible AI adoption looks like for businesses; and taken my research into an academic workshop.
                  But honestly, <strong>the building is my favourite part.</strong>
                </p>
                <p>
                  Give me a vague problem, a blank screen, a terminal, 27 tabs open and a slightly unreasonable amount of curiosity — and I&apos;m happy.
                </p>
                <p>
                  I&apos;m currently pursuing an MSc in Artificial Intelligence for Business in Dublin, while figuring out what it means to build products in a world where the technology, possibilities and rules are changing almost daily.
                </p>
                <p>
                  Outside of product and AI, I&apos;m usually running, strength training, reading something I probably don&apos;t have enough time for, discovering a new café, or going down an unexpected rabbit hole about something completely unrelated.
                </p>
                <p>
                  And, for reasons I cannot scientifically explain, <strong>paper cuts absolutely terrify me.</strong>
                </p>
                <p>Not AI taking over the world. Not public speaking. Not launching something to thousands of users. <strong>Paper cuts.</strong></p>
                <p>
                  I don&apos;t want to just manage products. I want to understand them deeply enough to question them, build them, break them, improve them — and occasionally start again from scratch.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* I Work With */}
        <FadeIn delay={0.3}>
          <div className="mt-16 sm:mt-20">
            <h3 className="text-white font-bold text-lg mb-6">I work with</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2.5 rounded-lg text-center text-sm font-medium text-[#D7E2EA]/80"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Signature */}
        <FadeIn delay={0.4}>
          <p className="mt-10 text-[#D7E2EA]/40 text-sm italic">
            — Rashmi Manjunath
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
