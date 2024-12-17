import React, { useEffect, useState,useRef } from 'react';
import airbnbLogo from '../../assets/airbnb-logo.svg'
import airbnbHelpLogo from '../../assets/airbnbHelp.svg'
import profile from '../../assets/profile.svg'
import globe from '../../assets/globe.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link,useLocation } from 'react-router-dom';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollDirection(window.scrollY > 0 ? "down" : "up");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <>
      <div className="hidden sm:flex sm:justify-between sm:w-11/12 sm:mx-auto sm:p-4 bg-white sticky top-0 z-10"  ref={headerRef}>
      <Link to="/"><div className='flex justify-center items-center text-xl '>
       {
        location.pathname==='/'?<>
        <img src={airbnbLogo} alt="Airbnb logo" className='h-[35px] hover:cursor-pointer fill-logoColor'/>
        <p className='font-extrabold text-xl text-[#FF385C] font-poppins'>Airbnb</p>
        </>:
        <>
         <img src={airbnbHelpLogo} alt="Airbnb logo" className='h-[35px] hover:cursor-pointer fill-logoColor'/>
         <p className='font-extrabold text-xl text-black font-poppins'>Help Centre</p>
        </>
       } 
        </div></Link>
       {
        location.pathname=="/" &&  scrollDirection=='down'?
        <div className='grid grid-cols-[5rem_5rem_9rem] border border-gray-300 rounded-full py-3 pl-3 gap-3 hover:cursor-pointer'>
        <div className='flex justify-between '>
          <p className='font-semibold text-sm'>Anywhere</p>
          <div className='w-[1px] h-6 bg-gray-300 '></div>
        </div>
        <div className='flex justify-between '>
          <p className='font-semibold text-sm'>Any week</p>
          <div className='w-[1px] h-6 bg-gray-300'></div>
        </div>
        <div className='relative flex justify-between rounded-full items-center'>
  <p className='font-roboto font-light text-normal text-gray-500'>Add guests</p>
  <div className='absolute rounded-full bg-[#fc4264] w-[32px] h-[32px] right-2'>
    <IoIosSearch className='absolute top-2 left-2 text-white text-lg' />
  </div>
</div>
       </div>:
        <div className='flex gap-7 font-medium font-roboto text-[1rem] items-center hover:cursor-pointer'>
        <p className='text-black '>Stays</p>
        <p className='text-gray-500'>Experiences</p>
</div>
       
       
}
        <div className='flex items-center justify-between gap-5 '>
          {
            location.pathname==='/' &&   <p className='font-roboto text-sm fot-medium hover:bg-gray-100 p-3 rounded-full hover:cursor-pointer'>Airbnb your home</p>
          }
            <img src={globe} alt="globe" className='w-[16px] h-[16px] hover:cursor-pointer'/>
            <div className='rounded-full border border-gray-200 relative flex justify-around items-center p-2 gap-4 hover:cursor-pointer'>
            <GiHamburgerMenu />
            <img src={profile} alt="profile" className="w-8 h-8 rounded-full fill-gray-500" />
            </div>

        </div>

       
      </div>
     { 
      location.pathname==='/' ? <div className='w-11/12 sm:w-7/12 h-[65px] border border-gray-200 shadow-lg rounded-full mx-auto mt-3 grid grid-cols-3 '>
      <div className="flex flex-col justify-center pl-4 sm:pl-9 rounded-full hover:bg-gray-100 cursor-pointer group sm:w-[280px] w-full">
        <p className='text-sm sm:text-xs  font-medium pl-2'>Where</p>
        <input type="text" placeholder='Search destinations' className='text-gray-500 group-hover:bg-gray-100 rounded-full focus:outline-none pl-2'
        aria-label="Search destinations"/>
      </div>
      
      
      
      <div className='sm:grid grid-cols-2 hidden'>
        <div className='flex flex-col justify-center hover:bg-gray-100 hover:cursor-pointer rounded-full pl-5'>
          <p className='text-xs font-medium '>Check in</p>
          <p className='text-gray-500 text-sm font-poppins'>Add dates</p>
        </div>
        <div className='flex flex-col justify-center hover:bg-gray-100 hover:cursor-pointer rounded-full pl-5'>
          <p className='text-xs font-medium'>Check out</p>
          <p className='text-gray-500 text-sm font-poppins'>Add dates</p>
        </div>
      </div>
      <div className='relative justify-between hover:bg-gray-100 cursor-pointer rounded-full items-center sm:flex hidden'>
  <div className='flex flex-col justify-center pl-5'>
    <p className='text-xs font-medium'>Who</p>
    <p className='text-gray-500 text-sm font-poppins'>Add guests</p>
  </div>
  <div className='absolute rounded-full bg-[#fc4264] w-[50px] h-[50px] right-2'>
    <IoIosSearch className='absolute top-3 left-3 text-white text-2xl' />
  </div>
</div>

<div className='flex justify-end items-center sm:hidden relative '>
  <div className='rounded-full bg-[#fc4264] w-[50px] h-[50px] absolute left-40'>
    <IoIosSearch className='absolute top-3 left-3 text-white text-2xl' />
  </div>
</div>


      
    </div>:<></>
     }
    { location.pathname==='/' && <hr className='mt-5' />}
    </>
  )
}

export default Header
