import Image from "next/image";

export type ProjectCardProps = {
  project: {
    logo: string;
    name: string;
    description: string;
    link: string;
    preview: string;
  };
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { logo, name, description, link, preview } = props.project;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[275px] lg:w-[400px] h-full flex flex-col gap-2 p-2 bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
    >
      {/* Conteneur de l'image */}
      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
        <Image src={preview} alt={name} fill className="object-cover" />
        {/* Superposition lors du hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all rounded-lg">
          <p className="text-white text-lg font-medium">Cliquez pour visiter</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="w-full flex flex-col items-start justify-center px-3 pb-4">
        {/* Logo et Nom */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold text-[#4A5CC2]">{name}</h2>
        </div>

        {/* Description */}
        <p className="text-sm text-[#8F9DF0] text-justify">{description}</p>
      </div>
    </div>
  );
};
