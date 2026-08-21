"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          width: hovering ? 48 : 16,
          height: hovering ? 48 : 16,
          background: "white",
          transform: `translate(${pos.x - (hovering ? 24 : 8)}px, ${pos.y - (hovering ? 24 : 8)}px)`,
          transition: "width 0.3s, height 0.3s, transform 0.15s ease-out",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "white",
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          opacity: visible ? 0.8 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
