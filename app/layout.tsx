import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

// Fuente de cuerpo (Inter) — DESIGN.md
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fuente de títulos (Plus Jakarta Sans) — DESIGN.md
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={cn(inter.variable, plusJakarta.variable)}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}