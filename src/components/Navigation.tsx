"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col justify-between px-8 py-10 border-r border-gray-200 bg-white z-50">
        <div>
          <a href="/" className="text-xl font-bold">Rashmi Manjunath</a>
        </div>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs text-gray-400">
          © 2026 · Rashmi Manjunath
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 z-50">
        <a href="/" className="text-lg font-bold">Rashmi</a>
        <button onClick={() => setOpen(!open)} className="text-gray-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-700 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
