import React, { useState, useEffect } from "react";
import "../css/navigationBar.css";
import logo from "../assets/images/logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";
import CartsList from "../features/carts/CartsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";

const DASH_REGEX = /^\/dash(\/)?$/;
const PRODUCTS_REGEX = /^\/dash\/products(\/)?$/;
const CUSTOMERS_REGEX = /^\/dash\/customers(\/)?$/;

export default function DashHeader() {
  // Scroll Bar Purposes
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

  /** Navigate */
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  if (isLoading) return <p>Logging Out...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  const logoutButton = (
    <a className="text-dark" title="Logout" onClick={sendLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </a>
  );

  return (
    <nav
      className={`navbar fixed-top p-2 ${scrolled ? "scrolled" : "bg-light"}`}
    >
      <div className="container-fluid">
        <Link to="/dash">
          <a className="logo-container | navbar-brand me-auto" href="#">
            <img src={logo} alt="" />
          </a>
        </Link>

        <div className="left-navigation mw-auto">
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <Link to="/">
            <a href="#" className="text-dark me-3">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </Link>

          {/* <a className="text-dark" title="Logout" onClick={sendLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </a> */}
          {logoutButton}
        </div>

        <div
          className="offcanvas offcanvas-end w-auto"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex justify-content-between flex-column">
            <CartsList />

            {/* <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dress Shirt</td>
                  <td>Women</td>
                  <td>5</td>
                  <td className="d-flex justify-content-between gap-2">
                    <button className="btn btn-danger">Remove</button>
                    <button className="btn btn-primary">Add</button>
                  </td>
                </tr>
              </tbody>
            </table> */}

            <Link to="checkout">
              <button className="btn btn-dark w-100 btn-lg">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
