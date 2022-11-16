import React from 'react'
import RecognizeList from "../Organisms/recognizeList"

export const RecognizeItesSection = (props :any) => {
  return (
    <>
      <section>
        <h2 className="flex flex-wrap items-center  justify-center  mt-24  text-2xl">おすすめ商品</h2>
        <div className="items-center justify-center flex flex-wrap items-center justify-center mb-">
          <RecognizeList />
        </div>
      </section>
    </>
  )
}
export const NewItemsSection = (props :any) => {
  return (
    <>
      <section>
        <h2 className="flex flex-wrap items-center  justify-center  mt-12  text-2xl">新入荷商品</h2>
        <div className="items-center justify-center flex flex-wrap items-center justify-center mb-">
          <RecognizeList />
        </div>
      </section>
    </>
  )
}

export const ItemsSection = (props :any) => {
  return (
    <>
      <section>
        
        <div className="items-center justify-center flex flex-wrap items-center justify-center mb-">
          <RecognizeList />
        </div>
      </section>
    </>
  )
}
