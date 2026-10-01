import Image from 'next/image';
import { resolveRealisationMark } from '@/lib/case-studies-content';
import { CLIENT_LOGO_SIZES } from '@/lib/constants';
import { ProfileActions } from '@/components/ui/profile-actions';
import type { CaseStudyPageContent } from '@/lib/types';

interface CaseStudyHeroProps {
  page: CaseStudyPageContent;
}

/**
 * Hero of a realisation detail page, client work and personal project alike.
 */
export function CaseStudyHero({ page }: CaseStudyHeroProps) {
  const mark = resolveRealisationMark(page);
  const hasMetaRow = mark !== undefined || page.statusBadge !== undefined;
  const eyebrow =
    page.provenance === 'client' && page.engagementType
      ? `Étude de cas · ${page.engagementType.toLowerCase()}, ${page.periodInline}`
      : `Projet personnel · ${page.periodInline}`;

  return (
    <section className="case-hero" aria-labelledby="case-title">
      <div className="wrap">
        {hasMetaRow && (
          <div className="hero-meta-row">
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
            {page.statusBadge && <span className="hero-status">{page.statusBadge}</span>}
          </div>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <h1 id="case-title">
          {page.title},{' '}
          <span className="case-title-qualifier">{page.titleQualifier}</span>
        </h1>
        <p className="hero-lead">{page.lead}</p>
        <ul className="m-stack">
          {page.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-ctas">
          <ProfileActions />
        </div>
      </div>
    </section>
  );
}
