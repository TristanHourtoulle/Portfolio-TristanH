// import Pictures
import DownArrowPicture from "@/public/DownArrow.png";
import Image from "next/image";

export type DownArrowProps = {
  location: string;
};

export const DownArrow = ({ location }: DownArrowProps) => {
  return (
    <div
      className="cursor-pointer hover:rotate-45 w-full flex items-center justify-center p-6 rounded-full bg-[rgba(228, 61, 18, 0.1)] border-2 border-[#E43D12] animate-bounce w-4 h-4"
      onClick={() => {
        window.location.href = location;
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
    <div className="flex items-center justify-center px-4 py-4 rounded-full bg-[rgba(228, 61, 18, 0.1)] border-2 border-[#E43D12] animate-bounce w-6 h-6">
      <Image
        src={DownArrowPicture}
        alt="Up arrow"
        width={30}
        height={30}
        className="transform rotate-180"
      />
    </div>
  );
};
