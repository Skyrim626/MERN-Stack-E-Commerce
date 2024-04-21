import React from "react";
import NavigationBar from "../components/NavigationBar";
import CategorySection from "./partials/CategorySection";
import { Link } from "react-router-dom";
import HomeFooter from "../components/HomeFooter";
import DiscountSection from "../components/DiscountSection";
import RatedProduct from "../components/RatedProduct";

import rated1 from "../assets/images/most-rated-1.jpeg";
import rated2 from "../assets/images/most-rated-2.png";
import rated3 from "../assets/images/most-rated-3.jpeg";

import carousel1 from "../assets/images/image-carousel-1.jpg";
import carousel2 from "../assets/images/image-carousel-2.jpg";
import carousel3 from "../assets/images/image-carousel-3.jpg";

import "../css/homepage.css";
import CarouselSlide from "../components/CarouselSlide";
import "../css/carouselSlide.css"
import PopularProduct from "../features/products/PopularProduct";
import PopularProductsList from "../features/products/PopularProductsList";

export default function HomePage() {
  return (
    <>
      <NavigationBar />

      {/* Hero Section */}
      <section className="hero-container pt-5" id="section">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Active Carousel */}
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" alt="..." />
              <div className="carousel-content-container | d-flex flex-column justify-content-center align-items-center gap-3">
                <h1 className="carousel-content-container__title">
                  Get up to 45% off new products
                </h1>
                <p className="carousel-content-container__body">
                  The biggest sale of the year is at{" "}
                  <span>Fusions & Fashions</span>
                </p>
                <button className="btn btn-outline-secondary px-5 py-3">
                  Shop Now!
                </button>
              </div>
            </div>

            <CarouselSlide carouselImg={carousel2} carouselTitle="Get up to 45% off new products" carouselBody="The biggest sale of the year is at " carouselBodyInner="Fusions & Fashions" />

            <CarouselSlide carouselImg={carousel3} carouselTitle="Get up to 45% off new products" carouselBody="The biggest sale of the year is at " carouselBodyInner="Fusions & Fashions" />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <CategorySection />

      {/* Most-Rated Section */}
      <section className="most-rated-section | p-5" id="most-rated">
        <div className="container">
          <h1 className="text-center h2 text-dark">Most Rated</h1>

          <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4 gy-3">
            <RatedProduct
              imgSrc={rated1}
              productName="Cotton Sleeves"
              priceThen="89.99"
              priceNow="49.99"
            />
            <RatedProduct
              imgSrc={rated2}
              productName="Nike Jordan Mid"
              priceThen="89.99"
              priceNow="49.99"
            />
            <RatedProduct
              imgSrc={rated3}
              productName="Waffle Dress"
              priceThen="89.99"
              priceNow="49.99"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="pb-5" id="products">
        <div className="container">
          <h1 className="text-center h2 text-dark mb-5">Popular Products</h1>

          
          <PopularProductsList />

        </div>
      </section>

      <DiscountSection />
      <HomeFooter />
    </>
  );
}
