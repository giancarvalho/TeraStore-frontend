/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState, useEffect } from 'react';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CartContext from '../../../contexts/CartContext';
import calcNumItemsInCart from '../../../utils/cart/calcNumItemsInCart';

import {
  ProductContainer,
  CartButton,
  BuyButton,
  ButtonsContainer,
  DetailsContainer,
  Price,
  Title,
} from './StylesProductCard';

export default function ProductCard({ productData }) {
  const history = useHistory();
  const { addToCart, deleteFromCart, cart } = useContext(CartContext);
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [nItemsInCart, setnItemsInCart] = useState(0);

  useEffect(() => {
    const numItems = calcNumItemsInCart(cart, productData.id);
    setIsAddBtnClicked(numItems > 0);
    setnItemsInCart(numItems);
  }, [cart]);

  function addItem() {
    addToCart(productData.id);
    setIsAddBtnClicked(true);
    setnItemsInCart(() => nItemsInCart + 1);
  }

  function buyItem() {
    addToCart(productData.id);
    history.push('/checkout');
  }

  console.log('card rerendered');

  return (
    <ProductContainer>
      <img src={productData.image} alt="cooler" />
      <DetailsContainer>
        <Title>{productData.name}</Title>
        <Price>
          R$
          {productData.price}
        </Price>
      </DetailsContainer>
      <ButtonsContainer>
        <BuyButton onClick={() => buyItem()}>Buy</BuyButton>
        <BuyButton onClick={() => deleteFromCart(productData.id, 3)}>
          Del
        </BuyButton>
        <CartButton onClick={() => addItem()} clicked={isAddBtnClicked}>
          <SwitchTransition>
            <CSSTransition
              in={isAddBtnClicked}
              timeout={200}
              classNames="icon"
              key={isAddBtnClicked ? productData.name : productData.id}
            >
              <>
                {isAddBtnClicked ? <BsCartCheck /> : <BsCartPlus />}

                {isAddBtnClicked && <p> ({nItemsInCart})</p>}
              </>
            </CSSTransition>
          </SwitchTransition>
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  );
}
