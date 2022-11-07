import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsWrap } from "components/itemCards-wrap";
import { SearchForm } from "components/searchForm"
import { Loader } from "components/loader";


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

      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5   ">

        <div className="my-6">
          <SearchForm />
        </div>

        <div className=" my-12 grid gap-10 grid-cols-2
          sm:grid-cols-2 
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-4
          2xl:grid-cols-5
      ">

          {
            data.map((itemData: any, index: number) => {
              return (

                <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />

              )
            })
          }

        </div>
      </div>
    </>
  );
}

export default Home;
