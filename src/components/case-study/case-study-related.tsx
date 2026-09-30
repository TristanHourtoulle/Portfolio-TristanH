import Image from 'next/image';
import Link from 'next/link';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES } from '@/lib/constants';
import { CASE_STUDY_PAGE_BY_SLUG } from '@/lib/case-studies-content';

interface CaseStudyRelatedProps {
  relatedSlugs: string[];
}

/**
 * "Voir aussi" cards linking to other case-study pages.
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
