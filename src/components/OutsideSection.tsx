"use client";

import FadeIn from "./FadeIn";

const items = [
  {
    title: "Photography",
    description: "Capturing moments, one frame at a time.",
    emoji: "📸",
  },
  {
    title: "Travel",
    description: "Exploring new places and perspectives.",
    emoji: "✈️",
  },
  {
    title: "Books",
    description: "Reading something I probably don't have enough time for.",
    emoji: "📚",
  },
];

export default function OutsideSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Outside the Roadmap</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Beyond the screen
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          What I do when I&apos;m not shipping products.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 sm:p-8 h-full text-center"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <span className="text-4xl mb-4 block">{item.emoji}</span>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-[#D7E2EA]/50 text-sm">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
