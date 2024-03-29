import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import ReactDOM from "react-dom/client";

import Header from './components/Head'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import  AboutUs  from './components/AboutUs';
import  ContactUs  from './components/ContactUs';
import Error from './components/Error';
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <Error />
  },
  {
    path : '/contact',
    element : <ContactUs />,
    errorElement : <Error />
  },
  {
    path : '/about-us',
    element : <AboutUs />,
    errorElement : <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
