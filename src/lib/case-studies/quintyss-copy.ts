import type { CaseStudyCopy } from '../types';

/**
 * Editorial copy for /realisations/quintyss.
 *
 * Written for a business reader: benefit, decision, risk and time saved,
 * not the technology stack (which the sidebar already lists).
 *
 * Three constraints govern this file.
 * 1. The strongest product argument is the page editor: every widget is
 *    editable in real time, with no redeployment and no developer. It
 *    gets its own section rather than a bullet in a list.
 * 2. Only three figures are allowed on this project: three client sites
 *    on the platform, a new client deployed in a matter of hours, and
 *    the 788 files in the media library. Nothing else is quantified. The
 *    three sites are broken down the way the shipped screenshots
 *    describe them (two live, one deployed and awaiting client sign-off)
 *    rather than lumped together as three in production, which would
 *    overstate the third. The 788 is read straight off the library's own
 *    counter in editeur-mediatheque.webp, which also states 784 of them
 *    sit on S3; it is written exactly, not rounded to "près de 800",
 *    which is both vaguer and, as it happens, wrong.
 * 3. culturekids.ch must never be used as proof here. That domain still
 *    serves the V2, which is not this mission's work. The V3 site built
 *    for Culture Kids is named without its domain; kcfribourg.ch is the
 *    address that can actually be shown.
 */
export const QUINTYSS_COPY: CaseStudyCopy = {
  lead: "CMS nouvelle génération : le client modifie son site lui-même, widget par widget et en temps réel, sans développeur et sans remise en ligne. Un même socle fait vivre plusieurs sites clients.",
  metaDescription:
    "CMS multi-sites où le client modifie ses pages lui-même, widget par widget, sans développeur ni remise en ligne. Un même socle fait vivre trois sites clients.",
  statusBadge: 'En développement actif',
  statusDetail: 'En développement actif.',
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
        "Je suis lead dev sur le projet depuis mars 2025. Quatre responsabilités menées de front : l'architecture de la plateforme, la revue du code produit par l'équipe, les choix techniques, et le découpage des tâches avec leur suivi.",
        "Pour Quintyss, cela veut dire un interlocuteur qui tient la cohérence de l'ensemble et qui assume les arbitrages, plutôt qu'une addition d'avis techniques qui se contredisent au fil des semaines.",
      ],
    },
    {
      heading: 'Le client modifie son site lui-même',
      paragraphs: [
        "C'est le point qui change tout au quotidien. Dans l'éditeur de page, tout est modifiable par widget, en temps réel, sans remise en ligne. Le client change son hero slider, publie un article, met à jour ses événements, et le site en ligne suit immédiatement.",
        "Aucun développeur n'intervient, aucune mise en production à programmer, aucun délai à subir pour une correction de dernière minute. Ce qui était un ticket, une attente et une facture devient une modification de quelques minutes, faite directement par la personne qui en a besoin.",
        "Pour une structure sans équipe technique, c'est la différence entre un site que l'on subit et un site que l'on pilote.",
      ],
    },
    {
      heading: "Ce que ça donne aujourd'hui",
      paragraphs: [
        "Trois sites clients tournent sur ce socle. Deux sont en production : kcfribourg.ch, un club de karaté, et le site du Judo Club Marly. Le troisième, Culture Kids, un accueil extrascolaire à Fribourg, est déployé et attend la validation de son client.",
        "Chacun a ses contenus, sa charte et ses pages propres, et tous sont administrés depuis la même plateforme, dont la médiathèque compte aujourd'hui 788 fichiers. Le déploiement d'un nouveau client se compte désormais en heures.",
        "C'est de cette architecture que je suis le plus fier sur ce projet. Elle ne se voit sur aucune capture d'écran, et c'est pourtant elle qui sépare un site de plus à maintenir d'une plateforme capable d'accueillir un nouveau client dans la journée.",
      ],
    },
    {
      heading: 'Où en est le projet',
      paragraphs: [
        "En développement actif depuis mars 2025. KC Fribourg et le Judo Club Marly sont en production, le site Culture Kids V3 est déployé et attend la validation du client.",
      ],
    },
  ],
};
