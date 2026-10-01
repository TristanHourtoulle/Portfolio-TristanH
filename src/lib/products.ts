import type { CaseStudySlug, ClientColor, ClientId } from './types';

const CLIENT_COLORS: ClientColor[] = [
  {
    id: 'moduloop',
    name: 'Moduloop',
    brand: '#00AAAB',
    ink: '#006C6D',
    logo: { src: '/images/clients/moduloop.png', width: 300, height: 79 },
  },
  {
    id: 'hosteed',
    name: 'Hosteed',
    brand: '#015993',
    ink: '#015993',
    logo: { src: '/images/clients/hosteed.png', width: 500, height: 271 },
  },
  {
    id: 'quintyss',
    name: 'Quintyss',
    brand: '#6F93F4',
    ink: '#01164E',
  },
];

export const CLIENT_COLOR_BY_ID: Record<ClientId, ClientColor> = Object.fromEntries(
  CLIENT_COLORS.map((client) => [client.id, client])
) as Record<ClientId, ClientColor>;

export const CASE_STUDY_STACKS: Record<CaseStudySlug, readonly string[]> = {
  hosteed: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'VPS client'],
  'moduloop-impact': ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
  'moduloop-kits': ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Better Auth'],
  quintyss: ['Next.js', 'TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'Stripe', 'Railway'],
};
