# Phase 4 Implementation Plan - Projects & Testimonials

## Feature Overview

**What problem does this solve?**
Phase 4 implements the Projects and Testimonials sections to showcase your work portfolio and build credibility through client feedback.

**Who is it for?**
- Potential clients wanting to see examples of your work
- Visitors looking for social proof and client reviews
- Recruiters evaluating your project experience

**Key functionality**
- Projects section with interactive timeline/tabs navigation
- Project detail view with role, dates, location, and description
- Testimonials section with client reviews
- Star rating system (5/5)
- Average rating summary card
- Fully responsive design
- Dark mode support

---

## Technical Design

### Projects Section - Timeline Design

```
┌─────────────────────────────────────────────────────────────────────────┐
│  02. Mes projets                                                        │
│  ═══════════════════════════════════════════════════                    │
│                                                                         │
│  ┌──────────────────┐   ┌─────────────────────────────────────────────┐ │
│  │ Moduloop Impact  │   │  [Logo]  Moduloop Impact     [Freelance]    │ │
│  ├──────────────────┤   │                                             │ │
│  │ Edukai           │   │  Un outil web permettant de calculer        │ │
│  ├──────────────────┤   │  l'impact environnemental d'un projet...    │ │
│  │ > Portfolio      │   │                                             │ │
│  └──────────────────┘   │  [Next.js] [TypeScript] [Tailwind] [Web]    │ │
│                         │                                             │ │
│                         │  [🔗 Voir le projet]  ou  [🚧 Bientôt]      │ │
│                         └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

**Design Features:**

- Left sidebar with project names as tabs
- Active tab highlighted with left border (primary-blue)
- Right content area showing project details:
  - Logo + Title + Type badge (Freelance/Projet perso)
  - Full description
  - Tags list (technologies, project type, etc.)
  - Action button based on status:
    - `live`: "Voir le projet" (clickable link)
    - `private`: "Projet privé" (disabled/grayed)
    - `coming-soon`: "Bientôt disponible" (disabled with icon)

### Testimonials Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Toujours pas convaincu ?                                               │
│  Les retours de mes clients ne mentent pas.                             │
│                                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐                    │
│  │ Paul L.     │ │ Cyril K.    │ │ Note Moyenne    │                    │
│  │ ★★★★★      │ │ ★ 5/5       │ │ ★ 5/5           │                    │
│  │ Review...   │ │ Review...   │ │ sur +12 clients │                    │
│  └─────────────┘ └─────────────┘ └─────────────────┘                    │
│  ┌─────────────────────────────────────────────────┐                    │
│  │ Vincent G.                              ★★★★★ 5/5│                    │
│  │ "2ème mission accomplie avec succès..."         │                    │
│  └─────────────────────────────────────────────────┘                    │
│  ┌─────────────┐ ┌─────────────┐                                        │
│  │ Corinne E.  │ │ Timothé C.  │                                        │
│  │ ★★★★★      │ │ ★ 5/5       │                                        │
│  │ Review...   │ │ Review...   │                                        │
│  └─────────────┘ └─────────────┘                                        │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Component Structure

**New Components to Create:**

```
src/components/
├── Projects.tsx                    # Main projects section with timeline
├── Testimonials.tsx                # Main testimonials section
└── ui/
    ├── ProjectTimeline.tsx         # Timeline tabs + content component
    ├── ProjectTag.tsx              # Tag badge for projects (tech/type/other)
    ├── TestimonialCard.tsx         # Individual testimonial card
    ├── StarRating.tsx              # Star rating display
    └── AverageRatingCard.tsx       # Summary rating card
```

---

## Data Structures (types.ts additions)

```typescript
/**
 * Project type for Projects section
 */
export type ProjectType = 'freelance' | 'personal';

/**
 * Project status for link availability
 */
export type ProjectStatus = 'live' | 'private' | 'coming-soon';

/**
 * Tag for project categorization
 */
export interface ProjectTag {
  label: string;
  category: 'tech' | 'type' | 'other';  // tech = technologie, type = website/mobile/backend, other = custom
}

export interface Project {
  id: string;
  title: string;             // Project title (e.g., "Moduloop Impact")
  description: string;       // Full description of the project
  logo: string;              // Logo filename (in /public/icons/)
  type: ProjectType;         // 'freelance' or 'personal'
  tags: ProjectTag[];        // List of tags (technologies, project type, etc.)
  status: ProjectStatus;     // 'live', 'private', or 'coming-soon'
  url?: string;              // Optional URL (only if status is 'live')
}

/**
 * Testimonial for Testimonials section
 */
export interface Testimonial {
  id: string;
  name: string;              // Client name (e.g., "Paul L.")
  rating: number;            // Rating out of 5
  review: string;            // Review text
  variant?: 'default' | 'featured';  // Featured for wide card
}

