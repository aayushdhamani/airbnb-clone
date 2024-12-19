import React from 'react'
import profileS1 from '../../assets/profileSide1.svg'
import black from '../../assets/black.svg'


const UserBox = () => {
  return (
    <div className='flex shadow-2xl rounded-2xl px-4 h-[240px] w-[90%]'>
      <div className='w-[60%] flex flex-col '>
        <div className='relative w-[47%] rounded-full px-14 pt-7'>
        <img src="https://a0.muscache.com/im/pictures/user/User/original/e1525eaa-f2d4-42d0-bb54-793d2de862fa.jpeg?im_w=240&im_format=avif" alt="" className='absolute w-full rounded-full'/>
        <div className='absolute w-9 h-9 rounded-full bg-[#DB0D63] -right-14 -bottom-28'>
            <img src={profileS1} alt="" className='w-5 h-5 top-2 left-2 absolute'/>
        </div>
        </div>
       <p className='px-14 pt-32 text-2xl font-bold'>ItsAayush</p>
       <div className='flex items-center px-16'>
            <img src={black} alt="" className='w-3 h-3'/>
            <p className='font-medium'>Superhost</p>
       </div>
      </div>
        
      <div className='w-[40%] flex flex-col pt-10 pl-7'>
        <div className='flex flex-col justify-start border-b border-gray-200'>
            <p className='text-xl font-bold'>196</p>
            <p className='text-xs font-medium mb-4'>Reviews</p>
        </div>
        <div className='flex flex-col justify-start border-b border-gray-200'>
            <p className='text-xl font-bold'>4.9★</p>
            <p className='text-xs font-medium mb-4'>Ratings</p>
        </div>
        <div className='flex flex-col justify-start'>
            <p className='text-xl font-bold'>2</p>
            <p className='text-xs font-medium'>Years hsoting</p>
        </div>
      </div>
    </div>
  )
}

export default UserBox
