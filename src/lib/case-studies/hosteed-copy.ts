import type { CaseStudyCopy } from '../types';

export const HOSTEED_COPY: CaseStudyCopy = {
  lead: "Plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : recherche, fiches logements, réservation et paiement en ligne, reconstruite de zéro après un site WordPress devenu instable.",
  metaDescription:
    "Plateforme de réservation de logements à Madagascar, reconstruite de zéro après un WordPress instable : recherche, réservation, paiement Stripe et back-office.",
  statusBadge: 'Livrée en novembre 2025',
  statusDetail:
    "Livrée en novembre 2025, en phase de test chez le client à la fin de mon intervention.",
  narrative: [
    {
      heading: 'Le point de départ',
      paragraphs: [
        "Hosteed est une plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : on cherche un séjour, on consulte une fiche logement, on réserve et on paie en ligne.",
        "Avant ce projet, le site tournait sur WordPress et posait de gros problèmes de performance. Les pages étaient lentes, le comportement imprévisible, et le site allait jusqu'à tomber complètement. C'est précisément ce qui a déclenché le projet : le sujet n'était plus une fonctionnalité manquante, c'était un site sur lequel on ne pouvait plus compter.",
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
        "Aucun de ces quatre n'a été plus dur que les autres, et c'est justement ce qui rendait le projet exigeant. Le back-office, en particulier, se traite trop souvent comme un reste : ici, c'est l'écran que l'équipe ouvre tous les jours, donc il a été traité comme un produit à part entière.",
      ],
    },
    {
      heading: 'La fin de mon intervention',
      paragraphs: [
        "Mon intervention a couru de mai à novembre 2025. À sa fin, la plateforme était livrée et en phase de test chez le client, qui la validait avant ouverture : elle n'était pas encore ouverte au public, et je n'ai pas suivi le projet au-delà.",
      ],
    },
  ],
};
