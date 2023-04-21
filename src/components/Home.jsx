import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import SocilaCircles from './SocilaCircles'

const Home = () => {
  return (
    <div name="home" className='w-full   bg-[#0d1117] h-screen'>
       <div className='flex max-w-[1000px] flex-col justify-center h-full mx-auto px-8 '>
            <p className='text-xl text-pink-600 pb-2 ml-1'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-stone-300'>Miral Salah</h1>
            <h2 className='sm:text-6xl text-3xl text-stone-500 font-bold'>MERN stack developer</h2>
            <p className='text-stone-300 pt-4 pb-6 max-w-xl'>I'm a MERN stack developer with expertise in MongoDB, Express, React, and Node.js. I'm also skilled in TypeScript, RTL testing, Cypress, and Tailwind. Passionate about delivering high-quality software and eager to continue learning and growing as a developer.</p>

            <div>
           
           <div className='flex gap-2'>
           <Link  to= "skills"  smooth={true}  duration={700}>  
                <button className='flex group text-stone-300  text-sm md:text-base items-center border-2 md:my-2 md:px-6 md:py-3 py-1 px-2 hover:bg-pink-600 hover:border-pink-600'> View Skills
                <span>
                <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300'/>
                </span>
                </button>
                </Link>

            <Link  to= "projects"  smooth={true}  duration={700}>  
                <button className='flex group text-stone-300 text-sm md:text-base  items-center border-2 md:my-2 md:px-6 md:py-3 py-1 px-2 hover:bg-pink-600 hover:border-pink-600'> View Projects
                <span>
                <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300'/>
                </span>
                </button>
                </Link>

           </div>
               
            </div>

            <div className='md:hidden pt-5 -ml-4'>
        <SocilaCircles/>
        </div>  
       </div>
       

       

    </div>
  )
}

export default Home
