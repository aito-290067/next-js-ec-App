import Header from "./header";
import Footer from "./footer";

export const Layout = ({ children }: any) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
