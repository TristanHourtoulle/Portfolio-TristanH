import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { OFFERS, SITE_CONFIG } from '@/lib/constants';
import { buildSiteVitrineStructuredData, serializeJsonLd } from '@/lib/structured-data';

/**
 * Bare subject: the root layout's `title.template` appends the brand
 * suffix to `<title>`, so spelling it out here would duplicate it.
 */
const PAGE_TITLE = 'Site vitrine : contenu, prix et hébergement';

/**
 * Social titles carry the suffix explicitly instead. Next applies
 * `title.template` to `<title>` only, never to `openGraph.title` or
 * `twitter.title`, and a shared card has no site chrome to supply the
 * brand on its own.
 */
const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  "Site vitrine pour une entreprise ou un artisan : ce qu'il contient, sa différence avec une landing page et un site e-commerce, son prix et son hébergement.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/site-vitrine' },
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
    url: '/site-vitrine',
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const VITRINE_OFFER = OFFERS[0];
const APP_OFFER = OFFERS[1];

/**
 * Prose is held as arrays of plain strings rather than as JSX text.
 * French copy is dense in apostrophes, and `react/no-unescaped-entities`
 * (on through `next/core-web-vitals`) would force every one of them into
 * an `&apos;` entity, which makes the copy unreadable in the editor and
 * unreviewable in a diff.
 */
const DEFINITION_PARAGRAPHS = [
  "Un site vitrine présente une activité : ce que vous faites, pour qui vous le faites, et comment vous joindre. Il ne vend rien en ligne et ne gère ni panier ni commande. Son seul travail est d'amener un visiteur jusqu'à un contact, un appel ou une demande de devis.",
  "C'est le format qui répond à deux situations très concrètes : votre activité est invisible en ligne, ou votre site actuel ne convertit pas les visiteurs en contacts. Dans le premier cas on part de rien, dans le second on reprend un site qui existe déjà.",
  'Je construis ce type de site depuis 2024, avec des PME, des startups et des agences.',
];

const SCOPE_PARAGRAPHS = [
  "Le nombre de pages n'est pas fixé d'avance : il se décide au cadrage, en fonction de ce que votre activité a réellement besoin de dire. C'est aussi l'un des éléments qui font varier le budget, avec les fonctionnalités et les intégrations.",
  "La validation de la maquette est le moment où l'on arrête cette structure, page par page. Pas trois semaines plus tard, sur un site à moitié construit.",
];

const HOSTING_PARAGRAPHS = [
  "Si vous disposez déjà d'une infrastructure, votre propre VPS par exemple, le site y est hébergé et vous ne payez aucun frais d'hébergement.",
  "Sinon, je m'en charge et je le facture annuellement : comptez 2 à 3 euros par mois pour un site vitrine. Dans les deux cas, vous savez exactement où vit votre projet.",
  "Le nom de domaine et la mise en ligne font partie de l'offre. Le code, lui, est versionné sur un dépôt qui vous appartient dès le début du projet, et tout est transféré à la livraison : si vous décidez un jour de changer d'hébergeur ou de prestataire, rien ne vous retient.",
];

const PROCESS_PARAGRAPHS = [
  "Quatre étapes, toujours dans le même ordre. Un appel découverte de 30 minutes, gratuit et sans engagement. Une proposition chiffrée sous 5 jours, avec le périmètre détaillé, un budget ferme et un planning. Des sprints hebdomadaires, avec une démo chaque semaine sur un lien de test que vous pouvez partager. Puis la livraison : mise en ligne, formation à l'outil, transfert complet du code.",
  'Une session de formation est incluse pour que vous soyez autonome sur le site. Je corrige gratuitement les anomalies pendant 30 jours, et je propose une maintenance optionnelle si vous préférez déléguer les évolutions.',
];

const AUTHOR_PARAGRAPHS = [
  "Je m'appelle Tristan Hourtoulle, développeur web full-stack et designer freelance. Je conçois les interfaces dans Figma, puis je les développe moi-même en Next.js et TypeScript : rien ne se perd entre la maquette et le produit final.",
  "Vous parlez à une seule personne, du premier appel à la mise en ligne. Pas de chef de projet à relancer, pas de couche commerciale, pas d'aller-retour entre un designer et un développeur qui ne se connaissent pas.",
];

/**
 * The deliverable page for the richest observed term.
 *
 * Two of its sections exist because the research showed buyers trying to
 * tell formats apart before they buy one ("site vitrine ou landing page",
 * "site vitrine ou e-commerce"). The site's own Offer 1 bundles the first
 * pair under an "et", so the comparison has to be made here rather than
 * left for the visitor to infer from a card title.
 */
