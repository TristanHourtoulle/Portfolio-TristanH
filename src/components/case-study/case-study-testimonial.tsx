import { TESTIMONIALS } from '@/lib/constants';
import type { CaseStudyTestimonial as CaseStudyTestimonialContent } from '@/lib/types';

interface CaseStudyTestimonialProps {
  testimonial: CaseStudyTestimonialContent;
}

/**
 * Client quote closing a case-study narrative.
 *
 * The review text is never stored in the case-study content: only an id
 * is, and the quote is resolved here against TESTIMONIALS, the same
 * source the homepage list reads. One edit there updates both places,
 * and the two can never drift apart. The lookup is a linear scan over a
 * handful of static entries, run once at build time on a prerendered
 * page.
 *
 * A missing id renders nothing at all: a pull quote with an empty body
 * would be worse than no section. A `pending` slot renders a plain note
 * instead, so a delivered mission still awaiting its review says so
 * rather than staying silent.
 */
export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (testimonial.status === 'pending') {
    return (
      <section className="case-quote-block" aria-labelledby="case-quote-title">
        <h2 id="case-quote-title">Témoignage</h2>
        <p className="case-quote-pending">{testimonial.note}</p>
      </section>
    );
  }

  const quote = TESTIMONIALS.find((entry) => entry.id === testimonial.testimonialId);

  if (!quote) {
    return null;
  }

  return (
    <section className="case-quote-block" aria-labelledby="case-quote-title">
      <h2 id="case-quote-title">Ce qu&rsquo;en dit le client</h2>
      <figure className="case-quote">
        <blockquote>{quote.review}</blockquote>
        <figcaption>
          <span className="who">{quote.name}</span>
          <span className="context">{testimonial.context}</span>
          <span className="rating" aria-label={`Note : ${quote.rating} sur 5`}>
            {quote.rating}/5
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
