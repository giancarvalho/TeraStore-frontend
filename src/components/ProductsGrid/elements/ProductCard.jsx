/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';

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

const ProductContainer = styled.li`
  img {
    height: 150px;
    width: 100%;
    border-radius: 4px 4px 0 0;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  background-color: #1c1c1c;
`;

const Title = styled.h2`
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const ButtonsContainer = styled.div`
  display: flex;

  button {
    border: none;
    height: 26px;
    font-weight: 700;
    cursor: pointer;

    :hover {
      filter: brightness(1.25);
    }
  }
`;

const BuyButton = styled.button`
  width: 55%;
  background-color: #76b900;
  border-radius: 0 0 0 4px;
`;

const CartButton = styled.button`
  width: 45%;
  background: linear-gradient(to right, #0087d4 50%, #00d9ff 50%) left;
  background-size: 200%;
  background-position: ${({ clicked }) => (clicked ? 'right' : 'left')};
  transition: 0.2s ease-out;
  border-radius: 0 0 4px 0;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-enter {
    opacity: 0;
  }
  .icon-exit {
    opacity: 1;
  }
  .icon-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in;
  }
  .icon-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  p {
    font-size: 12px;
  }
`;
