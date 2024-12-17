import React from 'react'
import { LuDownload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Image from '../assets/CardImage.svg'
const CardComponentPage = () => {
  return (
    <div>
        <div className='w-9/12 mx-auto'>
        <div className='flex justify-between my-4'>
            <p className='text-2xl font-semibold'>Sunset Wooded Attic Suite w/ Electric Blanket</p>
            <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center gap-2'>
            <LuDownload className='font-extralight text-lg '/>
            <p className=' underline text-sm font-medium'>Share</p>
            </div>
            <div className='flex justify-center items-center gap-2 '>
            <CiHeart className='text-lg'/>
            <p className=' underline text-sm font-medium'>Save</p>
            </div>
            </div>

        </div>
        <div className='grid grid-cols-2 gap-2'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-731672872585103658/original/e28db6a3-6932-4c82-809e-546ef1d9f5a9.jpeg?im_w=960&im_format=avif" className="rounded-l-lg" alt="" />
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/d605079c-37a2-4118-ac20-1a05bb9c6531.jpeg?im_w=480&im_format=avif" alt="" />
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/6dbf6531-2c99-4832-b48a-efde0dc4a1b0.jpeg?im_w=480&im_format=avif" alt="" className='rounded-tr-lg'/>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/8f8356a9-3f0a-497a-a23c-17755d3b4677.jpeg?im_w=480&im_format=avif" alt="" />
        <div className='relative '>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/1c0f99dc-295c-4ead-9fa9-fd7277be7ced.jpeg?im_w=480&im_format=avif" alt="" className='rounded-br-lg absolute'/>
        <div className='absolute flex justify-center items-center gap-3 bg-[#F7F7F7] py-1 px-3 border border-gray-600 rounded-lg right-5 bottom-5 text-md font-medium'>
            <img src={Image} alt="" className='w-4 h-4 '/>
            <p>Show all photos</p>
        </div>
        </div>
    
        </div>

        </div>
        <div className='flex mt-6'>
            <div className='w-[70%] flex flex-col  bg-gray-200'>
            <p>Room in Manali, India</p>
            <p>1 king bed <span>&#x2022;</span> Private attached bathroom</p>
            <div className='flex items-center '>
                <FaStar/> 4.87 <span>&#x2022;</span> <span className='underline'>38 reviews</span>
            </div>
            </div>
            <div className='w-[30%] bg-gray-600'>

            </div>

        </div>
        </div>
    </div>
  )
}

export default CardComponentPage
