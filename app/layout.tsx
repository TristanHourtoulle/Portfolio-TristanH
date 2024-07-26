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
      <head>
        {/* Google Tag Manager */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8SX5364');`}</script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={cn("w-full min-h-screen bg-background px-[10%] py-[1.5%]")}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8SX5364"
            height="0"
            width="0"
            className="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
