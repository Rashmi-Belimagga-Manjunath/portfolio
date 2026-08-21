"use client";

import FadeIn from "./FadeIn";

const steps = [
  { label: "The problem", text: "Who has it? Why does it matter?" },
  { label: "The behaviour", text: "Why does it happen? What are people actually doing?" },
  { label: "The constraint", text: "What's stopping us? What's the real blocker?" },
  { label: "The leverage", text: "Where can technology actually help?" },
  { label: "The product", text: "What's the smallest thing worth building?" },
];

export default function HowIThinkSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Process</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          How I think
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          I don&apos;t start with AI. I start with these five questions.
        </p>
      </FadeIn>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <FadeIn key={step.label} delay={i * 0.08}>
            <div
              className="rounded-2xl p-6 sm:p-8 flex items-start gap-6"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(2rem, 4vw, 48px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{step.label}</h3>
                <p className="text-[#D7E2EA]/60 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
