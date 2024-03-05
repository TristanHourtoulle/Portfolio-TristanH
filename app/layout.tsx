import type { Metadata } from "next";
import "./styles/globals.css";
import { Header } from "@components/Header";
import Skills from "@components/Skills";
import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Projects from "@components/Projects";

export const metadata: Metadata = {
  title: "Tristan Hourtoulle - Web Developer",
  description: "Personal website of Tristan Hourtoulle, a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/profil.svg" />
      </head>
      <body className="bg-background overflow-x-hidden mb-[7%]">
        <div className="all-content">
          <Header />
          <div className="absolute inset-0 flex items-center z-0 ml-20">
            <div className={`rounded-full bg-blue-600 mix-blend-multiply filter blur-2xl opacity-10 w-[50%] h-[75%] zoom-in-out`}></div>
          </div>
          {children}
        </div>
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
