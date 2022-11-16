import useSWR, { useSWRConfig } from 'swr';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/Organisms/itemCards-side";
import { RecognizeList } from "components/Organisms/recognizeList"
import { ShoppingList } from "components/Organisms/shoppingList";
import { Loader } from 'components/Atoms/loader';
import style from "../../styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import styles from "../../styles/itemCards.module.css"
import { UserInfomation } from 'components/Organisms/userInfomation';
import { PayMethod } from 'components/Molecules/payMethod';
import { DateOfDelivery } from 'components/Molecules/dateOfDelivery';




const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {

  // 注文者情報
  const [ordererName, SetOrdererName] = useState("")
  const [ordererMail, SetOrdererMail] = useState("")
  const [ordererAddress, SetOrdererAddress] = useState("")
  const [ordererTel, SetOrdererTel] = useState("")
  const [ordererPayMethod, SetOrdererPayMethod] = useState("現金払い")
  // ゲストID
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

  console.log(data)
  // ${style.gridWidth}
  return (
    <>

      <div>

        <div className=" flex flex-wrap justify-center items-center mt-7">
          <h1 className="" style={{ color: "#75ad9d", fontSize: "30px" }}>注文内容の確認</h1>
        </div>


        <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 mb-12 ">

          <ShoppingList data={data} pageName="confirm" title="注文内容の確認" />

          <div className={`${style.gridWidth} `}>
            <h2 className="mb-3 text-xl">お届け先情報</h2>
            <div className='bg-gray-100 pt-5 grid grid-cols-7'>
              <div className='col-span-6'>

                <UserInfomation 
                  gestIdValue={gestIdValue} 
                  SetOrdererName={SetOrdererName}
                  SetOrdererMail={SetOrdererMail}
                  SetOrdererAddress={SetOrdererAddress}
                  SetOrdererTel={SetOrdererTel}
                />

                {/* <div className="grid grid-cols-7 h-24">
                <p className="items-center flex justify-center col-span-2">受け取り方法</p>
                <p className="items-center flex col-span-5 ">今回のご注文は対面での受け取りになります。</p>
              </div> */}
                <PayMethod ordererPayMethod={ordererPayMethod}/>
                <DateOfDelivery />
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <button className={`mx-1  rounded-lg py-1 px-2 h-8 w-12 ${styles.changeButtonItemCards}`}> 変更</button>
              </div>
            </div>

          </div>

          <button className="bg-red-700 text-white rounded-lg p-2  mt-12 h-12 w-80 shadow-lg" onClick={() => {
            const orderData = data;
            const gestID = gestIdValue;
            const ordererInformation = {
              name: ordererName,
              mail: ordererMail,
              address: ordererAddress,
              tel: ordererTel,
              payMethod: ordererPayMethod
            }

            fetch(`http://localhost:8000/order`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ orderData, gestID, ordererInformation })
            }).then((response) => {
              return response.json();
            }).then((data) => {
              router.push("/carts/finish");
            })
          }}> 注文を確定する</button>


        </div>
      </div>

    </>
  );
}

export default Home;
