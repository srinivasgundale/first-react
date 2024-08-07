import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import CartPopup from "../includes/CartPopup";
const Header = () => {
  const location = useLocation();
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
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">React App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">React App 
            {isAuthenticated ? (<Link className="ml-2" to="/profile">
                  <i className="bi bi-person-circle"></i>
                </Link>) : '' }</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/">Home</Link>
              </li>
              {isAuthenticated ? (
              <>
              <li className="nav-item">
                <Link className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/contact">Contact Us</Link>
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
              <li className="nav-item mt-2">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              </>
              ) : (<><li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li></>) }
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
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
    </>
  );
};
export default Header;