/**
 * Testimonials config
 */
export interface TestimonialsConfig {
  averageRating: number;
  totalClients: number;
}
```

---

## Constants (constants.ts additions)

```typescript
/**
 * Projects for the Projects section
 * With detailed information, tags, and status
 */
export const PROJECTS: Project[] = [
  {
    id: 'moduloop',
    title: 'Moduloop Impact',
    description: "Un outil web permettant de calculer l'impact environnemental d'un projet d'aménagement. Interface intuitive pour la saisie des données projet et visualisation des résultats en temps réel.",
    logo: 'moduloop',
    type: 'freelance',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Site web', category: 'type' },
    ],
    status: 'live',
    url: 'https://moduloop.com',
  },
  {
    id: 'edukai',
    title: 'Edukai',
    description: "Générateur automatique de quiz de révision basé sur le cours de l'utilisateur. Utilisation de l'IA pour créer des questions pertinentes et personnalisées.",
    logo: 'edukai',
    type: 'personal',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'Supabase', category: 'tech' },
      { label: 'OpenAI', category: 'tech' },
      { label: 'Application web', category: 'type' },
      { label: 'IA', category: 'other' },
    ],
    status: 'coming-soon',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personnel',
    description: "Mon portfolio personnel présentant mes projets, compétences et témoignages clients. Design moderne et performant.",
    logo: 'portfolio',
    type: 'personal',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Site web', category: 'type' },
    ],
    status: 'live',
    url: 'https://tristanhourtoulle.com',
  },
];

/**
 * Testimonials for the Testimonials section
 * Based on Figma design
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'paul',
    name: 'Paul L.',
    rating: 5,
    review: "Tristan est positif et optimiste, ce qui rend le travail en équipe très agréable. Il est capable de faire face aux problèmes et de les résoudre en toute autonomie. Son travail est de qualité. Son éthique de travail est excellente, il est respectueux des délais et très impliqué.",
  },
  {
    id: 'cyril',
    name: 'Cyril K.',
    rating: 5,
    review: "Un plaisir de travailler avec Tristan, organisé et sérieux, il se plie en quatre pour trouver les solutions à nos problématiques. Je recommande !",
  },
  {
    id: 'vincent',
    name: 'Vincent G.',
    rating: 5,
    review: "2ème mission accomplie avec succès... rien à dire. On continue les yeux fermés... Merci Tristan pour la qualité de ton accompagnement",
    variant: 'featured',
  },
  {
    id: 'corinne',
    name: 'Corinne E.',
    rating: 5,
    review: "Travail de qualité, bon échange. Je referai appel à ses services si besoin !",
  },
  {
    id: 'timothe',
    name: 'Timothé C.',
    rating: 5,
    review: "J'ai pu travailler avec Tristan à de multiples reprises, son travail est toujours qualitatif et rapide",
  },
];

/**
 * Testimonials section config
 */
