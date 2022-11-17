import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { SearchForm } from "components/Molecules/searchForm"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import style from "../../styles/itemListWrap.module.css"
import RecognizeList from "components/Organisms/recognizeList";


// const fetcher = (url: any) => fetch(url).then((res) => res.json());


export const Details = ({ data }: { data: any
  // { name: string, price: number, info: string, imagePath: string, id: any, quantity: number } 
}
) => {
  const router = useRouter();
  const [gestIdValue, SetGestIdValue] = useState("")

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
    })

  }, [])

  const addItemsRegister = () => {

    // カートに商品情報・ゲストID追加
    console.log(`POST前 ${gestIdValue}`)
    const addCartItems = {
      name: data.name,
      price: data.price,
      quantity: 1,
      imagePath: data.imagePath,
      gestId: gestIdValue
    };


    fetch(`http://localhost:8000/carts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addCartItems)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      alert("追加しました。");
    }).then(() => {
      router.push("/carts");
    })

  }

  return (
    <>

      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5 bg-white-100 mb-12">

        <div className=" my-12 grid  grid-cols-1
        lg:grid-cols-2
        ">
          <div className="items-center  m-auto  ">

            <div className={`  `}>
              <div className={`z-1`}>
                <Image
                  src={data.imagePath}
                  alt=""
                  width={500}
                  height={500}
                // layout={"fixed"}
                />
              </div>
            </div>
          </div>

          <div className="m-12 ">
            <p className="mb-4 text-xl text-gray-600">{data.name}</p>
            <h5 className="mb-8 text-2xl 
            font-bold
            text-green-900">￥{data.price}<span className="text-sm text-gray-500">税込</span></h5>
            <p className="mb-4 text-sm">この商品の高さの目安は<span className="text-green-900 text-bold text-lg">～５０ｃｍ</span>になります。</p>

            <hr className="mb-6" />
            <p className="mb-6"><strong>送料無料</strong>&nbsp; 一部地域を除く</p>
            <hr className="mb-6" />
            {/* <div className="bg-gray-100 ">
              <p>お届け先の地域を選択すると、選択した地域への最短お届け日を確認できます。</p>
            </div> */}
            <form className="
            flex 
            flex-wrap justify-center
            lg:block
            ">
              <button
                className={` btn btn-blue border border-blue-100 text-white py-4 px-2 my-8 rounded-lg  ${style.CartInButton}`}
                onClick={addItemsRegister}
                type="button"
              >
                カートに入れる
              </button>
            </form>

            <div>
              <h5 className="mt-2 text-md text-bold">商品説明</h5>
              <p className="text-sm">
                {data.info}
              </p>
            </div>

          </div>

        </div>

        < RecognizeList title="おすすめ" />
      </div>
    </>
  );
}



export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:8000/items`);
  const json = await res.json();
  const list: any = [];

  // json.map((path: any) => {
  //   return (
  //     list.push({ params: { id: `${path.id}` } })
  //   )
  // })

  for (let i = 1; i <= json.length; i++) {
    list.push({ params: { id: `${i}` } })
  }

  return {
    paths: list,
    fallback: true
  }
}

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(`http://localhost:8000/items/${params.id}`);
  const json = await res.json();
  const test = params.id

  return {
    props: { data: json, id: params },
    revalidate: 1
  }
}


export default Details;
