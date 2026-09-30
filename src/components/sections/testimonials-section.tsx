import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

export function TestimonialsSection() {
  return (
    <section id="temoignages" aria-labelledby="temoignages-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent les clients"
          titleId="temoignages-title"
          lead="Cinq avis reçus de clients avec qui j'ai travaillé, tous notés 5 sur 5."
        />
        <div className="quotes">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.id}>
              <blockquote>{testimonial.review}</blockquote>
              <figcaption>
                <span className="who">{testimonial.name}</span>
                <span className="rating" aria-label={`Note : ${testimonial.rating} sur 5`}>
                  {testimonial.rating}/5
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
