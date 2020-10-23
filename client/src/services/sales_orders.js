import api from './api-config'

export const getAllSalesOrders = async () => {
  const resp = await api.get('/sales_orders');
  return resp.data;
}

export const getOneSalesOrder = async (id) => {
  const resp = await api.get(`/sales_orders/${id}`);
  return resp.data;
}

export const createSalesOrder = async (salesOrderData) => {
  const resp = await api.post('/sales_orders', {sales_order: salesOrderData});
  return resp.data;
}

export const updateSalesOrder = async (id, salesOrderData) => {
  const resp = await api.put(`/sales_orders/${id}`, {sales_order: salesOrderData});
  return resp.data;
}

export const destroySalesOrder = async (id) => {
  const resp = await api.delete(`/sales_orders/${id}`);
  return resp;
}

export const addProduct = async(salesOrderId, productId) => {
  const resp = await api.put(`/products/${productId}/sales_orders/${salesOrderId}`);
  return resp.data;
}

export const addCustomer = async(salesOrderId, customerId) => {
  const resp = await api.put(`/customers/${customerId}/sales_orders/${salesOrderId}`);
  return resp.data;
}

export const addSalesperson = async(salesOrderId, salespersonId) => {
  const resp = await api.put(`/salespeople/${salespersonId}/sales_orders/${salesOrderId}`);
  return resp.data;
}