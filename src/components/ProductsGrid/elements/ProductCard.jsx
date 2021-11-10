/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';
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
  const [addItemToCart, setAddItemToCart] = useState(false);
  const [nItemsInCart, setnItemsInCart] = useState(0);

  function addToCart() {
    setAddItemToCart(true);
    setnItemsInCart(() => nItemsInCart + 1);
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
        <BuyButton>Buy</BuyButton>

        <CartButton onClick={() => addToCart()} clicked={addItemToCart}>
          <CSSTransition
            in={nItemsInCart}
            timeout={200}
            classNames="icon"
            key={productData.name}
          >
            <>
              {addItemToCart ? <BsCartCheck /> : <BsCartPlus />}

              {addItemToCart && <p> ({nItemsInCart})</p>}
            </>
          </CSSTransition>
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  );
}
