import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";
import CartPopup from "./CartPopup";
const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => {
    dispatch(logout());
  };
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
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
                  <i className="bi bi-person-circle"></i>
                </Link>
              </li>
              <li className="nav-item mt-2"><span
                className="navbar-text"
                style={{ cursor: "pointer" }}
                onClick={toggleCartPopup}
              >
                <i className="bi bi-cart-fill"></i> {cart.items.length} item
                {cart.length !== 1 ? "s" : ""}{" "}
              </span></li>
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
      {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
    </nav>
  );
};
export default Header;