export const TESTIMONIALS_CONFIG: TestimonialsConfig = {
  averageRating: 5,
  totalClients: 12,
};
```

---

## Implementation Steps

### Step 1: Types & Constants

**1.1 Update types.ts**
- Add `ProjectType` type (freelance | personal | employment)
- Add `Project` interface with timeline fields
- Add `Testimonial` interface
- Add `TestimonialsConfig` interface

**1.2 Update constants.ts**
- Add `PROJECTS` array with detailed project data
- Add `TESTIMONIALS` array with testimonial data
- Add `TESTIMONIALS_CONFIG` object

---

### Step 2: UI Components

**2.1 StarRating Component**
```
src/components/ui/StarRating.tsx
```
- Props: `rating: number`, `showText?: boolean`, `size?: 'sm' | 'md'`
- Display filled stars based on rating
- Optional "5/5" text display
- Use lucide-react `Star` icon

**2.2 ProjectTimeline Component**

```
src/components/ui/ProjectTimeline.tsx
```

- Props: `projects: Project[]`
- State: `activeProject: string` (project id)
- Layout:
  - Left column: Tab list with project titles
  - Right column: Selected project details card

- Tab styling:
  - Inactive: `text-text-light`, no border
  - Active: `text-text-dark`, left border `border-l-2 border-primary-blue`
  - Hover: `bg-primary-blue/5`

- Content area (card):
  - Header row: Logo + Title + Type Badge
  - Description paragraph
  - Tags row: List of tags with different styling per category
  - Action button based on `status`:
    - `live`: Primary button "Voir le projet" with ExternalLink icon
    - `private`: Disabled button "Projet privé" with Lock icon
    - `coming-soon`: Disabled button "Bientôt disponible" with Clock icon

**2.3 ProjectTag Component (optional, can be inline)**

```
src/components/ui/ProjectTag.tsx
```

- Props: `tag: ProjectTag`
- Styling per category:
  - `tech`: Blue background (`bg-primary-blue/10 text-primary-blue`)
  - `type`: Green background (`bg-secondary-green/10 text-secondary-green`)
  - `other`: Gray background (`bg-text-light/10 text-text-light`)

**2.4 TestimonialCard Component**

```
src/components/ui/TestimonialCard.tsx
```
- Props: `testimonial: Testimonial`
- Two variants:
  - `default`: Compact card with stars at top or inline
  - `featured`: Wide card spanning multiple columns
- Display:
  - Star rating
  - Client name (bold)
  - Review text (text-light)
- Border styling matching design system

**2.5 AverageRatingCard Component**

```
src/components/ui/AverageRatingCard.tsx
```
- Props: `rating: number`, `totalClients: number`
- Display:
  - "Note Moyenne" title
  - Large star with "5/5" rating
  - "sur +12 clients" subtitle
- Special styling to stand out

---

### Step 3: Section Components

**3.1 Projects Section**
```
src/components/Projects.tsx
```
- Section header:
  - Number prefix: "02." in `text-primary-blue`
  - Title: "Mes projets" in `font-accent`
  - Decorative line separator
- ProjectTimeline component with all projects
- Responsive:
  - Desktop: Side-by-side tabs and content
  - Mobile: Stacked (tabs on top, content below) or accordion

**3.2 Testimonials Section**
```
src/components/Testimonials.tsx
```
- Section header:
  - Title: "Toujours pas convaincu ?" (primary-blue, accent font)
  - Subtitle: "Les retours de mes clients ne mentent pas."
- Grid layout:
  - Row 1: Paul L. card, Cyril K. card, Average Rating card
  - Row 2: Vincent G. featured card (spans 2 columns)
  - Row 3: Corinne E. card, Timothé C. card
- Responsive:
  - Desktop: 3 columns grid
  - Tablet: 2 columns
  - Mobile: 1 column (stacked)

---

### Step 4: Integration

**4.1 Update page.tsx**
```typescript
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';

// Add after Skills section:
<Projects />
<Testimonials />
```

**4.2 Verify Navigation**
- Ensure `#projects` scrolls to Projects section
- Ensure `#testimonials` scrolls to Testimonials section

---

### Step 5: Styling Details

**5.1 Color Palette**
- Section number: `text-primary-blue font-medium`
- Section title: `text-text-dark font-accent`
- Decorative line: `bg-primary-blue/30` or gradient
- Role title: `text-text-dark font-semibold`
- Company link: `text-primary-blue hover:underline`
- Date/Duration: `text-text-light text-sm`
- Location: `text-text-light text-sm` with `MapPin` icon
- Description: `text-text-light`
- Active tab: `border-l-2 border-primary-blue bg-primary-blue/5`

**5.2 Timeline Tab Styling**
```css
/* Inactive tab */
.tab-inactive {
  padding: 0.75rem 1rem;
  text-align: left;
  color: var(--text-light);
  transition: all 0.2s;
}

/* Active tab */
.tab-active {
  padding: 0.75rem 1rem;
  text-align: left;
  color: var(--text-dark);
  border-left: 2px solid var(--primary-blue);
  background: rgba(37, 99, 235, 0.05);
}

/* Hover */
.tab:hover {
  background: rgba(37, 99, 235, 0.05);
  color: var(--text-dark);
}
```

**5.3 Spacing**
- Section padding: `py-16 md:py-24`
- Timeline gap: `gap-8 md:gap-12`
- Tab list width: `w-48 md:w-56`
- Content area: `flex-1`

**5.4 Testimonial Cards**
- Border: `border-2 border-gray-300/10 dark:border-gray-500/10`
- Rounded corners: `rounded-2xl`
- Padding: `p-6`
- Shadow: `shadow-sm hover:shadow-md`

---

## File Changes Summary

### New Files

```
src/components/Projects.tsx              # Projects section with timeline
src/components/Testimonials.tsx          # Testimonials section
src/components/ui/ProjectTimeline.tsx    # Timeline tabs + content
src/components/ui/ProjectTag.tsx         # Tag badge component
src/components/ui/TestimonialCard.tsx    # Testimonial card component
src/components/ui/StarRating.tsx         # Star rating component
src/components/ui/AverageRatingCard.tsx  # Average rating card
public/icons/moduloop.svg                # Moduloop logo
public/icons/edukai.svg                  # Edukai logo
public/icons/portfolio.svg               # Portfolio logo (optional)
```

### Modified Files

