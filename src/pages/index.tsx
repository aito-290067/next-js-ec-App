import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsWrap } from "../../components/Organisms/itemCards-wrap";
import { SearchForm } from "components/Molecules/searchForm"
import { Loader } from "components/Atoms/loader";
import RecognizeList from "../../components/Organisms/recognizeList";
import { Calendar } from "components/Molecules/calendar";
import { Information } from "components/Molecules/Information";
import { Map } from "components/Molecules/map";
import { NewItemsSection, RecognizeItesSection, ItemsSection } from "../../components/Molecules/topItemListSection";
import { SearchNavigationbar } from "components/Organisms/searchNavigationbar";
import { Slide } from "components/Molecules/swiper";
import { SlideCursor } from "components/Molecules/swiperCursor";


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/items`,
    fetcher
  );

  if (error) return (
    <div className="container flex flex-wrap justify-center items-center mx-auto py-48 px-5 ">An error has occurred.</div>
  );

  if (!data) return (
    <>
      <Loader />
    </>
  );

  return (
    <>

      <div className="container flex flex-wrap justify-center items-center mx-auto   ">
        <div className="mb-10 -translate-y-8 abusolute">
          <Slide />
          <div className="bg-gray-50 pb-4 sm:mt-18 mt-12">
          <h3 className="text-2xl m-4">特集</h3>
          <SlideCursor />
          </div>
        </div>



        <main className="mb-5 container flex flex-wrap justify-center items-center mx-auto ">
          <div className=" flex " style={{ height: "100%" }} >
            <div className="hidden xl:flex xl:felx-nowrap xl:justify-start mx-auto">
              <SearchNavigationbar />
            </div>

            <div className="float-right " style={{ height: "100%" }} >

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
