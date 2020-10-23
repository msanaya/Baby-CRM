import React, { useState, useEffect } from 'react';
import Header from './components/shared/Header/Header';
import Main from './components/main/Main';
import Footer from './components/shared/Footer/Footer';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register'
import { Route, Switch, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getAllProducts } from '../../services/products'

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allProducts, setAllProducts] = useState([])
  const history = useHistory();

// LOGIN STUFF //
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  //////////////////////////////
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
      setQueriedProducts(products)
    }
    fetchProducts()
  }, [])

  const handleSubmit = event => event.preventDefault()

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
          <Main>
            currentUser={currentUser}
          handleLogout={handleLogout}
          </Main>
        </Route>
        {/* <Route> */}
        {/* <CreateSO
        onSubmit={handleSubmit} /> */}
        
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
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
