import type { CaseStudyCopy } from '../types';

/**
 * Editorial copy for /realisations/hosteed.
 *
 * Written for a business reader, not a developer: what was broken, what
 * was rebuilt, and where the project stands. Two facts are load-bearing
 * and must not drift: the platform is delivered and still in client
 * testing (it is NOT open to the public), and the four hard parts of the
 * mission were genuinely concurrent, none of them dominant.
 *
 * No traffic, revenue or performance figure appears here on purpose: the
 * client provided none, so none is claimed. The only number stated is
 * the order of magnitude of the data model, which comes straight from
 * the client's own account of the mission.
 */
export const HOSTEED_COPY: CaseStudyCopy = {
  lead: "Plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : recherche, fiches logements, réservation et paiement en ligne, reconstruite de zéro après un site WordPress devenu instable.",
  statusBadge: 'En phase de test client',
  statusDetail: 'Livrée, en phase de test client.',
  narrative: [
    {
      heading: 'Le point de départ',
      paragraphs: [
        "Hosteed est une plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : on cherche un séjour, on consulte une fiche logement, on réserve et on paie en ligne.",
        "Avant cette mission, le site tournait sur WordPress et posait de gros problèmes de performance. Les pages étaient lentes, le comportement imprévisible, et le site allait jusqu'à tomber complètement. C'est précisément ce qui a déclenché l'appel : le sujet n'était plus une fonctionnalité manquante, c'était un site sur lequel on ne pouvait plus compter.",
        "Sur une plateforme de réservation, une panne ne coûte pas seulement une visite. Elle coûte la réservation qui était en train de se faire, et la confiance du voyageur qui ne reviendra pas.",
      ],
    },
    {
      heading: "Ce que j'ai construit",
      paragraphs: [
        "Plutôt que de rafistoler l'existant, la plateforme a été reprise depuis la base, sur une architecture faite pour ce métier. Le parcours complet a été reconstruit : recherche de séjour, fiche logement, réservation et paiement, côté voyageur comme côté hôte.",
        "Le paiement passe par Stripe, de la demande de réservation jusqu'à l'encaissement. Un back-office dédié permet à l'équipe de suivre les logements, les réservations et les paiements sans qu'un développeur ait à intervenir.",
      ],
    },
    {
      heading: 'Le plus difficile',
      paragraphs: [
        "Quatre chantiers avançaient en même temps, et aucun ne pouvait attendre les trois autres : le tunnel de paiement Stripe, un modèle de données d'une cinquantaine de tables, la performance qui était la raison même du projet, et le back-office.",
        "Aucun de ces quatre n'a été plus dur que les autres, et c'est justement ce qui rendait la mission exigeante. Le back-office, en particulier, se traite trop souvent comme un reste : ici, c'est l'écran que l'équipe ouvre tous les jours, donc il a été traité comme un produit à part entière.",
      ],
    },
    {
      heading: 'Où en est le projet',
      paragraphs: [
        "La plateforme est livrée et se trouve aujourd'hui en phase de test chez le client, qui la valide avant ouverture. Elle n'est donc pas encore accessible au public.",
      ],
    },
  ],
  testimonial: {
    status: 'pending',
    note: "Le témoignage du client sur cette mission sera publié ici dès la fin de la phase de validation.",
  },
};
