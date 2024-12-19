import React, { useEffect, useRef, useState } from 'react';
import { RiShare2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Image from '../assets/CardImage.svg';
import profileSide from '../assets/profileSide.svg'
import BedImage from '../assets/bed.svg'
import CalenderImage from '../assets/calender.svg'
import AlmiraImage from '../assets/almira.svg'
import flag from '../assets/flag.svg'
import { facilities, rating } from '../constants/facilities';
import Datepicker from "react-tailwindcss-datepicker"
import { reviews } from '../constants/facilities'
import ReviewCard from '../components/cardComponent/reviewCard';
import RatingSection from '../components/cardComponent/ratingSection';
import UserInfo from '../components/cardComponent/UserInfo';

const CardComponentPage = () => {
  const options = ["Photos", "Amenities", "Reviews", "Location"];
  const [showHeader, setShowHeader] = useState(false);
  const [position, setPosition]=useState(false);
  const [value, setValue] = useState({ 
    startDate: null, 
    endDate: null
  });


  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = document.getElementById("scrollableDiv");
      if (scrollableDiv) {
        const rect = scrollableDiv.getBoundingClientRect();
        console.log("Bounding Rect:", rect);

       // Check if the bottom of the scrollableDiv is visible in the viewport
        if (rect.top<=0 && rect.bottom>=635) {
            setShowHeader(true);
            setPosition(true);
        } 
        else {
          setPosition(false);
            setShowHeader(false);
            
        }
      }  
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("Position",position);

  return (
    <div>
        <div className="w-9/12 mx-auto flex justify-between my-4">
          <p className="text-3xl font-sans font-semibold">Sunset Wooded Attic Suite w/ Electric Blanket</p>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-2">
              <RiShare2Line className="font-extralight text-lg" />
              <p className="underline text-sm font-medium">Share</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <CiHeart className="text-lg" />
              <p className="underline text-sm font-medium">Save</p>
            </div>
          </div>
        </div>

        <div className="w-9/12 mx-auto grid grid-cols-2 gap-2 hover:cursor-pointer" >
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-731672872585103658/original/e28db6a3-6932-4c82-809e-546ef1d9f5a9.jpeg?im_w=960&im_format=avif"
            className="rounded-l-lg"
            alt=""
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/d605079c-37a2-4118-ac20-1a05bb9c6531.jpeg?im_w=480&im_format=avif"
              alt=""
            />
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/6dbf6531-2c99-4832-b48a-efde0dc4a1b0.jpeg?im_w=480&im_format=avif"
              alt=""
              className="rounded-tr-lg"
            />
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/8f8356a9-3f0a-497a-a23c-17755d3b4677.jpeg?im_w=480&im_format=avif"
              alt=""
            />
            <div className="relative">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/1c0f99dc-295c-4ead-9fa9-fd7277be7ced.jpeg?im_w=480&im_format=avif"
                alt=""
                className="rounded-br-lg absolute"
              />
              <div className="absolute flex justify-center items-center gap-3 bg-[#F7F7F7] py-1 px-3 border border-gray-600 rounded-lg right-5 bottom-5 text-md font-medium">
                <img src={Image} alt="" className="w-4 h-4" />
                <p>Show all photos</p>
              </div>
            </div>
          </div>
        </div>
        {showHeader && (
          <div className="h-[70px] border-b border-gray-300 fixed top-0 w-full bg-white z-10">
            <div className="w-9/12 mx-auto h-full flex items-center">
              <ul className="flex items-center gap-5 text-sm font-medium h-full">
                {options.map((item, index) => (
                  <li
                    key={index}
                    className="relative group h-full flex items-center cursor-pointer"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-gray-800 group-hover:w-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex mt-6 w-9/12 mx-auto justify-between" id="scrollableDiv">
          <div className="w-[60%] flex flex-col">
            <p className='text-2xl font-semibold'>Room in Manali,India</p>
            <p className='text-lg'>
              1 king bed <span>&#x2022;</span> Private attached bathroom
            </p>
            <div className="flex items-center text-lg gap-1">
              <FaStar /> 4.87<span>&#x2022;</span><span className="underline font-medium text-lg">38 reviews</span>
            </div>
            <hr className='my-6'/>
            <div className='flex gap-4 items-center'>
            <div className='relative w-10 h-10 '>
            <img src="https://a0.muscache.com/im/pictures/user/User/original/e1525eaa-f2d4-42d0-bb54-793d2de862fa.jpeg?im_w=240&im_format=avif" alt="" className='rounded-full absolute h-full w-full'/>
            <img src={profileSide} alt="" className='absolute w-5 h-5 -bottom-1 -right-1'/>
            </div>
              
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Stay with Kanupriya</p>
                    <p className='text-gray-500 text-sm'>Superhost <span>&#x2022;</span> 2 years hosting</p>
                </div>
            </div>
            <hr className='my-6'/>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-6 items-start '>
                <img src={BedImage} alt="" className='w-6 h-6 mt-2'/>
                <div className='flex flex-col justify-start'>
                  <p className='font-medium text-lg tracking-tight'>Room in a cottage</p>
                  <p className='text-gray-500 tracking-tight'>Your own room in a home, plus access to shared spaces.</p>
                </div>
              </div>
              <div className='flex gap-6 '>
                <img src={AlmiraImage} alt="" className='w-6 h-6 mt-2'/>
                <div className='flex flex-col '>
                  <p className='font-medium text-lg tracking-tight'>Self check-in</p>
                  <p className='text-gray-500 tracking-tight'>Check yourself in with the lockbox.
                  </p>
                </div>
              </div>
              <div className='flex gap-6'>
                <img src={CalenderImage} alt="" className='w-6 h-6 mt-2'/>
                <div className='flex flex-col justify-center'>
                  <p className='font-medium text-lg tracking-tight'>Free cancellation before 12:00 pm on Dec</p>
                  <p className='text-gray-500 tracking-tight'>Get a full refund if you change your mind.</p>
                </div>
              </div>
              <hr className='my-6'/>
              
            </div>
            <p className='text-2xl font-semibold mb-5'>About this place</p>
            <p className='mb-5 tracking-tighter text-lg'>Tra - A Boutique stay, is a premium take on a home stay. Your host, Kanupriya, lives at the cottage to make your stay utmost comfortable and enriched.</p>
            <p className='mb-5 tracking-tighter text-lg '>We are conveniently located on Naggar Manali road (with superb road condition) 8kms / 20-25 mins drive from the Manali Mall road, in the midst of serene apple orchards, overlooking the tranquil snow-clad Himalayas, visible from your windows and balconies,...</p>
            <div className='flex items-center'>
              <p className='font-medium text-lg underline'>Show more</p>
              <FaChevronRight className='font-light'/>
            </div>
            <hr className='my-12'/>
            <p className='text-2xl font-semibold mb-6'>Where you'll sleep</p>
            <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMxNjcyODcyNTg1MTAzNjU4/original/1c0f99dc-295c-4ead-9fa9-fd7277be7ced.jpeg?im_w=480&im_format=avif"
                alt=""
                className="rounded-lg w-[300px] mb-3"
              />
              <p className='font-medium'>Bedroom</p>
              <p>1 king bed</p>
              <hr className='my-12'/>
              <p className='text-2xl font-semibold '>What this place offers</p>
              <div className='grid grid-cols-2 grid-rows-5 gap-4 my-8'>
                 {
                  facilities?.map((item)=>(
                    <div key={item.id} className='flex items-center gap-4 '>
                      <img src={item.image} alt=""  className='w-6 h-6'/>
                      <p className={` ${item.id==9 || item.id==10 ?'line-through':''}`}>{item.name}</p>
                    </div>  
                  ))
                 }
              </div>
              <button className='px-6 py-3 border border-gray-600 w-fit rounded-xl text-lg font-medium'>Show all 30 amenities</button>
              <hr className='my-12'/>
              <p className='text-2xl font-semibold'>Select check-in date</p>
           <p className='text-gray-500 text-base font-normal'>Add your travel dates for exact pricing</p>
          <div className='my-5'> 
          <Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
            
        /> 
          </div>
          </div>
               
          <div
  className={`${
    position
      ? "w-[24%] fixed bg-white top-[95px] right-[190px]"
      : "w-[32%] "
  }`}
>
  <div className="w-full shadow-xl border border-gray-300 rounded-xl p-5">
    <p className="text-xl font-semibold mb-5">
      ₹4,340 <span className="text-base font-normal">night</span>
    </p>
    <div className="grid grid-rows-2 border border-gray-500 rounded-lg">
      <div className="grid grid-cols-2 border-b border-gray-500 rounded-t-lg">
        <div className="border-r border-gray-500 text-xs font-medium p-2">
          CHECK-IN
        </div>
        <div className="text-xs font-medium p-2">CHECK-OUT</div>
      </div>
      <div className="flex justify-between items-center pr-5">
        <div className="flex flex-col  p-2">
          <p className="text-xs font-medium">GUESTS</p>
          <p className="text-sm font-medium">1 guest</p>
        </div>
        <FaChevronDown />
      </div>
    </div>
    <button className="bg-gradient-to-r from-[#FF385C] to-[#DD0E64] w-full py-3 px-8 text-white font-medium rounded-lg my-3">
      Reserve
    </button>
    <p className="text-center text-base font-normal tracking-tight mb-3">
      You won't be charged yet
    </p>
    <div className="flex justify-between mb-4 text-lg">
      <p className="underline">₹4,340 x 5 nights</p>
      <p>₹21,700</p>
    </div>
    <div className="flex justify-between mb-4 text-lg">
      <p className="underline">Cleaning fee</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mb-3 text-lg">
      <p className="underline">Airbnb service fee</p>
      <p>₹3,085</p>
    </div>
    <hr className="my-5" />
    <div className="flex justify-between mb-3 text-lg font-semibold">
      <p className="underline">Total before taxes</p>
      <p>₹24,935</p>
    </div>
  </div>
  <div className="flex justify-center items-center gap-3 mt-6">
    <img src={flag} alt="" className="w-4 h-4" />
    <p className="underline text-sm font-medium text-gray-500">
      Report this listing
    </p>
  </div>
</div>


          
          
        </div>
        <hr className='my-12 w-9/12 mx-auto'/>
        <div className='w-9/12 mx-auto '>
        <div className="flex items-center text-2xl gap-1 mb-5">
              <FaStar /> 4.87<span>&#x2022;</span><span className=" font-medium text-2xl">38 reviews</span>
            </div>
          <div className='grid grid-cols-7 '>
            <RatingSection/>
            <div className='flex'>
            {
                rating?.map((item)=>(
                    <div className={`flex flex-col  min-w-full pl-6 font-medium ${item.id!=6?'border-r border-gray-300 ':''}`} key={item.id} >
                        <p>{item.name}</p>
                        <p className='mb-5 text-xl'>{item.rating}</p>
                        <img src={item.image} alt=""  className='w-8 h-8 '/>
                    </div>
                ))
            }
        </div>
          </div>
        </div>
        <hr className='my-12 w-9/12 mx-auto'/>
        <div className='w-9/12 mx-auto grid grid-cols-2 grid-rows-2 gap-10'>
        {
          reviews.map((review)=>(
            <ReviewCard data={review} key={review.id}/>
          ))
        }

        <button className='px-5 py-3 border border-gray-600 w-fit rounded-xl text-lg font-medium'>Show all 38 reviews</button>
        </div>
        <hr className='my-12 w-9/12 mx-auto'/>
        <div className='w-9/12 mx-auto'>
            <UserInfo/>
        </div>
      </div>
        );
};

export default CardComponentPage;
