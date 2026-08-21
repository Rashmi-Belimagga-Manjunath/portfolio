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

      {/* Full About Text */}
      <div className="max-w-[700px] mx-auto mb-16 sm:mb-20 md:mb-24 space-y-5 text-[#D7E2EA] leading-relaxed" style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" }}>
        <FadeIn delay={0.1}>
          <p>
            I&apos;ve always been a little obsessed with the question <strong>&ldquo;but why?&rdquo;</strong>
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p>
            Why do people use one feature and completely ignore another?<br />
            Why does a beautifully designed product still frustrate people?<br />
            Why are we building something just because we <em>can</em>?<br />
            And now, in the age of AI — <strong>what should we actually be building?</strong>
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p>That curiosity is what pulled me into product.</p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p>
            I started out close to customers, moved into product, spent years learning how complex B2B software actually gets built, and eventually found myself somewhere I didn&apos;t quite expect: at the intersection of <strong>product, data and AI</strong>.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p>I like that intersection.</p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p>
            I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p>
            These days, I&apos;m particularly fascinated by AI products — not the <em>&ldquo;let&apos;s put a chatbot on it&rdquo;</em> kind, but the harder questions underneath:
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p>
            <strong>Where does AI genuinely create leverage? Where should humans stay firmly in the loop? How do we make AI useful without making it unpredictable? And how do we build products people can trust, not just products that can generate impressive demos?</strong>
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p>So I&apos;ve started answering those questions by building.</p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p>
            I&apos;ve worked with LLMs, RAG, machine learning, product analytics and AI workflows; built products from scratch; explored what responsible AI adoption looks like for businesses; and taken my research into an academic workshop.
            But honestly, <strong>the building is my favourite part.</strong>
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p>
            Give me a vague problem, a blank screen, a terminal, 27 tabs open and a slightly unreasonable amount of curiosity — and I&apos;m happy.
          </p>
        </FadeIn>

        <FadeIn delay={0.65}>
          <p>
            I&apos;m also the kind of person who occasionally looks at a perfectly reasonable amount of ambition and thinks, <strong>&ldquo;What if I did all of it?&rdquo;</strong>
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p>So I do.</p>
        </FadeIn>

        <FadeIn delay={0.75}>
          <p>
            Sometimes I take on too many things because somewhere in the back of my mind is the fear that <em>if I don&apos;t try this, I&apos;ll waste some version of my potential.</em>
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p>And sometimes that means I burn myself out.</p>
        </FadeIn>

        <FadeIn delay={0.85}>
          <p>
            I&apos;m learning that potential isn&apos;t something you have to prove by doing everything. Sometimes the more ambitious thing is choosing <strong>what deserves your energy</strong> — and letting the rest wait.
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p>
            I&apos;m currently pursuing an MSc in Artificial Intelligence for Business in Dublin, while figuring out what it means to build products in a world where the technology, possibilities and rules are changing almost daily.
          </p>
        </FadeIn>

        <FadeIn delay={0.95}>
          <p>
            Outside of product and AI, I&apos;m usually running, strength training, reading something I probably don&apos;t have enough time for, discovering a new café, or going down an unexpected rabbit hole about something completely unrelated.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <p>
            And, for reasons I cannot scientifically explain, <strong>paper cuts absolutely terrify me.</strong>
          </p>
        </FadeIn>

        <FadeIn delay={1.05}>
          <p>
            Yes.<br />
            Not AI taking over the world.<br />
            Not public speaking.<br />
            Not launching something to thousands of users.
          </p>
        </FadeIn>

        <FadeIn delay={1.1}>
          <p><strong>Paper cuts.</strong></p>
        </FadeIn>

        <FadeIn delay={1.15}>
          <p>I think that says something about me.</p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <p>
            I&apos;m serious about the things that matter, but I don&apos;t think a person should ever become so polished that you can&apos;t see the slightly weird, curious, imperfect human underneath.
          </p>
        </FadeIn>

        <FadeIn delay={1.25}>
          <p>So no, I don&apos;t want to just manage products.</p>
        </FadeIn>

        <FadeIn delay={1.3}>
          <p>
            I want to understand them deeply enough to question them, build them, break them, improve them — and occasionally start again from scratch.
          </p>
        </FadeIn>

        <FadeIn delay={1.35}>
          <div className="pt-4">
            <p><strong>Interesting problems.</strong></p>
            <p><strong>Ambitious people.</strong></p>
            <p><strong>Useful technology.</strong></p>
            <p><strong>And products worth building.</strong></p>
          </div>
        </FadeIn>

        <FadeIn delay={1.4}>
          <p>That&apos;s what I&apos;m looking for next.</p>
        </FadeIn>
      </div>

      {/* Contact Button */}
      <FadeIn delay={1.5}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
