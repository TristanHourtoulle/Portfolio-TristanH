import { Footer } from "@/components/Footer/Footer";
import SuspenseWrapper from "@/components/SuspenseWrapper";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LargeHeader } from "../components/Header/LargeHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tristan Hourtoulle",
  description: "Tristan Hourtoulle's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("w-full min-h-screen bg-background px-[10%] py-[1.5%]")}
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
            <Footer />
          </SuspenseWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
