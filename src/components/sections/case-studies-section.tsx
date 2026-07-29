import { CASE_STUDIES } from '@/lib/constants';
import { CaseStudyCard } from '@/components/sections/case-study-card';
import { AlsoMentioned } from '@/components/sections/also-mentioned';

export function CaseStudiesSection() {
  return (
    <section id="realisations" aria-labelledby="realisations-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Réalisations</span>
          <h2 id="realisations-title">Quatre applications web conçues et développées sur mesure</h2>
          <p className="retint-hint">Survolez un projet : la page prend la couleur de son client.</p>
        </div>
        <div className="projects-list">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        <AlsoMentioned />
      </div>
    </section>
  );
}
