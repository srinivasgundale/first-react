import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Body from "../pages/Body";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import ShimmerCards from "../common/ShimmerCards";

const AboutUs = lazy(() => import("../pages/AboutUs"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={Body} />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerCards />}>
            <PrivateRoute element={ContactUs} />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<ShimmerCards />}>
            <PrivateRoute element={AboutUs} />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <PrivateRoute element={ProductDetail} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={Profile} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const AppRouter = () => <RouterProvider router={appRouter} />;

export default AppRouter;
