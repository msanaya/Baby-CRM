import React from 'react';
 import '../salesOrder/salesOrder.css';

const salesOrder = (props) => {
  return (
    <div className="sales-order-card">
      <p className="sales-order-id"><span>Sales Order ID:</span>{props.id}</p>
      <p className="sales-order-status"><span>Sales Order Status:</span>{props.status}</p>
    </div>
  );
};

export default salesOrder;