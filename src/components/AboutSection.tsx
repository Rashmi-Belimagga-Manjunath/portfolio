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
              And now, in the age of AI —{" "}
              <span className="text-white font-bold">what should we actually be building?</span>
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              That curiosity is what pulled me into product.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I started out close to customers, moved into product, spent years learning how complex B2B software actually gets built, and eventually found myself somewhere I didn&apos;t quite expect: at the intersection of{" "}
              <span className="text-white font-bold">product, data and AI</span>.
            </p>

            <p className="leading-relaxed">
              I like that intersection.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              These days, I&apos;m particularly fascinated by AI products — not the{" "}
              <em className="text-[#D7E2EA]/50">&ldquo;let&apos;s put a chatbot on it&rdquo;</em>{" "}
              kind, but the harder questions underneath:
            </p>

            <p className="leading-relaxed text-white font-medium pl-4 border-l-2 border-[#B600A8]/40">
              Where does AI genuinely create leverage?<br />
              Where should humans stay firmly in the loop?<br />
              How do we make AI useful without making it unpredictable?<br />
              And how do we build products people can trust, not just products that can generate impressive demos?
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              So I&apos;ve started answering those questions by building.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I&apos;ve worked with LLMs, RAG, machine learning, product analytics and AI workflows; built products from scratch; explored what responsible AI adoption looks like for businesses; and taken my research into an academic workshop.
              But honestly,{" "}
              <span className="text-white font-bold">the building is my favourite part.</span>
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              Give me a vague problem, a blank screen, a terminal, 27 tabs open and a slightly unreasonable amount of curiosity — and I&apos;m happy.
            </p>

            <div className="py-6 border-t border-b border-white/5 my-8">
              <p className="leading-relaxed text-[#D7E2EA]/60 text-[0.9em]">
                I&apos;m also the kind of person who occasionally looks at a perfectly reasonable amount of ambition and thinks,{" "}
                <span className="text-[#D7E2EA]/80 font-medium">&ldquo;What if I did all of it?&rdquo;</span>
              </p>

              <p className="leading-relaxed text-[#D7E2EA]/60 text-[0.9em] mt-4">
                So I do.
              </p>

              <p className="leading-relaxed text-[#D7E2EA]/50 text-[0.9em] mt-4">
                Sometimes I take on too many things because somewhere in the back of my mind is the fear that{" "}
                <em>if I don&apos;t try this, I&apos;ll waste some version of my potential.</em>
              </p>

              <p className="leading-relaxed text-[#D7E2EA]/50 text-[0.9em] mt-4">
                And sometimes that means I burn myself out.
              </p>

              <p className="leading-relaxed text-[#D7E2EA]/70 text-[0.9em] mt-4">
                I&apos;m learning that potential isn&apos;t something you have to prove by doing everything. Sometimes the more ambitious thing is choosing{" "}
                <span className="text-white font-medium">what deserves your energy</span>{" "}
                — and letting the rest wait.
              </p>
            </div>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I&apos;m currently pursuing an MSc in Artificial Intelligence for Business in Dublin, while figuring out what it means to build products in a world where the technology, possibilities and rules are changing almost daily.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              Outside of product and AI, I&apos;m usually running, strength training, reading something I probably don&apos;t have enough time for, discovering a new café, or going down an unexpected rabbit hole about something completely unrelated.
            </p>

            <div className="py-8 text-center">
              <p className="leading-relaxed text-[#D7E2EA]/70">
                And, for reasons I cannot scientifically explain,{" "}
                <span className="text-white font-black text-lg">paper cuts absolutely terrify me.</span>
              </p>
              <p className="leading-relaxed text-[#D7E2EA]/50 mt-3 text-[0.9em]">
                Yes.<br />
                Not AI taking over the world.<br />
                Not public speaking.<br />
                Not launching something to thousands of users.
              </p>
              <p className="mt-3">
                <span className="text-white font-black text-xl">Paper cuts.</span>
              </p>
              <p className="text-[#D7E2EA]/40 text-[0.85em] mt-2 italic">
                I think that says something about me.
              </p>
            </div>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              I&apos;m serious about the things that matter, but I don&apos;t think a person should ever become so polished that you can&apos;t see the slightly weird, curious, imperfect human underneath.
            </p>

            <p className="leading-relaxed text-[#D7E2EA]/70">
              So no, I don&apos;t want to just manage products.
            </p>

            <p className="leading-relaxed">
              I want to understand them deeply enough to question them, build them, break them, improve them — and occasionally start again from scratch.
            </p>

            <div className="py-6 text-center mt-8">
              <p className="text-white font-bold text-lg sm:text-xl leading-loose">
                Interesting problems.<br />
                Ambitious people.<br />
                Useful technology.<br />
                <span className="hero-heading font-black text-xl sm:text-2xl">And products worth building.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
