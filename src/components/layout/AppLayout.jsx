import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import ShimmerCards from "../common/ShimmerCards";
import ReactGA from "react-ga4";
//import Footer from "../common/Footer";
const Footer = lazy(() => import("../common/Footer"));
const AppLayout = () => {
  ReactGA.initialize('G-H1Z6TWDXQR');
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer fallback={<ShimmerCards />} />
    </div>
  );
};

export default AppLayout;
