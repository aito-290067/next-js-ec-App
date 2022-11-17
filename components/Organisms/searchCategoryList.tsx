import { Category } from '@material-ui/icons'
import React from 'react'
import { useRouter } from "next/router";


export const SearchCategoryList = (props: any) => {

  const router = useRouter();

  // 最初のカテゴリ以外のリスト（スタイルが違うため）
  const categoryList = ["観葉植物", "生花", "多肉植物", "アレンジメント", "花束・ブーケ", "スワッグ", "フラワーリース", "スタンド花", "花瓶・フラワーベース"]

  return (
    <>
      <div>
        <h2 className="text-xl flex flex-nowrap items-center justify-center mb-5">
          カテゴリ
        </h2>
        <ul className="">
          <label htmlFor="firstCategory">
            <li className="border-2 border-gray-100 py-2 pl-2">
              <button type="button"
                id="firstCategory"
                className="border-none"
                onClick={() => {
                  router.push({
                    pathname: "/items"
                  });
                }}>
                全て
              </button>
            </li>
          </label>

          {categoryList.map((CategoryData: any, index: number) => {
            return (
              <label htmlFor={CategoryData}  key={index}>
                <li className="border-l-2 border-r-2 border-b-2 border-gray-100 py-2 pl-2 ">
                  <button type="button"
                    className="border-none "
                    id={CategoryData}
                    onClick={() => {
                      router.push({
                        pathname: "/items",
                        query: { category: `${CategoryData}` }
                      });
                    }}>
                    {CategoryData}
                  </button>
                </li>
              </label>
            )
          })}
        </ul>
      </div>
    </>
  )
}
