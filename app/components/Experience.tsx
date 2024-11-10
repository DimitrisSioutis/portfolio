'use client'
 
import React from 'react'
import experience from '../extras/experience'

const Experience = () => {

  return (
    <div>
      {experience.map((job, index) => (
        <div key={index} className='hover:shadow-custom rounded hover lg:flex mb-8'>
          
          <div className='text-sm w-64 font-bold lg:py-12 lg:px-4 py-4 text-slate-400 align-top min-w-48'>
            {job.period}
          </div>

          <div className='lg:py-10 lg:px-4'>
            <h1 className='font-bold text-sm'>{job.title}</h1>
            <a className='font-semibold pt-2 pb-4 text-slate-400 text-sm cursor-pointer' href={job.refer} target='_blank'>
              {job.company}
            </a>
            <p className='py-4 text-sm text-slate-300'>{job.description}</p>

            <div className='flex flex-wrap'>
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='text-xs font-extrabold m-2 border-[1px] border-slate-700 rounded-lg p-2'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Experience