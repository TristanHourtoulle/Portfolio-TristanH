"use client";

// Picture Import Section
import GithubLogoOrange from "@/public/developpeur 1.svg";
import FigmaLogo from "@/public/Figma.svg";
import GithubLogo from "@/public/Github.svg";
import GmailLogo from "@/public/gmail (1) 1.svg";
import LinkedInLogo from "@/public/linkedin (1) 1.svg";
import MaltLogoWhite from "@/public/Malt_logo_white 1.svg";
import MaltLogo from "@/public/Malt_logo_white.svg";
import NextjsLogo from "@/public/NextJS.svg";
import NodejsLogo from "@/public/NodeJS.svg";
import ProfilPicture from "@/public/pictures/Photo de profil - TH.jpg";
import ReactjsLogo from "@/public/ReactJS.svg";
import TailwindLogo from "@/public/Tailwind.svg";
import WavingHand from "@/public/WavingHand.svg";

import { ContactForm } from "@/components/contact/ContactForm";
import { DownArrow } from "@/components/cta/Arrow";
import { Edukai } from "@/components/projects/Edukai";
import { ScrollingText } from "@/components/ScrollingText";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
        <div
          id="homepageSection"
          className="px-[15%] flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-[10%] w-full min-h-screen gap-1 md:gap-4 lg:gap-2"
        >
          <div className="w-full lg:w-1/2 text-center lg:text-start text-primary flex flex-col items-center lg:items-start gap-1 lg:gap-4">
            <div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-start w-full">
              <div className="flex items-center gap-1 md:gap-3">
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
              className="rounded-[5%] transition-all md:mt-[15%] lg:mt-0"
            />
          </div>
          <div className="bottom-2 md:bottom-5 absolute left-[40%] lg:left-[49%] w-10 h-10">
            <DownArrow location="#projectsSection" />
          </div>
        </div>

        {/* AboutMeSection */}
        <div
          className="flex flex-col  gap-2 w-full pt-[20%] lg:pt-[5%]"
          id="aboutMeSection"
        >
          <div className="flex min-w-screen overflow-x-hidden">
            <div className="py-[2%] border-y-4 border-[#e43d12] w-full">
              <ScrollingText text="About Me" speed={10} direction="left" />
            </div>
          </div>

          <p className="outfit-regular text-secondary text-justify text-lg lg:text-2xl px-[10%] md:px-[25%] pt-[3%]">
            Hi, I'm Tristan, a 22-year-old full stack developer from France. I
            specialize in{" "}
            <span className="outfit-bold">
              Next.js, Node.js, Prisma, NextAuth, PostgreSQL, and Figma
            </span>
            . Passionate about creating efficient web applications, I deliver
            high-quality solutions tailored to clients' needs.
          </p>

          <h3 className="text-4xl text-primary outfit-bold px-[10%] md:px-[25%] pt-[3%]">
            Skills
          </h3>
          <div className="flex flex-wrap items-center justify-start gap-4 px-[10%] md:px-[25%]">
            <Image src={FigmaLogo} alt="Figma logo" width={30} height={30} />
            <Image src={NextjsLogo} alt="Next.js logo" width={50} height={50} />
            <Image
              src={TailwindLogo}
              alt="Tailwind CSS logo"
              width={50}
              height={50}
            />
            <Image src={GithubLogo} alt="Github logo" width={50} height={50} />
            <Image
              src={ReactjsLogo}
              alt="React.js logo"
              width={50}
              height={50}
            />
            <Image src={NodejsLogo} alt="Node.js logo" width={80} height={80} />
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

          {/* Edukai */}
          <Edukai />
        </div>

        {/* ContactSection */}
        <div
          className="flex flex-col gap-2 w-full pt-[5%] pb-[5%]"
          id="contactSection"
        >
          <div className="flex min-w-screen overflow-x-hidden">
            <div className="py-[2%] border-y-4 border-[#e43d12] w-full">
              <ScrollingText text="Contact" speed={10} direction="left" />
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-2 w-full px-[15%] pt-[2%] w-full">
            {/* <SectionTitle text="Contact me" /> */}
            <h3 className="text-2xl md:text-3xl outfit-bold text-primary px-[10%] md:px-[25%]">
              Let me a message!
            </h3>
            <ContactForm />
            <div className="px-[25%]">
              <Separator text="or" className="my-4" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5 mt-[1%] w-full px-[10%] md:px-[25%]">
              {/* Malt */}
              <Button
                variant={"outline"}
                size={"icon"}
                className="text-xl border-[#e43d12] hover:bg-[#e43d12]/10 hover:text-[#e43d12] selected:none outfit-medium text-lg text-primary"
                onClick={() =>
                  window.open("https://www.malt.fr/profile/tristanhourtoulle")
                }
              >
                <Image
                  src={MaltLogoWhite}
                  alt="Malt logo"
                  width={25}
                  height={25}
                  className=""
                />
              </Button>

              {/* Linkedin */}
              <Button
                variant={"outline"}
                size={"icon"}
                className="text-xl border-[#e43d12] hover:bg-[#e43d12]/10 hover:text-[#e43d12] selected:none outfit-medium text-lg text-primary"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/tristan-hourtoulle")
                }
              >
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn logo"
                  width={25}
                  height={25}
                  className=""
                />
              </Button>

              {/* Mail */}
              <Button
                variant={"outline"}
                size={"icon"}
                className="text-xl border-[#e43d12] hover:bg-[#e43d12]/10 hover:text-[#e43d12] selected:none outfit-medium text-lg text-primary"
                onClick={() =>
                  window.open("mailto:contact@tristanhourtoulle.fr")
                }
              >
                <Image
                  src={GmailLogo}
                  alt="Gmail logo"
                  width={25}
                  height={25}
                  className=""
                />
              </Button>

              {/* Github */}
              <Button
                variant={"outline"}
                size={"icon"}
                className="text-xl border-[#e43d12] hover:bg-[#e43d12]/10 hover:text-[#e43d12] selected:none outfit-medium text-lg text-primary"
                onClick={() =>
                  window.open("https://github.com/TristanHourtoulle")
                }
              >
                <Image
                  src={GithubLogoOrange}
                  alt="Github logo"
                  width={30}
                  height={30}
                  className=""
                />
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="relative left-[40%] lg:left-[50%] animate-light-bounce-little w-10 h-10">
          <UpArrow location="" />
        </div> */}
      </div>
    </>
  );
}
