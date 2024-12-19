import React from 'react'

const ReviewCard = ({data}) => {
    const {name,profilePicture,rating,review,reviewTime,yearsOnPlatform}=data;
  return (
    <div className='w-[80%] flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
            <img src={profilePicture?profilePicture:'https://via.placeholder.com/50'} alt="" className='w-12 h-12 rounded-full' />
            <div className='flex flex-col justify-start'>
                <p className='font-medium text-lg'>{name}</p>
                <p className='tracking-tight'>{yearsOnPlatform}</p>
            </div>
        </div>
        <div className='flex items-center gap-3'>
        ★★★★★
        <p className='font-medium'><span className='font-extralight'>&#x2022;</span> {reviewTime}</p>
        
        </div>
        <p className='tracking-tight text-[17px]'>{review}</p>
        <p className='underline font-medium hover:cursor-pointer'>Show more</p>
    </div>
  )
}

export default ReviewCard
