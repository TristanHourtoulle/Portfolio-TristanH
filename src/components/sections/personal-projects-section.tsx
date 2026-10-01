import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { PERSONAL_PROJECTS } from '@/lib/personal-projects-content';

/**
 * Homepage teaser for the personal projects, pointing at the filtered column.
 */
export function PersonalProjectsSection() {
  return (
    <section aria-labelledby="projets-perso-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Projets personnels"
          title="Trois projets construits en dehors de tout client"
          titleId="projets-perso-title"
          lead="Ce que je suis allé chercher sur mon temps libre, et que les produits client ne demandaient pas : du mobile natif, du temps réel multijoueur et un serveur MCP en production."
        />
        <ul className="perso-teaser-list">
          {PERSONAL_PROJECTS.map((project) => (
            <li key={project.page.slug}>
              <h3>
                <Link href={`/realisations/${project.page.slug}`}>{project.page.title}</Link>
              </h3>
              <p className="mono">{project.page.period}</p>
              <p>{project.teaser}</p>
            </li>
          ))}
        </ul>
        <Link className="related-link" href="/realisations?type=perso">
          Voir les projets personnels <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
