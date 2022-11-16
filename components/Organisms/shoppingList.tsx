import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { RecognizeList } from "../Organisms/recognizeList"
import { ItemCardsWrapRecognize } from "../Organisms/itemCards-wrap";
import style from "../../src/styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';


export const ShoppingList = (props: any) => {
  const [quantityAdd, setQuantityAdd] = useState(0)
  
  // カートの商品の金額を配列に入れる
  const priceList:any = [];
    props.data.map((itemData:any, index:number)=>{
      priceList.push(itemData.price * itemData.quantity)
    })

  //合計金額算出 
    let totalPrice = priceList.reduce(function(sum:number, element:number){
      return Number(sum) + Number(element);
    }, 0);



  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 ">

        {
          props.data.map((shoppingItems: {
            name: string,
            imagePath: string,
            price: number,
            quantity: number
          },
            index: number) => {
    
            return (
              <div className={` mb-1 grid sm:gap-1 grid-cols-5 rounded-md ${style.gridWidth} 
                        `} key={index}>
                <ItemCardsSide
                  name={shoppingItems.name}
                  imagePath={shoppingItems.imagePath}
                  price={shoppingItems.price}
                  quantity={shoppingItems.quantity}
                  pageName={props.pageName}
                  quantityAdd={quantityAdd}
                  setQuantityAdd={setQuantityAdd}
                />
              </div>


            )
          })
        }

        <hr className={`${style.line}`} />
        <div className=" py-5 px-5 ">
          <p>合計金額&nbsp;&nbsp;&nbsp;￥<span className="text-lg">{totalPrice}</span></p>
        </div>

      </div>
    </>
  );
}

export default ShoppingList;
