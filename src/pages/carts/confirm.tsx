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
import { ConfirmFrom } from 'components/Organisms/confirmFrom';
import { createContext } from 'react';


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const UserName = createContext("")

export const Home = () => {



  // ゲストID
  const [gestIdValue, SetGestIdValue] = useState("")

  // お届け情報変更　status
  const [ordererStateChange, SetordererStateChange] = useState(false)

    // 注文者情報
    const [ordererName, SetOrdererName] = useState("")
    const [ordererFirstName, SetOrdererFirstName] = useState("")
    const [ordererLastName, SetOrdererLastName] = useState("")
    const [ordererMail, SetOrdererMail] = useState("")
    const [ordererAddress, SetOrdererAddress] = useState("")
    const [ordererTel, SetOrdererTel] = useState("")
    const [ordererZip, SetOrdererZip] = useState("")
    const [ordererPayMethod, SetOrdererPayMethod] = useState("現金払い")

  // Form用
  const [lastNameValue, SetLastNameValue] = useState("");
  const [lastNameErrorState, SetLastNameErrorState] = useState("init");

  const [firstNameValue, SetFirstNameValue] = useState("");
  const [firstNameErrorState, SetFirstNameErrorState] = useState("init");


  const [mailValue, SetMailValue] = useState("");
  const [mailErrorState, SetMailErrorState] = useState("init");

  const [telValue, SetTelValue] = useState("");
  const [telErrorState, SetTelErrorState] = useState("init");

  const [zipValue, SetZipValue] = useState("");
  const [zipErrorState, SetZipErrorState] = useState("init");

  const [addressValue, SetAddressValue] = useState("");
  const [addressErrorState, SetAddressErrorState] = useState("init");

  const [errorFlag, SetErrorFlag] = useState("false");

  const [orderUserInfoChange, SetOrderUserInfoChange ] = useState(false)


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
    `http://localhost:8000/users?gestId=${gestIdValue}`,
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



  const OrdererInformation = () => {

    if (ordererStateChange === false) {
      if (data) {

        return (
          <>
            <div className='bg-gray-100 pt-5 grid grid-cols-7'>
              <div className='col-span-6'>

                <UserInfomation
                  name={data[0].name}
                  address={data[0].address}
                  tel={data[0].tel}
                  zip={data[0].zip}
                  ordererName={ordererName}
                  ordererAddress={ordererAddress}
                  ordererTel={ordererTel}
                  ordererZip={ordererZip}
                  orderUserInfoChange={orderUserInfoChange}
                />

                <PayMethod ordererPayMethod={ordererPayMethod} />
                <DateOfDelivery />
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <button className={`mx-1  rounded-lg py-1 px-2 h-8 w-12 ${styles.changeButtonItemCards}`}
                  onClick={() => {
                    SetordererStateChange(true)
                    // SetOrdererName(data[0].name)
                    SetOrdererMail(data[0].mail)
                    SetOrdererAddress(data[0].address)
                    SetOrdererTel(data[0].tel)
                    SetOrdererZip(data[0].zip)

                    SetLastNameErrorState("ok")
                    SetFirstNameErrorState("ok")
                    SetMailErrorState("ok")
                    SetZipErrorState("ok")
                    SetTelErrorState("ok")
                    SetAddressErrorState("ok")


                      let split = ordererName.split(" ")
                      SetOrdererLastName(split[0])
                      SetOrdererFirstName(split[1])
                      console.log(ordererLastName)
                    

                  }}
                > 変更</button>
              </div>
            </div>
          </>
        )
      } else {
        return <></>
      }
    } else {
 
      return (
        <>

          <ConfirmFrom
            lastNameValue={lastNameValue} SetLastNameValue={SetLastNameValue}
            firstNameValue={firstNameValue}
            SetFirstNameValue={SetFirstNameValue}
            firstNameErrorState={firstNameErrorState} SetFirstNameErrorState={SetFirstNameErrorState}
            lastNameErrorState={lastNameErrorState}
            SetLastNameErrorState={SetLastNameErrorState}

            mailValue={mailValue}
            SetMailValue={SetMailValue}
            mailErrorState={mailErrorState} SetMailErrorState={SetMailErrorState}
            displayFlag={true}

            telValue={telValue} SetTelValue={SetTelValue} telErrorState={telErrorState} SetTelErrorState={SetTelErrorState}

            zipValue={zipValue} SetZipValue={SetZipValue} zipErrorState={zipErrorState} SetZipErrorState={SetZipErrorState}

            addressValue={addressValue}
            SetAddressValue={SetAddressValue} addressErrorState={addressErrorState} SetAddressErrorState={SetAddressErrorState}

            SetErrorFlag={SetErrorFlag}
            errorFlag={errorFlag}

            SetOrdererName={SetOrdererName}
            SetordererFirstName={SetOrdererFirstName}
            SetOrdererLastName={SetOrdererLastName}
            SetOrdererMail={SetOrdererMail}
            SetOrdererAddress={SetOrdererAddress}
            SetOrdererTel={SetOrdererTel}
            SetOrdererZip={SetOrdererZip}
            ordererName={ordererName}
            ordererLastName={ordererLastName}
            ordererFirstName={ordererFirstName}
            ordererMail={ordererMail}
            ordererAddress={ordererAddress}
            ordererTel={ordererTel}
            ordererZip={ordererZip}
            ordererPayMethod={ordererPayMethod}

            SetordererStateChange={SetordererStateChange}
            SetOrderUserInfoChange={SetOrderUserInfoChange}
          />
        </>
      )

    }
  }



  return (
    <>

      <div>

        <div className=" flex flex-wrap justify-center items-center mt-7">
          <h1 className="" style={{ color: "#75ad9d", fontSize: "30px" }}>注文内容の確認</h1>
        </div>


        <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 mb-12 ">

          <ShoppingList
            pageName="confirm" />

          <div className={`${style.gridWidth} `}>
            <h2 className="mb-3 text-xl">お届け先情報</h2>
            {/* <div className='bg-gray-100 pt-5 grid grid-cols-7'>
              <div className='col-span-6'>

                <UserInfomation
                  gestIdValue={gestIdValue}
                  SetOrdererName={SetOrdererName}
                  SetOrdererMail={SetOrdererMail}
                  SetOrdererAddress={SetOrdererAddress}
                  SetOrdererTel={SetOrdererTel}
                  SetOrdererZip={SetOrdererZip}
                />

                <PayMethod ordererPayMethod={ordererPayMethod} />
                <DateOfDelivery />
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <button className={`mx-1  rounded-lg py-1 px-2 h-8 w-12 ${styles.changeButtonItemCards}`}> 変更</button>
              </div>
            </div> */}
            <OrdererInformation />

          </div>

          <button className="bg-red-700 text-white rounded-lg p-2  mt-12 h-12 w-80 shadow-lg" onClick={() => {
            const orderData = data;
            const gestID = gestIdValue;
            const ordererInformation = {
              name: ordererName,
              mail: ordererMail,
              address: ordererAddress,
              zip: ordererZip,
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
