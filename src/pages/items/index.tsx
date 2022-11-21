import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, Fragment } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsWrap } from "../../../components/Organisms/itemCards-wrap";
import { SearchForm } from "components/Molecules/searchForm"
import { Loader } from "components/Atoms/loader";
import { SearchNavigationbar } from "components/Organisms/searchNavigationbar";
import { Transform } from "@material-ui/icons";
import ModalWindow from "../../../components/Organisms/modal"



const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {


  const [searchWord, setSearchWord] = useState("")
  // 検索フォームでEnterが押されたかどうか
  const [searchState, setSearchState] = useState(false)
  const [sort, setSort]: any = useState("")



  const router = useRouter();
  let categoryWord: string | string[] = "";

  // routerで引き渡された値をセット
  if (router.query.category) {
    categoryWord = router.query.category;
  }


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

  console.log(categoryWord.length)
  const categoryitemList: any = [];
  // カテゴリ検索
  data.map((ItemData: any, index: number) => {
    if (categoryWord.length !== 0) {
      if (ItemData.category.includes(categoryWord)) {
        categoryitemList.push(ItemData)
      }
    } else {
      categoryitemList.push(ItemData)
    }
  })


  if (sort.length !== 0) {
    if (sort === "安い") {
      categoryitemList.sort(function (a: any, b: any) {
        if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      })
    }
    if (sort === "高い") {
      categoryitemList.sort(function (a: any, b: any) {
        if (a.price < b.price) {
          return 1;
        } else {
          return -1;
        }
      })
    }
    if (sort === "おすすめ") {
      categoryitemList.sort(function (a: any, b: any) {
        if (a.recommend > b.recommend) {
          return 1;
        } else {
          return -1;
        }
      })
    }
    if (sort === "人気") {
      categoryitemList.sort(function (a: any, b: any) {
        if (a.popular > b.popular) {
          return 1;
        } else {
          return -1;
        }
      })
    }
  }





  console.log(categoryitemList)

  const itemList: any = [];
  // フォームで検索
  categoryitemList.map((ItemData: any, index: number) => {
    // Enterが押された時
    if (searchState === true) {
      // 検索ワードと一致した場合
      if (ItemData.name.match(searchWord)) {
        itemList.push(ItemData);
      }
    } else {
      itemList.push(ItemData);
    }
  })




  // エラー表示
  const ErrorMessage = () => {
    if (itemList.length === 0) {

      return (
        <>
          <p className=" translate-y-8 translate-x-24 ">該当する商品がありません。</p>
        </>
      )
    } else {
      return <></>
    }
  }

  // 該当商品がない場合、全ての商品を表示
  const SearchItemsNone = (props: any) => {
    console.log(itemList.length)
    if (itemList.length === 0) {
      return (
        <>
          
        {data.map((itemData: any, index: number)=>{
          return(
            <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />
          )
        })}
          {(() => {

            // if (itemList.length === 0) {
              // data.map((itemData: any, index: number) => {
              //   return (
              //     <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />
              //   )
              // })
            // }
            // if (categoryitemList.length !== 0) {
            //   categoryitemList.map((itemData: any, index: number) => {
            //     return (
            //       <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />
            //     )
            //   })
            // } else {
            //   data.map((itemData: any, index: number) => {
            //     return (
            //       <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />
            //     )
            //   })
            // }



          })()}


        </>
      )
    } else {
      return <></>
    }
  }


  return (
    <>

      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5   ">


        <div className=" flex flex-nowrap " style={{ height: "100%" }} >

          <div className="hidden md:flex">
            <SearchNavigationbar />
          </div>

          <div className="float-right " style={{ height: "100%" }}>
            <div className="container flex flex-wrap justify-center items-center mx-auto pt-5 px-5  ">
              <SearchForm setSearchWord={setSearchWord} setSearchState={setSearchState} />
            </div>
            <div className=" flex flex-wrap justify-center items-center mr-36   ">
              <ErrorMessage />
            </div>

            <div className="flex flex-wrap justify-center items-center mt-12">
              <ul className="flex float-right">
                <li className="mr-4 ">
                  <button type="button" className="border-b 
                  text-gray-400
                  focus:text-gray-900
                  focus:border-gray-900 text-md"
                    onClick={() => {
                      setSort("人気")
                    }}
                  >
                    人気順
                  </button>
                </li>
                <li className="mr-4 ">
                  <button type="button" className="border-b 
                  text-gray-400
                  focus:text-gray-900
                  focus:border-gray-900 text-md"
                    onClick={() => {
                      setSort("安い")
                    }}

                  >
                    価格が安い順
                  </button>
                </li>
                <li className="mr-4 ">
                  <button type="button" className="border-b 
                  text-gray-400
                  focus:text-gray-900
                  focus:border-gray-900 text-md"
                    onClick={() => {
                      setSort("高い")
                    }}
                  >
                    価格が高い順
                  </button>
                </li>
                <li className="mr-1 ">
                  <button type="button" className="border-b 
                  text-gray-400
                  focus:text-gray-900
                  focus:border-gray-900 text-md"
                    onClick={() => {
                      setSort("おすすめ")
                    }}
                  >
                    おすすめ順
                  </button>
                </li>
              </ul>
            </div>

            <div className=" my-12 grid gap-10 grid-cols-1 mx-32
          sm:grid-cols-2  sm:mx-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
          
      ">
              {
                itemList.map((itemData: any, index: number) => {
                  return (
                    <ItemCardsWrap name={itemData.name} price={itemData.price} imagePath={itemData.imagePath} key={index} id={itemData.id} />
                  )
                })
              }
              <SearchItemsNone />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:8000/items`);
//   const json = await res.json();


//   return {
//     props: { data: json },
//     revalidate: 1
//   }
// }

export default Home;
