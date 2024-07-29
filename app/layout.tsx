import { Footer } from "@/components/Footer/Footer";
import SuspenseWrapper from "@/components/SuspenseWrapper";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LargeHeader } from "../components/Header/LargeHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Tristan Hourtoulle",
    default: "Tristan Hourtoulle",
  },
  description: "Welcome to my personal website!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tristanhourtoulle.fr",
    siteName: "Tristan Hourtoulle",
    title: "Tristan Hourtoulle",
    description: "Welcome to my personal website!",
    images: [
      {
        url: "https://tristanhourtoulle.fr/pictures/Photo de profil - TH.jpg",
        width: 1260,
        height: 800,
        alt: "Tristan Hourtoulle profile picture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={cn(
          "w-full max-w-screen min-h-screen bg-background px-[10%] py-[1.5%]"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SuspenseWrapper>
            <LargeHeader />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </SuspenseWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
