import { AccentProvider } from '@/components/providers/accent-provider';
import { HeroSection } from '@/components/sections/hero-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { PersonalProjectsSection } from '@/components/sections/personal-projects-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { ParcoursSection } from '@/components/sections/parcours-section';
import { CtaSection } from '@/components/sections/cta-section';
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { buildHomeStructuredData, serializeJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeStructuredData()) }}
      />
      <AccentProvider>
        <main id="contenu" tabIndex={-1}>
          <HeroSection />
          <ExperienceSection />
          <CaseStudiesSection />
          <PersonalProjectsSection />
          <ProcessSection />
          <TestimonialsSection />
          <AboutSection />
          <ParcoursSection />
          <CtaSection />
        </main>
        <SiteFooter />
      </AccentProvider>
    </>
  );
}
