"use client";

export default function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        border: "2px solid rgba(255,255,255,0.8)",
        outline: "3px solid transparent",
      }}
    >
      Contact Me
    </a>
  );
}
