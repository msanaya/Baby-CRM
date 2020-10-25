import React, { useState, useEffect } from 'react';
import a from '../../product/Product';
import { getAllProducts } from '../../../services/products';
import '../products/Products.css'

const salesOrders = () => {
  const [allSalesOrders, setallSalesOrders] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
      console.log(products)
    }
    fetchProducts()
  }, [])

  const productsJSX = allProducts.map((product, index) => (
    <Product
      img={product.img}
      name={product.name}
      key={index}
    />
  ));

  
  return (
  
    <div>
      <div className="all-products">
        <h1 id="products-title">Products</h1>
      </div>
      <div className="products">{productsJSX}</div>
    </div>
      
    
  );
};


export default salesOrders;