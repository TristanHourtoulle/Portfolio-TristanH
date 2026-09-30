import Image from 'next/image';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES } from '@/lib/constants';
import { ProfileActions } from '@/components/ui/profile-actions';
import type { CaseStudyPageContent } from '@/lib/types';

interface CaseStudyHeroProps {
  page: CaseStudyPageContent;
}

/**
 * Hero of a case-study detail page.
 */
export function CaseStudyHero({ page }: CaseStudyHeroProps) {
  const client = CLIENT_COLOR_BY_ID[page.clientId];

  return (
    <section className="case-hero" aria-labelledby="case-title">
      <div className="wrap">
        <div className="hero-meta-row">
          {client.logo && (
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
          )}
          <span className="hero-status">{page.statusBadge}</span>
        </div>
        <span className="eyebrow">
          Étude de cas · {page.engagementType.toLowerCase()}, {page.periodInline}
        </span>
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
          {page.externalLinks.map((link) => (
            <a
              key={link.href}
              className="cta-text-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
