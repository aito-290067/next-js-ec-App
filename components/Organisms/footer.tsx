import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "../../src/styles/footer.module.css"

export const Footer = () => {

  return (
    <>


      {/* <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">  ${style.bgFooter}*/}

        <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5  bg-gray-50">
          <ul>
            <li className="float-left mx-5">Twitter</li>
            <li className="float-left mx-5">Instagram</li>
            <li className="float-left mx-5">Facebook</li>
          </ul>
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
