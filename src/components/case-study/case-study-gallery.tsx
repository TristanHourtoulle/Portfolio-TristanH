import Image from 'next/image';
import { BrowserFrame } from '@/components/ui/browser-frame';
import { PhoneFrame } from '@/components/ui/phone-frame';
import type { CaseStudyGalleryImage, CaseStudyPageContent } from '@/lib/types';
import { CaseStudySlider } from './case-study-slider';

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[];
  /** Realisation title, forwarded to the carousel for its accessible name. */
  label: string;
  /** How the captures are drawn. Defaults to the desktop carousel. */
  layout?: CaseStudyPageContent['galleryLayout'];
}

/** Id of the "Sur mobile" label. */
const MOBILE_VIEWS_LABEL_ID = 'case-screens-mobile-views';

const PHONE_SIZES = '(min-width: 900px) 240px, (min-width: 560px) 40vw, 78vw';

const BROWSER_SIZES = '(min-width: 1100px) 520px, 92vw';

/**
 * Draws one capture in the device shell it was taken on.
 * @param image - the capture and the frame it belongs in
 * @returns The framed capture.
 */
function FramedShot({ image }: { image: CaseStudyGalleryImage }) {
  if (image.frame === 'phone') {
    return (
      <PhoneFrame
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={PHONE_SIZES}
      />
    );
  }

  return (
    <BrowserFrame
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={BROWSER_SIZES}
    />
  );
}

/**
 * Screenshot section of a realisation page.
 */
export function CaseStudyGallery({ images, label, layout = 'slider' }: CaseStudyGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  if (layout === 'frames') {
    const frame = images[0]?.frame ?? 'browser';

    return (
      <section className="case-screens" aria-label="Captures d'écran du projet">
        <div className="wrap">
          <ul className="case-frames-list" data-frame={frame}>
            {images.map((image) => (
              <li key={image.src}>
                <figure className="case-frame-figure">
                  <FramedShot image={image} />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const desktopImages = images.filter((image) => image.variant === 'desktop');
  const mobileImages = images.filter((image) => image.variant === 'mobile');

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
