import Image from "next/image";
import Head from "next/head";
// import Link from "next/link";
// import style from "../src/styles/humburger.module.css";
// import React from "react";
import { SearchForm } from "../Molecules/searchForm"
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../../src/styles/header.module.css"
import { useEffect, useState } from "react";

const Logo = (props: { path: string }) => {
  return (
    <Image
      className=""
      src={props.path}
      width={100}
      height={70}
    />
  );
}

const HeaderListGoogleIcon = (props: { name: string, path: string }) => {
  return (
    <>
      <li className="float-left mx-8 py-2.5">
        <Link href={props.path}>
          <a>
            <span className="material-symbols-outlined">
              {props.name}
            </span>
          </a>
        </Link>
      </li>
    </>
  );
}

const HeaderListText = (props: { name: string, path: string }) => {
  return (
    <>
      <li className={`float-left mx-8 py-2.5  ${style.link}`}>
        <Link href={props.path}>
          <a>
            {props.name}
          </a>
        </Link>
      </li>
    </>
  );
}

const HeaderListGoogleIconList = (props: { name: string, path: string, list: any, title: string }) => {
  return (
    <>
      <li className={`float-left mx-8 py-2.5  flex flex-col justify-center items-center mx-auto text-gray-500 text-sm`}>
        <span className={`material-icons text-gray-400 ${style.icon} `}>
          {props.name}
        </span>
        {props.list}
        <p className=""> {props.title}</p>
      </li>
    </>
  );
}

const UserNavigationGroupUser = () => {
  return (

    <ul className={`bg-white absolute   translate-y-10 flex flex-col rounded-xl  shadow-md  ${style.list} `}>
      <HeaderListText name="新規登録" path={`/users/`} />
      <HeaderListText name="ログイン" path={`/users/login`} />
    </ul>

  )
}

const UserNavigationGroupCart = () => {
  return (

    <ul className={`bg-white absolute translate-y-10 flex flex-col rounded-xl  shadow-md  ${style.list} `}>
      <HeaderListText name="カート" path={`/carts`} />
      <HeaderListText name="注文確認" path={`/carts/confirm`} />
    </ul>

  )
}

const UserNavigationGroupOther = () => {
  return (

    <ul className={`bg-white absolute translate-y-10 flex flex-col rounded-xl  shadow-md  ${style.list} `}>
      <HeaderListText name="トップ" path={`/`} />
      <HeaderListText name="商品一覧" path={`/items`} />
    </ul>

  )
}

// opacity-0.3 absolute z-20  -translate-x-12

export const Header = () => {
  const [hamburgerMenuDisplayState, SetHamburgerMenuDisplayState] = useState(false)
  const [gestIdState, SetgestIdState] = useState(false)
  const cookieList:any = [];


useEffect(()=>{
  const splitCookie = document.cookie.split(';');
  const list = [];
  
  for (let i = 0; i < splitCookie.length; i++) {
    list.push(splitCookie[i].split('='));
  }

  // cookieにgestIDがセットされていな場合、付与する
  list.map((data,index)=>{
    if(data[0].includes("gestId")){
      cookieList.push(data[0])
    }
  })
  console.log(cookieList);
  if(cookieList.length === 0){
    let randomId = Math.random().toString(32).substring(2) ;
    document.cookie = `gestId=${randomId}; path=/;`;
  }
  
},[])





  const HumburgerList = () => {
    // ハンバーガーメニューのロゴを押されたら表示
    if(hamburgerMenuDisplayState === true){

      return (
        <div className=" pb-5  bg-white shadow-xl rounded-md
        absolute  z-20 translate-y-20 -translate-x-12  md:hidden text-gray-500
        ">
        <ul className="flex flex-col">
          <li>
            <button className={`float-right ${style.close} `} onClick={()=>{
              SetHamburgerMenuDisplayState(false)
            }}>
              <span className={`material-icons text-gray-400 ${style.close} `}>
                close
              </span>
            </button>
          </li>
          <HeaderListText name="トップ" path={`/`} />
          <HeaderListText name="商品一覧" path={`/items`} />
          <HeaderListText name="カート" path={`/carts`} />
          <HeaderListText name="注文確認" path={`/carts/confirm`} />
          <HeaderListText name="新規登録" path={`/users/`} />
          <HeaderListText name="ログイン" path={`/users/login`} />
        </ul>
      </div>

)
}else{
  return <></>;
}
}

  return (
    <>
      <div className="container flex flex-wrap justify-between items-center mx-auto py-5 px-5  bg-gray-50 opacity-0.1">
        <Logo path="/logoFlower.png" />
        <ul className="float-right hidden md:block">
          <HeaderListGoogleIconList name="person" path={`/users/login`} list={<UserNavigationGroupUser />}
            title="アカウント"

          />
          <HeaderListGoogleIconList name="shopping_cart" path={`/users/login`} list={<UserNavigationGroupCart />}
            title="カート"

          />
          <HeaderListGoogleIconList name="favorite" path={`/users/login`} list={<UserNavigationGroupOther />}
            title="商品"

          />

        </ul>

        <div className="flex flex-col md:hidden ">
          <button onClick={() => {
            SetHamburgerMenuDisplayState(true)
          }}>
            <span className={`material-icons mx-8 text-gray-400 ${style.menu}`}>
              menu
            </span>
          </button>

        </div>
      </div>
      <div className="container flex flex-wrap justify-end items-center mx-auto  py-5  ">
        <HumburgerList />
      </div>
      {/* </nav> */}
    </>
  );
}



export default Header;
