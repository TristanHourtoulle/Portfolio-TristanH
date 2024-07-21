export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center mt-[5%]">
        <div className="flex items-center justify-center gap-10">
          <p className="poppins-medium text-lg text-primary">
            © 2024 Tristan Hourtoulle
          </p>
          <p className="poppins-medium text-lg text-primary">
            Designed and built with ❤️ by Tristan Hourtoulle
          </p>
        </div>
      </div>
    </div>
  );
};
