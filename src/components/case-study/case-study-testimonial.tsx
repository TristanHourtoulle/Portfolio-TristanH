import { TESTIMONIALS } from '@/lib/constants';
import type { CaseStudyTestimonial as CaseStudyTestimonialContent } from '@/lib/types';

interface CaseStudyTestimonialProps {
  testimonial: CaseStudyTestimonialContent;
}

/**
 * Client quote closing a case-study narrative.
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
