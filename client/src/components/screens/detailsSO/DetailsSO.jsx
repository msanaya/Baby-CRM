import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { getAllSalesOrders, updateSalesOrder, getOneSalesOrder } from '../../../services/sales_orders';



const DetailsSO = (props) => {

  
  const [salesOrderData, setSalesOrderData] = useState({
    customer_id: '',
    products: [],
    status: 'Submitted',
  });

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
  })

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  ///FUNCTIONS///

  useEffect(() => {
    const fetchSalesOrder = async () => {
      const salesOrder = await getOneSalesOrder(id)
      setSalesOrderData(salesOrder)
      console.log(salesOrder)
    }
    fetchSalesOrder()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSalesOrderData({
      ...salesOrderData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateSalesOrder(id, salesOrderData);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={'/'} />;
  }

  const handleSalesOrderUpdate = async (e) => {
    e.preventDefault()
    let { id } = props.match.params;
    const updated = await updateSalesOrder(customer)
    props.setSalesOrderData(prevState => ({
      ...prevState,
      salesOrderData: setSalesOrderData.id
    }))
    setUpdated(true);
  }

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setCustomer(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }


  return (
    <div>
      <h2>Edit Sales Order</h2>
      {/* {
        salesOrderData.map(salesOrders => (
          <div key={salesOrders.id}>
            <form>
              <input
              className='edit-form-inputs'
              placeholder='Customer Name'
              type="text"
              value={customer.name}
              name='name'
              onChange={handleChange}
              />
            </form>
          </div>
        )
        )
      } */}
      {/* <button onClick={handleSalesOrderUpdate}>Submit Sales Order</button> */}
    </div>
  );
};

export default DetailsSO;
