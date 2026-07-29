import Image from 'next/image';
import type { CaseStudyGalleryImage } from '@/lib/types';
import { CaseStudySlider } from './case-study-slider';

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[];
  /** Case study title, forwarded to the carousel for its accessible name. */
  label: string;
}

/**
 * Id of the "Sur mobile" label, referenced by the block it names.
 *
 * Hardcoded rather than taken from `useId`, which is unavailable in a
 * server component. This gallery is rendered once per case-study page, so
 * a fixed id cannot collide with itself.
 */
const MOBILE_VIEWS_LABEL_ID = 'case-screens-mobile-views';

/**
 * Screenshot section of a case-study page.
 *
 * Desktop captures go into a single wide 16/9 carousel, so a visitor sees
 * one product screen at a real, readable size instead of a wall of
 * thumbnails. Phone captures are portrait and would either be crushed or
 * badly cropped in that frame, so they get their own row of narrow
 * vertical frames underneath. With one to three phone views per project a
 * plain row is enough; a second carousel would be machinery for nothing.
 *
 * This component stays a server component: only the carousel itself ships
 * client JavaScript.
 */
export function CaseStudyGallery({ images, label }: CaseStudyGalleryProps) {
  const desktopImages = images.filter((image) => image.variant === 'desktop');
  const mobileImages = images.filter((image) => image.variant === 'mobile');

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="case-screens" aria-label="Captures d'écran du projet">
      <div className="wrap">
        <CaseStudySlider images={desktopImages} label={label} />

        {mobileImages.length > 0 && (
          /*
            "Sur mobile" used to be an <h2>, and since this section comes
            before the narrative it made the first top-level topic of the
            whole page read, to anything parsing the outline, as "Sur
            mobile" rather than "Le point de départ". It is a label for a
            row of thumbnails, not a topic, so it is a <p> now and the row
            it names is a labelled group instead. Nothing moves visually:
            globals.css carries the line-height the heading element used
            to supply.
          */
          <div className="mobile-views" role="group" aria-labelledby={MOBILE_VIEWS_LABEL_ID}>
            <p id={MOBILE_VIEWS_LABEL_ID} className="mobile-views-title mono">
              Sur mobile
            </p>
            <ul className="mobile-views-list">
              {mobileImages.map((image) => (
                <li key={image.src}>
                  {/*
                    The figcaption below prints the description, so the
                    image itself takes an empty alt. Carrying the same
                    sentence in both made a screen reader announce every
                    phone capture twice, and shipped the text twice in the
                    page source. A <figcaption> is programmatically the
                    figure's own name, so nothing is lost by moving the
                    description entirely into it, and search engines read
                    captions as image context anyway.
                  */}
                  <figure className="mobile-frame">
                    <Image
                      src={image.src}
                      alt=""
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 640px) 260px, 42vw"
                    />
                    <figcaption>{image.alt}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
