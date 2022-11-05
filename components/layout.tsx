import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
// import { Head } from "next/document"
// import { Html, Head, Main, NextScript } from "next/document"

export const Layout = ({ children }: any) => {

  return (
    <>
      <Head>
        <link rel="stylesheets" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <div className="conatiner">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>


    </>
  );
}

export default Layout;
