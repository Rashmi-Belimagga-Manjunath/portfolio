"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--nav-text)] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-[12vh] sm:mt-[14vh]"
            style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
          >
            Hi, I&apos;m Rashmi Manjunath
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] bottom-16 sm:bottom-20">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <Image
            src="/images/profile-hero.png"
            alt="Rashmi Manjunath"
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[var(--nav-text)] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[180px] md:max-w-[220px]"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 1.2rem)" }}
          >
            a product manager driven by building striking and unforgettable products
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
