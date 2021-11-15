function filterSelectedAmount({ cart, itemId, amount }) {
  let deleteAmount = amount;
  const filteredCart = cart.filter((item) => {
    if (deleteAmount === 0) return true;
    if (item === itemId) {
      deleteAmount -= 1;
      return false;
    }
    return true;
  });

  return filteredCart;
}

function getCartFromStorage() {
  let storedCart = JSON.parse(localStorage.getItem('cart'));

  if (!storedCart) storedCart = [];
  return storedCart;
}

function calcNumItemsInCart(cart, itemId) {
  const number = cart.filter((item) => item === itemId).length;

  return number;
}

function saveCartToStorage(itemsList) {
  localStorage.setItem('cart', JSON.stringify(itemsList));
}

export {
  saveCartToStorage,
  calcNumItemsInCart,
  filterSelectedAmount,
  getCartFromStorage,
};
