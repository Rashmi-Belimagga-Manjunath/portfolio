"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const allScreenshots = Array.from({ length: 24 }, (_, i) => `/images/screenshot-${i + 1}.png`);

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

  const row1 = allScreenshots.slice(0, 12);
  const row2 = allScreenshots.slice(12, 24);
  const row1Triplicated = [...row1, ...row1, ...row1];
  const row2Triplicated = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
          {row1Triplicated.map((src, i) => (
            <div key={`row1-${i}`} className="w-[420px] h-[270px] rounded-2xl overflow-hidden flex-shrink-0">
              <Image src={src} alt="Project screenshot" width={420} height={270} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ transform: `translateX(${-offset + 200}px)`, willChange: "transform" }}>
          {row2Triplicated.map((src, i) => (
            <div key={`row2-${i}`} className="w-[420px] h-[270px] rounded-2xl overflow-hidden flex-shrink-0">
              <Image src={src} alt="Project screenshot" width={420} height={270} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
