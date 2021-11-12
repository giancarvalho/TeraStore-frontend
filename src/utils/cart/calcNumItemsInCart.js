export default function calcNumItemsInCart(cart, itemId) {
  const number = cart.filter((item) => item === itemId).length;

  return number;
}
