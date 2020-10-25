import React from 'react';
// import '../product/Product.css';

const salesOrder = (props) => {
  return (
    <div className="salesOrder-card">
      <h3 className="salesOrder-id">{props.id}</h3>
      <h3 className="salesOrder-status">{props.status}</h3>
    </div>
  );
};

export default salesOrder;