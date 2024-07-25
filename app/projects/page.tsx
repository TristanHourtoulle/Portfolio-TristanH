import { SectionTitle } from "@/components/SectionTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export type pageProps = {};

const page = (props: pageProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-[30%] md:mt-[10%] lg:mt-[5%]">
      <div className="flex flex-col items-start gap-10 mr-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-start w-full">
          <h1
            className={
              "text-3xl md:text-4xl lg:text-5xl poppins-bold text-primary"
            }
          >
            Projects -{" "}
            <span className="text-secondary righteous-regular">Edukai</span>
          </h1>
        </div>

        {/* Photos */}
        <div className="flex flex-col items-center justify-center w-full gap-3">
          {/* Dekstop View */}
          <Image
            src="/Edukai/Landing Page 1.svg"
            alt="Edukai"
            className="rounded-lg border-2 border-[#2a17ff]"
            width={1200}
            height={1200}
            objectFit="contain w-full"
          />
          <Image
            src="/Edukai/Back Office - Home.svg"
            alt="Edukai"
            className="rounded-lg border-2 border-[#2a17ff]"
            width={1440}
            height={1162}
            objectFit="contain w-full"
          />

          <div className="w-full flex flex-wrap items-center justify-center gap-3 lg:gap-10">
            <Image
              src="/Edukai/iMockup - iPhone 15 Pro Max-1.svg"
              alt="Edukai"
              className=""
              width={220}
              height={220}
              objectFit="contain"
            />

            <Image
              src="/Edukai/iMockup - iPhone 15 Pro Max-2.svg"
              alt="Edukai"
              className=""
              width={220}
              height={220}
              objectFit="contain"
            />

            <Image
              src="/Edukai/iMockup - iPhone 15 Pro Max.svg"
              alt="Edukai"
              className=""
              width={220}
              height={220}
              objectFit="contain"
            />
          </div>
        </div>

        {/* Description */}
        <div className="poppins-medium text-black text-lg md:text-2xl w-full text-justify lg:text-left">
          <p>
            <span className="poppins-bold">Edukai</span> is an innovative app
            that uses AI to{" "}
            <span className="text-primary poppins-semibold">
              transform handwritten or digital notes into interactive review
              sheets and quizzes
            </span>
            , tailored to the user&apos;s grade level. The application makes it
            easy to export generated media to PDF and DOCX formats for easy
            editing and sharing.
          </p>
        </div>

        {/* Technologies */}
        <SectionTitle text="Technologies" />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          {/* Figma */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/Figma.svg"
                  alt="Figma logo"
                  width={40}
                  height={40}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">Figma</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* NextJS */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/NextJS.svg"
                  alt="Next.js logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">NextJS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Tailwind */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/Tailwind.svg"
                  alt="Tailwind CSS logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">
                  TailwindCSS
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* ReactJS */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/Flutter.svg"
                  alt="Flutter logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">Flutter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* NodeJS */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/NodeJS.svg"
                  alt="Node.js logo"
                  width={90}
                  height={90}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">NodeJS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* PostgreSQL */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/PostgreSQL.svg"
                  alt="PostgreSQL logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">
                  PostgreSQL
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default page;
