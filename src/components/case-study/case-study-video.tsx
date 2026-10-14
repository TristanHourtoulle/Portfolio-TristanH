'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { PhoneShell } from '@/components/ui/phone-frame';
import type { CaseStudyVideo as CaseStudyVideoContent } from '@/lib/types';

interface CaseStudyVideoProps {
  video: CaseStudyVideoContent;
}

/** Id of the section heading, which names the region for assistive technology. */
const SECTION_TITLE_ID = 'case-video-title';

const POSTER_SIZES = '(min-width: 900px) 300px, (min-width: 560px) 46vw, 78vw';

/**
 * Promo film of a realisation, framed as a phone screen.
 * Nothing of the file is fetched until the start control is pressed: the frame
 * shows an optimised still, and the element carries `preload="none"`.
 * @param video - the file, its still and the French copy that stands in for it
 * @returns The video section.
 */
export function CaseStudyVideo({ video }: CaseStudyVideoProps) {
  const elementRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isStillVisible, setIsStillVisible] = useState(true);

  const start = useCallback(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    setIsStarted(true);
    element.play().catch(() => {
      setIsStillVisible(false);
    });
  }, []);

  const hideStill = useCallback(() => {
    setIsStillVisible(false);
  }, []);

  return (
    <section className="case-video" aria-labelledby={SECTION_TITLE_ID}>
      <div className="wrap">
        <div className="case-video-layout">
          <div className="case-video-player" data-started={isStarted}>
            <PhoneShell width={video.width} height={video.height}>
              <video
                ref={elementRef}
                className="case-video-media"
                src={video.src}
                preload="none"
                playsInline
                controls={isStarted}
                aria-label={video.title}
                onPlaying={hideStill}
              />
              {isStillVisible && (
                <Image
                  className="case-video-still"
                  src={video.poster}
                  alt=""
                  width={video.width}
                  height={video.height}
                  sizes={POSTER_SIZES}
                  quality={90}
                />
              )}
              {!isStarted && (
                <button
                  type="button"
                  className="case-video-start"
                  aria-label={video.playLabel}
                  onClick={start}
                >
                  <span className="case-video-start-mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="case-video-start-text" aria-hidden="true">
                    Lire la vidéo
                    <span className="mono">{video.durationLabel}</span>
                  </span>
                </button>
              )}
            </PhoneShell>
          </div>

          <div className="case-video-text">
            <p className="eyebrow">Vidéo</p>
            <h2 id={SECTION_TITLE_ID}>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
