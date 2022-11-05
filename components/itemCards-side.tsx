import Image from "next/image"
import style from "../src/styles/itemCards.module.css"



const ItemCardsSideImage = (props: { imagePath: string }) => {
  return (
    <>
      <div className='flex flex-wrap  mb-2'>
        <Image
          src={props.imagePath}
          alt=""
          width={200}
          height={200}
        />
      </div>
    </>
  )
}

const ItemCardsSideName = (props: { name: string }) => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
        <p className="text-sm m-1">
          {props.name}
        </p>
      </div>
    </>
  )
}

const ItemCardsSidePrice = (props: { price: number }) => {
  return (
    <>
      <div className=' text-center justify-center flex flex-wrap  items-center'>
        <p>￥{props.price}</p>
      </div>
    </>
  )
}

const ItemCardsSideQuentity = (props: { quentity: number | string }) => {
  return (
    <>
      <div className='grid justify-items-end flex flex-wrap  pr-9'>
        <p>{props.quentity} <span className="text-sm">点</span></p>
      </div>
    </>
  )
}

const ItemCardsSideCount = (props: { count: number }) => {
  return (
    <>
      <button className={`float-right text-blue-500 border border-gray-200 rounded-l-sm bg-gray-100 text-center  w-6`}>－</button>
      <div className={`float-right border-y border-gray-200  w-7 text-center `} >{props.count}</div>
      <button className={`float-right  text-blue-500 border border-gray-200 rounded-r-sm bg-gray-100 text-center  w-6`}>＋</button>
    </>
  )
}


export const ItemCardsSide = (props: any) => {

  if (props.pageName === "confirm") {
    return (
      <>
        <ItemCardsSideImage imagePath={props.imagePath} />
        <div className=' container m-auto justify-center items-center col-span-2 '>
          <ItemCardsSideName name={props.name} />
          <ItemCardsSideQuentity quentity={props.quantity} />

        </div>
        <ItemCardsSidePrice price={props.price} />
        <div className=' container flex flex-wrap justify-center items-center  '>
          <button className={`mx-1  rounded-lg py-1 px-2 ${style.changeButtonItemCards}`}> 変更</button>
        </div>

      </>
    )
  } else {
    return (

      <>
        <ItemCardsSideImage imagePath={props.imagePath} />
        <ItemCardsSideName name={props.name} />
        <ItemCardsSidePrice price={props.price} />

        <div className=' container flex flex-wrap justify-center items-center '>
          <ItemCardsSideCount count={11} />
        </div>
        <button className={`mx-6 text-gray-500 ${style.deleteButtonItemCards}`}> 削除</button>
      </>
    )
  }

}
