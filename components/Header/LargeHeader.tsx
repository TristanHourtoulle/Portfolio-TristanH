"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
      href: "#aboutMeSection",
      selected: title === "About",
    },
    "/contact": {
      title: "Contact",
      href: "#contactSection",
      selected: title === "Contact",
    },
  };

  return navBarLinks;
}

export const LargeHeader = (props: LargeHeaderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
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

  const handleContactClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#contactSection");
    } else {
      const contactSection = document.getElementById("contactSection");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpened(false);
  };

  const handleProjectsClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#projectsSection");
    } else {
      const projectsSection = document.getElementById("projectsSection");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpened(false);
  };

  const handleAboutMeClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#aboutMeSection");
    } else {
      const aboutMeSection = document.getElementById("aboutMeSection");
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpened(false);
  };

  const handleTitleClick = (e: any) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#homepageSection");
    } else {
      const aboutMeSection = document.getElementById("homepageSection");
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpened(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#ebe9e1] bg-opacity-75 backdrop-blur-md z-10">
      <div className="w-full flex flex-col h-full px-[15%] pt-[3%] md:pt-[1.5%]">
        <div className="flex items-center justify-between flex-grow w-full">
          <Link
            className="outfit-bold text-lg text-primary transition-all"
            href=""
            onClick={handleTitleClick}
          >
            TristanH.
          </Link>
          <div className="hidden md:flex items-center justify-end gap-10 text-primary text-lg transition-all">
            <Link
              className={
                navBarLinks["/projects"].selected
                  ? "opacity-100 outfit-bold"
                  : "opacity-75 transition-all hover:opacity-80 outfit-medium"
              }
              href="#projectsSection"
              onClick={handleProjectsClick}
            >
              Projects
            </Link>
            <Link
              className={
                navBarLinks["/aboutme"].selected
                  ? "opacity-100 outfit-bold"
                  : "opacity-75 transition-all hover:opacity-80 outfit-medium"
              }
              href="#aboutMeSection"
              onClick={handleAboutMeClick}
            >
              About Me
            </Link>
            <a
              className={
                navBarLinks["/contact"].selected
                  ? "opacity-100 outfit-bold"
                  : "opacity-75 transition-all hover:opacity-80 outfit-medium"
              }
              href="#contactSection"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </div>
          <div
            className="md:hidden text-primary cursor-pointer flex items-center justify-center w-10 h-10 text-[#e43d12] transition-all"
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
                <div className="tham-inner bg-[#e43d12] transition-all rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {opened && (
          <div className="md:hidden absolute top-full left-0 w-full background-color shadow-lg">
            <div className="flex flex-col items-start py-4 px-[15%]">
              <Link
                className={
                  navBarLinks["/projects"].selected
                    ? "opacity-100 outfit-bold my-2"
                    : "opacity-75 transition-all hover:opacity-80 outfit-medium my-2"
                }
                href="#projectsSection"
                onClick={() => {
                  handleProjectsClick;
                }}
              >
                Projects
              </Link>
              <Link
                className={
                  navBarLinks["/aboutme"].selected
                    ? "opacity-100 outfit-bold my-2"
                    : "opacity-75 transition-all hover:opacity-80 outfit-medium my-2"
                }
                href="#aboutMeSection"
                onClick={() => {
                  handleAboutMeClick;
                }}
              >
                About Me
              </Link>
              <a
                className={
                  navBarLinks["/contact"].selected
                    ? "opacity-100 outfit-bold my-2"
                    : "opacity-75 transition-all hover:opacity-80 outfit-medium my-2"
                }
                href="#contactSection"
                onClick={() => {
                  handleContactClick;
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
        <hr className="bg-[#e43d12] border-0 h-[1.5px] opacity-10 mt-2 md:mt-4 rounded-full w-full" />
      </div>
    </div>
  );
};
