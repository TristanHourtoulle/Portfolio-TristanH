import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SkipLink } from '@/components/skip-link';
import { SiteHeader } from '@/components/site-header';
import { CalendlyConversionTracker } from '@/components/analytics/calendly-conversion-tracker';
import { apfelGrotezk, commitMono } from '@/lib/fonts';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: 'Tristan Hourtoulle · Design et développement web freelance',
    template: '%s · Tristan Hourtoulle',
  },
  description:
    'Développeur web full-stack et designer freelance. Sites vitrines et applications sur mesure pour PME, startups et agences, de Figma à la mise en ligne.',
  openGraph: {
    title: 'Tristan Hourtoulle · Design et développement web freelance',
    description:
      "Développeur web full-stack et designer freelance. Un seul interlocuteur du premier appel à la mise en ligne.",
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristan Hourtoulle · Design et développement web freelance',
    description:
      "Développeur web full-stack et designer freelance. Un seul interlocuteur du premier appel à la mise en ligne.",
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
        <SkipLink />
        <SiteHeader />
        {children}
        <Analytics />
        <SpeedInsights />
        <CalendlyConversionTracker />
      </body>
    </html>
  );
}
