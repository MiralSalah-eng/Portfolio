import React, { useRef, useState } from 'react'
import Modal from 'react-modal';

const ProjectCard = ({item}) => {

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
          padding:'80px 50px ',
        
        }
      };
  return (

<>
<div  className='w-full bg-slate-400 rounded-lg cursor-pointer '>
    <div className='overflow-hidden relative group'>
      <img src={require(`../assets/images/${item.imgUrl}`)} className='rounded-t-lg' alt='' />
      <div  className='w-full h-full rounded-t-md bg-black/50 absolute 
      top-0 left-0 mt-[0px] font-semibold 
      flex justify-center items-center'>
      <button  className='border px-4 py-2 hover:bg-slate-50 hover:text-slate-900' onClick={handleModel}>View Details</button> 
      </div>  
    </div>
    
    <div className='flex justify-center font-semibold'>
            {
                item.links.map(item => (
                    <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className={`w-full text-center py-2 ${item.style}`}>{item.text}</a>
                ))
            }

    </div>    
</div>  
    <Modal style={customStyles} isOpen={isOpen} shouldCloseOnOverClick ={false} onRequestClose ={()=>setIsOpen(false)} >
    <h2 className='font-bold'>Project Details</h2>
    <div className='flex-wrap md:flex-nowrap flex justify-between mt-4 gap-5 '>
    
      <div className='w-full '>
      <img ref={mainImg} src={require(`../assets/images/${item.imgUrl}`)} className='object-cover' alt='' />
      <div className='md:flex md:mt-4 justify-center gap-2 hidden'>
     
     {
        item.images.map((img,index) => (
            <img key={index} onClick={(e)=>changeImage(e.target.src)} src={require(`../assets/images/${img}`)} className='md:w-[100px] cursor-pointer' alt='' />
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
                    <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className={`w-full text-center py-2  ${item.style}`}>{item.text}</a>
                ))
            }

        </div>
      </div>
    </div>
  </Modal>
</>


)
}

export default ProjectCard