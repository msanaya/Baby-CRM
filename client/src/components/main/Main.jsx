import React from 'react';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div class="main-container">
      <h1 id="main-title">Da Haus.</h1>
      <h2 id="main-subtitle">Welcome</h2>
      <div id="main-buttons">
        <Link to="/login">
          <button class="main-button" type="submit">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button class="main-button"  type="submit">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;