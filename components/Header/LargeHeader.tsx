"use client";

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

  return (
    <div className="w-full flex items-center justify-between">
      <Link
        className="poppins-bold text-lg text-primary hover:-rotate-3 transition-all"
        href="/"
      >
        TristanH.
      </Link>
      <div className="flex items-center justify-end gap-10 text-primary text-lg transition-all">
        <Link
          className={
            navBarLinks["/"].selected
              ? "opacity-100 poppins-bold"
              : "opacity-50" + " transition-all hover:opacity-80 poppins-medium"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            navBarLinks["/projects"].selected
              ? "opacity-100 poppins-bold"
              : "opacity-50" + " transition-all hover:opacity-80 poppins-medium"
          }
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={
            navBarLinks["/aboutme"].selected
              ? "opacity-100 poppins-bold"
              : "opacity-50" + " transition-all hover:opacity-80 poppins-medium"
          }
          href="/aboutme"
        >
          About Me
        </Link>
        <Link
          className={
            navBarLinks["/contact"].selected
              ? "opacity-100 poppins-bold"
              : "opacity-50" + " transition-all hover:opacity-80 poppins-medium"
          }
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
