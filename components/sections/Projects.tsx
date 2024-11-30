"use client";

import { ProjectCard } from "./components/ProjectCard";

const projects = [
  {
    name: "Moduloop-Impact",
    logo: "/logos/moduloop-impact.svg",
    description:
      "Moduloop Impact est une solution intuitive qui mesure l’impact environnemental des matériaux de construction et du mobilier utilisés dans vos projets, vous aidant à faire des choix plus durables et responsables.",
    link: "https://moduloop-impact.fr",
  },
  {
    name: "Edukai",
    logo: "/logos/edukai.svg",
    description:
      "Edukai est une solution innovante conçue pour les étudiants, offrant une nouvelle manière d'apprendre efficacement. Grâce à une technologie avancée, Edukai génère automatiquement des quiz interactifs à partir de leurs cours, transformant l'apprentissage en une expérience ludique et engageante.",
    link: "https://edukai.fr",
  },
  {
    name: "Kaiboard",
    logo: "/logos/kaiboard.svg",
    description:
      "[En cours de création] - Kaiboard est une plateforme collaborative qui simplifie la gestion de projets en groupe, avec des outils pour organiser des réunions, suivre les tâches via GitHub, et centraliser les ressources clés.",
    link: "https://kaiboard.vercel.app",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="py-6 lg:py-0 flex flex-col items-center justify-center gap-8">
      {/* Title */}
      <h1 className="text-[#4F62CC] font-bold text-center lg:text-left text-xl lg:text-4xl mb-[7%]">
        Ce dont je suis capable
      </h1>
      {/* Grid Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-6">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[2]} />
        </div>
        <ProjectCard project={projects[1]} />
      </div>
    </div>
  );
};
