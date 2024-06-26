import React from 'react'
import { useGetProductsQuery } from "./productsApiSlice";
import Product from './Product';

export default function ProductstList() {

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery();
  

  let content;

  if(isLoading) {
    content = <p>Loading...</p>
  }

  if(isError) {
    content = <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>;
  }

  if(isSuccess) {
    
    const { ids } = products;

    const tableContent = ids?.length ? ids.map(productId => <Product key={productId} productId ={productId}/>) : null;

    return (
    
      <section className="container">
        <h1 className="text-center mb-5">Products</h1>
        <div className="row row-cols-md-3 row-cols-1 row-cols-sm-2 g-5">
        
        {tableContent}
  
        </div>
      </section>
  
    )

  }

}
