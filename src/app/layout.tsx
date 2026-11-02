import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SkipLink } from '@/components/skip-link';
import { SiteHeader } from '@/components/site-header';
import { ScrollManager } from '@/components/scroll-manager';
import { MobileMenuProvider } from '@/components/mobile-menu/mobile-menu-context';
import { MobileMenuSheet } from '@/components/mobile-menu/mobile-menu-sheet';
import { apfelGrotezk, commitMono } from '@/lib/fonts';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: 'Tristan Hourtoulle · Développeur web full-stack',
    template: '%s · Tristan Hourtoulle',
  },
  description:
    'Tristan Hourtoulle, développeur web full-stack en recherche de CDI. Projets clients en React, Next.js et TypeScript : réservation, calcul d’impact et CMS multi-sites.',
  openGraph: {
    title: 'Tristan Hourtoulle · Développeur web full-stack',
    description:
      'Tristan Hourtoulle, développeur web full-stack en recherche de CDI. Projets clients en React, Next.js et TypeScript : réservation, calcul d’impact et CMS multi-sites.',
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristan Hourtoulle · Développeur web full-stack',
    description:
      'Tristan Hourtoulle, développeur web full-stack en recherche de CDI. Projets clients en React, Next.js et TypeScript : réservation, calcul d’impact et CMS multi-sites.',
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${apfelGrotezk.variable} ${commitMono.variable}`}>
      <body className="antialiased">
        <MobileMenuProvider>
          <ScrollManager />
          <SkipLink />
          <SiteHeader />
          <div id="page-shell">{children}</div>
          <MobileMenuSheet />
        </MobileMenuProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
