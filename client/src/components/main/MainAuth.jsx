import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import CreateSO from '../screens/createSo/CreateSo';
import { getAllProducts } from '../../services/products'



const MainAuth = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products);
      console.log(setAllProducts)
    };
    fetchProducts();
  }, []);

//   const salesOrdersMapped = SalesOrders.map((salesOrder, index) =>
//   <SalesOrders _id={salesOrder._id} name={product.name} price={product.price} key={index} /> 
// )
  // add state for current user
  return (
    <div class="main-container">
      <h1 id="main-title">This is Main Auth.</h1>
      <h2 id="main-subtitle">Welcome, </h2>
      <div id="main-subcontainer">
        {/* {salesOrdersMapped} */}
        </div>
    </div>
    {/* <Route> */}
    <CreateSO
    onSubmit={handleSubmit} /> 
    
    {/* </Route> */}
    {/* <Route> */}
      {/* <DetailsSO /> */}
    {/* </Route> */}
    {/* <Route> */}
      {/* <Products /> */}
    {/* </Route> */}
    {/* <Route> */}
      {/* <UpdateSO /> */}
    {/* </Route> */}
  );
};

export default MainAuth;