# Tristan Hourtoulle — Portfolio

Un portfolio en français qui présente mon expérience en développement web, mes missions clients et mes projets personnels dans le cadre de ma recherche d’un premier CDI après le freelance.

[Voir le site](https://www.tristanhourtoulle.fr/) · [LinkedIn](https://www.linkedin.com/in/tristan-hourtoulle/) · [Contact](mailto:tristan.hourtoulle@icloud.com)

[English](README.md) · **Français**

> Le site public et la branche consultée peuvent différer tant que les changements ne sont pas déployés.

## Présentation

Le portfolio met en avant le travail derrière chaque projet : le besoin initial, mon intervention, les choix techniques et le statut de livraison.

- Expériences professionnelles et études de cas détaillées : Hosteed, Moduloop Impact, Moduloop Kits et Quintyss.
- Projets personnels, dont Freelance Manager, Dégommix et Edukai.
- Parcours de formation et d’expérience, témoignages de clients et de collègues, et liens de contact.
- Liste de réalisations filtrable, galeries de captures et médias propres aux projets.
- Mise en page responsive, navigation mobile, lien d’évitement et styles de focus clavier.
- Métadonnées, images Open Graph générées, données structurées et sitemap.

Le site reste en français. Seule la documentation du dépôt est proposée dans les deux langues.

## Stack technique

- **Next.js 16** avec l’App Router et React 19.
- **TypeScript** en mode strict.
- **Tailwind CSS 4**, CSS personnalisé et icônes Lucide.
- **Contenu dans des modules TypeScript locaux**, sans CMS ni base de données.
- **Polices auto-hébergées**, chargées avec `next/font/local`.
- Hébergement **Vercel** et intégrations Analytics et Speed Insights.

[package.json](package.json) déclare les plages de versions ou les versions fixes ; [pnpm-lock.yaml](pnpm-lock.yaml) enregistre les versions résolues. Les technologies décrites dans les études de cas appartiennent à ces projets, pas nécessairement au portfolio.

## Installation locale

### Prérequis

- **Node.js 22**, indiqué dans [.nvmrc](.nvmrc).
- **pnpm 9.15.9**, version utilisée pour valider le fichier de verrouillage actuel.

Cloner le dépôt et sélectionner la branche à lancer avant d’installer ses dépendances :

```bash
git clone https://github.com/TristanHourtoulle/Portfolio-TristanH.git
cd Portfolio-TristanH

# Avec nvm :
nvm install
nvm use

corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Ouvrir l’URL locale affichée dans le terminal. Le script de développement cherche un port disponible à partir de **4300**.

Aucun fichier d’environnement, aucune base de données et aucun identifiant d’API ne sont nécessaires pour lancer le portfolio en local.

### Commandes

| Commande | Usage |
| --- | --- |
| `pnpm dev` | Lancer le développement sur un port disponible à partir de 4300. |
| `pnpm dev:default` | Lancer le développement sur le port par défaut de Next.js, 3000. |
| `pnpm build` | Générer un build de production optimisé. |
| `pnpm start` | Servir le build existant sur un port disponible à partir de 4300. |
| `pnpm start:default` | Servir le build existant sur le port par défaut de Next.js, 3000. |
| `pnpm lint` | Exécuter ESLint. |
| `pnpm type-check` | Vérifier les types TypeScript sans générer de fichiers. |

Exécuter `pnpm build` avant l’une des commandes de serveur de production. La sélection du port est gérée par [scripts/next-port.mjs](scripts/next-port.mjs).

## Structure du projet

```text
public/
├── fonts/                 # Polices du navigateur et licences
├── images/                # Portrait, captures des projets et photos du parcours
└── videos/                # Vidéos des projets
scripts/
└── next-port.mjs          # Sélection d’un port libre pour les serveurs locaux
src/
├── app/                   # Routes, métadonnées, images Open Graph et CSS global
├── components/            # Sections, navigation, galeries et composants partagés
└── lib/                   # Contenu typé, configuration et fonctions de rendu
    ├── case-studies/      # Textes des études de cas clients
    └── og-fonts/          # Polices OpenType pour les images de partage
```

### Emplacement des contenus

| Fichier | Contenu |
| --- | --- |
| [src/lib/constants.ts](src/lib/constants.ts) | Identité, coordonnées, navigation, textes de l’accueil, témoignages et actions du profil. |
| [src/lib/case-studies-content.ts](src/lib/case-studies-content.ts) | Assemblage des études de cas et filtrage des réalisations. |
| [src/lib/case-studies/](src/lib/case-studies/) | Textes propres aux études de cas clients. |
| [src/lib/personal-projects-content.ts](src/lib/personal-projects-content.ts) | Pages des projets personnels et références de leurs médias. |
| [src/lib/parcours-content.ts](src/lib/parcours-content.ts) | Parcours de formation et d’expérience. |
| [src/lib/products.ts](src/lib/products.ts) | Informations communes aux projets, stacks et identités clients. |
| [src/lib/legal-content.ts](src/lib/legal-content.ts) | Contenu des mentions légales. |

Routes principales : `/`, `/realisations`, `/realisations/[slug]`, `/parcours` et `/mentions-legales`.

Le téléchargement du CV se configure avec `CV_PDF_PATH` dans `src/lib/constants.ts`. En l’absence de PDF configuré, les actions du profil renvoient vers LinkedIn.

## Vérifications et déploiement

Avant de soumettre une modification :

```bash
pnpm type-check
pnpm lint
pnpm build
git diff --check
```

Ces commandes ne remplacent pas les vérifications dans un navigateur. Aucune suite de tests unitaires ou de bout en bout automatisés n’est actuellement configurée dans ce dépôt. Vérifier les mises en page mobiles, la navigation, les filtres, les médias et les images de partage lors d’une modification de l’interface ou du contenu.

Le site est hébergé sur Vercel. Les builds hors production envoient un en-tête `X-Robots-Tag: noindex, nofollow` défini dans [next.config.ts](next.config.ts). Le déploiement d’une preview et la publication en production sont deux étapes distinctes ; un build local réussi ne publie pas le site.

## Polices et licences

Apfel Grotezk et Commit Mono sont auto-hébergées. Leurs licences doivent rester avec les fichiers de polices :

- [Licence Apfel Grotezk](public/fonts/ApfelGrotezk-LICENSE.txt)
- [Licence Commit Mono](public/fonts/CommitMono-LICENSE.txt)
- [Notices de conversion des polices Open Graph](src/lib/og-fonts/LICENSE.md)

Aucune licence logicielle globale n’est actuellement déclarée pour ce dépôt. Les licences des polices s’appliquent aux polices, pas à l’ensemble du projet.

---

Structure du README inspirée de [Make a README](https://www.makeareadme.com/), adaptée à un portfolio personnel plutôt qu’à une bibliothèque réutilisable.
