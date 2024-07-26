"use client";

// Picture Import Section
import GmailLogo from "@/public/gmail 1.png";
import LinkedInLogo from "@/public/linkedin 1.png";
import MaltLogoWhite from "@/public/Malt_logo_white 1.png";
import MaltLogo from "@/public/Malt_logo_white.png";
import ProfilPicture from "@/public/pictures/Photo de profil - TH.jpg";

import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tristan Hourtoulle</title>
        <meta
          name="description"
          content="Tristan Hourtoulle's personal website"
        />
        <meta
          name="description"
          content="Discover the portfolio of Tristan Hourtoulle, web developer and creator of innovative solutions."
        />
        <meta
          name="description"
          content="Découvrez le portfolio de Tristan Hourtoulle, développeur web et créateur de solutions innovantes."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tristanhourtoulle.fr" />
      </Head>
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
                  src={MaltLogo}
                  width={25}
                  height={25}
                  alt={"Malt logo"}
                  className={"mr-4"}
                  placeholder="blur"
                />
                Hire me!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl  border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] w-full selected:none"
                onClick={() => (window.location.href = "/projects")}
              >
                See my projects
              </Button>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Image
              src={ProfilPicture}
              alt="Tristan Hourtoulle profile picture"
              width={500}
              height={500}
              placeholder="blur"
              className="rounded-bl-[15%] rounded-[2.5%] hover:rounded-bl-[2.5%] hover:rounded-[15%] transition-all mt-[15%] md:mt-[15%] lg:mt-0"
            />
          </div>
        </div>

        <div
          className="mt-auto flex flex-col gap-2 mb-[10%] w-full"
          id="contactSection"
        >
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
                src={MaltLogoWhite}
                alt="Malt logo"
                width={25}
                height={25}
                className="mr-4"
                placeholder="blur"
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
                src={LinkedInLogo}
                alt="LinkedIn logo"
                width={25}
                height={25}
                className="mr-4"
                placeholder="blur"
              />
              Linkedin
            </Button>

            {/* Mail */}
            <Button
              variant={"outline"}
              size={"lg"}
              className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none poppins-medium text-lg text-primary"
              onClick={() => window.open("mailto:contact@tristanhourtoulle.fr")}
            >
              <Image
                src={GmailLogo}
                alt="Gmail logo"
                width={25}
                height={25}
                className="mr-4"
                placeholder="blur"
              />
              Mail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
