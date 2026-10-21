import Link from 'next/link';
import { REALISATION_PAGES } from '@/lib/case-studies-content';
import type { RealisationFilter } from '@/lib/types';

interface FilterOption {
  id: RealisationFilter;
  label: string;
  href: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'tout', label: 'Tout', href: '/realisations' },
  { id: 'client', label: 'Clients et stages', href: '/realisations?type=client' },
  { id: 'perso', label: 'Projets personnels', href: '/realisations?type=perso' },
];

/**
 * Number of entries each filter keeps, computed once from the column itself.
 */
const COUNT_BY_FILTER: Record<RealisationFilter, number> = {
  tout: REALISATION_PAGES.length,
  client: REALISATION_PAGES.filter((page) => page.provenance === 'client').length,
  perso: REALISATION_PAGES.filter((page) => page.provenance === 'perso').length,
};

interface RealisationsFilterProps {
  active: RealisationFilter;
}

/**
 * Filter control for the realisations column.
 * @returns The three filter links.
 */
export function RealisationsFilter({ active }: RealisationsFilterProps) {
  return (
    <nav className="realisations-filter" aria-label="Filtrer les réalisations">
      <ul>
        {FILTER_OPTIONS.map((option) => (
          <li key={option.id}>
            <Link
              href={option.href}
              aria-current={option.id === active ? 'true' : undefined}
              data-active={option.id === active ? 'true' : undefined}
              scroll={false}
            >
              {option.label}
              <span className="realisations-filter-count mono" aria-hidden="true">
                {COUNT_BY_FILTER[option.id]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
