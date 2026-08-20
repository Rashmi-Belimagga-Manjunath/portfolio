"use client";

import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return <div>{children}</div>;
}
