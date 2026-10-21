import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Testimonial } from '@/lib/types';

/**
 * Human-readable attribution stating how the author worked with me.
 */
function getAttribution(testimonial: Testimonial): string {
  if (testimonial.relation === 'client') {
    return 'Client';
  }

  return testimonial.context
    ? `A travaillé à mes côtés chez ${testimonial.context}`
    : 'A travaillé à mes côtés';
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" aria-labelledby="temoignages-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Témoignages"
          title="Travailler avec moi"
          titleId="temoignages-title"
          lead="Les retours de clients et de personnes avec qui j’ai travaillé."
        />
        <div className="quotes">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.id}>
              <blockquote>{testimonial.review}</blockquote>
              <figcaption>
                <span className="who">{testimonial.name}</span>
                <span className="relation">{getAttribution(testimonial)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
