import axiosBase from './axiosBase';

function getLastProducts() {
  return axiosBase.get('/products');
}

function getCategoriesList() {
  return axiosBase.get('/categories');
}

function getSelectedProducts(idList) {
  return axiosBase.get('/products', idList);
}

export { getLastProducts, getCategoriesList, getSelectedProducts };
