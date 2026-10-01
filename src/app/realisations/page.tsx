import type { Metadata } from 'next';
import Link from 'next/link';
import { RealisationRow } from '@/components/realisations/realisation-row';
import { RealisationsFilter } from '@/components/realisations/realisations-filter';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import {
  filterRealisationPages,
  REALISATIONS_PAGE_TITLE,
  resolveRealisationFilter,
} from '@/lib/case-studies-content';
import { SITE_CONFIG } from '@/lib/constants';
import { buildRealisationsStructuredData, serializeJsonLd } from '@/lib/structured-data';

const SOCIAL_TITLE = `${REALISATIONS_PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  "Quatre produits web livrés en stage puis en freelance, Hosteed, Moduloop Impact, Moduloop Kits et Quintyss, et trois projets personnels, Edukai, Freelance Manager et Dégommix.";

export const metadata: Metadata = {
  title: REALISATIONS_PAGE_TITLE,
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

interface RealisationsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * The single column of realisations, client work and personal projects mixed.
 * @param searchParams - query string carrying the active filter
 * @returns The realisations index.
 */
export default async function RealisationsPage({ searchParams }: RealisationsPageProps) {
  const resolvedSearchParams = await searchParams;
  const filter = resolveRealisationFilter(resolvedSearchParams.type);
  const pages = filterRealisationPages(filter);

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
              <span className="eyebrow">Réalisations</span>
              <h1 id="realisations-title">{REALISATIONS_PAGE_TITLE}</h1>
              <p className="lead">
                Quatre produits web livrés en stage puis en freelance, chacun mené de la spec
                à la mise en ligne et chacun avec son étude de cas. Et trois projets
                personnels, là pour ce qu&apos;ils m&apos;ont fait construire et que ces
                produits ne demandaient pas.
              </p>
            </div>

            <RealisationsFilter active={filter} />

            <ul className="realisations-list" id="liste">
              {pages.map((page) => (
                <RealisationRow key={page.slug} page={page} />
              ))}
            </ul>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
