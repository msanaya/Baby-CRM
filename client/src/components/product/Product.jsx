import React from 'react';
import { Link } from 'react-router-dom';
import '../product/Product.css';

const Product = (props) => {
  // const { id } = props;
  return (
    <Link to={`/products/${props.id}`} className="link-product-page">
      <div className="product-card">
        <img className="product-image" src={props.img} alt={props.name} />
        <h3 className="product-name">{props.name}</h3>
        {/* <p>${props.price}</p> */}
        {/* <button className="edit-button"> */}
              {/* <Link className="edit-link" to={`/products/${props.id}/edit`}>
                Edit Product
            </Link> */}
            {/* </button> */}
      </div>
      </Link>
  );
};

export default Product;