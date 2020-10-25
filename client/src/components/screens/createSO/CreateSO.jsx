import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import Products from '../screens/products/Products';
import { destroySalesOrder, createSalesOrder } from '../../../services/sales_orders';
import '../createSO/CreateSO.css'


const CreateSO = (props) => {
  const [isCreated, setCreated] = useState(false)
  const [salesOrder, setSalesOrder] = useState({
    salespersonName: '',
    customerName: '',
    customerAddress: '',
    productName: '',
    productDescription: '',
    productQty: '',
    productPrice: '',
    status: '',
  })

  ///CHANGING STATE TO NEW INFO USING SPREAD OPERATOR//
  const handleChange = (event) => {
    const { name, value } = event.target
    setSalesOrder({
      ...salesOrder,
      [name]: value
    })
  }

  ///PREVENT DEFAULT///
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createSalesOrder(salesOrder)
    setCreated({ created })
  }

  ///COULD USE HISTORY PUSH?///
  if (isCreated) {
    return (
      History.push('/')
    )
  }


  //   const productsMapped = Products.map((product, index) =>
  //   <Product _id={product._id} name={product.name} price={product.price} key={index} />
  // )
  // add state for current user
  return (


    <div>
      <div className="sales-order-container">
        <h1 id="products-title">Sales Order</h1>
      </div>
      <div className="form-container">
      <form
            className="form-inputs"
            onSubmit={handleSubmit} > 
              <label>
              <input
                placeholder='Salesperson Name'
                type="text"
                value={salesOrder.salespersonName}
                name='salespersonName'
                onChange={handleChange}
              />
              </label>
              <label>
              <input
                placeholder='Customer Name'
                type="text"
                value={salesOrder.customerName}
                name='customerName'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Customer Address'
                type="text"
                value={salesOrder.customerAddress}
                name='customerAddress'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Product Name'
                type="text"
                value={salesOrder.productName}
                name='productName'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Product Description'
                type="text"
                value={salesOrder.productDescription}
                name='productDescription'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Product Qty'
                type="text"
                value={salesOrder.productQty}
                name='productQty'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Product Price'
                type="text"
                value={salesOrder.productPrice}
                name='productPrice'
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                placeholder='Status'
                type="text"
                value={salesOrder.status}
                name='status'
                onChange={handleChange}
              />
              </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
          // <button className="delete-button"
          //   onClick={() => destroySalesOrder(salesOrder.id)}>Delete</button> 
  );
};

export default CreateSO;