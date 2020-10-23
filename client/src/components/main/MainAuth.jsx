import React from 'react';
import { Link } from "react-router-dom";
import CreateSO from '../screens/createSo/CreateSo';


const MainAuth = (props) => {

  const salesOrdersMapped = SalesOrders.map((salesOrder, index) =>
  <SalesOrders _id={salesOrder._id} name={product.name} price={product.price} key={index} /> THIS IS NOT RITE
)
  // add state for current user
  return (
    <div class="main-container">
      <h1 id="main-title">Da Haus.</h1>
      <h2 id="main-subtitle">Welcome, </h2>
      <div id="main-subcontainer">
        {salesOrdersMapped}
        </div>
      </div>
    </div>
  );
};

export default MainAuth;