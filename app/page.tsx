"use client"

import Image from "next/image";
import { ButtonLogoText } from "@components/ButtonLogoText";
import Link from "next/link";
import { LinkText } from '@components/ButtonLogoText';

export default function Home() {
  const sendMail = `mailto:tristan.hourtoulle@epitech.eu`

  return (
      <div className="main-content sm:mx-auto relative overflow-hidden sm:mx-auto">

        <div className="flex justify-between mt-[10%] md:mt-[3%] mb-[10%] md:mb-[3%]">
            <p className="poppins-bold text-paragraph">TristanH.</p>
            <div className="hidden md:flex items-center gap-10">
              <LinkText title="Skills" redirect="#skills" />
              <LinkText title="About Me" redirect="#about" />
              <LinkText title="Projects" redirect="#projects" />
              <LinkText title="Contact" redirect="#contact" />
            </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center md:w-full md:my-[5%]">
          <div className="order-2 md:order-1 md:mr-auto flex flex-col items-center md:items-start z-10">
            <p className="text-primary font-medium text-xl">Hi! I'm -</p>
            <h1 className="text-h1-fluid poppins-bold text-primary text-center md:text-left">Tristan Hourtoulle</h1>
            <h2 className="text-paragraph text-h2-fluid poppins-bold">Web developer.</h2>
            <div className="flex flex-wrap w-fit gap-5 items-center justify-center md:flex-nowrap md:items-start md:gap-7 mt-5">
              <ButtonLogoText imagePath="/images/github.svg" title="GitHub" redirect="https://github.com/TristanHourtoulle" />
              <ButtonLogoText imagePath="/images/linkedin.svg" title="LinkedIn" redirect="https://www.linkedin.com/in/tristan-hourtoulle/" />
              <ButtonLogoText imagePath="/images/email.svg" title="tristan.hourtoulle@epitech.eu" redirect={sendMail} />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center justify-center mb-[10%] md:mb-[0%]">
            <Image
              src="/images/profil.svg"
              alt="Tristan Hourtoulle"
              width={500}
              height={500}
              className="responsive-image profil flex-grow"
            />
          </div>
        </div>
      </div>
  );
}
