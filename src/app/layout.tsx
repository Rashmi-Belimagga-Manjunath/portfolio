import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    template: "%s | Rashmi Manjunath",
  },
  description:
    "Product Manager building at the intersection of AI, product strategy, and human-centred design. 6+ years in B2B SaaS, AI/ML projects, and research.",
  keywords: [
    "Product Manager",
    "AI Product Builder",
    "Researcher",
    "Rashmi Manjunath",
    "Dublin",
    "SaaS",
    "RAG",
    "Machine Learning",
    "Product Strategy",
  ],
  authors: [{ name: "Rashmi Manjunath" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rashmimanjunath.dev",
    siteName: "Rashmi Manjunath",
    title: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    description:
      "Product Manager building at the intersection of AI, product strategy, and human-centred design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmi Manjunath — Product Manager × AI Product Builder × Researcher",
    description:
      "Product Manager building at the intersection of AI, product strategy, and human-centred design.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
