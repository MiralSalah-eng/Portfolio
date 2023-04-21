import React from 'react'
import projects from '../assets/projects';

//import ProjectCard from './ProjectCard';
import ProjectCardOne from './ProjectCardOne';

const Projects = () => {
    
  return (
  <div name="projects" className='w-full bg-[#0d1117] min-h-screen text-stone-300'>
    <div className='flex flex-col justify-center items-center w-full h-full '>
    <div className='flex flex-col justify-center max-w-[1000px] w-full mx-auto px-4'>
          
      <div>
        <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>Projects</p>
        <p className='py-4'>Here are some of my projects </p>
      </div>

      <div className='grid grid-col-2 md:grid-cols-3 gap-6'>
        {
          projects.map((item) => (
            <ProjectCardOne key={item.id} item={item}/>
          ))
        }
      </div>
      </div>
    </div>


  </div>
  )
}

export default Projects