import Image from "next/image";

export type BlurImageProps = {
  picture: string;
  width: number;
  height: number;
  alt: string;
  className: string;
};

export const BlurImage = ({
  picture,
  width,
  height,
  alt,
  className,
}: BlurImageProps) => {
  return (
    <div className="w-full h-full">
      <Image
        src={picture}
        width={width}
        height={height}
        alt={alt}
        className={className}
        placeholder="blur"
      />
    </div>
  );
};
