import React from 'react'
import Image from 'next/image'

export const BannerList = () => {
  return (
    <>
      <div className=" mt-12">
        <ul>
          <li className="mb-2">
            <Image src="/bouquet-4-bg.jpg" width={200} height={100} alt="topImage" />
          </li>
          <li className="mb-2">
            <Image src="/plants-bg.jpg" width={200} height={100} alt="topImage" />
          </li>
          <li className="mb-2">
            <Image src="/Christmas-background.jpg" width={200} height={100} alt="topImage" />
          </li>
          <li className="mb-2">
            <Image src="/Christmas-background-allaround.jpg" width={200} height={100} alt="topImage" />
          </li>
        </ul>
      </div>
    </>
  )
}
