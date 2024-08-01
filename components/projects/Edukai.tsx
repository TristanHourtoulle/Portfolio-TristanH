import { SectionTitle } from "../SectionTitle";

// Import Mockups
import Edukai_iMockup1 from "@/public/Edukai/iMockup - iPhone 15 Pro Max-1.png";
import Edukai_iMockup2 from "@/public/Edukai/iMockup - iPhone 15 Pro Max-2.png";
import Edukai_iMockup3 from "@/public/Edukai/iMockup - iPhone 15 Pro Max.png";
import Edukai_LandingPage from "@/public/Edukai/Landing Page 1.png";
import Image from "next/image";

export type EdukaiProps = {};

export const Edukai = (props: EdukaiProps) => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-start px-[10%] lg:px-[25%]">
        <SectionTitle text="Edukai" />
        <p className="text-sm lg:text-md text-secondary outfit-regular">
          Release scheduled for July 2025
        </p>
      </div>

      {/* Description */}
      <p className="text-lg text-secondary outfit-regular text-justify px-[10%] lg:px-[25%]">
        Edukai is an innovative app that uses AI to 
        <span className="outfit-semibold">
          transform handwritten or digital notes into interactive review sheets
          and quizzes
        </span>
        , tailored to the user's grade level. The application makes it easy to
        export generated media to PDF and DOCX formats for easy editing and
        sharing.
      </p>

      {/* Mockups */}
      <h3 className="text-primary text-2xl outfit-semibold px-[10%] lg:px-[25%]">
        Mockups
      </h3>
      <div className="flex flex-col items-center justify-center px-[10%] lg:px-[25%] w-full max-w-screen gap-3">
        <Image
          src={Edukai_LandingPage}
          alt="Landing Page"
          width={800}
          height={800}
        />
        <div className="flex flex-wrap items-center justify-center w-full max-w-screen gap-3">
          <Image
            src={Edukai_iMockup1}
            alt="Mobile 1"
            width={200}
            height={200}
          />
          <Image
            src={Edukai_iMockup2}
            alt="Mobile 2"
            width={200}
            height={200}
          />
          <Image
            src={Edukai_iMockup3}
            alt="Mobile 3"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
};
