import React from 'react';
import { Link } from 'react-router-dom';
import '../salesOrder/salesOrder.css';
import { destroySalesOrder } from '../../services/sales_orders'


const salesOrder = (props) => {
  return (
    <div className="sales-order-card">
      <p className="sales-order-id"><span>Sales Order ID:</span>{props.id}</p>
      <p className="sales-order-status"><span>Sales Order Status:</span>{props.status}</p>
      <Link to="/sales_orders/:id/edit">
                  <button>
                    Edit
                  </button>
                </Link>
      <button className="delete-button" onClick={() => destroySalesOrder(props.id)}>Delete</button>
    </div>
  );
};

export default salesOrder;