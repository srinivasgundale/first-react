// src/index.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from "./components/routes/AppRouter";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("firstReactApp"));

root.render(
  <Provider store={store}>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </Provider>
);
