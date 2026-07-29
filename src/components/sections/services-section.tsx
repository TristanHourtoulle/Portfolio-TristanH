import { clsx } from 'clsx';
import Link from 'next/link';
import { OFFERS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * The three landing pages are linked from here, in prose, rather than only
 * from the footer.
 *
 * This is the section a buyer reads while deciding, so it is the one place
 * on the homepage where "what does a site vitrine actually contain" and
 * "what does it cost" are live questions rather than navigation. A
 * contextual link answering a question the reader is already asking is
 * worth more to them, and to a crawler, than the same URL sitting in a
 * footer list. It also means every landing page is one click from `/`
 * through running content, not two.
 *
 * The header is deliberately not touched: it holds five entries and
 * already wraps at 320px.
 */
export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Services"
          title="Site vitrine, application web sur mesure, ou produit complet"
          titleId="services-title"
          lead="Chaque offre part d'un problème concret, avec un périmètre clair et un délai posés avant de commencer."
        />
        <div className="offers-list">
          {OFFERS.map((offer) => {
            const titleId = `offer-${offer.id}`;
            return (
              <article className="offer" key={offer.id} aria-labelledby={titleId}>
                <div>
                  <span className="num">{offer.numberLabel}</span>
                  <h3 id={titleId}>{offer.title}</h3>
                  <p className="problem">{offer.problem}</p>
                </div>
                <ul>
                  {offer.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="offer-terms">
                  <p className={clsx('price', offer.isPriceCased && 'price-cased')}>
                    <small>{offer.priceNote}</small>
                    {offer.price}
                  </p>
                  <p className="delay">{offer.delay}</p>
                  <a className="offer-cta" href={offer.ctaHref}>
                    {offer.ctaLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="offers-note">
          Trois pages détaillent ces offres : ce que contient un{' '}
          <Link href="/site-vitrine">site vitrine</Link>, ce que{' '}
          <Link href="/tarifs">coûte un site internet</Link>, et comment se passe une{' '}
          <Link href="/refonte-site-web">refonte</Link> quand le site existe déjà.
        </p>
      </div>
    </section>
  );
}
