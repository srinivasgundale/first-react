import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import ShimmerCards from "./components/ShimmerCards";
const AboutUs = lazy(() => import("./components/AboutUs"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerCards />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<ShimmerCards />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("mitro"));

root.render(<RouterProvider router={appRouter} />);
