import React, { useState } from 'react';

const CreateCustomer = (props) => {
  
  const { customer, setCustomer, handleCustomerSubmit, isCreated } = props;

  const handleChange = (event) => {
    const { name, value } = event.target
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="create-customer-container">
      <h3>Customer Info</h3>
      {
        isCreated ?
          <div>
            <p>Customer Name: {customer.name}</p>
            <p>Customer Address: {customer.address}</p>
          </div>
          :
          <form
            onSubmit={handleCustomerSubmit}>
          <label>
            <input
              className='form-inputs'
              placeholder='Customer Name'
              type="text"
              value={customer.name}
              name='name'
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className='form-inputs'
              placeholder='Customer Address'
              type="text"
              value={customer.address}
              name='address'
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      }
    </div>
  );
};

export default CreateCustomer;