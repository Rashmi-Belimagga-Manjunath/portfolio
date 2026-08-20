"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">Contact</h2>
      <p className="text-gray-600 mb-6">
        I&apos;d love to hear from you. Feel free to reach out!
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:rashmimanjunath@gmail.com"
          className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/rashmi-manjunath"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Rashmi-Belimagga-Manjunath"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
