import api from './api-config';

export const getAllSalespeople = async () => {
  const resp = await api.get('/salespeople');
  return resp.data;
}

export const createCustomer = async (salespersonData) => {
  const resp = await api.post('/salespeople', {salesperson: salespersonData});
  return resp.data;
}