import { PROCESS_STEPS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

export function ProcessSection() {
  return (
    <section id="processus" aria-labelledby="processus-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Méthode de travail"
          title="Comment j’aborde un développement"
          titleId="processus-title"
          lead="Du besoin initial aux retours sur les premières versions."
        />
        <ol className="process-list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.id}>
              <span className="step-num" aria-hidden="true">
                {step.numberLabel}
              </span>
              <h3>{step.title}</h3>
              <p className="step-note">{step.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
