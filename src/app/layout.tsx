import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SkipLink } from '@/components/skip-link';
import { SiteHeader } from '@/components/site-header';
import { ScrollManager } from '@/components/scroll-manager';
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
    "Développeur web full-stack, quatre produits web livrés en stage puis en freelance, de la spec aux tests. Je cherche un CDI en équipe produit à partir de début octobre 2026.",
  openGraph: {
    title: 'Tristan Hourtoulle · Développeur web full-stack',
    description:
      'Quatre produits web livrés en stage puis en freelance, de la spec aux tests. Disponible en CDI début octobre 2026, à Mulhouse, Strasbourg ou en remote.',
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristan Hourtoulle · Développeur web full-stack',
    description:
      'Quatre produits web livrés en stage puis en freelance, de la spec aux tests. Disponible en CDI début octobre 2026, à Mulhouse, Strasbourg ou en remote.',
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
        <ScrollManager />
        <SkipLink />
        <SiteHeader />
        <div id="page-shell">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
