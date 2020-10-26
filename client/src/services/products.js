import api from './api-config';

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

export const getProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}

export const updateProduct = async (id, product) => {
  try {
    const res = await api.put(`/products/${id}`, product);
    return res.data;
  } catch (error) {
    throw error;
  }
};