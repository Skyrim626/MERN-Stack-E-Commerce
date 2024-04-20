import React from 'react'
import "../css/category.css";
import femaleCategoryImage from "../assets/images/female-category.jpeg";
import maleCategoryImage from "../assets/images/male-category.jpeg";

export default function Category() {
  return (
    <>
      <section className='p-4'>
        <div className="container text-center mt-4">
          <h1 className='h1 text-dark'>Fusions & Fashions</h1>

          <div className="category-section__categories | row row-cols-md-2 row-cols-sm-1 gx-2 gy-sm-3 mt-5">
            <div className="col-6">
              <div className="category">
                <img src={femaleCategoryImage} alt=""/>
                <div className="category__content women-category">
                  <p className='h3 fw-bolder'>Most Popular Styles</p>
                  <p className='fw-bold'>Women</p>
                  <button className='btn'>Go Here</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="category">
                <img src={maleCategoryImage} alt=""/>
                <div className="category__content men-category">
                  <p className='h3 fw-bolder'>Most Popular Styles</p>
                  <p className='fw-bold'>Men</p>
                  <button className='btn'>Go Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
