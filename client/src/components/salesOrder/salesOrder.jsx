import React from 'react';
import { Link } from 'react-router-dom';
import '../salesOrder/salesOrder.css';
import { destroySalesOrder } from '../../services/sales_orders'


const salesOrder = (props) => {
  return (
    <div className="sales-order-container">
      <div className="sales-order-card">
        <p className="sales-order-id"><span>Sales Order ID:</span>{props.id}</p>
        <p className="sales-order-status"><span>Sales Order Status:</span>{props.status}</p>
      </div>
      <div className="sales-order-buttons">
      <Link to="/products/:id/edit">
                  <button id="edit-sales-order-button" type="submit">
                    Edit
                  </button>
                </Link>
        <button className="sales-order-button" onClick={() => destroySalesOrder(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default salesOrder;