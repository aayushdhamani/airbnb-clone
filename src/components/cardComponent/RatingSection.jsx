import React from 'react'
import { rating } from '../../constants/facilities'

const RatingSection = () => {
  return (
   <div className='flex flex-col'>
                 <p className='font-medium'>Overall rating</p>
                 <div className='flex flex-col gap-1'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>5</p>
                        <div className='flex'>
                            <div className='w-24 h-1 bg-[#222222] '>

                            </div>
                            <div className='w-4 h-1 bg-gray-300 '>

                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>4</p>
                        <div className='flex'>
                            <div className='w-20 h-1 bg-[#222222] '>

                            </div>
                            <div className='w-8 h-1 bg-gray-300 '>

                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>3</p>
                        <div className='flex'>
                            <div className='w-12 h-1 bg-[#222222] '>

                            </div>
                            <div className='w-16 h-1 bg-gray-300 '>

                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>2</p>
                        <div className='flex'>
                            <div className='w-12 h-1 bg-[#222222] '>

                            </div>
                            <div className='w-16 h-1 bg-gray-300 '>

                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>1</p>
                        <div className='w-28 h-1 bg-gray-300'>

                        </div>
                    </div>
                    
                 </div>
                 
               </div>
  )
}

export default RatingSection
