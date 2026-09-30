import type { CaseStudyCopy } from '../types';

export const MODULOOP_IMPACT_COPY: CaseStudyCopy = {
  lead: "Le calcul d'impact environnemental d'un projet d'aménagement se faisait à la main, sur tableur. Il se fait désormais dans un outil qui chiffre, compare deux scénarios et sort un document présentable au client.",
  metaDescription:
    "Application web sur mesure qui remplace le calcul d'impact environnemental sur tableur : catalogue produits, comparaison neuf/réemploi et export PDF.",
  statusBadge: 'En production',
  statusDetail: 'En production sur moduloop-impact.fr.',
  narrative: [
    {
      heading: 'Le point de départ',
      paragraphs: [
        "Les acteurs de l'aménagement doivent mesurer l'impact environnemental de leurs projets, sans outil adapté à leur métier.",
        "Chez Moduloop, ce calcul était manuel. Chaque projet repartait d'un tableur, avec la saisie et les formules à reprendre à chaque fois. Le résultat finissait par tomber, mais au prix d'un travail refait projet après projet, et sous une forme que personne ne pouvait montrer telle quelle.",
      ],
    },
    {
      heading: "Ce que j'ai construit",
      paragraphs: [
        "Un outil de calcul complet. L'utilisateur compose son projet à partir d'un catalogue de produits, en neuf ou en réemploi, et l'outil calcule quatre indicateurs environnementaux, puis les met en visuel plutôt qu'en colonnes de chiffres.",
        "Deux scénarios peuvent être montés côte à côte, l'un en neuf et l'autre en réemploi, pour chiffrer l'écart au lieu de l'estimer. Chaque projet garde son détail produit par produit, et l'outil remonte les produits qui pèsent le plus dans le total.",
      ],
    },
    {
      heading: 'Ce que ça change au quotidien',
      paragraphs: [
        "Le calcul manuel disparaît : la donnée est saisie une fois et le résultat suit, y compris quand le projet change en cours de route.",
        "Surtout, chaque résultat s'exporte en PDF. C'est le point qui a le plus compté pour Moduloop. Un tableur ne se montre pas à un client : il porte les formules, les brouillons, les onglets de travail. Un document exporté se présente en réunion et s'envoie tel quel. L'outil ne sert donc pas seulement à calculer, il sert à défendre le chiffre devant le client final.",
      ],
    },
    {
      heading: 'Impact mesure, Kits vend',
      paragraphs: [
        "Moduloop Impact répond à une question précise : quel est l'impact d'un projet déjà défini. À la fin du stage, Moduloop m'a repris en freelance pour la maintenance de l'outil, puis pour construire Moduloop Kits, qui couvre l'autre moitié du besoin, en amont : composer une offre et la chiffrer avant même que le projet existe.",
      ],
    },
    {
      heading: 'Où en est le projet',
      paragraphs: ['En production sur moduloop-impact.fr.'],
    },
  ],
  testimonial: {
    status: 'published',
    testimonialId: 'paul',
    context: 'Moduloop',
  },
};
