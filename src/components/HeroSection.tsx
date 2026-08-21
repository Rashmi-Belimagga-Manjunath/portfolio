"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-12">
      <FadeIn delay={0} y={30} className="w-full max-w-[600px]">
        <div
          className="relative rounded-3xl p-8 sm:p-10 md:p-12 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Purple glow accent */}
          <div
            className="absolute -top-px left-1/4 right-1/4 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(182, 0, 168, 0.4), transparent)",
            }}
          />

          {/* Portrait */}
          <FadeIn delay={0.1} className="mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="/images/profile-hero.png"
                alt="Rashmi Manjunath"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.2}>
            <p className="text-[#D7E2EA]/50 text-sm mb-2">Hey.</p>
            <h1 className="hero-heading font-black text-3xl sm:text-4xl md:text-5xl mb-3">
              I&apos;m Rashmi.
            </h1>
            <p className="text-[#D7E2EA]/70 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
              Product Manager & AI Product Builder based in Dublin
            </p>
          </FadeIn>

          {/* Nav Links */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#D7E2EA]/70 hover:text-white hover:bg-white/5 transition-all"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
