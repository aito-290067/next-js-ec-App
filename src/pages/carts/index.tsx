import useSWR, { useSWRConfig } from 'swr';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { RecognizeList } from "components/Organisms/recognizeList"
import { ShoppingList } from "components/Organisms/shoppingList";
import style from "../../styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import { Loader } from 'components/Atoms/loader';


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {
  
  
  const [gestIdValue, SetGestIdValue] = useState("")
  const [loginStatus, SetLoginStatus] = useState("")

  useEffect(() => {

    const splitCookie = document.cookie.split(';');
    const list = [];

    for (let i = 0; i < splitCookie.length; i++) {
      list.push(splitCookie[i].split('='));
    }

    list.map((cookieData, index) => {
      // ゲストID取得
      if (cookieData.includes(" gestId")) {
        SetGestIdValue(cookieData[1]);
      }
      if (cookieData.includes("login")) {
        SetLoginStatus(cookieData[1]);
      }
    })

  }, [])

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/carts?gestId=${gestIdValue}`,
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

      <div className="mb-7">
        <div className=" flex flex-wrap justify-center items-center mt-7">
          <h1 className="text-bold" style={{ color: "#75ad9d", fontSize: "30px" }}>ショッピングカート</h1>
        </div>
        <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 ">

          <ShoppingList data={data} title="ショッピングカート" />

          <button className="bg-red-700 text-white rounded-lg p-2  m-4 h-12 w-80 shadow-lg" 
          type="button"
            
          onClick={()=>{      
            if(!loginStatus){
              console.log(loginStatus);
              router.push("/users/login");
              document.cookie = "carts=confirm; path=/;";
            }else{
              console.log(loginStatus);
              router.push("/carts/confirm");
            }
          }}
          > レジへ進む</button>

          <RecognizeList title="おすすめ" />

        </div>
      </div>

    </>
  );
}

export default Home;
