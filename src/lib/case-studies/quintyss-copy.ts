import type { CaseStudyCopy } from '../types';

export const QUINTYSS_COPY: CaseStudyCopy = {
  lead: "CMS multi-sites repris en V3 : un socle commun capable de faire vivre plusieurs sites clients, et un éditeur qui appliquait les modifications widget par widget sans redéploiement.",
  metaDescription:
    "CMS multi-sites : un socle commun pour plusieurs sites clients et un éditeur appliquant les modifications widget par widget, sans redéploiement.",
  statusBadge: 'Intervention terminée',
  statusDetail:
    "À la fin de mon intervention, en août 2026, deux sites étaient en production et un troisième en attente de validation.",
  narrative: [
    {
      heading: 'Le point de départ',
      paragraphs: [
        "Quintyss édite des sites pour ses propres clients. La V2 ne tenait plus : l'architecture était à bout de souffle, chaque évolution coûtait de plus en plus cher, et il devenait impossible de multiplier les sites clients sans repartir presque de zéro à chaque fois.",
        "La V3 a donc été reprise sur cette question précise : faire en sorte qu'un seul socle puisse faire vivre plusieurs sites clients distincts, sans que chaque nouveau client soit un projet entier.",
      ],
    },
    {
      heading: 'Mon rôle',
      paragraphs: [
        "J'ai été développeur full-stack et référent technique sur le projet de mars 2025 à août 2026. Quatre responsabilités menées de front : l'architecture de la plateforme, la revue du code produit par l'équipe, les choix techniques, et le découpage des tâches avec leur suivi.",
        "Pour Quintyss, cela veut dire une personne qui tient la cohérence de l'ensemble et qui assume les arbitrages, plutôt qu'une addition d'avis techniques qui se contredisent au fil des semaines.",
      ],
    },
    {
      heading: "L'édition sans redéploiement",
      paragraphs: [
        "C'est la pièce la plus structurante de l'architecture. L'éditeur traitait chaque bloc de page comme une unité de contenu à part entière, hero slider, article ou agenda, stockée et versionnée côté serveur plutôt que figée dans le code du site.",
        "Le rendu public devait donc dépendre de l'état en base et non d'un artefact produit au build, avec une invalidation de cache assez fine pour que la page en ligne reste cohérente après chaque enregistrement. C'est ce choix qui sortait le développeur de la boucle d'édition, et c'est aussi celui qui a le plus contraint le reste de la plateforme.",
      ],
    },
    {
      heading: 'Pas de visuels sur cette page',
      paragraphs: [
        "Le client ne souhaite pas que le produit soit montré. Cette page est donc mon compte rendu daté de mon propre travail, sans capture d'écran, sans logo et sans nom de site.",
      ],
    },
    {
      heading: 'La fin de mon intervention',
      paragraphs: [
        "Mon intervention a couru de mars 2025 à août 2026. À sa fin, trois sites tournaient sur le socle : deux en production et un troisième déployé, en attente de validation. Chacun avait ses contenus, sa charte et ses pages propres, et tous étaient administrés depuis la même plateforme.",
        "Le déploiement d'un nouveau site se comptait alors en heures. C'est de cette architecture que je suis le plus fier sur ce projet : elle ne se voit sur aucun écran, et c'est pourtant elle qui sépare un site de plus à maintenir d'une plateforme capable d'accueillir un nouveau client dans la journée.",
      ],
    },
  ],
};
