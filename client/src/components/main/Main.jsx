import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import { getAllProducts } from '../../services/products';
import Products from '../screens/products/Products';
import CreateSO from '../../components/screens/createSO/CreateSO'




const Main = (props) => {
  const [allProducts, setAllProducts] = useState([])
  const { currentUser } = props;


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
      console.log(products)
    }
    fetchProducts()
  }, [])



  return (


    <div className="main-container">
      <h1 id="main-title">Da Haus.</h1>
      <h2 class="main-subtitle">Welcome {currentUser?.name}</h2>
      <div id="main-buttons">

        {/* <button onClick={getData}>Get Data</button> */}
      </div>

      {
        currentUser ?
          <div className="auth-buttons">
            <Link to="/create_sales_order">
              <button className="menu-button" type="submit">
                Create Sales Order
          </button>
            </Link>
            <Link to="/products">
              <button className="menu-button" type="submit">
                Products
          </button>
            </Link>
            <Switch>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/create_sales_order">
                <CreateSO />
              </Route>
            </Switch>
          </div>
          // <React.Fragment>

          // </React.Fragment>

          :
          <div className="main-buttons">
            <Link to="/login">
              <button className="main-button" type="submit">
                Login
            </button>
            </Link>
            <Link to="/register">
              <button className="main-button" type="submit">
                Register
          </button>
            </Link>
          </div>
      }

      {/* <Switch> */}
      {/* <Route to="/products"> */}
      {/* <Products /> */}
      {/* </Route> */}
      {/* </Switch> */}



    </div>

  );
};

export default Main;






// const MainAuth = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = await getAllProducts()
//       setAllProducts(products);
//       console.log(setAllProducts)
//     };
//     fetchProducts();
//   }, []);

//   const salesOrdersMapped = SalesOrders.map((salesOrder, index) =>
//   <SalesOrders _id={salesOrder._id} name={product.name} price={product.price} key={index} /> 
// )
  // add state for current user
  // return (
  //   <div class="main-container">
  //     <h1 id="main-title">This is Main Auth.</h1>
  //     <h2 id="main-subtitle">Welcome, </h2>
  //     <div id="main-subcontainer">
  //       {/* {salesOrdersMapped} */}
  //       </div>
  //   </div>
    // <CreateSO
    // onSubmit={handleSubmit} /> 

  //   </Route> */}
  //    <Route> */}
  //     <DetailsSO /> */}
  //   </Route> */}
  //    <Route> */}
  //      <Products /> */}
  //   </Route> */}
  //   <Route> */}
  //      <UpdateSO /> */}
  //  </Route> */}
//     );
// };

