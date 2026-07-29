import Image from 'next/image';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES } from '@/lib/constants';
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
 *
 * The <h1> is the client name plus a short qualifier, not the bare brand
 * name it used to be. "Hosteed" is a string only someone who already
 * knows Hosteed would ever type; the words that describe what the thing
 * is were sitting in the eyebrow above, which is not a heading and
 * carries none of the weight. Each qualifier is taken from what the
 * project actually is (see `titleQualifier` in case-studies-content.ts),
 * and renders as a smaller second line so the client name still leads.
 *
 * The comma and the `{' '}` after it stay in the JSX because the
 * qualifier is display:block: the browser drops that trailing space when
 * it paints, so the visible heading is unchanged, but the DOM text a
 * crawler flattens still reads "Hosteed, plateforme de location de
 * logements" rather than running the two words together.
 */
export function CaseStudyHero({ page }: CaseStudyHeroProps) {
  const client = CLIENT_COLOR_BY_ID[page.clientId];

  return (
    <section className="case-hero" aria-labelledby="case-title">
      <div className="wrap">
        <div className="hero-meta-row">
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
          <span className="hero-status">{page.statusBadge}</span>
        </div>
        <span className="eyebrow">
          Étude de cas · mission freelance, {page.periodInline}
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
