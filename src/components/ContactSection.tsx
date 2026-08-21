"use client";

import FadeIn from "./FadeIn";

const contactItems = [
  { label: "Email", value: "rashmimanjunath95@gmail.com", href: "mailto:rashmimanjunath95@gmail.com?subject=Hello%20Rashmi", icon: "✉️" },
  { label: "LinkedIn", value: "/in/rashmi-manjunath", href: "https://linkedin.com/in/rashmi-manjunath", icon: "💼" },
  { label: "GitHub", value: "github.com/Rashmi-Belimagga-Manjunath", href: "https://github.com/Rashmi-Belimagga-Manjunath", icon: "🐙" },
  { label: "Location", value: "Dublin, Ireland", href: null, icon: "📍" },
  { label: "Availability", value: "Open to PM roles · Immediately available", href: null, icon: "🟢" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <h2 className="text-white font-black mb-6" style={{ fontSize: "clamp(2.5rem, 10vw, 100px)" }}>
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[#D7E2EA] text-sm sm:text-base leading-relaxed mb-12 max-w-lg" style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)" }}>
          Hiring for a PM role, or want to build from zero?<br />
          Actively looking for product roles where 0→1 instinct and founder mindset are the point — not a footnote.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactItems.map((item, i) => (
          <FadeIn key={item.label} delay={0.15 + i * 0.05}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block rounded-2xl p-6 transition-all hover:bg-white/5 group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                <p className="text-[#D7E2EA]/60 text-xs group-hover:text-[#D7E2EA]/80 transition-colors break-all">{item.value}</p>
              </a>
            ) : (
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                <p className="text-[#D7E2EA]/60 text-xs">{item.value}</p>
              </div>
            )}
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
