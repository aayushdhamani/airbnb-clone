import React from 'react'
import { Support } from '../../constants/Footerdata'
import { Hosting } from '../../constants/Footerdata'
import { Airbnb } from '../../constants/Footerdata'
import { bottom } from '../../constants/Footerdata'
import globe from '../../assets/globe.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
const Footer = () => {
  return (
    <div className='bg-BgFooter'>
    <div className='w-11/12 mx-auto  '>
    <div className='grid sm:grid-cols-3 grid-cols-1 pt-6'>
    <div >
        <p className='font-semibold text-sm mb-2 font-poppins'>Support</p>
        <ul>
            {
                Support.map((item, index)=>(
                    <li key={index} className='mb-3 text-sm font-poppins hover:underline hover:cursor-pointer'>
                        {
                            item
                        }
                    </li>
                ))
            }
        </ul>

      </div>
      <div>
        <p className='font-semibold text-sm mb-2 font-poppins'>Hosting</p>
        <ul>
            {
                Hosting.map((item, index)=>(
                    <li key={index} className='mb-3 text-sm font-poppins hover:underline hover:cursor-pointer'>
                        {
                            item
                        }
                    </li>
                ))
            }
        </ul>

      </div>
      <div>
        <p className='font-semibold text-sm mb-2 font-poppins'>Airbnb</p>
        <ul>
            {
                Airbnb.map((item, index)=>(
                    <li key={index} className='mb-3 text-sm font-poppins hover:underline hover:cursor-pointer'>
                        {
                            item
                        }
                    </li>
                ))
            }
        </ul>

      </div>
    </div>
     
      <div className='flex flex-col'>
      <hr className='my-5'/>
      <div className='flex justify-between mb-6'>
        <div className='flex justify-center items-center '>
            <p className='mr-3'>© 2024 Airbnb, Inc.</p>
            <ul className='flex '>
                {
                    bottom.map((item,index)=>(
                        <li key={index} className='hover:underline mx-1'>
                           &#8226; {
                                item
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-5">
        <div className='flex justify-center items-center gap-2'>
                <img src={globe} alt="" className='w-4 h-4'/>
                <p className='font-poppins text-sm font-semibold'>English (IN)</p>
        </div>
        <p className='font-poppins text-md font-semibold'>₹ INR</p>
            <img src={fb} alt="" className='w-4 h-4'/>
            <img src={twitter} alt="" className='w-4 h-4 '/>
            <img src={insta} alt="" className='w-4 h-4'/>
        </div>
      </div>
      </div>
      
    </div>
    </div>
  ) 
}

export default Footer
