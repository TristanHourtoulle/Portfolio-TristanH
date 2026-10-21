import type { ClientCaseStudyCopy } from '../types';

export const QUINTYSS_COPY: ClientCaseStudyCopy = {
  lead: 'J’ai participé à la V3 d’un CMS pour administrer plusieurs sites clients depuis une même plateforme. Mon travail portait sur l’architecture, le développement, les revues de code et un éditeur permettant de publier les modifications sans redéploiement.',
  metaDescription:
    'Développement d’un CMS multi-sites : architecture commune, édition des pages sans redéploiement, revues de code et suivi technique de mars 2025 à août 2026.',
  statusBadge: 'Mission terminée en août 2026',
  statusDetail:
    'À la fin de ma mission : deux sites en production et un troisième déployé, en attente de validation.',
  narrative: [
    {
      heading: 'Passer à un socle multi-sites',
      paragraphs: [
        'Quintyss développe des sites pour ses clients. La V3 devait permettre d’en accueillir plusieurs sur une architecture commune, tout en conservant les contenus, les pages et la charte propres à chacun.',
      ],
    },
    {
      heading: 'Mon rôle dans le développement',
      paragraphs: [
        'Je suis intervenu en freelance de mars 2025 à août 2026. En plus du développement, je participais aux choix d’architecture, à la revue du code et au découpage et au suivi des tâches.',
      ],
    },
    {
      heading: 'Publier sans redéployer',
      paragraphs: [
        'L’éditeur traitait chaque bloc de page comme un contenu enregistré et versionné côté serveur. Les pages publiques utilisaient ces données plutôt qu’un contenu figé au moment du build. La gestion du cache devait donc répercuter les modifications enregistrées sur les pages concernées.',
      ],
    },
    {
      heading: 'Ce que cela permettait',
      paragraphs: [
        'Les clients pouvaient modifier leurs pages depuis l’éditeur sans demander un nouveau déploiement. Le même socle servait à plusieurs sites, avec leurs contenus et leur présentation propres.',
      ],
    },
    {
      heading: 'Pourquoi il n’y a pas de captures',
      paragraphs: [
        'Le client ne souhaite pas que le produit soit présenté visuellement. Cette étude de cas décrit donc mon intervention sans capture d’écran, logo ni nom de site client.',
      ],
    },
    {
      heading: 'À la fin de la mission',
      paragraphs: [
        'En août 2026, deux sites étaient en production et un troisième était déployé, en attente de validation. La mise en place d’un nouveau site sur le socle se comptait alors en heures.',
      ],
    },
  ],
};
