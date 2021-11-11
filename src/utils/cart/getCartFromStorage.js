export default function getCartFromStorage() {
  let storedCart = JSON.parse(localStorage.getItem('cart'));

  if (!storedCart) storedCart = [];
  return storedCart;
}
