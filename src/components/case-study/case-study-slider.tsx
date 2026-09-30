'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import type { CaseStudyGalleryImage } from '@/lib/types';

interface CaseStudySliderProps {
  images: CaseStudyGalleryImage[];
  /** Case study title, used to label the carousel region. */
  label: string;
}

/** Time an image stays on screen before the carousel advances on its own. */
const AUTOPLAY_INTERVAL_MS = 5000;

/**
 * Desktop screenshot carousel for a case-study page.
 */
export function CaseStudySlider({ images, label }: CaseStudySliderProps) {
  const [index, setIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isUserDriven, setIsUserDriven] = useState(false);
  const baseId = useId();

  const count = images.length;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPrefersReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const isAutoplayRunning =
    !isPausedByUser && !isSuspended && !prefersReducedMotion && count > 1;

  useEffect(() => {
    if (!isAutoplayRunning) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
      setIsUserDriven(false);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isAutoplayRunning, count]);

  const goTo = useCallback(
    (next: number) => {
      setIsPausedByUser(true);
      setIsUserDriven(true);
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(index - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(index + 1);
      }
    },
    [goTo, index]
  );

  if (count === 0) {
    return null;
  }

  const current = images[index] ?? images[0];
  const statusText = `Image ${index + 1} sur ${count} : ${current.alt}`;

  return (
    <div
      className="screens-slider"
      role="group"
      aria-roledescription="carousel"
      aria-label={`Captures d'écran de ${label}`}
      onMouseEnter={() => setIsSuspended(true)}
      onMouseLeave={() => setIsSuspended(false)}
      onFocus={() => setIsSuspended(true)}
      onBlur={() => setIsSuspended(false)}
      onKeyDown={handleKeyDown}
      data-autoplay={isAutoplayRunning ? 'running' : 'paused'}
    >
      <div className="slider-frame">
        <span className="slider-chrome" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <div className="slider-viewport" id={`${baseId}-viewport`}>
          <ul
            className="slider-track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {images.map((image, slideIndex) => (
              <li
                key={image.src}
                className="slider-slide"
                role="group"
                aria-roledescription="diapositive"
                aria-label={`${slideIndex + 1} sur ${count}`}
                aria-hidden={slideIndex !== index}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1200px) 1040px, 96vw"
                  quality={90}
                />
              </li>
            ))}
          </ul>

          {count > 1 && (
            <>
              <button
                type="button"
                className="slider-arrow slider-arrow-prev"
                onClick={() => goTo(index - 1)}
                aria-controls={`${baseId}-viewport`}
                aria-label="Capture précédente"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M15 5 8 12l7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="slider-arrow slider-arrow-next"
                onClick={() => goTo(index + 1)}
                aria-controls={`${baseId}-viewport`}
                aria-label="Capture suivante"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="m9 5 7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="slider-caption">
        {images.map((image, captionIndex) => (
          <p key={image.src} data-current={captionIndex === index}>
            {image.alt}
          </p>
        ))}
      </div>

      {count > 1 && (
        <div className="slider-controls">
          <div className="slider-dots" role="group" aria-label="Choisir une capture">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                className="slider-dot"
                onClick={() => goTo(dotIndex)}
                aria-controls={`${baseId}-viewport`}
                aria-current={dotIndex === index}
                aria-label={`Capture ${dotIndex + 1} sur ${count} : ${image.alt}`}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="slider-toggle mono"
            onClick={() => setIsPausedByUser((paused) => !paused)}
            aria-controls={`${baseId}-viewport`}
            aria-label={
              isPausedByUser
                ? 'Reprendre le défilement automatique'
                : 'Mettre en pause le défilement automatique'
            }
          >
            {isPausedByUser ? (
              <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                <path d="M3 1.5 10 6l-7 4.5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                <path d="M3 1.5h2.1v9H3zm3.9 0H9v9H6.9z" fill="currentColor" />
              </svg>
            )}
            {isPausedByUser ? 'Reprendre' : 'Pause'}
          </button>
        </div>
      )}

      <p className="slider-status" aria-live="polite">
        {isUserDriven ? statusText : ''}
      </p>
    </div>
  );
}
