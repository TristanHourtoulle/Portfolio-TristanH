import Image from "next/image";
import Link from "next/link";
import { ButtonLogoText } from "@components/ButtonLogoText";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="mr-auto">
        <p className="text-primary text-5xl mb-5">Hi! I'm -</p>
        <h1 className="text-primary text-9xl poppins-bold">Tristan</h1>
        <h1 className="text-primary text-9xl poppins-bold">Hourtoulle</h1>
        <h2 className="text-paragraph text-5xl poppins-extrabold mt-5">Web Developer.</h2>
        <div className="flex items-center gap-5 mt-10">
          <ButtonLogoText imagePath="/images/github.svg" title="Github" />
          <ButtonLogoText imagePath="/images/linkedin.svg" title="LinkedIn" />
          <ButtonLogoText imagePath="/images/email.svg" title="tristan.hourtoulle@epitech.eu" />
        </div>
      </div>
      <div className="small-zoom">
        <Image
          src="/images/profil.svg"
          alt="Tristan Hourtoulle"
          width={350}
          height={350}
          className="profil"
        />
      </div>
    </div>
  );
}
