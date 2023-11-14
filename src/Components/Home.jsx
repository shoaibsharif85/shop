import React, { useRef, useState } from 'react';
import hero1 from '../assets/hero1.jpg'
import hero3 from '../assets/hero3.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation,  } from 'swiper/modules';

export default function App() {
  return (
    <div   className='text-white'>
    
      <Swiper data-aos="fade-down"
        spaceBetween={30}
        centeredSlides={true}
       
      
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
  
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide className='text-white'>
            <img src={hero1} alt="" className=' w-[100%] h-[50vh]'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero3} alt="" className='w-[100%] h-[50vh]'/>
          </SwiperSlide>
         
      
      </Swiper>
 </div>
  );
}
