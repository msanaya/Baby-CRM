import api from './api-config';

export const getAllCustomers = async () => {
  const resp = await api.get('/customers');
  return resp.data;
}

export const createCustomer = async (customerData) => {
  const resp = await api.post('/customer', {customer: customerData});
  return resp.data;
}