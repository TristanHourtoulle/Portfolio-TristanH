import type { ParcoursPageContent, ParcoursTeaserContent } from './types';

export const PARCOURS_CONTENT: ParcoursPageContent = {
  eyebrow: 'Parcours',
  title: 'Parcours : six ans à Epitech, deux mandats d’assistant et une année en Malaisie',
  lead: "La formation, les stages, les deux mandats d’assistant auprès d’autres étudiants et l’année passée à Kuala Lumpur. Ce que le reste du site ne raconte pas : comment j’ai appris, et dans quelles conditions.",
  metaTitle: 'Parcours',
  metaDescription:
    "Le parcours de Tristan Hourtoulle : six ans à Epitech, deux mandats d’assistant auprès de 65 puis 34 étudiants, trois stages, une quatrième année à Kuala Lumpur et une activité freelance lancée pendant les études.",
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
      heading: 'Six ans au lieu de cinq, et pourquoi',
      paragraphs: [
        "Epitech ne fonctionne pas par cours magistraux. La formation repose sur des projets, menés en équipe du premier jour au dernier : on apprend en construisant, en cherchant par soi-même et en livrant du code qui tourne.",
        "J’y ai passé six ans au lieu de cinq, parce que j’ai redoublé ma deuxième année. Je ne le présente pas comme un échec, parce que je ne l’ai pas vécu comme tel : cette année m’a beaucoup remis en question sur le plan personnel et m’a donné le temps d’affûter mes méthodes de travail avant de repartir. Tout ce qui suit sur cette page s’est construit après.",
      ],
    },
    {
      id: 'assistant',
      period: '2021-2022 et 2023-2024',
      context: 'Assistant Epitech Région',
      heading: 'Deux mandats à encadrer d’autres étudiants',
      paragraphs: [
        "Pendant ma deuxième année, j’ai encadré environ 65 étudiants de première année sur le cursus PGE, celui que je suivais moi-même.",
        "Pendant ma troisième année, j’ai encadré 34 étudiants du cursus MSC, orienté web et long de trois ans. Ce n’était pas mon cursus, et la plupart de ces étudiants étaient plus âgés que moi : ils arrivaient de prépa ou se reconvertissaient vers la tech.",
        "Le rôle consistait à les accompagner, à les faire progresser et à les garder dans le rythme, en allant en priorité vers les plus en difficulté et les profils les plus atypiques. C’est là que j’ai appris à expliquer une notion à quelqu’un qui ne la voit pas encore, et à débloquer une personne sans coder à sa place.",
      ],
    },
    {
      id: 'agapachats',
      period: 'Deuxième année, juillet à décembre',
      context: 'Agapachats, Rouffach',
      heading: 'Six mois seul sur un outil interne',
      paragraphs: [
        "Il n’y a pas eu de stage en première année. Le premier a duré six mois, chez Agapachats, à Rouffach, et je l’ai fait seul sur le projet.",
        "J’ai construit leur outil interne de gestion : les stocks, les prix d’achat et de revente, les fournisseurs rattachés à chaque produit, les étiquettes de vente utilisées par l’équipe de vente, les employés et la cuisine, ainsi que la gestion des droits et le suivi des tickets. En HTML, CSS et PHP, hébergé sur O2Switch.",
        "L’outil est interne et je n’ai pas l’autorisation d’en montrer des captures : il n’y a donc pas d’étude de cas sur ce site.",
      ],
    },
    {
      id: 'moduloop-impact',
      period: 'février à juin 2024',
      context: 'Moduloop, stage de 3e année',
      heading: 'Moduloop Impact, en autonomie complète',
      paragraphs: [
        "Stage de troisième année chez Moduloop, dans une startup, en autonomie complète sur le produit.",
        "L’application est en production et l’étude de cas en détaille le contexte, mon intervention et le résultat.",
      ],
      link: {
        label: 'Lire l’étude de cas Moduloop Impact',
        href: '/realisations/moduloop-impact',
      },
    },
    {
      id: 'freelance',
      period: 'depuis juillet 2024',
      context: 'Activité indépendante',
      heading: 'Freelance lancé un mois après le stage, en parallèle des études',
      paragraphs: [
        "Un mois après la fin du stage chez Moduloop, j’ai créé mon entreprise, trouvé mes premiers clients et mis du logiciel en production, tout en continuant une formation exigeante. Beaucoup de nuits courtes à tenir les deux de front.",
        "Je m’y suis mis parce que le remboursement de mon prêt étudiant démarrait pendant ma dernière année d’études, le redoublement ayant décalé la fin du cursus.",
        "Ce que j’en retire : ça m’a confronté à un monde du travail que je ne connaissais pas.",
      ],
    },
    {
      id: 'kuala-lumpur',
      period: 'octobre 2024 à juillet 2025',
      context: 'Quatrième année, Kuala Lumpur',
      heading: 'Une année en Malaisie sans arrêter de livrer',
      paragraphs: [
        "J’ai passé ma quatrième année à Kuala Lumpur et j’ai continué à faire tourner mon activité freelance depuis là-bas, en tenant les rendez-vous à des horaires décalés pour tomber sur les heures de bureau françaises, six à sept heures plus tôt.",
        "Quintyss V3 en mars 2025 et Hosteed en mai 2025 ont tous les deux démarré pendant ce séjour.",
      ],
    },
    {
      id: 'cinquieme-annee',
      period: 'Cinquième année',
      context: 'Statut étudiant-entrepreneur',
      heading: 'Six mois à temps partiel, puis six mois de stage en entreprise',
      paragraphs: [
        "La cinquième année se déroule en deux temps : six mois à temps partiel, puis six mois de stage en entreprise.",
        "J’ai fait les deux sous le statut national étudiant-entrepreneur, en m’appuyant sur des clients que j’avais déjà depuis plus d’un an.",
      ],
    },
  ],
};

export const PARCOURS_TEASER: ParcoursTeaserContent = {
  eyebrow: 'Parcours',
  title: 'Six ans à Epitech, dont deux à encadrer d’autres étudiants',
  paragraphs: [
    "Une formation sans cours magistraux, six ans au lieu de cinq, deux mandats d’assistant auprès de 65 puis 34 étudiants, et une quatrième année passée à Kuala Lumpur sans arrêter de travailler pour mes clients français.",
  ],
  linkLabel: 'Lire mon parcours',
  linkHref: '/parcours',
};
