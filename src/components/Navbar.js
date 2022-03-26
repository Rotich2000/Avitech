import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import './Navbar.css'

const Navbar = () => {
  const [click, setclick] = useState(false);
  const [button,setButton] = useState(true);
  const handleClick = () => {
    setclick(!click);
  };
  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      }else{
          setButton(true);
      }
  };

  useEffect(() =>{
    showButton()
  },[])

  window.addEventListener('resize',showButton);
  const closeMobileMenu = () => setclick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           <img className="logo" src="/logo.jpeg"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
