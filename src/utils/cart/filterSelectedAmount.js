export default function filterSelectedAmount({ cart, itemId, amount }) {
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
