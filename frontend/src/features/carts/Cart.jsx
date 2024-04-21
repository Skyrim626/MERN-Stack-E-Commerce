import React from "react";

import { useSelector } from "react-redux";
import { selectCartById } from "./cartsApiSlice";
import { selectProductById } from "../products/productsApiSlice";

export default function Cart({ cartId }) {
  const cart = useSelector((state) =>
  selectCartById(state, cartId)
  );

  console.log(cart.product);

  const product = useSelector((state) =>
  selectProductById(state, cart.product)
  );

  console.log(product);

  // console.log(cart);
  if (cart) {
    return (
      <tr>
        <td>{product?.productName}</td>
        <td>{product?.price}</td>
        <td>{cart?.quantity}</td>
        <td>
          
        </td>
      </tr>
    );
  }
}
