import Image from 'next/image';
import type { CaseStudyGalleryImage } from '@/lib/types';
import { CaseStudySlider } from './case-study-slider';

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[];
  /** Case study title, forwarded to the carousel for its accessible name. */
  label: string;
}

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
          <div className="mobile-views">
            <h2 className="mobile-views-title mono">Sur mobile</h2>
            <ul className="mobile-views-list">
              {mobileImages.map((image) => (
                <li key={image.src}>
                  <figure className="mobile-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
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
