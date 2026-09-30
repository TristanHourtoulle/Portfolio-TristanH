import Link from 'next/link';
import { PARCOURS_TEASER } from '@/lib/parcours-content';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Homepage block pointing at the parcours page.
 */
export function ParcoursSection() {
  return (
    <section aria-labelledby="parcours-teaser-title">
      <div className="wrap">
        <SectionHeading
          eyebrow={PARCOURS_TEASER.eyebrow}
          title={PARCOURS_TEASER.title}
          titleId="parcours-teaser-title"
        />
        <div className="parcours-teaser">
          {PARCOURS_TEASER.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="parcours-link" href={PARCOURS_TEASER.linkHref}>
            {PARCOURS_TEASER.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
