import React, { useState } from 'react'
import {categoryData} from '../../constants/Footerdata'
// import { useLocation } from 'react-router-dom'

const UpperFooter = () => {
    const [activeCategory,setActiveCategory]=useState("Popular")
    const displayData=categoryData[activeCategory];
  return (
    <div className='bg-BgFooter'>
      <div className='w-11/12 mx-auto py-5'>
        <p className='my-5 font-poppins font-medium text-xl'>Inspiration for future getaways</p>
        <div >
            {
                Object.keys(categoryData).map((category,index)=>(
                    <button onClick={()=>setActiveCategory(category)} className='mr-4 pb-5' key={index}>
                        <p className='text-gray-500 font-roboto text-sm font-medium'>{category}</p>
                        <div className={activeCategory===category?'h-[2px] bg-black  ':''}></div>
                    </button>
                ))
            }
            
            <div className='h-[1px] w-full bg-gray-300'></div>
            <div className='grid sm:grid-cols-6 grid-cols-2 gap-y-6 my-6'>
                {
                    displayData?.map((data, index)=>(   
                        <div className='flex flex-col justify-start flex-wrap ' key={index}>
                            <p className='font-poppins text-sm font-semibold'>{data.location}</p>
                           <p className='text-gray-500 text-sm'>{data.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
      <hr className='py-2'/>
    </div>
  )
}

export default UpperFooter
