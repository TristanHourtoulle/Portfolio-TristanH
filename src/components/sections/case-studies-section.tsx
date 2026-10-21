import { CASE_STUDIES } from '@/lib/constants';
import { CaseStudyCard } from '@/components/sections/case-study-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function CaseStudiesSection() {
  return (
    <section id="realisations" aria-labelledby="realisations-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Réalisations"
          title="Les applications que j’ai développées"
          titleId="realisations-title"
        />
        <div className="projects-list">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
