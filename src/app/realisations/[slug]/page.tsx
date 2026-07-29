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

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    return {};
  }

  const title = `${page.title} · Étude de cas · Tristan Hourtoulle`;

  return {
    title,
    description: page.lead,
    openGraph: {
      title,
      description: page.lead,
      type: 'article',
      locale: 'fr_FR',
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
      <main id="contenu">
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <Link className="back-link" href="/#realisations">
              ← Retour aux réalisations
            </Link>
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
