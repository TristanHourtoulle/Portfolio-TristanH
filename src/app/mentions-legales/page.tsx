import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { LEGAL_CONTENT } from '@/lib/legal-content';

/**
 * Not indexed on purpose: this is administrative boilerplate with no
 * search intent behind it, and letting it rank would only dilute the
 * portfolio's own pages in results. It stays reachable and crawlable
 * (`follow: true`) from the footer link on every page, so linked
 * destinations such as Calendly's privacy policy are not orphaned.
 */
export const metadata: Metadata = {
  title: 'Mentions légales · Tristan Hourtoulle',
  description:
    "Mentions légales du portfolio de Tristan Hourtoulle : éditeur, hébergeur, propriété intellectuelle, données personnelles et droit applicable.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const { editor, host, sections, lastUpdatedIso, lastUpdatedLabel } = LEGAL_CONTENT;

  return (
    <>
      <main id="contenu">
        <section className="legal" aria-labelledby="mentions-title">
          <div className="wrap">
            <div className="legal-head">
              <span className="eyebrow">Informations légales</span>
              <h1 id="mentions-title">Mentions légales</h1>
              <p className="legal-updated">
                Dernière mise à jour : <time dateTime={lastUpdatedIso}>{lastUpdatedLabel}</time>
              </p>
            </div>

            <div className="legal-content">
              <p>
                Conformément à l&apos;article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la
                confiance dans l&apos;économie numérique (LCEN), voici les informations
                d&apos;identification de l&apos;éditeur et de l&apos;hébergeur de ce site.
              </p>

              <h2 id="editeur-title">Éditeur du site</h2>
              <dl className="legal-facts" aria-labelledby="editeur-title">
                <div>
                  <dt>Nom</dt>
                  <dd>{editor.name}</dd>
                </div>
                <div>
                  <dt>Statut</dt>
                  <dd>{editor.legalStatus}</dd>
                </div>
                <div>
                  <dt>Adresse</dt>
                  <dd>
                    <address>
                      {editor.addressLines.map((line, index) => (
                        <span key={line}>
                          {index > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>
                <div>
                  <dt>SIRET</dt>
                  <dd className="mono legal-siret">{editor.siret}</dd>
                </div>
                <div>
                  <dt>TVA</dt>
                  <dd>{editor.vatMention}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${editor.email}`}>{editor.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Directeur de la publication</dt>
                  <dd>{editor.publicationDirector}</dd>
                </div>
              </dl>

              <h2 id="hebergeur-title">Hébergeur</h2>
              <p>Ce site est hébergé par :</p>
              <address className="legal-host-address">
                <span>{host.name}</span>
                {host.addressLines.map((line) => (
                  <span key={line}>
                    <br />
                    {line}
                  </span>
                ))}
              </address>

              {sections.map((section) => (
                <div key={section.id}>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
