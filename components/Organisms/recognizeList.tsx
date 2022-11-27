import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { ItemCardsWrapRecognize } from "../Organisms/itemCards-wrap";
import style from "../../src/styles/itemList.module.css"
import Image from 'next/image';
import Head from 'next/head';
import React, { useRef, useState } from "react";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const RecognizeList = (props:any) => {

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/items`,
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
  
  const categoryitemList:any = []
  const recommendItemList = [];
  
  if(props.category){
    data.map((items:any,incdex:number)=>{
      if((props.category.includes(items.category) || items.category.includes(props.category) ) && props.itemId !== items.id){
        categoryitemList.push(items)
      }
    })
    
    categoryitemList.sort(function (a: any, b: any) {
      if (a.recommend > b.recommend) {
        return 1;
      } else {
        return -1;
      }
    })
    console.log("a",categoryitemList)
    
    if(categoryitemList.length < 5){
      for(let i:number = 0; i < categoryitemList.length  ;i++){
        recommendItemList.push(categoryitemList[i])
      }
    }else{
      for(let i:number = 0; i < 5  ;i++){
        recommendItemList.push(categoryitemList[i])
      }
  }
    console.log("b",recommendItemList.length)

  }else{
    data.sort(function (a: any, b: any) {
      if (a.recommend > b.recommend) {
        return 1;
      } else {
        return -1;
      }
    })
    for(let i:number = 0; i < 5 ;i++){
      recommendItemList.push(data[i])
    }
  }
  
  
  if(recommendItemList.length < 5){
    data.sort(function (a: any, b: any) {
      if (a.recommend > b.recommend) {
        return 1;
      } else {
        return -1;
      }
    })
    
  let number:number = 0;
  while (recommendItemList.length < 4){
    if(props.itemId !== data.id ){
      recommendItemList.push(data[number])
      number++
    }
  }
    
}

console.log("c",recommendItemList)
// console.log(categoryitemList)

  return (
    <>

      <div className={` my-5`}>
        <h5 className='sm:mb-5'>{props.title}</h5>
        <div className='flex  '>
          {
            recommendItemList.map((items: any, index: number) => {
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
