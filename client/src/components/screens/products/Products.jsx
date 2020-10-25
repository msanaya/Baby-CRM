import React, { useState, useEffect } from 'react';
import Product from '../../product/Product';
import { getAllProducts } from '../../../services/products';
import '../products/Products.css'


const Products = (props) => {
  const [allProducts, setAllProducts] = useState([])

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

export default Products;

// {
//   flavors.map(flavor => (
//     <p key={flavor.id}>{flavor.name}</p>
//   ))
// }
// const productsJSX = queriedProducts.map((product, index) =>
//     <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
//   )
