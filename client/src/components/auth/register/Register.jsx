import React, { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })
  const { username, email, password, name } = formData;
  const { error, handleRegister } = props;


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
        handleRegister(formData);
      }}>
        <h3 className="login-title">Register</h3>
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
            placeholder=" create username"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="text"
            value={name}
            name="name"
            placeholder="write name"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="text"
            value={email}
            name="email"
            placeholder="write email"
            onChange={handleChange}
          />
        </label>
        <label>
        <input
            className="login-input"
            type="password"
            value={password}
            name="password"
            placeholder="create password (min 8 characters)"
            onChange={handleChange}
          />
        </label>
        <button className="login-button">REGISTER</button>
      </form>
    </div>
  )
}