export type ScrollingTextProps = {
  text: string;
  speed: number; // Note: Speed will control the duration of the animation
  direction: "left" | "right";
};

export const ScrollingText = ({
  text,
  speed,
  direction,
}: ScrollingTextProps) => {
  const animationDirection =
    direction === "left" ? "infinite-scroll" : "infinite-scroll-reverse";

  return (
    <div
      className="flex overflow-hidden 
   space-x-5 md:space-x-10 lg:space-x-16 uppercase text-3xl md:text-4xl lg:text-5xl text-primary outfit-bold"
    >
      <div
        className="overflow-hidden whitespace-nowrap w-full flex 
     space-x-5 md:space-x-10 lg:space-x-16 animate-loop-scroll"
      >
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
      </div>
      <div
        className="whitespace-nowrap w-full flex 
       space-x-5 md:space-x-10 lg:space-x-16 animate-loop-scroll"
        aria-hidden="true"
      >
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
        <p className="max-w-none">{text}</p>
      </div>
    </div>
  );
};
