import React, { useState } from 'react';
import { createCustomer } from '../../../services/customers';
import { createSalesOrder } from '../../../services/sales_orders'
import ProductsAdd from '../../containers/productsAdd/ProductsAdd';
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

  const { products, setSalesOrder } = props;

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
    
  const handleSalesOrderSubmit = async (e) => {
    e.preventDefault()
    const {products, ...rest} = salesOrderData
    const newSalesOrder = await createSalesOrder({
      ...rest,
      products:products.map(p => p.id)
    })
    setSalesOrder(prevState => [...prevState,newSalesOrder])
  }


  const addProduct = (product) => {
    setSalesOrderData(prevState => ({
      ...prevState,
        products: [...prevState.products, product]
    }))
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
      <CreateSO
        salesOrderData={salesOrderData}
        handleSalesOrderSubmit={handleSalesOrderSubmit}
      />
      <ProductsAdd
        products={products}
        addProduct={addProduct}
      />

    </div>
  );
};

export default SalesOrderContainer;
