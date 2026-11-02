import { CTA_CONTENT, SITE_CONFIG } from '@/lib/constants';
import { CopyEmailButton } from '@/components/ui/copy-email-button';
import { ProfileActions } from '@/components/ui/profile-actions';

/**
 * Closing call-to-action band.
 */
export function CtaSection() {
  return (
    <section className="cta-final" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">{CTA_CONTENT.title}</h2>
        <p className="lead">{CTA_CONTENT.lead}</p>
        <div className="cta-final-actions">
          <ProfileActions primaryVariant="invert" secondaryVariant="invert-ghost" />
          <CopyEmailButton email={SITE_CONFIG.email} />
        </div>
      </div>
    </section>
  );
}
