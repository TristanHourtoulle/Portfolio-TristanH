"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-between pb-[10%]">
      <div className="w-1/2 text-start text-primary flex flex-col items-start gap-4">
        <p className="poppins-regular text-lg">Welcome to my site!</p>
        <div className="flex flex-col items-start">
          <h1 className="poppins-bold text-6xl">Hi! I&apos;m Tristan</h1>
          <h2 className="poppins-bold text-6xl">
            <span className="text-secondary">Full Stack</span> Developer
          </h2>
        </div>
        <div className="flex items-center gap-5 justify-start mt-[5%] poppins-medium text-xl selected:none">
          <Button
            size={"lg"}
            className="text-xl bg-[#2a17ff] hover:bg-[#2a17ff]/85"
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
            className="text-xl  border-[#2a17ff] hover:bg-[#2a17ff]/10 hover:text-[#2a17ff] selected:none"
          >
            See my projects
          </Button>
        </div>
      </div>

      <div className="">
        <Image
          src={"/pictures/Photo de profil - TH.jpg"}
          alt="Tristan Hourtoulle profile picture"
          width={500}
          height={500}
          className="rounded-bl-[15%] rounded-[2.5%] hover:rounded-bl-[2.5%] hover:rounded-[15%] transition-all"
        />
      </div>
    </div>
  );
}
