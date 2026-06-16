import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const use_location = useLocation();

  const isColoredPage =
    use_location.pathname === "/" ||
    use_location.pathname.startsWith("/courses") ||
    use_location.pathname.startsWith("/events/");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar isColoredBg={isColoredPage} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
