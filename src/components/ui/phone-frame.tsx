import Image from 'next/image';

interface PhoneFrameProps {
  src: string;
  /** What the screenshot shows, as a sentence a reader would get from the image itself. */
  alt: string;
  /** Intrinsic width of the source file, in pixels. */
  width: number;
  /** Intrinsic height of the source file, in pixels. */
  height: number;
  sizes?: string;
  priority?: boolean;
  /** Set when the capture already shows a top bar of its own, so no island is drawn over it. */
  carriesOwnTopBar?: boolean;
}

/** Default layout hint: a single column on small screens, a fixed column beyond. */
const DEFAULT_SIZES = '(min-width: 640px) 280px, 62vw';

/**
 * Phone shell drawn in CSS around a mobile screenshot.
 * @returns The framed image.
 */
export function PhoneFrame({
  src,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
  carriesOwnTopBar = false,
}: PhoneFrameProps) {
  return (
    <div
      className="phone-frame"
      style={{ '--phone-ratio': `${width} / ${height}` } as React.CSSProperties}
    >
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={90}
          priority={priority}
        />
        {!carriesOwnTopBar && <span className="phone-island" aria-hidden="true" />}
      </div>
    </div>
  );
}
