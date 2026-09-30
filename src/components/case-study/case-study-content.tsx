import type { CaseStudyPageContent } from '@/lib/types';

interface CaseStudyContentProps {
  page: CaseStudyPageContent;
}

/**
 * Sidebar and narrative body of a case-study page.
 */
export function CaseStudyContent({ page }: CaseStudyContentProps) {
  return (
    <section className="case-content" aria-label="Détails du projet">
      <div className="wrap case-grid">
        <aside className="case-sidebar">
          <div className="sidebar-block">
            <h2 className="sidebar-title mono">En bref</h2>
            <dl>
              <div>
                <dt>Entreprise</dt>
                <dd>{page.title}</dd>
              </div>
              <div>
                <dt>Type d&apos;expérience</dt>
                <dd>{page.engagementType}</dd>
              </div>
              <div>
                <dt>Période</dt>
                <dd>{page.period}</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd>{page.statusDetail}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>
                  <ul className="m-stack">
                    {page.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <div className="case-narrative">
          {page.narrative.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
