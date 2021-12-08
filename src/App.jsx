import React, { useState } from 'react';
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
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserContext from './contexts/UserContext';
import Category from './pages/Category';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  const [user, setUser] = useState({ token: null, name: '' });
  const storedCart = getCartFromStorage();
  const [cart, setCart] = useState(storedCart);
  const [isMobile] = useState(window.innerWidth < 600);

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
              <SignUp />
            </Route>
            <Route path="/sign-in" exact>
              <SignIn />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/category/:categoryId" exact>
              <Category />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>

            <Route path="/success/:id" exact>
              <SuccessPage />
            </Route>
          </CartContext.Provider>
        </UserContext.Provider>
      </Switch>
      <ToastContainer
        theme="dark"
        position={isMobile ? 'bottom-center' : 'top-center'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </Router>
  );
}

export default App;
