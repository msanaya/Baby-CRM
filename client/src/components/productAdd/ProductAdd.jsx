import React, { useState } from 'react';
import { addProduct } from '../../services/sales_orders';
import { useParams } from 'react-router-dom';
// import '../product/Product.css';

const ProductAdd = (props) => {
  const [productId, setProductId] = useState('');
  const { id } = useParams();
  const { addProduct } = props;

  

  return (
    <div className="product-add">
      <p className="product-name">{props.product.name}</p>
      <button onClick={() => addProduct(props.product)}>Add</button>
    </div>
  );
};

export default ProductAdd;

