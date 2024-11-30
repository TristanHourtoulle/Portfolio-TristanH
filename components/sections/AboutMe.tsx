"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutMeSection = () => {
  // Variants pour les items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Position initiale
    visible: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Délai pour chaque item
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="py-6 lg:py-0 flex flex-col items-center justify-center gap-3 lg:gap-8">
      {/* Title */}
      <h1 className="text-[#4F62CC] font-bold text-xl lg:text-4xl mb-[7%]">
        Qui suis-je réellement ?
      </h1>
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-[5%]">
        <Image
          src="/photos/tristan2.png"
          alt="Tristan Hourtoulle"
          width={400}
          height={400}
          className="rounded-md"
        />
        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-start justify-between gap-3 lg:gap-1 w-full ">
          <h2 className="mt-3 lg:mt-0 text-xl text-center lg:text-left lg:text-4xl text-[#1E1E1E] font-semibold mb-2">
            Tristan Hourtoulle
          </h2>

          <p className="font-regular text-sm lg:text-md text-[#1E1E1E] w-full lg:max-w-2xl mb-1">
            Je suis développeur <span className="font-bold">front-end</span> et{" "}
            <span className="font-bold">designer web</span>, basé en{" "}
            <span className="font-bold">Malaisie</span>, spécialisé dans la
            création de sites modernes et interactifs. Avec plusieurs années
            d'expérience, j'accompagne{" "}
            <span className="font-bold">entreprises</span> et{" "}
            <span className="font-bold">entrepreneurs</span> pour transformer
            leurs idées en{" "}
            <span className="font-bold">projets numériques concrets</span>.
            <br />
            Mon expertise inclut des technologies comme{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Next.js</span>, et{" "}
            <span className="font-bold">Figma</span>, permettant de concevoir
            des solutions intuitives et performantes. Basé à l'international, je
            collabore avec des clients du monde entier pour donner vie à leurs
            visions numériques avec efficacité et créativité.
          </p>
          <p className="font-regular text-md text-[#4F62CC] max-w-lg mb-4">
            Je crois que chaque projet mérite une attention particulière et un
            design d'exception, rendant l'utile toujours agréable.
          </p>

          <hr className="w-full border-[1.5px] border-[#4F62CC] border-opacity-75 rounded-full" />
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-[10%] w-full lg:my-2">
            {/* Item 1 */}
            <motion.div
              className="flex flex-col gap-0 items-center lg:items-start w-full"
              custom={0} // Index pour le délai d'animation
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <p className="text-black text-[#1E1E1E] text-3xl">
                15<span className="text-[#4F62CC]">+</span>
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-md">
                Projets complétés
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="flex flex-col gap-0 items-center lg:items-start w-full"
              custom={1} // Index pour le délai d'animation
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <p className="text-black text-[#1E1E1E] text-3xl">
                12<span className="text-[#4F62CC]">+</span>
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-md">
                Clients satisfaits
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="flex flex-col gap-0 items-center lg:items-start w-full"
              custom={2} // Index pour le délai d'animation
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <p className="text-black text-[#1E1E1E] text-3xl">
                03<span className="text-[#4F62CC]">+</span>
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-md">
                Années d’expérience
              </p>
            </motion.div>
          </div>
          <hr className="w-full border-[1.5px] border-[#4F62CC] border-opacity-75 rounded-full" />
        </div>
      </div>
    </div>
  );
};
