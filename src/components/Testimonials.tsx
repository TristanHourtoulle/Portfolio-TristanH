'use client';

import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { AverageRatingCard } from '@/components/ui/AverageRatingCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { TESTIMONIALS, TESTIMONIALS_CONFIG } from '@/lib/constants';

export function Testimonials() {
  // Find specific testimonials by name for layout
  const paulTestimonial = TESTIMONIALS.find((t) => t.name === 'Paul L.');
  const cyrilTestimonial = TESTIMONIALS.find((t) => t.name === 'Cyril K.');
  const vincentTestimonial = TESTIMONIALS.find((t) => t.name === 'Vincent G.');
  const corinneTestimonial = TESTIMONIALS.find((t) => t.name === 'Corinne E.');
  const timotheTestimonial = TESTIMONIALS.find((t) => t.name === 'Timothé C.');

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">
            <span className="text-primary-blue">03.</span> Toujours pas convaincu ?
          </h2>
          <p className="text-text-light">Les retours de mes clients ne mentent pas.</p>
        </div>

        {/* Mobile Layout: Stack all cards */}
        <div className="flex flex-col gap-4 lg:hidden">
          <AnimatedCard delay={0}>
            {paulTestimonial && <TestimonialCard testimonial={paulTestimonial} />}
          </AnimatedCard>
          <AnimatedCard delay={100}>
            {cyrilTestimonial && <TestimonialCard testimonial={cyrilTestimonial} />}
          </AnimatedCard>
          <AnimatedCard delay={200}>
            <AverageRatingCard
              rating={TESTIMONIALS_CONFIG.averageRating}
              totalClients={TESTIMONIALS_CONFIG.totalClients}
            />
          </AnimatedCard>
          <AnimatedCard delay={300}>
            {vincentTestimonial && (
              <TestimonialCard testimonial={{ ...vincentTestimonial, variant: 'featured' }} />
            )}
          </AnimatedCard>
          <AnimatedCard delay={400}>
            {corinneTestimonial && <TestimonialCard testimonial={corinneTestimonial} />}
          </AnimatedCard>
          <AnimatedCard delay={500}>
            {timotheTestimonial && <TestimonialCard testimonial={timotheTestimonial} />}
          </AnimatedCard>
        </div>

        {/* Desktop Layout: Complex grid matching Figma */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {/* Row 1-2: Paul L. spans 2 rows in column 1 */}
          <AnimatedCard delay={0} className="row-span-2">
            {paulTestimonial && <TestimonialCard testimonial={paulTestimonial} />}
          </AnimatedCard>

          {/* Column 2: Cyril K. (row 1) */}
          <AnimatedCard delay={100}>
            {cyrilTestimonial && <TestimonialCard testimonial={cyrilTestimonial} />}
          </AnimatedCard>

          {/* Column 3: Note Moyenne (row 1) */}
          <AnimatedCard delay={200}>
            <AverageRatingCard
              rating={TESTIMONIALS_CONFIG.averageRating}
              totalClients={TESTIMONIALS_CONFIG.totalClients}
            />
          </AnimatedCard>

          {/* Column 2-3: Vincent G. spans 2 columns (row 2) */}
          <AnimatedCard delay={300} className="col-span-2">
            {vincentTestimonial && (
              <TestimonialCard testimonial={{ ...vincentTestimonial, variant: 'featured' }} />
            )}
          </AnimatedCard>

          {/* Row 3: Corinne E. (column 1) */}
          <AnimatedCard delay={400}>
            {corinneTestimonial && <TestimonialCard testimonial={corinneTestimonial} />}
          </AnimatedCard>

          {/* Row 3: Timothé C. spans 2 columns (columns 2-3) */}
          <AnimatedCard delay={500} className="col-span-2">
            {timotheTestimonial && <TestimonialCard testimonial={timotheTestimonial} />}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
