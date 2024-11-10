"use client"

import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope } from "react-icons/fa";

interface NavProps {
  activeSection: string;
}

const Nav: React.FC<NavProps> = ({ activeSection }) => {
  const linkClasses = 'text-sm font-bold py-2 cursor-pointer hover:text-teal-500';
  const activeLinkClasses = 'text-teal-500 duration-150 translate-x-2';
  const anchorClasses = 'text-2xl hover:text-teal-500 px-2';

  return (
    <div className='lg:fixed '>
      <div className='flex flex-col justify-center items-center lg:block'>
        <h1 className='text-4xl font-extrabold'>Dimitris Sioutis</h1>
        <h2 className='text-2xl font-bold py-2 text-slate-400'>Full Stack Developer</h2>
        <ul className='py-10 hidden lg:block'>
          <li className={`${linkClasses} ${activeSection === 'about' ? activeLinkClasses : ''}`}>
            <a href='#about'>ABOUT</a>
          </li>
          <li className={`${linkClasses} ${activeSection === 'experience' ? activeLinkClasses : ''}`}>
            <a href='#experience'>EXPERIENCE</a>
          </li>
          {/* <li className={`${linkClasses} ${activeSection === 'projects' ? activeLinkClasses : ''}`}>
            <a href='#projects'>PROJECTS</a>
          </li> */}
        </ul>
        <div className='py-10 flex'>
          <a href='https://www.linkedin.com/in/dimitris-sioutis-717507266/' target='_blank' className={anchorClasses}><FaLinkedin /></a>
          <a href='mailto:sioutisid@gmail.com' target='_blank' className={anchorClasses}><FaEnvelope /></a>
          <a href='https://github.com/' target='_blank' className={anchorClasses}><FaGithub /></a>
          <a href='https://codepen.io/SioutisD' target='_blank' className={anchorClasses}><FaCodepen /></a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
