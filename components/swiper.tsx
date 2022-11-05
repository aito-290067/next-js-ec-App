import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination,  EffectFade } from 'swiper'
SwiperCore.use([Navigation])
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import  style  from "../src/styles/swiper.module.css"
import { Autoplay  } from "swiper";
SwiperCore.use([Pagination, EffectFade,  Autoplay ])


export const Slide = () => {
  return (
    <div 
    style={{
       width: "1200px" 
       }}>
      <Swiper
      // modules={[Autoplay, Pagination]}
      // centeredSlides={true}
      slidesPerView={1}
      pagination={{
        clickable: true
        // bulletClass: `swiper-pagination-bullet ${style.custom_bullet}`, 
        // bulletActiveClass: `swiper-pagination-bullet-active ${style.custom_bullet_active}`, 
      }}
      navigation={true}
      // autoplay={{ 
      //   delay: 1000, 
      //   pauseOnMouseEnter: true,
      //   disableOnInteraction: true 
      // }}
      // speed={100}
      loop={true}
      // effect="fade"
      // fadeEffect={{ crossFade: true }}

      >
        <SwiperSlide className=' px-24 pb-12' ><Image src="/plants-bg.jpg" width={1000} height={600} alt="topImage" className='' /></SwiperSlide>
        <SwiperSlide  className=' px-24 pb-12'><Image src="/bouquet-4-bg.jpg" width={1000} height={600} alt="topImage" /></SwiperSlide>
        <SwiperSlide  className=' px-24 pb-12'><Image src="/Christmas-background.jpg" width={1000} height={600} alt="topImage" /></SwiperSlide>
        <SwiperSlide  className=' px-24 pb-12'><Image src="/Christmas-background-allaround.jpg" width={1000} height={600} alt="topImage" /></SwiperSlide>

      </Swiper>

    </ div>
  )
}
