import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Custom artistic font
const ztBrosOskon = localFont({
  src: [
    {
      path: '../../public/fonts/ZTBrosOskon-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZTBrosOskon-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-zt-bros-oskon",
  display: "swap",
});

// Paragraphs font
const alverata = localFont({
  src: [
    {
      path: '../../public/fonts/Alverata-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Alverata-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-alverata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mayLab Photography",
  description: "Modern photography portfolio showcasing street, portrait, landscape, and black & white photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ztBrosOskon.variable} ${alverata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
