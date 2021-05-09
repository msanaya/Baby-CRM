// import React, { useState, useEffect } from 'react';
// import { Route, Switch, useHistory, Link } from 'react-router-dom';
// import { getAllProducts } from '../../services/products';
// import { getAllCustomers } from '../../services/customers';
// import { getAllSalespeople } from '../../services/salespeople';
// import { createSalesOrder, updateSalesOrder } from '../../services/sales_orders';
// import Products from '../screens/products/Products';
// import CreateSO from '../../components/screens/createSO/CreateSO'





const Main = (props) => {
  // const [allProducts, setAllProducts] = useState([]);
  // const [allSalespeople, setAllSalespeople] = useState([]);
  // const [allCustomers, setAllCustomers] = useState([]);
  // const [salesOrder, setSalesOrder] = useState([]);
  // const history = useHistory();
  const { currentUser } = props;

  ///CREATE///

  // const handleSalesOrderCreate = async (SalesOrderData) => {
  //   const newSalesOrder = await createSalesOrder(SalesOrderData);
  //   setSalesOrder(prevState => ([...prevState, newSalesOrder]));
  //   history.push('/')
  // }

  ///EDIT///

  // const handleSalesOrderUpdate = async (id, SalesOrderData) => {
  //   const updatedSalesOrder = await updateSalesOrder(id, SalesOrderData);
  //   setSalesOrder(prevState => prevState.map(salesOrder => {
  //     return salesOrder.id === Number(id) ? updatedSalesOrder : salesOrder
  //   }))
  //   history.push('/')
  // }

  //DELETE//

  // const handleSalesOrderDelete = async (id, SalesOrderData) => {
  //   const deletedSalesOrder = await deletedSalesOrder(id, SalesOrderData);
  //   setSalesOrder
  // }

  ///BRINGING DATA IN///

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getAllProducts()
  //     setAllProducts(products)
  //     console.log(products)
  //   }
  //   const fetchSalespeople = async () => {
  //     const salespeople = await getAllSalespeople()
  //     setAllSalespeople(salespeople)
  //     console.log(salespeople)
  //   }
  //   const fetchCustomers = async () => {
  //     const customers = await getAllCustomers()
  //     setAllCustomers(customers)
  //     console.log(customers)
  //   }
  //   fetchProducts();
  //   fetchSalespeople();
  //   fetchCustomers();
  // }, [])



  return (


    <div className="main-container">
      <h1 id="main-title">Da Haus.</h1>
      <h2 className="main-subtitle">Welcome {currentUser?.name}</h2>
      <h3 id="main-h3">Hello, thanks for stopping by! The site is currently being redone. Check back soon.</h3>
      <img id="main-border" src="watercolorBorder.png" alt="Watercolor border" />
    </div>

  )
};

export default Main