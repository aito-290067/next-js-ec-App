import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "../../src/styles/footer.module.css"

export const Footer = () => {

  return (
    <>


      {/* <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">  ${style.bgFooter}*/}
      <div className={`container flex flex-wrap justify-between items-center mx-auto py-5 px-10 bg-gray-50 `}>
        <div className="float-right ">
          <p className="text-gray-400">カテゴリ別に選ぶ</p>
          <ul>
            <li>観葉植物</li>
            <li>ドライフラワー</li>
            <li>胡蝶蘭</li>
            <li>果肉植物</li>
            <li>花束・ブーケ</li>
            <li>プリザーブドフラワー</li>
            <li>スワッグ</li>
            <li>フラワーリース</li>
            <li>スタンド花</li>
            <li>花瓶・フラワーベース</li>
            <li>アレンジメント</li>

          </ul>
        </div>
        <div className="flex-right">
          <p className="text-gray-400">目的別に探す</p>
          <ul>
            <li>【特集】お花の定期便</li>
            <li>【特集】秋の花ギフト</li>
            <li>【特集】お悔み・お供えの花</li>
            <li>誕生日プレゼントに贈る花</li>
            <li>季節のお花</li>
            <li>１０月の誕生花</li>
            <li>１１月の誕生花</li>
          </ul>
        </div>
        <div className="float-right ">
          <ul>
            <li className="text-gray-400">サポート・お問い合わせ</li>
            <li>お問い合わせ</li>
            <li>立て札の書き方</li>
            <li>お支払方法について</li>
            <li>配送について</li>
            <li>返品について</li>
            <li>会員情報・メールマガジン</li>
            <li>よくあるご質問</li>
            <li>サイトマップ</li>
          </ul>
        </div>
        <div className="float-right ">
          <ul >
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5  bg-gray-50">
        <ul className="text-gray-400">
          <li className="float-left mx-5">会社概要</li>
          <li className="float-left mx-5">採用情報</li>
          <li className="float-left mx-5">利用規約</li>
          <li className="float-left mx-5">プライバシーポリシー</li>
          <li className="float-left mx-5">特定商取引法に基づく表示</li>
        </ul>
      </div>
      {/* </nav> */}
    </>
  );
}

export default Footer;
