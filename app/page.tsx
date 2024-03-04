import Image from "next/image";
import Link from "next/link";
import { ButtonLogoText } from "@components/ButtonLogoText";
import { Header } from "@components/Header";

export default function Home() {

  const sendMail = `mailto:tristan.hourtoulle@epitech.eu`

  return (
    <div className="h-full w-full bg-white-200">
      <Header />
      <div className="h-[90%] w-full flex absolute justify-between top-[10%] items-center pr-10 pl-10">
        <div className="h-full w-[65%] flex flex-col justify-center">
            <p className="text-primary text-2xl relative poppins-bold">Hi! I'm -</p>
            <h1 className="text-primary text-h1-fluid poppins-bold">Tristan</h1>
            <h1 className="text-primary text-h1-fluid poppins-bold">Hourtoulle</h1>
            <h2 className="text-paragraph text-h2-fluid poppins-extrabold">Web Developer.</h2>
            <div className="flex items-center gap-5 mt-5">
                <ButtonLogoText imagePath="/images/github.svg" title="Github" redirect="https://github.com/TristanHourtoulle" />
                <ButtonLogoText imagePath="/images/linkedin.svg" title="LinkedIn" redirect="https://www.linkedin.com/in/tristan-hourtoulle/" />
                <ButtonLogoText imagePath="/images/email.svg" title="tristan.hourtoulle@epitech.eu" redirect={sendMail} />
            </div>
        </div>
        <div className="h-full w-[35%] flex items-center m-auto">
          <Image
            src="/images/profil.svg"
            alt="Tristan Hourtoulle"
            width={350}
            height={350}
            className="profil small-zoom responsive-image"
          />
        </div>
      </div>
    </div>
  );
}
