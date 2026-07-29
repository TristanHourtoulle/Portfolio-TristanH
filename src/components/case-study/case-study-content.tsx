import { CaseStudyTestimonial } from '@/components/case-study/case-study-testimonial';
import type { CaseStudyPageContent } from '@/lib/types';

interface CaseStudyContentProps {
  page: CaseStudyPageContent;
}

/**
 * The two-column body: a sticky "En bref" sidebar (client, mission,
 * period, status, stack, and any live client sites) next to the
 * narrative prose, which closes on the client's quote when one covers
 * the mission. Collapses to a single column, sidebar first, under 880px
 * (see `.case-grid` in globals.css).
 */
export function CaseStudyContent({ page }: CaseStudyContentProps) {
  return (
    <section className="case-content" aria-label="Détails du projet">
      <div className="wrap case-grid">
        <aside className="case-sidebar">
          <div className="sidebar-block">
            <p className="sidebar-title mono">En bref</p>
            <dl>
              <div>
                <dt>Client</dt>
                <dd>{page.title}</dd>
              </div>
              <div>
                <dt>Type de mission</dt>
                <dd>{page.missionType}</dd>
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
              {page.liveClientSites.length > 0 && (
                <div>
                  <dt>Sites clients en production</dt>
                  <dd>
                    <ul className="live-sites-list">
                      {page.liveClientSites.map((site) => (
                        <li key={site.href}>
                          <a href={site.href} target="_blank" rel="noopener noreferrer">
                            {site.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
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
          {page.testimonial && <CaseStudyTestimonial testimonial={page.testimonial} />}
        </div>
      </div>
    </section>
  );
}
