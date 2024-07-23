import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="mb-4 navbar navbar-expand-md navbar-light">
      <Link className="navbar-brand" to="/">
        <img
          src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="align-top d-inline-block"
          alt=""
        />
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="mr-auto navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i class="bi bi-person-circle"></i>
                </Link>
              </li>

              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
