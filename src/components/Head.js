import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-light mb-4" >
      <a className="navbar-brand" href="/">
    <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
    
  </a>
      
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          
        </ul>
        
      </div>
    </nav>
    );
  };
  export default Header;