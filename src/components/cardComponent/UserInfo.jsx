import React from 'react';
import UserBox from './UserBox';
import { user } from '../../constants/facilities';
import { FaChevronRight } from 'react-icons/fa';
import last from '../../assets/last.svg'

const UserInfo = () => {
    return (
        <div className="flex flex-col gap-4">
           
            <p className="text-xl font-medium">Meet your Host</p>
            <div className='flex gap-10'>
            <div className="w-[35%] flex flex-col gap-4">
                <UserBox />
                <div className="flex flex-col gap-5 text-[17px] w-[90%]">
                    {user?.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center leading-5">
                            <img src={item.image} alt="icon" className="w-6 h-6" />
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <p>
                    Tra-A Boutique Stay is a premium take on a homestay in Manali. Stay with your host in a wooded chalet...
                </p>

                <div className="flex items-center cursor-pointer ">
                    <p className='underline font-medium'>Show more</p>
                    <FaChevronRight className="ml-1" />
                </div>
            </div>
            <div className='w-[60%] flex flex-col '>
            <p className='text-xl font-medium mb-5 tracking-tighter'>Kanupriya is a Superhost</p>
            <p className='tracking-tight mb-5 text-lg'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            <p className='text-xl tracking-tight font-medium'>Co-Hosts</p>
            <div className='flex items-center gap-3 my-3'>
                <img src="https://a0.muscache.com/im/pictures/user/User/original/c53b2d3f-d322-41e4-aa19-f53cd7109276.jpeg?im_w=240&im_format=avif" alt="" className='w-10 h-10 rounded-full'/>
                <p>Dhanalaxmi</p>

            </div>
            <p className='text-xl tracking-tighter font-medium'>Host details</p>
            <p className='text-base leading-3 mt-4'>Response rate: 100%</p>
            <p className='text-base'>Responds within an hour</p>
            <button className='bg-black text-white py-3 px-5 font-medium w-fit rounded-lg my-8'>Message Host</button>
            <hr className='my-3' />
            <div className='flex items-center gap-3 '>
            <img src={last} alt=""  className='w-6 h-6'/>
            <p className='text-xs'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
            </div>
            </div>
            </div>

          
          
        </div>
    );
};

export default UserInfo;
