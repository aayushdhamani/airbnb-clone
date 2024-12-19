import React from 'react'
import { GoHeart } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
const CustomCards = ({ data }) => {

    const { dates, distance, imageUrl, isGuestFavourite, location, price ,rating ,route} = data
    return (
        <>
            <Link to={route}>
                <div className='w-[330px] h-[310px] bg-gray-500 rounded-2xl relative hover:cursor-pointer'>
                    <img src={imageUrl} className='w-[100%] h-[100%] rounded-2xl object-cover' />
                    {isGuestFavourite ? <div className='absolute top-4 left-4 bg-white rounded-full cursor-pointer'>
                        <p className='px-3 py-1 font-medium'>Guest favourite</p>
                    </div> : ''}
                    <div className='absolute top-4 right-4 rounded-full cursor-pointer w-8 h-8 flex justify-center items-center hover:scale-110 transition-all duration-200 text-white text-2xl  '>
                    <GoHeart />
                    </div>
                </div>
                <div className='flex flex-col flex-start mt-2'>
                    <div className='flex justify-between'>

                    <p className='font-medium'>{location}</p>
                        <div className='flex justify-center items-center gap-1 '>
                            <FaStar className='text-xs'/>
                            {rating}
                        </div>

                    </div>
                    <p className='text-gray-500'>{distance}</p>
                    <p className='text-gray-500'>{dates}</p>
                    <p ><span className='font-medium'>{price}</span> night</p>
                    
                </div>
            </Link>
        </>
    )
}

export default CustomCards
