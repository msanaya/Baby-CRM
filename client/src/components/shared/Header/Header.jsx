import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header">
      <Link to='/' className="header-title">
      <h1 className="header-title">Da Haus.</h1>
      </Link>
      
      {
        currentUser &&
        
        <button id="logout-button" onClick={handleLogout}>
          Logout
      </button>
      }
    </div>
  );
};

export default Header;