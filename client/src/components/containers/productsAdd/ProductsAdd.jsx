import React, { useState, useEffect } from 'react';
import ProductAdd from '../../../components/productAdd/ProductAdd';
import { getAllProducts } from '../../../services/products';
// import '../products/Products.css'


const Products = (props) => {
  const [allProducts, setAllProducts] = useState([])
  // const { products } = props;
  const { addProduct } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
      console.log(products)
    }
    fetchProducts()
  }, [])

  const productsMapped = allProducts.map((product, index) => (
    <ProductAdd
      product={product}
      key={index}
      addProduct={addProduct}
    />
  ));

  
  return (
  
    <div>
      <div className="all-products">
        <h1 id="products-title">Products</h1>
      </div>
      <div className="products">{productsMapped}</div>
      
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
