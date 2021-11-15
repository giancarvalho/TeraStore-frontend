import axiosBase from './axiosBase';

function createBearerAuth(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getLastProducts() {
  return axiosBase.get('/products');
}

function getCategoriesList() {
  return axiosBase.get('/categories');
}

function getSelectedProducts(idList) {
  return axiosBase.post('/cart', { ids: idList });
}

function getFormDetails() {
  return axiosBase.get('/form-details');
}

function sendOrder(orderData) {
  return axiosBase.post('/order', orderData, createBearerAuth('dkfjdkfj'));
}

export {
  getLastProducts,
  getCategoriesList,
  getSelectedProducts,
  getFormDetails,
  sendOrder,
};
