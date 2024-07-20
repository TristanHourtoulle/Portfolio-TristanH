import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LargeHeader } from "../components/Header/LargeHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "TristanH.",
  description: "TristanH. - Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Photo de profil - TH.png" />
      </head>
      <body
        className={cn("w-full min-h-screen bg-background px-[10%] py-[1.5%]")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LargeHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
