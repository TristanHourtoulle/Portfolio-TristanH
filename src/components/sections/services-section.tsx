import { clsx } from 'clsx';
import { OFFERS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

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
      </div>
    </section>
  );
}
