import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES, SITE_CONFIG } from '@/lib/constants';
import { buildRealisationsStructuredData, serializeJsonLd } from '@/lib/structured-data';

const PAGE_TITLE = 'Réalisations et études de cas';

const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  "Quatre études de cas détaillées : Hosteed, Moduloop Impact, Moduloop Kits et Quintyss. Le contexte, mon intervention et le résultat livré, captures à l'appui.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/realisations' },
  openGraph: {
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/realisations',
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/**
 * The parent route of the four case-study pages.
 */
export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildRealisationsStructuredData()) }}
      />
      <main id="contenu" tabIndex={-1}>
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <span aria-current="page">Réalisations</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="case-index" aria-labelledby="realisations-title">
          <div className="wrap">
            <div className="case-index-head">
              <span className="eyebrow">Études de cas</span>
              <h1 id="realisations-title">
                Réalisations : quatre produits web conçus et développés
              </h1>
              <p className="lead">
                Quatre produits menés de la maquette Figma à la mise en ligne, en stage puis en
                freelance. Chaque étude de cas détaille le contexte, mon intervention et le
                résultat livré.
              </p>
            </div>

            <ul className="case-index-list">
              {CASE_STUDY_PAGES.map((page) => {
                const client = CLIENT_COLOR_BY_ID[page.clientId];
                return (
                  <li key={page.slug}>
                    <Link
                      className="case-index-card"
                      href={`/realisations/${page.slug}`}
                      data-accent={page.clientId}
                    >
                      {client.logo && (
                        <span className="hero-logo">
                          <Image
                            src={client.logo.src}
                            alt=""
                            aria-hidden="true"
                            width={client.logo.width}
                            height={client.logo.height}
                            sizes={CLIENT_LOGO_SIZES}
                          />
                        </span>
                      )}
                      <span className="case-index-meta mono">
                        {page.engagementType} · {page.period}
                      </span>
                      <h2>{page.title}</h2>
                      <p className="case-index-lead">{page.lead}</p>
                      <p className="stack">{page.stack.join(' · ')}</p>
                      <span className="related-link">
                        Lire l&apos;étude de cas <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
