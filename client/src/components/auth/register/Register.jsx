import React, { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { username, email, password } = formData;
  const { error, handleRegister } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div class="login">
      <form class="login" onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <h3 class="login-title">Register</h3>
        {
          error &&
          <p>{error}</p>
        }
        <label>
          <input
            class="login-input"
            type="text"
            value={username}
            name="username"
            placeholder=" create username"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            class="login-input"
            type="text"
            // value={salesperson_name}
            name="salesperson_name"
            placeholder="write name"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            class="login-input"
            type="text"
            value={email}
            name="email"
            placeholder="write email"
            onChange={handleChange}
          />
        </label>
        <label>
        <input
            class="login-input"
            type="password"
            value={password}
            name="password"
            placeholder="create password (min 8 characters)"
            onChange={handleChange}
          />
        </label>
        <button class="login-button">REGISTER</button>
      </form>
    </div>
  )
}