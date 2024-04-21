import React from 'react'
import "../css/mostrated.css";

export default function MostRated() {
  return (
    <section className='most-rated-section | p-5'>
      <div className="container">
        <h1 className='text-center h2 text-dark'>Most Rated</h1>

        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4 gy-3">
          <div className="col">
            <div className="product-container bg-dark">Product1</div>
          </div>
          <div className="col">
            <div className="product-container bg-dark">Product2</div>
          </div>
          <div className="col">
            <div className="product-container bg-dark">Product3</div>
          </div>
        </div>
      </div>
    </section>
  )
}
