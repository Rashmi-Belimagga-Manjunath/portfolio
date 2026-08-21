"use client";

import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16"
          style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
        >
          A little about me
        </h2>
      </FadeIn>

      {/* Vintage Paper Card */}
      <FadeIn delay={0.1} className="w-full max-w-[750px] mb-16 sm:mb-20 md:mb-24">
        <div
          className="relative px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-18 rounded-sm"
          style={{
            background: "linear-gradient(135deg, #f4ecd8 0%, #ebe3cf 25%, #f0e8d4 50%, #e8dfc8 75%, #f2ead6 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4), inset 0 0 60px rgba(0,0,0,0.05)",
            border: "1px solid #d4c9a8",
          }}
        >
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 rounded-sm"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 28px,
                rgba(139, 119, 80, 0.08) 28px,
                rgba(139, 119, 80, 0.08) 29px
              )`,
            }}
          />

          {/* Corner fold effect */}
          <div
            className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16"
            style={{
              background: "linear-gradient(225deg, #0C0C0C 0%, #0C0C0C 50%, #d4c9a8 50%, #e8dfc8 100%)",
              borderBottomLeftRadius: "4px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 space-y-5 leading-relaxed" style={{ color: "#3a3226", fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)" }}>
            <p>
              I&apos;ve always been a little obsessed with the question <strong>&ldquo;but why?&rdquo;</strong>
            </p>

            <p>
              Why do people use one feature and completely ignore another?<br />
              Why does a beautifully designed product still frustrate people?<br />
              Why are we building something just because we <em>can</em>?<br />
              And now, in the age of AI — <strong>what should we actually be building?</strong>
            </p>

            <p>That curiosity is what pulled me into product.</p>

            <p>
              I started out close to customers, moved into product, spent years learning how complex B2B software actually gets built, and eventually found myself somewhere I didn&apos;t quite expect: at the intersection of <strong>product, data and AI</strong>.
            </p>

            <p>I like that intersection.</p>

            <p>
              I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use.
            </p>

            <p>
              These days, I&apos;m particularly fascinated by AI products — not the <em>&ldquo;let&apos;s put a chatbot on it&rdquo;</em> kind, but the harder questions underneath:
            </p>

            <p>
              <strong>Where does AI genuinely create leverage? Where should humans stay firmly in the loop? How do we make AI useful without making it unpredictable? And how do we build products people can trust, not just products that can generate impressive demos?</strong>
            </p>

            <p>So I&apos;ve started answering those questions by building.</p>

            <p>
              I&apos;ve worked with LLMs, RAG, machine learning, product analytics and AI workflows; built products from scratch; explored what responsible AI adoption looks like for businesses; and taken my research into an academic workshop.
              But honestly, <strong>the building is my favourite part.</strong>
            </p>

            <p>
              Give me a vague problem, a blank screen, a terminal, 27 tabs open and a slightly unreasonable amount of curiosity — and I&apos;m happy.
            </p>

            <p>
              I&apos;m also the kind of person who occasionally looks at a perfectly reasonable amount of ambition and thinks, <strong>&ldquo;What if I did all of it?&rdquo;</strong>
            </p>

            <p>So I do.</p>

            <p>
              Sometimes I take on too many things because somewhere in the back of my mind is the fear that <em>if I don&apos;t try this, I&apos;ll waste some version of my potential.</em>
            </p>

            <p>And sometimes that means I burn myself out.</p>

            <p>
              I&apos;m learning that potential isn&apos;t something you have to prove by doing everything. Sometimes the more ambitious thing is choosing <strong>what deserves your energy</strong> — and letting the rest wait.
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

            <p>
              Yes.<br />
              Not AI taking over the world.<br />
              Not public speaking.<br />
              Not launching something to thousands of users.
            </p>

            <p><strong>Paper cuts.</strong></p>

            <p>I think that says something about me.</p>

            <p>
              I&apos;m serious about the things that matter, but I don&apos;t think a person should ever become so polished that you can&apos;t see the slightly weird, curious, imperfect human underneath.
            </p>

            <p>So no, I don&apos;t want to just manage products.</p>

            <p>
              I want to understand them deeply enough to question them, build them, break them, improve them — and occasionally start again from scratch.
            </p>

            <div className="pt-4">
              <p><strong>Interesting problems.</strong></p>
              <p><strong>Ambitious people.</strong></p>
              <p><strong>Useful technology.</strong></p>
              <p><strong>And products worth building.</strong></p>
            </div>

            <p>That&apos;s what I&apos;m looking for next.</p>
          </div>
        </div>
      </FadeIn>

      {/* Contact Button */}
      <FadeIn delay={1.5}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
