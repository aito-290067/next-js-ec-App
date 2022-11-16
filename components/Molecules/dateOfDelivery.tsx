import React from 'react'

export const DateOfDelivery = () => {

  const fiveDaysLater = new Date();
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);

  const threeDaysLater = new Date();
  threeDaysLater.setDate(threeDaysLater.getDate() + 3);

  // 年・月・日ごとに取り出す（３日後）
  const threeDaysLaterFullYear = threeDaysLater.getFullYear()
  const threeDaysLaterMonth = threeDaysLater.getMonth()
  const threeDaysLaterDate = threeDaysLater.getDate()

  // 〇年〇月〇日に変換（３日後）
  const threeDaysLaterFormat = `${threeDaysLaterFullYear}年${threeDaysLaterMonth}月${threeDaysLaterDate}日`


  // 年・月・日ごとに取り出す（５日後）
  const fiveDaysLaterFullYear = fiveDaysLater.getFullYear()
  const fiveDaysLaterMonth = fiveDaysLater.getMonth()
  const fiveDaysLaterDate = fiveDaysLater.getDate()

  // 〇年〇月〇日に変換（５日後）
  const fiveDaysLaterFormat = `${fiveDaysLaterFullYear}年${fiveDaysLaterMonth}月${fiveDaysLaterDate}日`

  return (
    <>
      <div className="grid grid-cols-7 h-24">
        <p className="items-center flex justify-center col-span-2">配達日時</p>
        <ul className="items-center col-span-4  py-4">
          <li className=" ">
            日時指定なし
          </li>
          <li > {threeDaysLaterFormat}～{fiveDaysLaterFormat} <span className="text-sm">発送予定</span></li>
          <li className="text-sm">（即日配送・日時指定が可能です）</li>
        </ul>
      </div>
    </>
  )
}
