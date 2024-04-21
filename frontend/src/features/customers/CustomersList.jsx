import React from "react";
import { useGetCustomersQuery } from "./customersApiSlice";
import Customer from "./Customer";

export default function CustomerList() {

  const {
    data: customers,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCustomersQuery();

  let content;

  if(isLoading) {
    content = <p>Loading...</p>
  }

  if(isError) {
    content = <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>;
  }

  if(isSuccess) {

    const { ids } = customers;

    const tableContent = ids?.length ? ids.map(customerId => <Customer key={customerId} customerId ={customerId}/>) : null;
    
    return (
      <>
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Attribute 1</th>
              <th>Attribute 2</th>
              <th>Attribute 3</th>
              <th>Attribute 4</th>
              <th>Attribute 5</th>
              <th>Attribute 6</th>
              <th>Attribute 7</th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
          </tbody>
        </table>
      </>
    );

  }


}
