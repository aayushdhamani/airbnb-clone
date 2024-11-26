import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'
import globe from '../../assets/globe.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [selected, setSelected]=useState(true);
  return (
    <>
      <div className='w-11/12  flex justify-between mx-auto p-5'>
      <img src={logo} alt="Airbnb logo" className='w-[100px] h-[30px] hover:cursor-pointer'/>
        <div className='flex gap-7 font-medium font-roboto text-[1rem] items-center hover:cursor-pointer'>
                <p className='text-gray-500 '>Stays</p>
                <p className=''>Experiences</p>
        </div>
        <div className='flex items-center justify-between gap-5 '>
            <p className='font-roboto text-sm fot-medium hover:bg-gray-100 p-3 rounded-full hover:cursor-pointer'>Airbnb your home</p>
            <img src={globe} alt="globe" className='w-[16px] h-[16px] hover:cursor-pointer'/>
            <div className='rounded-full border border-gray-200 relative flex justify-around items-center p-2 gap-4 hover:cursor-pointer'>
            <GiHamburgerMenu />
            <img src={profile} alt="profile" className="w-8 h-8 rounded-full fill-gray-500" />
            </div>

        </div>
      </div>
    </>
  )
}

export default Header
