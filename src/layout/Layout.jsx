import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  const isColoredPage =
    location.pathname === "/" || location.pathname.startsWith("/course");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isColoredBg={isColoredPage} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
