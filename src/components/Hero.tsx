"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center px-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="/images/profile-hero.png"
              alt="Rashmi Manjunath"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m Rashmi 👋
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-lg">
            I&apos;m a Product Manager building AI products that solve real problems.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Product Manager</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">AI Product Builder</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Researcher</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">Dublin, Ireland</p>
        </div>
      </div>
    </section>
  );
}
