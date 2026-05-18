import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "UniPath",
  description:
    "The smartest college counselor in your pocket. Powered by AI, curated by experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bricolage.variable,
        manrope.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F7] font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
