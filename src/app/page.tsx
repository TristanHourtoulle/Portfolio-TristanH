import { AccentProvider } from '@/components/providers/accent-provider';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { CtaSection } from '@/components/sections/cta-section';
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { buildHomeStructuredData, serializeJsonLd } from '@/lib/structured-data';

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
    <>
      {/*
        The site's identity graph (Person, Organization, WebSite,
        Service) is emitted here and on no other route: Google asks for
        Organization on the homepage or a single about page, not repeated
        site-wide, and the other routes reference these nodes by @id
        instead of restating them.
        It sits outside AccentProvider so it stays entirely on the
        server side of the client boundary.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeStructuredData()) }}
      />
      <AccentProvider>
        <main id="contenu" tabIndex={-1}>
          <HeroSection />
          <TrustSection />
          <CaseStudiesSection />
          <ProcessSection />
          <TestimonialsSection />
          <AboutSection />
          <CtaSection />
        </main>
        <SiteFooter />
      </AccentProvider>
    </>
  );
}
