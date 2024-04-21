import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCustomerById } from "./customersApiSlice";

export default function Customer({ customerId }) {
  const customer = useSelector((state) =>
    selectCustomerById(state, customerId)
  );

  const navigate = useNavigate();

  if (customer) {
    const handleEdit = () => navigate(`/dash/customers/${customerId}`); // Links to the created resource

    return (
      <>
        <tr>
          <td>{customer.email}</td>
          <td>{customer.firstname}</td>
          <td>{customer.lastname}</td>
          <td>
            <button className="btn" onClick={handleEdit}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </td>
        </tr>
      </>
    );
  } else return null;
}
