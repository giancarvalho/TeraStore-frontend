import axiosBase from './axiosBase';

function getLastProducts() {
  return axiosBase.get('/products');
}

function getCategoriesList() {
  return axiosBase.get('/categories');
}

function getSelectedProducts(idList) {
  return axiosBase.post('/cart', { ids: idList });
}

export { getLastProducts, getCategoriesList, getSelectedProducts };
