import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

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
    { img: img1, route: 'TreeHouses' },
    { img: img2, route: 'Route2' },
    { img: img3, route: 'Route3' },
    { img: img4, route: 'Route4' },
    { img: img6, route: 'Route6' },
    { img: img7, route: 'Route7' },
    { img: img8, route: 'Route8' },
    { img: img9, route: 'Route9' },
    { img: img10, route: 'Route10' },
    { img: img11, route: 'Route11' },
    { img: img12, route: 'Route12' },
    { img: img13, route: 'Route13' },
    { img: img14, route: 'Route14' },
    { img: img15, route: 'Route15' },
    { img: img16, route: 'Route16' },
    { img: img17, route: 'Route17' },
    { img: img18, route: 'Route18' },
    { img: img19, route: 'Route19' },
    { img: img20, route: 'Route20' },
    { img: img21, route: 'Route21' },
    { img: img22, route: 'Route22' },
    { img: img23, route: 'Route23' },
    { img: img24, route: 'Route24' },
    { img: img25, route: 'Route25' },
    { img: img26, route: 'Route26' },
    { img: img27, route: 'Route27' },
    { img: img28, route: 'Route28' },
    { img: img29, route: 'Route29' },
    { img: img30, route: 'Route30' }
  ];
  

  return (
    <div className="w-9/12 relative">
      <Swiper
        spaceBetween={1}
        slidesPerView={10}
        navigation 
        modules={[Navigation]}
        className=''
      >
          
            {navItems.map((item, index) => (
          <SwiperSlide key={index} >
            <Link to={item.route}>
                <img
                src={item.img}
                
                alt={`Nav Item ${index}`}
                className="w-7 h-7 object-cover hover:cursor-pointer transition-all duration-200 hover:scale-110"
                />
            </Link>  
            </SwiperSlide>
            ))}
           

      </Swiper>

     
    </div>
  );
};

export default SearchBar;
