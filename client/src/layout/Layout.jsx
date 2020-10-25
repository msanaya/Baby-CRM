import React from 'react';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer'


const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;












