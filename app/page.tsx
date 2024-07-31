"use client";

// Picture Import Section
import GmailLogo from "@/public/gmail 1.png";
import LinkedInLogo from "@/public/linkedin 1.png";
import MaltLogoWhite from "@/public/Malt_logo_white 1.png";
import MaltLogo from "@/public/Malt_logo_white.png";
import ProfilPicture from "@/public/pictures/Photo de profil - TH.jpg";
import WavingHand from "@/public/WavingHand.png";

import { DownArrow, UpArrow } from "@/components/cta/Arrow";
import { ScrollingText } from "@/components/ScrollingText";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
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
      <div className="w-full h-full py-[1.5%] scroll-smooth">
        <div className="px-[15%] flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-[10%] w-full min-h-screen gap-1 md:gap-4 lg:gap-2">
          <div className="w-full lg:w-1/2 text-center lg:text-start text-primary flex flex-col items-center lg:items-start gap-1 lg:gap-4">
            <div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-start w-full">
              <div className="flex items-center gap-3">
                <p className="outfit-medium md:text-2xl w-full mt-[5%] lg:mt-0">
                  Welcome!
                </p>
                <Image
                  src={WavingHand}
                  alt="Welcome to Tristan Hourtoulle website"
                  width={40}
                  height={40}
                  className="lg:pb-2 wave-hand"
                />
              </div>
              <div className="outfit-bold text-center lg:text-start text-4xl md:text-6xl lg:text-9xl">
                <h1>I&apos;m Tristan </h1>
                <h1 className="hidden">Hourtoulle</h1>
              </div>
              <h2 className="outfit-bold text-xl md:text-5xl lg:text-6xl text-secondary">
                Full Stack Developer
              </h2>
              <p className="text-lg text-justify md:text-2xl text-secondary outfit-medium">
                I create modern and aesthetic websites with a focus on user
                experience, as a Freelancer.
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-5 justify-start mt-[5%] outfit-medium text-xl selected:none">
              <Button
                size={"lg"}
                className="text-xl bg-[#e43d12] hover:bg-[#e43d12]/75 w-full"
                onClick={() =>
                  window.open("https://www.malt.fr/profile/tristanhourtoulle")
                }
                style={{
                  filter: "drop-shadow(4px 4px 4px rgba(228, 61, 18, 0.5))",
                }}
              >
                <Image
                  src={MaltLogo}
                  width={25}
                  height={25}
                  alt={"Malt logo"}
                  className={"mr-4"}
                />
                Hire me!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl border-2 border-[#e43d12] hover:bg-[#e43d12]/10 hover:text-[#e43d12] w-full selected:none"
                onClick={() => {
                  scrollToSection("contactSection");
                }}
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Image
              src={ProfilPicture}
              alt="Tristan Hourtoulle profile picture"
              width={400}
              height={400}
              placeholder="blur"
              className="rounded-[5%] transition-all mt-[15%] md:mt-[15%] lg:mt-0"
            />
          </div>
          <div className="bottom-5 absolute left-[40%] lg:left-[50%] animate-light-bounce-little w-10 h-10">
            <DownArrow location="#projectsSection" />
          </div>
        </div>

        {/* AboutMeSection */}
        <div
          className="flex flex-col gap-2 mb-[10%] w-full pt-[5%]"
          id="aboutMeSection"
        >
          <div className="flex min-w-screen overflow-x-hidden">
            <div className="py-[2%] border-y-4 border-[#e43d12] w-full">
              <ScrollingText text="About Me" speed={10} direction="left" />
            </div>
          </div>
        </div>

        {/* ProjectsSection */}
        <div
          className="flex flex-col gap-2 mb-[10%] w-full pt-[5%]"
          id="projectsSection"
        >
          <div className="flex min-w-screen overflow-x-hidden">
            <div className="py-[2%] border-y-4 border-[#e43d12] w-full">
              <ScrollingText text="Projects" speed={10} direction="left" />
            </div>
          </div>
        </div>

        {/* ContactSection */}
        <div
          className="flex flex-col gap-2 mb-[5%] w-full pt-[5%] pb-[5%]"
          id="contactSection"
        >
          <div className="flex min-w-screen overflow-x-hidden">
            <div className="py-[2%] border-y-4 border-[#e43d12] w-full">
              <ScrollingText text="Contact" speed={10} direction="left" />
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-2 w-full px-[15%] pt-[2%]">
            <SectionTitle text="Contact me" />
            <h3 className="text-primary text-lg md:text-2xl outfit-medium">
              Feel free to contact me!
            </h3>
            <div className="flex flex-wrap items-center justify-start gap-2 md:gap-5 mt-[2%] w-full">
              {/* Malt */}
              <Button
                variant={"outline"}
                size={"lg"}
                className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none outfit-medium text-lg text-primary"
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
                />
                Malt.
              </Button>

              {/* Linkedin */}
              <Button
                variant={"outline"}
                size={"lg"}
                className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none outfit-medium text-lg text-primary"
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
                />
                Linkedin
              </Button>

              {/* Mail */}
              <Button
                variant={"outline"}
                size={"lg"}
                className="text-xl w-full md:w-auto border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none outfit-medium text-lg text-primary"
                onClick={() =>
                  window.open("mailto:contact@tristanhourtoulle.fr")
                }
              >
                <Image
                  src={GmailLogo}
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

        <div className="relative left-[40%] lg:left-[50%] animate-light-bounce-little w-10 h-10">
          <UpArrow location="" />
        </div>
      </div>
    </>
  );
}
