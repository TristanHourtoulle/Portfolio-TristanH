export type SectionTitleProps = {
  text: string;
  color?: string;
};

export const SectionTitle = ({ text, color }: SectionTitleProps) => {
  return (
    <div className="w-full">
      <h1 className={"text-5xl poppins-bold text-primary " + color}>{text}</h1>
    </div>
  );
};
