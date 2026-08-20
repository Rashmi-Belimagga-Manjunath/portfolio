"use client";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const aboutText =
  "I've always been a little obsessed with the question but why? Why do people use one feature and completely ignore another? Why does a beautifully designed product still frustrate people? Why are we building something just because we can? And now, in the age of AI what should we actually be building? That curiosity is what pulled me into product. I started out close to customers, moved into product, spent years learning how complex B2B software actually gets built, and eventually found myself somewhere I didn't quite expect: at the intersection of product, data and AI. I like that intersection. I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use.";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated Text */}
      <FadeIn delay={0.2} className="mb-16 sm:mb-20 md:mb-24">
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </FadeIn>

      {/* Contact Button */}
      <FadeIn delay={0.4}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
