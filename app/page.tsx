"use client"

import Image from "next/image";
import { ButtonLogoText } from "@components/ButtonLogoText";
import { useEffect, useState } from 'react';

export default function Home() {
  const sendMail = `mailto:tristan.hourtoulle@epitech.eu`

  return (
      <div className="main-content sm:mx-auto relative overflow-hidden">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center md:w-full">
          <div className="order-2 md:order-1 md:mr-auto flex flex-col items-start relative z-10">
            <p className="text-primary font-medium text-xl">Hi! I'm -</p>
            <h1 className="text-h1-fluid poppins-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 relative z-10">Tristan Hourtoulle</h1>
            <h2 className="text-paragraph text-h2-fluid poppins-bold">Web developer.</h2>
            <div className="flex flex-wrap w-fit gap-5 md:flex-nowrap md:items-start md:gap-7 mt-5">
              <ButtonLogoText imagePath="/images/github.svg" title="GitHub" redirect="" />
              <ButtonLogoText imagePath="/images/linkedin.svg" title="LinkedIn" redirect="" />
              <ButtonLogoText imagePath="/images/email.svg" title="tristan.hourtoulle@epitech.eu" redirect={sendMail} />
            </div>
          </div>
          <div className="order-1 md:order-2 md:flex md:justify-end">
            <Image
              src="/images/profil.svg"
              alt="Tristan Hourtoulle"
              width={500}
              height={500}
              className="responsive-image profil"
            />
          </div>
        </div>
      </div>
  );
}
