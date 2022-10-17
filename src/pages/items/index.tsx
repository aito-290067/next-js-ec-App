import Head from "next/head";

export const Home = () => {
  return (
    <>
        <Head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        </Head>
        
          <div className="text-xl text-red-500">hi</div>   
    </>
  );
}

export default Home;
