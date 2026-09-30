import Image from 'next/image';
import type { CaseStudyGalleryImage } from '@/lib/types';
import { CaseStudySlider } from './case-study-slider';

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[];
  /** Case study title, forwarded to the carousel for its accessible name. */
  label: string;
}

/** Id of the "Sur mobile" label. */
const MOBILE_VIEWS_LABEL_ID = 'case-screens-mobile-views';

/**
 * Screenshot section of a case-study page.
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
          <div className="mobile-views" role="group" aria-labelledby={MOBILE_VIEWS_LABEL_ID}>
            <p id={MOBILE_VIEWS_LABEL_ID} className="mobile-views-title mono">
              Sur mobile
            </p>
            <ul className="mobile-views-list">
              {mobileImages.map((image) => (
                <li key={image.src}>
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
