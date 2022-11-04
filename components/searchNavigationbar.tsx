import React from 'react'
import Image from 'next/image'
import { Calendar } from './calendar'
import { SearchCategoryList } from './searchCategoryList'
import { BannerList } from './bannerList'

export const SearchNavigationbar = () => {
  return (
    <>
      <div className="mr-24 mt-2 p-12 w-72 " >
        <SearchCategoryList />
        <BannerList />
        <Calendar />
      </div>
    </>
  )
}
