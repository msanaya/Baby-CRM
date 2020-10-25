import React from 'react';
import { Link } from "react-router-dom";




const Main = (props) => {
  const { currentUser } = props

  // console.log(products)

  return (
    <div class="main-container">
      <h1 id="main-title">Da Hausdfgdf.</h1>
      <h2 id="main-subtitle">Welcome {currentUser?.name}</h2>
      { 
        currentUser ?
          <h2>Hello</h2>
          :
        <div id="main-buttons">
        <Link to="/login">
          <button class="main-button" type="submit">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button class="main-button" type="submit">
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

