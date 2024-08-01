export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <div className="w-full mb-3">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="outfit-light text-sm text-primary text-center md:text-start">
            © 2024 Tristan Hourtoulle - All Rights Reserved
          </p>
          {/* <p className="outfit-medium text-sm md:text-lg text-primary text-center md:text-start order-first">
            Designed and built with ❤️ by Tristan Hourtoulle
          </p> */}
        </div>
      </div>
    </div>
  );
};
