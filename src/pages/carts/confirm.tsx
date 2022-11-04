import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/itemCards-side";
import { RecognizeList } from "components/recognizeList"
import { ShoppingList } from "components/shoppingList";
import { Loader } from 'components/loader';
import style from "../../styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import styles from "../../styles/itemCards.module.css"




const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Home = () => {

  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/carts`,
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
                <div className="mb-1 rounded-md">
                  <div className="grid gap-1 grid-cols-7  h-24 ">
                    <p className=' items-center flex justify-center col-span-2'>お届け先</p>
                    <div className="col-span-4 items-center flex ">
                      <ul>
                        <li>山田太郎　様</li>
                        <li>〒214-0014</li>
                        <li>東京都中央区 </li>
                        <li>アパートメント　１０１号室</li>
                        <li>123-1234-1234</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="grid grid-cols-7 h-24">
                <p className="items-center flex justify-center col-span-2">受け取り方法</p>
                <p className="items-center flex col-span-5 ">今回のご注文は対面での受け取りになります。</p>
              </div> */}

                <div>
                  <div className="grid grid-cols-7 gap-2 h-24">
                    <p className="items-center flex justify-center col-span-2">お支払い方法</p>
                    <p className="items-center flex  col-span-5 ">クレジットカード</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                <button className={`mx-1  rounded-lg py-1 px-2 h-8 w-12 ${styles.changeButtonItemCards}`}> 変更</button>
              </div>
            </div>

          </div>


          <button className="bg-red-700 text-white rounded-lg p-2  mt-12 h-12 w-80 shadow-lg"> 注文を確定する</button>


        </div>
      </div>

    </>
  );
}

export default Home;
