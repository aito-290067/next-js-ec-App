import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { ItemCardsSide } from "components/itemCards-side";
import { RecognizeList } from "components/recognizeList"
import { ShoppingList } from "components/shoppingList";
import style from "../../styles/shoppingCart.module.css"
import Image from 'next/image';
import Head from 'next/head';
import { Loader } from 'components/loader';


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
          <h1 className="text-bold" style={{ color: "#75ad9d", fontSize: "30px" }}>ショッピングカート</h1>
        </div>
        <div className="container flex flex-col justify-center items-center mx-auto py-5 px-5 ">

          <ShoppingList data={data} title="ショッピングカート" />

          <button className="bg-red-700 text-white rounded-lg p-2  m-4 h-12 w-80 shadow-lg" > レジへ進む</button>

          <RecognizeList title="おすすめ"/>

        </div>
      </div>

    </>
  );
}

export default Home;
