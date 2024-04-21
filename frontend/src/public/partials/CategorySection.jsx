import React from 'react'
import femaleCategoryImage from "../../assets/images/female-category.jpeg";
import maleCategoryImage from "../../assets/images/male-category.jpeg";
import { Link } from 'react-router-dom';
import ShopCategory from '../../components/ShopCategory';


export default function CategorySection() {
  return (
    <>
      <section className='p-4'>
        <div className="container text-center mt-4">
          <h1 className='h1 text-dark'>Fusions & Fashions</h1>

          <div className="category-section__categories | row row-cols-md-2 row-cols-sm-1 gx-2 gy-sm-3 mt-5">
            
            <ShopCategory imageSrc={femaleCategoryImage} headerTitle="Most Popular Styles" categoryName="Women" toPath="#" colorType="rgb(91, 253, 202)" textAlign="isRight" />
            
            <ShopCategory imageSrc={maleCategoryImage} headerTitle="Most Popular Styles" categoryName="Men" toPath="#" colorType="rgb(255, 103, 103)" textAlign="isLeft" />
           
          </div>
        </div>
      </section>
    </>
  )
}

