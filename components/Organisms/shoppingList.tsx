import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { RecognizeList } from "../Organisms/recognizeList"
import { ItemCardsWrapRecognize } from "../Organisms/itemCards-wrap";
import style from "../../src/styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';


export const ShoppingList = (props: any) => {

  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 ">
        {/* <h1 className='flex font-bold text-2xl mb-8'>{props.title}</h1> */}

        {
          props.data.map((shoppingItems: {
            name: string,
            imagePath: string,
            price: number,
            quantity: number
          },
            index: number) => {
              console.log(shoppingItems.quantity)
            return (

              <div className={` mb-1 grid sm:gap-1 grid-cols-5 rounded-md ${style.gridWidth} 
                        `} key={index}>
                <ItemCardsSide
                  name={shoppingItems.name}
                  imagePath={shoppingItems.imagePath}
                  price={shoppingItems.price}
                  quantity={shoppingItems.quantity}
                  pageName={props.pageName}
                />
              </div>


            )
          })
        }

        <hr className={`${style.line}`} />
        <div className=" py-5 px-5 ">
          <p>合計金額&nbsp;&nbsp;&nbsp;￥<span className="text-lg">7000</span></p>
        </div>

      </div>
    </>
  );
}

export default ShoppingList;
