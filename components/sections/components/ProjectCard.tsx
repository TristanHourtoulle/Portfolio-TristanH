import Image from "next/image";

export type ProjectCardProps = {
  project: {
    logo: string;
    name: string;
    description: string;
    link: string;
  };
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { logo, name, description, link } = props.project;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="transition-all hover:scale-105 cursor-pointer rounded-md bg-white border-2 border-[#4F62CC] border-opacity-25 px-8 py-6 flex flex-col items-start w-[300px] lg:w-[500px] h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-start gap-3 lg:gap-6">
        <Image
          src={logo}
          alt={name}
          width={50}
          height={50}
          className="rounded-full border-1 border-[#4F62CC]"
        />
        <h2 className="text-[#4F62CC] font-bold text-lg lg:text-2xl">{name}</h2>
      </div>
      {/* Content */}
      <p className="text-sm lg:text-md text-[#8F9DF0] mt-4">{description}</p>
    </div>
  );
};
