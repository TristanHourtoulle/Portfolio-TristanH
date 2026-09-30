import { TRUST_STATS } from '@/lib/constants';

/**
 * Band of headline proof figures.
 */
export function TrustSection() {
  return (
    <aside className="trust" aria-label="Références chiffrées">
      <div className="wrap">
        <p>
          Depuis 2024 : <span className="figure">{TRUST_STATS.clientsCount}</span> clients accompagnés et{' '}
          <span className="figure">{TRUST_STATS.productsInProduction}</span> produits en production,
          utilisés chaque jour.
        </p>
      </div>
    </aside>
  );
}
