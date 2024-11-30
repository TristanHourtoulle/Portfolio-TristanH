"use client";

import { AboutMeSection } from "@/components/sections/AboutMe";
import { HomeSection } from "@/components/sections/Home";
import { ProjectsSection } from "@/components/sections/Projects";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Récupérer la hauteur de la navbar
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }

    // Ajouter un listener pour recalculer la hauteur si nécessaire
    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // État initial (scroll vers le bas)
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.8 } }, // Scroll vers le haut
  };

  return (
    <>
      {/* Section Home */}
      <motion.section
        id="home"
        style={{
          minHeight: `calc(100vh - ${navbarHeight}px)`, // Hauteur dynamique
        }}
        className="flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <HomeSection />
      </motion.section>

      {/* Section 'Qui suis-je ?' */}
      <motion.section
        id="about"
        className="h-full lg:min-h-screen bg-[#EEEBE5] px-[10%] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <AboutMeSection />
      </motion.section>

      {/* Section Projets */}
      <motion.section
        id="projects"
        className="h-full lg:min-h-screen bg-white flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <ProjectsSection />
      </motion.section>

      {/* Section Témoignages */}
      <motion.section
        id="testimonials"
        className="h-full lg:min-h-screen bg-[#EEEBE5] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <TestimonialsSection />
      </motion.section>

      {/* Section Contact */}
      {/* <motion.section
        className="min-h-screen bg-white flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.section> */}
    </>
  );
}
