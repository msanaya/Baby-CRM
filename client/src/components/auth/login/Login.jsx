import React, { useState } from 'react';


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login">
      <form className="login" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3 className="login-title">Log in</h3>
        {
          error &&
          <p>{error}</p>
        }
        <label>
          <input
            className="login-input"
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </label>
        
          <button className="login-button">LOG IN</button>
        

      </form>
    </div>
  )
}