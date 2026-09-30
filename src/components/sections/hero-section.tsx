import Image from 'next/image';
import Link from 'next/link';
import { HERO_CONTENT } from '@/lib/constants';
import { ProfileActions } from '@/components/ui/profile-actions';

/**
 * Homepage hero.
 */
export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-kicker">{HERO_CONTENT.titleKicker}</span>{' '}
            {HERO_CONTENT.title}
          </h1>
          <p className="sub">{HERO_CONTENT.subtitle}</p>
          <div className="hero-ctas">
            <ProfileActions />
            <Link className="cta-text-link" href={HERO_CONTENT.secondaryCtaHref}>
              {HERO_CONTENT.secondaryCtaLabel}
            </Link>
          </div>
        </div>
        <div className="hero-side">
          <div className="portrait">
            <Image
              src="/images/tristan-hourtoulle.webp"
              alt="Portrait de Tristan Hourtoulle"
              width={800}
              height={1000}
              sizes="220px"
            />
            <span className="monogram" aria-hidden="true">
              TH
            </span>
          </div>
          <p className="badge-dispo">
            <span className="dot" aria-hidden="true" />
            <span className="badge-dispo-text">
              <span className="badge-dispo-label">{HERO_CONTENT.availableFromLabel}</span>
              <span className="badge-dispo-value">{HERO_CONTENT.availableFromValue}</span>
            </span>
          </p>
          <p className="hero-meta mono">{HERO_CONTENT.locationNote}</p>
        </div>
      </div>
    </section>
  );
}
