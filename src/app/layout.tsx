import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    template: "%s | Rashmi Manjunath",
  },
  description:
    "Product Manager building AI products at the intersection of product strategy, AI, and human-centred design. 6+ years in B2B SaaS.",
  keywords: [
    "Product Manager",
    "AI Product Builder",
    "Researcher",
    "Rashmi Manjunath",
    "Dublin",
    "SaaS",
    "RAG",
    "Machine Learning",
  ],
  authors: [{ name: "Rashmi Manjunath" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rashmimanjunath.dev",
    siteName: "Rashmi Manjunath",
    title: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    description:
      "Product Manager building AI products at the intersection of product strategy, AI, and human-centred design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    description:
      "Product Manager building AI products at the intersection of product strategy, AI, and human-centred design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
