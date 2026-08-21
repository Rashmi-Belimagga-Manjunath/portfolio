"use client";

import FadeIn from "./FadeIn";

const contactItems = [
  {
    label: "Email",
    value: "rashmimanjunath95@gmail.com",
    href: "mailto:rashmimanjunath95@gmail.com?subject=Hello%20Rashmi",
  },
  {
    label: "LinkedIn",
    value: "/in/rashmi-manjunath",
    href: "https://linkedin.com/in/rashmi-manjunath",
  },
  {
    label: "GitHub",
    value: "github.com/Rashmi-Belimagga-Manjunath",
    href: "https://github.com/Rashmi-Belimagga-Manjunath",
  },
  {
    label: "Phone",
    value: "+353 894125300",
    href: "tel:+353894125300",
  },
  {
    label: "Location",
    value: "Dublin, Ireland",
    href: null,
  },
  {
    label: "Availability",
    value: "Open to PM roles · Immediately available",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[700px] mx-auto">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase mb-6"
          style={{ fontSize: "clamp(2.5rem, 10vw, 100px)" }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[#D7E2EA] text-sm sm:text-base leading-relaxed mb-12 max-w-lg" style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)" }}>
          Hiring for a PM role, or want to build from zero?<br />
          Actively looking for product roles where 0→1 instinct and founder mindset are the point — not a footnote.
        </p>
      </FadeIn>

      <div className="space-y-0">
        {contactItems.map((item, i) => (
          <FadeIn key={item.label} delay={0.15 + i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-baseline py-4 border-b border-white/10">
              <span className="text-white font-medium text-sm w-32 flex-shrink-0 mb-1 sm:mb-0">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#D7E2EA]/70 hover:text-white hover:underline transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-[#D7E2EA]/70 text-sm">{item.value}</span>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="text-[#D7E2EA]/20 text-xs mt-12">
          © 2026 · Rashmi Manjunath
        </p>
      </FadeIn>
    </section>
  );
}
