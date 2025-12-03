# Plan d'Implémentation - Portfolio Tristan H.

## Vue d'ensemble

Ce document détaille le plan d'implémentation du portfolio basé sur le design Figma (Section 1).

---

## Analyse du Design

### Navigation (Header)
- Logo "Tristan H." à gauche
- Menu : Accueil, Compétences, Projets, Testimoniaux, Contact

### Section Hero
- Photo de profil circulaire
- Nom + 2 badges (Développeur Web, Designer Web)
- Titre : "Je ne crée pas de site **mais des expériences**"
- Sous-titre descriptif
- CTA : "Discutons de votre projet"

### Section Compétences
- Grid de 5 cartes :
  1. Next.JS
  2. Tailwind CSS
  3. TypeScript
  4. Backend/BDD/Déploiement (Node, Supabase, Vercel)
  5. Figma

---

## Structure des Fichiers

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── TechCard.tsx
├── lib/
│   ├── constants.ts
│   └── types.ts
└── public/
    ├── images/
    └── icons/
```

---

## Palette de Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Primary Blue | `#3B82F6` | Badges, liens, CTA |
| Secondary Green | `#10B981` | Badge designer |
| Text Dark | `#1F2937` | Titres |
| Text Light | `#6B7280` | Descriptions |
| Background | `#F9FAFB` | Fond page |
| Card BG | `#FFFFFF` | Fond cartes |

---

## Phases d'Implémentation

### Phase 1 : Configuration et Foundation

#### 1.1 Installer les dépendances
- [ ] `npm install lucide-react clsx`

#### 1.2 Configurer globals.css
- [ ] Définir les variables CSS (couleurs, shadows)
- [ ] Ajouter les classes utilitaires custom

#### 1.3 Créer la structure de dossiers
- [ ] Créer `src/components/`
- [ ] Créer `src/components/ui/`
- [ ] Créer `src/lib/`

#### 1.4 Fichiers de base
- [ ] Créer `src/lib/types.ts` (types TypeScript)
- [ ] Créer `src/lib/constants.ts` (données navigation, skills)

---

### Phase 2 : Composants UI Réutilisables

#### 2.1 Button Component
- [ ] Créer `src/components/ui/Button.tsx`
- [ ] Variantes : primary, secondary, outline
- [ ] Support icônes
- [ ] États hover/focus accessibles

#### 2.2 Badge Component
- [ ] Créer `src/components/ui/Badge.tsx`
- [ ] Variantes : blue, green
- [ ] Bordures arrondies

#### 2.3 TechCard Component
- [ ] Créer `src/components/ui/TechCard.tsx`
- [ ] Hover effect (shadow lift)
- [ ] Support single/multiple icons

---

### Phase 3 : Sections Principales

#### 3.1 Header/Navigation
- [ ] Créer `src/components/Header.tsx`
- [ ] Logo à gauche
- [ ] Menu de navigation
- [ ] Sticky behavior
- [ ] Version mobile (hamburger menu)
- [ ] Smooth scroll vers sections

#### 3.2 Hero Section
- [ ] Créer `src/components/Hero.tsx`
- [ ] Image de profil (placeholder)
- [ ] Badges alignés
- [ ] Titre avec partie colorée
- [ ] Sous-titre
- [ ] CTA button avec icône

#### 3.3 Skills Section
- [ ] Créer `src/components/Skills.tsx`
- [ ] Grid responsive
- [ ] 5 TechCards avec données
- [ ] Icons placeholders

---

### Phase 4 : Assemblage

#### 4.1 Page principale
- [ ] Modifier `src/app/page.tsx`
- [ ] Importer et composer les sections
- [ ] IDs pour navigation (scroll)

#### 4.2 Layout
- [ ] Modifier `src/app/layout.tsx`
- [ ] Metadata SEO (titre, description)
- [ ] Langue française
- [ ] Open Graph tags

---

### Phase 5 : Responsive & Polish

#### 5.1 Responsive Design
- [ ] Mobile (< 640px) : stack vertical, 1 col grid
- [ ] Tablet (640-1024px) : 2 cols grid
- [ ] Desktop (> 1024px) : layout complet

#### 5.2 Accessibilité
- [ ] Contraste WCAG AA
- [ ] Navigation clavier
- [ ] ARIA labels
- [ ] Alt texts images
- [ ] Focus visible

#### 5.3 Performance
- [ ] Optimisation next/image
- [ ] Vérifier Lighthouse score

---

## Dépendances à Installer

```bash
npm install lucide-react clsx
```

| Package | Usage |
|---------|-------|
| lucide-react | Icônes (Phone, Menu, etc.) |
| clsx | Classes conditionnelles |

---

## Breakpoints Responsive

| Breakpoint | Taille | Layout |
|------------|--------|--------|
| Mobile | < 640px | Stack vertical, 1 col |
| Tablet | 640px - 1024px | 2 cols |
| Desktop | > 1024px | Design complet |

---

## Checklist Finale

- [ ] Toutes les phases complétées
- [ ] Tests responsive sur mobile/tablet/desktop
- [ ] Accessibilité vérifiée
- [ ] Performance Lighthouse > 90
- [ ] Code propre et typé
- [ ] Prêt pour les sections 2 et 3

---

## Notes

- **Pas de push Git** : Tous les commits restent locaux
- **Placeholders** : Images temporaires en attendant les assets finaux
- **Extensible** : Structure prête pour Projets, Testimonials, Contact
