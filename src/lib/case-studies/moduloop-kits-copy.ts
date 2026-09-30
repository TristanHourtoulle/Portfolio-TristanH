import type { CaseStudyCopy } from '../types';

export const MODULOOP_KITS_COPY: CaseStudyCopy = {
  lead: "Impact calcule, Kits vend : composer un kit d'aménagement, le chiffrer à l'achat comme à la location, et présenter l'offre avec son impact environnemental et son prix au mètre carré.",
  metaDescription:
    "Application web sur mesure pour composer un kit d'aménagement, le chiffrer à l'achat comme à la location, et sortir une offre avec son impact et son prix au m².",
  statusBadge: 'Mission en cours',
  statusDetail: 'Mission en cours depuis août 2025.',
  narrative: [
    {
      heading: 'Pourquoi un deuxième outil',
      paragraphs: [
        "Impact calcule, Kits vend. La formule résume la différence entre les deux missions menées pour Moduloop.",
        "Moduloop Impact mesure l'impact environnemental d'un projet d'aménagement déjà défini : le projet existe, l'outil le chiffre. Il manquait l'étape d'avant, celle où l'on part d'un besoin et où l'on doit construire une proposition. C'est le rôle de Kits : composer une offre commerciale et la chiffrer pour la présenter à un client.",
      ],
    },
    {
      heading: "Ce que j'ai construit",
      paragraphs: [
        "Un catalogue de produits à partir duquel se composent des kits d'aménagement prêts à l'emploi. Chaque kit affiche son impact environnemental et son prix au mètre carré, et ces deux valeurs suivent la composition à mesure qu'elle change : on ajoute ou on retire un produit, le chiffre bouge tout de suite.",
        "Les kits se regroupent ensuite en projets, avec le détail produit par produit et l'impact du projet complet. Le commercial ne repart donc pas d'une feuille blanche à chaque demande : il assemble, ajuste et sort une offre tenue.",
      ],
    },
    {
      heading: 'Achat ou location, chiffrés côte à côte',
      paragraphs: [
        "Chaque kit porte deux tarifs, un à l'achat et un à la location. Ce n'est pas une subtilité de facturation : c'est ce qui permet de comparer avant d'arbitrer.",
        "Le client de Moduloop veut voir les deux scénarios chiffrés en face l'un de l'autre avant de trancher. L'outil pose cette comparaison au lieu de la laisser à un tableur monté pour l'occasion. La décision reste au client, mais elle se prend sur des chiffres, pas sur une impression.",
      ],
    },
    {
      heading: 'Où en est le projet',
      paragraphs: [
        "Mission en cours depuis août 2025. Le développement se poursuit avec Moduloop, écran par écran, avec des allers-retours réguliers sur les usages réels de leur équipe commerciale.",
      ],
    },
  ],
  testimonial: {
    status: 'published',
    testimonialId: 'paul',
    context: 'Moduloop',
  },
};
