import Image from 'next/image';

interface BrowserFrameProps {
  src: string;
  /** What the screenshot shows, as a sentence a reader would get from the image itself. */
  alt: string;
  /** Intrinsic width of the source file, in pixels. */
  width: number;
  /** Intrinsic height of the source file, in pixels. */
  height: number;
  sizes?: string;
  priority?: boolean;
}

/** Default layout hint: full width of the content column. */
const DEFAULT_SIZES = '(min-width: 1100px) 900px, 92vw';

/**
 * Browser shell drawn in CSS around a desktop screenshot.
 *
 * The chrome is a title bar with three dots and nothing else, so it reads as a
 * window without pretending to be one. The viewport takes its proportions from
 * the screenshot, so a wide dashboard and a tall analytics page both fit without
 * cropping.
 *
 * @returns The framed image.
 */
export function BrowserFrame({
  src,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
}: BrowserFrameProps) {
  return (
    <div className="browser-frame">
      <div className="browser-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div
        className="browser-viewport"
        style={{ '--browser-ratio': `${width} / ${height}` } as React.CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={90}
          priority={priority}
        />
      </div>
    </div>
  );
}
