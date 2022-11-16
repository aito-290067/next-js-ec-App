import { Category } from '@material-ui/icons'
import React from 'react'

// setCategoryWord

export const SearchCategoryList = (props: any) => {

  // 最初のカテゴリ以外のリスト（スタイルが違うため）
  const categoryList = ["生花", "多肉植物", "アレンジメント", "花束・ブーケ", "スワッグ", "フラワーリース", "スタンド花","花瓶・フラワーベース"]

  return (
    <>
      <div>
        <h2 className="text-xl flex flex-nowrap items-center justify-center mb-5">
          カテゴリ
        </h2>
        <ul className="">
          <li className="border-2 border-gray-100 py-2 pl-2">
            <button type="button" 
            className="border-none"
            onClick={() => {
              props.setCategoryWord(`観葉植物`)
            }}>
              観葉植物
            </button>
          </li>

          {categoryList.map((CategoryData: any, index: number) => {
            return (
              <li className="border-l-2 border-r-2 border-b-2 border-gray-100 py-2 pl-2 " key={index}>
                <button type="button" 
                className="border-none"
                onClick={() => {
                  props.setCategoryWord(`${CategoryData}`)
                }}>
                  {CategoryData}
                </button>

              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
