import { IoIosStar } from 'react-icons/io'
import { IoIosStarHalf } from 'react-icons/io'
import { FiLink } from 'react-icons/fi'
import { BiGitRepoForked } from 'react-icons/bi'
import { BsEyeFill } from 'react-icons/bs'
import  benmart  from '../assets/benmart.png'


const Card = () => {
  return (
    /** Card */
    <div className='bg-white text-gray-700 w-72 min-h-[10rem] rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={benmart} alt=''/>


        {/** Technologies and Title */}
        <div className="flex flex-col gap-2 p-5">

            <div className="flex items-center gap-2">
                <span className="badge">react</span>
                <span className="badge">tailwind</span>
            </div>

            <h2 title='CRUD React App'
            className='text-2xl font-semibold overflow-ellipsis whitespace-nowrap'
            >
                CRUD React App
            </h2>

            { /** Card */}
            <div>
                <span className='text-xs font-bold opacity-60 '>
                React CRUD App Tutorial – How to Build a Book Management App in React from Scratch
                </span>

                <div className='flex gap-2 items-center mt-1'>
                    <span className='text-sm line-through opacity-50'>  
                        USD 50.000
                    </span>
                    <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
                        Save
                    </span>
                </div>
            </div>

        <div className='flex items-center mt-1 text-amber-500'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />

            <span className='text-xs text-gray-500 ml-2'>
                20K reviews
            </span>
        </div>

        <div className="mt-5 flex gap-2">

            <button className='text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-gray-300/60 rounded-md'>
            <BiGitRepoForked />
            </button>

            <button className='text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-gray-300/60 rounded-md'>
                <BsEyeFill/>
            </button>

            <button className='text-2xl p-2 text-gray-500 hover:text-teal-500 flex flex-grow justify-center items-center bg-gray-300/60 rounded-md'>
                <FiLink/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Card