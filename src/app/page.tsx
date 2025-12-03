import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TechCard } from '@/components/ui/TechCard';
import { HERO_BADGES, TECH_SKILLS } from '@/lib/constants';
import { Phone, ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container-portfolio py-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-text-dark mb-2">
          Phase 2 - Composants UI
        </h1>
        <p className="text-text-light mb-12">
          Prévisualisation des composants réutilisables
        </p>

        {/* Section 1: Badge Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-dark mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            1. Badge Component
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text-dark">Variantes</h3>
            <div className="flex flex-wrap gap-4">
              <Badge label="Développeur Web" variant="blue" />
              <Badge label="Designer Web" variant="green" />
            </div>

            <h3 className="text-lg font-medium text-text-dark mt-6">
              Depuis constants.ts (HERO_BADGES)
            </h3>
            <div className="flex flex-wrap gap-4">
              {HERO_BADGES.map((badge) => (
                <Badge key={badge.id} label={badge.label} variant={badge.variant} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Button Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-dark mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            2. Button Component
          </h2>

          {/* Variants */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">
                Variantes
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">Tailles</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">
                Avec icônes
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon={<Phone className="w-4 h-4" />}>
                  Discutons de votre projet
                </Button>
                <Button
                  variant="secondary"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Voir plus
                </Button>
                <Button variant="outline" icon={<Mail className="w-4 h-4" />}>
                  Contact
                </Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">États</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button variant="primary" href="#contact">
                  Comme lien (href)
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: TechCard Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-dark mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            3. TechCard Component
          </h2>

          <div className="space-y-8">
            {/* Single Card Example */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">
                Carte individuelle (hover pour effet)
              </h3>
              <div className="max-w-sm">
                <TechCard
                  title="Next.JS"
                  description="Framework React pour applications web modernes et performantes."
                  icon="nextjs"
                />
              </div>
            </div>

            {/* Card with Technologies List */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">
                Carte avec liste de technologies
              </h3>
              <div className="max-w-sm">
                <TechCard
                  title="Backend/BDD/Déploiement"
                  description="Stack complète avec Node.js, Supabase et Vercel."
                  technologies={['Node.js', 'Supabase', 'Vercel']}
                />
              </div>
            </div>

            {/* Full Grid from constants.ts */}
            <div>
              <h3 className="text-lg font-medium text-text-dark mb-4">
                Grille complète (depuis TECH_SKILLS)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECH_SKILLS.map((skill) => (
                  <TechCard
                    key={skill.id}
                    title={skill.title}
                    description={skill.description}
                    icon={skill.icon}
                    technologies={skill.technologies}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-text-light text-center">
            Phase 2 complétée - Prêt pour Phase 3 (Sections principales)
          </p>
        </footer>
      </main>
    </div>
  );
}
