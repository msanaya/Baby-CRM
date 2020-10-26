import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom';
import { getAllProducts } from '../../services/products';
import { getAllCustomers } from '../../services/customers';
import { getAllSalespeople } from '../../services/salespeople';
import { getAllSalesOrders, updateSalesOrder } from '../../services/sales_orders';
import Products from '../screens/products/Products';
import SalesOrderContainer from '../containers/salesOrderContainer/SalesOrderContainer';
import SalesOrders from '../salesOrders/SalesOrders';
import DetailsSO from '../screens/detailsSO/DetailsSO';
import ProductEdit from '../screens/productEdit/ProductEdit';





const Main = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allSalespeople, setAllSalespeople] = useState([]);
  const [allCustomers, setAllCustomers] = useState([]);
  const [salesOrder, setSalesOrder] = useState([]);
  const history = useHistory();
  const { pathname } = useLocation();
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

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
      console.log(products)
    }
    const fetchSalespeople = async () => {
      const salespeople = await getAllSalespeople()
      setAllSalespeople(salespeople)
      console.log(salespeople)
    }
    const fetchCustomers = async () => {
      const customers = await getAllCustomers()
      setAllCustomers(customers)
      console.log(customers)
    }
    const fetchSalesOrders = async () => {
      const salesOrders = await getAllSalesOrders()
      setSalesOrder(salesOrders)
      console.log(salesOrders)
    }
    fetchProducts();
    fetchSalespeople();
    fetchCustomers();
    fetchSalesOrders();
  }, [])



  return (


    <div className="main-container">
      <h1 id="main-title">Da Haus. Dashboard</h1>
      <h2 class="main-subtitle">Welcome {currentUser?.name}</h2>
      <div id="main-buttons">
      </div>

      {
        currentUser ?
          <div className="auth-section">
            {pathname !== '/create_sales_order' &&
              <>
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
                </div>
              <SalesOrders  />
            </>
              
            }
            <Switch>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/products/:id/edit">
                <ProductEdit />
              </Route>
              <Route path="/create_sales_order">
                <SalesOrderContainer products={allProducts} setSalesOrder={setSalesOrder} />
              </Route>
              <Route path="/sales_orders/:id/edit">
                <DetailsSO  />
              </Route>
            </Switch>
          </div>

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

