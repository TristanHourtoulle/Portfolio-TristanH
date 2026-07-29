import Image from 'next/image';
import { HERO_CONTENT } from '@/lib/constants';
import { getAvailabilityLabel } from '@/lib/availability';
import { Button } from '@/components/ui/button';

/**
 * Server Component: the availability date below is computed at request
 * time (see getAvailabilityLabel), never in client JS, so the rendered
 * HTML and the browser can never disagree on what "today" is.
 *
 * The portrait ships as a single source, public/images/tristan-hourtoulle.webp.
 * No fallback encoding sits next to it on purpose: next/image negotiates the
 * best format per browser from that one file, so any extra copy would be dead
 * weight downloaded by no one.
 *
 * It is deliberately NOT `priority`. `priority` emits a high-priority
 * <link rel="preload"> in the document head, which the browser acts on
 * before it has any layout, so it fired on phones too, where
 * `.portrait { display: none }` below 820px means the image is never
 * painted. That preload was pure contention against the real mobile LCP,
 * the <h1>. Dropping it lets next/image fall back to loading="lazy",
 * which fixes both viewports at once: a display:none element never
 * intersects the viewport, so phones stop downloading the portrait
 * entirely, while on desktop it is inside the first viewport and the
 * browser fetches it as soon as layout runs. Nothing here is the LCP
 * candidate on any viewport anyway, since the rendered box is capped at
 * 220px wide against a full-width headline.
 *
 * `sizes` is a plain "220px" for the same reason. The previous
 * "(max-width: 820px) 0px, 220px" leaned on a 0px slot, a degenerate
 * descriptor whose candidate selection is not consistent between
 * engines, and it described a range in which the image is now never
 * requested at all.
 */
export function HeroSection() {
  const availabilityLabel = getAvailabilityLabel();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-copy">
          {/*
            The kicker sits INSIDE the <h1> so it counts as heading text:
            the slogan alone contains no term anyone searches for, and a
            sibling <span> above the heading would have carried the words
            with none of the weight. It is styled like the `.eyebrow`
            that opens every other section, so the slogan keeps its size
            and its position and the hero stops being the one section
            without an eyebrow.

            The `{' '}` is load-bearing rather than cosmetic. `.hero-kicker`
            is display:block, so the browser drops that space when it
            paints, but it stays in the DOM text: without it the flattened
            heading a crawler or a screen reader reads would run the two
            lines together as "...freelanceVotre produit web".
          */}
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
