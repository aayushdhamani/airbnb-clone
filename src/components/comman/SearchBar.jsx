import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../../assets/nav-icons/1.jpg';
import img2 from '../../assets/nav-icons/2.jpg';
import img3 from '../../assets/nav-icons/3.jpg';
import img4 from '../../assets/nav-icons/4.jpg';
import img6 from '../../assets/nav-icons/6.jpg';
import img7 from '../../assets/nav-icons/7.jpg';
import img8 from '../../assets/nav-icons/8.jpg';
import img9 from '../../assets/nav-icons/9.jpg';
import img10 from '../../assets/nav-icons/10.jpg';
import img11 from '../../assets/nav-icons/11.jpg';
import img12 from '../../assets/nav-icons/12.jpg';
import img13 from '../../assets/nav-icons/13.jpg';
import img14 from '../../assets/nav-icons/14.jpg';
import img15 from '../../assets/nav-icons/15.jpg';
import img16 from '../../assets/nav-icons/16.jpg';
import img17 from '../../assets/nav-icons/17.jpg';
import img18 from '../../assets/nav-icons/18.jpg';
import img19 from '../../assets/nav-icons/19.jpg';
import img20 from '../../assets/nav-icons/20.jpg';
import img21 from '../../assets/nav-icons/21.jpg';
import img22 from '../../assets/nav-icons/22.jpg';
import img23 from '../../assets/nav-icons/23.jpg';
import img24 from '../../assets/nav-icons/24.jpg';
import img25 from '../../assets/nav-icons/25.jpg';
import img26 from '../../assets/nav-icons/26.jpg';
import img27 from '../../assets/nav-icons/27.jpg';
import img28 from '../../assets/nav-icons/28.jpg';
import img29 from '../../assets/nav-icons/29.jpg';
import img30 from '../../assets/nav-icons/30.jpg';

const SearchBar = () => {
 
  const navItems = [
    img1, img2, img3, img4, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17,
    img18, img19, img20, img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30,
  ];

  return (
    <div className="w-9/12  relative">
      <Swiper
        spaceBetween={26}
        slidesPerView={9}
        navigation 
        modules={[Navigation]}
      >
          
            {navItems.map((item, index) => (
            <SwiperSlide key={index} >
                <img
                src={item}
                alt={`Nav Item ${index}`}
                className="w-7 h-7 object-cover"
                />
            </SwiperSlide>
            ))}

      </Swiper>

     
    </div>
  );
};

export default SearchBar;
