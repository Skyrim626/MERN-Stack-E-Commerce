import React from "react";
import "../../css/popularProduct.css";
import { useSelector } from "react-redux";
import { selectProductById } from "./productsApiSlice";

export default function PopularProduct({ productId }) {
  const product = useSelector((state) => selectProductById(state, productId));

  if (product) {
    return (
      <>
        <div className="col">
          <div className="popular-product-container">
            <div className="popular-product__image-container">
              <img src={product.imgSrc} alt="" />
            </div>
            <p className="popular-product__name | h5 text-dark mt-3">{product.productName}</p>
            <p className="popular-product__price | h6 text-dark mt-2 ">${product.price}</p>
          </div>
        </div>
      </>
    );
  }
}
