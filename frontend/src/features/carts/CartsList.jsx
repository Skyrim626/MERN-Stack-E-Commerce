import React from "react";
import { useGetCartsQuery } from "./cartsApiSlice";
import Cart from "./Cart";

export default function CartsList() {
  const {
    data: carts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCartsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    );
  }

  if (isSuccess) {
    const { ids } = carts;

    // console.log(ids);

    const tableContent = ids?.length
      ? ids.map((cartId) => <Cart key={cartId} cartId={cartId} />)
      : null;

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }
}
