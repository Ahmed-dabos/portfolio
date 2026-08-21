import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Ghazy — Developer Portfolio",
  description: "Personal portfolio of Ahmed Ghazy, a medical student and aspiring software engineer building modern web applications with React, Next.js, TypeScript, and modern full-stack technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white flex flex-col",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
