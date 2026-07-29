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
 *
 * Written without any carousel library: the track is a flex row translated
 * by whole slide widths, so the transition is a single CSS transform and
 * the whole thing costs no extra kilobyte of JavaScript beyond this file.
 *
 * Pausing has two levels, because the client asked for two different
 * behaviours. Clicking a dot or an arrow means "stay on this one", so it
 * locks autoplay off permanently (`isLocked`). Hovering or focusing only
 * suspends it while the pointer or the keyboard focus is inside the
 * carousel, so content never moves under the user's cursor.
 *
 * `prefers-reduced-motion: reduce` disables autoplay entirely here, and
 * globals.css drops the transform transition for the same query, so the
 * slider becomes a plain click-to-change viewer.
 */
export function CaseStudySlider({ images, label }: CaseStudySliderProps) {
  const [index, setIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const baseId = useId();

  const count = images.length;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPrefersReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const isAutoplayRunning = !isLocked && !isSuspended && !prefersReducedMotion && count > 1;

  useEffect(() => {
    if (!isAutoplayRunning) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isAutoplayRunning, count]);

  const goTo = useCallback(
    (next: number) => {
      setIsLocked(true);
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
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1200px) 1040px, 96vw"
                  priority={slideIndex === 0}
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

      <p className="slider-caption">{current.alt}</p>

      {count > 1 && (
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
      )}

      <p className="slider-status" aria-live="polite">
        {statusText}
      </p>
    </div>
  );
}
