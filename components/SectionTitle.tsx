export type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div className="w-full">
      <h1 className="text-5xl poppins-bold text-primary">{text}</h1>
    </div>
  );
};
