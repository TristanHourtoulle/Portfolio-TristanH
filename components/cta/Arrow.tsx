// import Pictures
import { scrollToBottom, scrollToTop } from "@/lib/utils";
import DownArrowPicture from "@/public/DownArrow.png";
import Image from "next/image";

export type DownArrowProps = {
  location: string;
};

export const DownArrow = ({ location }: DownArrowProps) => {
  return (
    <div
      className="scroll-smooth cursor-pointer hover:rotate-45 w-full flex items-center justify-center p-6 rounded-full bg-[rgba(228, 61, 18, 0.1)] border-2 border-[#E43D12] animate-bounce w-4 h-4"
      onClick={() => {
        scrollToBottom();
      }}
    >
      <Image src={DownArrowPicture} alt="Down arrow" fill />
    </div>
  );
};

export type UpArrowProps = {
  location: string;
};

export const UpArrow = (props: UpArrowProps) => {
  return (
    <div
      className="scroll-smooth cursor-pointer hover:rotate-45 flex items-center justify-center p-6 rounded-full bg-[rgba(228, 61, 18, 0.1)] border-2 border-[#E43D12] animate-bounce"
      onClick={() => {
        scrollToTop();
      }}
    >
      <Image
        src={DownArrowPicture}
        alt="Down arrow"
        className="transform rotate-180"
        fill
      />
    </div>
  );
};
