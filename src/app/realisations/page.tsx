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
  'Projets de Tristan Hourtoulle : location de logements, calcul d’impact environnemental, CMS multi-sites et applications personnelles, avec le détail de ses interventions.';

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
                Des applications développées en stage et en freelance, et des projets personnels. Pour chacune : le besoin de départ, ce que j’ai développé et les choix techniques qui ont compté.
              </p>
            </div>

            <RealisationsFilter active={filter} />

            <ul className="realisations-list">
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
