import type { Metadata } from 'next';
import { SkipLink } from '@/components/skip-link';
import { SiteHeader } from '@/components/site-header';
import { apfelGrotezk, commitMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tristan Hourtoulle · Design et développement web freelance',
  description:
    "Développeur web full-stack et designer freelance. Sites vitrines, applications sur mesure et produits complets pour PME, startups et agences, de la maquette Figma à la mise en ligne.",
  openGraph: {
    title: 'Tristan Hourtoulle · Design et développement web freelance',
    description:
      "Développeur web full-stack et designer freelance. Un seul interlocuteur du premier appel à la mise en ligne.",
    type: 'website',
    locale: 'fr_FR',
  },
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
      </body>
    </html>
  );
}
