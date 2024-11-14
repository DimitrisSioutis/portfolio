"use client"

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Brackets from "./components/Brackets";
import Experience from "./components/Experience";
import Nav from "./components/Nav";

export default function Home() {
 const [activeSection, setActiveSection] = useState<string>("about");
 const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0 });
 const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0 });

 useEffect(() => {
   if (aboutInView) setActiveSection("about");
   else if (experienceInView) setActiveSection("experience");
 }, [aboutInView, experienceInView]);

 return (
   <main className="min-h-screen lg:flex justify-center lg:px-40 md:py-32 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,23,42,1),rgba(2,6,23,0))] overflow-y-auto">
     <div className="flex-1">
       <Nav activeSection={activeSection} />
     </div>
     <div className="flex-1 w-[80%] m-auto">
       <section id="about" ref={aboutRef}>
         <Brackets tagname="about">
           <About />
         </Brackets>
       </section>
       <section id="experience" ref={experienceRef}>
         <Brackets tagname="experience">
           <Experience />
         </Brackets>
       </section>
     </div>
     <footer></footer>
   </main>
 );
}