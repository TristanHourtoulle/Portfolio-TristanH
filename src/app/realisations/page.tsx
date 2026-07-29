import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES, SITE_CONFIG } from '@/lib/constants';
import { buildRealisationsStructuredData, serializeJsonLd } from '@/lib/structured-data';

/**
 * Bare subject: the root layout's `title.template` appends the brand
 * suffix to `<title>`, so spelling it out here would duplicate it.
 */
const PAGE_TITLE = 'Réalisations et études de cas';

/**
 * Social titles carry the suffix explicitly instead. Next applies
 * `title.template` to `<title>` only, never to `openGraph.title` or
 * `twitter.title`, and a shared card has no site chrome to supply the
 * brand on its own.
 */
const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

/**
 * Names the four clients rather than describing the page in the abstract:
 * these are the terms a prospect who was given a reference actually types,
 * and they are the only proper nouns this site can legitimately claim.
 */
const PAGE_DESCRIPTION =
  "Quatre études de cas détaillées : Hosteed, Moduloop Impact, Moduloop Kits et Quintyss. Le contexte, mon intervention et le résultat livré, captures à l'appui.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/realisations' },
  /**
   * Redeclared in full because Next replaces the parent `openGraph`
   * instead of merging it: inheriting the layout's block would leave this
   * page advertising the homepage as its `og:url`.
   */
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
 *
 * It exists first for crawlers: `/realisations/[slug]` used to hang off a
 * homepage fragment, so the four detail pages had no indexable parent and
 * nothing tied them together as one body of work. It is also the only
 * place on the site where the four studies can be compared side by side,
 * which the homepage section deliberately does not do (it shows them as
 * part of a sales narrative, interleaved with offers and process).
 *
 * Fully static: the content is hand-authored copy, with no per-request
 * value anywhere, unlike the homepage whose availability badge forces a
 * daily revalidation.
 */
export default function RealisationsPage() {
  return (
    <>
      {/*
        Mirrors the visible trail immediately below, item for item. This
        is the one type on the site that still earns a real SERP
        enhancement, so the two must not be allowed to disagree.
      */}
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
                Des missions freelance menées de la maquette Figma à la mise en ligne, pour des PME,
                des startups et des agences. Chaque étude de cas détaille le contexte du client, mon
                intervention et le résultat livré, captures du produit réel à l&apos;appui.
              </p>
            </div>

            {/*
              Each card sets its own `data-accent`, so the client's color is
              scoped to the card. The detail pages can tint everything from a
              single wrapper because they show one client; this page shows
              four at once and has to keep their identities apart.
            */}
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
                      <span className="case-index-meta mono">
                        {page.missionType} · {page.period}
                      </span>
                      <h2>{page.title}</h2>
                      <p className="case-index-lead">{page.lead}</p>
                      <p className="stack">{page.stack.join(' · ')}</p>
                      {/*
                        The whole card is the link, so its accessible name and
                        its anchor text already open on the case study's own
                        title. This closing line only has to say what happens
                        on click, and the arrow is decoration a screen reader
                        should not read out as "flèche vers la droite".
                      */}
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
