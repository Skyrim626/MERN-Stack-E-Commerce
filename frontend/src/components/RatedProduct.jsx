import React from "react";
import "../css/ratedProduct.css";


export default function RatedProduct({
  imgSrc,
  productName,
  priceThen,
  priceNow,
}) {
  return (
    <>
      <div className="col">
        <div className="product-container">
          <div className="image-container">
            <img src={imgSrc} alt="" />
          </div>
          <p className="mt-3 h5">{productName}</p>
          <div class="d-flex mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price__texts | d-flex align-items-center gap-5 mt-3">
            <p className="price__then">${priceThen}</p>
            <p className="price__now | text-dark">${priceThen}</p>
          </div>
        </div>
      </div>
    </>
  );
}
