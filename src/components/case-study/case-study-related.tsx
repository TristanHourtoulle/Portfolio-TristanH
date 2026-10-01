import Image from 'next/image';
import Link from 'next/link';
import { CLIENT_LOGO_SIZES } from '@/lib/constants';
import { REALISATION_PAGE_BY_SLUG, resolveRealisationMark } from '@/lib/case-studies-content';

interface CaseStudyRelatedProps {
  relatedSlugs: string[];
}

/**
 * "Voir aussi" cards linking to other realisation pages.
 */
export function CaseStudyRelated({ relatedSlugs }: CaseStudyRelatedProps) {
  const relatedPages = relatedSlugs
    .map((slug) => REALISATION_PAGE_BY_SLUG[slug])
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
            const mark = resolveRealisationMark(page);
            return (
              <Link key={page.slug} className="related-card" href={`/realisations/${page.slug}`}>
                {mark && (
                  <span className="hero-logo" data-shape={mark.shape}>
                    <Image
                      src={mark.src}
                      alt=""
                      aria-hidden="true"
                      width={mark.width}
                      height={mark.height}
                      sizes={CLIENT_LOGO_SIZES}
                    />
                  </span>
                )}
                <h3>{page.title}</h3>
                <p className="mono">{page.period}</p>
                <span className="related-link">
                  {page.provenance === 'client' ? "Lire l'étude de cas" : 'Voir le projet'}{' '}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
