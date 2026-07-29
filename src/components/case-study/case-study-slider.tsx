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
 * Pausing now has three levels, and they are deliberately distinct.
 *
 * `isPausedByUser` is a stated intention: the visitor pressed the pause
 * button, or picked a specific slide with an arrow or a dot, which means
 * "stay here". It survives until the visitor presses play again.
 *
 * `isSuspended` is transient courtesy: while the pointer or the keyboard
 * focus is inside the carousel, nothing moves under the visitor. It ends
 * on mouse leave or blur and is never surfaced as a control state, since
 * a button whose label flipped on hover would be its own usability bug.
 *
 * `prefersReducedMotion` disables autoplay outright, and globals.css
 * drops both the transform transition and the play/pause button under the
 * same query, so the slider becomes a plain click-to-change viewer with no
 * control that would claim to govern motion that never happens. The button
 * is hidden in CSS rather than unmounted in React on purpose: the media
 * query already applies to the very first paint, whereas a conditional
 * render would only kick in at hydration and drop a row of the layout
 * under the visitor's eyes.
 */
export function CaseStudySlider({ images, label }: CaseStudySliderProps) {
  const [index, setIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  /**
   * Whether the slide currently on screen was reached by an explicit
   * action. Gates the live region below: see its own comment.
   */
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
                {/*
                  Empty alt on purpose. The exact same sentence is printed
                  in `.slider-caption` right below the frame, so carrying
                  it in the alt too made a screen reader read every
                  screenshot description twice in a row. The description is
                  the caption's job here; the image is the illustration of
                  it. Sighted and assistive users end up with one copy each.

                  No `priority`. This carousel sits under the case-study
                  <h1> and its metadata, so it is below the fold on every
                  viewport, yet `priority` emitted a high-priority
                  <link rel="preload" as="image"> in the head that the
                  browser acted on before any layout existed. That was
                  bandwidth taken from the real LCP candidate. Without it,
                  next/image falls back to loading="lazy", which starts
                  the fetch from the usual lazy-load margin, well before
                  the frame reaches the viewport.
                */}
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

      {/*
        Every caption is rendered, not just the current one. The others are
        hidden by `visibility: hidden` in globals.css, which keeps their boxes
        in the layout and out of the accessibility tree, and all of them share
        one grid cell. The box therefore reserves exactly the height of this
        case study's longest caption at the current width, so changing slide
        cannot shift what sits below it.

        The alternative was the previous one: a `min-height` per breakpoint,
        measured by hand against the longest caption of the day. It worked
        until someone wrote a longer caption, and nothing would have said so.
      */}
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

          {/*
            WCAG 2.2.2 wants a mechanism to stop content that moves on its
            own for more than five seconds. Hovering, focusing and clicking
            a dot all stopped this carousel already, but none of the three
            is a control anyone can see, so a keyboard user who never tabs
            in and a touch user who never taps had no way out.

            The state is carried by the accessible name, which flips
            between "Mettre en pause" and "Reprendre", and not by
            `aria-pressed`. A toggle button announces as "Pause, pressed",
            and that phrase is genuinely ambiguous: it can be heard as
            "pausing is currently on" or as "the pause control is
            engaged, so it will play". Two names that each state the next
            action leave nothing to interpret, which is also what the ARIA
            authoring practices specify for a carousel rotation control.

            Each accessible name contains its own visible label as a
            substring, so WCAG 2.5.3 Label in Name holds and a voice-input
            user can say what they read.
          */}
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

      {/*
        Announced by screen readers only: the visible caption already
        carries the same text for sighted users.

        The text is only published once the visitor moved the carousel
        themselves. Left ungated, this region fired every five seconds for
        as long as the page stayed open, which buries whatever the visitor
        was actually reading under a slide announcement they never asked
        for. Autoplay ticks blank it instead, and blanking is a removal,
        which the default `aria-relevant` of "additions text" does not
        announce.

        The region itself is always in the document with a constant
        `aria-live`, rather than being switched between "off" and "polite":
        assistive technology registers a live region when it is inserted,
        and a region that only becomes polite in the same commit as its own
        text change is not reliably picked up.
      */}
      <p className="slider-status" aria-live="polite">
        {isUserDriven ? statusText : ''}
      </p>
    </div>
  );
}
