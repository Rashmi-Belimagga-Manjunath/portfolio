"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden">
      {/* Decorative images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" width={210} height={210} className="w-[120px] sm:w-[160px] md:w-[210px] h-auto opacity-20" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" width={180} height={180} className="w-[100px] sm:w-[140px] md:w-[180px] h-auto opacity-20" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" width={210} height={210} className="w-[120px] sm:w-[160px] md:w-[210px] h-auto opacity-20" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" width={220} height={220} className="w-[130px] sm:w-[170px] md:w-[220px] h-auto opacity-20" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Text */}
        <AnimatedText
          text="Why do people use one feature and completely ignore another? Why does a beautifully designed product still frustrate people? That curiosity is what pulled me into product. I started out close to customers, moved into product, and eventually found myself at the intersection of product, data and AI. I like taking a messy problem, sitting with it longer than most people would, finding the signal buried underneath the noise, and turning it into something people can actually use."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        {/* Contact Button */}
        <ContactButton />
      </div>
    </section>
  );
}
