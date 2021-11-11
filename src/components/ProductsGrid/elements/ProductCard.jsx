/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import CartContext from '../../../contexts/CartContext';

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
  const { addToCart } = useContext(CartContext);
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [nItemsInCart, setnItemsInCart] = useState(0);
  const history = useHistory();

  function addItem() {
    addToCart(productData.id);
    setIsAddBtnClicked(true);
    setnItemsInCart(() => nItemsInCart + 1);
  }

  function buyItem() {
    addToCart(productData.id);
    history.push('/checkout');
  }
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

        <CartButton onClick={() => addItem()} clicked={isAddBtnClicked}>
          <CSSTransition
            in={isAddBtnClicked}
            timeout={200}
            classNames="icon"
            key={productData.name}
          >
            <>
              {isAddBtnClicked ? <BsCartCheck /> : <BsCartPlus />}

              {isAddBtnClicked && <p> ({nItemsInCart})</p>}
            </>
          </CSSTransition>
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  );
}
