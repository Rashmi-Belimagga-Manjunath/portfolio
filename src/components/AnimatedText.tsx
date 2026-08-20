"use client";

import { useRef, CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="opacity-20">{word}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {word}
      </motion.span>
    </span>
  );
}
