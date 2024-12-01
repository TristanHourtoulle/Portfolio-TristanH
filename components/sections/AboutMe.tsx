"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutMeSection = () => {
  // Variants pour les animations générales
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-6 lg:py-0 flex flex-col items-center justify-center gap-3 lg:gap-8"
    >
      {/* Title */}
      <motion.h1
        className="text-[#4F62CC] font-bold text-xl lg:text-4xl mb-[7%]"
        variants={fadeUp}
      >
        Qui suis-je réellement ?
      </motion.h1>
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-[5%]">
        {/* Image */}
        <motion.div variants={imageVariants}>
          <Image
            src="/photos/tristan2.png"
            alt="Tristan Hourtoulle"
            width={400}
            height={400}
            className="rounded-md"
          />
        </motion.div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-start justify-between gap-3 lg:gap-1 w-full">
          <motion.h2
            className="mt-3 lg:mt-0 text-xl text-center lg:text-left lg:text-4xl text-[#1E1E1E] font-semibold mb-2"
            variants={fadeIn}
          >
            Tristan Hourtoulle
          </motion.h2>

          <motion.p
            className="font-regular text-sm lg:text-lg text-[#1E1E1E] w-full lg:max-w-2xl mb-1"
            variants={fadeIn}
          >
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
            des solutions intuitives et performantes.
          </motion.p>

          <motion.p
            className="font-regular text-md lg:text-lg text-[#4F62CC] max-w-lg mb-4"
            variants={fadeIn}
          >
            Je crois que chaque projet mérite une attention particulière et un
            design d'exception, rendant l'utile toujours agréable.
          </motion.p>

          <hr className="w-full border-[1.5px] border-[#4F62CC] border-opacity-75 rounded-full" />
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-[10%] w-full lg:my-2">
            {/* Items */}
            {[
              "Projets complétés",
              "Clients satisfaits",
              "Années d’expérience",
            ].map((text, index) => (
              <motion.div
                key={text}
                className="flex flex-col gap-0 items-center lg:items-start w-full"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <p className="text-black text-[#1E1E1E] text-3xl">
                  {index === 0 ? "15+" : index === 1 ? "12+" : "03+"}
                </p>
                <p className="text-[#1E1E1E] text-opacity-75 text-md">{text}</p>
              </motion.div>
            ))}
          </div>
          <hr className="w-full border-[1.5px] border-[#4F62CC] border-opacity-75 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};
