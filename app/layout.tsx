import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Tristan Hourtoulle",
    template: `%s - Tristan Hourtoulle`,
  },
  description: "Frontend Developer | Backend Enthusiast | SEO Optimizer",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased min-h-screen w-full bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
