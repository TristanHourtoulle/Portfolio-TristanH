import { SectionTitle } from "@/components/SectionTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Informations about Tristan Hourtoulle",
};

export type pageProps = {};

const page = (props: pageProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-[30%] md:mt-[10%] lg:mt-[5%]">
      <div className="flex flex-col items-start gap-10 mr-auto mb-[10%]">
        <SectionTitle text="About Me" />
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-4 lg:pr-[25%]">
          <Image
            src="/Citation.svg"
            alt="About me citation"
            width={40}
            height={40}
          />
          <p className="my-[5%] text-justify poppins-medium text-lg md:text-2xl text-primary opacity-75">
            I&apos;m Tristan and I am 22 years old. My goal is to bring your
            ideas to reality while using the latest technology so that your
            project is as modern as possible.
          </p>
          <Image
            src="/Citation.svg"
            alt="About me citation"
            width={40}
            height={40}
            className="rotate-180 mt-auto ml-auto lg:ml-0"
          />
        </div>
        <SectionTitle text="Skills" />
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10">
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
                <p className="text-primary poppins-regular text-lg">
                  I can create beautiful designs with Figma.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Github */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/Github.svg"
                  alt="Github logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">
                  I can create and maintain repositories on Github.
                </p>
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
                <p className="text-primary poppins-regular text-lg">
                  I can create modern websites with Next.js.
                </p>
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
                  I can style websites with Tailwind CSS.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* ReactJS */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/ReactJS.svg"
                  alt="React logo"
                  width={60}
                  height={60}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary poppins-regular text-lg">
                  I can create websites with React.
                </p>
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
                <p className="text-primary poppins-regular text-lg">
                  I can create backends with Node.js.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Image
        src="/Photo de profil - TH.png"
        alt="Tristan's profile picture"
        width={500}
        height={500}
        className="rounded-full animate-light-bounce mb-[10%] order-first lg:order-last"
      />
    </div>
  );
};

export default page;
