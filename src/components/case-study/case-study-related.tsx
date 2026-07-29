import Image from 'next/image';
import { CLIENT_COLOR_BY_ID } from '@/lib/constants';
import { CASE_STUDY_PAGE_BY_SLUG } from '@/lib/case-studies-content';

interface CaseStudyRelatedProps {
  relatedSlugs: string[];
}

/**
 * "Voir aussi" cards linking to the other case-study pages listed in
 * `relatedSlugs`. Unresolvable slugs are skipped rather than thrown on,
 * so a future typo in the content file degrades gracefully instead of
 * breaking the page.
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
        <span className="eyebrow" id="related-title">
          Voir aussi
        </span>
        <div className="related-cards">
          {relatedPages.map((page) => {
            const client = CLIENT_COLOR_BY_ID[page.clientId];
            return (
              <a key={page.slug} className="related-card" href={`/realisations/${page.slug}`}>
                <span className="hero-logo">
                  <Image
                    src={client.logo.src}
                    alt=""
                    aria-hidden="true"
                    width={client.logo.width}
                    height={client.logo.height}
                  />
                </span>
                <h3>{page.title}</h3>
                <p className="mono">{page.period}</p>
                <span className="related-link">Lire l&apos;étude de cas →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
