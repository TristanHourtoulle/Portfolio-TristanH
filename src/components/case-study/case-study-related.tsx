import Image from 'next/image';
import Link from 'next/link';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES } from '@/lib/constants';
import { CASE_STUDY_PAGE_BY_SLUG } from '@/lib/case-studies-content';

interface CaseStudyRelatedProps {
  relatedSlugs: string[];
}

/**
 * "Voir aussi" cards linking to the other case-study pages listed in
 * `relatedSlugs`. Unresolvable slugs are skipped rather than thrown on,
 * so a future typo in the content file degrades gracefully instead of
 * breaking the page.
 *
 * "Voir aussi" is an <h2>, not the <span> it used to be. The <h3>s on
 * the cards below it were otherwise orphans: they sat under the last
 * narrative <h2> of the case study they had nothing to do with. It keeps
 * the `.eyebrow` class and its `id`, so the look and the section's
 * `aria-labelledby` are both unchanged (see `.eyebrow` in globals.css,
 * which now states its own weight and line-height precisely so it can
 * ride on a heading element without shifting).
 */
export function CaseStudyRelated({ relatedSlugs }: CaseStudyRelatedProps) {
  const relatedPages = relatedSlugs
    .map((slug) => CASE_STUDY_PAGE_BY_SLUG[slug])
    .filter((page) => page !== undefined);

  if (relatedPages.length === 0) {
    return null;
  }

  return (
    <section className="case-related" aria-labelledby="related-title">
      <div className="wrap">
        <h2 className="eyebrow" id="related-title">
          Voir aussi
        </h2>
        <div className="related-cards">
          {relatedPages.map((page) => {
            const client = CLIENT_COLOR_BY_ID[page.clientId];
            return (
              <Link key={page.slug} className="related-card" href={`/realisations/${page.slug}`}>
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
                <h3>{page.title}</h3>
                <p className="mono">{page.period}</p>
                {/*
                  The whole card is the link, so the h3 inside it is already
                  part of the accessible name and of the anchor text: unlike
                  the homepage card, this closing line needs no title of its
                  own. The arrow stays decoration.
                */}
                <span className="related-link">
                  Lire l&apos;étude de cas <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
