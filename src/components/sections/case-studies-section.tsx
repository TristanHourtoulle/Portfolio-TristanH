import { CASE_STUDIES } from '@/lib/constants';
import { CaseStudyCard } from '@/components/sections/case-study-card';

export function CaseStudiesSection() {
  return (
    <section id="realisations" aria-labelledby="realisations-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Réalisations</span>
          <h2 id="realisations-title">Quatre applications web développées et livrées de bout en bout</h2>
        </div>
        <div className="projects-list">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
