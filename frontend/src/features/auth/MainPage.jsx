import React from 'react'
import { Link } from 'react-router-dom';
import CustomerList from '../customers/CustomersList';
import ProductstList from '../products/ProductsList';
import CategorySection from '../../public/partials/CategorySection';

export default function MainPage() {

  const date = new Date();
  const today = new Intl.DateTimeFormat('en-Us', { dateStyle: 'full', timeStyle: 'long' }).format(date);

  return (
    <section>
      <p>{today}</p>
      <section className='p-5'>
        <div className="container pt-5">
          <CategorySection />
          
        
            <ProductstList />
        

        </div>
      </section>
      {/* <CustomerList /> */}
    </section>
  )
}
