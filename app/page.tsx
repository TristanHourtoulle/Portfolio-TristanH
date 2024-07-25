"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-[10%] w-full min-h-screen gap-1 md:gap-4 lg:gap-2">
        <div className="w-full lg:w-1/2 text-center lg:text-start text-primary flex flex-col items-center lg:items-start gap-1 lg:gap-4">
          <p className="poppins-regular md:text-lg w-full mt-[5%] lg:mt-0">
            Welcome to my site!
          </p>
          <div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-start w-full">
            <h1 className="poppins-bold text-center lg:text-start text-4xl md:text-5xl lg:text-6xl">
              Hi! I&apos;m Tristan <span className="hidden">Hourtoulle</span>
            </h1>
            <h2 className="poppins-bold text-2xl md:text-5xl lg:text-6xl">
              <span className="text-secondary">Full Stack</span> Developer
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-5 justify-start mt-[5%] poppins-medium text-xl selected:none">
            <Button
              size={"lg"}
              className="text-xl bg-[#2a17ff] hover:bg-[#2a17ff]/85 w-full"
              onClick={() =>
                window.open("https://www.malt.fr/profile/tristanhourtoulle")
              }
              style={{
                filter: "drop-shadow(4px 4px 4px rgba(42, 23, 255, 0.5))",
              }}
            >
              <Image
                src="/Malt_logo_white.svg"
                alt="Malt logo"
                width={25}
                height={25}
                className="mr-4"
              />
              Hire me!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl  border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] w-full selected:none"
            >
              See my projects
            </Button>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <Image
            src={"/pictures/Photo de profil - TH.jpg"}
            alt="Tristan Hourtoulle profile picture"
            width={500}
            height={500}
            className="rounded-bl-[15%] rounded-[2.5%] hover:rounded-bl-[2.5%] hover:rounded-[15%] transition-all mt-[15%] md:mt-[15%] lg:mt-0"
          />
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2 mb-[10%] w-full">
        <SectionTitle text="Contact me" />
        <h3 className="text-primary text-lg md:text-2xl poppins-medium">
          Feel free to contact me!
        </h3>
        <div className="flex flex-wrap items-center justify-start gap-2 md:gap-5 mt-[2%] w-full">
          {/* Malt */}
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none poppins-medium text-lg text-primary"
            onClick={() =>
              window.open("https://www.malt.fr/profile/tristanhourtoulle")
            }
            style={{
              filter: "drop-shadow(4px 4px 4px rgba(42, 23, 255, 0.5))",
            }}
          >
            <Image
              src="/Malt_logo_white 1.svg"
              alt="Malt logo"
              width={25}
              height={25}
              className="mr-4"
            />
            Malt.
          </Button>

          {/* Linkedin */}
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none poppins-medium text-lg text-primary"
            onClick={() =>
              window.open("https://www.linkedin.com/in/tristan-hourtoulle")
            }
          >
            <Image
              src="/Linkedin 1.svg"
              alt="LinkedIn logo"
              width={25}
              height={25}
              className="mr-4"
            />
            Linkedin
          </Button>

          {/* Mail */}
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none poppins-medium text-lg text-primary"
            onClick={() => window.open("mailto:tristan.hourtoulle@epitech.eu")}
          >
            <Image
              src="/gmail 1.svg"
              alt="Gmail logo"
              width={25}
              height={25}
              className="mr-4"
            />
            Mail
          </Button>
        </div>
      </div>
    </div>
  );
}
