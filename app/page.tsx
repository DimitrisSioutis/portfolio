"use client";

import { useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Brackets from "./components/Brackets";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import "./globals.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.1,
  });

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(()=>{setActiveSection(sectionId)},100)
  };

  useEffect(() => {
    setActiveSection(
      aboutInView ? "about" : experienceInView ? "experience" : "about"
    );
  }, [aboutInView, experienceInView]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen lg:flex justify-center py-20 lg:px-40 md:py-32 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,23,42,1),rgba(2,6,23,0))]">
      <div className="flex-1 py-10">
        <Nav
          activeSection={activeSection}
          onNavigate={handleNavigation}
        />
      </div>
      <div className="flex-1 w-[80%] m-auto py-10">
        <section id="about" ref={aboutRef} className="min-h-[90svh] ">
          <Brackets tagname="about">
            <About />
          </Brackets>
        </section>
        <section id="experience" ref={experienceRef} className="p-0">
          <Brackets tagname="experience">
            <Experience />
          </Brackets>
        </section>
      </div>
      <footer></footer>
    </main>
  );
}
