import { CLIENT_COLOR_BY_ID } from '@/lib/products';
import type { CaseStudyPageContent } from '@/lib/types';
import { CaseStudyFigure } from './case-study-figure';

interface CaseStudyContentProps {
  page: CaseStudyPageContent;
}

/**
 * Sidebar and narrative body of a realisation page.
 *
 * The live product link sits here, among the project's own facts, rather than
 * in the hero action row, which belongs to the hiring actions.
 *
 * Every provenance row is conditional: a personal project simply has no client
 * and no engagement type, and the list closes up rather than showing a label
 * with nothing under it.
 */
export function CaseStudyContent({ page }: CaseStudyContentProps) {
  return (
    <section className="case-content" aria-label="Détails du projet">
      <div className="wrap case-grid">
        <aside className="case-sidebar">
          <div className="sidebar-block">
            <h2 className="sidebar-title mono">En bref</h2>
            <dl>
              {page.clientId && (
                <div>
                  <dt>Entreprise</dt>
                  <dd>{CLIENT_COLOR_BY_ID[page.clientId].name}</dd>
                </div>
              )}
              {page.engagementType && (
                <div>
                  <dt>Type d&apos;expérience</dt>
                  <dd>{page.engagementType}</dd>
                </div>
              )}
              <div>
                <dt>Période</dt>
                <dd>{page.period}</dd>
              </div>
              {page.statusDetail && (
                <div>
                  <dt>Statut</dt>
                  <dd>{page.statusDetail}</dd>
                </div>
              )}
              {page.externalLinks.length > 0 && (
                <div>
                  <dt>En ligne</dt>
                  <dd>
                    <ul className="sidebar-links">
                      {page.externalLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            className="live-link"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <span aria-hidden="true">&nbsp;↗</span>
                          </a>
                          {link.note && <span className="live-link-note">{link.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
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
              {section.figure && <CaseStudyFigure id={section.figure} />}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
