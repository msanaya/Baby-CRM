import React, { useState } from 'react';
import { createCustomer } from '../../../services/customers';
import CreateSO from '../../screens/createSO/CreateSO';
import CreateCustomer from '../createCustomer/CreateCustomer';

const SalesOrderContainer = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [salesOrderData, setSalesOrderData] = useState({
    customer_id: '',
    products: [],
    status: 'Submitted',
  });

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
  })

  const { products } = props;

  ///FUNCTIONS///
  const handleCustomerSubmit = async (e) => {
      e.preventDefault()
      const customerData = await createCustomer(customer)
      setCustomer(customerData)
      setSalesOrderData(prevState => ({
        ...prevState,
        customer_id: customerData.id 
      }))
    setCreated(true);
    }
    
  
   ///PREVENT DEFAULT///
  //  const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const created = await createSalesOrder(salesOrder)
  //   setCreated({ created })
  // }

  return (
    <div>
      <CreateCustomer
        customer={customer}
        setCustomer={setCustomer}
        handleCustomerSubmit={handleCustomerSubmit}
        isCreated={isCreated}
        setCreated={setCreated}
      />
      <CreateSO salesOrderData={salesOrderData} />
      {/* <ProductsAdd products={products} /> */}

    </div>
  );
};

export default SalesOrderContainer;
