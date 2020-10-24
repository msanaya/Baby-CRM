import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Main from './components/main/Main';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register'
import MainAuth from './components/main/MainAuth'
import Footer from './components/shared/Footer/Footer';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

///LOGIN STUFF///
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



  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/auth/main'>
          <MainAuth />
        </Route>
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
