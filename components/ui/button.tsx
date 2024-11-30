"use client";

export type ButtonProps = {
  theme: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`transition-all px-8 py-2 text-md rounded-full ${
        props.theme === "primary"
          ? "bg-accent text-white hover:bg-teal-600 focus:outline-none active:bg-teal-700 shadow-md transition-all"
          : "text-primary border-2 border-primary hover:bg-primary hover:bg-opacity-10 focus:outline-none active:bg-teal-200 active:bg-opacity-15 shadow-md transition-all"
      } ${props.className}`}
    >
      {props.children}
    </button>
  );
};
