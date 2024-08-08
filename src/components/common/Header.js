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
    
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/">Home</Link></li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
            <li><Link className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/about-us">About</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-x" aria-current="page" to="/">PrimeHub</Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/">Home</Link></li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> */}
          <li><Link className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/about-us">About</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.items.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{cart.items.length} Item{cart.length !== 1 ? "s" : ""}{" "}</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {isAuthenticated ? (
                  <>
              <li>
                <Link className="justify-between" to="/profile">
                
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              
              <li><a onClick={handleLogout}>Logout</a></li>
              </> ) : (<li><Link className="justify-between" to="/login">Login</Link></li>) } 
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <nav className="navbar navbar-dark bg-dark fixed-top">
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
    </nav> */}
    </>
  );
};
export default Header;
