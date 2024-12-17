import React, { useEffect, useState } from 'react'
import download from '../../assets/downloadLogo.svg'

const Cards = ({data}) => {
    const {image,name,owner,price,Live}=data;

  return (
    <>
    <div>
    <div className='w-[320px] h-[310px] bg-gray-500 rounded-2xl relative hover:cursor-pointer'>
        <img src={image} className='w-[100%] h-[100%] rounded-2xl' /> 
        {Live?<div className='absolute top-4 left-4 bg-[#CBC7C4] rounded-full cursor-pointer'>
          <p className='px-4 py-1 font-medium'>Live</p>
        </div>:''}
        <div className='absolute top-4 right-4 bg-[#CBC7C4] rounded-full cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-white transition-all duration-200'>
          <img src={download} alt="hello" className='w-[50%]'/>
        </div>
    </div>
    <div className='flex flex-col flex-start'>
    <p className='font-medium'>{name}</p>
    <p className='text-gray-500'>Hosted By {owner}</p>
    <p className=''><span className='font-medium'>{price} </span>{price !== 'Sold out' ? 'per guest': ''}</p>
    </div>
    </div>
    </>

  )
}

export default Cards
