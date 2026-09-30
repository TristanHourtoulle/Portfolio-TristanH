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

export async function generateStaticParams() {
  return CASE_STUDY_PAGES.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    return {};
  }

  const title = `${page.title} · Étude de cas`;

  const socialTitle = `${title} · ${SITE_CONFIG.brandName}`;
  const path = `/realisations/${page.slug}`;

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
 * A case-study detail page (`/realisations/[slug]`).
 */
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="case-page" data-accent={page.clientId}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildCaseStudyStructuredData(page)) }}
      />
      <main id="contenu" tabIndex={-1}>
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
