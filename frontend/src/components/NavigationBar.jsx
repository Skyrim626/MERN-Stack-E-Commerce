import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../css/navigationBar.css";
import { Link } from 'react-router-dom'

function NavigationBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top p-2 ${scrolled ? 'scrolled' : 'bg-light'}`}>
        <div className="container-fluid">
          <a className="logo-container | navbar-brand me-auto" href="#">
            <img src={logo} alt="" />
          </a>
         
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="logo-container | offcanvas-title" id="offcanvasNavbarLabel">
                {/* Offcanvas */}
                <img src={logo} alt="" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link mx-lg-2 active"
                    aria-current="page"
                    href="#"
                  >
                    Fusions & Fashions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#categories">
                    Category
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#most-rated">
                    Most Rated
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#products">
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#discount">
                    Discount
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/login">
            <a href="#" className="btn__login | btn btn-dark me-1">Login</a>
          </Link>
          <Link to="/signup">
            <a href="#" className="btn__signUp | btn btn-dark">Sign Up</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
