import React from 'react';
import '../product/Product.css';

const Product = (props) => {
  return (
    <div className="product-card">
       <img className="product-image" src={props.img} alt={props.name} />
        <h3 className="product-name">{props.name}</h3>
        {/* <p>${props.price}</p> */}
    </div>
  );
};

export default Product;