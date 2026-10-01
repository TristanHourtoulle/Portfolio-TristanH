import type { Metadata } from 'next';
import Link from 'next/link';
import { RealisationRow } from '@/components/realisations/realisation-row';
import { RealisationsFilter } from '@/components/realisations/realisations-filter';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { filterRealisationPages, resolveRealisationFilter } from '@/lib/case-studies-content';
import { SITE_CONFIG } from '@/lib/constants';
import { buildRealisationsStructuredData, serializeJsonLd } from '@/lib/structured-data';

const PAGE_TITLE = 'Réalisations et projets';

const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  "Quatre produits web livrés en stage et en freelance, Hosteed, Moduloop Impact, Moduloop Kits et Quintyss, et trois projets personnels, Edukai, Freelance Manager et Dégommix.";

/**
 * The filter lives in the query string, so the canonical is pinned to the
 * unfiltered page here and the sitemap advertises that single URL.
 */
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
              <h1 id="realisations-title">
                Quatre produits livrés pour des clients, trois projets construits pour moi
              </h1>
              <p className="lead">
                Les quatre produits ont été menés de la spec à la mise en ligne, en stage puis
                en freelance, et chacun a son étude de cas. Les trois projets personnels sont
                là pour ce qu&apos;ils m&apos;ont fait construire et que ces produits ne
                demandaient pas.
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
