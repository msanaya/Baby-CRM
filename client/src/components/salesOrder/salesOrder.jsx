import React from 'react';
import '../salesOrder/salesOrder.css';
import { destroySalesOrder } from '../../services/sales_orders'

{() => destroySalesOrder(props.id)}
history.push('/');

const salesOrder = (props) => {
  return (
    <div className="sales-order-card">
      <p className="sales-order-id"><span>Sales Order ID:</span>{props.id}</p>
      <p className="sales-order-status"><span>Sales Order Status:</span>{props.status}</p>
      <button></button>
      <button className="delete-button" onClick={}>Delete</button>
    </div>
  );
};

export default salesOrder;