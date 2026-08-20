"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-[1200px] mx-auto pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted mb-4">Hi, I&apos;m</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Rashmi.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-4"
      >
        I&apos;m a Product Manager building AI products that solve real problems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm text-muted-light mb-8"
      >
        Product Manager × AI Product Builder × Researcher
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-4 mb-12"
      >
        <a
          href="#work"
          className="inline-flex items-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:border-border-hover hover:bg-surface transition-all duration-200"
        >
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-2 text-sm text-muted-light"
      >
        <span className="w-2 h-2 rounded-full bg-green-500" />
        Dublin, Ireland · Open to opportunities
      </motion.div>
    </section>
  );
}
