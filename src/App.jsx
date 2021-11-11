import React, { useState } from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartContext from './contexts/CartContext';
import saveCartToStorage from './utils/cart/saveCartToStorage';
import getCartFromStorage from './utils/cart/getCartFromStorage';

function App() {
  const [cart, setCart] = useState(getCartFromStorage());

  function deleteFromCart(itemId) {
    const newCartList = cart.items.filter((item) => item !== itemId);

    setCart(newCartList);
  }

  function addToCart(itemId) {
    const newCartList = [...cart, itemId];
    saveCartToStorage(newCartList);
    setCart([...newCartList]);
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
