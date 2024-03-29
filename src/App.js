import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import ReactDOM from "react-dom/client";

import Header from './components/Head'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import  AboutUs  from './components/AboutUs';
import  ContactUs  from './components/ContactUs';
import Error from './components/Error';
import ProductDetail from './components/ProductDetail'
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
    path : '/',
    element : <AppLayout />,
    children: [
      {
        path : '/',
        element : <Body />,
      },
      {
        path : '/contact',
        element : <ContactUs />,
      },
      {
        path : '/about-us',
        element : <AboutUs />,
      },
      {
        path : '/product/:id',
        element : <ProductDetail />,
      }
    ],
      errorElement : <Error />
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("mitro"));

root.render(<RouterProvider router={appRouter} />);
