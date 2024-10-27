"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ChapterProvider } from "./contexts/ChapterContext";

// export const metadata: Metadata = {
//   title: "Lore of the Rings",
//   description: "Explore the lore of the rings!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChapterProvider>
        <body className={`antialiased `}>{children}</body>
      </ChapterProvider>
    </html>
  );
}
