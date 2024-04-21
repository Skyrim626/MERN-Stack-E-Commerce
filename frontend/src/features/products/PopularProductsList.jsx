import React from "react";
import { useGetProductsQuery } from "./productsApiSlice";
import PopularProduct from "./PopularProduct";

export default function PopularProductsList() {

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

    const tableContent = ids?.length ? ids.map(productId => <PopularProduct key={productId} productId ={productId}/>) : null;

    return (
      <div className="row row-cols-2 g-5 container">
        {tableContent}
      </div>
    );

  }

  return content;

  
}
