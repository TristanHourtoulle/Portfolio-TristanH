"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const target = document.getElementById(targetId);
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (target) {
      // Ajuste le défilement en fonction de la hauteur de la navbar
      const targetPosition = target.offsetTop - navbarHeight + 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Défilement fluide
      });
    }
  };

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-[10%] relative">
      <div className="w-full flex justify-between items-center h-16 text-[#8F9DF0] text-opacity-75">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-[#4A5CC2]">
          TristanH.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="transition-all hover:text-[#4A5CC2]"
          >
            Qui suis-je ?
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="transition-all hover:text-[#4A5CC2]"
          >
            Projets
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleScroll(e, "testimonials")}
            className="transition-all hover:text-[#4A5CC2]"
          >
            Témoignages
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-[#8F9DF0] absolute top-0 left-0 w-full h-screen bg-white bg-opacity-95 flex flex-col items-center justify-center z-40">
          <a
            href="#about"
            onClick={(e) => {
              setIsOpen(false);
              handleScroll(e, "about");
            }}
            className="block text-xl py-4 transition-all"
          >
            Qui suis-je ?
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              setIsOpen(false);
              handleScroll(e, "projects");
            }}
            className="block text-xl py-4 transition-all"
          >
            Projets
          </a>
          <a
            href="#testimonials"
            onClick={(e) => {
              setIsOpen(false);
              handleScroll(e, "testimonials");
            }}
            className="block text-xl py-4 transition-all"
          >
            Témoignages
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
