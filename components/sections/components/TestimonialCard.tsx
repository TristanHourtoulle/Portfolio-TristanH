import Image from "next/image";

export type TestimonialCardProps = {
  testimonial: {
    image: string;
    name: string;
    company: string;
    description: string;
  };
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const { image, name, company, description } = props.testimonial;

  return (
    <div className="transition-all hover:scale-105 rounded-md bg-white border-2 border-[#4F62CC] border-opacity-25 px-8 py-6 flex flex-col items-start w-[300px] lg:w-[500px] h-full">
      {/* Header */}
      <div className="flex items-center justify-start gap-3 lg:gap-6">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full border-1 border-[#4F62CC]"
        />
        <h2 className="text-[#4F62CC] font-bold text-lg lg:text-2xl">
          {name}
          <span className="text-[#4F62CC] text-opacity-50">{company}</span>
        </h2>
      </div>
      {/* Content */}
      <p className="text-sm lg:text-md text-[#8F9DF0] mt-2 lg:mt-4">
        {description}
      </p>
    </div>
  );
};
