"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const items = [
  { text: "AI agents", image: "/images/VIRELLE.png" },
  { text: "Product psychology", image: "/images/SOVA.png" },
  { text: "Cafes in Dublin", image: "/images/routeforge ai.png" },
  { text: "Photography", image: "/images/photography.png" },
  { text: "Running", image: "/images/travel.png" },
  { text: "Books I keep buying faster than I read", image: "/images/books.png" },
  { text: "Why paper cuts hurt SO MUCH", image: "/images/Rashmi.png" },
];

export default function OutsideSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-3">Outside the Roadmap</p>
        <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Things I&apos;m currently obsessed with
        </h2>
        <p className="text-[#D7E2EA]/50 text-sm mb-14 max-w-md">
          What keeps my brain busy when I&apos;m not shipping products.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <FadeIn key={item.text} delay={i * 0.05}>
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#D7E2EA]/80 text-sm font-medium">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
