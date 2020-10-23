import api from './api-config';

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}