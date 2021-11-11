/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
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
  const [addItemToCart, setAddItemToCart] = useState(false);
  const [nItemsInCart, setnItemsInCart] = useState(0);

  function addItem() {
    addToCart(productData.id);
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

        <CartButton onClick={() => addItem()} clicked={addItemToCart}>
          <CSSTransition
            in={addItemToCart}
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
