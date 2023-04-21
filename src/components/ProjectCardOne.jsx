import { FiLink } from 'react-icons/fi'
import { BiGitRepoForked } from 'react-icons/bi'
import { BsEyeFill } from 'react-icons/bs'

import React, { useRef, useState } from 'react'
import Modal from 'react-modal';


const ProjectCardOne = ({item}) => {

    const [ isOpen , setIsOpen ] = useState(false)
    const mainImg = useRef()

    const changeImage = (src) => {
        mainImg.current.src = src
      }
      const handleModel = () => {
          setIsOpen(true)
      } 

      
    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: '20'
        },
        content: {
          border:'none',
          background: '#0d1117' ,
          color: 'rgb(214, 211 ,209)',
          padding:'80px 50px',    
        }
    
      };

  return (
    /** Card */
   <>
         <div className=' bg-slate-900/40 min-h-[28rem] ring-1 ring-slate-900/5 shadow-xl w-full text-stone-300 md:w-72  rounded-md overflow-hidden'>
        <img className='object-cover' src={require(`../assets/images/${item.imgUrl}`)} alt=''/>


        {/** Technologies and Title */}
        <div className="flex flex-col gap-2 p-5">

  
            <h2 onClick={handleModel} title={item.name}
            className='text-xl cursor-pointer font-semibold'
            >
                {item.name}
            </h2>

            { /** Card */}
            <div>
                <span  className='text-xs font-bold opacity-60 '>
                {item.description.substring(0, 100)} .. more
                </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 whitespace-normal">
                {item.technologies.map((tech,index)=>(
                    <span className="badge" key={index}>{tech}</span>
                ))}
                
            </div>



        <div className="mt-5 flex gap-2">

        {
                item.links.map(item => (
                    <a title={item.text} key={item.id} href={item.link} target="_blank" rel="noreferrer" className={`text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-stone-200 rounded-md ${item.style}`}>
                        
                        { item.text ==='Demo' && (<FiLink  />) }
                        { item.text ==='Frontend' && (<BiGitRepoForked />) }
                        { item.text ==='Full Stack Github' && (<BiGitRepoForked />) }
                        { item.text ==='Backend' && (<BiGitRepoForked />) }
                        
                        </a>
                ))
            }
            <button title='More details' onClick={handleModel} className='text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-stone-200 rounded-md'>
                <BsEyeFill/>
            </button>
        
        </div>
        </div>
    </div>


        <Modal style={customStyles} isOpen={isOpen} shouldCloseOnOverClick ={false} onRequestClose ={()=>setIsOpen(false)} 
        
        >
        <h2 className='font-bold'>Project Details</h2>
        <div className='flex-wrap md:flex-nowrap flex justify-between mt-4 gap-5 '>
        <div className='w-full '>
        <img ref={mainImg} src={require(`../assets/images/${item.imgUrl}`)} className='object-cover' alt='' />
        
        <div className='md:flex flex-wrap md:mt-4 justify-center gap-2 text-center'>
        
        {
            item.images.map((img,index) => (
                <img key={index} onClick={(e)=>changeImage(e.target.src)} src={require(`../assets/images/${img}`)} className='md:w-[100px] w-1/4 inline-block mr-1 cursor-pointer
                md:block md:mr-0
                ' alt='' />
            ))
        }

            </div>
        </div>
        <div className='w-full mr-auto flex flex-col justify-center'>
            <h2 className='font-bold text-3xl'>{item.name}</h2>
            <p className='mt-4'>{item.description}</p>

            <div className='flex justify-center  gap-4 font-semibold mt-5'>
                {
                     item.links.map(item => (
                        <a title={item.text} key={item.id} href={item.link} target="_blank" rel="noreferrer" className={`text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-stone-200 rounded-md`}>
                            
                            { item.text ==='Demo' && (<FiLink  />) }
                            { item.text ==='Frontend' && (<BiGitRepoForked />) }
                            { item.text ==='Full Stack Github' && (<BiGitRepoForked />) }
                            { item.text ==='Backend' && (<BiGitRepoForked />) }
                            
                            </a>
                    ))
                }

            </div>
        </div>
        </div>
        </Modal>
   
   </>
  )
}

export default ProjectCardOne
