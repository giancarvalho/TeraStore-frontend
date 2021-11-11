export default function saveCartToStorage(itemsList) {
  localStorage.setItem('cart', JSON.stringify(itemsList));
}
