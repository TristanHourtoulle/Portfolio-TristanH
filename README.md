# Portfolio Tristan Hourtoulle

Portfolio personnel, en français, construit avec Next.js 16 (App Router), React 19, TypeScript strict et Tailwind CSS 4. Le code des pages vit dans `src/app`, les composants dans `src/components` et le contenu éditorial dans `src/lib`.

## Commandes

```bash
pnpm dev          # serveur de développement, sur le premier port libre (scripts/next-port.mjs)
pnpm dev:default  # next dev, sur le port 3000
pnpm build        # build de production
pnpm start        # serveur de production, sur le premier port libre
pnpm lint         # eslint
pnpm type-check   # tsc --noEmit
```

## Polices

Les polices sont auto-hébergées dans `public/fonts` et chargées via `next/font/local` depuis `src/lib/fonts.ts` : Apfel Grotezk pour le texte et les titres, Commit Mono pour les libellés en chasse fixe. Les licences respectives sont dans le même dossier.
