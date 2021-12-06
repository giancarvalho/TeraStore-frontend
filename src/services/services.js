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
  return axiosBase.post('/products/cart', { ids: idList });
}

function getFormDetails() {
  return axiosBase.get('/form-details');
}

function sendOrder(orderData, token) {
  return axiosBase.post('/order', orderData, createBearerAuth(token));
}

function createUser(userData) {
  return axiosBase.post('/sign-up', userData);
}

function authenticateUser(userData) {
  return axiosBase.post('/sign-in', userData);
}

function getCategoryProducts(categoryId) {
  return axiosBase.get(`/products/${categoryId}`);
}

export {
  getLastProducts,
  getCategoriesList,
  getSelectedProducts,
  getFormDetails,
  sendOrder,
  createUser,
  authenticateUser,
  getCategoryProducts,
};
