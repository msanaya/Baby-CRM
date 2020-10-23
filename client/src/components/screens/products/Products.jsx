import React from 'react';
import { Link } from "react-router-dom";

const Products = (props) => {
  const [currentUser, setCurrentProducts] = useState([])
  
  return (
    <div class="main-container">
      <h1 id="main-title">Da Haus.</h1>
      <h2 id="main-subtitle">Welcome, </h2>
      <div id="main-subcontainer">
        {
        products.map((product, index) => (
        <img class="product-cards" key={index} alt="Item not available"  src={product.img} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;

{
  flavors.map(flavor => (
    <p key={flavor.id}>{flavor.name}</p>
  ))
}
const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )
