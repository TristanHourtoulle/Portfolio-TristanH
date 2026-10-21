# Tristan Hourtoulle — Portfolio

A French-language portfolio presenting my web development experience, client work and personal projects as I look for my first full-time developer role after freelancing.

[Visit the website](https://www.tristanhourtoulle.fr/) · [LinkedIn](https://www.linkedin.com/in/tristan-hourtoulle/) · [Contact](mailto:tristan.hourtoulle@icloud.com)

**English** · [Français](README.fr.md)

> The public website and the branch you are browsing may differ until changes are deployed.

## Overview

The portfolio focuses on the work behind each project: the initial need, my contribution, technical decisions and delivery status.

- Professional experience and detailed case studies for Hosteed, Moduloop Impact, Moduloop Kits and Quintyss.
- Personal projects, including Freelance Manager, Dégommix and Edukai.
- An education and experience timeline, client and teammate testimonials, and contact links.
- A filterable project index, screenshot galleries and project-specific media.
- Responsive layouts, mobile navigation, a skip link and keyboard focus styles.
- Page metadata, generated Open Graph images, structured data and a sitemap.

The website itself is in French. Only the repository documentation is available in both languages.

## Built with

- **Next.js 16** with the App Router and React 19.
- **TypeScript** with strict checking.
- **Tailwind CSS 4**, custom CSS and Lucide icons.
- **Local TypeScript content modules** rather than a CMS or database.
- **Self-hosted fonts** loaded through `next/font/local`.
- **Vercel** hosting, Analytics and Speed Insights integrations.

[package.json](package.json) declares dependency ranges or pinned versions; [pnpm-lock.yaml](pnpm-lock.yaml) records the resolved versions. The technologies described in the case studies belong to those projects, not necessarily to this portfolio.

## Getting started

### Prerequisites

- **Node.js 22**, as specified in [.nvmrc](.nvmrc).
- **pnpm 9.15.9**, the version used to validate the current dependency lockfile.

Clone the repository and select the branch you want to run before installing its dependencies:

```bash
git clone https://github.com/TristanHourtoulle/Portfolio-TristanH.git
cd Portfolio-TristanH

# If you use nvm:
nvm install
nvm use

corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal. The development script searches for an available port starting at **4300**.

No environment file, database or API credentials are required to run the portfolio locally.

### Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start development on an available port, starting at 4300. |
| `pnpm dev:default` | Start development using Next.js's default port, 3000. |
| `pnpm build` | Create an optimized production build. |
| `pnpm start` | Serve the existing build on an available port, starting at 4300. |
| `pnpm start:default` | Serve the existing build using Next.js's default port, 3000. |
| `pnpm lint` | Run ESLint. |
| `pnpm type-check` | Run TypeScript without emitting files. |

Run `pnpm build` before either production-server command. Port selection is implemented in [scripts/next-port.mjs](scripts/next-port.mjs).

## Project structure

```text
public/
├── fonts/                 # Browser fonts and their licenses
├── images/                # Portrait, project screenshots and timeline photos
└── videos/                # Project videos
scripts/
└── next-port.mjs          # Available-port selection for local servers
src/
├── app/                   # Routes, metadata, Open Graph images and global CSS
├── components/            # Page sections, navigation, galleries and shared UI
└── lib/                   # Typed content, configuration and rendering helpers
    ├── case-studies/      # Client case-study copy
    └── og-fonts/          # OpenType fonts used for social images
```

### Where content lives

| File | Content |
| --- | --- |
| [src/lib/constants.ts](src/lib/constants.ts) | Site identity, contact details, navigation, homepage copy, testimonials and profile actions. |
| [src/lib/case-studies-content.ts](src/lib/case-studies-content.ts) | Case-study assembly and project-index filtering. |
| [src/lib/case-studies/](src/lib/case-studies/) | Copy for individual client case studies. |
| [src/lib/personal-projects-content.ts](src/lib/personal-projects-content.ts) | Personal-project pages and media references. |
| [src/lib/parcours-content.ts](src/lib/parcours-content.ts) | Education and experience timeline. |
| [src/lib/products.ts](src/lib/products.ts) | Shared project facts, stacks and client identities. |
| [src/lib/legal-content.ts](src/lib/legal-content.ts) | Legal-notice content. |

Main routes: `/`, `/realisations`, `/realisations/[slug]`, `/parcours` and `/mentions-legales`.

The CV download is configured through `CV_PDF_PATH` in `src/lib/constants.ts`. When no PDF is configured, profile actions link to LinkedIn instead.

## Checks and deployment

Before submitting a change:

```bash
pnpm type-check
pnpm lint
pnpm build
git diff --check
```

These commands do not replace browser checks. There is currently no automated unit or end-to-end test suite configured in this repository. Check mobile layouts, navigation, project filters, media and social images when changing the interface or content.

The site is hosted on Vercel. Non-production builds send an `X-Robots-Tag: noindex, nofollow` header through [next.config.ts](next.config.ts). Preview deployment and production publication are separate steps; a successful local build does not publish the website.

## Fonts and licensing

Apfel Grotezk and Commit Mono are self-hosted. Their license texts must remain with the font files:

- [Apfel Grotezk license](public/fonts/ApfelGrotezk-LICENSE.txt)
- [Commit Mono license](public/fonts/CommitMono-LICENSE.txt)
- [Open Graph font conversion notices](src/lib/og-fonts/LICENSE.md)

No repository-wide software license is currently declared. The font licenses apply to the fonts, not to the entire project.

---

README structure inspired by [Make a README](https://www.makeareadme.com/), adapted to a personal portfolio rather than a reusable library.
