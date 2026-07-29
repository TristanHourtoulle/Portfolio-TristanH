import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CaseStudyHero } from '@/components/case-study/case-study-hero';
import { CaseStudyGallery } from '@/components/case-study/case-study-gallery';
import { CaseStudyContent } from '@/components/case-study/case-study-content';
import { CaseStudyRelated } from '@/components/case-study/case-study-related';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { CASE_STUDY_PAGES, CASE_STUDY_PAGE_BY_SLUG } from '@/lib/case-studies-content';
import { SITE_CONFIG } from '@/lib/constants';
import { buildCaseStudyStructuredData, serializeJsonLd } from '@/lib/structured-data';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Prerenders all four case-study pages at build time: their content is
 * fixed, hand-authored copy (see case-studies-content.ts), not
 * user-generated data, so there is no unknown slug to fall back to
 * on-demand rendering for.
 */
export async function generateStaticParams() {
  return CASE_STUDY_PAGES.map((page) => ({ slug: page.slug }));
}

/**
 * Closes the route to anything `generateStaticParams` did not list. The
 * default (`true`) renders unknown slugs on demand, so every crawler and
 * scanner probing /realisations/wp-admin would cost a server render before
 * reaching the `notFound()` below. With this set, Next answers those
 * straight from the static 404 instead, and the guard in the component
 * only ever fires in development.
 */
export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    return {};
  }

  /**
   * The trailing brand suffix is supplied by the root layout's
   * `title.template`, so it must not be spelled out here.
   */
  const title = `${page.title} · Étude de cas`;

  /**
   * Social titles carry the suffix explicitly: Next applies `title.template`
   * to `<title>` only, and a shared card has no site chrome to supply the
   * brand on its own.
   */
  const socialTitle = `${title} · ${SITE_CONFIG.brandName}`;
  const path = `/realisations/${page.slug}`;

  /**
   * `metaDescription`, not `lead`. The two used to be the same string,
   * which meant the SERP snippet was whatever the page happened to open
   * with: three of the four leads ran past 180 characters and were being
   * cut mid-sentence. They are separate fields now, so the visible copy
   * can be rewritten without silently rewriting the snippet, and vice
   * versa (see `metaDescription` in types.ts).
   *
   * `openGraph` is redeclared in full rather than inherited: Next replaces
   * the parent object wholesale instead of merging its fields, so omitting
   * `siteName` here would silently drop the one set in the root layout.
   *
   * These pages have declared `og:type: article` from the start without
   * ever supplying the two fields that type exists for. `publishedTime`
   * is month-precision on purpose: the only dates the projects have are
   * the human periods the clients gave ("mai à novembre 2025"), and a
   * fabricated day-of-month would buy a fuller-looking string with a
   * fact nobody can stand behind. See `publishedTimeIso` in types.ts for
   * what the month means on an open-ended mission.
   */
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: page.metaDescription,
      type: 'article',
      locale: 'fr_FR',
      siteName: SITE_CONFIG.brandName,
      url: path,
      publishedTime: page.publishedTimeIso,
      authors: [SITE_CONFIG.siteUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: page.metaDescription,
    },
  };
}

/**
 * A case-study detail page (`/realisations/[slug]`), assembled from the
 * four building blocks under src/components/case-study/. The outer
 * `data-accent` wrapper recolors the whole page to the client's brand
 * color, statically and with no client JS (see `.case-page` in
 * globals.css and the CaseStudyHero doc comment for why this differs
 * from the homepage's hover-driven AccentProvider mechanism).
 */
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="case-page" data-accent={page.clientId}>
      {/*
        Two nodes: the BreadcrumbList mirroring the visible trail below,
        and the study itself as a CreativeWork. The identity nodes it
        refers to (Person, Organization) are declared in full on the
        homepage, so nothing is restated here beyond the @id.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildCaseStudyStructuredData(page)) }}
      />
      <main id="contenu" tabIndex={-1}>
        {/*
          A real trail, now that /realisations exists as a route: the middle
          segment is the parent page itself, not the homepage fragment the
          detail pages used to point back at. The current page closes the
          list as plain text rather than as a link to itself.
        */}
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/realisations">Réalisations</Link>
              </li>
              <li>
                <span aria-current="page">{page.title}</span>
              </li>
            </ol>
          </div>
        </nav>
        <CaseStudyHero page={page} />
        <CaseStudyGallery images={page.gallery} label={page.title} />
        <CaseStudyContent page={page} />
        <CaseStudyRelated relatedSlugs={page.relatedSlugs} />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
