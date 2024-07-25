"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface NavBarLink {
  [key: string]: {
    title: string;
    href: string;
    selected: boolean;
  };
}

export type LargeHeaderProps = {};

function setNavBarLinks(title: string) {
  const navBarLinks: NavBarLink = {
    "/": {
      title: "Home",
      href: "/",
      selected: title === "Home",
    },
    "/projects": {
      title: "Projects",
      href: "/projects",
      selected: title === "Projects",
    },
    "/aboutme": {
      title: "About",
      href: "/aboutme",
      selected: title === "About",
    },
    "/contact": {
      title: "Contact",
      href: "/contact",
      selected: title === "Contact",
    },
  };

  return navBarLinks;
}

export const LargeHeader = (props: LargeHeaderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [navBarLinks, setNavBarLinksState] = useState<NavBarLink>(
    setNavBarLinks("Home")
  );
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    let page: string = "";
    switch (pathname) {
      case "/":
        page = "Home";
        break;
      case "/aboutme":
        page = "About";
        break;
      case "/projects":
        page = "Projects";
        break;
      case "/contact":
        page = "Contact";
        break;
      default:
        page = "Home";
        break;
    }
    setNavBarLinksState(setNavBarLinks(page));
  }, [pathname, searchParams]);

  const handleBurgerClick = () => {
    setOpened(!opened);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur-md z-10">
      <div className="w-full flex flex-col h-full px-[10%] pt-[3%] md:pt-[1.5%]">
        <div className="flex items-center justify-between flex-grow w-full">
          <Link
            className="poppins-bold text-lg text-primary transition-all"
            href="/"
          >
            TristanH.
          </Link>
          <div className="hidden md:flex items-center justify-end gap-10 text-primary text-lg transition-all">
            <Link
              className={
                navBarLinks["/"].selected
                  ? "opacity-100 poppins-bold"
                  : "opacity-50 transition-all hover:opacity-80 poppins-medium"
              }
              href="/"
            >
              Home
            </Link>
            <Link
              className={
                navBarLinks["/projects"].selected
                  ? "opacity-100 poppins-bold"
                  : "opacity-50 transition-all hover:opacity-80 poppins-medium"
              }
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={
                navBarLinks["/aboutme"].selected
                  ? "opacity-100 poppins-bold"
                  : "opacity-50 transition-all hover:opacity-80 poppins-medium"
              }
              href="/aboutme"
            >
              About Me
            </Link>
            <Link
              className={
                navBarLinks["/contact"].selected
                  ? "opacity-100 poppins-bold"
                  : "opacity-50 transition-all hover:opacity-80 poppins-medium"
              }
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <div
            className="md:hidden text-primary cursor-pointer flex items-center justify-center w-10 h-10 text-[#2a17ff] transition-all"
            onClick={handleBurgerClick}
          >
            <div
              className={cn(
                `tham tham-e-squeeze tham-w-6 transition-all rounded-lg`,
                {
                  "tham-active": opened,
                }
              )}
            >
              <div className="tham-box transition-all rounded-lg">
                <div className="tham-inner bg-[#2a17ff] transition-all rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {opened && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-start p-4">
              <Link
                className={
                  navBarLinks["/"].selected
                    ? "opacity-100 poppins-bold my-2"
                    : "opacity-50 transition-all hover:opacity-80 poppins-medium my-2"
                }
                href="/"
                onClick={() => setOpened(false)}
              >
                Home
              </Link>
              <Link
                className={
                  navBarLinks["/projects"].selected
                    ? "opacity-100 poppins-bold my-2"
                    : "opacity-50 transition-all hover:opacity-80 poppins-medium my-2"
                }
                href="/projects"
                onClick={() => setOpened(false)}
              >
                Projects
              </Link>
              <Link
                className={
                  navBarLinks["/aboutme"].selected
                    ? "opacity-100 poppins-bold my-2"
                    : "opacity-50 transition-all hover:opacity-80 poppins-medium my-2"
                }
                href="/aboutme"
                onClick={() => setOpened(false)}
              >
                About Me
              </Link>
              <Link
                className={
                  navBarLinks["/contact"].selected
                    ? "opacity-100 poppins-bold my-2"
                    : "opacity-50 transition-all hover:opacity-80 poppins-medium my-2"
                }
                href="/contact"
                onClick={() => setOpened(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        <hr className="bg-[#2a17ff] border-0 h-[1.5px] opacity-10 mt-2 md:mt-4 rounded-full w-full" />
      </div>
    </div>
  );
};
