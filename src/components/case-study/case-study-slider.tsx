'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import type { SliderImage } from '@/lib/types';

type SliderVariant = 'capture' | 'photo';

interface CaseStudySliderProps {
  images: SliderImage[];
  /** Subject of the carousel, used to label its region. */
  label: string;
  /** What the carousel shows, which drives its wording and its frame. */
  variant?: SliderVariant;
}

/** Time an image stays on screen before the carousel advances on its own. */
const AUTOPLAY_INTERVAL_MS = 5000;

interface SliderWording {
  regionLabel: (label: string) => string;
  previous: string;
  next: string;
  pickLabel: string;
  itemLabel: (position: number, total: number, alt: string) => string;
  /** Whether the frame draws the browser chrome above the viewport. */
  hasChrome: boolean;
  sizes: string;
}

const VARIANTS: Record<SliderVariant, SliderWording> = {
  capture: {
    regionLabel: (label) => `Captures d'écran de ${label}`,
    previous: 'Capture précédente',
    next: 'Capture suivante',
    pickLabel: 'Choisir une capture',
    itemLabel: (position, total, alt) => `Capture ${position} sur ${total} : ${alt}`,
    hasChrome: true,
    sizes: '(min-width: 1200px) 1040px, 96vw',
  },
  photo: {
    regionLabel: (label) => `Photos de ${label}`,
    previous: 'Photo précédente',
    next: 'Photo suivante',
    pickLabel: 'Choisir une photo',
    itemLabel: (position, total, alt) => `Photo ${position} sur ${total} : ${alt}`,
    hasChrome: false,
    sizes: '(min-width: 900px) 420px, (min-width: 560px) 50vw, 88vw',
  },
};

/**
 * Autoplaying carousel, used for case-study captures and for parcours photographs.
 */
export function CaseStudySlider({ images, label, variant = 'capture' }: CaseStudySliderProps) {
  const [index, setIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isUserDriven, setIsUserDriven] = useState(false);
  const baseId = useId();
  const wording = VARIANTS[variant];

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

  const current = images[index] ?? images[0];

  if (current === undefined) {
    return null;
  }

  const statusText = `Image ${index + 1} sur ${count} : ${current.alt}`;

  return (
    <div
      className="screens-slider"
      role="group"
      aria-roledescription="carousel"
      aria-label={wording.regionLabel(label)}
      onMouseEnter={() => setIsSuspended(true)}
      onMouseLeave={() => setIsSuspended(false)}
      onFocus={() => setIsSuspended(true)}
      onBlur={() => setIsSuspended(false)}
      onKeyDown={handleKeyDown}
      data-autoplay={isAutoplayRunning ? 'running' : 'paused'}
      data-variant={variant}
    >
      <div className="slider-frame">
        {wording.hasChrome && (
          <span className="slider-chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}

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
                  sizes={wording.sizes}
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
                aria-label={wording.previous}
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
                aria-label={wording.next}
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
          <div className="slider-dots" role="group" aria-label={wording.pickLabel}>
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                className="slider-dot"
                onClick={() => goTo(dotIndex)}
                aria-controls={`${baseId}-viewport`}
                aria-current={dotIndex === index}
                aria-label={wording.itemLabel(dotIndex + 1, count, image.alt)}
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
