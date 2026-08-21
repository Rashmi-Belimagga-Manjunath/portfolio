"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const profileImages = [
  "/images/profile-hero.png",
  "/images/profile-about.png",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollPosition = window.scrollY - sectionTop + window.innerHeight;
      setOffset(scrollPosition * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = [...profileImages, ...profileImages, ...profileImages, ...profileImages, ...profileImages, ...profileImages];
  const row2 = [...profileImages.reverse(), ...profileImages, ...profileImages, ...profileImages, ...profileImages, ...profileImages];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F0EC] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - scrolls right */}
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
          {row1.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[420px] h-[270px] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={src}
                alt="Rashmi Manjunath"
                width={420}
                height={270}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Row 2 - scrolls left */}
        <div className="flex gap-3" style={{ transform: `translateX(${-offset + 200}px)`, willChange: "transform" }}>
          {row2.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[420px] h-[270px] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={src}
                alt="Rashmi Manjunath"
                width={420}
                height={270}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
