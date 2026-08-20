"use client";

export default function About() {
  return (
    <section id="about" className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">About</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          I&apos;m a Product Manager with 6+ years of experience across B2B SaaS, HRTech,
          infrastructure technology, and AI-enabled products. My work sits at the
          intersection of product strategy, analytics, and emerging AI technologies.
        </p>
        <p>
          I enjoy transforming complex business challenges into practical,
          user-focused solutions. Currently pursuing an MSc in Artificial Intelligence
          for Business at National College of Ireland, while building AI products
          and conducting research on RAG architectures.
        </p>
        <p>
          Previously at Aurigo Technologies, Zenefits, and Blackstone, I&apos;ve driven
          feature adoption gains of 18% and revenue impact of $3M through data-driven
          product decisions.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Education</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><span className="font-medium">MSc Artificial Intelligence for Business</span> — National College of Ireland (2024–2025)</p>
          <p><span className="font-medium">B.E. Computer Science</span> — Visvesvaraya Technological University (2014–2018)</p>
        </div>
      </div>
    </section>
  );
}
