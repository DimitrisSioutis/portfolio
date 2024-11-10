import React, { ReactNode } from 'react';

interface BracketsProps {
  tagname: string;
  children: ReactNode; // Specify children as ReactNode
}

const Brackets: React.FC<BracketsProps> = ({ tagname, children }) => {
  return (
    <>
      <p className='bracket text-sm'>
        <span className='text-slate-600'>&lt;</span>
        <span className='text-sky-600'>section</span>
        <span className='text-slate-300'> id=</span>
        <span className='text-teal-500'>&apos;{tagname}&apos;</span>
        <span className='text-slate-600'>&gt;</span>
      </p>
      <div className='p-4'>
      {children} 
      </div>
      <p className='bracket float-right text-sm'>
        <span className='text-slate-600'>&lt;/</span>
        <span className='text-sky-600'>section</span>
        <span className='text-slate-600'>&gt; </span>
      </p>
    </>
  );
}

export default Brackets;
