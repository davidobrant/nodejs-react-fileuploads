import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <>
      <section className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center overflow-y-auto bg-slate-50 shadow-inner">
          <div className="w-full flex flex-col flex-grow overflow-y-auto items-center p-4">
            <Outlet />
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
