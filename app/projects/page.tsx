// Section import Pictures
import Edukai_iMockup1 from "@/public/Edukai/iMockup - iPhone 15 Pro Max-1.png";
import Edukai_iMockup2 from "@/public/Edukai/iMockup - iPhone 15 Pro Max-2.png";
import Edukai_iMockup3 from "@/public/Edukai/iMockup - iPhone 15 Pro Max.png";
import Edukai_LandingPage from "@/public/Edukai/Landing Page 1.png";
import FigmaLogo from "@/public/Figma.png";
import FlutterLogo from "@/public/Flutter.png";
import NextJSLogo from "@/public/NextJS.png";
import NodeJSLogo from "@/public/NodeJS.png";
import PostgreSQLLogo from "@/public/PostgreSQL.png";
import TailwindLogo from "@/public/Tailwind.png";

import { SectionTitle } from "@/components/SectionTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Head from "next/head";
import Image from "next/image";

export type pageProps = {};

const page = (props: pageProps) => {
  return (
    <>
      <Head>
        <title>Tristan Hourtoulle - Projects</title>
        <meta
          name="description"
          content="Discover the projects I have worked on"
        />
        <meta
          name="description"
          content="Découvrez les projets sur lesquels j'ai travaillé"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.tristanhourtoulle.fr/projects"
        />
      </Head>
      <div className="w-full h-full flex items-center justify-center mt-[30%] md:mt-[10%] lg:mt-[5%]">
        <div className="flex flex-col items-start gap-10 mr-auto w-full">
          {/* Header */}
          <div className="flex items-center justify-start w-full">
            <h1
              className={
                "text-3xl md:text-4xl lg:text-5xl outfit-bold text-primary"
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
              src={Edukai_LandingPage}
              alt="Edukai"
              className="rounded-lg border-2 border-[#2a17ff]"
              width={1200}
              height={1200}
              objectFit="contain w-full"
              placeholder="blur"
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
                src={Edukai_iMockup1}
                alt="Edukai"
                className=""
                width={220}
                height={220}
                objectFit="contain"
                placeholder="blur"
              />

              <Image
                src={Edukai_iMockup2}
                alt="Edukai"
                className=""
                width={220}
                height={220}
                objectFit="contain"
                placeholder="blur"
              />

              <Image
                src={Edukai_iMockup3}
                alt="Edukai"
                className=""
                width={220}
                height={220}
                objectFit="contain"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Description */}
          <div className="outfit-medium text-black text-lg md:text-2xl w-full text-justify lg:text-left">
            <p>
              <span className="outfit-bold">Edukai</span> is an innovative app
              that uses AI to{" "}
              <span className="text-primary outfit-semibold">
                transform handwritten or digital notes into interactive review
                sheets and quizzes
              </span>
              , tailored to the user&apos;s grade level. The application makes
              it easy to export generated media to PDF and DOCX formats for easy
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
                    src={FigmaLogo}
                    alt="Figma logo"
                    width={40}
                    height={40}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">Figma</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* NextJS */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={NextJSLogo}
                    alt="Next.js logo"
                    width={60}
                    height={60}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">NextJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Tailwind */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={TailwindLogo}
                    alt="Tailwind CSS logo"
                    width={60}
                    height={60}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">
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
                    src={FlutterLogo}
                    alt="Flutter logo"
                    width={60}
                    height={60}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">Flutter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* NodeJS */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={NodeJSLogo}
                    alt="Node.js logo"
                    width={90}
                    height={90}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">NodeJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* PostgreSQL */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={PostgreSQLLogo}
                    alt="PostgreSQL logo"
                    width={60}
                    height={60}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-primary outfit-regular text-lg">
                    PostgreSQL
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
