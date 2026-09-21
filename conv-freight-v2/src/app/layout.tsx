import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});


export const metadata: Metadata = {
  title: "Abaco Freight — Florida → Abaco Air Cargo (Variant B)",
  description:
    "A/B variant B: light island-professional layout with above-the-fold quote card, flight board, published rates and WhatsApp capture. FL→Abaco air freight & island supply.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmSans.variable} ${ibmMono.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
