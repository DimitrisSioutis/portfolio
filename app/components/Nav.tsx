"use client"

import React from 'react';

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
          <a href='https://www.linkedin.com/in/dimitris-sioutis-717507266/' target='_blank' className={anchorClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href='mailto:sioutisid@gmail.com' target='_blank' className={anchorClasses}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href='https://github.com/' target='_blank' className={anchorClasses}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href='https://codepen.io/SioutisD' target='_blank' className={anchorClasses}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" x2="12" y1="22" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/><polyline points="2 15.5 12 8.5 22 15.5"/><line x1="12" x2="12" y1="2" y2="8.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
