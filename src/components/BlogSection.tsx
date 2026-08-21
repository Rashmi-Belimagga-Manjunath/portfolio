"use client";

import FadeIn from "./FadeIn";
import blog from "@/data/blog.json";

export default function BlogSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 max-w-[1100px] mx-auto">
      <FadeIn>
        <p className="text-[#E8573A] text-xs uppercase tracking-[0.2em] font-medium mb-3">Blog</p>
        <h2 className="text-[#1A1A1A] font-black mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Writing
        </h2>
        <p className="text-[#6B7280] text-sm mb-14 max-w-md">
          Thoughts on product, AI, and everything in between.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blog.map((post, i) => (
          <FadeIn key={post.title} delay={i * 0.1}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block card rounded-2xl p-6 sm:p-8 h-full group transition-all"
            >
              <p className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-3">
                {post.date}
              </p>
              <h3 className="text-[#1A1A1A] font-bold text-base sm:text-lg mb-3 group-hover:text-[#E8573A] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs font-medium" style={{ color: "#E8573A" }}>
                Read on WordPress →
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
