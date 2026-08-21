import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashmi -- Product Manager × AI Product Builder",
  description:
    "Product Manager building AI products at the intersection of product strategy, data, and human-centred design.",
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
    url: "https://rashmi-manjunath.vercel.app",
    siteName: "Rashmi Manjunath",
    title: "Rashmi -- Product Manager × AI Product Builder",
    description:
      "Product Manager building AI products at the intersection of product strategy, data, and human-centred design.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
