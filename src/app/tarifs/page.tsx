import type { Metadata } from 'next';
import { clsx } from 'clsx';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { OFFERS, SITE_CONFIG } from '@/lib/constants';
import { buildTarifsStructuredData, serializeJsonLd } from '@/lib/structured-data';

/**
 * Bare subject: the root layout's `title.template` appends the brand
 * suffix to `<title>`, so spelling it out here would duplicate it.
 */
const PAGE_TITLE = 'Tarifs : combien coûte un site internet professionnel';

/**
 * Social titles carry the suffix explicitly instead. Next applies
 * `title.template` to `<title>` only, never to `openGraph.title` or
 * `twitter.title`, and a shared card has no site chrome to supply the
 * brand on its own.
 */
const SOCIAL_TITLE = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;

const PAGE_DESCRIPTION =
  'Combien coûte un site internet professionnel : site vitrine à partir de 1 500 €, application sur mesure à partir de 3 000 €, et le coût réel après livraison.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/tarifs' },
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
    url: '/tarifs',
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/**
 * Prose is held as arrays of plain strings rather than as JSX text.
 * French copy is dense in apostrophes, and `react/no-unescaped-entities`
 * (on through `next/core-web-vitals`) would force every one of them into
 * an `&apos;` entity, which makes the copy unreadable in the editor and
 * unreviewable in a diff.
 *
 * Every figure below is read from `OFFERS` or restates a fact already
 * published in `FAQ_ITEMS`. None of the FAQ answers is reproduced word
 * for word: the homepage answers a visitor who is already reading a sales
 * page, this page answers someone who arrived from a "combien coûte"
 * query and wants the number before the argument. Same facts, different
 * order, different framing, so the two pages do not compete with each
 * other in search results for the same string.
 */
const VARIATION_PARAGRAPHS = [
  "Les montants ci-dessus sont des prix de départ, pas des forfaits. Le budget dépend du périmètre réel : nombre d'écrans, fonctionnalités, intégrations avec vos outils existants.",
  "Concrètement, un site de cinq pages avec un formulaire de contact et un site de vingt pages avec un espace client ne sont pas le même projet, même si les deux s'appellent un site vitrine. Le premier reste près du prix de départ, le second s'en éloigne.",
  "Le périmètre joue aussi dans l'autre sens. Certains clients arrivent avec leurs maquettes déjà faites, d'autres avec un développeur en interne. L'offre s'ajuste au périmètre dont vous avez réellement besoin, et le prix suit.",
  "Dans tous les cas, chaque projet reçoit une proposition à prix ferme, établie après l'appel découverte. Vous connaissez le montant total avant de vous engager.",
];

const RECURRING_PARAGRAPHS = [
  "Un site coûte deux choses : une fois pour le construire, puis un peu chaque mois pour le laisser en ligne. La seconde est celle qu'on oublie de demander.",
  "Si vous disposez déjà d'une infrastructure, votre propre VPS par exemple, le site y est hébergé et vous ne payez aucun frais d'hébergement. Sinon, je m'en charge et je le facture annuellement : comptez 2 à 3 euros par mois pour un site vitrine, environ 10 euros par mois pour une application sur mesure plus lourde. Dans les deux cas, vous savez exactement où vit votre projet.",
  "Il n'y a rien d'autre à payer pour continuer à utiliser ce qui a été livré. Le code est versionné sur un dépôt qui vous appartient dès le début du projet, et tout est transféré à la livraison. Aucune dépendance technique à mon égard.",
  "Une session de formation est incluse pour que vous soyez autonome sur l'outil. Je corrige gratuitement les anomalies pendant 30 jours, et je propose une maintenance optionnelle si vous préférez déléguer les évolutions plutôt que les gérer vous-même.",
];

const TIMING_PARAGRAPHS = [
  'Un site vitrine se livre en 2 à 4 semaines, une application sur mesure en 6 à 12 semaines selon le périmètre. Le planning est posé dans la proposition chiffrée et suivi en sprints hebdomadaires.',
  "Une démo a lieu chaque semaine, sur un lien de test que vous pouvez partager. Les ajustements se font au fil de l'eau, pas à la fin, ce qui est aussi la raison pour laquelle le prix ne bouge pas en cours de route.",
];

const QUOTE_PARAGRAPHS = [
  "Tout commence par un appel de 30 minutes, gratuit et sans engagement. On y parle de votre activité, de votre objectif et de ce qui bloque aujourd'hui.",
  "Pour préparer cet appel, trois choses suffisent : votre objectif principal, deux ou trois exemples de sites ou d'outils que vous aimez, et une idée de votre budget. Trente minutes suffisent pour cadrer l'essentiel. Un cahier des charges n'est pas nécessaire.",
  'La proposition chiffrée arrive sous 5 jours : périmètre détaillé, budget ferme et planning. Vous signez en connaissant le prix et la date de livraison.',
];

