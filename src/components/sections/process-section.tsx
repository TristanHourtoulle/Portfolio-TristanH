import { PROCESS_STEPS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

export function ProcessSection() {
  return (
    <section id="processus" aria-labelledby="processus-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Processus"
          title="Comment on travaille ensemble"
          titleId="processus-title"
          lead="Quatre étapes, toujours dans cet ordre. Vous savez où en est le projet à chaque instant."
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
