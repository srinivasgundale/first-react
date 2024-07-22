import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { lazy, Suspense, StrictMode } from "react";
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
import { Provider } from "react-redux";
import store from "./utils/store";
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
const root = ReactDOM.createRoot(document.getElementById("firstReactApp"));

root.render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
