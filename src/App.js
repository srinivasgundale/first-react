import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { lazy, Suspense, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";
import Header from "./components/Head";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import ShimmerCards from "./components/ShimmerCards";
import Login from "./components/Login";
import Profile from "./components/Profile";
const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

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
        path: "/profile", // Add the profile route
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

const root = ReactDOM.createRoot(document.getElementById("firstReactApp"));

root.render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
