import React, { useState } from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartContext from './contexts/CartContext';
import saveCartToStorage from './utils/cart/saveCartToStorage';
import getCartFromStorage from './utils/cart/getCartFromStorage';
import filterSelectedAmount from './utils/cart/filterSelectedAmount';

function App() {
  const storedCart = getCartFromStorage();
  const [cart, setCart] = useState(storedCart);

  function saveNewList(newCartList) {
    saveCartToStorage(newCartList);
    setCart([...newCartList]);
  }

  function deleteFromCart(itemId, amount) {
    const newCartList = filterSelectedAmount({ cart, itemId, amount });
    saveNewList(newCartList);
  }

  function addToCart(itemId) {
    const newCartList = [...cart, itemId];
    saveNewList(newCartList);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CartContext.Provider
            value={{
              cart,
              setCart,
              deleteFromCart,
              addToCart,
            }}
          >
            <Home />
          </CartContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
