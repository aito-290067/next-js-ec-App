import Image from "next/image";
import Link from "next/link";
import { Favorite } from "../Molecules/favorite";
import style from "../../src/styles/itemListWrap.module.css"

export const ItemCardsWrap = (props: any) => {
  return (

    <div className="w-48 h-80 bg-gray-100 rounded-lg border border-gray-200 shadow-lg  cursor-pointer">
      <Link href={`/items/${props.id}`}>
        <a>
          <Image
            className="
            rounded-t-lg 
            "
            src={props.imagePath}
            alt=""
            width={200}
            height={200}
          />
        </a>
      </Link>
      <div className="px-4 mt-3  flex">
        <Link href={`/items/${props.id}`}>
          <a>
            <p className="mb-2  text-sm font-nomal tracking-tight 
            w-32
            text-gray-800 dark:text-white overflow-hidden">
              {props.name}
            </p>
          </a>
        </Link>
        <div className=" text-right  ml-auto">
          <Favorite />
        </div>
      </div>
      <h5 className="mb-3 text-lg font-bold text-gray-500 dark:text-gray-400 text-center">
        {props.price}円（税込）
      </h5>

      
    </div>
  );
}


export const ItemCardsWrapRecognize = (props: any) => {
  let id = props.id
  return (

    <div className="w-24 sm:w-32 h-48 sm:h-70 cursor-pointer mx-1 ">
      <Link href={`/items/${id}`}>
        <a>
          <Image
            src={props.imagePath}
            alt=""
            width={150}
            height={150}
          />
        </a>
      </Link>
      <div className="flex">

        <div className="px-2">
          <Link href={`/items/${props.id}`}>
            <a>
              <p className={`mb-2 text-sm pt-0.5 text-gray-500 ${style.recognizeItemName}`}>
                {props.name}
              </p>
            </a>
          </Link>
        </div>

        <div className="px-2 text-right ">
          <Favorite />
        </div>
      </div>

      <h5 className="mb-3 text-sm text-gray-500 text-center">
        {props.price}円<span className="block sm:inline-block">（税込）</span>
      </h5>

      {/* <button className={`text-center text-white rounded-lg ml-2 ${style.recognizeButton}`}>カートに入れる</button> */}
    </div>
  );
}
