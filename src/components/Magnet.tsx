"use client";

import { useRef, useState, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;
    setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0)`);
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setTransform("translate3d(0, 0, 0)");
    setIsActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
