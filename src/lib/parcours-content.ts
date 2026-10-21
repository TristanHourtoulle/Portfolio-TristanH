import type { ParcoursPageContent, ParcoursTeaserContent } from './types';

export const PARCOURS_CONTENT: ParcoursPageContent = {
  eyebrow: 'Parcours',
  title: 'D’Epitech à mes premières missions de développement',
  lead: 'J’ai étudié à Epitech de 2020 à septembre 2026. Pendant cette période, j’ai accompagné d’autres étudiants, effectué deux stages et lancé mon activité indépendante. J’ai aussi passé ma quatrième année à Kuala Lumpur.',
  metaTitle: 'Parcours',
  metaDescription:
    'Formation à Epitech, accompagnement d’étudiants, stages chez Agapachats et Moduloop, année à Kuala Lumpur et activité indépendante pendant les études.',
  school: {
    name: 'Epitech',
    description:
      "École d’informatique sans cours magistraux, dont la formation repose sur des projets menés en équipe.",
  },
  entries: [
    {
      id: 'epitech',
      period: '2020 à septembre 2026',
      context: 'Epitech',
      heading: 'Apprendre par les projets',
      paragraphs: [
        'À Epitech, j’ai appris en réalisant des projets en équipe : chercher une solution, la développer et la faire fonctionner. Mon cursus s’est déroulé sur six ans, avec un redoublement en deuxième année.',
      ],
    },
    {
      id: 'assistant',
      period: 'septembre 2021 à juin 2022, puis septembre 2023 à janvier 2024',
      context: 'Assistant Epitech Région',
      heading: 'Accompagner d’autres étudiants',
      paragraphs: [
        'De septembre 2021 à juin 2022, j’ai accompagné environ 65 étudiants de première année du cursus PGE, en parallèle de ma formation et de mon stage chez Agapachats.',
        'De septembre 2023 à janvier 2024, j’ai accompagné 34 étudiants du cursus MSC. Leurs parcours étaient différents du mien, notamment pour ceux qui arrivaient d’une prépa ou d’une reconversion.',
        'Ce rôle m’a appris à expliquer une notion, à repérer ce qui bloque et à aider quelqu’un à avancer sans écrire le code à sa place.',
      ],
    },
    {
      id: 'agapachats',
      period: 'Deuxième année, juillet à décembre',
      context: 'Agapachats, Rouffach',
      heading: 'Un premier outil de gestion interne',
      paragraphs: [
        'Pendant mon stage de six mois chez Agapachats, à Rouffach, j’ai développé seul un outil interne en HTML, CSS et PHP. Il couvrait notamment les stocks, les prix, les fournisseurs, les étiquettes de vente, la gestion des employés et de la cuisine, les droits d’accès et les tickets. Je ne dispose pas de l’autorisation de montrer des captures de cet outil.',
      ],
    },
    {
      id: 'moduloop-impact',
      period: 'février à juin 2024',
      context: 'Moduloop, stage de 3e année',
      heading: 'Développer Moduloop Impact en stage',
      paragraphs: [
        'De février à juin 2024, j’ai développé le calculateur d’impact environnemental de Moduloop en autonomie. L’application a été mise en production à la fin du stage ; l’étude de cas présente le projet en détail.',
      ],
      link: {
        label: 'Lire l’étude de cas Moduloop Impact',
        href: '/realisations/moduloop-impact',
      },
    },
    {
      id: 'freelance',
      period: '15 juillet 2024 à août 2026',
      context: 'Activité indépendante',
      heading: 'Lancer mon activité pendant les études',
      paragraphs: [
        'J’ai créé mon activité indépendante le 15 juillet 2024. En parallèle de mes études, j’ai commencé à travailler directement avec mes clients : comprendre leurs besoins, développer les applications et en suivre les évolutions.',
      ],
    },
    {
      id: 'kuala-lumpur',
      period: 'octobre 2024 à juillet 2025',
      context: 'Quatrième année, Kuala Lumpur',
      heading: 'Travailler depuis Kuala Lumpur',
      paragraphs: [
        'J’ai passé ma quatrième année à Kuala Lumpur, d’octobre 2024 à juillet 2025, tout en poursuivant mes missions pour des clients français. Les projets Quintyss V3 et Hosteed ont démarré pendant ce séjour. J’adaptais mes horaires pour maintenir les rendez-vous avec les équipes en France.',
      ],
      photos: {
        label: 'Kuala Lumpur',
        images: [
          {
            src: '/images/parcours/kuala-lumpur/campus-apu.webp',
            alt: "Le campus d’Asia Pacific University à Kuala Lumpur, où j’ai passé ma quatrième année.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/skyline-merdeka.webp',
            alt: "Kuala Lumpur de nuit, dominée par la flèche éclairée de la tour Merdeka 118.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/petronas-jour.webp',
            alt: "Les tours Petronas de jour, vues d’en bas à travers les arbres du parc.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/eq-petronas-nuit.webp',
            alt: "La tour EQ au premier plan et les tours Petronas éclairées derrière, un soir couvert.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/petronas-nuit.webp',
            alt: "Les tours Petronas illuminées de rouge et d’or à la nuit tombée.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/batu-caves-escalier.webp',
            alt: "L’escalier coloré et la statue dorée de Murugan, à l’entrée des grottes de Batu.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/batu-caves-sanctuaire.webp',
            alt: "Un sanctuaire et sa cloche, au pied de la falaise des grottes de Batu.",
            width: 1200,
            height: 1200,
          },
          {
            src: '/images/parcours/kuala-lumpur/coucher-soleil-plage.webp',
            alt: "Un coucher de soleil sur une plage malaisienne, derrière un cadre en forme de cœur.",
            width: 1200,
            height: 1200,
          },
        ],
      },
    },
    {
      id: 'cinquieme-annee',
      period: 'Cinquième année',
      context: 'Statut étudiant-entrepreneur',
      heading: 'Une dernière année sous statut étudiant-entrepreneur',
      paragraphs: [
        'Sous le statut national étudiant-entrepreneur, j’ai effectué les périodes professionnelles de ma dernière année dans le cadre de mon activité indépendante, avec les clients que j’accompagnais déjà.',
      ],
    },
  ],
};

export const PARCOURS_TEASER: ParcoursTeaserContent = {
  eyebrow: 'Parcours',
  title: 'Une formation par les projets, puis des missions clients',
  paragraphs: [
    'Mon parcours à Epitech comprend deux mandats d’assistant, deux stages et une année à Kuala Lumpur. J’ai lancé mon activité indépendante pendant mes études, avant de terminer mon cursus en septembre 2026.',
  ],
  linkLabel: 'Lire mon parcours',
  linkHref: '/parcours',
};
