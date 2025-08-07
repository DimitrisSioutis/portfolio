"use client";
import React from "react";
import { socialLinks } from "../extras/socialLinks";

interface NavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const linkClasses =
    "text-sm font-bold py-2 cursor-pointer hover:text-teal-500 transition-all duration-300 block uppercase tracking-wider";
  const activeLinkClasses = "text-teal-500 transform translate-x-2";
  const anchorClass =
    "text-2xl hover:text-teal-500 transition-colors duration-300";
  const links = ["about", "experience"];


  return (
    <div className="lg:fixed">
      <div className="flex flex-col justify-center items-center lg:block">
        <h1 className="text-4xl font-extrabold">Dimitris Sioutis</h1>
        <h2 className="text-2xl font-bold py-2 text-slate-400">
          Full Stack Developer
        </h2>
        <ul className="py-10 hidden lg:block">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${linkClasses} ${
                activeSection === link ? activeLinkClasses : ""
              }`}
            >
              <button
                onClick={() =>onNavigate(link)}
                className="text-left w-full uppercase"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <div className="py-10 flex gap-5">
          {socialLinks.map(({ href, label, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={anchorClass}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;