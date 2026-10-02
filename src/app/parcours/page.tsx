import type { Metadata } from 'next';
import Link from 'next/link';
import { CaseStudySlider } from '@/components/case-study/case-study-slider';
import { CtaSection } from '@/components/sections/cta-section';
import { EpitechMark } from '@/components/ui/epitech-mark';
import { SiteFooter } from '@/components/site-footer';
import { SITE_CONFIG } from '@/lib/constants';
import { PARCOURS_CONTENT } from '@/lib/parcours-content';
import { buildParcoursStructuredData, serializeJsonLd } from '@/lib/structured-data';

const SOCIAL_TITLE = `${PARCOURS_CONTENT.metaTitle} · ${SITE_CONFIG.brandName}`;

export const metadata: Metadata = {
  title: PARCOURS_CONTENT.metaTitle,
  description: PARCOURS_CONTENT.metaDescription,
  alternates: { canonical: '/parcours' },
  openGraph: {
    title: SOCIAL_TITLE,
    description: PARCOURS_CONTENT.metaDescription,
    type: 'profile',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/parcours',
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PARCOURS_CONTENT.metaDescription,
  },
};

/**
 * Formation, teaching terms, internships and the year spent abroad.
 */
export default function ParcoursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildParcoursStructuredData()) }}
      />
      <main id="contenu" tabIndex={-1}>
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <span aria-current="page">Parcours</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="parcours" aria-labelledby="parcours-title">
          <div className="wrap">
            <div className="parcours-head">
              <div className="parcours-head-text">
                <span className="eyebrow">{PARCOURS_CONTENT.eyebrow}</span>
                <h1 id="parcours-title">{PARCOURS_CONTENT.title}</h1>
                <p className="lead">{PARCOURS_CONTENT.lead}</p>
              </div>
              <EpitechMark />
            </div>

            <ol className="parcours-list">
              {PARCOURS_CONTENT.entries.map((entry) => (
                <li className="parcours-entry" key={entry.id}>
                  <div className="parcours-when">
                    <p className="parcours-period">{entry.period}</p>
                    <p className="parcours-context">{entry.context}</p>
                  </div>
                  <div className="parcours-what">
                    <h2>{entry.heading}</h2>
                    {entry.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {entry.link ? (
                      <Link className="parcours-link" href={entry.link.href}>
                        {entry.link.label} <span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                    {entry.photos ? (
                      <CaseStudySlider
                        images={entry.photos.images}
                        label={entry.photos.label}
                        variant="photo"
                      />
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
