import axiosBase from './axiosBase';

function getLastProducts() {
  return axiosBase.get('/products');
}

function getCategoriesList() {
  return axiosBase.get('/categories');
}

// eslint-disable-next-line import/prefer-default-export
export { getLastProducts, getCategoriesList };