export default function SiteVitrinePage() {
  return (
    <>
      {/*
        Breadcrumb mirroring the visible trail below, plus the `Service`
        node for the offer this page documents. It reuses the identity the
        homepage catalog already declares rather than minting a second one.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSiteVitrineStructuredData()) }}
      />
      <main id="contenu" tabIndex={-1}>
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <span aria-current="page">Site vitrine</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="landing-head" aria-labelledby="vitrine-title">
          <div className="wrap">
            <span className="eyebrow">Site vitrine</span>
            <h1 id="vitrine-title">
              Site vitrine : le site qui présente votre activité et amène des contacts
            </h1>
            <p className="lead">
              Un site conçu dans Figma, développé en Next.js et mis en ligne par la même personne.
              Maquette validée avant la première ligne de code, référencement technique inclus,
              formation à la livraison.
            </p>
            <p className="landing-terms mono">
              <span>
                {VITRINE_OFFER.priceNote} <strong>{VITRINE_OFFER.price}</strong>
              </span>
              <span>{VITRINE_OFFER.delay}</span>
              <span>Hébergement 2 à 3 € / mois</span>
            </p>
            <div className="landing-actions">
              <Button href={SITE_CONFIG.calendlyUrl}>Réserver un appel de 30 min, gratuit</Button>
              <Button variant="ghost" href="/tarifs">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="definition-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Définition"
              title="Ce qu'est un site vitrine, et à quoi il sert"
              titleId="definition-title"
            />
            <div className="landing-prose">
              {DEFINITION_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="comparaison-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Ne pas confondre"
              title="Site vitrine, landing page ou site e-commerce"
              titleId="comparaison-title"
              lead="Trois formats souvent mis dans le même sac, alors qu'ils ne servent pas le même objectif et ne coûtent pas la même chose."
            />
            <div className="compare-grid">
              <article className="compare-card">
                <h3>Site vitrine ou landing page</h3>
                <p>
                  Une landing page est une page unique, construite autour d&apos;une seule action :
                  s&apos;inscrire, demander une démo, réserver un créneau. Elle sert le plus souvent
                  une campagne précise, et elle a une durée de vie.
                </p>
                <p>
                  Un site vitrine est un ensemble de pages qui couvre toute l&apos;activité, et il
                  reste en place. Il est l&apos;adresse permanente, la landing page est un point
                  d&apos;entrée ponctuel.
                </p>
                <p>
                  Ici, les deux relèvent de la même offre, «&nbsp;{VITRINE_OFFER.title}&nbsp;», parce que le
                  travail est identique : maquette Figma, développement Next.js, référencement
                  technique, mise en ligne. Ce qui change, c&apos;est le nombre de pages et le
                  nombre d&apos;objectifs à servir.
                </p>
              </article>
              <article className="compare-card">
                <h3>Site vitrine ou site e-commerce</h3>
                <p>
                  Un site e-commerce gère un catalogue, un panier, des paiements, des stocks et des
                  commandes. Ce n&apos;est pas un site avec une option de vente, c&apos;est une
                  application, avec la logique métier et la base de données que cela suppose.
                </p>
                <p>
                  Un site vitrine peut présenter des produits ou des prestations et renvoyer vers un
                  contact ou un devis, mais il n&apos;encaisse rien.
                </p>
                <p>
                  Si vous devez vendre en ligne, le projet ne relève plus du site vitrine mais de
                  l&apos;offre «&nbsp;{APP_OFFER.title}&nbsp;», chiffrée à partir de {APP_OFFER.price}. Le
                  paiement en ligne, je le construis : sur la plateforme Hosteed, le tunnel passe
                  par Stripe, de la demande de réservation jusqu&apos;à l&apos;encaissement.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="contenu-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Périmètre"
              title="Ce que comprend un site vitrine"
              titleId="contenu-title"
              lead="Quatre choses, incluses dans le prix de départ et non facturées en supplément."
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

        <section aria-labelledby="prix-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Budget"
              title="Combien coûte un site vitrine"
              titleId="prix-title"
            />
            <div className="landing-prose">
              <p>
                Un site vitrine démarre {VITRINE_OFFER.priceNote.toLowerCase()}{' '}
                {VITRINE_OFFER.price}, et se livre en 2 à 4 semaines. Ce montant est un point de
                départ, pas un forfait : le budget dépend du périmètre réel, nombre d&apos;écrans,
                fonctionnalités, intégrations.
              </p>
              <p>
                Chaque projet reçoit une proposition à prix ferme, établie après l&apos;appel
                découverte. Vous connaissez le montant total avant de vous engager, et il ne bouge
                pas en cours de route.
              </p>
              <p>
                Le détail des trois offres et de ce qui fait varier le montant se trouve sur la{' '}
                <Link href="/tarifs">page tarifs</Link>. Si votre site existe déjà et qu&apos;il
                s&apos;agit de le reprendre, voyez plutôt la{' '}
                <Link href="/refonte-site-web">page refonte</Link>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="hebergement-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Hébergement"
              title="Quel hébergeur pour un site vitrine"
              titleId="hebergement-title"
            />
            <div className="landing-prose">
              {HOSTING_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="deroulement-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Déroulement"
              title="Comment se passe le projet"
              titleId="deroulement-title"
            />
            <div className="landing-prose">
              {PROCESS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Les quatre étapes sont détaillées sur la{' '}
                <Link href="/#processus">page d&apos;accueil</Link>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="auteur-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Qui le construit"
              title="Une seule personne, du premier appel à la mise en ligne"
              titleId="auteur-title"
            />
            <div className="landing-prose">
              {AUTHOR_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
              <Link className="related-card" href="/refonte-site-web">
                <span className="mono">Refonte</span>
                <h3>Refonte d&apos;un site existant</h3>
                <p>
                  Quand une refonte se justifie, ce qu&apos;elle comprend, et comment se passe le
                  devis quand vous consultez plusieurs prestataires.
                </p>
                <span className="related-link">
                  Lire la page <span aria-hidden="true">→</span>
                </span>
              </Link>
              <Link className="related-card" href="/realisations">
                <span className="mono">Réalisations</span>
                <h3>Ce que donne un projet livré</h3>
                <p>
                  Quatre études de cas détaillées : le contexte, mon intervention et le résultat,
                  captures à l&apos;appui.
                </p>
                <span className="related-link">
                  Voir les réalisations <span aria-hidden="true">→</span>
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
