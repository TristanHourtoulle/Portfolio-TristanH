import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { CopyEmailButton } from '@/components/ui/copy-email-button';

export function CtaSection() {
  return (
    <section className="cta-final" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Un projet en tête ? Réservons 30 minutes.</h2>
        <p className="lead">
          Un appel gratuit pour cadrer votre besoin. Vous repartez au minimum avec un avis honnête sur votre
          projet.
        </p>
        <div className="cta-final-actions">
          <Button variant="invert" href={SITE_CONFIG.calendlyUrl}>
            Réserver mon créneau
          </Button>
          <CopyEmailButton email={SITE_CONFIG.email} />
        </div>
      </div>
    </section>
  );
}
