"use client";

import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-[700px] mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
            style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
          >
            A little about me
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-6 text-[#D7E2EA]" style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)" }}>
            <p className="leading-relaxed">
              I&apos;ve always been a little obsessed with the question{" "}
              <span className="text-white font-black text-lg sm:text-xl">&ldquo;but why?&rdquo;</span>
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              Why do people use one feature and completely ignore another?<br />
              Why does a beautifully designed product still frustrate people?<br />
              Why are we building something just because we <em>can</em>?
            </p>

            <p className="leading-relaxed">
              That curiosity is what pulled me into product.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use. Over the years, that has meant working across B2B SaaS, product analytics, strategy, and now increasingly AI.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              Lately, I&apos;ve been especially interested in the space where{" "}
              <span className="text-white font-bold">product thinking meets AI</span>{" "}
              — not just using AI because it&apos;s exciting, but figuring out where it genuinely makes a product better. That&apos;s led me to building my own AI products, experimenting with new tools, researching AI-assisted product decision-making, and pursuing an MSc in Artificial Intelligence for Business.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I&apos;m also learning that being ambitious doesn&apos;t mean saying yes to everything. Sometimes I take on too many things because there&apos;s this little voice in my head saying{" "}
              <em className="text-[#D7E2EA]/50">&ldquo;what if you&apos;re wasting your potential?&rdquo;</em>{" "}
              I&apos;m learning to replace that with a better question:
            </p>

            <p className="leading-relaxed">
              <span className="text-white font-bold">&ldquo;What is actually worth my energy?&rdquo;</span>
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              Outside of product, you&apos;ll usually find me taking photographs, exploring somewhere new, getting overly excited about a good cafe, or falling down an internet rabbit hole about something I absolutely did not need to know.
            </p>

            <div className="py-8 text-center">
              <p className="leading-relaxed text-[#D7E2EA]/70 mb-4">
                And one completely unnecessary fact about me:
              </p>
              <p className="text-white font-black text-lg sm:text-xl">
                I&apos;m terrified of paper cuts.
              </p>
              <p className="leading-relaxed text-[#D7E2EA]/50 mt-4 text-[0.9em]">
                Not AI taking over the world.<br />
                Not public speaking.<br />
                Not launching something to thousands of users.
              </p>
              <p className="mt-3">
                <span className="text-white font-black text-xl">Paper cuts.</span>
              </p>
            </div>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I don&apos;t have everything figured out — and honestly, I don&apos;t think I want to. I&apos;m more interested in staying curious, building things that matter, and becoming a little better at asking{" "}
              <span className="text-white font-bold">&ldquo;but why?&rdquo;</span>{" "}
              before asking <span className="text-white font-bold">&ldquo;what should we build?&rdquo;</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
