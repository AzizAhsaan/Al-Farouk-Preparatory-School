import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {


  return (
    <>
    <main className=" w-full mx-auto flex flex-col items-center justify-between  min-h-screen overflow-hidden ">
              <Outlet  />
      <Footer />
    </main>
    </>
  );
};

export default Layout;
