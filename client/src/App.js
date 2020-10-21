import React from 'react';
import Header from './components/shared/Header/Header';
import Main from './components/main/Main';
import Footer from './components/shared/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch> */}
        {/* <Route path='/login'> */}
          {/* <Login handleLogin={handleLogin} /> */}
        {/* </Route> */}
        {/* <Route path='/register'> */}
          {/* <Register handleRegister={handleRegister} /> */}
        {/* </Route> */}
        {/* <Route path='/'> */}
          <Main>
            {/* currentUser={currentUser} */}
          {/* handleLogout={handleLogout} */}
          </Main>
        {/* </Route> */}
        {/* <Route> */}
          {/* <CreateSO /> */}
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
      {/* </Switch> */}
      <Footer />
    </div >
  );
}

export default App;
