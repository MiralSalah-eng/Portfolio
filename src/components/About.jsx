import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-[#0d1117] h-screen text-stone-300'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>  
        <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>About</p>
            </div>
            <div></div>
        </div>

        <div className='max-w-[1000px] grid sm:grid-cols-2 gap-3 md:gap-8 mx-auto '>
            <div className='pl-4 sm:text-right text-3xl font-bold'>
            <p>Hi I'm <span className='text-pink-600'>Miral,</span> nice to meet you, Please take a look around</p>    
            </div> 

            <div className='pl-4 text-left'>
            <p>As a MERN stack developer with a passion for design, I strive to create web applications that not only function well, but also look visually stunning. With over three years of experience as a graphic designer, I bring a unique perspective to my development work. My commitment to exceeding client expectations has earned me a reputation for delivering high-quality work, and as a front-end developer using React.js, I'm excited to continue building my skills and creating exceptional web experiences. This website you're viewing now is a testament to my abilities, built with React.js and Tailwind to showcase my talent for crafting beautiful and responsive user interfaces. </p>    
            </div>
        </div>
        </div>
    </div>
  )
}

export default About