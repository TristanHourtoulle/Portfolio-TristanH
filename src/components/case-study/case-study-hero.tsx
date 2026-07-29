import Image from 'next/image';
import { CLIENT_COLOR_BY_ID } from '@/lib/constants';
import type { CaseStudyPageContent } from '@/lib/types';

interface CaseStudyHeroProps {
  page: CaseStudyPageContent;
}

/**
 * Hero for a case-study detail page: client logo, live-status dot, title,
 * lead paragraph, stack pills and CTAs. Unlike the homepage card (which
 * recolors on hover via AccentProvider), the accent here is set once,
 * server-side, through `data-accent` on the page's own wrapper (see
 * `.case-page` in globals.css), so this renders correctly with no client
 * JS at all.
 */
export function CaseStudyHero({ page }: CaseStudyHeroProps) {
  const client = CLIENT_COLOR_BY_ID[page.clientId];

  return (
    <section className="case-hero" aria-labelledby="case-title">
      <div className="wrap">
        <div className="hero-meta-row">
          <span className="hero-logo">
            <Image src={client.logo.src} alt="" aria-hidden="true" width={client.logo.width} height={client.logo.height} />
          </span>
          <span className="hero-status">{page.statusBadge}</span>
        </div>
        <span className="eyebrow">
          Étude de cas · mission freelance, {page.periodInline}
        </span>
        <h1 id="case-title">{page.title}</h1>
        <p className="hero-lead">{page.lead}</p>
        <ul className="m-stack">
          {page.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={page.primaryCta.href}>
            {page.primaryCta.label}
          </a>
          {page.secondaryCtas.map((cta) => (
            <a
              key={cta.href}
              className="btn btn-ghost"
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
