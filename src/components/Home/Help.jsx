import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { helpCard } from '../../constants/helpData';
import { TopArticles } from '../../constants/helpData';
import { Link } from 'react-router-dom';

const options=[
    "Guest","Host","Experience Host","Travel Admin"
]

function Help() {
  return (
    <>
      <div className='w-9/12 mx-auto'>
        <p className='text-center font-semibold text-5xl'>Hi, how can we help?</p>
        <div className='relative bg-gray-100 w-[30%] rounded-full border border-gray-300 mx-auto py-5 px-3 hover:bg-gray-200 group my-8' >
            <input type="text" className='placeholder-black text-black font-medium text-md bg-gray-100 focus:outline-none group-hover:bg-gray-200 pl-2' placeholder='Search how-tos and more'/>
            <div>
            <div className='absolute rounded-full bg-[#FE375C] w-[50px] h-[50px] right-3 top-2'>
                <IoIosSearch className='absolute top-3 left-3 text-white text-2xl hover:cursor-pointer' />
            </div>
            </div>
        </div>

        <div>
            
                <ul className='flex gap-8 text-gray-600 text-sm mb-3'>
                    {
                        options.map((item,index)=>(
                            <li key={index} className='hover:bg-gray-100 font-semibold hover:cursor-pointer'>{item}</li>
                        ))
                    }
                </ul>
            
        </div>
        <hr className='mb-14'/>
        <div className='border border-gray-200 rounded-xl flex justify-between px-6 py-5 mb-12'>
                    <div className='flex flex-col flex-start w-[60%]'>
                        <p className='text-3xl font-semibold'>We’re here for you</p>
                        <p className='text-lg'>Log in to get help with your reservations, account, and more.</p>
                    </div>
                    <div className='w-[40%] pt-3'>
                    <button className='bg-gradient-to-r from-[#FF385C] to-[#DD0E64]  px-4 text-white font-medium min-w-full rounded-lg h-[85%]'>
                    Login in or sign up
                   </button>
                    </div>
                 
        </div>
        <div className='flex justify-between my-7'>
          <p className='text-2xl font-medium'>Guides for getting started</p>
          <div className='flex justify-center items-center'>
            <p className='font-medium'>Browse all topics</p>
            <RiArrowRightSLine className='text-2xl'/>
          </div>
        </div>

        <div className='flex justify-evenly gap-3 mb-24'>
          {
            helpCard?.map((card)=>(
              <div key={card.id} className='w-[35%] hover:cursor-pointer ' >
                <img src={card.image} className='w-full h-full rounded-lg object-cover mb-3'  />
                <p className='text-lg font-medium font-poppins'>{card.subHeading}</p>
              </div>
            ))
          }
        </div>
          <p className='text-3xl font-medium mb-6'>Top articles</p>
          <div className='grid grid-cols-3 mb-7 gap-4'>
  {
    TopArticles.map((article, index) => (
      <div key={index} className='h-[160px] flex flex-col justify-between gap-x-7'>
       <Link to={article.route}>
                 <p className='underline text-xl font-medium'>{article.name}</p>
          <p className='text-gray-500 text-lg'>{article.description}</p>
      </Link>
        <hr  />
      </div>
    ))
  }
</div>

      </div>
      <div className='bg-black py-10'>
      <div className='w-9/12 mx-auto'>
      <p className='text-white text-3xl font-semibold '>Explore more</p>
      <div className='grid grid-cols-3 my-10'>
      <div className='w-[85%] rounded-lg bg-gray-800'>
      <img src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png" alt="" className='rounded-xl object-cover' />
      <p className='text-white'>Our community Policies</p>
      <p className='text-white'>How we build a foundation of trust.</p>
      </div>
      <div> 
      <img src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png" alt="" />
      <p className='text-white'>Safety tips and guidlines</p>
      <p className='text-white'>Resources to help travellers stay safe.</p>
      </div>
      <div className='text-white'>
          <p >Need to get in Touch?</p>
          <p>We’ll start with some questions and get you to the right place.</p>
          <button>Contact us</button>
          <p>You can also <span className='text-white underline'>give us feedback.</span></p>
      </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default Help
