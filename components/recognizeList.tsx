import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/itemCards-side";
import { ItemCardsWrapRecognize } from "components/itemCards-wrap";
import style from "../src/styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper";


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const RecognizeList = (props:any) => {

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/recognize`,
    fetcher
  );

  if (error) return (
    <div></div>
  );

  if (!data) return (
    <>
      {/* <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div> */}
      <div></div>
    </>
  );


  return (
    <>

      {/* <Swiper
        slidesPerView={4}
        spaceBetween={1}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          prevEl: "#button_prev",
          nextEl: "#button_next"
        }}
        modules={[Pagination, Navigation]}
        className={`mySwiper 
           ${style.Width}`}
      >

        <div>
          <SwiperSlide  >
            < ItemCardsWrapRecognize name={data[0].name} price={data[0].price} imagePath={data[0].imagePath} key={data[0].id} />
          </SwiperSlide>
          <SwiperSlide >
            < ItemCardsWrapRecognize name={data[0].name} price={data[0].price} imagePath={data[0].imagePath} key={data[0].id} />
          </SwiperSlide>
          <SwiperSlide >
            < ItemCardsWrapRecognize name={data[0].name} price={data[0].price} imagePath={data[0].imagePath} key={data[0].id} />
          </SwiperSlide>
          <SwiperSlide >
            < ItemCardsWrapRecognize name={data[0].name} price={data[0].price} imagePath={data[0].imagePath} key={data[0].id} />
          </SwiperSlide>
          <SwiperSlide >
            < ItemCardsWrapRecognize name={data[0].name} price={data[0].price} imagePath={data[0].imagePath} key={data[0].id} />
          </SwiperSlide>
        <div id="button_prev" className="swiper-button-prev "></div>
        <div id="button_next" className="swiper-button-next"></div>

        </div>
      </Swiper> */}


      <div className={`${style.recognizeList} mt-5`}>
        <h5 className='mb-5'>{props.title}</h5>
        <div className='flex  '>
          {
            data.map((items: any, index: number) => {
              return (
                < ItemCardsWrapRecognize name={items.name} price={items.price} imagePath={items.imagePath} id={items.id} key={items.id} />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default RecognizeList;
