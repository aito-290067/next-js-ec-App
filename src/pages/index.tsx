import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsWrap } from "components/itemCards-wrap";
import { SearchForm } from "components/searchForm"
import { Loader } from "components/loader";
import RecognizeList from "components/recognizeList";
import { Calendar } from "components/calendar";
import { Information } from "components/Information";
import { Map } from "components/map";
import { NewItemsSection, RecognizeItesSection ,ItemsSection} from "components/topItemListSection";
import { SearchNavigationbar } from "components/searchNavigationbar";
import { Slide } from "components/swiper";
import style from "../styles/swiper.module.css"
import Swiper from "swiper";



const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/items`,
    fetcher
  );

  if (error) return (
    <div>An error has occurred.</div>
  );

  if (!data) return (
    <>
      <Loader />
    </>
  );

  return (
    <>

      <div className="container flex flex-wrap justify-center items-center mx-auto   ">
        <div className="my-10">
          <Slide />
          {/* <div className={`${style.slideShow}`}>
          <Image src="/Christmas-background.jpg" width={1000} height={600} alt="topImage" />
          </div> */}
        </div>



        <main className="my-5">

          <div className=" flex flex-nowrap " style={{ height: "100%" }} >

            <SearchNavigationbar />

            <div className="float-right " style={{ height: "100%" }}>

              <NewItemsSection />
              <ItemsSection />
              <RecognizeItesSection />
              <ItemsSection />
              <Information />
              <Map />

            </div>

          </div>

        </main>



      </div>
    </>
  );
}

export default Home;
