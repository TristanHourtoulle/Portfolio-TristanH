import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { OFFERS, PROCESS_STEPS, SITE_CONFIG } from '@/lib/constants';
import { buildRefonteStructuredData, serializeJsonLd } from '@/lib/structured-data';

/**
 * Bare subject: the root layout's `title.template` appends the brand
 * suffix to `<title>`, so spelling it out here would duplicate it.
 */
const PAGE_TITLE = 'Refonte de site web : périmètre, budget et délai';

/**
 * Social titles carry the suffix explicitly instead. Next applies
 * `title.template` to `<title>` only, never to `openGraph.title` or
 * `twitter.title`, and a shared card has no site chrome to supply the
 * brand on its own.
 */
const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  'Refonte de site web : maquette Figma, développement Next.js, SEO technique et mise en ligne. À partir de 1 500 €, livré en 2 à 4 semaines, prix ferme au devis.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/refonte-site-web' },
  /**
   * Redeclared in full because Next replaces the parent `openGraph`
   * instead of merging it: inheriting the layout's block would leave this
   * page advertising the homepage as its `og:url`.
   */
  openGraph: {
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.brandName,
    url: '/refonte-site-web',
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/**
 * The site vitrine offer is the one a refonte is billed under, so its
 * price, delay and scope are read from the same constant the homepage
 * renders. Reading it rather than restating it is what stops this page
 * from quietly advertising last quarter's price.
 */
const VITRINE_OFFER = OFFERS[0];

/**
 * Prose is held as arrays of plain strings rather than as JSX text.
 * French copy is dense in apostrophes, and `react/no-unescaped-entities`
 * (on through `next/core-web-vitals`) would force every one of them into
 * an `&apos;` entity, which makes the copy unreadable in the editor and
 * unreviewable in a diff.
 */
const WHY_PARAGRAPHS = [
  "Une refonte ne se décide pas parce qu'un site est vieux. Elle se décide quand le site coûte quelque chose.",
  'Le cas le plus fréquent est commercial : votre activité est invisible en ligne, ou votre site actuel ne convertit pas les visiteurs en contacts. Le trafic arrive, ou il devrait arriver, et il ne se passe rien derrière.',
  "L'autre cas est technique. Sur Hosteed, une plateforme de réservation, le site tournait sur WordPress et posait de gros problèmes de performance : pages lentes, comportement imprévisible, et le site allait jusqu'à tomber complètement. C'est précisément ce qui a déclenché l'appel. Le sujet n'était plus une fonctionnalité manquante, c'était un site sur lequel on ne pouvait plus compter.",
  "Dans les deux cas, la question de départ n'est pas esthétique. Elle est de savoir ce que le site est censé produire, et pourquoi il ne le produit pas aujourd'hui.",
];

const SCOPE_PARAGRAPHS = [
  "Reprendre l'existant ou repartir de la base se décide au cadrage, pas par principe. Sur Hosteed, la plateforme a été reprise depuis la base plutôt que rafistolée, parce que l'architecture était elle-même le problème : rafistoler aurait conservé la cause.",
  'Le référencement naturel technique et le suivi des visites font partie du périmètre, pas des options à ajouter ensuite. Une refonte qui perd le référencement acquis par le site précédent est une refonte ratée.',
];

const BUDGET_PARAGRAPHS = [
  "Chaque projet reçoit une proposition à prix ferme, établie après l'appel découverte. Le budget dépend du périmètre réel : nombre d'écrans, fonctionnalités, intégrations. Vous connaissez le montant total avant de vous engager.",
  'La proposition arrive sous 5 jours et contient trois choses : le périmètre détaillé, le budget ferme et le planning. Vous signez en connaissant le prix et la date de livraison.',
];

const SPEC_PARAGRAPHS = [
  "Vous n'avez pas besoin d'un cahier des charges pour me consulter. Pour l'appel découverte, votre objectif principal, deux ou trois exemples de sites ou d'outils que vous aimez et une idée de votre budget suffisent. Trente minutes suffisent pour cadrer l'essentiel.",
  "Si vous en avez déjà un, ou si vous consultez plusieurs prestataires dans le cadre d'un appel d'offres, la proposition chiffrée répond dans le même format : périmètre point par point, budget ferme, planning daté. Vous pouvez la comparer ligne à ligne avec les autres.",
  "Un point qui compte quand on refait un site qu'on n'a pas commandé soi-même : le code est versionné sur un dépôt qui vous appartient dès le début du projet, et tout est transféré à la livraison. Aucune dépendance technique à mon égard.",
];

const AFTER_PARAGRAPHS = [
  "Après la mise en ligne, l'hébergement est le seul coût récurrent. Si vous disposez déjà d'une infrastructure, votre propre VPS par exemple, le site y est hébergé et vous ne payez aucun frais d'hébergement. Sinon je m'en charge et je le facture annuellement : comptez 2 à 3 euros par mois pour un site vitrine.",
  'Une session de formation est incluse pour que vous soyez autonome sur le site. Je corrige gratuitement les anomalies pendant 30 jours, et je propose une maintenance optionnelle si vous préférez déléguer les évolutions.',
];

/**
 * The four steps are the site's process, not a per-page invention, so
 * they are read from the same constant the homepage renders. This page
 * is the only one of the three landing pages that shows all four in
 * full: a refonte buyer is the one running a formal process, and
 * "planning" is a term this audience searches on explicitly.
 */
export default function RefonteSiteWebPage() {
  return (
    <>
      {/*
        Breadcrumb only. A refonte is the site vitrine offer applied to an
        existing site, as the scope section on this page says, so it gets no
        `Service` node of its own: that would declare a fourth offering the
        business does not sell.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildRefonteStructuredData()) }}
      />
      <main id="contenu" tabIndex={-1}>
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <span aria-current="page">Refonte de site web</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="landing-head" aria-labelledby="refonte-title">
          <div className="wrap">
            <span className="eyebrow">Refonte de site web</span>
            <h1 id="refonte-title">Refonte de site web : reprendre un site qui ne convertit plus</h1>
            <p className="lead">
              Votre site actuel ne convertit pas les visiteurs en contacts, ou il ne suit plus votre
              activité. Je le reprends de la maquette Figma à la mise en ligne, avec un périmètre, un
              prix ferme et une date de livraison posés avant la première ligne de code.
            </p>
            <p className="landing-terms mono">
              <span>
                {VITRINE_OFFER.priceNote} <strong>{VITRINE_OFFER.price}</strong>
              </span>
              <span>{VITRINE_OFFER.delay}</span>
              <span>Proposition chiffrée sous 5 jours</span>
            </p>
            <div className="landing-actions">
              <Button href={SITE_CONFIG.calendlyUrl}>Réserver un appel de 30 min, gratuit</Button>
              <Button variant="ghost" href="/tarifs">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="pourquoi-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Le point de départ"
              title="Quand une refonte se justifie"
              titleId="pourquoi-title"
            />
            <div className="landing-prose">
              {WHY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="perimetre-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Périmètre"
              title="Ce que comprend une refonte"
              titleId="perimetre-title"
              lead="Le périmètre est celui de l'offre site vitrine, appliqué à un site existant plutôt qu'à une page blanche."
            />
            <ul className="landing-checks">
              {VITRINE_OFFER.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="landing-prose">
              {SCOPE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="deroulement-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Déroulement"
              title="Comment se déroule le projet"
              titleId="deroulement-title"
              lead="Quatre étapes, toujours dans cet ordre. Le planning est posé dans la proposition chiffrée et suivi en sprints hebdomadaires."
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

        <section aria-labelledby="budget-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Budget"
              title="Devis, cahier des charges et budget"
              titleId="budget-title"
              lead={`Une refonte démarre ${VITRINE_OFFER.priceNote.toLowerCase()} ${VITRINE_OFFER.price}. Ce qui suit explique ce qui fait bouger ce chiffre.`}
            />
            <div className="landing-prose">
              {BUDGET_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3>Faut-il un cahier des charges ?</h3>
              {SPEC_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3>Ce que coûte le site une fois en ligne</h3>
              {AFTER_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Le détail des trois offres et de leurs prix de départ se trouve sur la{' '}
                <Link href="/tarifs">page tarifs</Link>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="exemple-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Un cas réel"
              title="Une refonte menée de bout en bout"
              titleId="exemple-title"
              /*
               * Every clause traces to hosteed-copy.ts: a live WordPress site
               * (l. 28), performance problems severe enough that it went down
               * completely (l. 28), and a platform taken back from the base
               * rather than patched (l. 35). An earlier draft claimed the
               * rebuild ran "sans interrompre l'activité"; nothing in the repo
               * describes a zero-downtime migration, and the source in fact
               * says the opposite about the old site, so the claim is gone.
               */
              lead="Hosteed est la mission qui ressemble le plus à une refonte au sens strict : un site en production, devenu impraticable, repris depuis la base plutôt que rafistolé."
            />
            <div className="landing-prose">
              <p>
                Le parcours complet a été reconstruit, recherche, fiche logement, réservation et
                paiement, côté voyageur comme côté hôte. Un back-office dédié permet à
                l&apos;équipe de suivre les logements, les réservations et les paiements sans
                qu&apos;un développeur ait à intervenir. La plateforme est livrée et se trouve en
                phase de test chez le client.
              </p>
            </div>
            <div className="related-cards landing-links">
              <Link className="related-card" href="/realisations/hosteed">
                <span className="mono">Étude de cas</span>
                <h3>Hosteed</h3>
                <p>
                  Ce qui était cassé, ce qui a été reconstruit et où en est la plateforme
                  aujourd&apos;hui.
                </p>
                <span className="related-link">
                  Lire l&apos;étude de cas <span aria-hidden="true">→</span>
                </span>
              </Link>
              <Link className="related-card" href="/realisations">
                <span className="mono">Réalisations</span>
                <h3>Les quatre études de cas</h3>
                <p>
                  Le contexte, mon intervention et le résultat livré sur chaque mission, captures à
                  l&apos;appui.
                </p>
                <span className="related-link">
                  Voir les réalisations <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="liens-title">
          <div className="wrap">
            <h2 className="eyebrow" id="liens-title">
              Aller plus loin
            </h2>
            <div className="related-cards landing-links">
              <Link className="related-card" href="/tarifs">
                <span className="mono">Tarifs</span>
                <h3>Combien coûte un site internet</h3>
                <p>
                  Les prix de départ des trois offres, ce qui fait varier le montant final et le
                  coût réel une fois le site en ligne.
                </p>
                <span className="related-link">
                  Voir les tarifs <span aria-hidden="true">→</span>
                </span>
              </Link>
              <Link className="related-card" href="/site-vitrine">
                <span className="mono">Site vitrine</span>
                <h3>Ce que contient un site vitrine</h3>
                <p>
                  La différence avec une landing page et avec un site e-commerce, le périmètre, le
                  prix et l&apos;hébergement.
                </p>
                <span className="related-link">
                  Lire la page <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
