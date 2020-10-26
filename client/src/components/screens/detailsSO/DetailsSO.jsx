import React, { useState, useEffect } from 'react';
import { getAllSalesOrders } from '../../services/sales_orders';
import SalesOrder from '../salesOrder/salesOrder';
import '../salesOrders/SalesOrders.css'

const SalesOrders = (props) => {
  const [allSalesOrders, setallSalesOrders] = useState([])

  useEffect(() => {
    const fetchSalesOrders = async () => {
      const salesOrders = await getAllSalesOrders()
      setallSalesOrders(salesOrders)
    }
    fetchSalesOrders()
  }, [])

  const salesOrdersMapped = allSalesOrders.map((salesOrders, index) => (
    <SalesOrder
      id={salesOrders.id}
      status={salesOrders.status}
      key={index}
    />
  ));

  
  return (
  
    <div className="sales-orders-container">
      <div className="sale-orders">{salesOrdersMapped}</div>
    </div>
  );
};


export default SalesOrders;