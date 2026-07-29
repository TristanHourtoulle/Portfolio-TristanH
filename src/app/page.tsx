import { AccentProvider } from '@/components/providers/accent-provider';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { ServicesSection } from '@/components/sections/services-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';

/**
 * Only the canonical is declared here: title, description and Open Graph
 * are already the site-wide defaults set in the root layout, and
 * redeclaring them would just create a second place to keep in sync. The
 * path is relative, resolved against `metadataBase`.
 */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/**
 * The availability badge in HeroSection reads "today" on the server. A
 * fully static page would freeze that value at build time, drifting from
 * reality until the next deploy. A daily revalidation is more than
 * enough precision for a "in about 15 days" badge, and is cheaper than
 * `force-dynamic`, which would opt the whole homepage out of caching for
 * a single line of text.
 */
export const revalidate = 86400;

export default function Home() {
  return (
    <AccentProvider>
      <main id="contenu" tabIndex={-1}>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </AccentProvider>
  );
}
