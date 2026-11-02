import type { ClientCaseStudyCopy } from '../types';

export const MODULOOP_IMPACT_COPY: ClientCaseStudyCopy = {
  lead: 'Pendant mon stage chez Moduloop, j’ai développé une application pour calculer l’impact environnemental des projets d’aménagement. Elle remplaçait un travail sur tableur et permettait de comparer des scénarios puis d’exporter les résultats en PDF.',
  metaDescription:
    'Calculateur d’impact environnemental développé chez Moduloop : catalogue produits, comparaison du neuf et du réemploi, résultats par projet et export PDF.',
  statusBadge: 'Mise en production en juin 2024',
  statusDetail: 'Application mise en production en juin 2024, à la fin de mon stage.',
  narrative: [
    {
      heading: 'Le calcul avant l’application',
      paragraphs: [
        'Chez Moduloop, les données des projets d’aménagement étaient saisies dans un tableur pour en calculer l’impact environnemental. Le besoin était de regrouper cette saisie, le calcul et la présentation des résultats dans un outil dédié.',
      ],
    },
    {
      heading: 'Composer et comparer les projets',
      paragraphs: [
        'J’ai développé un catalogue de produits neufs et de réemploi à partir duquel l’utilisateur compose son projet. L’application calcule quatre indicateurs environnementaux et permet de comparer deux scénarios, avec le détail des résultats par produit.',
      ],
    },
    {
      heading: 'Présenter les résultats',
      paragraphs: [
        'Les résultats sont présentés dans l’application et peuvent être exportés en PDF. Moduloop pouvait ainsi utiliser les mêmes données pour travailler sur un projet et pour en présenter les résultats à son client.',
      ],
    },
    {
      heading: 'La suite de la collaboration',
      paragraphs: [
        'L’application a été mise en production en juin 2024, à la fin de mon stage de troisième année. J’en ai ensuite assuré la maintenance en freelance, avant de développer Moduloop Kits pour la préparation des offres commerciales.',
      ],
    },
  ],
};