/**
 * The price page for the largest observed search cluster.
 *
 * It deliberately does not re-render the homepage offer cards. Those
 * cards sell three offers one after the other; someone who typed
 * "combien coûte un site internet en moyenne" is comparing, and a
 * comparison is read down a column. Hence the table, which also keeps
 * this page from duplicating the services section wholesale.
 */
export default function TarifsPage() {
  return (
    <>
      {/*
        Breadcrumb only. The three offers are already marked up once, in the
        homepage offer catalog; repeating them here would duplicate two of
        them and could not describe the third, whose price is cased.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildTarifsStructuredData()) }}
      />
      <main id="contenu" tabIndex={-1}>
        <nav className="case-breadcrumb" aria-label="Fil d'Ariane">
          <div className="wrap">
            <ol className="breadcrumb-trail">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <span aria-current="page">Tarifs</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="landing-head" aria-labelledby="tarifs-title">
          <div className="wrap">
            <span className="eyebrow">Tarifs</span>
            <h1 id="tarifs-title">Tarifs : combien coûte un site internet professionnel</h1>
            <p className="lead">
              Les prix de départ des trois offres, ce qui fait varier le montant final, et ce que le
              site vous coûte réellement une fois en ligne. Chaque projet reçoit ensuite une
              proposition à prix ferme, établie après l&apos;appel découverte.
            </p>
            <p className="landing-terms mono">
              <span>
                Site vitrine <strong>{OFFERS[0].price}</strong>
              </span>
              <span>
                Application sur mesure <strong>{OFFERS[1].price}</strong>
              </span>
              <span>Hébergement 2 à 10 € / mois</span>
            </p>
            <div className="landing-actions">
              <Button href={SITE_CONFIG.calendlyUrl}>Réserver un appel de 30 min, gratuit</Button>
              <Button variant="ghost" href="/#services">
                Voir le détail des offres
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="grille-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Grille"
              title="Les prix de départ, par type de projet"
              titleId="grille-title"
              lead="Trois offres, trois points de départ. Le prix de départ correspond au périmètre le plus simple de chaque offre."
            />
            {/*
              Labelled by the section's own <h2> rather than by a <caption>:
              a visible caption would repeat, one line lower, the heading a
              sighted visitor has just read, and a visually hidden one would
              be the only hidden text on the site.
            */}
            <table className="price-table" aria-labelledby="grille-title">
              <thead>
                <tr>
                  <th scope="col">Offre</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Délai</th>
                </tr>
              </thead>
              <tbody>
                {OFFERS.map((offer) => (
                  <tr key={offer.id}>
                    <th scope="row">{offer.title}</th>
                    {/*
                      Wears the homepage `.price` class, small note and all,
                      so the same number is set the same way on both pages.
                      The "Tarification / Au cas par cas" offer keeps its own
                      `price-cased` sizing rather than being forced into the
                      shape of a figure it is not.
                    */}
                    <td className={clsx('price', offer.isPriceCased && 'price-cased')}>
                      <small>{offer.priceNote}</small>
                      {offer.price}
                    </td>
                    <td className="delay" data-label="Délai">
                      {offer.delay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="variation-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Ce qui compte"
              title="Ce qui fait varier le prix"
              titleId="variation-title"
            />
            <div className="landing-prose">
              {VARIATION_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="recurrent-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Après la livraison"
              title="Combien ça coûte par mois, une fois le site en ligne"
              titleId="recurrent-title"
            />
            <div className="landing-prose">
              {RECURRING_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="delais-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Délais"
              title="Combien de temps pour créer le site"
              titleId="delais-title"
            />
            <div className="landing-prose">
              {TIMING_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="devis-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Devis"
              title="Comment obtenir un chiffrage"
              titleId="devis-title"
            />
            <div className="landing-prose">
              {QUOTE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="landing-actions">
              <Button href={SITE_CONFIG.calendlyUrl}>Réserver mon créneau</Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="liens-title">
          <div className="wrap">
            <h2 className="eyebrow" id="liens-title">
              Aller plus loin
            </h2>
            <div className="related-cards landing-links">
              <Link className="related-card" href="/site-vitrine">
                <span className="mono">Site vitrine</span>
                <h3>Ce que contient un site vitrine</h3>
                <p>
                  Le périmètre, la différence avec une landing page et avec un site e-commerce, et
                  qui héberge le site ensuite.
                </p>
                <span className="related-link">
                  Lire la page <span aria-hidden="true">→</span>
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
