"use client";

import { contactLinks } from "@/utils/links";
import { Send } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-[#4F62CC] flex flex-col items-center justify-center gap-2 w-full pt-5 px-4">
      {/* Up */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5 text-white">
        <p className="text-lg lg:text-xl">
          ✨ Envie de donner vie à vos projets ?
        </p>
        <button className="flex items-center jsutify-center gap-5 border-2 border-white border-opacity-50 bg-white bg-opacity-25 text-white rounded-md px-[24px] py-[6px] hover:scale-105 transition-all text-sm">
          <Send size={16} />
          Me contacter
        </button>
      </div>

      {/* Down */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
        <p className="text-white text-opacity-50 mb-3 lg:mb-0 text-sm order-2 lg:order-1">
          © 2024 Tristan Hourtoulle. Tous droits réservés.
        </p>

        {/* Contact Links */}
        <div className="flex flex-row items-center justify-center lg:justify-end gap-3 mt-3 lg:mt-0 mb-3 order-1 lg:order-2">
          <p className="text-white text-opacity-50 text-sm">
            Envie de me suivre ?
          </p>
          <div className="flex flex-row items-center justify-center lg:justify-end gap-3">
            {contactLinks.map(({ name, href, logo }) => {
              return (
                <Image
                  key={name}
                  src={logo}
                  alt={name}
                  width={24}
                  height={24}
                  className="cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 transition-all"
                  onClick={() => window.open(href)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
