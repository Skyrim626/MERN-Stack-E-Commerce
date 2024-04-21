import React from 'react'
import "../css/mostrated.css";
import rated1 from "../assets/images/most-rated-1.jpeg";
import rated2 from "../assets/images/most-rated-2.png";
import rated3 from "../assets/images/most-rated-3.jpeg";
import RatedProduct from './RatedProduct';

export default function MostRated() {
  return (
    <section className='most-rated-section | p-5' id='most-rated'>
      <div className="container">
        <h1 className='text-center h2 text-dark'>Most Rated</h1>

        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4 gy-3">
          <RatedProduct imgSrc={rated1} productName="Cotton Sleeves" priceThen="89.99" priceNow="49.99" />
          <RatedProduct imgSrc={rated2} productName="Nike Jordan Mid" priceThen="89.99" priceNow="49.99" />
          <RatedProduct imgSrc={rated3} productName="Waffle Dress" priceThen="89.99" priceNow="49.99" />
        </div>
      </div>
    </section>
  )
}
