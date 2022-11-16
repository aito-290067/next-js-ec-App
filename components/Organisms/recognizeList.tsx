import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { ItemCardsWrapRecognize } from "../Organisms/itemCards-wrap";
import style from "../../src/styles/itemList.module.css"
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

      <div className={` my-5`}>
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
