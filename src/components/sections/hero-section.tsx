import Image from 'next/image';
import { HERO_CONTENT } from '@/lib/constants';
import { getAvailabilityLabel } from '@/lib/availability';
import { Button } from '@/components/ui/button';

/**
 * Homepage hero.
 */
export function HeroSection() {
  const availabilityLabel = getAvailabilityLabel();

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
            <Button variant="primary" href={HERO_CONTENT.primaryCtaHref}>
              {HERO_CONTENT.primaryCtaLabel}
            </Button>
            <Button variant="ghost" href={HERO_CONTENT.secondaryCtaHref}>
              {HERO_CONTENT.secondaryCtaLabel}
            </Button>
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
            Prochaine disponibilité : <span>{availabilityLabel}</span>
          </p>
          <p className="hero-meta mono">{HERO_CONTENT.locationNote}</p>
        </div>
      </div>
    </section>
  );
}
