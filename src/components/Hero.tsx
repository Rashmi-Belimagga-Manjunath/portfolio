"use client";

import { motion } from "framer-motion";

const wordReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordChild = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const headline = "I BUILD PRODUCTS THAT MAKE COMPLEX THINGS FEEL SIMPLE.";
const words = headline.split(" ");

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto relative">
      {/* Subtle gradient accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Main headline */}
      <motion.div
        variants={wordReveal}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] tracking-[-0.02em] font-medium max-w-[1100px]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordChild}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Positioning */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 mb-4"
      >
        <span className="text-accent text-sm md:text-base font-medium tracking-wide">
          Product Manager
        </span>
        <span className="text-muted text-xs">&times;</span>
        <span className="text-accent text-sm md:text-base font-medium tracking-wide">
          AI Product Builder
        </span>
        <span className="text-muted text-xs">&times;</span>
        <span className="text-accent text-sm md:text-base font-medium tracking-wide">
          Researcher
        </span>
      </motion.div>

      {/* Supporting themes */}
      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-muted text-sm md:text-base tracking-wide max-w-lg"
      >
        Product strategy &middot; AI &middot; Data &middot; Human-centred design
      </motion.p>

      {/* Currently */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-16 md:mt-24"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted/60 mb-4">
          Currently
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted/80">
          <span>Building with AI</span>
          <span className="hidden md:inline text-muted/30">·</span>
          <span>Studying Artificial Intelligence for Business</span>
          <span className="hidden md:inline text-muted/30">·</span>
          <span>Based in Dublin, Ireland</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-muted/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
