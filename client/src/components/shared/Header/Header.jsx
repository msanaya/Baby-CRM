import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div class="header">
      <Link to='/' class="header-title">
      <h1 class="header-title">Da Haus.</h1>
      </Link>
      
      {
        currentUser &&
        
        <button onClick={handleLogout}>
          Logout
      </button>
      }
    </div>
  );
};

export default Header;