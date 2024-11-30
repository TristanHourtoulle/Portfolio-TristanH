"use client";

import { motion } from "framer-motion";
import { Briefcase, Send, Star } from "lucide-react";

export const HomeSection = () => {
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
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10 max-w-6xl px-4 pb-[30%] lg:pb-[5%]">
      {/* Image Animée */}
      <motion.img
        src="/photos/tristan2.svg"
        alt="Tristan H"
        className="rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          y: {
            delay: 0.5,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          {/* Texte et Titre */}
          <section className="flex flex-col items-center lg:items-start gap-0 order-2 lg:order-1 ">
            <motion.h1
              className="text-2xl lg:text-4xl font-bold text-[#4A5CC2] text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#8F9DF1] text-center lg:text-left">
                Salut ! Je suis{" "}
              </span>{" "}
              Tristan
            </motion.h1>
            <motion.h2
              className="text-sm text-center lg:text-left lg:text-lg text-[#8F9DF0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Frontend Developer | Web Designer | SEO Optimizer
            </motion.h2>
          </section>

          <motion.img
            src="/WavingHand.svg"
            alt="Waving Hand"
            className="w-[50px] h-[50px] pb-2 order-1 lg:order-2"
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: [0, 15, -10, 5, 0],
            }}
            transition={{
              rotate: {
                delay: 0.5,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Avis */}
        <div className="flex flex-row items-center gap-5 lg:gap-3">
          <motion.h3 className="text-3xl lg:text-4xl text-[#E8A614] font-semibold">
            5,0
          </motion.h3>
          {/* Stars and base */}
          <div className="flex flex-col items-start gap-0">
            {/* Stars */}
            <div className="flex items-center gap-1 lg:gap-3 text-[#4A5CC2]">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{
                    delay: star * 0.1,
                    duration: 0.5,
                  }}
                >
                  <Star
                    className="w-6 h-6 lg:w-10 lg:h-10"
                    fill="#4A5CC2"
                    stroke="#4A5CC2"
                  />
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-[#8F9DF0] text-sm lgtext-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Basé sur 12 avis
            </motion.p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-4 gap-1 w-full">
          <button
            onClick={(e) => handleScroll(e, "projects")}
            className="w-full bg-white border-2 border-[#4A5CC2] border-opacity-75 flex items-center justify-center gap-5 px-[24px] py-[6px] text-[#4A5CC2] text-opacity-75 rounded-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Briefcase size={24} />
            Mes projets
          </button>
          <button
            // On the click event => mailto: tristan.hourtoulle@epitech.eu
            onClick={() => window.open("mailto:tristan.hourtoulle@epitech.eu")}
            className="w-full bg-gradient-to-tr from-[#4A5CC2] to-[#697FFF] flex items-center justify-center gap-5 px-[24px] py-[6px] text-white rounded-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Send size={24} />
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
};
