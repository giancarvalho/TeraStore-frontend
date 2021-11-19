import React, { useState, useCallback } from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartContext from './contexts/CartContext';
import {
  saveCartToStorage,
  filterSelectedAmount,
  getCartFromStorage,
} from './utils/cart/cart';
import Checkout from './pages/checkout/Checkout';
import ScrollToTop from './hooks/ScrollToTop';
import SuccessPage from './pages/SuccessPage';
import Alert from './components/alert/Alert';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserContext from './contexts/UserContext';
import Category from './pages/Category';

function App() {
  const [user, setUser] = useState({ token: null, name: '' });
  const storedCart = getCartFromStorage();
  const [cart, setCart] = useState(storedCart);
  const [alert, setAlert] = useState({
    status: false,
    message: '',
    error: false,
  });

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

  const sendAlert = useCallback((details) => {
    setAlert({ status: true, ...details });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider
            value={{
              cart,
              setCart,
              deleteFromCart,
              addToCart,
            }}
          >
            <Route path="/sign-up" exact>
              <SignUp sendAlert={sendAlert} />
            </Route>
            <Route path="/sign-in" exact>
              <SignIn sendAlert={sendAlert} />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/category/:categoryId" exact>
              <Category />
            </Route>
            <Route path="/checkout" exact>
              <Checkout sendAlert={sendAlert} />
            </Route>

            <Route path="/success/:id" exact>
              <SuccessPage />
            </Route>
          </CartContext.Provider>
        </UserContext.Provider>
      </Switch>
      <Alert alert={alert} setAlert={setAlert} />
    </Router>
  );
}

export default App;