```
src/lib/types.ts      # Add Project, Testimonial interfaces
src/lib/constants.ts  # Add PROJECTS, TESTIMONIALS data
src/app/page.tsx      # Import and render new sections
```

---

## Responsive Behavior

### Desktop (> 1024px)
- Projects: Side-by-side layout (tabs left, content right)
- Tab list: 200-220px width
- Content: Remaining space
- Testimonials: 3-column grid

### Tablet (640-1024px)
- Projects: Side-by-side (narrower tabs)
- Testimonials: 2-column grid
- Featured card spans full width

### Mobile (< 640px)
- Projects: Stacked layout
  - Option A: Horizontal scrollable tabs on top, content below
  - Option B: Accordion style (tap to expand)
- Testimonials: 1-column (stacked)
- All cards full width

---

## Accessibility

- Tab navigation: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Keyboard: Arrow keys to navigate tabs, Enter/Space to select
- Active tab: `aria-selected="true"`
- Tab panel: `aria-labelledby` referencing tab
- Stars: `aria-label="Note: 5 sur 5"`
- External links: `target="_blank" rel="noopener noreferrer"`
- Focus states on all interactive elements

---

## Dark Mode Support

All components must support dark mode:
- Card backgrounds: `bg-card-bg` (uses CSS variable)
- Text colors: `text-text-dark`, `text-text-light` (use CSS variables)
- Tab active background: `bg-primary-blue/5` (works in both modes)
- Borders: Already configured in TechCard pattern
- Stars: Use `text-primary-blue` (adapts automatically)
- Decorative elements: Use opacity-based colors

---

## Success Criteria

- [ ] All types added to types.ts
- [ ] All constants added to constants.ts
- [ ] StarRating component working
- [ ] ProjectTimeline with tab navigation
- [ ] TestimonialCard with both variants
- [ ] AverageRatingCard styled correctly
- [ ] Projects section with timeline design
- [ ] Testimonials grid layout
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigation for tabs
- [ ] Dark mode working
- [ ] Build passes without errors
- [ ] Navigation links scroll correctly

---

## Estimated Components Lines

```
StarRating.tsx           ~30 lines
ProjectTimeline.tsx      ~120 lines
ProjectTag.tsx           ~25 lines
TestimonialCard.tsx      ~60 lines
AverageRatingCard.tsx    ~40 lines
Projects.tsx             ~50 lines
Testimonials.tsx         ~70 lines
types.ts additions       ~35 lines
constants.ts additions   ~90 lines
```

**Total: ~520 lines of new code**

---

## Implementation Order

1. **Types & Constants** - Foundation for all components
2. **StarRating** - Reused by testimonials
3. **ProjectTag** - Tag badge component
4. **ProjectTimeline** - Core timeline component with tags
5. **AverageRatingCard** - Independent component
6. **TestimonialCard** - Uses StarRating
7. **Projects Section** - Uses ProjectTimeline
8. **Testimonials Section** - Uses TestimonialCard, AverageRatingCard
9. **Assets** - Add project logos (SVG)
10. **Integration** - Add to page.tsx
11. **Testing** - Verify all features

---

## Design Inspiration Notes

Based on the reference image and updated requirements:

### Visual Elements

- **Section numbering**: "02." prefix before title
- **Decorative line**: Horizontal line after title (gradient or solid)
- **Tab list**: Clean vertical list with project names
- **Active indicator**: Left border highlight (primary-blue)
- **Project card**: Logo, title, badge, description, tags, action button
- **Tags**: Color-coded badges (blue=tech, green=type, gray=other)
- **Status button**: Different states for live/private/coming-soon

### Typography

- Section number: Medium weight, primary blue
- Section title: Accent font (Poppins italic/script)
- Project tabs: Regular weight
- Project title: Semi-bold, large
- Description: Regular size, light color, good line height
- Tags: Small size, medium weight

### Status Button States

| Status | Label | Icon | Style |
|--------|-------|------|-------|
| `live` | "Voir le projet" | ExternalLink | Primary button (clickable) |
| `private` | "Projet privé" | Lock | Disabled/muted button |
| `coming-soon` | "Bientôt disponible" | Clock | Disabled button with accent |

### Tag Categories

| Category | Color | Example |
|----------|-------|---------|
| `tech` | Blue | Next.js, TypeScript, Supabase |
| `type` | Green | Site web, Application mobile, Backend |
| `other` | Gray | IA, Open source, MVP |

### Spacing & Layout

- Generous padding between sections
- Clear visual hierarchy
- Tab list: ~200px width on desktop
- Content area: Card with padding
- Tags: Flex wrap with gap-2

---

**Ready to implement Phase 4 with the new project-focused timeline design!**
