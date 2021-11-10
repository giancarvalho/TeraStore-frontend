import axiosBase from './axiosBase';

function getLastProducts() {
  return axiosBase.get('/products');
}

// eslint-disable-next-line import/prefer-default-export
export { getLastProducts };
