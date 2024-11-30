"use client";

import { TestimonialCard } from "./components/TestimonialCard";

const testimonials = [
  {
    name: "Paul L.",
    company: " - Moduloop",
    image: "logos/paul_l.svg",
    description:
      "“Tristan est positif et optimiste ce qui rend le travail en équipe très agréable. Il est capable de faire face aux problèmes pour les résoudre en tout autonomie. Son travail est de qualité. Son éthique du travail est très bonne , il est respectueux des horaires et très impliqué.”",
  },
  {
    name: "Vincent G.",
    company: " - ENS",
    image: "logos/vincent_g.svg",
    description:
      "“Très bonne collaboration pour ce projet. Je conseille vivement.”",
  },
  {
    name: "Cyril K.",
    company: " - La Boîte à Rêves",
    image: "logos/cyril_k.svg",
    description:
      "“Un plaisir de travailler avec Tristan, organisé et sérieux, il se plie en quatre pour trouver les solutions à nos problématiques. Je recommande !”",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-6 lg:py-0 flex flex-col items-center justify-center gap-8">
      {/* Title */}
      <h1 className="text-[#4F62CC] font-bold text-center lg:text-left text-xl lg:text-4xl mb-[2%]">
        Besoin d’être convaincu ?
      </h1>
      {/* Grid Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-6">
          <TestimonialCard testimonial={testimonials[2]} />
          <TestimonialCard testimonial={testimonials[1]} />
        </div>
        <TestimonialCard testimonial={testimonials[0]} />
      </div>
    </div>
  );
};
