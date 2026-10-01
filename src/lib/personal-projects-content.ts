import type { PersonalProject } from './types';

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: 'edukai',
    title: 'Edukai',
    titleQualifier: 'application iOS de révision pour les lycéens',
    period: 'Depuis février 2026',
    lead: "Application iOS pour les lycéens : on importe un cours, l'application en extrait les concepts et interroge dessus. Un moteur pédagogique entretient une estimation statistique de la maîtrise de chaque concept et de la difficulté de chaque question, et choisit la question suivante pour viser un taux de réussite cible.",
    teaser:
      "Un cours importé devient des questions, choisies par un modèle qui estime la maîtrise de chaque concept.",
    origin:
      "Né de mon projet de fin d'études à Epitech, et développé sur mon temps libre depuis la fin de celui-ci en février 2026.",
    proof:
      "Du mobile natif en Expo et React Native, un worker asynchrone sur des files BullMQ, pgvector pour la déduplication sémantique, l'IA cantonnée derrière une frontière d'architecture stricte, et un modèle psychométrique écrit à la main : un filtre de type Kalman sur une échelle de logit partagée, la difficulté obtenue en inversant la logistique, et l'espacement des révisions dérivé d'un taux d'oubli.",
    stack: [
      'Expo',
      'React Native',
      'NestJS',
      'BullMQ',
      'Redis',
      'PostgreSQL',
      'pgvector',
      'Drizzle',
      'TypeScript',
    ],
    screenshot: {
      src: '/images/projects/edukai/seance-du-jour.webp',
      alt: "Accueil d'Edukai sur iPhone : la séance du jour annonce 25 concepts à revoir, au-dessus de la liste des cours importés.",
      width: 804,
      height: 1748,
      frame: 'phone',
    },
  },
  {
    id: 'freelance-manager',
    title: 'Freelance Manager',
    titleQualifier: 'pilotage de mon activité de freelance',
    period: 'Mars 2026 à août 2026',
    lead: "L'outil sur lequel je gère ma propre activité de freelance : clients, propositions chiffrées, factures, acomptes, découpage en échéances et relances, avec une couche d'analyse qui calcule mon taux journalier effectif et ma concentration client.",
    teaser:
      "Clients, factures, acomptes et relances, avec un serveur MCP en production pour piloter le tout.",
    proof:
      "Un serveur MCP en production monté dans une route Next.js : jeton stocké uniquement sous forme de hash et comparé en temps constant, appel refusé quand la configuration manque, limitation de débit par upsert atomique en base, et audit attendu avant la réponse, de sorte qu'un audit en échec fait échouer l'appel. Côté métier, une arithmétique monétaire exacte au centime et un domaine pur assorti de garde-fous statistiques.",
    stack: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'better-auth', 'MCP', 'Railway'],
    screenshot: {
      src: '/images/projects/freelance-manager/dashboard-encours-relances.webp',
      alt: 'Tableau de bord de Freelance Manager : revenu du mois, encours, charge à venir, factures en retard à relancer et tâches en cours.',
      width: 2400,
      height: 1477,
      frame: 'browser',
    },
  },
  {
    id: 'degommix',
    title: 'Degommix',
    titleQualifier: 'compteur de points pour les petits chevaux',
    period: 'Juillet 2026',
    lead: "PWA mobile qui tient le score des parties physiques du jeu de société des petits chevaux Astérix, construite pour ma mère et moi.",
    teaser:
      "Le score des parties de petits chevaux, en temps réel, avec une annulation que tous les joueurs partagent.",
    proof:
      "Du temps réel multijoueur avec un serveur qui fait autorité : un mutex par partie qui rend la numérotation des séquences insensible aux courses, un journal strictement en ajout, sans une seule suppression ni mise à jour dans tout le code, un réducteur pur partagé entre le client et le serveur avec un test de parité, et une annulation partagée où chaque joueur peut annuler l'action d'un autre. Les renvois sont idempotents et le client se resynchronise à partir d'un numéro de séquence.",
    stack: ['Next.js', 'Socket.IO', 'PostgreSQL', 'Drizzle', 'Better Auth', 'PWA'],
    liveLink: { label: 'Voir le site ↗', href: 'https://degommix.tristanhourtoulle.fr' },
    screenshot: {
      src: '/images/projects/degommix/partie-live-annulation.webp',
      alt: 'Partie de Degommix en direct sur mobile : les quatre joueurs et leurs points, le choix du joueur dégommé, et le journal de la partie.',
      width: 780,
      height: 1688,
      frame: 'phone',
    },
  },
];
