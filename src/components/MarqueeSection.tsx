"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const row1Images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1488229297570-58520851e868?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=420&h=270&fit=crop",
];

const row2Images = [
  "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=420&h=270&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=420&h=270&fit=crop",
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

  const tripleRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripleRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - scrolls right */}
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
          {tripleRow1.map((src, i) => (
            <Image
              key={`row1-${i}`}
              src={src}
              alt="Project preview"
              width={420}
              height={270}
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
        {/* Row 2 - scrolls left */}
        <div className="flex gap-3" style={{ transform: `translateX(${-offset + 200}px)`, willChange: "transform" }}>
          {tripleRow2.map((src, i) => (
            <Image
              key={`row2-${i}`}
              src={src}
              alt="Project preview"
              width={420}
              height={270}
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
