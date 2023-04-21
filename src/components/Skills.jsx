import React from 'react'
import { skills } from '../assets/skills'

const Skills = () => {
  return (
    <div name="skills" className='w-full bg-[#0d1117] min-h-screen text-stone-300 pt-14'>
              <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='flex flex-col justify-center max-w-[1000px] w-full mx-auto px-4'>
            <div>
                <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>Skills</p>
                <p className='py-4'>These is technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-5 text-center py-8'>
                {skills.map(({id,skill,title,style})=>(

                    <div  key={id} 
                    className={`flex flex-col justify-center items-center p-3  ${style} `}>
                       {skill}
                        <p className='my-2 font-semibold'>{title}</p>
                    </div>
                ))}

                
                
            </div>    
        </div>
    
    </div>
    
    </div>
  )
}

export default Skills