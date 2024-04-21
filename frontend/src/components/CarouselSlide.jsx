import React from "react";
import "../css/carouselSlide.css";

export default function CarouselSlide({ carouselImg, carouselTitle, carouselBody, carouselBodyInner }) {
  return (
    <>
      <div className="carousel-item">
        <img src={carouselImg} className="d-block w-100" alt="..." />
        <div className="carousel-content-container | d-flex flex-column justify-content-center align-items-center gap-3">
          <h1 className="carousel-content-container__title">
            {carouselTitle}
          </h1>
          <p className="carousel-content-container__body">
            {carouselBody} <span>{carouselBodyInner}</span>
          </p>
          <button className="btn btn-outline-secondary px-5 py-3">
            Shop Now!
          </button>
        </div>
      </div>
    </>
  );
}
