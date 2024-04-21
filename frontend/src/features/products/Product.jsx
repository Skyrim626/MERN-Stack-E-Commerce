import React from 'react'
import "../../css/product.css";
import { useSelector } from "react-redux";
import { selectProductById } from './productsApiSlice';
import { useNavigate } from "react-router-dom";

export default function Product({ productId }) {

  const product = useSelector((state) =>
  selectProductById(state, productId)
  );

  const navigate = useNavigate();

  if (product) {
    const handleInfo = () => navigate(`/dash/products/${productId}`); // Links to the created resource

    return (
      <>
        <div className="product-container | col">
        
          <div className="card">
            <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-primary" onClick={handleInfo}>More Info</a>
                  <button className='btn'>Add to Cart</button>
                </div>
              </div>
          </div>
       
        </div>
      </>
    )
  }
   

}
