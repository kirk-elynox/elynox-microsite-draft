import type { Metadata } from "next";
import { Gothic_A1, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Three brand type families per the Figma "Typography" section: Gothic A1
// (headlines/UI), Lora (editorial body), JetBrains Mono (labels/metadata).
// Loaded once here as CSS variables and wired into tailwind.config.ts.
const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elynox Microsite Draft",
  description: "Kirk's independent draft — Brand Kit + Microsite Delivery component toolkit (MVP).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gothicA1.variable} ${lora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
