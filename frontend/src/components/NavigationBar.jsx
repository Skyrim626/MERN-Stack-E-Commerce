import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../css/navigationBar.css";

function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top p-2">
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
                  <a className="nav-link mx-lg-2" href="#">
                    Category
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" className="btn btn-dark me-1">Login</a>
          <a href="#" className="btn btn-outline-dark">Sign Up</a>
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
