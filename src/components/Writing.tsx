"use client";

import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    title: "Retrieval-Augmented AI Assistants for Product Documentation Analysis",
    excerpt: "How RAG-based AI assistants can support product managers in making data-driven backlog decisions.",
    category: "Research",
    date: "2026",
    link: "#",
  },
  {
    title: "Building Multi-Agent AI Systems for Hospitality",
    excerpt: "Lessons from building VIRELLE — a five-agent system that runs a complete hotel business operation.",
    category: "AI",
    date: "2026",
    link: "#",
  },
  {
    title: "Product Strategy for Calm Technology",
    excerpt: "Why SOVA rejects gamification and what emotional safety means as a product design constraint.",
    category: "Product",
    date: "2026",
    link: "#",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6 max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-xs text-muted-light uppercase tracking-widest mb-4">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Latest thoughts.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 0.1}>
            <a
              href={post.link}
              className="group block p-6 rounded-xl border border-border bg-white hover:border-border-hover hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-light text-accent font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-muted-light">{post.date}</span>
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-8">
          <a
            href="https://rashmi95.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all posts →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
