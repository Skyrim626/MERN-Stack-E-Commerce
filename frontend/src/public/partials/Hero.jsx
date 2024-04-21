import React from "react";
import "../../css/hero.css"
import carousel1 from "../../assets/images/image-carousel-1.jpg";
import carousel2 from "../../assets/images/image-carousel-2.jpg";
import carousel3 from "../../assets/images/image-carousel-3.jpg";


/** A function that creates a section of Hero */
export default function Hero() {
  return (
    <>
      <section className="hero-container pt-5">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" alt="..." />
              <div className="hero-carousel-content | d-flex flex-column justify-content-center align-items-center gap-3">
                <h1 className="hero-carousel-content__title">Get up to 45% off new products</h1>
                <p className="hero-carousel-content__body">The biggest sale of the year is at <span>Fusions & Fashions</span></p>
                <button className="btn btn-outline-secondary px-5 py-3">Shop Now!</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="..." />
              <div className="hero-carousel-content | d-flex flex-column justify-content-center align-items-center gap-3">
                <h1 className="hero-carousel-content__title">Get up to 45% off new products</h1>
                <p className="hero-carousel-content__body">The biggest sale of the year is at <span>Fusions & Fashions</span></p>
                <button className="btn btn-outline-secondary px-5 py-3">Shop Now!</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="..." />
              <div className="hero-carousel-content | d-flex flex-column justify-content-center align-items-center gap-3">
                <h1 className="hero-carousel-content__title">Get up to 45% off new products</h1>
                <p className="hero-carousel-content__body">The biggest sale of the year is at <span>Fusions & Fashions</span></p>
                <button className="btn btn-outline-secondary px-5 py-3">Shop Now!</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
