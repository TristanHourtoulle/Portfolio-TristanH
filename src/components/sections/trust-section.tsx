import { TRUST_STATS } from '@/lib/constants';

export function TrustSection() {
  return (
    <div className="trust" role="note" aria-label="Références chiffrées">
      <div className="wrap">
        <p>
          En freelance depuis 2024 : <span className="figure">{TRUST_STATS.clientsCount}</span> clients
          accompagnés, une note moyenne de <span className="figure">{TRUST_STATS.averageRating}/5</span> sur
          les avis reçus, et <span className="figure">{TRUST_STATS.productsInProduction}</span> produits
          aujourd&apos;hui en production, utilisés chaque jour.
        </p>
      </div>
    </div>
  );
}
