import Link from 'next/link';
import { CASE_STUDY_BY_SLUG, EXPERIENCE_ENTRIES, EXPERIENCE_SECTION } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Dated timeline of delivered work, most recent first.
 */
export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading
          eyebrow={EXPERIENCE_SECTION.eyebrow}
          title={EXPERIENCE_SECTION.title}
          titleId="experience-title"
          lead={EXPERIENCE_SECTION.lead}
        />
        <ol className="timeline">
          {EXPERIENCE_ENTRIES.map((entry) => {
            const caseStudy = CASE_STUDY_BY_SLUG[entry.slug];

            return (
              <li className="timeline-entry" key={entry.slug}>
                <div className="timeline-when">
                  <p className="timeline-period">{caseStudy.period}</p>
                  <p className="timeline-engagement">{entry.engagement}</p>
                </div>
                <div className="timeline-what">
                  <h3>{caseStudy.title}</h3>
                  <p className="timeline-role">{entry.role}</p>
                  <p className="timeline-summary">{entry.summary}</p>
                  {entry.note ? <p className="timeline-note">{entry.note}</p> : null}
                  <ul className="timeline-stack" aria-label={`Technologies utilisées sur ${caseStudy.title}`}>
                    {caseStudy.stack.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <p className="timeline-status">{entry.status}</p>
                  <Link className="timeline-link" href={caseStudy.caseLinkHref}>
                    Lire l&apos;étude de cas<span className="sr-only"> {caseStudy.title}</span>{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
